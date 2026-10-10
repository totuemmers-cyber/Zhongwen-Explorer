// Unit plan for the reading and listening units: per level 10 reading + 6 listening units, each assigned a task of
// the syllabus (任务大纲) that has a reading resp. listening descriptor, spread over as many different tasks as
// possible, with candidate topics (话题大纲) that share words with the task. Writes scripts/comprehension/plan.json;
// authors take task, descriptor and topic from there. Re-running keeps the plan stable (deterministic).
// Usage: node scripts/comprehension/plan.cjs
const fs = require('fs');
const path = require('path');

const COUNTS = { reading: 10, listening: 6 };
const LEVELS = ['1', '2', '3', '4', '5', '6', '7-9'];
const tasks = require('../hsk2025/tasks.json').tasks;
const topics = require('../hsk2025/topics.json').topics;

// Words shared by a task title / descriptor and a topic (two-character overlaps).
function overlap(a, b) {
  let n = 0;
  for (let i = 0; i + 1 < a.length; i++) if (/\p{Script=Han}{2}/u.test(a.slice(i, i + 2)) && b.includes(a.slice(i, i + 2))) n++;
  return n;
}

const plan = [];
for (const level of LEVELS) {
  const levelTasks = tasks.filter(t => t.level === level);
  const levelTopics = topics.filter(t => t.level === level);
  for (const skill of ['reading', 'listening']) {
    const usable = levelTasks.map(t => ({ task: t, descriptor: t.descriptors.find(d => d.skills.includes(skill)) })).filter(x => x.descriptor);
    // Even spread over the level's tasks: every k-th usable task, starting in the middle of the first stride.
    const count = COUNTS[skill];
    const stride = usable.length / count;
    for (let i = 0; i < count; i++) {
      const { task, descriptor } = usable[Math.min(usable.length - 1, Math.floor(stride * i + stride / 2))];
      const scored = levelTopics.map(t => ({ t, score: overlap(task.title + descriptor.text, t.tier2 + t.tier3) }))
        .filter(x => x.score > 0).sort((a, b) => b.score - a.score).slice(0, 3);
      const levelName = level === '7-9' ? 'HSK7-9' : 'HSK' + level;
      plan.push({
        id: skill + '-' + levelName.toLowerCase() + '-' + String(i + 1).padStart(2, '0'),
        level: levelName, skill, order: i + 1,
        task: { no: task.no, title: task.title, scene: task.scene },
        descriptor: descriptor.text,
        topics: scored.map(x => x.t.tier1 + '›' + x.t.tier2 + '›' + x.t.tier3)
      });
    }
  }
}
fs.writeFileSync(path.join(__dirname, 'plan.json'), JSON.stringify(plan, null, 1) + '\n');
const repeated = {};
for (const u of plan) repeated[u.level + ' ' + u.task.no] = (repeated[u.level + ' ' + u.task.no] || 0) + 1;
console.log(plan.length + ' units planned; tasks used twice or more: ' + Object.entries(repeated).filter(([, n]) => n > 1).length);
