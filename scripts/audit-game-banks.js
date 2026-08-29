#!/usr/bin/env node
/*
 * Content audit for every enabled game and every configured level.
 *
 * Unlike the pre-publish guard, this report is intentionally descriptive: it
 * lists small banks and repeated questions as well as hard integrity errors.
 * Run: node scripts/audit-game-banks.js [--under-25] [--summary]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const under25Only = process.argv.includes("--under-25");
const summaryOnly = process.argv.includes("--summary");
const random = Object.create(Math);
random.random = () => 0.42;
const context = vm.createContext({
  window: {}, console, Math: random, Set, Map, Array, Object, String, Number,
  Boolean, JSON
});

["games.js", "difficulty-levels.js", "expanded-question-banks.js"].forEach(file => {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
});

function key(question) {
  // A board is a distinct exercise when its selectable content differs as
  // well. This matters for memory, odd-one-out and visual-choice games:
  // their prompt can be identical while the actual task is not.
  return JSON.stringify({
    q: question.q || "",
    correct: question.correct || "",
    visual: question.visual || "",
    mode: question.mode || "",
    answers: question.a || [],
    tokens: question.tokens || [],
    wordTargets: question.wordTargets || [],
    pairs: question.pairs || [],
    patternTiles: question.patternTiles || []
  });
}

const report = [];
const errors = [];
const maxLevels = {
  count: 5, "number-quantity": 6, "big-small": 7, "more-groups": 6,
  "visual-pattern": 5, "number-sequence": 5, "picture-subtraction": 6,
  "number-line": 4, shapes: 4, clock: 4, addition: 6, multiplication: 6,
  "multiplication-numbers": 5, "letter-picture": 4, "first-letter": 4,
  "image-word": 4, "drag-word-picture": 4, "missing-letter-en": 4,
  "build-word-en": 4, "sentence-order-en": 5, "same-picture": 3,
  "starts-hebrew": 4, "hebrew-word-picture": 3, "alphabet-order": 5,
  "missing-letter-he": 3, inference: 4, "word-problems": 6,
  "word-categories": 6, "story-title": 4, "word-search": 4,
  "odd-one-out": 3, habitat: 3, "living-groups": 4, seasons: 4,
  "life-cycle": 4, "plant-parts": 4, "animal-food": 5, weather: 5,
  "food-chain": 5, adaptations: 5, "cause-effect": 5,
  "event-order": 5, "sentence-order-he": 5, "true-false": 5,
  fractions: 9
};
for (const game of context.window.KIDS_GAMES.catalog.filter(game => !game.disabled)) {
  const maxLevel = maxLevels[game.id] || game.maxLevel || 9;
  for (let level = 1; level <= maxLevel; level++) {
    const bank = context.window.KIDS_GAMES.build(game.id, level, { age: 8 }) || [];
    const distinct = new Map(bank.map(question => [key(question), question]));
    const duplicates = bank.length - distinct.size;
    const row = { id: game.id, name: game.name, level, total: bank.length, distinct: distinct.size, duplicates };
    report.push(row);

    for (const [index, question] of bank.entries()) {
      if (question.mode || !Array.isArray(question.a) || !question.a.length) continue;
      const answers = question.a.map(value => String(value).trim());
      const correct = String(question.correct).trim();
      if (new Set(answers).size !== answers.length) errors.push(`${game.id} L${level} #${index + 1}: duplicate choices`);
      if (answers.filter(answer => answer === correct).length !== 1) errors.push(`${game.id} L${level} #${index + 1}: correct choice count is not 1`);
    }
  }
}

if (summaryOnly) {
  console.log(`levels audited: ${report.length}`);
  console.log(`levels under 25 distinct questions: ${report.filter(row => row.distinct < 25).length}`);
  console.log(`levels with technical repeats: ${report.filter(row => row.duplicates).length}`);
  console.log(`hard integrity errors: ${errors.length}`);
  report.length = 0;
} else if (under25Only) {
  const smallLevels = report.filter(row => row.distinct < 25);
  report.splice(0, report.length, ...smallLevels);
}

for (const row of report.sort((a, b) => a.distinct - b.distinct || a.name.localeCompare(b.name, "he"))) {
  console.log(`${row.name} | ${row.id} | רמה ${row.level}: ${row.distinct} שאלות שונות מתוך ${row.total}${row.duplicates ? ` (${row.duplicates} חזרות טכניות)` : ""}`);
}

if (errors.length) {
  console.error("\nשגיאות שלמות:");
  console.error(errors.join("\n"));
  process.exitCode = 1;
}
