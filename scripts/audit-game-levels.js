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
  "count", "number-quantity", "more-groups", "number-sequence",
  "picture-subtraction"
]);
// Keep this in step with app.js.  These games intentionally have five real
// stages; checking invented levels 6–9 only produces false failures.
const fiveLevelIds = new Set([
  "picture-word-memory", "life-cycle", "plant-parts", "animal-food", "weather", "cause-effect",
  "sentence-order-en",
  "event-order", "sentence-order-he", "true-false", "story-title",
  "living-groups", "seasons", "food-chain", "adaptations"
]);
const customMaxLevels = { "count": 5, "number-quantity": 6, "big-small": 7, "more-groups": 6, "visual-pattern": 5, "number-sequence": 5, "picture-subtraction": 6, "number-line": 4, "shapes": 4, "clock": 4, "addition": 6, "multiplication": 6, "multiplication-numbers": 5, "letter-picture": 4, "first-letter": 4, "image-word": 4, "drag-word-picture": 4, "missing-letter-en": 4, "build-word-en": 4, "same-picture": 3, "starts-hebrew": 4, "hebrew-word-picture": 3, "alphabet-order": 5, "missing-letter-he": 3, "inference": 4, "word-problems": 6, "word-categories": 6, "story-title": 4, "word-search": 4, "odd-one-out": 3, "habitat": 3, "baby-adult": 4, "living-groups": 4, "seasons": 4, "life-cycle": 4, "plant-parts": 4 };
const maxLevel = id => customMaxLevels[id] || (extendedIds.has(id) ? 15 : fiveLevelIds.has(id) ? 5 : 9);

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
  const fields = ["q", "correct", "visual", "mode", "tokens", "joinWith", "word", "grid", "numberLine", "groups", "pairs"];
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
