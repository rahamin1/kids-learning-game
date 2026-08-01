#!/usr/bin/env node
/*
 * Pre-publish difficulty check.
 *
 * Usage:
 *   node scripts/audit-game-levels.js shapes fractions
 *
 * Pass every game that was added or whose question bank changed. The command
 * exits with an error when two adjacent levels create the same logical pool.
 * Answer order is ignored, because it is intentionally shuffled in the app.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const requestedIds = process.argv.slice(2);
const extendedIds = new Set([
  "count", "number-quantity", "more-groups", "number-sequence", "number-line",
  "addition", "picture-subtraction", "multiplication", "clock", "word-problems",
  "visual-pattern"
]);
const fiveLevelIds = new Set(["shapes", "life-cycle", "plant-parts", "animal-food", "weather", "cause-effect"]);
const maxLevel = id => extendedIds.has(id) ? 15 : fiveLevelIds.has(id) ? 5 : 9;

// Stable randomness makes the generated pools reproducible while preserving
// the same code path that runs in the browser.
const stableMath = Object.create(Math);
stableMath.random = () => 0.42;
const context = vm.createContext({
  window: {},
  console,
  Math: stableMath,
  Set,
  Map,
  Array,
  Object,
  String,
  Number,
  Boolean,
  JSON
});

["games.js", "difficulty-levels.js", "expanded-question-banks.js"].forEach(file => {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
});

const games = context.window.KIDS_GAMES;
if (!games) throw new Error("Could not load KIDS_GAMES.");

function stable(value) {
  if (Array.isArray(value)) return `[${value.map(stable).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${stable(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function logicalQuestion(question) {
  const fields = ["q", "correct", "visual", "mode", "tokens", "joinWith", "word", "grid", "numberLine", "groups"];
  const item = {};
  fields.forEach(field => { if (question[field] !== undefined) item[field] = question[field]; });
  if (Array.isArray(question.a)) item.answers = [...question.a].sort();
  return item;
}

function signature(pool) {
  return pool.map(logicalQuestion).map(stable).sort().join("\n");
}

const catalog = games.catalog.filter(game => !game.disabled);
const targets = requestedIds.length
  ? requestedIds.map(id => catalog.find(game => game.id === id) || { id, name: id })
  : catalog;
const failures = [];

targets.forEach(game => {
  const signatures = [];
  for (let level = 1; level <= maxLevel(game.id); level += 1) {
    const pool = games.build(game.id, level, { age: 8 }) || [];
    signatures.push(signature(pool));
  }
  for (let index = 1; index < signatures.length; index += 1) {
    if (signatures[index] === signatures[index - 1]) {
      failures.push(`${game.id}: levels ${index} and ${index + 1} have identical logical question pools`);
    }
  }
});

if (failures.length) {
  console.error("Difficulty-level audit failed:");
  failures.forEach(line => console.error(`- ${line}`));
  process.exitCode = 1;
} else {
  console.log(`Difficulty-level audit passed for ${targets.length} game(s).`);
}
