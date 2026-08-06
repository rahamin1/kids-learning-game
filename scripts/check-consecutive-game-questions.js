#!/usr/bin/env node
/*
 * Verifies the shared "no repeat in the next play" rule for all games whose
 * content was fully reviewed.  startGame() keeps the five signatures from the
 * last completed game and removes them before selecting the next five.
 *
 * This test checks that every reviewed game/level has at least five questions
 * outside any possible five-question previous round.  That makes the fallback
 * branch unreachable for normal five-question rounds.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const reviewedIds = [
  "animal-food", "plant-parts", "life-cycle", "seasons", "living-groups",
  "habitat", "baby-adult", "odd-one-out", "count", "number-quantity", "big-small",
  "more-groups", "visual-pattern", "number-sequence", "picture-subtraction",
  "number-line", "picture-word-memory", "letter-picture", "first-letter",
  "image-word", "drag-word-picture", "missing-letter-en", "build-word-en",
  "sentence-order-en", "same-picture", "fractions", "shapes", "clock",
  "addition", "multiplication-numbers", "multiplication", "word-problems",
  "word-categories", "starts-hebrew", "hebrew-word-picture", "alphabet-order",
  "missing-letter-he", "inference", "event-order", "sentence-order-he",
  "true-false", "story-title", "word-search", "weather", "food-chain", "adaptations", "cause-effect"
];
const custom = {
  count:4, "number-quantity":6, "big-small":7, "more-groups":7,
  "visual-pattern":5, "number-sequence":5, "picture-subtraction":5,
  "number-line":4, shapes:4, clock:4, addition:6, multiplication:5,
  "multiplication-numbers":5, "letter-picture":4, "first-letter":4,
  "image-word":4, "drag-word-picture":4, "missing-letter-en":4,
  "build-word-en":4, "same-picture":3, "starts-hebrew":4,
  "hebrew-word-picture":3, "alphabet-order":5, "missing-letter-he":3,
  inference:4, "word-problems":8, "word-categories":6, "story-title":4,
  "word-search":3, "odd-one-out":3, habitat:3, "baby-adult":4, "living-groups":4,
  seasons:4, "life-cycle":4, "plant-parts":4
};
const extended = new Set(["count", "number-quantity", "more-groups", "number-sequence", "picture-subtraction"]);
const five = new Set(["picture-word-memory", "life-cycle", "plant-parts", "animal-food", "weather", "cause-effect", "sentence-order-en", "event-order", "sentence-order-he", "true-false", "story-title", "living-groups", "seasons", "food-chain", "adaptations"]);
const maxLevel = id => custom[id] || (extended.has(id) ? 15 : five.has(id) ? 5 : 9);
const stableMath = Object.create(Math);
stableMath.random = () => .42;
const context = vm.createContext({ window:{}, console, Math:stableMath, Set, Map, Array, Object, String, Number, Boolean, JSON });
["games.js", "difficulty-levels.js", "expanded-question-banks.js"].forEach(file => vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename:file }));

function signature(q){
  return [q.gameId || "", q.id || "", q.q || "", q.correct || "", q.visual || "", q.mode || "", (q.tokens || []).join("|")].join("::");
}
const errors=[];
for(const id of reviewedIds){
  for(let level=1; level<=maxLevel(id); level++){
    const distinct=[...new Map((context.window.KIDS_GAMES.build(id,level,{age:8}) || []).map(q => [signature(q),q])).values()];
    // A five-question round must always leave at least five different choices
    // for its immediate successor. startGame intentionally has no immediate
    // repeat fallback, so this check protects the rule for every reviewed bank.
    if(distinct.length < 10) errors.push(`${id} L${level}: only ${distinct.length} distinct questions; need at least 10`);
  }
}
if(errors.length){ console.error(errors.join("\n")); process.exit(1); }
console.log(`Consecutive-play question check passed for ${reviewedIds.length} fully reviewed games.`);
