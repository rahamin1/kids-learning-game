#!/usr/bin/env node
/* Print the number of unique visible questions in every playable level. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const extended = new Set(["count","number-quantity","more-groups","number-sequence","picture-subtraction"]);
const five = new Set(["picture-word-memory","life-cycle","plant-parts","animal-food","weather","cause-effect","sentence-order-en","event-order","sentence-order-he","true-false","story-title","living-groups","seasons","food-chain","adaptations"]);
const custom = { "count": 4, "number-quantity": 6, "big-small": 7, "more-groups": 7, "visual-pattern": 5, "number-sequence": 5, "picture-subtraction": 5, "number-line": 4, "shapes": 4, "clock": 4, "addition": 6, "multiplication": 5, "multiplication-numbers": 5, "letter-picture": 4, "first-letter": 4, "image-word": 4, "drag-word-picture": 4, "missing-letter-en": 4, "build-word-en": 4, "same-picture": 3, "starts-hebrew": 4, "hebrew-word-picture": 3, "alphabet-order": 5, "missing-letter-he": 3, "inference": 4, "word-problems": 8, "word-categories": 6, "story-title": 4, "word-search": 3, "odd-one-out": 3, "habitat": 3, "baby-adult": 4, "living-groups": 4, "seasons": 4, "life-cycle": 4, "plant-parts": 4 };
const maxLevel = id => custom[id] || (extended.has(id) ? 15 : five.has(id) ? 5 : 9);
const stableMath = Object.create(Math);
stableMath.random = () => .42;
const context = vm.createContext({ window:{}, console, Math:stableMath, Set, Map, Array, Object, String, Number, Boolean, JSON });
["games.js","difficulty-levels.js","expanded-question-banks.js"].forEach(file => vm.runInContext(fs.readFileSync(path.join(root,file),"utf8"),context,{filename:file}));
const games = context.window.KIDS_GAMES;
for (const game of games.catalog.filter(game => !game.disabled)) {
  for (let level=1; level<=maxLevel(game.id); level++) {
    const pool=games.build(game.id,level,{age:8})||[];
    // A different illustration, object grid or pattern is a genuinely
    // different exercise for this app, even if its wording and answer match.
    // Keep every visible learning cue in the signature so that the report
    // reflects the child-facing question bank rather than only its text.
    const distinct=new Set(pool.map(q => JSON.stringify({
      q:q.q,
      correct:q.correct,
      answers:q.a||[],
      mode:q.mode||"",
      tokens:q.tokens||[],
      visual:q.visual||"",
      patternTiles:q.patternTiles||[],
      pictureMath:q.pictureMath||null,
      answerScales:q.answerScales||null,
      clock:q.clock||null,
      pairs:q.pairs||[]
    })));
    console.log(`${game.id}\t${level}\t${distinct.size}\t${pool.length}`);
  }
}
