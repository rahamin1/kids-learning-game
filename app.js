const APP_VERSION = "0.1.9";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgojggkr";
const GA_MEASUREMENT_ID = "";
const INTRO_STEPS = [
  {icon:"🌟",eyebrow:"ברוכים הבאים",title:"היער הזוהר מחכה לכם",text:"יוצאים להרפתקת למידה קצרה, צבעונית וכיפית. בכל פעם משחקים קצת, מתקדמים קצת, ומגלים עוד מהיער."},
  {icon:"🏆",eyebrow:"כוכבים וגביעים",title:"אוספים כוכבים וזוכים בגביעים",text:"בכל משחק אוספים כוכבים. כל 10 כוכבים הופכים לגביע חדש, ואפשר להמשיך לאסוף עוד ועוד גביעים."},
  {icon:"🦊",eyebrow:"חברי מסע",title:"בוחרים חבר שמלווה את ההרפתקה",text:"בתחילת הדרך בוחרים חבר למסע. בהמשך מתגלים חברים נוספים, וכל ילד יכול לבחור מי יצא איתו למסע ולהחליף חבר בדרך."},
  {icon:"⚙️",eyebrow:"מתאים לכל ילד",title:"אפשר להתאים נושאים ורמות קושי",text:"ההורים יכולים לבחור נושאים, להסתיר משחקים, ולהעלות או להוריד רמת קושי לפי מה שמתאים לילד."}
];

const SUBJECTS = {
  math: { name: "חשבון", icon: "🔢", class: "math", desc: "סופרים, משווים ופותרים", trail: "אחו המספרים" },
  english: { name: "אנגלית", icon: "🔤", class: "english", desc: "אותיות, צלילים ומילים", trail: "יער המילים" },
  reading: { name: "עברית", icon: "📖", class: "reading", desc: "אותיות, מילים והבנת הנקרא", trail: "מפרץ הסיפורים" },
  nature: { name: "טבע", icon: "🌿", class: "nature", desc: "חיות, מזג אוויר והעולם", trail: "גן התגליות" },
  thinking: { name: "חשיבה", icon: "🧠", class: "thinking", desc: "זיכרון, התאמה והבחנה חזותית", trail: "שביל החשיבה" }
};

const BUDDIES = ["🦊", "🐼", "🐰", "🦁", "🐶", "🐱", "🦉", "🐧", "🐿️", "🦔", "🧸", "🦝"];
const BUDDY_TITLES = {
  "🦊": "שועל",
  "🐼": "פנדה",
  "🐰": "ארנב",
  "🦁": "אריה",
  "🐶": "כלבלב",
  "🐱": "חתלתול",
  "🦉": "ינשוף",
  "🐧": "פינגווין",
  "🐿️": "סנאי",
  "🦔": "קיפוד",
  "🧸": "דובון",
  "🦝": "דביבון"
};
const BUDDY_PROFILES = {
  "🦊": {name:"פיפ השועל",trait:"מחפש הפתעות ביער",ability:"סקרנות"},
  "🐼": {name:"במבו הפנדה",trait:"רגוע גם כשהשביל מתפתל",ability:"רוגע"},
  "🐰": {name:"קיקי הארנבת",trait:"קופצת מרעיון לרעיון",ability:"זריזות"},
  "🦁": {name:"ליאו האריה",trait:"נותן אומץ לפני אתגר",ability:"אומץ"},
  "🐶": {name:"בונו הכלבלב",trait:"רץ איתך לכל הרפתקה",ability:"חברות"},
  "🐱": {name:"מילי החתלתולה",trait:"מגלה דברים בשקט",ability:"עדינות"},
  "🦉": {name:"אולי הינשוף",trait:"עוזר לחשוב חכם",ability:"חוכמה"},
  "🐧": {name:"נונו הפינגווין",trait:"מצחיק גם כשקשה",ability:"שמחה"},
  "🐿️": {name:"צ׳יקו הסנאי",trait:"אוסף רעיונות במהירות",ability:"מרץ"},
  "🦔": {name:"קוצי הקיפוד",trait:"מתקדם לאט ובטוח",ability:"סבלנות"},
  "🧸": {name:"דובי הדובון",trait:"נותן חיבוק של אומץ",ability:"ביטחון"},
  "🦝": {name:"רוני הדביבון",trait:"מוצא רמזים חבויים",ability:"חקרנות"}
};
const BUDDY_LINES = {
  "🦊": {
    home:["פיפ מצא שביל חדש בין העצים.","פיפ מרחרח רמזים נוצצים.","פיפ מוכן להרפתקה חכמה."],
    correct:["פיפ קופץ: בדיוק!","פיפ מצא כוכב של מחשבה.","פיפ אומר: פתרון חד כמו שועל!"],
    return:["פיפ שמר לך מקום בשביל.","פיפ חיכה ליד העץ הזוהר.","פיפ שמח שחזרת להרפתקה."]
  },
  "🐼": {
    home:["במבו מחכה בשקט עם חיוך.","במבו מזמין אותך להתחיל ברוגע.","במבו אומר: צעד צעד."],
    correct:["במבו מוחא כפיים ברוגע.","במבו אומר: תשובה יפה מאוד.","במבו מצא רגע של חוכמה."],
    return:["במבו שמר לך פינה נעימה.","במבו שמח לראות אותך שוב.","במבו מוכן לעוד צעד קטן."]
  },
  "🐰": {
    home:["קיקי כבר קפצה אל השביל.","קיקי מצאה רעיון בין העלים.","קיקי מוכנה לקפיצה קטנה."],
    correct:["קיקי קופצת משמחה!","קיקי אומרת: זה היה זריז!","קיקי מצאה כוכב קטן."],
    return:["קיקי חיכתה ליד השיח.","קיקי שמחה שחזרת.","קיקי כבר מוכנה לשאלה הבאה."]
  },
  "🦁": {
    home:["ליאו שומר על שער היער.","ליאו נותן אומץ לפני האתגר.","ליאו מוכן לשאגת למידה."],
    correct:["ליאו שואג בשקט: מצוין!","ליאו אומר: תשובה אמיצה.","ליאו מצא כוכב של אומץ."],
    return:["ליאו חיכה בגאווה.","ליאו שמח שחזרת למסע.","ליאו מוכן להמשיך איתך."]
  },
  "🐶": {
    home:["בונו רץ איתך לכל הרפתקה.","בונו מכשכש בזנב ליד השביל.","בונו מצא ריח של כוכבים."],
    correct:["בונו קופץ משמחה!","בונו אומר: כל הכבוד!","בונו מצא כוכב וקפץ אליו."],
    return:["בונו חיכה ליד השער.","בונו שמח שחזרת!","בונו כבר מוכן לרוץ."]
  },
  "🐱": {
    home:["מילי מתגנבת בשקט אל הרמז.","מילי מצאה כוכב קטן על ענף.","מילי מזמינה להרפתקה עדינה."],
    correct:["מילי מגרגרת: נכון!","מילי אומרת: זה היה מדויק.","מילי מצאה תשובה בשקט."],
    return:["מילי חיכתה על כרית עלים.","מילי שמחה שחזרת.","מילי מוכנה לגלות עוד סוד."]
  },
  "🦉": {
    home:["אולי הינשוף מצא רמז חדש.","אולי מחכה ליד העץ הגבוה.","אולי אומר: היום חושבים חכם."],
    correct:["אולי אומר: חשיבה חכמה!","אולי מהנהן: מדויק מאוד.","אולי מצא כוכב של חוכמה."],
    return:["אולי שמר לך רמז קטן.","אולי שמח שחזרת לחשוב.","אולי מוכן לשאלה חכמה."]
  },
  "🐧": {
    home:["נונו החליק אל תחילת השביל.","נונו מביא חיוך קריר להרפתקה.","נונו מצא כוכב על הקרח."],
    correct:["נונו החליק משמחה!","נונו מוחא כפיים קטנות.","נונו אומר: קריר ומדויק!"],
    return:["נונו חיכה ליד השלולית.","נונו שמח שחזרת להחליק.","נונו מוכן לעוד משחק."]
  },
  "🐿️": {
    home:["צ׳יקו אוסף רעיונות במהירות.","צ׳יקו מצא אגוז של מחשבה.","צ׳יקו כבר רץ בין השבילים."],
    correct:["צ׳יקו אסף כוכב זריז!","צ׳יקו אומר: מצוין ומהיר!","צ׳יקו קופץ לענף הבא."],
    return:["צ׳יקו שמר לך אגוז קטן.","צ׳יקו חיכה בין הענפים.","צ׳יקו מוכן להמשיך מהר."]
  },
  "🦔": {
    home:["קוצי מתקדם לאט ובטוח.","קוצי מצא שביל קטן ונעים.","קוצי אומר: אין למה למהר."],
    correct:["קוצי אומר: צעד מדויק!","קוצי חייך חיוך קטן.","קוצי מצא כוכב בסבלנות."],
    return:["קוצי שמר לך מקום בשביל.","קוצי התקדם עוד צעד קטן.","קוצי שמח שחזרת."]
  },
  "🧸": {
    home:["דובי נותן אומץ להרפתקה.","דובי מחכה עם חיבוק קטן.","דובי מצא כוכב חם."],
    correct:["דובי אומר: עשית את זה!","דובי נותן חיבוק של הצלחה.","דובי שמח מאוד."],
    return:["דובי שמר לך חיבוק.","דובי שמח שחזרת.","דובי מוכן לעוד אתגר רגוע."]
  },
  "🦝": {
    home:["רוני הדביבון מחפש רמזים.","רוני מצא הפתעה בין העלים.","רוני מוכן לחקור את היער."],
    correct:["רוני מצא את התשובה!","רוני אומר: רמז מעולה!","רוני מחייך מתחת למסכה."],
    return:["רוני שמר לך הפתעה.","רוני חיכה ליד הסלע.","רוני מוכן לחקור שוב."]
  }
};
const BUDDY_UNLOCK_BASE = 4;
const TROPHY_ACCESSORY_UPGRADES = ["✨ תרמיל מסע זוהר","🌟 כובע הרפתקה מוזהב","💫 צעיף כוכבים","🔭 משקפת אור","👑 כתר יהלומים","🧭 מצפן ירח","✨ אבקת אור מנצנצת","💎 אבן קשת"];
const TROPHY_UPGRADE_TIERS = ["שדרוג זהב","שדרוג כוכבים","שדרוג ירח","שדרוג קשת"];
const TROPHY_ACCESSORIES = ["🎒 תרמיל מסע","🧢 כובע הרפתקה","🧣 צעיף זוהר","🔭 משקפת כוכבים","👑 כתר היער","🧭 מצפן קסום","✨ אבקת אור","💎 אבן זוהרת"];
const SAMPLE_NAMES = ["הראל","גבע","גוני","ים","אודי","עומר","מיכל","גילי","שושי"];
const STAR_GOAL = 10;
const MOSAIC_TILES = 48;
const MOSAIC_REVEAL_ORDER = Array.from({length:MOSAIC_TILES},(_,index)=>(index*17+11)%MOSAIC_TILES);
const BUDDY_IMAGES = {
  "🦊": "assets/brightwood-fox.png",
  "🐼": "assets/brightwood-panda.png",
  "🐰": "assets/brightwood-rabbit.png",
  "🦁": "assets/brightwood-lion.png",
  "🐶": "assets/buddy-dog.svg",
  "🐱": "assets/buddy-cat.svg",
  "🦉": "assets/buddy-owl.svg",
  "🐧": "assets/buddy-penguin.svg",
  "🐿️": "assets/buddy-squirrel.svg",
  "🦔": "assets/buddy-hedgehog.svg",
  "🧸": "assets/buddy-bear.svg",
  "🦝": "assets/buddy-raccoon.svg"
};
const BUDDY_IMAGES_OLDER = {
  "🦊": "assets/brightwood-older-fox.png",
  "🐼": "assets/brightwood-older-panda.png",
  "🐰": "assets/brightwood-older-rabbit.png",
  "🦁": "assets/brightwood-older-lion.png",
  "🐶": "assets/buddy-dog.svg",
  "🐱": "assets/buddy-cat.svg",
  "🦉": "assets/buddy-owl.svg",
  "🐧": "assets/buddy-penguin.svg",
  "🐿️": "assets/buddy-squirrel.svg",
  "🦔": "assets/buddy-hedgehog.svg",
  "🧸": "assets/buddy-bear.svg",
  "🦝": "assets/buddy-raccoon.svg"
};

const BANK = {
  math: [
    { skill:"ספירה", type:"סופרים ובוחרים", q:"כמה כוכבים אתם רואים?", visual:"⭐ ⭐ ⭐", a:["2","3","4","5"], correct:"3", explain:"סופרים לאט: אחת, שתיים, שלוש.", hard:{q:"כמה כוכבים אתם רואים?",visual:"⭐ ⭐ ⭐ ⭐ ⭐ ⭐",a:["4","5","6","7"],correct:"6",explain:"סופרים כל כוכב פעם אחת: שישה כוכבים."}},
    { skill:"רצפים", type:"רצף מספרים", q:"איזה מספר מגיע עכשיו?", visual:"1  ·  2  ·  3  ·  ?", a:["2","4","5","6"], correct:"4", word:true, explain:"אחרי 3 מגיע המספר 4.", hard:{q:"איזה מספר חסר?",visual:"2  ·  4  ·  6  ·  ?",a:["7","8","9","10"],correct:"8",explain:"המספרים קופצים בכל פעם בשתיים: 2, 4, 6, 8."}},
    { skill:"השוואה", type:"יותר או פחות", q:"באיזו קבוצה יש יותר?", visual:"", a:["🍎 🍎","🍎 🍎 🍎 🍎","🍎","אותו דבר"], correct:"🍎 🍎 🍎 🍎", explain:"ארבעה תפוחים הם יותר משניים או מאחד."},
    { skill:"חיבור", type:"חיבור קטן", q:"שתי ציפורים פגשו עוד אחת. כמה יש עכשיו?", visual:"🐦 🐦  +  🐦", a:["2","3","4","5"], correct:"3", explain:"שתי ציפורים ועוד ציפור אחת הן שלוש.", hard:{q:"ארבע ציפורים פגשו עוד שלוש. כמה יש עכשיו?",visual:"🐦 🐦 🐦 🐦  +  🐦 🐦 🐦",a:["5","6","7","8"],correct:"7",explain:"ארבע ועוד שלוש הן שבע."}},
    { skill:"צורות", type:"מגלים צורות", q:"איזו צורה עגולה?", visual:"△  □  ○", a:["משולש","ריבוע","עיגול","כוכב"], correct:"עיגול", explain:"לעיגול אין קודקודים, והוא עגול מכל הצדדים."},
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

const ADDED_ICON_ITEMS = [
  ["🐂","שור","בעלי חיים",true],
  ["🐐","עז","בעלי חיים",true],
  ["🦙","למה","בעלי חיים",true],
  ["🦏","קרנף","בעלי חיים",true],
  ["🦛","היפופוטם","בעלי חיים",true],
  ["🐆","נמר","בעלי חיים",true],
  ["🦍","גורילה","בעלי חיים",true],
  ["🦔","קיפוד","בעלי חיים",true],
  ["🦨","בואש","בעלי חיים",false],
  ["🦡","גירית","בעלי חיים",false],
  ["🐚","צדף","ים",true],
  ["🐋","לווייתן","ים",true],
  ["🐜","נמלה","חרקים",true],
  ["🦑","דיונון","ים",false],
  ["🐛","זחל","חרקים",true],
  ["🐞","פרת משה רבנו","חרקים",true],
  ["🦂","עקרב","בעלי חיים",false],
  ["🍐","אגס","מזון",true],
  ["🍑","אפרסק","מזון",true],
  ["🥭","מנגו","מזון",true],
  ["🥥","קוקוס","מזון",true],
  ["🌶️","פלפל חריף","מזון",true],
  ["🥜","בוטן","מזון",true],
  ["🧀","גבינה צהובה","מזון",true],
  ["🎲","קובייה","משחקים",true],
  ["🎸","גיטרה","מוזיקה",true],
  ["🥁","תוף","מוזיקה",true],
  ["🧩","פאזל","משחקים",true],
  ["🏀","כדורסל","ספורט",true],
  ["🔭","טלסקופ","מדע",false],
  ["🔬","מיקרוסקופ","מדע",false],
  ["🧲","מגנט","מדע",false],
  ["💎","יהלום","טבע",false],
  ["🏐","כדורעף","ספורט",true],
  ["⛲","מזרקה","מקומות",true],
  ["🌉","גשר","מקומות",true]
];

function generatedIconQuestions(level,{imageOnly=false,youngOnly=false}={}){
  const items=youngOnly?ADDED_ICON_ITEMS.filter(item=>item[3]):ADDED_ICON_ITEMS;
  return items.map(([icon,label,category],i)=>{
    const sameCategory=items.filter(item=>item[2]===category&&item[0]!==icon);
    const fallback=items.filter(item=>item[0]!==icon&&!sameCategory.includes(item));
    const distractors=shuffled([...sameCategory,...fallback]).slice(0,3);
    const answer=other=>imageOnly?other[0]:`${other[0]} ${other[1]}`;
    return {
      id:`nature-icon-${level}-${i}`,
      skill:"זיהוי תמונות",
      type:"מזהים ובוחרים",
      q:imageOnly?`איפה ${label}?`:`איזו תמונה מציגה ${label}?`,
      visual:"",
      a:shuffled([[icon,label,category],...distractors].map(answer)),
      correct:answer([icon,label,category]),
      explain:`זהו ${label}.`
    };
  });
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
  const factQuestions=facts.slice(0,count).map(([q,correct,wrong,skill,visual],i)=>({id:`nature-${level}-${i}`,skill,type:skill,q,visual,a:shuffled([correct,...wrong]),correct,explain:`התשובה הנכונה היא ${correct}.`}));
  return [...factQuestions,...generatedIconQuestions(level)];
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
    ["מה מהדברים הבאים גדל?","🌱",["⚽","🥄","👟"],"חי וצומח","💧"],
    ["מי עוזרת לפרחים?","🐝",["🐟","🐱","🐢"],"חי וצומח","🌸"],
    ["מה צריך צמח?","💧",["🧸","🚗","🎈"],"חי וצומח","🌱"],
    ["איזה פרי גדל על עץ?","🍎",["🥕","🥔","🧅"],"חי וצומח","🌳"],
    ["מה מתאים ליום קר?","🧣",["🩱","🕶️","🩴"],"מזג אוויר","❄️"],
    ["מה מגיע מעננים כהים?","🌧️",["🔥","🏖️","🌵"],"מזג אוויר","☁️"],
    ["איזו חיה חיה ליד מים?","🐸",["🦒","🐪","🐓"],"בעלי חיים","💦"],
    ["מה שומרים בתוך כוורת?","🍯",["🧊","⚽","🧦"],"חי וצומח","🐝"]
  ];
  const preschoolQuestions=questions.map(([q,correct,wrong,skill,visual],i)=>({id:`nature-preschool-${i}`,skill,type:skill,q,visual,a:shuffled([correct,...wrong]),correct,explain:`התשובה הנכונה היא ${correct}.`}));
  return [...preschoolQuestions,...generatedIconQuestions(1,{imageOnly:true,youngOnly:true})];
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
let deferredInstallPrompt = null;
let selectedAge = 5;
let selectedBuddy = "🦊";
let editingId = null;
let sampleNameIndex = 0;
let gamePickerBackTarget = "home";
let introIndex = 0;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const clamp = (n,min,max) => Math.max(min,Math.min(max,n));

function analyticsReady(){
  return Boolean(GA_MEASUREMENT_ID && /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID));
}

function initAnalytics(){
  if(!analyticsReady() || window.gtag)return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ window.dataLayer.push(arguments); };
  const script=document.createElement("script");
  script.async=true;
  script.src=`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  document.head.appendChild(script);
  window.gtag("js",new Date());
  window.gtag("config",GA_MEASUREMENT_ID,{send_page_view:false});
  trackEvent("app_open");
}

function trackEvent(name,params={}){
  if(!analyticsReady() || typeof window.gtag!=="function")return;
  window.gtag("event",name,{app_version:APP_VERSION,...params});
}

function activeProfile(){ return state.profiles.find(p => p.id === state.activeId); }
function ageLevel(age){ return clamp(Number(age)||3,1,9); }
function defaultGameLevel(gameId,age){
  if(gameId==="count"||gameId==="number-quantity")return ({3:1,4:2,5:4,6:7,7:9})[Number(age)]||1;
  if(gameId==="big-small"&&Number(age)===5)return 6;
  return ageLevel(age);
}
function applyDefaultHiddenGames(p){
  p.autoHiddenGames ||= [];
  const targetVersion = 3;
  const ageChanged = p.defaultHiddenGamesAge!==p.age;
  const playerAge=Number(p.age)||3;
  const futureHidden=KIDS_GAMES.catalog
    .filter(game=>!game.disabled&&game.minAge>playerAge&&game.minAge<=Math.min(7,playerAge+2))
    .map(game=>game.id);
  const defaultHidden = [
    ...(playerAge>=6 ? ["count","number-quantity"] : []),
    ...futureHidden
  ];
  if(!ageChanged && p.defaultHiddenGamesVersion===targetVersion)return;
  if(ageChanged){
    p.hiddenGames = (p.hiddenGames||[]).filter(id=>!p.autoHiddenGames.includes(id));
    p.autoHiddenGames = [];
  }
  defaultHidden.forEach(id=>{
    const wasAlreadyAutoHidden = p.autoHiddenGames.includes(id);
    const isNewDefaultRule = !ageChanged && p.defaultHiddenGamesVersion!==targetVersion && (id==="number-quantity" || futureHidden.includes(id));
    if(ageChanged || wasAlreadyAutoHidden || isNewDefaultRule){
      p.hiddenGames.push(id);
      p.autoHiddenGames.push(id);
      const game=KIDS_GAMES.catalog.find(item=>item.id===id);
      if(game?.minAge>playerAge)p.gameLevels[id]=1;
    }
  });
  p.hiddenGames = [...new Set(p.hiddenGames)];
  p.autoHiddenGames = [...new Set(p.autoHiddenGames)];
  p.defaultHiddenGamesAge = p.age;
  p.defaultHiddenGamesVersion = targetVersion;
}
function subjectName(p,key){ return key==="math"&&p?.age<=4?"מספרים":SUBJECTS[key].name; }
function subjectDescription(p,key){ return key==="math"&&p?.age<=4?"סופרים עצמים ומשחקים במספרים":SUBJECTS[key].desc; }
function trophyCount(p){ return Math.floor((p?.stars||0)/STAR_GOAL); }
function nextStarGoal(p){ return (trophyCount(p)+1)*STAR_GOAL; }
function goalCycleProgress(p){ return (p?.stars||0)%STAR_GOAL; }
function buddyUnlockCount(p){ return Math.min(BUDDIES.length,BUDDY_UNLOCK_BASE+trophyCount(p)); }
function isBuddyUnlocked(p,buddy){ return BUDDIES.indexOf(buddy) < buddyUnlockCount(p) || p?.buddy===buddy; }
function nextUnlockBuddy(p){ return BUDDIES[buddyUnlockCount(p)] || null; }
function trophyReward(trophyNumber){
  if(trophyNumber<=0)return null;
  if(trophyNumber<=TROPHY_ACCESSORIES.length)return TROPHY_ACCESSORIES[trophyNumber-1];
  const zeroBased=trophyNumber-1;
  const itemIndex=zeroBased%TROPHY_ACCESSORIES.length;
  const cycle=Math.floor(zeroBased/TROPHY_ACCESSORIES.length);
  if(cycle===1)return TROPHY_ACCESSORY_UPGRADES[itemIndex];
  return `${TROPHY_ACCESSORIES[itemIndex]} · ${TROPHY_UPGRADE_TIERS[(cycle-2)%TROPHY_UPGRADE_TIERS.length]}`;
}
function earnedAccessories(p){
  return Array.from({length:trophyCount(p)},(_,index)=>trophyReward(index+1)).filter(Boolean);
}
function accessoryIcon(item){
  return String(item||"").trim().split(/\s+/)[0] || "";
}
function gameBuddyAccessoryMarkup(p){
  const accessories=earnedAccessories(p);
  if(!accessories.length)return "";
  const visible=accessories.slice(-3);
  const hiddenCount=accessories.length-visible.length;
  return `<span class="pip-accessories" aria-label="אביזרים שהושגו">${visible.map(item=>`<span title="${escapeHtml(item)}">${escapeHtml(accessoryIcon(item))}</span>`).join("")}${hiddenCount?`<small>ועוד ${hiddenCount}</small>`:""}</span>`;
}
function latestAccessory(p){
  const trophies=trophyCount(p);
  if(!trophies)return null;
  return trophyReward(trophies);
}
function buddyLine(buddy,kind,salt=0){
  const lines=BUDDY_LINES[buddy]?.[kind]||BUDDY_LINES["🦊"][kind]||["מוכנים להרפתקה!"];
  return lines[Math.abs(salt)%lines.length];
}
function renderGameBuddyPanel(){
  if(!$("#gameBuddyFriends"))return;
  const p=activeProfile(); if(!p)return;
  const profile=BUDDY_PROFILES[p.buddy]||{name:BUDDY_TITLES[p.buddy]||"החבר למסע",trait:"מוכן להרפתקה"};
  $("#gameBuddyIcon").textContent=p.buddy;
  $("#gameBuddyName").textContent=profile.name;
  $("#gameBuddyLine").textContent=buddyLine(p.buddy,"home",(session?.index||0)+(p.answered||0));
  const unlocked=BUDDIES.filter(b=>isBuddyUnlocked(p,b));
  const next=nextUnlockBuddy(p);
  $("#gameBuddyFriends").innerHTML=[
    ...unlocked.map(b=>`<button class="${b===p.buddy?"selected":""}" data-game-buddy="${b}" title="${BUDDY_PROFILES[b]?.name||BUDDY_TITLES[b]}">${b}</button>`),
    next?`<button class="locked" disabled title="ייפתח בגביע הבא">🔒 ${next}</button>`:""
  ].join("");
}
function prepareProfile(p){
  p.subjects ||= ["math","english"];
  p.progress ||= {};
  p.log ||= [];
  p.stars ||= 0; p.streak ||= 0; p.correct ||= 0; p.answered ||= 0; p.minutes ||= 0; p.daily ||= 0;
  p.skillLevels ||= {};
  p.skillFeedback ||= {};
  p.recentQuestions ||= {};
  p.gameLevels ||= {};
  p.gameFeedback ||= {};
  p.recentGames ||= {};
  p.gameProgress ||= {};
  p.hiddenGames ||= [];
  applyDefaultHiddenGames(p);
  if(p.gameLevelAge!==p.age){
    KIDS_GAMES.catalog.forEach(game=>p.gameLevels[game.id]=defaultGameLevel(game.id,p.age));
    p.gameLevelAge=p.age;
  }
  KIDS_GAMES.catalog.forEach(game=>{
    p.gameLevels[game.id] ||= defaultGameLevel(game.id,p.age);
    p.recentGames[game.id] ||= [];
    p.gameProgress[game.id] ||= {completed:0,correct:0,total:0};
  });
  if(p.countingGamesVersion!==1){
    ["count","number-quantity"].forEach(id=>p.gameLevels[id]=defaultGameLevel(id,p.age));
    p.countingGamesVersion=1;
  }
  Object.keys(SUBJECTS).forEach(key => {
    p.skillLevels[key] ||= {};
    p.skillFeedback[key] ||= {};
    p.recentQuestions[key] ||= [];
    [...new Set((BANK[key]||[]).map(q=>q.skill))].forEach(skill => p.skillLevels[key][skill] ||= ageLevel(p.age));
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
function isAppInstalled(){
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}
function updateInstallUI(){
  const installed=isAppInstalled();
  $$("[data-install-app]").forEach(button=>{
    const label=button.querySelector("[data-install-label]");
    const hint=button.querySelector("[data-install-hint]");
    if(label)label.textContent=installed?"האפליקציה מותקנת":deferredInstallPrompt?"התקנת האפליקציה":"הוספה למסך הבית";
    if(hint)hint.textContent=installed?"אפשר לפתוח אותה ממסך הבית":deferredInstallPrompt?"התקנה בלחיצה אחת":"הצגת הוראות התקנה";
    if(label)label.textContent=deferredInstallPrompt?"התקנת האפליקציה":installed?"פתיחה / התקנה":"הוספה למסך הבית";
    if(hint)hint.textContent=deferredInstallPrompt?"התקנה בלחיצה אחת":installed?"אם הסרתם את האפליקציה, אפשר להתקין שוב מהתפריט":"הצגת הוראות התקנה";
    button.disabled=false;
    button.classList.toggle("installed",installed);
  });
}
async function requestAppInstall(){
  trackEvent("install_clicked");
  if(!deferredInstallPrompt){
    openModal("installModal");
    return;
  }
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt=null;
  updateInstallUI();
}
function setupPWA(){
  window.addEventListener("beforeinstallprompt",event=>{
    event.preventDefault();
    deferredInstallPrompt=event;
    updateInstallUI();
  });
  window.addEventListener("appinstalled",()=>{
    deferredInstallPrompt=null;
    updateInstallUI();
  });
  if("serviceWorker" in navigator){
    window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));
  }
  updateInstallUI();
}
function showScreen(id){
  $$(".screen").forEach(x=>x.classList.remove("active"));
  $("#"+id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="dashboardScreen") renderDashboard();
  if(id==="settingsScreen") renderSettings();
  trackEvent("screen_view",{screen_name:id});
}

function renderIntro(){
  const step=INTRO_STEPS[introIndex];
  $("#introIcon").textContent=step.icon;
  $("#introEyebrow").textContent=step.eyebrow;
  $("#introTitle").textContent=step.title;
  $("#introText").textContent=step.text;
  $("#introDots").innerHTML=INTRO_STEPS.map((_,i)=>`<span class="${i===introIndex?"active":""}"></span>`).join("");
  $("[data-intro-prev]").disabled=introIndex===0;
  $("[data-intro-skip]").classList.toggle("hidden",introIndex===INTRO_STEPS.length-1);
  $("[data-intro-next]").classList.toggle("hidden",introIndex===INTRO_STEPS.length-1);
  $("[data-intro-start]").classList.toggle("hidden",introIndex!==INTRO_STEPS.length-1);
}

function openIntro(){
  introIndex=0;
  renderIntro();
  openModal("introModal");
}

function finishIntro(){
  state.hasSeenIntro=true;
  save();
  closeModal("introModal");
  if(!activeProfile()) openCreate();
}

function init(){
  $("#appVersion").textContent=APP_VERSION;
  document.documentElement.dataset.appVersion=APP_VERSION;
  initAnalytics();
  renderChoiceButtons();
  rotateNamePlaceholder();
  setInterval(rotateNamePlaceholder,3000);
  bindEvents();
  setupPWA();
  if(!state.hasSeenIntro) openIntro();
  else if(!activeProfile()) openCreate();
  renderAll();
}

function renderChoiceButtons(){
  $("#ageOptions").innerHTML=[3,4,5,6,7].map(n=>`<button type="button" class="choice-btn ${n===selectedAge?"selected":""}" data-age="${n}">${n}</button>`).join("");
  const p=editingId?state.profiles.find(x=>x.id===editingId):activeProfile();
  const unlocked=buddyUnlockCount(p);
  const next=nextUnlockBuddy(p);
  $("#buddyOptions").innerHTML=BUDDIES.map((b,index)=>{
    const profile=BUDDY_PROFILES[b]||{name:BUDDY_TITLES[b]||"חבר למסע",trait:"חבר למסע",ability:"קסם"};
    const open=index<unlocked || b===selectedBuddy || p?.buddy===b;
    return `<button type="button" class="choice-btn buddy-choice ${b===selectedBuddy?"selected":""} ${open?"":"locked"}" ${open?"":`disabled`} data-buddy="${b}" title="${profile.name}" aria-label="${profile.name}"><span class="buddy-emoji buddy-motion">${b}</span><b>${profile.name}</b><small>${open?profile.trait:`ייפתח אחרי ${Math.max(1,index-BUDDY_UNLOCK_BASE+1)*STAR_GOAL} כוכבים`}</small><i>יכולת: ${profile.ability}</i></button>`;
  }).join("");
  if($("#buddyUnlockHint")){
    $("#buddyUnlockHint").textContent=next
      ? `מתחילים עם 4 חברים. כל 10 כוכבים פותחים חבר נוסף. החבר הבא: ${BUDDY_PROFILES[next]?.name||BUDDY_TITLES[next]}.`
      : `כל חברי המסע פתוחים! אפשר לבחור את מי שהכי מתאים להרפתקה היום.`;
  }
}

function rotateNamePlaceholder(){
  const input=$("#childName"); if(!input)return;
  input.placeholder=`למשל: ${SAMPLE_NAMES[sampleNameIndex%SAMPLE_NAMES.length]}`;
  sampleNameIndex++;
}

function renderAll(){
  const p=activeProfile();
  $("#profileName").textContent=p?.name||"שחקן חדש";
  $("#miniAvatar").textContent=p?.buddy||"🦊";
  $("#starCount").textContent=p?.stars||0;
  const trophies=trophyCount(p);
  $("#headerTrophyCount").textContent=trophies;
  $(".star-chip").classList.toggle("has-trophies",trophies>0);
  $(".star-chip").title=trophies?`${p.name} זכה ב־${trophies} ${trophies===1?"גביע":"גביעים"}`:"עוד לא הושג גביע";
  const streak=p?.streak||0;
  $("#streakText").textContent=streak===1?"יום תרגול אחד":`${streak} ימים ברצף`;
  $(".sound-toggle").textContent=state.sound?"🔊":"🔇";
  const today=p?.dailyDate===new Date().toDateString()?p.daily||0:0;
  $("#dailyDone").textContent=`${Math.min(today,3)} / 3`;
  $("#dailyBar").style.width=`${Math.min(today/3*100,100)}%`;
  const nextGoal=nextStarGoal(p),cycleStars=goalCycleProgress(p);
  $("#homeGoalLabel").textContent=`${nextGoal} כוכבים`;
  $("#homeGoalCount").textContent=`${cycleStars} / ${STAR_GOAL}`;
  $("#homeGoalBar").style.width=`${cycleStars}%`;
  const heroBuddyProfile=p ? (BUDDY_PROFILES[p.buddy]||{name:BUDDY_TITLES[p.buddy]||"חבר המסע"}) : null;
  $("#heroBuddyText").textContent=p
    ? `בוחרים שביל, פותרים חידות ועוזרים ל${heroBuddyProfile.name} להאיר את היער הזוהר!`
    : "בוחרים שביל, פותרים חידות ועוזרים לחבר המסע להאיר את היער הזוהר!";
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
  const firstGoalProgress=Math.min(stars,STAR_GOAL)/STAR_GOAL;
  const darkness=.62*(1-firstGoalProgress)+.06;
  const age=p?.age||3;
  const set=age>=6?BUDDY_IMAGES_OLDER:BUDDY_IMAGES;
  const image=set[p?.buddy]||set["🦊"];
  const ageTint=age===3?"rgba(255,218,120,.10)":age<=5?"rgba(25,67,86,.05)":"rgba(12,42,60,.02)";
  $(".hero").style.backgroundImage=`linear-gradient(90deg,rgba(224,249,255,.94) 0%,rgba(224,249,255,.76) 35%,rgba(224,249,255,0) 63%),linear-gradient(${ageTint},${ageTint}),url("${image}")`;
  $(".hero").style.setProperty("--forest-darkness",darkness.toFixed(2));
  $(".hero").dataset.ageWorld=age===3?"preschool":age<=5?"middle":"older";
  const revealed=Math.min(MOSAIC_TILES,Math.max(2,Math.ceil(firstGoalProgress*MOSAIC_TILES)));
  $("#forestMosaic").innerHTML=Array.from({length:MOSAIC_TILES},(_,index)=>`<span class="${MOSAIC_REVEAL_ORDER.indexOf(index)<revealed?"revealed":""}"></span>`).join("");
  $(".speech-bubble").innerHTML=stars
    ? `${buddyLine(p?.buddy||"🦊","return",stars)}<br><b>אספנו ${stars} ${stars===1?"כוכב":"כוכבים"}</b>`
    : `${buddyLine(p?.buddy||"🦊","home",age)}<br><b>בואו נאיר את היער!</b>`;
}

function subjectLevel(p,key){
  const levels=KIDS_GAMES.catalog.filter(game=>!game.disabled&&game.subject===key&&gameMatchesAge(game,p.age)).map(game=>p.gameLevels?.[game.id]||ageLevel(p.age));
  return levels.length ? Math.round(levels.reduce((a,b)=>a+b,0)/levels.length) : ageLevel(p.age);
}

function gameMatchesAge(game,age){
  return game.minAge<=age && (!game.maxAge || game.maxAge>=age);
}
function gameVisibleInSettings(game,age){
  const maxSettingsAge=Math.min(7,(Number(age)||3)+2);
  return game.minAge<=maxSettingsAge && (!game.maxAge || game.maxAge>=Number(age));
}

function availableGames(p,subject,includeHidden=false){
  return KIDS_GAMES.catalog.filter(game=>!game.disabled&&game.subject===subject&&gameVisibleInSettings(game,p.age)&&(includeHidden||!p.hiddenGames.includes(game.id)));
}

function renderGameChoices(subject){
  const p=activeProfile(),games=availableGames(p,subject);
  $("#gamePickerTitle").textContent=subjectName(p,subject);
  $("#gamePickerSubtitle").textContent="בחרו משחק";
  $("#gameChoices").innerHTML=games.length
    ? games.map(game=>`<button class="game-choice" data-game="${game.id}"><span>${game.icon}</span><b>${game.name}</b><small>${game.desc}</small><i>רמה ${p.gameLevels[game.id]}</i></button>`).join("")
    : `<div class="empty-state game-picker-empty">כל המשחקים בנושא הזה מוסתרים כרגע. אפשר להחזיר אותם במסך ההגדרות.</div>`;
}

function canChooseAdventureSubject(){
  const p=activeProfile(); if(!p)return false;
  return (p.subjects||[]).filter(key=>availableGames(p,key).length).length>1;
}

function openGamePicker(subject,{backToAdventure=false}={}){
  const p=activeProfile(); if(!p)return openCreate();
  gamePickerBackTarget=backToAdventure&&canChooseAdventureSubject()?"adventure":"home";
  renderGameChoices(subject); showScreen("gamePickerScreen");
}

function backFromAdventure(){
  showScreen("homeScreen");
}

function backFromGamePicker(){
  if(gamePickerBackTarget==="adventure"&&canChooseAdventureSubject()){
    renderAdventureChoices();
    showScreen("adventureScreen");
  } else {
    showScreen("homeScreen");
  }
}

function renderSubjects(){
  const p=activeProfile(), chosen=p?.subjects||["math","english","reading","nature"];
  $("#subjectGrid").innerHTML=chosen.map(key=>{
    const s=SUBJECTS[key], level=p?subjectLevel(p,key):1;
    return `<button class="subject-card ${s.class}" data-subject="${key}"><span class="level-chip">רמה ${level}</span><span class="icon">${s.icon}</span><h3>${subjectName(p,key)}</h3><p>${subjectDescription(p,key)}</p><span class="go">←</span></button>`;
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
  $("#adventureChoices").innerHTML=(p?.subjects||[]).filter(key=>availableGames(p,key).length).map(key=>`<button class="adventure-choice" data-play-subject="${key}"><span>${SUBJECTS[key].icon}</span><b>${subjectName(p,key)}</b><small>${subjectDescription(p,key)}</small></button>`).join("");
}

function openAdventureFlow(){
  const p=activeProfile(); if(!p)return openCreate();
  const playableSubjects=(p.subjects||[]).filter(key=>availableGames(p,key).length);
  if(playableSubjects.length===1)return openGamePicker(playableSubjects[0]);
  renderAdventureChoices(); showScreen("adventureScreen");
}

function openCreate(){
  editingId=null; selectedAge=5; selectedBuddy="🦊";
  $("#profileFormEyebrow").textContent="הרפתקן חדש!";
  $("#profileFormTitle").textContent="יוצרים פרופיל לילד/ה";
  $("#profileSubmit").innerHTML=`יוצאים לדרך <span>←</span>`;
  $("#childName").value="";
  rotateNamePlaceholder();
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

function deleteActiveProfileFromSettings(){
  const p=activeProfile(); if(!p)return openCreate();
  editingId=p.id;
  deleteCurrentProfile();
}

function adaptedQuestion(q,p,subject){
  const level=p.skillLevels?.[subject]?.[q.skill]||ageLevel(p.age);
  return level>=4&&q.hard ? {...q,...q.hard} : {...q};
}

function questionSignature(q){
  return [
    q.skill,
    q.type,
    q.q,
    q.visual,
    q.correct,
    Array.isArray(q.patternTiles)?q.patternTiles.join("|"):"",
    Array.isArray(q.tokens)?q.tokens.join("|"):"",
    q.dragSource||"",
    q.audio?.key||q.audio?.text||"",
    q.clock?`${q.clock.hour}:${q.clock.minutes}`:"",
    q.mode||""
  ].join("::");
}

function uniqueQuestions(pool){
  const seen=new Set();
  return pool.filter(q=>{
    const key=questionSignature(q);
    if(seen.has(key))return false;
    seen.add(key);
    return true;
  });
}

function startGame(gameId){
  const p=activeProfile(); if(!p){openCreate();return}
  const game=KIDS_GAMES.catalog.find(item=>item.id===gameId); if(!game||game.disabled||!gameVisibleInSettings(game,p.age)||p.hiddenGames.includes(game.id))return;
  const subject=game.subject,level=p.gameLevels[gameId]||ageLevel(p.age);
  trackEvent("game_started",{subject,game_id:gameId,game_level:level});
  const pool=uniqueQuestions(KIDS_GAMES.build(gameId,level,p));
  const recent=new Set(p.recentGames[gameId]||[]);
  let available=pool.filter(q=>!recent.has(questionSignature(q)));
  if(available.length<5)available=pool;
  const questions=shuffled(available).slice(0,5).map(q=>({...q,a:Array.isArray(q.a)?shuffled(q.a):[]}));
  p.recentGames[gameId]=[...(p.recentGames[gameId]||[]),...questions.map(questionSignature)].slice(-Math.min(40,Math.max(12,pool.length-5)));
  save();
  session={subject,gameId,game,level,questions,index:0,correct:0,start:Date.now(),locked:false,results:{}};
  showScreen("gameScreen"); renderQuestion();
}

function gameBack(){
  if(session?.subject){
    const subject=session.subject;
    session=null;
    openGamePicker(subject,{backToAdventure:true});
    return;
  }
  showScreen("homeScreen");
}

function returnAfterFinishedGame(){
  const subject=session?.subject;
  closeModal("celebrationModal");
  closeModal("milestoneModal");
  session=null;
  if(subject){
    showScreen("homeScreen");
    openGamePicker(subject,{backToAdventure:true});
  } else {
    showScreen("homeScreen");
  }
}

function renderClockFace(hour,minutes){
  const hourAngle=((hour%12)+(minutes/60))*30;
  const minuteAngle=minutes*6;
  const ticks=Array.from({length:12},(_,i)=>{
    const angle=i*30;
    const strong=i%3===0;
    return `<line class="clock-tick${strong?" strong":""}" x1="60" y1="${strong?8:10}" x2="60" y2="${strong?18:15}" transform="rotate(${angle} 60 60)"></line>`;
  }).join("");
  const digital=`${String(hour).padStart(2,"0")}:${String(minutes).padStart(2,"0")}`;
  return `<div class="analog-clock" aria-label="${digital}">
    <svg viewBox="0 0 120 120" role="img">
      <circle class="clock-face" cx="60" cy="60" r="54"></circle>
      ${ticks}
      <text class="clock-number" x="60" y="25">12</text>
      <text class="clock-number" x="95" y="62">3</text>
      <text class="clock-number" x="60" y="98">6</text>
      <text class="clock-number" x="25" y="62">9</text>
      <line class="clock-hour-hand" x1="60" y1="60" x2="60" y2="34" transform="rotate(${hourAngle} 60 60)"></line>
      <line class="clock-minute-hand" x1="60" y1="60" x2="60" y2="20" transform="rotate(${minuteAngle} 60 60)"></line>
      <circle class="clock-center" cx="60" cy="60" r="4.4"></circle>
    </svg>
  </div>`;
}

function renderQuestion(){
  const q=session.questions[session.index], p=activeProfile();
  $("#gameSubject").textContent=subjectName(p,session.subject);
  $("#gameLevel").textContent=`${session.game.name} · רמה ${session.level}`;
  $("#questionLabel").textContent=`${session.index+1} מתוך ${session.questions.length}`;
  $("#questionBar").style.width=`${session.index/session.questions.length*100}%`;
  $("#questionType").textContent=q.type; $("#questionText").textContent=q.q;
  $("#questionVisual").textContent=q.audio || q.patternTiles || q.clock ? "" : (q.visual||"");
  $("#questionVisual").className="question-visual"+(q.word?" word":"")+(q.objectGrid?" object-grid":"");
  $("#questionVisual").classList.toggle("no-visual",!q.visual&&!q.audio&&!q.patternTiles&&!q.clock);
  if(q.clock){
    $("#questionVisual").classList.add("clock-visual");
    $("#questionVisual").innerHTML=renderClockFace(q.clock.hour,q.clock.minutes);
  }
  if(q.patternTiles){
    $("#questionVisual").classList.add("pattern-visual");
    $("#questionVisual").innerHTML=q.patternTiles.map(tile=>`<span class="${tile==="?"?"pattern-missing":"pattern-tile"}">${escapeHtml(tile)}</span>`).join("");
    requestAnimationFrame(()=>{$("#questionVisual").scrollLeft=$("#questionVisual").scrollWidth;});
  }
  if(q.audio){
    const listen=document.createElement("button");
    listen.type="button"; listen.className="question-audio"; listen.dataset.playAudio="true"; listen.textContent="🔊 לשמוע";
    $("#questionVisual").appendChild(listen);
  }
  $("#feedback").className="feedback"; $("#feedback").textContent="";
  $("#explanation").className="explanation"; $("#explanation").textContent="";
  $(".pip-corner").innerHTML=`<span class="pip-buddy">${escapeHtml(p.buddy)}</span>${gameBuddyAccessoryMarkup(p)}`;
  renderGameBuddyPanel();
  renderQuestionInteraction(q);
  session.locked=false;
  if(q.audio?.kind==="animal")setTimeout(()=>{if(session?.questions?.[session.index]===q)playQuestionAudio()},250);
}

function renderQuestionInteraction(q){
  const grid=$("#answerGrid");
  grid.className="answer-grid";
  session.composed=[]; session.memoryOpen=[]; session.memoryMatched=new Set(); session.gridSelection=[];
  if(q.mode==="drag"){
    grid.classList.add("drag-answer-grid");
    grid.innerHTML=`<div class="drag-source" draggable="true" data-drag-source="${escapeHtml(q.dragSource||q.visual||"")}">${escapeHtml(q.dragSource||q.visual||"")}</div><div class="drag-targets">${q.a.map(a=>`<button class="answer-btn drag-target" data-answer="${escapeHtml(a)}">${a}</button>`).join("")}</div>`;
    return;
  }
  if(q.mode==="build"){
    grid.classList.add("build-answer-grid");
    grid.innerHTML=`<div class="build-result" id="buildResult">בחרו לפי הסדר</div><div class="token-bank">${q.tokens.map((token,index)=>`<button class="token-btn" data-token-index="${index}">${escapeHtml(token)}</button>`).join("")}</div><div class="build-actions"><button class="outline-btn" data-build-undo>מחיקה</button><button class="primary-btn compact" data-build-check>בדיקה</button></div>`;
    return;
  }
  if(q.mode==="memory"){
    grid.classList.add("memory-grid");
    const cards=shuffled(q.pairs.flatMap(([picture,word],pair)=>[{text:picture,key:String(pair)},{text:word,key:String(pair)}]));
    session.memoryCards=cards;
    grid.innerHTML=cards.map((card,index)=>`<button class="memory-card" data-memory-index="${index}" data-memory-key="${card.key}"><span>?</span><b>${escapeHtml(card.text)}</b></button>`).join("");
    return;
  }
  if(q.mode==="wordsearch"){
    grid.classList.add("word-search-wrap");
    grid.innerHTML=`<div class="word-selection" id="wordSelection">בחרו אותיות לפי הסדר</div><div class="word-search-grid" style="--grid-size:${q.size}">${q.grid.map((letter,index)=>`<button data-grid-index="${index}">${letter}</button>`).join("")}</div><div class="build-actions"><button class="outline-btn" data-grid-clear>ניקוי</button><button class="primary-btn compact" data-grid-check>בדיקה</button></div>`;
    return;
  }
  grid.innerHTML=q.a.map(a=>{
    const scale=q.answerScales?.[a];
    const content=scale?`<span class="scaled-answer-icon" style="font-size:${Math.round(64*scale)}px">${escapeHtml(a)}</span>`:escapeHtml(a);
    return `<button class="answer-btn" data-answer="${escapeHtml(a)}">${content}</button>`;
  }).join("");
  grid.classList.toggle("object-grid-answers",Boolean(q.answerObjectGrid));
  grid.classList.toggle("image-answers",Boolean(q.imageAnswers)||(session.subject==="nature"&&activeProfile().age<=4));
  grid.classList.toggle("scaled-image-answers",Boolean(q.answerScales));
  const imageLike=Boolean(q.imageAnswers)||(session.subject==="nature"&&activeProfile().age<=4);
  grid.classList.toggle("roomy-image-answers",imageLike&&q.a.length<=4);
  const maxObjectCount=q.answerObjectGrid?Math.max(...q.a.map(a=>String(a).split(/\s+/).filter(Boolean).length)):0;
  grid.classList.toggle("large-object-grid-answers",Boolean(q.answerObjectGrid)&&maxObjectCount>8&&maxObjectCount<=14);
  grid.classList.toggle("roomy-object-grid-answers",Boolean(q.answerObjectGrid)&&maxObjectCount<=8);
}

function updateBuildResult(){
  const q=session.questions[session.index],joinWith=q.joinWith??"";
  $("#buildResult").textContent=session.composed.length?session.composed.map(x=>x.token).join(joinWith):"בחרו לפי הסדר";
}

function playQuestionAudio(){
  const q=session?.questions?.[session.index]; if(!q?.audio||!state.sound)return;
  if(q.audio.kind==="speech"||q.audio.kind==="animal"){
    speechSynthesis.cancel();
    const animalSounds={woof:"woof woof",meow:"meow",moo:"moo",baa:"baa baa",neigh:"neigh",cluck:"cluck cluck",roar:"roar",trumpet:"toot toot",croak:"ribbit ribbit",buzz:"buzz buzz",hoot:"hoot hoot"};
    const utterance=new SpeechSynthesisUtterance(q.audio.kind==="animal" ? (animalSounds[q.audio.key]||"listen") : q.audio.text);
    utterance.lang="en-US"; utterance.rate=.82; utterance.pitch=1.05; speechSynthesis.speak(utterance);
    return;
  }
  const C=window.AudioContext||window.webkitAudioContext,ctx=new C(),patterns={
    woof:[180,125,180],meow:[420,600,480],moo:[120,95,110],baa:[280,220,280],neigh:[500,380,620],
    cluck:[650,420,700],roar:[90,75,110],trumpet:[360,520,700],grunt:[115,90,120],squawk:[700,420,760],
    click:[900,1200,950],croak:[130,100,130],buzz:[190,205,195,210],hoot:[260,210,260],whale:[180,260,340]
  },notes=patterns[q.audio.key]||[300,420,300];
  notes.forEach((freq,index)=>{const o=ctx.createOscillator(),g=ctx.createGain(),start=ctx.currentTime+index*.18;o.type=index%2?"triangle":"sine";o.frequency.setValueAtTime(freq,start);g.gain.setValueAtTime(.001,start);g.gain.exponentialRampToValueAtTime(.18,start+.03);g.gain.exponentialRampToValueAtTime(.001,start+.16);o.connect(g);g.connect(ctx.destination);o.start(start);o.stop(start+.18);});
}

function answer(value,button){
  if(session.locked)return; session.locked=true;
  const q=session.questions[session.index], right=value===q.correct, p=activeProfile();
  session.results[q.skill] ||= {correct:0,total:0}; session.results[q.skill].total++;
  p.answered++;
  if(right){
    p.correct++; session.correct++; session.results[q.skill].correct++;
    button.classList.add("correct"); chime(true);
    $("#feedback").textContent=session.correct%2===0 ? buddyLine(p.buddy,"correct",p.correct+session.index) : "כן! בדיוק! ★";
    $("#feedback").className="feedback good";
  } else {
    button.classList.add("wrong"); chime(false);
    $("#feedback").textContent="לא בדיוק"; $("#feedback").className="feedback bad";
    $$(".answer-btn").find(b=>b.dataset.answer===q.correct)?.classList.add("correct");
    $("#explanation").textContent=q.explain; $("#explanation").className="explanation show";
  }
  save();
  setTimeout(()=>{session.index++;session.index<session.questions.length?renderQuestion():finishGame()},right?1050:2400);
}

function finishGame(){
  const p=activeProfile(), key=session.subject, now=new Date().toDateString(), earned=Math.max(1,session.correct);
  trackEvent("game_finished",{subject:key,game_id:session.gameId,game_level:session.level,questions_total:session.questions.length,correct_total:session.correct,stars_earned:earned});
  const previousTrophies=trophyCount(p);
  p.stars+=earned; p.progress[key] ||= {completed:0,level:1,correct:0,total:0};
  const newTrophies=trophyCount(p);
  const prog=p.progress[key]; prog.completed++; prog.correct+=session.correct; prog.total+=session.questions.length;
  const gameProg=p.gameProgress[session.gameId]||={completed:0,correct:0,total:0};
  gameProg.completed++; gameProg.correct+=session.correct; gameProg.total+=session.questions.length;
  prog.level=subjectLevel(p,key);
  if(p.dailyDate!==now){p.dailyDate=now;p.daily=0} p.daily++;
  p.streak=Math.max(1,p.streak||0);
  p.minutes+=Math.max(1,Math.round((Date.now()-session.start)/60000));
  p.log.unshift({subject:key,gameId:session.gameId,gameName:session.game.name,correct:session.correct,total:session.questions.length,earned,date:new Date().toLocaleDateString("he-IL",{month:"short",day:"numeric"})});
  p.log=p.log.slice(0,8); save();
  $("#celebrateBuddy").textContent=p.buddy;
  $("#earnedStarsTitle").textContent=`אספתם ${earned} ${earned===1?"כוכב":"כוכבים"}`;
  $("#finishEncouragement").textContent="";
  if(newTrophies>previousTrophies){
    const newFriend=BUDDIES[BUDDY_UNLOCK_BASE+newTrophies-1];
    const accessory=latestAccessory(p);
    $("#milestoneTrophyNumber").textContent=newTrophies;
    $("#milestoneTitle").textContent=newFriend ? `נפתח חבר חדש למסע!` : `היער כולו זוהר!`;
    $("#milestoneText").textContent=[
      `אספתם עוד 10 כוכבים וזכיתם בגביע מספר ${newTrophies}.`,
      accessory?`קיבלתם גם אביזר חדש: ${accessory}.`:null,
      newFriend?`החבר החדש שנפתח: ${newFriend} ${BUDDY_PROFILES[newFriend]?.name||BUDDY_TITLES[newFriend]}.`:null
    ].filter(Boolean).join(" ");
    openModal("milestoneModal");
    playMilestoneMelody();
  } else {
    openModal("celebrationModal");
  }
  renderAll();
}

function renderDashboard(){
  const p=activeProfile(); if(!p)return;
  $("#dashboardSubtitle").textContent=`תמונה של ההתקדמות האחרונה של ${p.name}.`;
  $("#dashStars").textContent=p.stars; $("#dashQuestions").textContent=p.answered;
  $("#dashAccuracy").textContent=p.answered?Math.round(p.correct/p.answered*100)+"%":"—";
  $("#dashTime").textContent=p.minutes+" דקות";
  const trophies=trophyCount(p),cycleStars=goalCycleProgress(p),remaining=STAR_GOAL-cycleStars;
  $("#trophyCount").textContent=trophies;
  $("#trophyTitle").textContent=trophies?(trophies===1?"יש לי גביע אחד!":`יש לי ${trophies} גביעים!`):"בדרך לגביע הראשון";
  $("#trophyText").textContent=`עוד ${remaining} ${remaining===1?"כוכב":"כוכבים"} לגביע הבא.`;
  $("#trophyBar").style.width=`${cycleStars}%`;
  const buddyProfile=BUDDY_PROFILES[p.buddy]||{name:BUDDY_TITLES[p.buddy]||"החבר למסע",trait:"ממשיך איתכם בהרפתקה",ability:"התמדה"};
  $("#dashboardBuddyIcon").textContent=p.buddy;
  $("#dashboardBuddyName").textContent=buddyProfile.name;
  $("#dashboardBuddyText").textContent=`${buddyProfile.trait}. אספתם יחד ${p.stars} ${p.stars===1?"כוכב":"כוכבים"}.`;
  $("#dashboardBuddyAbility").textContent=`יכולת: ${buddyProfile.ability}`;
  $("#dashboardBuddyAccessory").textContent=latestAccessory(p)?`אביזר אחרון: ${latestAccessory(p)}`:"אביזר: ייפתח בגביע הראשון";
  const unlockedAccessories=earnedAccessories(p);
  $("#dashboardBuddyAccessories").innerHTML=unlockedAccessories.length
    ? `<b>האביזרים שקיבלתם:</b><div>${unlockedAccessories.map(item=>`<span>${item}</span>`).join("")}</div>`
    : `<b>האביזרים שקיבלתם:</b><p>עדיין לא נאספו אביזרים. בגביע הראשון ייפתח האביזר הראשון.</p>`;
  $("#insightEyebrow").textContent=`הפתק של ${buddyProfile.name}`;
  $("#subjectProgress").innerHTML=Object.entries(SUBJECTS).map(([k,s])=>{
    const x=p.progress[k],pct=x?Math.min(x.completed/10*100,100):0;
    return `<div class="progress-row"><span class="trail-icon">${s.icon}</span><b>${subjectName(p,k)}</b><div class="bar"><i style="width:${pct}%"></i></div><small>${x?.completed||0}/10</small></div>`;
  }).join("");
  $("#activityLog").innerHTML=p.log.length?p.log.map(x=>`<div class="log-row"><span class="log-icon">${SUBJECTS[x.subject].icon}</span><div><b>${x.gameName||SUBJECTS[x.subject].trail}</b><small>${x.correct} מתוך ${x.total} תשובות נכונות · ${x.date}</small></div></div>`).join(""):`<div class="empty-state">עוד אין הרפתקאות. בחרו שביל והסיפור מתחיל!</div>`;
  const played=Object.entries(p.gameProgress||{}).filter(([,value])=>value.total).map(([gameId,value])=>({game:KIDS_GAMES.catalog.find(item=>item.id===gameId),...value}));
  if(p.answered&&played.length){
    const weak=[...played].sort((a,b)=>(a.correct/a.total)-(b.correct/b.total))[0];
    $("#insightTitle").textContent=`כדאי לתרגל: ${weak.game?.name||"משחק נוסף"}`;
    $("#insightText").textContent=`אפשר לבחור רמה קלה יותר בהגדרות, או להמשיך לתרגל בקצב נעים וללא לחץ.`;
  } else {
    $("#insightTitle").textContent="מוכנים להרפתקה הראשונה";
    $("#insightText").textContent=`השלימו שביל ו${buddyProfile.name} ישתף כאן תובנה על הלמידה.`;
  }
}

function renderSettings(){
  const p=activeProfile(); if(!p)return;
  $("#settingsSubtitle").textContent=`ההגדרות של ${p.name}.`;
  $("#settingsUsersText").textContent=`המשתמש הנוכחי: ${p.name}. אפשר להוסיף ילד, לעבור בין ילדים, או למחוק משתמש שכבר לא צריך.`;
  $("#settingsProfile span").textContent=p.buddy;
  $("#settingsSound span").textContent=state.sound?"🔊":"🔇";
  $("#settingsSoundLabel").textContent=state.sound?"הצלילים פעילים":"הצלילים כבויים";
  renderDifficulty(p);
}

function renderDifficulty(p){
  $("#difficultyControls").innerHTML=p.subjects.map(key=>{
    const games=KIDS_GAMES.catalog.filter(game=>!game.disabled&&game.subject===key&&gameVisibleInSettings(game,p.age));
    return `<section class="difficulty-subject"><h3>${SUBJECTS[key].icon} ${subjectName(p,key)}</h3>${games.map(game=>{
      const feedback=p.gameFeedback[game.id]||"ok",level=p.gameLevels[game.id]||ageLevel(p.age),hidden=p.hiddenGames.includes(game.id);
      return `<div class="skill-row game-level-row ${hidden?"game-is-hidden":""}"><span><b>${game.icon} ${game.name}</b><small class="level-badge">רמה ${level} מתוך 9</small><small class="question-count">${game.desc}</small>${hidden?`<small class="hidden-game-note">המשחק מוסתר מבחירת המשחקים</small>`:""}</span><div class="game-level-actions"><div class="level-adjust"><button ${level<=1||hidden?"disabled":""} class="${feedback==="down"?"selected":""}" data-adjust="${game.id}|down">קל יותר</button><button ${hidden?"disabled":""} class="${feedback==="ok"?"selected":""}" data-adjust="${game.id}|ok">מתאים</button><button ${level>=9||hidden?"disabled":""} class="${feedback==="up"?"selected":""}" data-adjust="${game.id}|up">קשה יותר</button></div><button class="game-visibility-button ${hidden?"restore":""}" data-game-visibility="${game.id}">${hidden?"החזרת המשחק":"הסתרת המשחק"}</button></div></div>`;
    }).join("")}</section>`;
  }).join("");
}

function toggleGameVisibility(gameId){
  const p=activeProfile(); if(!p)return;
  if(p.hiddenGames.includes(gameId)){
    p.hiddenGames=p.hiddenGames.filter(id=>id!==gameId);
    p.autoHiddenGames=(p.autoHiddenGames||[]).filter(id=>id!==gameId);
  } else {
    p.hiddenGames.push(gameId);
  }
  save();
  renderSettings();
  renderSubjects();
  renderAdventureChoices();
}

function adjustDifficulty(data){
  const [gameId,choice]=data.split("|"),p=activeProfile(),current=p.gameLevels[gameId]||ageLevel(p.age);
  p.gameFeedback[gameId]=choice;
  if(choice==="up")p.gameLevels[gameId]=clamp(current+1,1,9);
  if(choice==="down")p.gameLevels[gameId]=clamp(current-1,1,9);
  if(choice==="ok")p.gameLevels[gameId]=defaultGameLevel(gameId,p.age);
  p.recentGames[gameId]=[];
  save(); renderSettings(); renderSubjects();
}

function exportProgress(){
  const p=activeProfile(); if(!p)return;
  const report={
    app:"brightwood-quest",
    exportType:"backup",
    version:APP_VERSION,
    exportedAt:new Date().toISOString(),
    starGoal:STAR_GOAL,
    backup:{state},
    child:{name:p.name,age:p.age,buddy:p.buddy},
    summary:{stars:p.stars,trophies:trophyCount(p),answered:p.answered,correct:p.correct,minutes:p.minutes},
    topics:p.subjects.map(key=>({topic:subjectName(p,key),level:subjectLevel(p,key),completed:p.progress[key]?.completed||0,games:availableGames(p,key).map(game=>({name:game.name,level:p.gameLevels[game.id],progress:p.gameProgress[game.id]}))})),
    recent:p.log
  };
  const blob=new Blob([JSON.stringify(report,null,2)],{type:"application/json;charset=utf-8"});
  const url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url;a.download=`brightwood-${p.name}.json`;a.click();URL.revokeObjectURL(url);
}

function importProgressFile(file){
  if(!file)return;
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const data=JSON.parse(reader.result);
      const importedState=data?.backup?.state || data?.state;
      if(!importedState || !Array.isArray(importedState.profiles))throw new Error("invalid");
      const profileCount=importedState.profiles.length;
      if(!confirm(`לייבא נתונים מהקובץ?\nהייבוא יחליף את הנתונים המקומיים במכשיר הזה.\nנמצאו ${profileCount} משתמשים בקובץ.`))return;
      state={
        profiles:importedState.profiles,
        activeId:importedState.activeId || importedState.profiles[0]?.id || null,
        sound:typeof importedState.sound==="boolean" ? importedState.sound : state.sound,
        introSeen:Boolean(importedState.introSeen)
      };
      state.profiles.forEach(prepareProfile);
      save();
      session=null;
      renderAll();
      showScreen("homeScreen");
      alert("הנתונים יובאו בהצלחה.");
    }catch(err){
      alert("לא הצלחתי לייבא את הקובץ. צריך לבחור קובץ גיבוי שנוצר מתוך האפליקציה.");
    }finally{
      const input=$("#importReportFile");
      if(input)input.value="";
    }
  };
  reader.readAsText(file);
}

function resetProgress(){
  const p=activeProfile(); if(!p)return;
  if(!confirm(`לאפס את כל ההתקדמות של ${p.name}? הפעולה אינה ניתנת לביטול.`))return;
  Object.assign(p,{stars:0,streak:0,progress:{},log:[],correct:0,answered:0,minutes:0,daily:0,dailyDate:"",skillLevels:{},skillFeedback:{},recentQuestions:{},gameLevels:{},gameFeedback:{},recentGames:{},gameProgress:{},gameLevelAge:null});
  prepareProfile(p); save(); renderAll();
  if($("#dashboardScreen").classList.contains("active"))renderDashboard();
  if($("#settingsScreen").classList.contains("active"))renderSettings();
}

function playMilestoneMelody(){
  if(!state.sound)return;
  const C=window.AudioContext||window.webkitAudioContext,ctx=new C();
  const notes=[523,659,784,1047,784,880,988,1175,1047,1319];
  notes.forEach((freq,index)=>{
    const start=ctx.currentTime+index*.13,o=ctx.createOscillator(),g=ctx.createGain();
    o.type=index<4?"triangle":"sine";o.frequency.value=freq;
    g.gain.setValueAtTime(.001,start);
    g.gain.exponentialRampToValueAtTime(.2,start+.025);
    g.gain.exponentialRampToValueAtTime(.001,start+.24);
    o.connect(g);g.connect(ctx.destination);o.start(start);o.stop(start+.26);
  });
}

function chime(success){
  if(!state.sound)return;
  const C=window.AudioContext||window.webkitAudioContext,ctx=new C(),notes=success?[523,659,784]:[260,196];
  notes.forEach((freq,i)=>{const o=ctx.createOscillator(),g=ctx.createGain();o.type=success?"sine":"triangle";o.frequency.value=freq;g.gain.setValueAtTime(.001,ctx.currentTime+i*.11);g.gain.exponentialRampToValueAtTime(.18,ctx.currentTime+i*.11+.02);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+i*.11+.2);o.connect(g);g.connect(ctx.destination);o.start(ctx.currentTime+i*.11);o.stop(ctx.currentTime+i*.11+.22)});
}

function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}

function chooseBuildToken(button){
  if(session.locked||button.disabled)return;
  const index=Number(button.dataset.tokenIndex),q=session.questions[session.index];
  session.composed.push({index,token:q.tokens[index]}); button.disabled=true; updateBuildResult();
}

function undoBuildToken(){
  const item=session.composed.pop(); if(!item)return;
  $(`[data-token-index="${item.index}"]`).disabled=false; updateBuildResult();
}

function checkBuild(button){
  const q=session.questions[session.index],value=session.composed.map(x=>x.token).join(q.joinWith??"");
  answer(value,button);
}

function chooseMemoryCard(button){
  if(session.locked||button.classList.contains("matched")||button.classList.contains("open")||session.memoryOpen.length>=2)return;
  const index=Number(button.dataset.memoryIndex),card=session.memoryCards[index];
  button.classList.add("open"); session.memoryOpen.push({button,index,key:card.key});
  if(session.memoryOpen.length<2)return;
  const [a,b]=session.memoryOpen;
  if(a.key===b.key){
    a.button.classList.add("matched");b.button.classList.add("matched");session.memoryMatched.add(a.key);session.memoryOpen=[];
    if(session.memoryMatched.size===session.questions[session.index].pairs.length)answer("הושלם",button);
  }else{
    setTimeout(()=>{a.button.classList.remove("open");b.button.classList.remove("open");session.memoryOpen=[]},700);
  }
}

function chooseGridLetter(button){
  if(session.locked||button.classList.contains("selected"))return;
  const index=Number(button.dataset.gridIndex),q=session.questions[session.index];
  button.classList.add("selected");session.gridSelection.push({index,letter:q.grid[index]});
  $("#wordSelection").textContent=session.gridSelection.map(x=>x.letter).join("");
}

function clearGridSelection(){
  session.gridSelection=[];$$("[data-grid-index]").forEach(button=>button.classList.remove("selected"));$("#wordSelection").textContent="בחרו אותיות לפי הסדר";
}

function bindEvents(){
  document.addEventListener("click",e=>{
    const gameBackButton=e.target.closest("[data-game-back]"); if(gameBackButton)return gameBack();
    const finishedReturn=e.target.closest("[data-game-finished-return]"); if(finishedReturn)return returnAfterFinishedGame();
    const adventureBack=e.target.closest("[data-adventure-back]"); if(adventureBack)return backFromAdventure();
    const gamePickerBack=e.target.closest("[data-game-picker-back]"); if(gamePickerBack)return backFromGamePicker();
    const introNext=e.target.closest("[data-intro-next]"); if(introNext){introIndex=Math.min(INTRO_STEPS.length-1,introIndex+1);renderIntro();return}
    const introPrev=e.target.closest("[data-intro-prev]"); if(introPrev){introIndex=Math.max(0,introIndex-1);renderIntro();return}
    const introStart=e.target.closest("[data-intro-start],[data-intro-skip]"); if(introStart)return finishIntro();
    const go=e.target.closest("[data-go]"); if(go)showScreen(go.dataset.go==="home"?"homeScreen":go.dataset.go);
    const close=e.target.closest("[data-close]"); if(close)closeModal(close.dataset.close);
    const sub=e.target.closest("[data-subject]"); if(sub)openGamePicker(sub.dataset.subject);
    const playSub=e.target.closest("[data-play-subject]"); if(playSub)openGamePicker(playSub.dataset.playSubject,{backToAdventure:true});
    const game=e.target.closest("[data-game]"); if(game)startGame(game.dataset.game);
    const ans=e.target.closest("[data-answer]"); if(ans)answer(ans.dataset.answer,ans);
    const audio=e.target.closest("[data-play-audio]"); if(audio)playQuestionAudio();
    const token=e.target.closest("[data-token-index]"); if(token)chooseBuildToken(token);
    const undo=e.target.closest("[data-build-undo]"); if(undo)undoBuildToken();
    const buildCheck=e.target.closest("[data-build-check]"); if(buildCheck)checkBuild(buildCheck);
    const memory=e.target.closest("[data-memory-index]"); if(memory)chooseMemoryCard(memory);
    const grid=e.target.closest("[data-grid-index]"); if(grid)chooseGridLetter(grid);
    const gridClear=e.target.closest("[data-grid-clear]"); if(gridClear)clearGridSelection();
    const gridCheck=e.target.closest("[data-grid-check]"); if(gridCheck)answer(session.gridSelection.map(x=>x.letter).join(""),gridCheck);
    const prof=e.target.closest("[data-profile]"); if(prof){const changed=state.activeId!==prof.dataset.profile;state.activeId=prof.dataset.profile;prepareProfile(activeProfile());save();closeModal("profileModal");renderAll();if(changed)showScreen("homeScreen")}
    const edit=e.target.closest("[data-edit-profile]"); if(edit)openEdit(edit.dataset.editProfile);
    const age=e.target.closest("[data-age]"); if(age){selectedAge=+age.dataset.age;renderChoiceButtons()}
    const buddy=e.target.closest("[data-buddy]"); if(buddy){selectedBuddy=buddy.dataset.buddy;renderChoiceButtons()}
    const tog=e.target.closest("[data-toggle-subject]"); if(tog)tog.classList.toggle("selected");
    const adjust=e.target.closest("[data-adjust]"); if(adjust)adjustDifficulty(adjust.dataset.adjust);
    const gameVisibility=e.target.closest("[data-game-visibility]"); if(gameVisibility)toggleGameVisibility(gameVisibility.dataset.gameVisibility);
    const gameBuddy=e.target.closest("[data-game-buddy]"); if(gameBuddy){const p=activeProfile(); if(p&&isBuddyUnlocked(p,gameBuddy.dataset.gameBuddy)){p.buddy=gameBuddy.dataset.gameBuddy; save(); renderAll(); renderGameBuddyPanel();}}
    const install=e.target.closest("[data-install-app]"); if(install)requestAppInstall();
  });
  document.addEventListener("dragstart",e=>{const source=e.target.closest("[data-drag-source]");if(source)e.dataTransfer.setData("text/plain",source.dataset.dragSource)});
  document.addEventListener("dragover",e=>{if(e.target.closest(".drag-target"))e.preventDefault()});
  document.addEventListener("drop",e=>{const target=e.target.closest(".drag-target");if(target){e.preventDefault();answer(target.dataset.answer,target)}});
  $("#profileButton").onclick=()=>openModal("profileModal");
  $("#addProfileButton").onclick=()=>{closeModal("profileModal");openCreate()};
  $("#createForm").onsubmit=e=>{e.preventDefault();submitProfile($("#childName").value)};
  $("#deleteProfile").onclick=deleteCurrentProfile;
  $("#customizeSubjects").onclick=()=>activeProfile()?openModal("subjectModal"):openCreate();
  $("#saveSubjects").onclick=()=>{const chosen=$$(".subject-toggle.selected").map(x=>x.dataset.toggleSubject);if(!chosen.length)return;activeProfile().subjects=chosen;save();closeModal("subjectModal");renderAll()};
  $("#progressButton").onclick=()=>activeProfile()?showScreen("dashboardScreen"):openCreate();
  $("#settingsButton").onclick=()=>activeProfile()?showScreen("settingsScreen"):openCreate();
  $("#contactButton").onclick=()=>showScreen("contactScreen");
  $("#headerProgressButton").onclick=()=>activeProfile()?showScreen("dashboardScreen"):openCreate();
  $("#headerSettingsButton").onclick=()=>activeProfile()?showScreen("settingsScreen"):openCreate();
  $("#headerHelpButton").onclick=()=>showScreen("helpScreen");
  $("#headerContactButton").onclick=()=>showScreen("contactScreen");
  $("#settingsSubjects").onclick=()=>openModal("subjectModal");
  $("#settingsProfile").onclick=()=>openEdit(activeProfile().id);
  $("#settingsSwitchUser").onclick=()=>openModal("profileModal");
  $("#settingsAddUser").onclick=()=>openCreate();
  $("#settingsDeleteUser").onclick=deleteActiveProfileFromSettings;
  $("#settingsSound").onclick=()=>{$(".sound-toggle").click();renderSettings()};
  $("#settingsHelp").onclick=()=>showScreen("helpScreen");
  $("#settingsIntro").onclick=openIntro;
  $("#printReport").onclick=()=>window.print();
  $("#exportReport").onclick=exportProgress;
  $("#importReport").onclick=()=>$("#importReportFile").click();
  $("#importReportFile").onchange=e=>importProgressFile(e.target.files?.[0]);
  $("#resetProgress").onclick=resetProgress;
  $(".sound-toggle").onclick=e=>{state.sound=!state.sound;e.currentTarget.textContent=state.sound?"🔊":"🔇";save();if(state.sound)chime(true)};
  $("#continueButton").onclick=openAdventureFlow;
  $("#randomButton").onclick=()=>{const p=activeProfile();if(!p)return openCreate();const games=p.subjects.flatMap(subject=>availableGames(p,subject));if(games.length)startGame(games[Math.floor(Math.random()*games.length)].id)};
  $("#contactForm").onsubmit=async e=>{
    e.preventDefault();
    const form=e.currentTarget;
    const submit=form.querySelector(".contact-submit");
    const status=$("#contactStatus");
    const name=$("#contactName").value.trim();
    const email=$("#contactEmail").value.trim();
    const message=$("#contactMessage").value.trim();
    if(!message)return;
    if(!FORMSPREE_ENDPOINT){
      status.textContent="הטופס כמעט מוכן. צריך להגדיר בקוד את כתובת ה-Formspree לפני שאפשר לשלוח.";
      status.className="contact-status error";
      return;
    }
    submit.disabled=true;
    status.textContent="שולחים...";
    status.className="contact-status";
    try{
      const response=await fetch(FORMSPREE_ENDPOINT,{
        method:"POST",
        headers:{"Content-Type":"application/json","Accept":"application/json"},
        body:JSON.stringify({
          name,
          email,
          _replyto:email,
          _subject:"היער הזוהר - בקשה",
          message,
          appVersion:APP_VERSION,
          pageUrl:location.href,
          userAgent:navigator.userAgent
        })
      });
      if(!response.ok)throw new Error(`Formspree ${response.status}`);
      form.reset();
      status.textContent="תודה! ההודעה נשלחה אלינו.";
      status.className="contact-status success";
      trackEvent("feedback_submitted");
    }catch(err){
      status.textContent="לא הצלחנו לשלוח כרגע. נסו שוב בעוד רגע.";
      status.className="contact-status error";
    }finally{
      submit.disabled=false;
    }
    return;
    const subject="היער הזוהר - בקשה";
    const body=[
      "שלום,",
      "",
      message,
      "",
      "פרטי השולח:",
      `שם: ${name||"לא צוין"}`,
      `כתובת מייל לחזרה: ${email||"לא צוינה"}`,
      "",
      `גרסה: ${APP_VERSION}`
    ].join("\n");
    throw new Error("Legacy mail fallback disabled");
  };
  $$(".modal-backdrop").forEach(m=>m.addEventListener("click",e=>{if(e.target===m&&m.id!=="createModal"&&m.id!=="introModal"&&!(!activeProfile()&&m.id==="profileModal"))closeModal(m.id)}));
}

init();
