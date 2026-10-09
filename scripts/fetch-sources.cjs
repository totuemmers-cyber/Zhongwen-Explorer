// Downloads the external sources listed in scripts/sources.json into .content-cache/sources/
// and verifies them against their pinned SHA-256. Manual sources are only checked.
// Usage: node scripts/fetch-sources.cjs [--pin]   (--pin records hashes of the current files)
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const MANIFEST = path.join(__dirname, 'sources.json');
const DIR = path.join(ROOT, '.content-cache', 'sources');

const sha256 = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

async function download(url, target) {
  const response = await fetch(url, { redirect: 'follow' });
  if (!response.ok) throw new Error('HTTP ' + response.status + ' for ' + url);
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(target + '.part', buffer);
  fs.renameSync(target + '.part', target);
}

async function main(args) {
  const pin = args.includes('--pin');
  const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  fs.mkdirSync(DIR, { recursive: true });
  const problems = [];
  for (const source of manifest.sources) {
    const target = path.join(DIR, source.file);
    if (!fs.existsSync(target)) {
      if (source.manual) {
        problems.push('Missing manual download ' + source.file + ': get it from ' + source.url + ' (scripted access is not allowed) and save it to ' + DIR);
        continue;
      }
      process.stdout.write('Downloading ' + source.id + ' … ');
      await download(source.url, target);
      console.log('done');
    }
    // Archives are unpacked next to themselves (e.g. the CC-CEDICT snapshot from the Debian archive).
    if (source.extract && !fs.existsSync(path.join(DIR, source.extract))) {
      require('child_process').execFileSync('tar', ['-xJf', source.file, source.extract], { cwd: DIR });
    }
    const hash = sha256(target);
    if (pin) {
      source.sha256 = hash;
      source.bytes = fs.statSync(target).size;
      source.retrieved = source.retrieved || new Date().toISOString().slice(0, 10);
    } else if (source.sha256 && source.sha256 !== hash) {
      problems.push(source.id + ': hash changed (expected ' + source.sha256 + ', got ' + hash + '). Re-pin only after reviewing the new version.');
    } else if (!source.sha256) {
      problems.push(source.id + ': no pinned hash yet; run with --pin.');
    }
  }
  if (pin) fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
  if (problems.length) {
    console.error(problems.join('\n'));
    process.exitCode = 1;
    return;
  }
  console.log('All ' + manifest.sources.length + ' sources present' + (pin ? ' and pinned.' : ' and verified.'));
}

main(process.argv.slice(2)).catch(error => { console.error(error.message); process.exitCode = 1; });
