// The authored comprehension units: scripts/comprehension/<level>.json (hsk1 … hsk6, hsk7-9), loading and writing
// them in plan order (reading units first, then listening, each by order).
const fs = require('fs');
const path = require('path');

const LEVELS = ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6', 'HSK7-9'];
const fileOf = level => path.join(__dirname, level.toLowerCase() + '.json');

function loadLevel(level) {
  return fs.existsSync(fileOf(level)) ? JSON.parse(fs.readFileSync(fileOf(level), 'utf8')) : [];
}
const loadAll = () => LEVELS.flatMap(loadLevel);

function writeLevel(level, units) {
  const skillRank = { reading: 0, listening: 1 };
  const sorted = units.slice().sort((a, b) => skillRank[a.skill] - skillRank[b.skill] || a.order - b.order);
  fs.writeFileSync(fileOf(level), JSON.stringify(sorted, null, 1) + '\n');
}

module.exports = { LEVELS, fileOf, loadLevel, loadAll, writeLevel };
