// Sets the asset version that index.html and the script loaders append as ?v=…, so browsers fetch changed
// styles and scripts instead of a cached copy. Run before committing app changes: npm run bump-version
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const now = new Date();
const pad = n => String(n).padStart(2, '0');
const version = process.argv[2] || now.getFullYear() + pad(now.getMonth() + 1) + pad(now.getDate()) + pad(now.getHours()) + pad(now.getMinutes());

const indexFile = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexFile, 'utf8');
// Local stylesheet and script tags (not CDN links).
html = html.replace(/(<link rel="stylesheet" href="|<script src=")([\w.-]+\.(?:css|js))(?:\?v=[\w.-]+)?"/g, (m, head, file) => head + file + '?v=' + version + '"');
fs.writeFileSync(indexFile, html);

const profileFile = path.join(ROOT, 'lang-profile.js');
let profile = fs.readFileSync(profileFile, 'utf8');
if (!/assetVersion: '[\w.-]*'/.test(profile)) throw new Error('lang-profile.js has no assetVersion field');
profile = profile.replace(/assetVersion: '[\w.-]*'/, "assetVersion: '" + version + "'");
fs.writeFileSync(profileFile, profile);

console.log('Asset version ' + version);
