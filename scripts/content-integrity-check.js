#!/usr/bin/env node
/*
 * Mechanical safeguards for question banks.  This cannot judge pedagogy, but
 * it catches the defects that should never reach a child: duplicate choices,
 * a missing correct answer, and a correct answer repeated among choices.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const root = path.resolve(__dirname, "..");
const extended = new Set(["count","number-quantity","more-groups","number-sequence","number-line","addition","picture-subtraction","multiplication","clock","word-problems","visual-pattern"]);
const five = new Set(["shapes","life-cycle","plant-parts","animal-food","weather","cause-effect","sentence-order-en","event-order","sentence-order-he","true-false","story-title","living-groups","seasons","food-chain","adaptations"]);
const custom = { "count":5, "number-quantity":6, "number-sequence":5, "picture-subtraction":6, addition:6, multiplication:6, "word-problems":6, "visual-pattern":5, "word-search":4, "more-groups": 6, "letter-picture": 8, "build-word-en": 8, "same-picture": 3, "starts-hebrew": 4, "hebrew-word-picture": 3, "alphabet-order": 5, "missing-letter-he": 3, "inference": 4, "odd-one-out": 3, "habitat": 3, "baby-adult": 4, "living-groups": 4, "seasons": 4, "life-cycle": 4, "plant-parts": 4 };
const maxLevel = id => custom[id] || (extended.has(id) ? 15 : five.has(id) ? 5 : 9);
const stableMath = Object.create(Math); stableMath.random=()=>.42;
const context=vm.createContext({window:{},console,Math:stableMath,Set,Map,Array,Object,String,Number,Boolean,JSON});
["games.js","difficulty-levels.js","expanded-question-banks.js"].forEach(file=>vm.runInContext(fs.readFileSync(path.join(root,file),"utf8"),context,{filename:file}));
const errors=[];
for(const game of context.window.KIDS_GAMES.catalog.filter(g=>!g.disabled)) for(let level=1;level<=maxLevel(game.id);level++) {
  const pool=context.window.KIDS_GAMES.build(game.id,level,{age:8})||[];
  pool.forEach((q,index)=>{
    if(game.id==="word-problems") {
      const text=String(q.q||"").trim();
      if(q.word!==true || !text.includes("?")) errors.push(`${game.id} L${level} #${index+1}: must be a written story`);
      if(level<=3 && q.type!=="חיבור") errors.push(`${game.id} L${level} #${index+1}: early level must be addition only`);
    }
    if(q.mode || !Array.isArray(q.a) || !q.a.length) return;
    const choices=q.a.map(value=>String(value).trim());
    const distinct=new Set(choices);
    const correctCount=choices.filter(value=>value===String(q.correct).trim()).length;
    if(distinct.size!==choices.length) errors.push(`${game.id} L${level} #${index+1}: duplicate answer choice`);
    if(correctCount!==1) errors.push(`${game.id} L${level} #${index+1}: correct answer appears ${correctCount} times`);
  });
}
if(errors.length){ console.error(errors.join("\n")); process.exit(1); }
console.log("Question-choice integrity check passed.");
