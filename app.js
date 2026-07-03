const SUBJECTS = {
  math: { name: "חשבון", icon: "🔢", class: "math", desc: "סופרים, משווים ופותרים", trail: "אחו המספרים" },
  english: { name: "אנגלית", icon: "🔤", class: "english", desc: "אותיות, צלילים ומילים", trail: "יער המילים" },
  reading: { name: "קריאה", icon: "📖", class: "reading", desc: "סיפורים והבנת הנקרא", trail: "מפרץ הסיפורים" },
  nature: { name: "טבע", icon: "🌿", class: "nature", desc: "חיות, מזג אוויר והעולם", trail: "גן התגליות" }
};

const BUDDIES = ["🦊", "🐼", "🐰", "🦁"];
const BUDDY_IMAGES = {
  "🦊": "assets/brightwood-fox.png",
  "🐼": "assets/brightwood-panda.png",
  "🐰": "assets/brightwood-rabbit.png",
  "🦁": "assets/brightwood-lion.png"
};
const BUDDY_IMAGES_OLDER = {
  "🦊": "assets/brightwood-older-fox.png",
  "🐼": "assets/brightwood-older-panda.png",
  "🐰": "assets/brightwood-older-rabbit.png",
  "🦁": "assets/brightwood-older-lion.png"
};

const BANK = {
  math: [
    { skill:"ספירה", type:"סופרים ובוחרים", q:"כמה כוכבים אתם רואים?", visual:"⭐ ⭐ ⭐", a:["2","3","4","5"], correct:"3", explain:"סופרים לאט: אחת, שתיים, שלוש.", hard:{q:"כמה כוכבים אתם רואים?",visual:"⭐ ⭐ ⭐ ⭐ ⭐ ⭐",a:["4","5","6","7"],correct:"6",explain:"סופרים כל כוכב פעם אחת: שישה כוכבים."}},
    { skill:"רצפים", type:"רצף מספרים", q:"איזה מספר מגיע עכשיו?", visual:"1  ·  2  ·  3  ·  ?", a:["2","4","5","6"], correct:"4", word:true, explain:"אחרי 3 מגיע המספר 4.", hard:{q:"איזה מספר חסר?",visual:"2  ·  4  ·  6  ·  ?",a:["7","8","9","10"],correct:"8",explain:"המספרים קופצים בכל פעם בשתיים: 2, 4, 6, 8."}},
    { skill:"השוואה", type:"יותר או פחות", q:"באיזו קבוצה יש יותר?", visual:"", a:["🍎 🍎","🍎 🍎 🍎 🍎","🍎","אותו דבר"], correct:"🍎 🍎 🍎 🍎", explain:"ארבעה תפוחים הם יותר משניים או מאחד."},
    { skill:"חיבור", type:"חיבור קטן", q:"שתי ציפורים פגשו עוד אחת. כמה יש עכשיו?", visual:"🐦 🐦  +  🐦", a:["2","3","4","5"], correct:"3", explain:"שתי ציפורים ועוד ציפור אחת הן שלוש.", hard:{q:"ארבע ציפורים פגשו עוד שלוש. כמה יש עכשיו?",visual:"🐦 🐦 🐦 🐦  +  🐦 🐦 🐦",a:["5","6","7","8"],correct:"7",explain:"ארבע ועוד שלוש הן שבע."}},
    { skill:"צורות", type:"מגלים צורות", q:"איזו צורה עגולה?", visual:"△  □  ○", a:["משולש","ריבוע","עיגול","כוכב"], correct:"עיגול", explain:"לעיגול אין פינות, והוא עגול מכל הצדדים."},
    { skill:"חיבור", type:"חיבור קטן", q:"כמה זה 3 ועוד 2?", visual:"● ● ●  +  ● ●", a:["4","5","6","7"], correct:"5", explain:"שלושה ועוד שניים הם חמישה.", hard:{q:"כמה זה 5 ועוד 4?",visual:"● ● ● ● ●  +  ● ● ● ●",a:["7","8","9","10"],correct:"9",explain:"חמישה ועוד ארבעה הם תשעה."}},
    { skill:"דפוסים", type:"כוח הדפוסים", q:"מה מגיע עכשיו?", visual:"🔴 🔵 🔴 🔵 ?", a:["🔴","🔵","🟡","🟢"], correct:"🔴", explain:"הצבעים מתחלפים: אדום, כחול, אדום, כחול, ולכן שוב אדום."}
  ],
  english: [
    { skill:"צלילי אותיות", type:"צליל של אות", q:"איזו תמונה מתחילה באות B?", visual:"B b", a:["🐻 Bear","🐱 Cat","🐟 Fish","🦊 Fox"], correct:"🐻 Bear", word:true, explain:"המילה Bear מתחילה בצליל של האות B."},
    { skill:"אותיות", type:"התאמת אותיות", q:"מצאו את האות הקטנה שמתאימה ל־A", visual:"A", a:["b","a","d","e"], correct:"a", word:true, explain:"A גדולה ו־a קטנה הן אותה אות."},
    { skill:"צלילי אותיות", type:"צליל ראשון", q:"באיזה צליל מתחילה המילה sun?", visual:"☀️", a:["Sss","Mmm","Buh","Tuh"], correct:"Sss", explain:"Sun מתחילה באות S ובצליל ססס."},
    { skill:"חריזה", type:"מילים מתחרזות", q:"איזו מילה מתחרזת עם cat?", visual:"🐱 CAT", a:["Hat","Dog","Sun","Pig"], correct:"Hat", word:true, explain:"Cat ו־Hat מסתיימות באותו צליל."},
    { skill:"מילים", type:"מילה מוכרת", q:"לחצו על המילה “the”", visual:"", a:["and","the","is","we"], correct:"the", explain:"זו המילה the."},
    { skill:"איות", type:"בונים מילה", q:"איזו אות משלימה את המילה D O _?", visual:"🐶", a:["G","T","P","B"], correct:"G", explain:"D-O-G יוצר את המילה Dog."},
    { skill:"אוצר מילים", type:"הפכים", q:"מה ההפך של BIG?", visual:"🐘 ↔ ?", a:["Small","Fast","Tall","Loud"], correct:"Small", explain:"Big הוא גדול, וההפך הוא Small — קטן."}
  ],
  reading: [
    { skill:"הסקת מסקנות", type:"רמז מהסיפור", q:"פיפ ארז מטרייה. איזה מזג אוויר צפוי?", visual:"🦊 🎒 ☂️", a:["גשום","שמשי","מושלג","סוער"], correct:"גשום", explain:"מטרייה היא רמז לכך שצפוי גשם."},
    { skill:"רצף אירועים", type:"סדר בסיפור", q:"קודם שותלים זרע. מה קורה אחר כך?", visual:"🌰 → ?", a:["הוא נובט","הוא עף","הוא נמס","הוא שואג"], correct:"הוא נובט", explain:"כשמשקים זרע, הוא מתחיל לנבוט."},
    { skill:"איתור מידע", type:"מי עשה זאת?", q:"מיה האכילה חתול קטן. מי האכיל את החתול?", visual:"👧 🥣 🐱", a:["מיה","פיפ","החתול","ציפור"], correct:"מיה", explain:"במשפט כתוב שמיה האכילה את החתול."},
    { skill:"הבנת רגשות", type:"רגשות", q:"סם מצא את הצעצוע שאבד לו. איך הוא מרגיש?", visual:"🧸 ✨", a:["שמח","כועס","עייף","מפוחד"], correct:"שמח", explain:"כשמוצאים משהו שאבד, בדרך כלל מרגישים שמחה."},
    { skill:"איתור מידע", type:"פרט מהסיפור", q:"הציפור הכחולה ישבה על עץ גבוה. מה היה צבעה?", visual:"🐦 🌳", a:["כחול","אדום","ירוק","צהוב"], correct:"כחול", explain:"הסיפור מספר שהציפור הייתה כחולה."}
  ],
  nature: [
    { skill:"בעלי חיים", type:"בתים של חיות", q:"איזו חיה חיה בים?", visual:"🌊", a:["🐠 דג","🐰 ארנב","🦁 אריה","🐔 תרנגולת"], correct:"🐠 דג", explain:"דגים חיים ושוחים במים."},
    { skill:"מזג אוויר", type:"מזג האוויר", q:"מה לובשים כשיורד גשם?", visual:"🌧️", a:["מעיל גשם","בגד ים","סנדלים","כובע שמש"], correct:"מעיל גשם", explain:"מעיל גשם עוזר לנו להישאר יבשים."},
    { skill:"חי וצומח", type:"יצורים חיים", q:"מה מהדברים הבאים גדל?", visual:"🌱", a:["צמח","סלע","כפית","נעל"], correct:"צמח", explain:"צמח הוא יצור חי: הוא נובט וגדל."},
    { skill:"יום ולילה", type:"יום ולילה", q:"מה מאיר בשמיים בלילה?", visual:"🌌", a:["ירח","קשת","עפיפון","פרח"], correct:"ירח", explain:"אפשר לראות את הירח בשמי הלילה."},
    { skill:"בעלי חיים", type:"קולות של חיות", q:"איזו חיה עושה מוּ?", visual:"🎵 מוּ!", a:["🐄 פרה","🐷 חזיר","🐑 כבשה","🐴 סוס"], correct:"🐄 פרה", explain:"פרה משמיעה קול מוּ."}
  ]
};

function shuffled(items){
  return [...items].sort(()=>Math.random()-.5);
}

function numberChoices(answer){
  const candidates=[answer,Math.max(0,answer-1),answer+1,Math.max(0,answer-2),answer+2];
  return shuffled([...new Set(candidates)].slice(0,4).map(String));
}

function generatedMath(level){
  const questions=[];
  const countMax=[5,8,10,12,15][level-1]||10;
  const symbols=["⭐","🍎","🐟","🌼","🔵"];
  symbols.forEach((symbol,symbolIndex)=>{
    for(let n=1;n<=countMax;n++){
      questions.push({id:`math-${level}-count-${symbolIndex}-${n}`,skill:"ספירה",type:"סופרים ובוחרים",q:`כמה פריטים אתם רואים?`,visual:Array(n).fill(symbol).join(" "),a:numberChoices(n),correct:String(n),explain:`סופרים כל פריט פעם אחת. יש כאן ${n} פריטים.`});
    }
  });
  const sumMax=[5,8,10,15,20][level-1]||10;
  for(let a=1;a<=Math.min(sumMax-1,8);a++){
    for(let b=1;b<=Math.min(sumMax-a,6);b++){
      const answer=a+b;
      questions.push({id:`math-${level}-sum-${a}-${b}`,skill:"חיבור",type:"חיבור",q:`כמה הם ${a} ועוד ${b}?`,visual:`${a} + ${b}`,a:numberChoices(answer),correct:String(answer),explain:`${a} ועוד ${b} הם ${answer}.`,word:true});
    }
  }
  const steps=level<=2?[1]:level<=4?[1,2]:[2,3,5];
  steps.forEach(step=>{
    for(let start=1;start<=10;start++){
      const answer=start+step*3;
      questions.push({id:`math-${level}-seq-${step}-${start}`,skill:"רצפים",type:"רצף מספרים",q:"איזה מספר מגיע עכשיו?",visual:`${start}  ·  ${start+step}  ·  ${start+step*2}  ·  ?`,a:numberChoices(answer),correct:String(answer),explain:`בכל צעד מוסיפים ${step}. לכן המספר הבא הוא ${answer}.`,word:true});
    }
  });
  for(let a=1;a<=countMax;a++){
    const b=((a*3)%countMax)+1;
    if(a===b)continue;
    const correct=a>b?String(a):String(b);
    questions.push({id:`math-${level}-compare-${a}-${b}`,skill:"השוואה",type:"משווים מספרים",q:"איזה מספר גדול יותר?",visual:`${a}  ?  ${b}`,a:shuffled([String(a),String(b),"שווים","אי אפשר לדעת"]),correct,explain:`${correct} הוא המספר הגדול יותר.`,word:true});
  }
  return questions;
}

function generatedEnglish(level){
  const words=[
    ["A","🍎 Apple","Apple"],["B","🐻 Bear","Bear"],["C","🐱 Cat","Cat"],["D","🐶 Dog","Dog"],
    ["E","🥚 Egg","Egg"],["F","🐟 Fish","Fish"],["G","🎁 Gift","Gift"],["H","🎩 Hat","Hat"],
    ["I","🧊 Ice","Ice"],["J","🧃 Juice","Juice"],["K","🔑 Key","Key"],["L","🦁 Lion","Lion"],
    ["M","🌙 Moon","Moon"],["N","👃 Nose","Nose"],["P","🐷 Pig","Pig"],["S","☀️ Sun","Sun"],
    ["T","🌳 Tree","Tree"],["W","💧 Water","Water"]
  ];
  const limit=[6,9,12,15,words.length][level-1]||12;
  const active=words.slice(0,limit);
  const questions=[];
  active.forEach(([letter,label,word],i)=>{
    const distractors=shuffled(active.filter((_,j)=>j!==i).map(x=>x[1])).slice(0,3);
    questions.push({id:`english-${level}-sound-${letter}`,skill:"צלילי אותיות",type:"צליל ראשון",q:`איזו מילה מתחילה באות ${letter}?`,visual:`${letter} ${letter.toLowerCase()}`,a:shuffled([label,...distractors]),correct:label,explain:`המילה ${word} מתחילה באות ${letter}.`,word:true});
    const otherLetters=shuffled(active.filter(x=>x[0]!==letter).map(x=>x[0].toLowerCase())).slice(0,3);
    questions.push({id:`english-${level}-match-${letter}`,skill:"אותיות",type:"התאמת אותיות",q:`איזו אות קטנה מתאימה ל־${letter}?`,visual:letter,a:shuffled([letter.toLowerCase(),...otherLetters]),correct:letter.toLowerCase(),explain:`${letter} גדולה ו־${letter.toLowerCase()} קטנה הן אותה אות.`,word:true});
    const missing=word.slice(0,-1)+"_";
    const correct=word.slice(-1).toUpperCase();
    const endings=shuffled(active.map(x=>x[2].slice(-1).toUpperCase()).filter(x=>x!==correct));
    questions.push({id:`english-${level}-spell-${word}`,skill:"איות",type:"בונים מילה",q:`איזו אות משלימה את המילה ${missing}?`,visual:label.split(" ")[0],a:shuffled([correct,...new Set(endings)].slice(0,4)),correct,explain:`האות ${correct} משלימה את המילה ${word}.`,word:true});
  });
  const rhymes=[["Cat","Hat"],["Dog","Frog"],["Sun","Fun"],["Pig","Big"],["Bee","Tree"],["Fox","Box"],["Cake","Snake"],["Moon","Spoon"],["Light","Kite"],["Star","Car"]];
  rhymes.slice(0,level+5).forEach(([word,correct],i)=>{
    const wrong=shuffled(rhymes.filter((_,j)=>j!==i).map(x=>x[1])).slice(0,3);
    questions.push({id:`english-${level}-rhyme-${word}`,skill:"חריזה",type:"מילים מתחרזות",q:`איזו מילה מתחרזת עם ${word}?`,visual:word.toUpperCase(),a:shuffled([correct,...wrong]),correct,explain:`${word} ו־${correct} מסתיימות באותו צליל.`,word:true});
  });
  return questions;
}

function generatedReading(level){
  const stories=[
    ["נועה לבשה מעיל ולקחה מטרייה. מה כנראה קרה בחוץ?","ירד גשם",["היה חם","ירד שלג","היה לילה"],"הסקת מסקנות","🌧️"],
    ["אורי שתל זרע והשקה אותו בכל יום. מה צפוי לצמוח?","צמח",["סלע","כיסא","כדור"],"רצף אירועים","🌱"],
    ["דנה נתנה לכלב קערת מים. מי קיבל מים?","הכלב",["דנה","החתול","הציפור"],"איתור מידע","🐶"],
    ["יואב מצא את הכדור שאבד לו. איך הוא הרגיש?","שמח",["כועס","רעב","עייף"],"הבנת רגשות","⚽"],
    ["הפרפר הסגול נח על פרח צהוב. מה היה צבע הפרפר?","סגול",["צהוב","אדום","כחול"],"איתור מידע","🦋"],
    ["מיה שמעה רעם חזק והתחבאה מתחת לשמיכה. איך היא הרגישה?","מפוחדת",["גאה","רעבה","משועממת"],"הבנת רגשות","⛈️"],
    ["תום סיים לצחצח שיניים ונכנס למיטה. מה הוא יעשה עכשיו?","ילך לישון",["יאכל ארוחת בוקר","ילך לבית הספר","ישחק בגשם"],"רצף אירועים","🌙"],
    ["רוני מילאה בקבוק לפני הטיול. מה יש בבקבוק?","מים",["חול","גרביים","ספרים"],"איתור מידע","💧"],
    ["החתול ישב ליד הדלת ויילל. מה הוא אולי רוצה?","לצאת",["לקרוא ספר","לצייר","לעוף"],"הסקת מסקנות","🐱"],
    ["דן חלק את העוגייה שלו עם חבר. איזה ילד הוא דן?","נדיב",["כועס","רועש","עייף"],"הבנת רגשות","🍪"],
    ["קודם לובשים גרביים ואז נועלים נעליים. מה לובשים קודם?","גרביים",["נעליים","כובע","מעיל"],"רצף אירועים","🧦"],
    ["הציפור בנתה קן גבוה בעץ. איפה נמצא הקן?","בעץ",["בים","בבית","מתחת לאדמה"],"איתור מידע","🪺"],
    ["עננים שחורים כיסו את השמיים. מה עשוי לקרות?","ירד גשם",["הירח יזרח","השלג יימס","יהיה חם מאוד"],"הסקת מסקנות","☁️"],
    ["ליה קיבלה מתנה והודתה לחברתה. איך ליה התנהגה?","בנימוס",["בכעס","בפחד","בעייפות"],"הבנת רגשות","🎁"],
    ["אחרי שהבצק נאפה בתנור, הפך ללחם. מה קרה קודם?","הבצק נאפה",["הלחם נאכל","הלחם נחתך","הלחם התקרר"],"רצף אירועים","🍞"],
    ["הסירה האדומה שטה באגם השקט. מה היה צבע הסירה?","אדום",["ירוק","לבן","כחול"],"איתור מידע","⛵"],
    ["עדי כיבה את האור וראה כוכבים בחלון. באיזו שעה זה קרה?","בלילה",["בבוקר","בצהריים","בזריחה"],"הסקת מסקנות","⭐"],
    ["גיל עזר לאחותו להרים את הספרים שנפלו. מה גיל עשה?","עזר",["צחק","ברח","ישן"],"איתור מידע","📚"]
  ];
  return stories.map(([q,correct,wrong,skill,visual],i)=>({id:`reading-${level}-${i}`,skill,type:skill,q,visual,a:shuffled([correct,...wrong]),correct,explain:`התשובה נמצאת ברמזים שבסיפור: ${correct}.`}));
}

function generatedNature(level){
  const facts=[
    ["איזו חיה חיה בים?","🐬 דולפין",["🐫 גמל","🐓 תרנגול","🐿️ סנאי"],"בעלי חיים","🌊"],
    ["איזה בעל חיים חי במדבר?","🐫 גמל",["🐧 פינגווין","🐬 דולפין","🐸 צפרדע"],"בעלי חיים","🏜️"],
    ["איזו חיה מטילה ביצים?","🐔 תרנגולת",["🐄 פרה","🐱 חתול","🐶 כלב"],"בעלי חיים","🥚"],
    ["מה לובשים ביום קר?","מעיל",["בגד ים","כפכפים","משקפי שחייה"],"מזג אוויר","❄️"],
    ["מה עוזר לנו ביום שמש חזק?","כובע",["מטרייה סגורה","צעיף צמר","מגפיים"],"מזג אוויר","☀️"],
    ["מה מגיע מהעננים?","גשם",["חול","אבנים","עלים"],"מזג אוויר","☁️"],
    ["מה צריך צמח כדי לגדול?","מים ואור",["פלסטיק","צעצועים","צבע"],"חי וצומח","🌱"],
    ["איזה חלק של הצמח נמצא באדמה?","שורשים",["פרחים","עלים","פירות"],"חי וצומח","🌿"],
    ["מה מהדברים הבאים הוא יצור חי?","עץ",["כיסא","אבן","כוס"],"חי וצומח","🌳"],
    ["מה רואים בשמיים ביום?","שמש",["פנס רחוב","נר","כוכב ים"],"יום ולילה","🌞"],
    ["מתי בדרך כלל ישנים?","בלילה",["בצהריים בבית הספר","בבוקר בגן","בזמן ארוחת ערב"],"יום ולילה","🌙"],
    ["איזו חיה עושה הב־הב?","🐶 כלב",["🐱 חתול","🐄 פרה","🐑 כבשה"],"בעלי חיים","🎵"],
    ["איזו חיה עושה מיאו?","🐱 חתול",["🐴 סוס","🐷 חזיר","🐔 תרנגולת"],"בעלי חיים","🎵"],
    ["מה קורה למים בקור חזק?","הם קופאים",["הם נשרפים","הם נעלמים מיד","הם הופכים לחול"],"מזג אוויר","🧊"],
    ["באיזו עונה נושרים עלים רבים?","סתיו",["אביב","קיץ","חורף חם"],"מזג אוויר","🍂"],
    ["מי מאביק פרחים?","דבורה",["דג","חתול","צב"],"חי וצומח","🐝"],
    ["איזו חיה פעילה לעיתים בלילה?","ינשוף",["פרפר","תרנגולת","דבורה"],"יום ולילה","🦉"],
    ["מהו הבית של ציפור?","קן",["מאורה","כוורת","אקווריום"],"בעלי חיים","🪺"],
    ["איפה חיה צפרדע?","ליד מים",["במדבר יבש","על הירח","בשלג עמוק"],"בעלי חיים","🐸"],
    ["מה שומר על כדור הארץ נקי?","לזרוק לפח",["להשאיר אשפה","לבזבז מים","לשבור עצים"],"סביבה","♻️"],
    ["מה אפשר למחזר?","בקבוק פלסטיק",["קליפת בננה מלוכלכת","אבן","מים"],"סביבה","♻️"],
    ["איזה איבר עוזר לדג לנשום במים?","זימים",["כנפיים","פרווה","קרניים"],"בעלי חיים","🐟"]
  ];
  const count=Math.min(facts.length,12+level*2);
  return facts.slice(0,count).map(([q,correct,wrong,skill,visual],i)=>({id:`nature-${level}-${i}`,skill,type:skill,q,visual,a:shuffled([correct,...wrong]),correct,explain:`התשובה הנכונה היא ${correct}.`}));
}

function generatedNaturePreschool(){
  const questions=[
    ["איזו חיה חיה בים?","🐠",["🐰","🦁","🐔"],"בעלי חיים","🌊"],
    ["איזה בעל חיים חי במדבר?","🐪",["🐧","🐬","🐸"],"בעלי חיים","🏜️"],
    ["איזו חיה מטילה ביצים?","🐔",["🐄","🐱","🐶"],"בעלי חיים","🥚"],
    ["איזו חיה עושה מוּ?","🐄",["🐷","🐑","🐴"],"בעלי חיים","🎵"],
    ["איזו חיה עושה מיאו?","🐱",["🐶","🐮","🐸"],"בעלי חיים","🎵"],
    ["איזו חיה יכולה לעוף?","🦋",["🐢","🐟","🐘"],"בעלי חיים","☁️"],
    ["איזו חיה חיה בקן?","🐦",["🐠","🐘","🐄"],"בעלי חיים","🪺"],
    ["איזו חיה אוהבת לקפוץ?","🐰",["🐌","🐢","🐟"],"בעלי חיים","🌿"],
    ["מה לובשים כשיורד גשם?","🧥",["👙","🩴","👒"],"מזג אוויר","🌧️"],
    ["מה עוזר ביום שמש?","👒",["🧣","🥾","🧤"],"מזג אוויר","☀️"],
    ["מה רואים בשמיים בלילה?","🌙",["🌈","🪁","🌻"],"יום ולילה","🌌"],
    ["מה רואים בשמיים ביום?","☀️",["🌙","⭐","🕯️"],"יום ולילה","🌤️"],
    ["מה מהדברים הבאים גדל?","🌱",["🪨","🥄","👟"],"חי וצומח","💧"],
    ["מי עוזרת לפרחים?","🐝",["🐟","🐱","🐢"],"חי וצומח","🌸"],
    ["מה צריך צמח?","💧",["🧸","🚗","🎈"],"חי וצומח","🌱"],
    ["איזה פרי גדל על עץ?","🍎",["🥕","🥔","🧅"],"חי וצומח","🌳"],
    ["מה מתאים ליום קר?","🧣",["🩱","🕶️","🩴"],"מזג אוויר","❄️"],
    ["מה מגיע מעננים כהים?","🌧️",["🔥","🏖️","🌵"],"מזג אוויר","☁️"],
    ["איזו חיה חיה ליד מים?","🐸",["🦒","🐪","🐓"],"בעלי חיים","💦"],
    ["מה שומרים בתוך כוורת?","🍯",["🧊","🪨","🧦"],"חי וצומח","🐝"]
  ];
  return questions.map(([q,correct,wrong,skill,visual],i)=>({id:`nature-preschool-${i}`,skill,type:skill,q,visual,a:shuffled([correct,...wrong]),correct,explain:`התשובה הנכונה היא ${correct}.`}));
}

function buildQuestionPool(subject,level,p){
  const generated=subject==="math"?generatedMath(level):subject==="english"?generatedEnglish(level):subject==="reading"?generatedReading(level):generatedNature(level);
  if(subject==="math"&&p.age<=4)return generated.filter(q=>q.skill==="ספירה");
  if(subject==="nature"&&p.age<=4)return generatedNaturePreschool();
  const base=BANK[subject].map((q,i)=>({...adaptedQuestion(q,p,subject),id:`${subject}-${level}-base-${i}`}));
  return [...generated,...base];
}

const storeKey = "brightwood-quest-v1";
let state = JSON.parse(localStorage.getItem(storeKey) || '{"profiles":[],"activeId":null,"sound":true}');
let session = null;
let selectedAge = 5;
let selectedBuddy = "🦊";
let editingId = null;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const clamp = (n,min,max) => Math.max(min,Math.min(max,n));

function activeProfile(){ return state.profiles.find(p => p.id === state.activeId); }
function ageLevel(age){ return age <= 4 ? 1 : age === 5 ? 2 : age === 6 ? 3 : 4; }
function subjectName(p,key){ return key==="math"&&p?.age<=4?"מספרים":SUBJECTS[key].name; }
function subjectDescription(p,key){ return key==="math"&&p?.age<=4?"סופרים עצמים ומשחקים במספרים":SUBJECTS[key].desc; }
function prepareProfile(p){
  p.subjects ||= ["math","english"];
  p.progress ||= {};
  p.log ||= [];
  p.stars ||= 0; p.streak ||= 0; p.correct ||= 0; p.answered ||= 0; p.minutes ||= 0; p.daily ||= 0;
  p.skillLevels ||= {};
  p.skillFeedback ||= {};
  p.recentQuestions ||= {};
  Object.keys(SUBJECTS).forEach(key => {
    p.skillLevels[key] ||= {};
    p.skillFeedback[key] ||= {};
    p.recentQuestions[key] ||= [];
    [...new Set(BANK[key].map(q=>q.skill))].forEach(skill => p.skillLevels[key][skill] ||= ageLevel(p.age));
  });
  if(!p.mathBoostVersion){
    Object.keys(p.skillLevels.math).forEach(skill=>p.skillLevels.math[skill]=clamp(p.skillLevels.math[skill]+1,1,5));
    p.mathBoostVersion=1;
    p.recentQuestions.math=[];
  }
  return p;
}
state.profiles.forEach(prepareProfile);
function save(){ localStorage.setItem(storeKey, JSON.stringify(state)); }
function openModal(id){ $("#"+id).classList.add("open"); }
function closeModal(id){ $("#"+id).classList.remove("open"); }
function showScreen(id){
  $$(".screen").forEach(x=>x.classList.remove("active"));
  $("#"+id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="dashboardScreen") renderDashboard();
  if(id==="settingsScreen") renderSettings();
}

function init(){
  renderChoiceButtons();
  bindEvents();
  if(!activeProfile()) openCreate();
  renderAll();
}

function renderChoiceButtons(){
  $("#ageOptions").innerHTML=[3,4,5,6,7].map(n=>`<button type="button" class="choice-btn ${n===selectedAge?"selected":""}" data-age="${n}">${n}</button>`).join("");
  $("#buddyOptions").innerHTML=BUDDIES.map(b=>`<button type="button" class="choice-btn ${b===selectedBuddy?"selected":""}" data-buddy="${b}">${b}</button>`).join("");
}

function renderAll(){
  const p=activeProfile();
  $("#profileName").textContent=p?.name||"שחקן חדש";
  $("#miniAvatar").textContent=p?.buddy||"🦊";
  $("#starCount").textContent=p?.stars||0;
  const streak=p?.streak||0;
  $("#streakText").textContent=streak===1?"יום תרגול אחד":`${streak} ימים ברצף`;
  $(".sound-toggle").textContent=state.sound?"🔊":"🔇";
  const today=p?.dailyDate===new Date().toDateString()?p.daily||0:0;
  $("#dailyDone").textContent=`${Math.min(today,3)} / 3`;
  $("#dailyBar").style.width=`${Math.min(today/3*100,100)}%`;
  $("#continueButton").innerHTML=p?.answered ? `ממשיכים בהרפתקה <span>←</span>` : `מתחילים בהרפתקה <span>←</span>`;
  renderHero();
  renderSubjects();
  renderProfiles();
  renderSubjectToggles();
  renderAdventureChoices();
  if($("#dashboardScreen").classList.contains("active")) renderDashboard();
  if($("#settingsScreen").classList.contains("active")) renderSettings();
}

function renderHero(){
  const p=activeProfile();
  const stars=p?.stars||0;
  const darkness=.48*(1-Math.min(stars,40)/40);
  const age=p?.age||3;
  const set=age>=6?BUDDY_IMAGES_OLDER:BUDDY_IMAGES;
  const image=set[p?.buddy]||set["🦊"];
  const ageTint=age===3?"rgba(255,218,120,.10)":age<=5?"rgba(25,67,86,.05)":"rgba(12,42,60,.02)";
  $(".hero").style.backgroundImage=`linear-gradient(90deg,rgba(224,249,255,.94) 0%,rgba(224,249,255,.76) 35%,rgba(224,249,255,0) 63%),linear-gradient(${ageTint},${ageTint}),url("${image}")`;
  $(".hero").style.setProperty("--forest-darkness",darkness.toFixed(2));
  $(".hero").dataset.ageWorld=age===3?"preschool":age<=5?"middle":"older";
  $(".speech-bubble").innerHTML=stars
    ? `היער כבר זוהר יותר!<br><b>אספנו ${stars} ${stars===1?"כוכב":"כוכבים"}</b>`
    : `אני החבר שלך למסע!<br><b>בואו נאיר את היער!</b>`;
}

function subjectLevel(p,key){
  const levels=Object.values(p.skillLevels?.[key]||{});
  return levels.length ? Math.round(levels.reduce((a,b)=>a+b,0)/levels.length) : ageLevel(p.age);
}

function renderSubjects(){
  const p=activeProfile(), chosen=p?.subjects||["math","english","reading","nature"];
  $("#subjectGrid").innerHTML=chosen.map(key=>{
    const s=SUBJECTS[key], level=p?subjectLevel(p,key):1;
    return `<button class="subject-card ${s.class}" data-subject="${key}"><span class="level-chip">שלב ${level}</span><span class="icon">${s.icon}</span><h3>${subjectName(p,key)}</h3><p>${subjectDescription(p,key)}</p><span class="go">←</span></button>`;
  }).join("");
}

function renderProfiles(){
  $("#profilesList").innerHTML=state.profiles.map(p=>`<div class="profile-row"><button class="profile-option" data-profile="${p.id}"><span class="mini-avatar">${p.buddy}</span><span><b>${escapeHtml(p.name)}</b><small>גיל ${p.age} · ${p.subjects.length} נושאים</small></span><span class="stars">★ ${p.stars}</span></button><button class="profile-edit" data-edit-profile="${p.id}" aria-label="עריכת הפרופיל של ${escapeHtml(p.name)}">✎</button></div>`).join("");
}

function renderSubjectToggles(){
  const p=activeProfile(),chosen=p?.subjects||Object.keys(SUBJECTS);
  $("#subjectToggles").innerHTML=Object.entries(SUBJECTS).map(([k,s])=>`<button class="subject-toggle ${chosen.includes(k)?"selected":""}" data-toggle-subject="${k}">${s.icon} ${subjectName(p,k)}<br><small>${subjectDescription(p,k)}</small></button>`).join("");
}

function renderAdventureChoices(){
  const p=activeProfile();
  $("#adventureChoices").innerHTML=(p?.subjects||[]).map(key=>`<button class="adventure-choice" data-play-subject="${key}"><span>${SUBJECTS[key].icon}</span>${subjectName(p,key)}<small>${subjectDescription(p,key)}</small></button>`).join("");
}

function openCreate(){
  editingId=null; selectedAge=5; selectedBuddy="🦊";
  $("#profileFormEyebrow").textContent="הרפתקן חדש!";
  $("#profileFormTitle").textContent="יוצרים פרופיל לילד/ה";
  $("#profileSubmit").innerHTML=`יוצאים לדרך <span>←</span>`;
  $("#childName").value="";
  $("#deleteProfile").classList.add("hidden");
  renderChoiceButtons(); openModal("createModal");
}

function openEdit(id){
  const p=state.profiles.find(x=>x.id===id); if(!p)return;
  editingId=id; selectedAge=p.age; selectedBuddy=p.buddy;
  $("#profileFormEyebrow").textContent="עריכת פרופיל";
  $("#profileFormTitle").textContent="הפרטים של "+p.name;
  $("#profileSubmit").innerHTML="שמירת השינויים";
  $("#childName").value=p.name;
  $("#deleteProfile").classList.remove("hidden");
  renderChoiceButtons(); closeModal("profileModal"); openModal("createModal");
}

function submitProfile(name){
  if(editingId){
    const p=state.profiles.find(x=>x.id===editingId);
    p.name=name.trim(); p.age=selectedAge; p.buddy=selectedBuddy;
    prepareProfile(p); save(); closeModal("createModal"); renderAll(); showScreen("homeScreen");
    editingId=null;
  } else {
    const p=prepareProfile({id:Date.now().toString(),name:name.trim(),age:selectedAge,buddy:selectedBuddy,subjects:["math","english"],stars:0,streak:0,progress:{},log:[],correct:0,answered:0,minutes:0,daily:0,dailyDate:""});
    state.profiles.push(p); state.activeId=p.id; session=null; save(); closeModal("createModal"); renderAll(); showScreen("homeScreen"); openModal("subjectModal");
  }
}

function deleteCurrentProfile(){
  const p=state.profiles.find(x=>x.id===editingId); if(!p)return;
  if(!confirm(`למחוק את הפרופיל של ${p.name}? לא ניתן לשחזר את ההתקדמות.`))return;
  state.profiles=state.profiles.filter(x=>x.id!==editingId);
  state.activeId=state.profiles[0]?.id||null; editingId=null; save(); closeModal("createModal"); renderAll(); showScreen("homeScreen");
  if(!activeProfile()) openCreate();
}

function adaptedQuestion(q,p,subject){
  const level=p.skillLevels?.[subject]?.[q.skill]||ageLevel(p.age);
  return level>=4&&q.hard ? {...q,...q.hard} : {...q};
}

function startGame(subject){
  const p=activeProfile(); if(!p){openCreate();return}
  const level=subjectLevel(p,subject);
  const pool=buildQuestionPool(subject,level,p);
  const recent=new Set(p.recentQuestions[subject]||[]);
  let available=pool.filter(q=>!recent.has(q.id));
  if(available.length<5)available=pool;
  const questions=shuffled(available).slice(0,5).map(q=>({...q,a:shuffled(q.a)}));
  p.recentQuestions[subject]=[...(p.recentQuestions[subject]||[]),...questions.map(q=>q.id)].slice(-Math.min(30,Math.max(10,pool.length-5)));
  save();
  session={subject,questions,index:0,correct:0,start:Date.now(),locked:false,results:{}};
  showScreen("gameScreen"); renderQuestion();
}

function renderQuestion(){
  const q=session.questions[session.index], s=SUBJECTS[session.subject], p=activeProfile();
  $("#gameSubject").textContent="שביל "+subjectName(p,session.subject);
  $("#gameLevel").textContent=`שלב ${subjectLevel(p,session.subject)} · ${s.trail}`;
  $("#questionLabel").textContent=`${session.index+1} מתוך ${session.questions.length}`;
  $("#questionBar").style.width=`${session.index/session.questions.length*100}%`;
  $("#questionType").textContent=q.type; $("#questionText").textContent=q.q;
  $("#questionVisual").textContent=q.visual||"";
  $("#questionVisual").className="question-visual"+(q.word?" word":"");
  $("#feedback").className="feedback"; $("#feedback").textContent="";
  $("#explanation").className="explanation"; $("#explanation").textContent="";
  $(".pip-corner").firstChild.textContent=p.buddy;
  $("#pipPrompt").textContent=["יש לכם זמן!","קטן עליכם!","חשיבה מצוינת!"][session.index%3];
  $("#answerGrid").innerHTML=q.a.map(a=>`<button class="answer-btn" data-answer="${escapeHtml(a)}">${a}</button>`).join("");
  $("#answerGrid").classList.toggle("image-answers",session.subject==="nature"&&p.age<=4);
  session.locked=false;
}

function answer(value,button){
  if(session.locked)return; session.locked=true;
  const q=session.questions[session.index], right=value===q.correct, p=activeProfile();
  session.results[q.skill] ||= {correct:0,total:0}; session.results[q.skill].total++;
  p.answered++;
  if(right){
    p.correct++; session.correct++; session.results[q.skill].correct++;
    button.classList.add("correct"); chime(true);
    $("#feedback").textContent="כן! בדיוק! ★"; $("#feedback").className="feedback good";
  } else {
    button.classList.add("wrong"); chime(false);
    $("#feedback").textContent=`ניסיון יפה — התשובה היא ${q.correct}.`; $("#feedback").className="feedback bad";
    $$(".answer-btn").find(b=>b.dataset.answer===q.correct)?.classList.add("correct");
    $("#explanation").textContent=q.explain; $("#explanation").className="explanation show";
  }
  save();
  setTimeout(()=>{session.index++;session.index<session.questions.length?renderQuestion():finishGame()},right?1050:2400);
}

function finishGame(){
  const p=activeProfile(), key=session.subject, now=new Date().toDateString(), earned=Math.max(1,session.correct);
  p.stars+=earned; p.progress[key] ||= {completed:0,level:1,correct:0,total:0};
  const prog=p.progress[key]; prog.completed++; prog.correct+=session.correct; prog.total+=session.questions.length;
  Object.entries(session.results).forEach(([skill,r])=>{
    const current=p.skillLevels[key][skill]||ageLevel(p.age);
    if(r.total>=1&&r.correct/r.total>=.85)p.skillLevels[key][skill]=clamp(current+1,1,5);
    if(r.total>=2&&r.correct/r.total<=.45)p.skillLevels[key][skill]=clamp(current-1,1,5);
  });
  prog.level=subjectLevel(p,key);
  if(p.dailyDate!==now){p.dailyDate=now;p.daily=0} p.daily++;
  p.streak=Math.max(1,p.streak||0);
  p.minutes+=Math.max(1,Math.round((Date.now()-session.start)/60000));
  p.log.unshift({subject:key,correct:session.correct,total:session.questions.length,earned,date:new Date().toLocaleDateString("he-IL",{month:"short",day:"numeric"})});
  p.log=p.log.slice(0,8); save();
  $("#celebrateBuddy").textContent=p.buddy; $("#earnedStars").textContent=earned;
  $("#earnedStars").parentElement.innerHTML=`<span id="earnedStars">${earned}</span> ${earned===1?"כוכב":"כוכבים"}`;
  openModal("celebrationModal"); renderAll();
}

function renderDashboard(){
  const p=activeProfile(); if(!p)return;
  $("#dashboardSubtitle").textContent=`תמונה נעימה של ההתקדמות האחרונה של ${p.name}.`;
  $("#dashStars").textContent=p.stars; $("#dashQuestions").textContent=p.answered;
  $("#dashAccuracy").textContent=p.answered?Math.round(p.correct/p.answered*100)+"%":"—";
  $("#dashTime").textContent=p.minutes+" דקות";
  $("#subjectProgress").innerHTML=Object.entries(SUBJECTS).map(([k,s])=>{
    const x=p.progress[k],pct=x?Math.min(x.completed/10*100,100):0;
    return `<div class="progress-row"><span class="trail-icon">${s.icon}</span><b>${subjectName(p,k)}</b><div class="bar"><i style="width:${pct}%"></i></div><small>${x?.completed||0}/10</small></div>`;
  }).join("");
  $("#activityLog").innerHTML=p.log.length?p.log.map(x=>`<div class="log-row"><span class="log-icon">${SUBJECTS[x.subject].icon}</span><div><b>${SUBJECTS[x.subject].trail}</b><small>${x.correct} מתוך ${x.total} תשובות נכונות · ${x.date}</small></div></div>`).join(""):`<div class="empty-state">עוד אין הרפתקאות. בחרו שביל והסיפור מתחיל!</div>`;
  const skills=[];
  Object.entries(p.skillLevels).forEach(([subject,map])=>Object.entries(map).forEach(([skill,level])=>skills.push({subject,skill,level})));
  if(p.answered&&skills.length){
    const weak=[...skills].sort((a,b)=>a.level-b.level)[0];
    $("#insightTitle").textContent=`כדאי לתרגל: ${weak.skill}`;
    const skillInSentence=weak.skill==="צלילי אותיות"?"צלילי האותיות":weak.skill;
    $("#insightText").textContent=`אפשר לחזק את ${skillInSentence} בנושא ${subjectName(p,weak.subject)}. המשחק יתאים את השאלות בהדרגה, בקצב נעים וללא לחץ.`;
  } else {
    $("#insightTitle").textContent="מוכנים להרפתקה הראשונה";
    $("#insightText").textContent="השלימו שביל ופיפ ישתף כאן תובנה על הלמידה.";
  }
}

function renderSettings(){
  const p=activeProfile(); if(!p)return;
  $("#settingsSubtitle").textContent=`ההגדרות של ${p.name}.`;
  $("#settingsProfile span").textContent=p.buddy;
  $("#settingsSound span").textContent=state.sound?"🔊":"🔇";
  $("#settingsSoundLabel").textContent=state.sound?"הצלילים פעילים":"הצלילים כבויים";
  renderDifficulty(p);
}

function renderDifficulty(p){
  $("#difficultyControls").innerHTML=p.subjects.map(key=>{
    const feedback=p.skillFeedback[key]._subject||"ok", level=subjectLevel(p,key);
    return `<section class="difficulty-subject"><div class="skill-row"><span><b>${SUBJECTS[key].icon} ${subjectName(p,key)}</b><small class="level-badge">שלב ${level}</small><small class="question-count">מאגר שאלות רחב ברמה זו</small></span><div class="level-adjust"><button class="${feedback==="up"?"selected":""}" data-adjust="${key}|up">קל מדי</button><button class="${feedback==="ok"?"selected":""}" data-adjust="${key}|ok">מתאים</button><button class="${feedback==="down"?"selected":""}" data-adjust="${key}|down">קשה מדי</button></div></div></section>`;
  }).join("");
}

function adjustDifficulty(data){
  const [subject,choice]=data.split("|"),p=activeProfile();
  const skills=Object.keys(p.skillLevels[subject]);
  p.skillFeedback[subject]._subject=choice;
  skills.forEach(skill=>{
    const current=p.skillLevels[subject][skill]||ageLevel(p.age);
    if(choice==="up")p.skillLevels[subject][skill]=clamp(current+1,1,5);
    if(choice==="down")p.skillLevels[subject][skill]=clamp(current-1,1,5);
  });
  p.recentQuestions[subject]=[];
  save(); renderSettings(); renderSubjects();
}

function exportProgress(){
  const p=activeProfile(); if(!p)return;
  const report={
    child:{name:p.name,age:p.age,buddy:p.buddy},
    summary:{stars:p.stars,answered:p.answered,correct:p.correct,minutes:p.minutes},
    topics:p.subjects.map(key=>({topic:subjectName(p,key),level:subjectLevel(p,key),completed:p.progress[key]?.completed||0,skills:p.skillLevels[key]})),
    recent:p.log
  };
  const blob=new Blob([JSON.stringify(report,null,2)],{type:"application/json;charset=utf-8"});
  const url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url;a.download=`brightwood-${p.name}.json`;a.click();URL.revokeObjectURL(url);
}

function resetProgress(){
  const p=activeProfile(); if(!p)return;
  if(!confirm(`לאפס את כל ההתקדמות של ${p.name}? הפעולה אינה ניתנת לביטול.`))return;
  Object.assign(p,{stars:0,streak:0,progress:{},log:[],correct:0,answered:0,minutes:0,daily:0,dailyDate:"",skillLevels:{},skillFeedback:{},recentQuestions:{}});
  prepareProfile(p); save(); renderAll();
  if($("#dashboardScreen").classList.contains("active"))renderDashboard();
  if($("#settingsScreen").classList.contains("active"))renderSettings();
}

function chime(success){
  if(!state.sound)return;
  const C=window.AudioContext||window.webkitAudioContext,ctx=new C(),notes=success?[523,659,784]:[260,196];
  notes.forEach((freq,i)=>{const o=ctx.createOscillator(),g=ctx.createGain();o.type=success?"sine":"triangle";o.frequency.value=freq;g.gain.setValueAtTime(.001,ctx.currentTime+i*.11);g.gain.exponentialRampToValueAtTime(.18,ctx.currentTime+i*.11+.02);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+i*.11+.2);o.connect(g);g.connect(ctx.destination);o.start(ctx.currentTime+i*.11);o.stop(ctx.currentTime+i*.11+.22)});
}

function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}

function bindEvents(){
  document.addEventListener("click",e=>{
    const go=e.target.closest("[data-go]"); if(go)showScreen(go.dataset.go==="home"?"homeScreen":go.dataset.go);
    const close=e.target.closest("[data-close]"); if(close)closeModal(close.dataset.close);
    const sub=e.target.closest("[data-subject]"); if(sub)startGame(sub.dataset.subject);
    const playSub=e.target.closest("[data-play-subject]"); if(playSub){closeModal("adventureModal");startGame(playSub.dataset.playSubject)}
    const ans=e.target.closest("[data-answer]"); if(ans)answer(ans.dataset.answer,ans);
    const prof=e.target.closest("[data-profile]"); if(prof){state.activeId=prof.dataset.profile;prepareProfile(activeProfile());save();closeModal("profileModal");renderAll();showScreen("homeScreen")}
    const edit=e.target.closest("[data-edit-profile]"); if(edit)openEdit(edit.dataset.editProfile);
    const age=e.target.closest("[data-age]"); if(age){selectedAge=+age.dataset.age;renderChoiceButtons()}
    const buddy=e.target.closest("[data-buddy]"); if(buddy){selectedBuddy=buddy.dataset.buddy;renderChoiceButtons()}
    const tog=e.target.closest("[data-toggle-subject]"); if(tog)tog.classList.toggle("selected");
    const adjust=e.target.closest("[data-adjust]"); if(adjust)adjustDifficulty(adjust.dataset.adjust);
  });
  $("#profileButton").onclick=()=>openModal("profileModal");
  $("#addProfileButton").onclick=()=>{closeModal("profileModal");openCreate()};
  $("#createForm").onsubmit=e=>{e.preventDefault();submitProfile($("#childName").value)};
  $("#deleteProfile").onclick=deleteCurrentProfile;
  $("#customizeSubjects").onclick=()=>activeProfile()?openModal("subjectModal"):openCreate();
  $("#saveSubjects").onclick=()=>{const chosen=$$(".subject-toggle.selected").map(x=>x.dataset.toggleSubject);if(!chosen.length)return;activeProfile().subjects=chosen;save();closeModal("subjectModal");renderAll()};
  $("#progressButton").onclick=()=>activeProfile()?showScreen("dashboardScreen"):openCreate();
  $("#settingsButton").onclick=()=>activeProfile()?showScreen("settingsScreen"):openCreate();
  $("#settingsSubjects").onclick=()=>openModal("subjectModal");
  $("#settingsProfile").onclick=()=>openEdit(activeProfile().id);
  $("#settingsSound").onclick=()=>{$(".sound-toggle").click();renderSettings()};
  $("#printReport").onclick=()=>window.print();
  $("#exportReport").onclick=exportProgress;
  $("#resetProgress").onclick=resetProgress;
  $(".sound-toggle").onclick=e=>{state.sound=!state.sound;e.currentTarget.textContent=state.sound?"🔊":"🔇";save();if(state.sound)chime(true)};
  $("#continueButton").onclick=()=>{const p=activeProfile();if(!p)return openCreate();renderAdventureChoices();openModal("adventureModal")};
  $("#randomButton").onclick=()=>{const p=activeProfile();if(!p)return openCreate();startGame(p.subjects[Math.floor(Math.random()*p.subjects.length)])};
  $$(".modal-backdrop").forEach(m=>m.addEventListener("click",e=>{if(e.target===m&&m.id!=="createModal"&&!(!activeProfile()&&m.id==="profileModal"))closeModal(m.id)}));
}

init();
