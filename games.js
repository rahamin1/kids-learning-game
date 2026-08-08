(() => {
  const catalog = [
    {id:"count",subject:"math",minAge:3,name:"כמה עצמים יש?",icon:"🔢",desc:"סופרים עצמים ובוחרים מספר",kind:"count"},
    {id:"number-quantity",subject:"math",minAge:3,name:"מספר וכמות",icon:"🍎",desc:"מתאימים מספר לקבוצת עצמים",kind:"numberQuantity"},
    {id:"big-small",subject:"thinking",minAge:3,name:"גדול וקטן",icon:"↕️",desc:"משווים גדלים",kind:"bigSmall"},
    {id:"more-groups",subject:"math",minAge:3,maxAge:7,name:"איפה יש יותר?",icon:"⚖️",desc:"משווים בין שתי כמויות",kind:"moreGroups",maxLevel:6},
    {id:"visual-pattern",subject:"thinking",minAge:4,name:"דפוסים",icon:"🔴",desc:"מגלים מה מגיע בהמשך",kind:"pattern",maxLevel:5},
    {id:"number-sequence",subject:"math",minAge:4,name:"רצף מספרים",icon:"➡️",desc:"משלימים מספר חסר ברצף",kind:"sequence",maxLevel:5},
    {id:"addition",subject:"math",minAge:4,name:"חיבור",icon:"➕",desc:"מחברים מספרים בהדרגה",kind:"addition",maxLevel:6},
    {id:"picture-subtraction",subject:"math",minAge:5,name:"חיסור",icon:"➖",desc:"מורידים ומחשבים",kind:"subtraction",maxLevel:5},
    {id:"number-line",subject:"math",minAge:4,name:"ציר המספרים",icon:"📏",desc:"מוצאים את המקום הנכון",kind:"numberLine",maxLevel:4},
    {id:"shapes",subject:"math",minAge:5,name:"מגלים צורות",icon:"🔷",desc:"שמות, תכונות והתאמות",kind:"shapes",maxLevel:4},
    {id:"clock",subject:"thinking",minAge:5,name:"שעון",icon:"🕒",desc:"קוראים שעות ודקות",kind:"clock",maxLevel:4},
    {id:"multiplication",subject:"math",minAge:5,name:"כפל בקבוצות",icon:"✖️",desc:"סופרים קבוצות שוות",kind:"multiplication",maxLevel:5},
    {id:"multiplication-numbers",subject:"math",minAge:6,name:"כפל",icon:"✖️",desc:"פותרים תרגילי כפל במספרים",kind:"multiplicationNumbers",maxLevel:5},
    {id:"word-problems",subject:"math",minAge:4,name:"בעיות מילוליות",icon:"🧠",desc:"פותרים בעיה מתוך סיפור",kind:"wordProblems",maxLevel:8},
    {id:"fractions",subject:"math",minAge:6,name:"איזה חלק זה?",icon:"🍕",desc:"מזהים חלקים צבועים",kind:"fractions"},

    {id:"uppercase-letter",subject:"english",minAge:6,name:"אות גדולה",icon:"🔠",desc:"מזהים CAPITAL LETTERS",kind:"uppercase",disabled:true},
    {id:"letter-picture",subject:"english",minAge:6,name:"אות ומילה",icon:"🅰️",desc:"מתאימים אות למילה",kind:"letterPicture"},
    {id:"picture-word-memory",subject:"english",minAge:6,name:"זיכרון תמונה ומילה",icon:"🧠",desc:"מוצאים זוגות מתאימים",kind:"memoryEnglish",maxLevel:5},
    {id:"first-letter",subject:"english",minAge:6,name:"האות הראשונה",icon:"🔤",desc:"בוחרים באיזו אות המילה מתחילה",kind:"firstLetter"},
    {id:"image-word",subject:"english",minAge:6,name:"תמונה ומילה",icon:"🖼️",desc:"בוחרים מילה מתוך ארבע אפשרויות",kind:"imageWord"},
    {id:"drag-word-picture",subject:"english",minAge:6,name:"מילה ותמונה",icon:"🖼️",desc:"לוחצים על התמונה המתאימה למילה",kind:"dragEnglish"},
    {id:"listen-animal",subject:"english",minAge:6,name:"לחצו ושמעו",icon:"🔊",desc:"שומעים שם של בעל חיים ובוחרים תמונה",kind:"listenEnglish",disabled:true},
    {id:"missing-letter-en",subject:"english",minAge:6,name:"אות חסרה",icon:"❓",desc:"משלימים אות חסרה במילה",kind:"missingEnglish"},
    {id:"word-categories",subject:"english",minAge:6,name:"קטגוריות מילים",icon:"🗂️",desc:"ממיינים חיות, אוכל וחפצים",kind:"englishCategories",maxLevel:6},
    {id:"build-word-en",subject:"english",minAge:6,maxAge:7,name:"בונים מילה",icon:"🧱",desc:"מרכיבים מילה מאותיות",kind:"buildEnglish"},
    {id:"sentence-order-en",subject:"english",minAge:6,name:"בונים משפט",icon:"💬",desc:"מסדרים מילים למשפט קצר",kind:"sentenceEnglish"},

    {id:"same-picture",subject:"thinking",minAge:3,maxAge:4,name:"תמונות זהות",icon:"🖼️",desc:"מוצאים את התמונה הזהה",kind:"samePicture"},
    {id:"hebrew-letter",subject:"reading",minAge:4,name:"זיהוי אות",icon:"אבג",desc:"מזהים אות עברית",kind:"hebrewLetter",disabled:true},
    {id:"starts-hebrew",subject:"reading",minAge:5,name:"מתחיל באות",icon:"אבג",desc:"מוצאים מילה שמתחילה באות",kind:"startsHebrew"},
    {id:"hebrew-word-picture",subject:"reading",minAge:5,name:"מילה ותמונה",icon:"📖",desc:"מתאימים מילה קצרה לתמונה",kind:"hebrewWordPicture"},
    {id:"alphabet-order",subject:"reading",minAge:5,name:"סדר האותיות",icon:"אבג",desc:"מסדרים אותיות לפי האלף־בית",kind:"alphabetOrder"},
    {id:"missing-letter-he",subject:"reading",minAge:6,name:"אות חסרה במילה",icon:"❓",desc:"משלימים מילה בעברית",kind:"missingHebrew"},
    {id:"syllables",subject:"reading",minAge:6,name:"הברות",icon:"👏",desc:"מחלקים מילה להברות",kind:"syllables",disabled:true},
    {id:"inference",subject:"reading",minAge:5,name:"הסקת מסקנות",icon:"💡",desc:"מבינים רמזים מתוך טקסט",kind:"inference"},
    {id:"event-order",subject:"reading",minAge:5,name:"רצף אירועים",icon:"1️⃣",desc:"מסדרים מה קרה קודם ואחר כך",kind:"eventOrder"},
    {id:"find-info",subject:"reading",minAge:6,name:"איתור מידע",icon:"🔎",desc:"מוצאים פרט מפורש בטקסט",kind:"findInfo",disabled:true},
    {id:"sentence-order-he",subject:"reading",minAge:6,name:"סידור משפט",icon:"💬",desc:"מסדרים מילים למשפט",kind:"sentenceHebrew"},
    {id:"true-false",subject:"reading",minAge:4,name:"נכון או לא נכון",icon:"✅",desc:"קוראים ובודקים טענה",kind:"trueFalse"},
    {id:"story-title",subject:"reading",minAge:7,name:"כותרת לסיפור",icon:"📰",desc:"בוחרים כותרת מתאימה",kind:"storyTitle",maxLevel:4},
    {id:"word-search",subject:"reading",minAge:7,name:"תפזורת",icon:"🔍",desc:"מחפשים מילים בתוך רשת אותיות",kind:"wordSearch"},

    {id:"animal-sound",subject:"nature",minAge:3,name:"מי משמיע את הקול?",icon:"🐮",desc:"שומעים קול ובוחרים בעל חיים",kind:"animalSound",disabled:true},
    {id:"odd-one-out",subject:"thinking",minAge:3,name:"מה לא שייך?",icon:"🧩",desc:"מוצאים תמונה יוצאת דופן",kind:"oddOneOut",maxLevel:3},
    {id:"habitat",subject:"nature",minAge:4,name:"בית גידול",icon:"🏞️",desc:"מתאימים בעל חיים לסביבה",kind:"habitat",maxLevel:3},
    {id:"baby-adult",subject:"nature",minAge:4,name:"גור ובוגר",icon:"🐣",desc:"מתאימים גור לבעל החיים הבוגר",kind:"babyAdult",maxLevel:4},
    {id:"living-groups",subject:"nature",minAge:4,name:"חי, צומח או דומם",icon:"🌱",desc:"ממיינים דברים מהעולם",kind:"livingGroups",maxLevel:4},
    {id:"plant-food",subject:"nature",minAge:5,name:"מה גדל על הצמח?",icon:"🍎",desc:"מתאימים פרי או ירק לצמח",kind:"plantFood",disabled:true},
    {id:"seasons",subject:"nature",minAge:5,name:"עונות השנה",icon:"🍂",desc:"מתאימים מזג אוויר ופעילות לעונה",kind:"seasons",maxLevel:4},
    {id:"life-cycle",subject:"nature",minAge:4,name:"מחזור חיים",icon:"🦋",desc:"מסדרים שלבי התפתחות",kind:"lifeCycle",maxLevel:4},
    {id:"plant-parts",subject:"nature",minAge:4,name:"איזה חלק בצמח?",icon:"🌻",desc:"מכירים שורש, גבעול, עלה, פרח ופרי",kind:"plantParts",maxLevel:4},
    {id:"animal-food",subject:"nature",minAge:3,name:"מה בעלי חיים אוכלים?",icon:"🥕",desc:"מתאימים מזון לבעל חיים",kind:"animalFood",maxLevel:5},
    {id:"food-chain",subject:"nature",minAge:5,name:"שרשרת מזון",icon:"🔗",desc:"מסדרים מי אוכל את מי",kind:"foodChain",maxLevel:5},
{id:"adaptations",subject:"nature",minAge:4,name:"התאמה לסביבה",icon:"🦎",desc:"מגלים כיצד בעלי חיים מסתגלים",kind:"adaptations",maxLevel:5},
{id:"cause-effect",subject:"thinking",minAge:7,name:"סיבה ותוצאה",icon:"🧪",desc:"חושבים כמו מדענים",kind:"causeEffect"}
  ];

  const animals = [
    {icon:"🐶",he:"כלב",en:"DOG",letter:"D",sound:"woof",habitat:"מלונה",baby:"כלבלב",food:"עצם"},
    {icon:"🐱",he:"חתול",en:"CAT",letter:"C",sound:"meow",habitat:"בית",baby:"חתלתול",food:"דג"},
    {icon:"🐄",he:"פרה",en:"COW",letter:"C",sound:"moo",habitat:"רפת",baby:"עגלה",food:"עשב"},
    {icon:"🐑",he:"כבשה",en:"SHEEP",letter:"S",sound:"baa",habitat:"דיר",baby:"טלה",food:"עשב"},
    {icon:"🐴",he:"סוס",en:"HORSE",letter:"H",sound:"neigh",habitat:"אורווה",baby:"סייח",food:"חציר"},
    {icon:"🐔",he:"תרנגולת",en:"HEN",letter:"H",sound:"cluck",habitat:"לול",baby:"אפרוח",food:"זרעים"},
    {icon:"🐰",he:"ארנב",en:"RABBIT",letter:"R",sound:"rustle",habitat:"מאורה",baby:"ארנבון",food:"גזר"},
    {icon:"🦆",he:"ברווז",en:"DUCK",letter:"D",sound:"quack",habitat:"אגם",baby:"ברווזון",food:"צמחים במים"},
    {icon:"🐟",he:"דג",en:"FISH",letter:"F",sound:"bubble",habitat:"ים",baby:"דגיג",food:"אצות"},
    {icon:"🦁",he:"אריה",en:"LION",letter:"L",sound:"roar",habitat:"סוואנה",baby:"כפיר",food:"בשר"},
    {icon:"🐘",he:"פיל",en:"ELEPHANT",letter:"E",sound:"trumpet",habitat:"סוואנה",baby:"פילון",food:"עלים"},
    {icon:"🐫",he:"גמל",en:"CAMEL",letter:"C",sound:"grunt",habitat:"מדבר",baby:"בכר",food:"צמחים"},
    {icon:"🐧",he:"פינגווין",en:"PENGUIN",letter:"P",sound:"squawk",habitat:"אזור קפוא",baby:"אפרוח",food:"דגים"},
    {icon:"🐬",he:"דולפין",en:"DOLPHIN",letter:"D",sound:"click",habitat:"ים",baby:"גור דולפין",food:"דגים"},
    {icon:"🐸",he:"צפרדע",en:"FROG",letter:"F",sound:"croak",habitat:"בריכה",baby:"ראשן",food:"חרקים"},
    {icon:"🐝",he:"דבורה",en:"BEE",letter:"B",sound:"buzz",habitat:"כוורת",baby:"זחל",food:"צוף"},
    {icon:"🦉",he:"ינשוף",en:"OWL",letter:"O",sound:"hoot",habitat:"יער",baby:"גוזל",food:"עכברים"},
    {icon:"🐋",he:"לווייתן",en:"WHALE",letter:"W",sound:"whale",habitat:"ים",baby:"גור לווייתן",food:"יצורי ים קטנים"}
  ];
  const englishWords = [
    ["🍎","APPLE","A","FOOD"],["🐻","BEAR","B","ANIMAL"],["🐱","CAT","C","ANIMAL"],["🐶","DOG","D","ANIMAL"],
    ["🥚","EGG","E","FOOD"],["🐟","FISH","F","ANIMAL"],["🎁","GIFT","G","OBJECT"],["🎩","HAT","H","OBJECT"],
    ["🧊","ICE","I","NATURE"],["🧃","JUICE","J","FOOD"],["🔑","KEY","K","OBJECT"],["🦁","LION","L","ANIMAL"],
    ["🌙","MOON","M","NATURE"],["👃","NOSE","N","BODY"],["🦉","OWL","O","ANIMAL"],["🐷","PIG","P","ANIMAL"],
    ["☀️","SUN","S","NATURE"],["🌳","TREE","T","NATURE"],["☂️","UMBRELLA","U","OBJECT"],["🐋","WHALE","W","ANIMAL"],
    ["🦊","FOX","F","ANIMAL"],["🐸","FROG","F","ANIMAL"],["🚗","CAR","C","OBJECT"],["⭐","STAR","S","NATURE"],
    ["🍌","BANANA","B","FOOD"],["🥭","MANGO","M","FOOD"],["🧀","CHEESE","C","FOOD"],["🥁","DRUM","D","OBJECT"],
    ["👂","EAR","E","BODY"],["👁️","EYE","E","BODY"],["✋","HAND","H","BODY"],["🦶","FOOT","F","BODY"],
    ["👄","MOUTH","M","BODY"],["💪","ARM","A","BODY"],["🦵","LEG","L","BODY"]
  ];
  const hebrewWords = [
    ["🐶","כלב","כ"],["🐱","חתול","ח"],["🐟","דג","ד"],["🦁","אריה","א"],["🐘","פיל","פ"],
    ["🌳","עץ","ע"],["🌸","פרח","פ"],["🍎","תפוח","ת"],["🍌","בננה","ב"],["🥕","גזר","ג"],
    ["🏠","בית","ב"],["🚗","מכונית","מ"],["⚽","כדור","כ"],["📕","ספר","ס"],["☀️","שמש","ש"],
    ["🌙","ירח","י"],["🧀","גבינה","ג"],["🥁","תוף","ת"],["🧩","פאזל","פ"],["💎","יהלום","י"]
  ];
  // Later word-search levels use longer words; beginner words never return.
  const wordSearchWordsByLevel = [
    ["בית","סוס","דובי","עוגה","שמש"],
    ["כלב","חתול","פרח","תוף","כדור"],
    ["תפוח","גזר","אריה","ירח","ספר"],
    ["בננה","גבינה","פאזל","יהלום","מטרייה"],
    ["מכונית","כדורגל","שוקולד","גלידה","ארנבת"],
    ["ספרייה","חלונות","פירות","מחברת","מגלשה"],
    ["פרפרים","מכוניות","סוכריות","צבעונים","מחברות"],
    ["משקפיים","ארנבונים","מלפפונים","גלגיליות","סנדוויץ"],
    ["ארנבונים","משקפיים","גלגיליות","מלפפונים","סוכריות"]
  ];
  // Each entry is one complete word-search puzzle. This avoids repeating a
  // small word bank simply to fill a game.
  const wordSearchGroupsByLevel = [
    [
      "בית","סוס","דובי","עוגה","שמש","כלב","חתול","פרח","תוף","כדור",
      "תפוח","גזר","אריה","ירח","ספר","בננה","גבינה","פאזל","יהלום","מטריה",
      "עץ","דג","כובע","דלת","נר","לחם","מלח","ענן","כוכב","ים"
    ].map(word=>[word]),
    [
      ["בית","מכונית"],["סוס","ארנבת"],["דובי","שוקולד"],["עוגה","ספרייה"],["שמש","מחברת"],
      ["כלב","מגלשה"],["חתול","חלונות"],["פרח","פרפרים"],["תוף","מכוניות"],["כדור","צבעונים"],
      ["תפוח","סוכריות"],["גזר","משקפיים"],["אריה","ארנבונים"],["ירח","מלפפונים"],["ספר","גלגליות"],
      ["בננה","סנדוויץ"],["גבינה","מרפסת"],["פאזל","עוגיות"],["יהלום","חולצות"],["מטריה","משחקים"],
      ["עץ","צעצועים"],["דג","שיעורים"],["כובע","אופניים"],["דלת","תרנגולת"],["נר","משפחה"],
      ["לחם","חופשה"],["מלח","מוזיקה"],["ענן","חברים"],["כוכב","מסיבה"],["ים","טיולים"]
    ],
    (()=>{
      const longWords=[
        "מכונית","שוקולד","ארנבת","ספרייה","מחברת","מגלשה","חלונות","פרפרים","צבעונים","סוכריות",
        "משקפיים","ארנבונים","מלפפונים","גלגליות","סנדוויץ","מרפסת","עוגיות","חולצות","משחקים","צעצועים",
        "שיעורים","אופניים","תרנגולת","משפחה","חופשה","מוזיקה","חברים","מסיבה","טיולים","מחשבים"
      ];
      return longWords.map((word,index)=>[word,longWords[(index+7)%longWords.length],longWords[(index+14)%longWords.length]]);
    })()
  ];

  const shapes = [
    ["○","עיגול",0,0],["△","משולש",3,3],["□","ריבוע",4,4],["⬠","מחומש",5,5],["⬡","משושה",6,6]
  ];
  const seasons = [
    ["חורף","🌧️","מעיל","🧥"],["אביב","🌸","טיול בין פרחים","🌷"],["קיץ","☀️","כובע שמש","🧢"],["סתיו","🍂","עלים נושרים","🍂"]
  ];
  const heAlphabet = [..."אבגדהוזחטיכלמנסעפצקרשת"];
  const shuffle = items => [...items].sort(() => Math.random() - .5);
  const clamp = (n,min,max) => Math.max(min,Math.min(max,n));
  const options = (correct,pool,count=4) => shuffle([correct,...shuffle([...new Set(pool.filter(x=>x!==correct))]).slice(0,count-1)]);
  const numberOptions = (answer,count=4) => options(String(answer),[answer-3,answer-2,answer-1,answer+1,answer+2,answer+3].filter(n=>n>=0).map(String),count);
  const make = (q,correct,a,visual="",extra={}) => ({q,correct,a,type:extra.type||"בוחרים תשובה",skill:extra.skill||"תרגול",visual,explain:extra.explain||`התשובה הנכונה היא ${correct}.`,...extra});
  const repeatPool = (items,count=18) => Array.from({length:Math.max(count,items.length)},(_,i)=>({...items[i%items.length]}));
  const pictures = ["🍎","⭐","🐟","🌼","🔵","🧸","🍐","🐞"];
  // The counting game is organised into four broad, genuinely different
  // stages: former 1–2, 3–4, 5–9, and 10–15.
  const countingMaximums = [10,20,100,150];
  // Number and Quantity has six stages. The last one introduces hundreds,
  // tens, and ones together, up to 1,000.
  const quantityMaximums = [5,10,24,50,150,1000];
  function objectRows(icon,count){
    const rowSize=count>30?10:5,rows=[];
    for(let i=0;i<count;i+=rowSize)rows.push(Array(Math.min(rowSize,count-i)).fill(icon).join(" "));
    return rows.join("\n");
  }
  function quantityRows(icon,count,useTens=false,useHundreds=false){
    if(!useTens)return objectRows(icon,count);
    const hundreds=useHundreds?Math.floor(count/100):0;
    const remainder=count-(hundreds*100),tens=Math.floor(remainder/10),ones=remainder%10,rows=[];
    for(let i=0;i<hundreds;i+=5)rows.push(Array(Math.min(5,hundreds-i)).fill(`${icon}×100`).join(" "));
    for(let i=0;i<tens;i+=5)rows.push(Array(Math.min(5,tens-i)).fill(`${icon}×10`).join(" "));
    if(ones)rows.push(Array(ones).fill(icon).join(" "));
    return rows.join("\n");
  }

  function countQuestions(level){
    const max=countingMaximums[level-1];
    const out=[];
    const pictureCount=level===1?4:level===2?6:8;
    pictures.slice(0,pictureCount).forEach(icon=>{
      for(let n=1;n<=max;n++)out.push(make("כמה עצמים יש?",String(n),numberOptions(n,level===1?2:level===2?3:4),objectRows(icon,n),{skill:"ספירה",type:"כמה יש?",objectGrid:true}));
    });
    return out;
  }
  function numberQuantity(level){
    const max=quantityMaximums[level-1];
    // Keep the numerical range appropriate to the level, but offer several
    // genuinely different illustrated quantities for each number.  For
    // example, five apples and five fish are two distinct exercises while
    // still practising the same beginner quantity.
    const visualVariants=Math.max(1,Math.ceil(25/max));
    return Array.from({length:max*visualVariants},(_,i)=>{
      const n=(i%max)+1,icon=pictures[Math.floor(i/max)%pictures.length];
      const candidates=[n,n-1,n+1,n-2,n+2,n-3,n+3].filter(x=>x>=1&&x<=max);
      const answerCount=level<=2?2:level===3?3:4;
      const nums=[n,...shuffle([...new Set(candidates)].filter(x=>x!==n)).slice(0,answerCount-1)];
      for(let extra=1;nums.length<answerCount&&extra<=max;extra++)if(!nums.includes(extra))nums.push(extra);
      const useTens=level>=5,useHundreds=level>=6;
      const groups=nums.map(x=>quantityRows(icon,x,useTens,useHundreds));
      return make("מצאו את הכמות המתאימה למספר",groups[nums.indexOf(n)],shuffle(groups),String(n),{skill:"מספר וכמות",type:useTens?"עשרות ויחידות":"מתאימים כמות",word:true,answerObjectGrid:true});
    });
  }
  function bigSmall(level){
    // Consolidate former 2–3 and 4–5.  Each combined stage uses the more
    // demanding version of the former pair, so difficulty never decreases.
    level=[1,3,5,6,7,8,9][clamp(level,1,7)-1];
    const pairs=[
      ["🐭","🐘"],["🐜","🐻"],["🐇","🦒"],["🐱","🐴"],["🐌","🐋"],["🐞","🦁"],["🐥","🦉"],["🌱","🌳"],["🐞","🐘"],["🐭","🐴"],
      ["🐛","🦒"],["🐸","🐘"],["🐹","🐎"],["🐝","🦁"],["🐢","🐋"],["🐤","🦚"]
    ];
    const groups=[
      [["🐭",1],["🐰",2],["🐱",3],["🐶",4],["🐴",5],["🐘",6]],
      [["🐜",1],["🐞",2],["🐥",3],["🐱",4],["🐻",5],["🦒",6]],
      [["🐌",1],["🐰",2],["🐶",3],["🐴",4],["🦁",5],["🐘",6]],
      [["🐞",1],["🐥",2],["🐰",3],["🐶",4],["🐴",5],["🐘",6]],
      [["🐭",1],["🐱",2],["🐶",3],["🐻",4],["🦁",5],["🦒",6]],
      [["🐜",1],["🐞",2],["🐥",3],["🐰",4],["🐶",5],["🐴",6]],
      [["🐛",1],["🐭",2],["🐱",3],["🐑",4],["🐴",5],["🦒",6]],
      [["🐝",1],["🐥",2],["🐰",3],["🐶",4],["🐻",5],["🐘",6]]
    ];
    const scalesFor = pairs => Object.fromEntries(pairs.map(([icon,size])=>[icon,size]));
    const pairScale = (small,big) => ({[small]:.52,[big]:1.75});
    const groupScale = group => {
      const max=Math.max(...group.map(x=>x[1])),min=Math.min(...group.map(x=>x[1]));
      return Object.fromEntries(group.map(([icon,size])=>[icon,.48+((size-min)/(max-min||1))*1.5]));
    };
    const useScaledIcons = level < 6;
    const makeCompare=(question,items,correct,extra={})=>make(question,correct,shuffle(items),extra.visual||"",{skill:"גדול וקטן",type:extra.type||"משווים גדלים",imageAnswers:extra.imageAnswers,answerScales:useScaledIcons?extra.answerScales:null,word:extra.word,explain:extra.explain||`התשובה הנכונה היא ${correct}.`});
    const makeOrder=(question,tokens,extra={})=>make(question,tokens.join(" → "),[],extra.visual||"",{skill:"גדול וקטן",type:extra.type||"מסדרים לפי גודל",mode:"build",tokens:shuffle(tokens),joinWith:" → ",explain:extra.explain||`הסדר הנכון הוא ${tokens.join(" → ")}.`});
    const questions=[];
    pairs.forEach(([small,big],i)=>{
      if(level===1){
        questions.push(makeCompare(i%2?"מי קטן יותר?":"מי גדול יותר?",[small,big],i%2?small:big,{imageAnswers:true,answerScales:pairScale(small,big),type:"גדול או קטן"}));
      }
    });
    // Each early level adds another item to compare; previously levels 2/3
    // and 4/5 accidentally created the same exercise pool.
    const groupCountForLevel = () => level >= 7 ? 6 : level >= 6 ? 4 : level >= 5 ? 6 : level === 4 ? 5 : level === 3 ? 4 : 3;
    if(level>=2&&level<6){
      groups.forEach(group=>{
        const count=groupCountForLevel(),active=group.slice(0,count),small=active[0][0],big=active.at(-1)[0];
        questions.push(makeCompare("מי הכי גדול?",active.map(x=>x[0]),big,{imageAnswers:true,answerScales:groupScale(active),type:"הכי גדול"}));
        questions.push(makeCompare("מי הכי קטן?",active.map(x=>x[0]),small,{imageAnswers:true,answerScales:groupScale(active),type:"הכי קטן"}));
      });
    }
    if(level>=4&&level<6){
      groups.forEach(group=>{
        const active=group.slice(0,groupCountForLevel()),small=active[0][0],big=active.at(-1)[0];
        questions.push(makeCompare("בחרו את הגדול ביותר",active.map(x=>x[0]),big,{imageAnswers:true,answerScales:groupScale(active),type:"גודל"}));
        questions.push(makeCompare("בחרו את הקטן ביותר",active.map(x=>x[0]),small,{imageAnswers:true,answerScales:groupScale(active),type:"גודל"}));
      });
    }
    if(level>=6){
      groups.forEach(group=>{
        const active=shuffle(group).slice(0,groupCountForLevel()).sort((a,b)=>a[1]-b[1]);
        questions.push(makeCompare("מי במקום השני מהקטן לגדול?",active.map(x=>x[0]),active[1][0],{imageAnswers:true,answerScales:groupScale(active),type:"סדר גודל"}));
        questions.push(makeCompare("מי במקום השני מהגדול לקטן?",active.map(x=>x[0]),active.at(-2)[0],{imageAnswers:true,answerScales:groupScale(active),type:"סדר גודל"}));
        if(active.length>=6){
          questions.push(makeCompare("מי במקום השלישי מהקטן לגדול?",active.map(x=>x[0]),active[2][0],{imageAnswers:true,answerScales:groupScale(active),type:"סדר גודל"}));
          questions.push(makeCompare("מי במקום השלישי מהגדול לקטן?",active.map(x=>x[0]),active.at(-3)[0],{imageAnswers:true,answerScales:groupScale(active),type:"סדר גודל"}));
        }
        if(level>=7&&groups.indexOf(group)%3===0){
          questions.push(makeCompare("מי הכי גדול?",active.map(x=>x[0]),active.at(-1)[0],{imageAnswers:true,answerScales:groupScale(active),type:"הכי גדול"}));
          questions.push(makeCompare("מי הכי קטן?",active.map(x=>x[0]),active[0][0],{imageAnswers:true,answerScales:groupScale(active),type:"הכי קטן"}));
        }
      });
    }
    if(level>=7){
      groups.forEach(group=>{
        const active=group.slice(0,3).sort((a,b)=>a[1]-b[1]).map(x=>x[0]);
        questions.push(makeOrder("סדרו מהקטן לגדול",active,{type:"סדר גודל"}));
      });
    }
    if(level>=8){
      groups.forEach(group=>{
        const active=group.slice(0,level>=9?5:4).sort((a,b)=>a[1]-b[1]).map(x=>x[0]);
        questions.push(makeOrder("סדרו מהקטן לגדול",active,{type:"סדר גודל"}));
        questions.push(makeOrder("סדרו מהגדול לקטן",[...active].reverse(),{type:"סדר גודל"}));
      });
    }
    return repeatPool(questions,24);
  }
  function moreGroups(level){
    const stages=[
      {max:5,choices:2,less:false,placeValues:false},
      {max:10,choices:2,less:false,placeValues:false},
      {max:20,choices:2,less:false,placeValues:false},
      {max:20,choices:4,less:true,placeValues:false},
      {max:50,choices:4,less:true,placeValues:false},
      {max:100,choices:4,less:true,placeValues:true}
    ];
    const stage=stages[clamp(level,1,stages.length)-1];
    const groupRows=(icon,count)=>{
      if(!stage.placeValues)return Array.from({length:Math.ceil(count/4)},(_,row)=>Array(Math.min(4,count-row*4)).fill(icon).join(" ")).join("\n");
      const hundreds=Math.floor(count/100),remainder=count-(hundreds*100),tens=Math.floor(remainder/10),ones=remainder%10,rows=[];
      for(let i=0;i<hundreds;i+=5)rows.push(Array(Math.min(5,hundreds-i)).fill(`${icon}×100`).join(" "));
      for(let i=0;i<tens;i+=5)rows.push(Array(Math.min(5,tens-i)).fill(`${icon}×10`).join(" "));
      if(ones)rows.push(Array(ones).fill(icon).join(" "));
      return rows.join("\n");
    };
    // Changing the pictured objects makes a genuinely different visual
    // comparison, even when the quantities share the same rule.
    const comparisonIcons=["🍎","🍐","🍊","🍓","🌼","⭐","⚽","🧸","🚗","🐟","🐞","🦋","🍪","🖍️","🎈","🐚"];
    // Thirty different comparisons leave a comfortable 25-question minimum.
    return Array.from({length:30},(_,i)=>{
      // Adjacent quantities differ by at most 20% of this level's maximum.
      // For example, the 20-item levels can show 8, 12, 16, 20.
      const maxGap=Math.max(1,Math.floor(stage.max*.2));
      // Vary the gap from one item up to the allowed maximum, rather than
      // always using the maximum gap.
      const gap=1+(i%maxGap);
      const span=gap*(stage.choices-1);
      const start=1+((i*7)%(stage.max-span));
      const values=Array.from({length:stage.choices},(_,choice)=>start+(choice*gap));
      const icon=comparisonIcons[i%comparisonIcons.length],groups=values.map(value=>groupRows(icon,value));
      const askLess=stage.less&&i%2===1;
      const target=askLess?Math.min(...values):Math.max(...values);
      return make(askLess?"באיזו קבוצה יש פחות?":"באיזו קבוצה יש יותר?",groups[values.indexOf(target)],shuffle(groups),"",{skill:"השוואה",type:askLess?"פחות":"יותר",answerObjectGrid:true});
    });
  }
  function patterns(level){
    const questions=[];
    const add=(sequence,pool,explain)=>{
      const correct=sequence[sequence.length-1];
      questions.push(make("מה מגיע עכשיו?",correct,options(correct,pool),"",{skill:"דפוסים",type:"ממשיכים דפוס",patternTiles:[...sequence.slice(0,-1),"?"],explain}));
    };
    const cyclic=(sets,shown)=>sets.forEach(base=>{
      for(let shift=0;shift<Math.min(3,base.length);shift++){
        const cycle=base.slice(shift).concat(base.slice(0,shift));
        add(Array.from({length:shown},(_,i)=>cycle[i%cycle.length]),base,`הדפוס חוזר על עצמו: ${cycle.join(" ")}.`);
      }
    });
    if(level===1){
      // Four places: two pictures alternate (A B A ?).
      cyclic([["🔴","🔵"],["⭐","🌙"],["🍎","🍐"],["🐶","🐱"],["🧸","🎈"],["🌸","🍃"],["🚗","🚲"],["🍌","🍓"],["⚽","🏀"],["☀️","☁️"],["🐟","🦋"],["🎁","🎀"]],4);
    }else if(level===2){
      // Six places: the same AB rule, with a longer sequence to follow.
      cyclic([["🔺","🟦"],["🐰","🐻"],["🍇","🍉"],["☀️","☁️"],["⚽","🏀"],["🎁","🎈"],["🌳","🌷"],["🐟","🦋"],["🌵","🌻"],["🚂","✈️"],["🍒","🍋"],["🐸","🐢"]],6);
    }else if(level===3){
      // Two pictures, but in grouped rather than alternating runs.
      [["🧸","🧸","🎈"],["🌸","🍃","🍃"],["🐶","🐱","🐱"],["🍎","🍎","🍐"],["🔴","🔵","🔵"],["☀️","☀️","☁️"],["🚗","🚲","🚲"],["🍌","🍓","🍓"]].forEach(base=>{
        for(let shift=0;shift<3;shift++){
          const cycle=base.slice(shift).concat(base.slice(0,shift));
          add(Array.from({length:6},(_,i)=>cycle[i%cycle.length]),[...new Set(base)],`הסמלים חוזרים בקבוצות: ${cycle.join(" ")}.`);
        }
      });
    }else if(level===4){
      // Nine places: four picture-and-number tokens form a repeating group.
      const sets=[
        ["🔵⁴","🔴¹","🟢²","🟡³"], ["🍎¹","🍐²","🍊⁴","🥑³"],
        ["🐶²","🐱⁴","🐰¹","🐻³"], ["⭐³","🌙¹","☀️⁴","☁️²"],
        ["🚗¹","🚲³","🚌²","🚂⁴"], ["🌷⁴","🌳²","🍃¹","🌵³"],
        ["⚽²","🏀¹","🎾⁴","🏐³"], ["🍓³","🍇¹","🍉²","🍌⁴"]
      ];
      sets.forEach(base=>{
        for(let shift=0;shift<3;shift++){
          const cycle=base.slice(shift).concat(base.slice(0,shift));
          add(Array.from({length:9},(_,i)=>cycle[i%cycle.length]),base,`הקבוצה של ארבעה סמלים חוזרת: ${cycle.join(" ")}.`);
        }
      });
    }else{
      // Twenty places: long patterns whose group sizes grow, double, shrink,
      // or alternate.  The question mark is always the twentieth place.
      const growing=[
        ["🔴","🔵","🟡","🟢","🟣","🟤"],["🍎","🍐","🍊","🥑","🍓","🍇"],
        ["🐶","🐱","🐰","🐻","🦊","🦁"],["⭐","🌙","☀️","☁️","🌧️","❄️"],
        ["🚗","🚲","🚌","🚂","✈️","🚢"],["🌷","🌳","🍃","🌵","🌻","🍄"]
      ];
      growing.forEach(symbols=>{
        const seq=[]; symbols.forEach((symbol,index)=>seq.push(...Array(index+1).fill(symbol)));
        while(seq.length<20)seq.push(symbols[symbols.length-1]);
        add(seq.slice(0,20),symbols,"כל סמל מופיע פעם אחת יותר מהסמל שלפניו.");
      });
      const doubling=[
        ["🍎","🍐","🍊","🥑","🍓"],["🔴","🔵","🟡","🟢","🟣"],["🐶","🐱","🐰","🐻","🦊"],
        ["⭐","🌙","☀️","☁️","🌧️"],["🚗","🚲","🚌","🚂","✈️"],["🌷","🌳","🍃","🌵","🌻"]
      ];
      doubling.forEach(symbols=>{
        const seq=[]; symbols.forEach((symbol,index)=>seq.push(...Array(2**index).fill(symbol)));
        add(seq.slice(0,20),symbols,"מספר ההופעות מוכפל בכל שלב: 1, 2, 4, 8, 16.");
      });
      const blocks=[["🔴","🔵","🟡","🟢"],["🍎","🍐","🍊","🥑"],["🐶","🐱","🐰","🐻"],["⭐","🌙","☀️","☁️"],["🚗","🚲","🚌","🚂"],["🌷","🌳","🍃","🌵"]];
      blocks.forEach(symbols=>{
        const seq=[]; [4,3,2,1].forEach((size,index)=>seq.push(...Array(size).fill(symbols[index])));
        while(seq.length<20)seq.push(...symbols);
        add(seq.slice(0,20),symbols,"כמות הסמלים בקבוצה קטנה בכל פעם: 4, 3, 2, 1.");
      });
      const waves=[["🔴","🔵","🟡","🟢"],["🍎","🍐","🍊","🥑"],["🐶","🐱","🐰","🐻"],["⭐","🌙","☀️","☁️"],["🚗","🚲","🚌","🚂"],["🌷","🌳","🍃","🌵"]];
      waves.forEach(symbols=>{
        const cycle=[...symbols,...symbols.slice(0,-1).reverse().slice(1)];
        const seq=Array.from({length:20},(_,i)=>cycle[i%cycle.length]);
        add(seq,symbols,"הסדרה עולה עד הסמל האחרון ואז חוזרת לאחור, כמו גל.");
      });
    }
    return questions;
  }
  function sequences(level){
    const out=[];
    const add=(numbers,missingIndex,type)=>{
      const correct=numbers[missingIndex],display=numbers.map((n,index)=>index===missingIndex?"?":n);
      out.push(make("איזה מספר חסר?",String(correct),numberOptions(correct),display.join("  ·  "),{skill:"רצפים",type}));
    };
    if(level===1){
      // Three places, up to 10, rising by one, blank at the end.
      for(let start=0;start<=8;start++)add([start,start+1,start+2],2,"מוסיפים 1");
      // A second, equally simple set keeps the level varied enough that a
      // full five-question round never has to repeat in the next round.
      // The sequence is still rising by one and stays within 0–10; only the
      // missing position moves to the beginning.
      for(let start=0;start<=8;start++)add([start,start+1,start+2],0,"מוסיפים 1");
    }else if(level===2){
      // The same small range, now also descending by one.
      for(let start=0;start<=8;start++)add([start,start+1,start+2],2,"מוסיפים 1");
      for(let start=10;start>=2;start--)add([start,start-1,start-2],2,"מורידים 1");
    }else if(level===3){
      // Four places up to 20, with a constant growing or shrinking difference.
      for(const step of [-5,-4,-3,-2,-1,1,2,3,4,5]){
        for(let start=0;start<=20;start++){
          const numbers=Array.from({length:4},(_,i)=>start+i*step);
          if(numbers.every(n=>n>=0&&n<=20))add(numbers,3,step>0?`מוסיפים ${step}`:`מורידים ${Math.abs(step)}`);
        }
      }
    }else if(level===4){
      // Five-place arithmetic sequences up to 100; the blank moves inside.
      for(const step of [-20,-15,-12,-10,-8,-6,-5,-4,-3,-2,2,3,4,5,6,8,10,12,15,20]){
        for(let start=0;start<=100;start+=5){
          const numbers=Array.from({length:5},(_,i)=>start+i*step);
          if(numbers.every(n=>n>=0&&n<=100))add(numbers,1+((start/5+Math.abs(step))%3),step>0?`מוסיפים ${step}`:`מורידים ${Math.abs(step)}`);
        }
      }
    }else{
      // Five-place arithmetic and geometric sequences up to 200.
      for(const step of [-40,-30,-25,-20,-15,-10,10,15,20,25,30,40]){
        for(let start=0;start<=200;start+=5){
          const numbers=Array.from({length:5},(_,i)=>start+i*step);
          if(numbers.every(n=>n>=0&&n<=200))add(numbers,1+((start/5+Math.abs(step))%3),"טור חשבוני");
        }
      }
      for(const ratio of [2,3]){
        for(let start=1;start<=200;start++){
          const numbers=Array.from({length:5},(_,i)=>start*(ratio**i));
          if(numbers.every(n=>n<=200))add(numbers,1+((start+ratio)%3),"טור הנדסי");
        }
      }
    }
    return out;
  }
  function arithmetic(level,kind){
    if(kind==="subtract"){
      const limit=[10,20,30,50,100][clamp(level,1,5)-1];
      const pairs=[];
      if(limit<=100){
        for(let left=2;left<=limit;left++)for(let right=1;right<left;right++)pairs.push([left,right]);
        for(let i=0;i<30;i++)pairs[i]=pairs[Math.round(i*(pairs.length-1)/29)];
      }else{
        const fractions=[.1,.2,.3,.4,.5,.6,.7,.8,.9];
        for(let i=0;i<30;i++){
          const left=Math.max(2,Math.round(10+(990*i/29)));
          const right=Math.max(1,Math.min(left-1,Math.round(left*fractions[i%fractions.length])));
          pairs.push([left,right]);
        }
      }
      return pairs.slice(0,30).map(([left,right])=>{
        const icon=pictures[(left+right)%pictures.length];
        const pictureVisual={groups:[Array(left).fill(icon),Array(right).fill(icon)],operator:"−"};
        return make(`${left} − ${right}`,String(left-right),numberOptions(left-right),"",{skill:"חיסור",type:level<=2?"חיסור עם ציורים":"חיסור",word:true,pictureMath:level<=2?pictureVisual:null});
      });
    }
    if(kind==="add"){
      const config=[
        {max:10,pictures:true}, {max:20,pictures:true}, {max:30,pictures:true},
        {max:30,pictures:false}, {max:50,pictures:false}, {max:100,pictures:false}
      ][clamp(level,1,6)-1];
      const candidates=[];
      if(config.max<=30){
        for(let total=2;total<=config.max;total++){
          for(let right=1;right<total;right++){
            const left=total-right;
            if(left<right)continue;
            candidates.push([left,right]);
          }
        }
      }else{
        for(let i=0;i<30;i++){
          const total=Math.round(2+((config.max-2)*i/29));
          const first=Math.max(1,Math.floor(total*(0.34+(i%5)*0.08)));
          const second=total-first;
          // Keep the larger addend on the left in every level.  In Hebrew
          // screens this also makes the visual convention consistent with
          // subtraction: the larger number is always read first.
          candidates.push([Math.max(first,second),Math.min(first,second)]);
        }
      }
      const selected=Array.from({length:30},(_,index)=>candidates[Math.round(index*(candidates.length-1)/29)]);
      return selected.map(([left,right])=>{
        const answer=left+right;
        const icon=pictures[(left+right)%pictures.length];
        const pictureVisual={groups:[Array(left).fill(icon),Array(right).fill(icon)],operator:"+"};
        const prompt=config.pictures?`${left} + ${right}`:level===4?`חשבו: ${left} + ${right}`:`פתרו: ${left} + ${right}`;
        return make(prompt,String(answer),numberOptions(answer),"",{skill:"חיבור",type:config.pictures?"חיבור עם ציורים":"חיבור מספרים",word:true,pictureMath:config.pictures?pictureVisual:null});
      });
    }
    const max=clamp(5+level*3,8,50),out=[];
    const minA=level>=7?4:level>=5?2:1;
    const minB=level>=7?2:1,maxSecond=level>=12?15:level>=9?12:8;
    for(let a=minA;a<=max;a++){for(let b=minB;b<=Math.min(a,maxSecond);b++){const answer=kind==="add"?a+b:a-b;if(answer<0)continue;if(kind!=="add"&&level>=4&&answer===0)continue;const icon=pictures[(a+b)%pictures.length],pictureVisual={groups:[Array(a).fill(icon),Array(b).fill(icon)],operator:"+"},left=Math.max(a,b),right=Math.min(a,b),expression=kind==="add"?`${left} + ${right}`:`${left} − ${right}`;out.push(make(expression,String(answer),numberOptions(answer),"",{skill:kind==="add"?"חיבור":"חיסור",type:kind==="add"?"חיבור":"חיסור",word:true,pictureMath:kind==="add"&&level<6?pictureVisual:null}));}}
    return out;
  }
  function numberLine(level){
    const config=[
      {max:10,steps:[1],directions:[1]},
      {max:50,steps:[1,2,3,4,5],directions:[1]},
      {max:100,steps:[1,2,3,4,5,10],directions:[1,-1]},
      {max:1000,steps:[5,10,20,25,50,100],directions:[1,-1]}
    ][clamp(level,1,4)-1];
    const candidates=[];
    config.steps.forEach(step=>config.directions.forEach(direction=>{
      const signedStep=step*direction;
      for(let start=0;start<=config.max;start+=step){
        const items=Array.from({length:5},(_,index)=>start+(index*signedStep));
        if(!items.every(number=>number>=0&&number<=config.max))continue;
        for(let missingIndex=0;missingIndex<5;missingIndex++){
          const correct=items[missingIndex],display=items.map((number,index)=>index===missingIndex?"□":number);
          candidates.push(make("איזה מספר מתאים לריבוע?",String(correct),numberOptions(correct),display.join(" — "),{skill:"ציר המספרים",type:direction>0?"ציר עולה":"ציר יורד",numberLine:{items:display}}));
        }
      }
    }));
    const targetCount=Math.min(30,candidates.length);
    return Array.from({length:targetCount},(_,index)=>candidates[Math.round(index*(candidates.length-1)/Math.max(1,targetCount-1))]);
  }
  function shapeQuestions(level){
    const active=shapes.slice(0,clamp(3+Math.floor(level/2),3,shapes.length)),out=[];
    active.forEach(([icon,name,sides,corners])=>{
      out.push(make(`איזו צורה היא ${name}?`,icon,options(icon,active.map(x=>x[0])),"",{skill:"צורות",type:"מזהים צורה",shapeAnswers:true}));
      if(level>=4)out.push(make(`כמה צלעות יש ל${name}?`,String(sides),numberOptions(sides),icon,{skill:"צורות",type:"צלעות וקודקודים"}));
      if(level>=6)out.push(make(`כמה קודקודים יש ל${name}?`,String(corners),numberOptions(corners),icon,{skill:"צורות",type:"צלעות וקודקודים"}));
      if(level>=10&&sides>0)out.push(make(`לאיזו צורה יש ${sides} צלעות?`,icon,options(icon,active.map(x=>x[0])),"",{skill:"צורות",type:"מזהים לפי צלעות",shapeAnswers:true}));
    });
    return repeatPool(out);
  }
  function clockQuestions(level){
    const makeClock=(q,answer,answers,hour,minutes,type)=>make(q,answer,answers,"",{skill:"שעון",type,clock:{hour,minutes}});
    // Besides the twelve whole-hour readings, the first stage has four
    // separate prompts about the hands.  They reinforce the same skill
    // without cloning an exercise.
    const total=level===1?16:level===2?24:30;
    return Array.from({length:total},(_,i)=>{
      const wholeHourExtra=[3,6,9,12];
      const hour=level===1?(i<12?i+1:wholeHourExtra[i-12]):level===2?Math.floor(i/2)+1:level===3?Math.floor(i/4)+1:(i%12)+1;
      const hourText=String(hour).padStart(2,"0");
      if(level===1){
        const answer=`${hourText}:00`;
        const prompt=i<12?"מה השעה?":`המחוג הקצר מצביע על ${hour} והמחוג הארוך על 12. מה השעה?`;
        return makeClock(prompt,answer,options(answer,[`${String((hour%12)+1).padStart(2,"0")}:00`,`${String(((hour+1)%12)+1).padStart(2,"0")}:00`,`${String(((hour+2)%12)+1).padStart(2,"0")}:00`]),hour,0,"שעות שלמות");
      }
      if(level===2){
        const half=i%2===0,minutes=half?30:0,answer=`${hourText}:${half?"30":"00"}`;
        return makeClock("איזו שעה מוצגת בשעון?",answer,options(answer,[`${hourText}:00`,`${hourText}:30`,`${String((hour%12)+1).padStart(2,"0")}:00`,`${String((hour%12)+1).padStart(2,"0")}:30`]),hour,minutes,"שעות וחצאים");
      }
      if(level===3){
        const minuteOptions=[0,15,30,45],minutes=minuteOptions[i%minuteOptions.length],answer=`${hourText}:${String(minutes).padStart(2,"0")}`;
        const distractors=[`${hourText}:00`,`${hourText}:15`,`${hourText}:30`,`${hourText}:45`,`${String((hour%12)+1).padStart(2,"0")}:00`];
        return makeClock("איזו שעה מוצגת בשעון?",answer,options(answer,distractors),hour,minutes,"שעות, חצאים ורבעים");
      }
      const minutes=(i*7+3)%60,answer=`${hourText}:${String(minutes).padStart(2,"0")}`;
      const distractors=[`${hourText}:${String((minutes+1)%60).padStart(2,"0")}`,`${hourText}:${String((minutes+59)%60).padStart(2,"0")}`,`${String((hour%12)+1).padStart(2,"0")}:${String(minutes).padStart(2,"0")}`];
      return makeClock("איזו שעה מוצגת בשעון?",answer,options(answer,distractors),hour,minutes,"שעות ודקות בודדות");
    });
  }
  function moneyQuestions(level){
    const coins=[1,2,5,10],maxCoins=clamp(2+Math.floor(level/2),2,5);
    return Array.from({length:24},(_,i)=>{const used=Array.from({length:maxCoins},(_,j)=>coins[(i+j)%coins.length]),answer=used.reduce((a,b)=>a+b,0);return make("כמה שקלים יש כאן?",`${answer} ₪`,options(`${answer} ₪`,[`${answer-1} ₪`,`${answer+1} ₪`,`${answer+2} ₪`]),used.map(x=>`${x}₪`).join(" + "),{skill:"כסף",type:"סופרים כסף"});});
  }
  function multiplication(level){
    const config=[
      {minGroups:2,maxGroups:2,maxEach:3},
      {minGroups:2,maxGroups:3,maxEach:5},
      {minGroups:2,maxGroups:4,maxEach:6},
      {minGroups:2,maxGroups:5,maxEach:8},
      {minGroups:2,maxGroups:6,maxEach:10}
    ][clamp(level,1,5)-1];
    const items=[
      ["🍎","תפוחים"],["⭐","כוכבים"],["⚽","כדורים"],["🌼","פרחים"],["❤️","לבבות"],
      ["🐟","דגים"],["🍪","עוגיות"],["🖍️","צבעים"],["🧸","דובים"],["🍓","תותים"]
    ];
    const candidates=[];
    for(let groups=config.minGroups;groups<=config.maxGroups;groups++){
      for(let each=1;each<=config.maxEach;each++){
        for(const item of items)candidates.push({groups,each,item});
      }
    }
    return Array.from({length:25},(_,index)=>candidates[Math.round(index*(candidates.length-1)/24)]).map(({groups,each,item})=>{
      const [icon,noun]=item;
      const answer=groups*each;
      const visual=Array.from({length:groups},()=>`(${Array(each).fill(icon).join(" ")})`).join("  ");
      return make(`כמה ${noun} יש ב־${groups} קבוצות של ${each}?`,String(answer),numberOptions(answer),visual,{skill:"כפל",type:`קבוצות שוות — רמה ${level}`,word:true,compactGroupVisual:true});
    });
  }
  function multiplicationNumbers(level){
    const config=[
      {first:3,second:5,factors:2},
      {first:5,second:5,factors:2},
      {first:10,second:10,factors:2},
      {first:20,second:20,factors:2},
      {first:10,second:10,factors:3}
    ][clamp(level,1,5)-1];
    const candidates=[];
    if(config.factors===2){
      for(let first=1;first<=config.first;first++){
        for(let second=1;second<=config.second;second++)candidates.push([first,second]);
      }
      // Level 1 otherwise has exactly fifteen factor pairs.  The reversed
      // expression is a real additional question and introduces commutativity.
      if(level===1)candidates.push([5,3]);
    }else{
      for(let first=1;first<=10;first++)for(let second=1;second<=10;second++)for(let third=1;third<=10;third++)candidates.push([first,second,third]);
    }
    const total=Math.min(30,candidates.length);
    return Array.from({length:total},(_,index)=>candidates[Math.round(index*(candidates.length-1)/Math.max(1,total-1))]).map(factors=>{
      const answer=factors.reduce((result,value)=>result*value,1);
      return make(factors.join(" × "),String(answer),numberOptions(answer),"",{skill:"כפל",type:config.factors===3?"כפל של שלושה מספרים":"כפל מספרים",word:true});
    });
  }
  function legacyWordProblems(level){
    const max=clamp(8+level*3,12,60);
    const thinkingVisuals=["💡","🔍","🧭","✨","🦉"];
    const templates=[
      {add:true, icon:"🏷️", question:(a,b)=>`לנועה היו ${a} מדבקות והיא קיבלה עוד ${b}. כמה מדבקות יש לה עכשיו?`},
      {add:true, icon:"✏️", question:(a,b)=>`על השולחן היו ${a} עפרונות כחולים. הוסיפו עוד ${b} עפרונות. כמה עפרונות יש עכשיו?`},
      {add:true, icon:"🍎", question:(a,b)=>`בסל היו ${a} תפוחים. הוסיפו לסל עוד ${b} תפוחים. כמה תפוחים יש בסל?`},
      {add:true, icon:"📚", question:(a,b)=>`בכיתה היו ${a} ספרים חדשים. הגיעו עוד ${b} ספרים. כמה ספרים יש עכשיו?`},
      {add:true, icon:"🎈", question:(a,b)=>`לדנה היו ${a} בלונים והיא קיבלה עוד ${b} בלונים. כמה בלונים יש לה?`},
      {add:true, icon:"🐟", question:(a,b)=>`באקווריום שחו ${a} דגים. הוסיפו עוד ${b} דגים. כמה דגים שוחים באקווריום?`},
      {add:true, icon:"🚗", question:(a,b)=>`לעומר היו ${a} מכוניות צעצוע והוא קיבל עוד ${b}. כמה מכוניות צעצוע יש לו?`},
      {add:true, icon:"🐦", question:(a,b)=>`על העץ ישבו ${a} ציפורים. הגיעו עוד ${b} ציפורים. כמה ציפורים יש על העץ?`},
      {add:true, icon:"🧊", question:(a,b)=>`בקופסה היו ${a} קוביות. הכניסו פנימה עוד ${b} קוביות. כמה קוביות יש בקופסה?`},
      {add:true, icon:"🐚", question:(a,b)=>`רוני מצאה ${a} צדפים, ואחר כך מצאה עוד ${b}. כמה צדפים מצאה רוני בסך הכול?`},
      {add:true, icon:"🌸", question:(a,b)=>`בגינה פרחו ${a} פרחים, ובהמשך פרחו עוד ${b}. כמה פרחים פורחים בגינה?`},
      {add:false, icon:"🔵", question:(a,b)=>`ליואב היו ${a} גולות והוא נתן ${b} לחבר. כמה גולות נשארו לו?`},
      {add:false, icon:"🍪", question:(a,b)=>`על הצלחת היו ${a} עוגיות. אכלו ${b} עוגיות. כמה עוגיות נשארו?`},
      {add:false, icon:"📗", question:(a,b)=>`על המדף היו ${a} ספרים. לקחו ${b} ספרים. כמה ספרים נשארו על המדף?`},
      {add:false, icon:"🖍️", question:(a,b)=>`לליאור היו ${a} צבעים. ${b} צבעים אבדו. כמה צבעים נשארו לליאור?`},
      {add:false, icon:"🍓", question:(a,b)=>`בקערה היו ${a} תותים. אכלו ${b} תותים. כמה תותים נשארו בקערה?`},
      {add:false, icon:"🏷️", question:(a,b)=>`לאורי היו ${a} מדבקות והוא נתן ${b} לאחותו. כמה מדבקות נשארו לו?`},
      {add:false, icon:"⚽", question:(a,b)=>`בחצר שיחקו ${a} ילדים. ${b} ילדים הלכו הביתה. כמה ילדים נשארו בחצר?`},
      {add:false, icon:"🎾", question:(a,b)=>`בחנות היו ${a} כדורים. מכרו ${b} כדורים. כמה כדורים נשארו בחנות?`},
      {add:false, icon:"🌿", question:(a,b)=>`באדנית צמחו ${a} נבטים. ${b} נבטים נבלו. כמה נבטים נשארו?`}
    ];
    const questions=[];
    const activeTemplates=level<=3?templates.filter(template=>template.add):level<=6?templates.slice(0,16):templates;
    activeTemplates.forEach((template,index)=>{
      const a=template.add?2+(index*3)%max:4+(index*3)%(max-1);
      const b=template.add?1+(index*2)%Math.min(9,max):1+(index*2)%Math.min(9,a-1);
      const answer=template.add?a+b:a-b;
      questions.push(make(template.question(a,b),String(answer),numberOptions(answer),template.icon||thinkingVisuals[index%thinkingVisuals.length],{skill:"בעיות מילוליות",type:"בעיה מילולית"}));
    });
    return repeatPool(questions,24);
  }
  function wordProblems(level){
    // Each name has an explicit grammatical gender, so stories can read
    // naturally without forms such as "קיבל/ה".
    const people=[
      {name:"נועה",received:"קיבלה",gave:"נתנה",added:"הוסיפה",needs:"צריכה",sibling:"אחותה"},
      {name:"דן",received:"קיבל",gave:"נתן",added:"הוסיף",needs:"צריך",sibling:"אחיו"},
      {name:"מיה",received:"קיבלה",gave:"נתנה",added:"הוסיפה",needs:"צריכה",sibling:"אחותה"},
      {name:"אורי",received:"קיבל",gave:"נתן",added:"הוסיף",needs:"צריך",sibling:"אחיו"},
      {name:"תמר",received:"קיבלה",gave:"נתנה",added:"הוסיפה",needs:"צריכה",sibling:"אחותה"},
      {name:"יואב",received:"קיבל",gave:"נתן",added:"הוסיף",needs:"צריך",sibling:"אחיו"},
      {name:"יעל",received:"קיבלה",gave:"נתנה",added:"הוסיפה",needs:"צריכה",sibling:"אחותה"},
      {name:"אדם",received:"קיבל",gave:"נתן",added:"הוסיף",needs:"צריך",sibling:"אחיו"},
      {name:"שירה",received:"קיבלה",gave:"נתנה",added:"הוסיפה",needs:"צריכה",sibling:"אחותה"},
      {name:"גיל",received:"קיבל",gave:"נתן",added:"הוסיף",needs:"צריך",sibling:"אחיו"},
      {name:"אלה",received:"קיבלה",gave:"נתנה",added:"הוסיפה",needs:"צריכה",sibling:"אחותה"},
      {name:"איתי",received:"קיבל",gave:"נתן",added:"הוסיף",needs:"צריך",sibling:"אחיו"},
      {name:"מאיה",received:"קיבלה",gave:"נתנה",added:"הוסיפה",needs:"צריכה",sibling:"אחותה"},
      {name:"עומר",received:"קיבל",gave:"נתן",added:"הוסיף",needs:"צריך",sibling:"אחיו"},
      {name:"ליה",received:"קיבלה",gave:"נתנה",added:"הוסיפה",needs:"צריכה",sibling:"אחותה"},
      {name:"רון",received:"קיבל",gave:"נתן",added:"הוסיף",needs:"צריך",sibling:"אחיו"},
      {name:"נויה",received:"קיבלה",gave:"נתנה",added:"הוסיפה",needs:"צריכה",sibling:"אחותה"},
      {name:"עידו",received:"קיבל",gave:"נתן",added:"הוסיף",needs:"צריך",sibling:"אחיו"},
      {name:"איילה",received:"קיבלה",gave:"נתנה",added:"הוסיפה",needs:"צריכה",sibling:"אחותה"},
      {name:"רועי",received:"קיבל",gave:"נתן",added:"הוסיף",needs:"צריך",sibling:"אחיו"}
    ];
    const things=[
      {plural:"מדבקות",one:"מדבקה אחת",gender:"f"},
      {plural:"עפרונות",one:"עיפרון אחד",gender:"m"},
      {plural:"תפוחים",one:"תפוח אחד",gender:"m"},
      {plural:"ספרים",one:"ספר אחד",gender:"m"},
      {plural:"בלונים",one:"בלון אחד",gender:"m"},
      {plural:"גולות",one:"גולה אחת",gender:"f"},
      {plural:"צדפים",one:"צדף אחד",gender:"m"},
      {plural:"קוביות",one:"קובייה אחת",gender:"f"},
      {plural:"פרחים",one:"פרח אחד",gender:"m"},
      {plural:"כדורים",one:"כדור אחד",gender:"m"}
    ];
    const at=(items,index)=>items[index%items.length];
    const personAt=index=>at(people,index);
    const quantity=(thing,count)=>count===1?thing.one:`${count} ${thing.plural}`;
    const had=(place,count,thing)=>count===1?`${place} ${thing.gender==="f"?"הייתה":"היה"} ${quantity(thing,count)}`:`${place} היו ${quantity(thing,count)}`;
    const taken=(thing,count)=>`${quantity(thing,count)} ${count===1?(thing.gender==="f"?"נלקחה":"נלקח"):"נלקחו"}`;
    const toys=count=>count===1?"צעצוע אחד":`${count} צעצועים`;
    const pairWithSumAtMost=(max,index)=>{
      const pairs=[];
      for(let first=1;first<max;first++)for(let second=1;second<=max-first;second++)pairs.push([first,second]);
      return pairs[Math.round(index*(pairs.length-1)/24)];
    };
    const subtractionPair=(max,index)=>{
      const pairs=[];
      for(let first=2;first<=max;first++)for(let second=1;second<first;second++)pairs.push([first,second]);
      return pairs[Math.round(index*(pairs.length-1)/24)];
    };
    const story=(question,answer,type)=>make(question,String(answer),numberOptions(answer),"",{skill:"בעיות מילוליות",type,word:true});
    const questions=[];
    if(level<=3){
      const max=[10,20,30][level-1];
      for(let index=0;index<25;index++){
        const [first,second]=pairWithSumAtMost(max,index),person=personAt(index),thing=at(things,index);
        questions.push(story(`${had(`ל${person.name}`,first,thing)}. ${person.name} ${person.received} עוד ${quantity(thing,second)}. כמה ${thing.plural} יש ל${person.name} עכשיו?`,first+second,"חיבור"));
      }
    }else if(level===4){
      for(let index=0;index<25;index++){
        const person=personAt(index),thing=at(things,index);
        if(index%2===0){
          const [first,second]=pairWithSumAtMost(30,index);
          questions.push(story(`${had(`ל${person.name}`,first,thing)}. ${person.name} ${person.received} עוד ${quantity(thing,second)}. כמה ${thing.plural} יש ל${person.name} עכשיו?`,first+second,"חיבור"));
        }else{
          const [first,second]=subtractionPair(30,index);
          questions.push(story(`${had(`ל${person.name}`,first,thing)}. ${person.name} ${person.gave} ${quantity(thing,second)}. כמה ${thing.plural} נשארו ל${person.name}?`,first-second,"חיסור"));
        }
      }
    }else if(level===5){
      for(let index=0;index<25;index++){
        const thing=at(things,index),first=2+(index*3)%20,second=first+1+(index*5)%10,person=personAt(index),otherPerson=personAt(index+1);
        if(index%2===0)questions.push(story(`ל${person.name} יש ${quantity(thing,first)}, ול${otherPerson.name} יש ${quantity(thing,second)}. בכמה ${thing.plural} יש ל${otherPerson.name} יותר?`,second-first,"השוואה"));
        else questions.push(story(`ל${person.name} יש ${quantity(thing,first)}. כמה ${thing.plural} ${person.needs} ${person.name} לקבל כדי שיהיו ל${person.name} ${quantity(thing,second)}?`,second-first,"השלמה"));
      }
    }else if(level===6){
      for(let index=0;index<25;index++){
        const person=personAt(index),thing=at(things,index);
        if(index%2===0){
          const [first,second]=pairWithSumAtMost(50,index);
          questions.push(story(`${had(`במגירה של ${person.name}`,first,thing)}. ${person.name} ${person.added} עוד ${quantity(thing,second)}. כמה ${thing.plural} יש במגירה?`,first+second,"חיבור"));
        }else{
          const [first,second]=subtractionPair(50,index);
          questions.push(story(`${had("בכיתה",first,thing)}. העבירו ${quantity(thing,second)} לכיתה אחרת. כמה ${thing.plural} נשארו?`,first-second,"חיסור"));
        }
      }
    }else if(level===7){
      for(let index=0;index<25;index++){
        const first=20+(index*7)%50,second=5+(index*3)%20,third=1+(index*5)%Math.min(15,first+second-1),thing=at(things,index);
        questions.push(story(`${had("בחצר",first,thing)}. הגיעו עוד ${quantity(thing,second)}, ואז ${taken(thing,third)}. כמה ${thing.plural} נשארו בחצר?`,first+second-third,"שתי פעולות"));
      }
    }else{
      for(let index=0;index<25;index++){
        const first=25+(index*7)%55,second=5+(index*3)%20,third=1+(index*5)%Math.min(18,first+second-1),thing=at(things,index),extra=1+(index*4)%12,person=personAt(index);
        questions.push(story(`${had(`ל${person.name}`,first,thing)}. ${person.name} ${person.received} עוד ${quantity(thing,second)} ו${person.gave} ${quantity(thing,third)} לחבר. ל${person.sibling} יש ${toys(extra)}. כמה ${thing.plural} נשארו ל${person.name}?`,first+second-third,"שתי פעולות ומידע נוסף"));
      }
    }
    return questions;
  }

  function fractions(level){
    const data=[["חצי","1/2","◼◼◻◻"],["רבע","1/4","◼◻◻◻"],["שלושה רבעים","3/4","◼◼◼◻"],["שליש","1/3","◼◻◻"],["שני שלישים","2/3","◼◼◻"],["חמישית","1/5","◼◻◻◻◻"],["שתי חמישיות","2/5","◼◼◻◻◻"],["ארבע חמישיות","4/5","◼◼◼◼◻"],["שמינית","1/8","◼◻◻◻◻◻◻◻"]];
    const active=data.slice(0,clamp(2+Math.floor(level/2),2,data.length));
    const colors=[
      {name:"בכחול",className:"blue"},
      {name:"באדום",className:"red"},
      {name:"בסגול",className:"purple"},
      {name:"בירוק",className:"green"},
      {name:"בכתום",className:"orange"}
    ];
    return repeatPool(active.map(([name,fraction,visual],index)=>{
      const color=colors[index%colors.length];
      return make(`איזה חלק צבוע ${color.name}?`,fraction,options(fraction,data.map(x=>x[1])),visual,{skill:"איזה חלק זה?",type:name,fractionColor:color.className});
    }));
  }

  function wordQuestions(kind,level){
    const realLevel=clamp(level,1,9);
    // "Letter and Word" used to have several stages that differed only in
    // the number of options.  These four stages combine the redundant levels
    // while keeping a real increase in both vocabulary range and choices.
    const letterPictureStages=[
      {wordCount:25,choiceCount:2}, // old 1, 2, 3 and 7
      {wordCount:25,choiceCount:3}, // old 4
      {wordCount:25,choiceCount:4}, // old 5 and 6
      {wordCount:28,choiceCount:5}  // old 8 and 9
    ];
    const letterPictureStage=kind==="letterPicture"?letterPictureStages[clamp(level,1,4)-1]:null;
    // The first-letter game has four real stages.  The first three divide the
    // vocabulary from the former levels 1–7 into thirds; the last stage is a
    // cumulative challenge based on the former levels 8–9.
    const firstLetterStages=[
      {start:0,wordCount:16,choiceCount:2,nearLetters:false},
      {start:8,wordCount:16,choiceCount:3,nearLetters:false},
      {start:16,wordCount:16,choiceCount:4,nearLetters:true},
      {start:0,wordCount:28,choiceCount:4,nearLetters:true}
    ];
    const firstLetterStage=kind==="firstLetter"?firstLetterStages[clamp(level,1,4)-1]:null;
    // The two word/picture matching games share the same four-stage
    // progression: three vocabulary thirds followed by a cumulative challenge.
    const pictureMatchingStages=[
      {start:0,wordCount:16,choiceCount:2,sameCategory:false},
      {start:8,wordCount:16,choiceCount:3,sameCategory:false},
      {start:16,wordCount:16,choiceCount:4,sameCategory:true},
      {start:0,wordCount:28,choiceCount:4,sameCategory:true}
    ];
    const pictureMatchingStage=(kind==="imageWord"||kind==="dragEnglish")?pictureMatchingStages[clamp(level,1,4)-1]:null;
    const missingEnglishStages=[
      {sourceLevel:3,choiceCount:2},
      {sourceLevel:6,choiceCount:3},
      {sourceLevel:7,choiceCount:4},
      {sourceLevel:10,choiceCount:4}
    ];
    const missingEnglishStage=kind==="missingEnglish"?missingEnglishStages[clamp(level,1,4)-1]:null;
    if(missingEnglishStage)level=missingEnglishStage.sourceLevel;
    const contentLevel=realLevel;
    const count=letterPictureStage?letterPictureStage.wordCount:firstLetterStage?firstLetterStage.wordCount:pictureMatchingStage?pictureMatchingStage.wordCount:clamp(5+contentLevel*3,8,englishWords.length);
    const active=missingEnglishStage?englishWords:firstLetterStage?englishWords.slice(firstLetterStage.start,firstLetterStage.start+count):pictureMatchingStage?englishWords.slice(pictureMatchingStage.start,pictureMatchingStage.start+count):englishWords.slice(0,count);
    const choiceCount=letterPictureStage?letterPictureStage.choiceCount:firstLetterStage?firstLetterStage.choiceCount:pictureMatchingStage?pictureMatchingStage.choiceCount:missingEnglishStage?missingEnglishStage.choiceCount:(realLevel===1?2:realLevel===2?3:realLevel<=5?4:realLevel<=7?5:6);
    const englishLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const letterChoices=letter=>{
      const near={A:["A","E","O","U"],B:["B","D","P","R"],C:["C","G","O","Q"],D:["D","B","P","O"],F:["F","E","P","T"],M:["M","N","W","H"],S:["S","C","Z","T"],W:["W","M","V","H"]};
      const useNearLetters=firstLetterStage?firstLetterStage.nearLetters:realLevel>=4;
      return options(letter,useNearLetters?(near[letter]||englishLetters):englishLetters,choiceCount);
    };
    if(kind==="missingEnglish"&&missingEnglishStage)return repeatPool(active.filter(x=>x[1].length<=clamp(3+Math.floor(level/2),4,8)).map(([icon,word])=>{
      const pos=level>=7?1+word.length%Math.max(1,word.length-2):word.length-1;
      const correct=word[pos],masked=word.slice(0,pos)+"_"+word.slice(pos+1);
      return make("איזו אות חסרה?",correct,options(correct,"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),choiceCount),`${icon}  ${masked}`,{skill:"אות",type:"אות חסרה",word:true});
    }));
    if(kind==="uppercase")return repeatPool(active.map(([icon,word,letter])=>make(`מצאו את האות ${letter}`,letter,options(letter,"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),"",{skill:"אותיות גדולות",type:"CAPITAL LETTERS"})));
    if(kind==="letterPicture")return repeatPool(active.map(([icon,word,letter])=>{
      const correct=`${icon} ${word}`;
      // Every option except the correct one must begin with a different letter.
      // A picture above the answers would reveal the correct word, so this game
      // deliberately presents only the letter and the written answer choices.
      const distractors=active.filter(([, ,candidateLetter])=>candidateLetter!==letter).map(x=>`${x[0]} ${x[1]}`);
      return make(`איזו מילה מתחילה באות ${letter}?`,correct,options(correct,distractors,choiceCount),"",{skill:"אות ומילה",type:"אות ומילה"});
    }));
    if(kind==="firstLetter")return repeatPool(active.map(([icon,word,letter])=>make(`באיזו אות מתחילה המילה ${word}?`,letter,letterChoices(letter),realLevel===5?"":icon,{skill:"אות ראשונה",type:realLevel===5?"מילה כתובה":"צליל ראשון"})));
    if(kind==="imageWord")return repeatPool(active.map(([icon,word,,cat])=>{
      const categoryWords=englishWords.filter(x=>x[3]===cat).map(x=>x[1]);
      const pool=pictureMatchingStage?.sameCategory&&categoryWords.length>=choiceCount?categoryWords:active.map(x=>x[1]);
      return make("איזו מילה מתאימה לתמונה?",word,options(word,pool,choiceCount),icon,{skill:"אוצר מילים",type:pictureMatchingStage?.sameCategory&&categoryWords.length>=choiceCount?"מילים מאותה קבוצה":"תמונה ומילה",word:true});
    }));
    if(kind==="missingEnglish")return repeatPool(active.filter(x=>x[1].length<=clamp(3+Math.floor(level/2),4,8)).map(([icon,word])=>{const pos=level>=7?1+word.length%Math.max(1,word.length-2):word.length-1,correct=word[pos],masked=word.slice(0,pos)+"_"+word.slice(pos+1);return make("איזו אות חסרה?",correct,options(correct,"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),`${icon}  ${masked}`,{skill:"איות",type:"אות חסרה",word:true});}));
    if(kind==="buildEnglish"){
      // Four meaningful stages: short words, then longer words and more
      // distracting letters.  The former 1–3, 4–5 and 7–8 levels were
      // technically different only by shuffling, so they are consolidated.
      const buildStages=[
        {maxLength:4,extraLetters:1},
        {maxLength:5,extraLetters:2},
        {maxLength:6,extraLetters:3},
        {maxLength:7,extraLetters:4}
      ];
      const stage=buildStages[clamp(level,1,4)-1];
      const buildVocabulary=englishWords.filter(x=>x[1].length<=stage.maxLength);
      return repeatPool(buildVocabulary.map(([icon,word])=>make("בנו את המילה מהאותיות",word,[],icon,{skill:"איות",type:"בונים מילה",mode:"build",tokens:shuffle([...word,...shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")).slice(0,stage.extraLetters)]),joinWith:"",word:true})));
    }
    if(kind==="dragEnglish")return repeatPool(active.map(([icon,word,,cat])=>{
      const categoryPictures=englishWords.filter(x=>x[3]===cat).map(x=>x[0]);
      const pool=pictureMatchingStage?.sameCategory&&categoryPictures.length>=choiceCount?categoryPictures:active.map(x=>x[0]);
      return make(`לחצו על התמונה המתאימה למילה ${word}`,icon,options(icon,pool,choiceCount),"",{skill:"התאמה",type:pictureMatchingStage?.sameCategory&&categoryPictures.length>=choiceCount?"תמונות מאותה קבוצה":"מילה ותמונה"});
    }));
    if(kind==="listenEnglish")return repeatPool(animals.slice(0,count).map(animal=>make("לחצו על הרמקול ובחרו את בעל החיים ששמעתם",animal.icon,options(animal.icon,animals.map(x=>x.icon)),"🔊",{skill:"האזנה",type:"לחצו ושמעו",audio:{kind:"speech",text:animal.en}})));
    if(kind==="englishCategories"){
      const categoryLevel=clamp(level,1,6);
      const categoryNames=["ANIMAL","FOOD","OBJECT","BODY"];
      const categoryPools=Object.fromEntries(categoryNames.map(category=>[category,englishWords.filter(([, , , itemCategory])=>itemCategory===category)]));
      const categoryWords=categoryNames.flatMap(category=>categoryPools[category]);
      const sample=(items,total)=>Array.from({length:total},(_,index)=>items[Math.round(index*(items.length-1)/Math.max(1,total-1))]);
      const wordChoices=(correct,total)=>options(correct,categoryWords.filter(([,word])=>word!==correct).map(([,word])=>word),total);
      if(categoryLevel===1)return sample(categoryWords,20).map(([icon,word,,category])=>make(
        `Which word belongs to ${category}?`,word,wordChoices(word,2),"",{skill:"קטגוריות",type:"בחירה מקטגוריה",word:true}
      ));
      if(categoryLevel===2)return sample(categoryWords,30).map(([icon,word,,category])=>make(
        `Which word belongs to ${category}?`,word,wordChoices(word,4),"",{skill:"קטגוריות",type:"בחירה מקטגוריה",word:true}
      ));
      if(categoryLevel===3)return sample(categoryWords,30).map(([icon,word,,category])=>make(
        `Which category does ${word} belong to?`,category,options(category,categoryNames,4),"",{skill:"קטגוריות",type:"מיון הפוך",word:true}
      ));
      if(categoryLevel===4)return sample(categoryWords,30).map(([icon,word,,category])=>make(
        `Which word belongs to ${category}?`,word,wordChoices(word,6),"",{skill:"קטגוריות",type:"בחירה משש מילים",word:true}
      ));
      if(categoryLevel===5){
        const oddQuestions=categoryNames.flatMap(category=>categoryWords.filter(([, , , itemCategory])=>itemCategory!==category).map(([,word])=>({category,word})));
        return sample(oddQuestions,47).map(({category,word})=>make(
          `Which word does not belong to ${category}?`,word,options(word,categoryPools[category].map(([,itemWord])=>itemWord),6),"",{skill:"קטגוריות",type:"יוצא דופן",word:true}
        ));
      }
      const pairs=categoryNames.flatMap(category=>{
        const words=categoryPools[category].map(([,word])=>word),out=[];
        for(let first=0;first<words.length;first++)for(let second=first+1;second<words.length;second++)out.push({category,first:words[first],second:words[second]});
        return out;
      });
      return sample(pairs,30).map(({category,first,second})=>{
        const correct=`${first} + ${second}`;
        const wrong=categoryNames.filter(other=>other!==category).flatMap(other=>categoryPools[other].map(([,word])=>`${first} + ${word}`));
        return make("אילו שתי מילים שייכות לאותה קטגוריה?",correct,options(correct,wrong,6),"",{skill:"קטגוריות",type:"זוגות מאותה קטגוריה",word:true});
      });
    }
    if(kind==="legacyEnglishCategories"){
      const categoryLevel=clamp(level,1,9);
      const categoryPools=Object.fromEntries([...new Set(englishWords.map(([, , , category])=>category))].map(category=>[category,englishWords.filter(([, , , itemCategory])=>itemCategory===category)]));
      // ANIMAL, FOOD, OBJECT and BODY are mutually clear categories for this
      // age group.  NATURE overlaps with animals and fruit, so it is not used
      // in this sorting game.
      const categoryNames=["ANIMAL","FOOD","OBJECT","BODY"];
      const categoryWords=(categoryLevel<=5?active:englishWords).filter(([, , , category])=>categoryNames.includes(category));
      if(categoryLevel<=4)return repeatPool(categoryWords.map(([icon,word,,cat])=>{
        const distractors=categoryWords.filter(([, , , itemCategory])=>itemCategory!==cat).map(([,itemWord])=>itemWord);
        return make(`איזו מילה שייכת לקטגוריה ${cat}?`,word,options(word,distractors,choiceCount),"",{skill:"קטגוריות",type:"מיון מילים"});
      }));
      if(categoryLevel<=6)return repeatPool(categoryWords.map(([icon,word,,cat])=>make(
        `לאיזו קטגוריה שייכת המילה ${word}?`,cat,options(cat,categoryNames,categoryLevel===5?4:5),"",
        {skill:"קטגוריות",type:categoryLevel===5?"מיון הפוך":"חמש קטגוריות"}
      )));
      if(categoryLevel===7)return repeatPool(categoryNames.flatMap(cat=>categoryPools[cat].map(([,word])=>{
        const distractors=categoryWords.filter(([, , , itemCategory])=>itemCategory!==cat).map(([,itemWord])=>itemWord);
        return make(`איזו מילה שייכת לקטגוריה ${cat}?`,word,options(word,distractors,5),"",{skill:"קטגוריות",type:"בחירה מחמש מילים"});
      })));
      if(categoryLevel===8)return repeatPool(categoryNames.filter(cat=>categoryPools[cat].length>=4).flatMap(cat=>categoryWords.filter(([, , , itemCategory])=>itemCategory!==cat).map(([,word])=>{
        const matching=categoryPools[cat].map(([,itemWord])=>itemWord);
        return make(`איזו מילה אינה שייכת לקטגוריה ${cat}?`,word,options(word,matching,5),"",{skill:"קטגוריות",type:"יוצא דופן"});
      })));
      // Nature overlaps in everyday language with fruit and animals.  Do not
      // use it in the "same category" pair challenge, where that overlap
      // would make a distractor such as SUN + APPLE seem reasonable.
      const pairCategories=categoryNames.filter(cat=>categoryPools[cat].length>=2);
      const sameCategoryPairs=pairCategories.flatMap(cat=>{
        const words=categoryPools[cat].map(([,word])=>word);
        return words.slice(0,-1).map((word,index)=>[`${word} + ${words[index+1]}`,cat]);
      });
      return repeatPool(sameCategoryPairs.map(([pair,cat],index)=>{
        const [first]=pair.split(" + ");
        const wrongPairs=pairCategories.filter(other=>other!==cat).map((other,offset)=>`${first} + ${categoryPools[other][offset%categoryPools[other].length][1]}`);
        return make("איזה זוג מילים שייך לאותה קטגוריה?",pair,options(pair,wrongPairs,4),"",{skill:"קטגוריות",type:"זוגות מאותה קטגוריה"});
      }));
    }
    return [];
  }
  function memoryEnglish(level){
    // Five real stages: more pairs and longer vocabulary at every stage.
    // Each stage has sixteen distinct boards, rather than repeating one board.
    const realLevel=clamp(level,1,5);
    const pairCounts=[3,4,5,6,7];
    const wordLimits=[10,16,22,englishWords.length,englishWords.length];
    const pairCount=pairCounts[realLevel-1];
    const active=englishWords.slice(0,wordLimits[realLevel-1]);
    return Array.from({length:16},(_,i)=>{
      // The second set of boards uses a wider stride, producing different
      // combinations even in the ten-word beginner bank.
      const start=(i+realLevel-1)%active.length;
      const stride=1+Math.floor(i/active.length);
      const selected=Array.from({length:pairCount},(_,j)=>active[(start+j*stride)%active.length]);
      return make("התאימו בין כל תמונה למילה שלה","הושלם",[],"",{
        skill:"זיכרון",
        type:`משחק זיכרון — רמה ${realLevel}`,
        mode:"memory",
        pairs:selected.map(x=>[x[0],x[1]])
      });
    });
  }
  function sentenceEnglish(level){
    const tiers=[
      [
        ["I","RUN"],["I","JUMP"],["I","SING"],["I","READ"],["I","SMILE"],
        ["WE","PLAY"],["WE","CLAP"],["WE","DANCE"],["DOG","RUNS"],["CAT","SLEEPS"],
        ["BIRD","FLIES"],["FISH","SWIMS"],["SUN","SHINES"],["RAIN","FALLS"],["BABY","LAUGHS"],
        ["FROG","JUMPS"],["LION","ROARS"],["BEAR","WALKS"],["DUCK","SWIMS"],["COW","EATS"],
        ["SHE","READS"],["HE","RUNS"],["MOM","COOKS"],["DAD","WAVES"],["KIDS","PLAY"]
      ],
      [
        ["I","SEE","A","CAT"],["THE","SUN","IS","HOT"],["THE","DOG","CAN","RUN"],["A","BIRD","CAN","FLY"],["THE","CAT","IS","SOFT"],
        ["I","LIKE","RED","APPLES"],["WE","PLAY","WITH","TOYS"],["THE","FISH","IS","BLUE"],["MY","MOM","MAKES","SOUP"],["MY","DAD","READS","BOOKS"],
        ["THE","BABY","IS","HAPPY"],["THE","FROG","CAN","JUMP"],["I","HAVE","TWO","BOOKS"],["THE","LION","IS","BIG"],["A","DUCK","LIKES","WATER"],
        ["THE","CAKE","IS","SWEET"],["THE","TREE","IS","TALL"],["THE","MOON","IS","ROUND"],["THE","RAIN","IS","COLD"],["WE","SING","A","SONG"],
        ["I","WEAR","BLUE","SHOES"],["THE","CAR","IS","FAST"],["THE","HAT","IS","RED"],["THE","BALL","IS","ROUND"],["MY","FISH","CAN","SWIM"]
      ],
      [
        ["THE","FROG","CAN","JUMP","HIGH"],["THE","BIRD","CAN","FLY","HIGH"],["MY","FRIEND","HAS","A","BIKE"],["THE","GIRL","HAS","A","DOLL"],["THE","BOY","HAS","A","KITE"],
        ["WE","PLAY","WITH","A","BALL"],["I","LIKE","TO","READ","BOOKS"],["SHE","LIKES","TO","DRAW","CATS"],["HE","LIKES","TO","BUILD","TOWERS"],["THE","CAT","SLEEPS","ON","SOFAS"],
        ["THE","DOG","RUNS","IN","PARKS"],["THE","FISH","SWIMS","IN","WATER"],["A","BEE","MAKES","SWEET","HONEY"],["THE","RABBIT","EATS","GREEN","LEAVES"],["THE","COW","EATS","FRESH","GRASS"],
        ["WE","SEE","STARS","AT","NIGHT"],["THE","SUN","SHINES","EVERY","DAY"],["THE","RAIN","MAKES","PUDDLES","OUTSIDE"],["MY","SISTER","SINGS","A","SONG"],["MY","BROTHER","KICKS","A","BALL"],
        ["THE","BABY","DRINKS","WARM","MILK"],["THE","LION","LIVES","IN","AFRICA"],["THE","BEAR","LIVES","IN","FORESTS"],["THE","DUCK","SWIMS","IN","PONDS"],["THE","TURTLE","WALKS","VERY","SLOWLY"]
      ],
      [
        ["THE","SMALL","BIRD","SINGS","VERY","LOUDLY"],["WE","PLAY","WITH","A","RED","BALL"],["THE","HAPPY","DOG","RUNS","IN","PARKS"],["I","READ","A","BOOK","BEFORE","BED"],["SHE","DRAWS","A","FLOWER","FOR","MOM"],
        ["HE","BUILDS","A","TOWER","WITH","BLOCKS"],["THE","FROG","JUMPS","OVER","A","ROCK"],["THE","CAT","SLEEPS","UNDER","THE","TABLE"],["WE","WALK","TO","SCHOOL","EVERY","MORNING"],["MY","SISTER","PLAYS","THE","DRUM","WELL"],
        ["MY","BROTHER","RIDES","HIS","BIKE","FAST"],["THE","BEE","FLIES","OVER","THE","FLOWERS"],["THE","FISH","SWIMS","AROUND","THE","ROCKS"],["THE","MOON","SHINES","ABOVE","THE","TREES"],["THE","CHILDREN","SING","A","HAPPY","SONG"],
        ["I","WEAR","MY","COAT","IN","WINTER"],["WE","EAT","WARM","SOUP","ON","RAINY","DAYS"],["THE","LION","WALKS","THROUGH","THE","GRASS"],["THE","RABBIT","HIDES","BEHIND","A","BUSH"],["THE","DUCK","SPLASHES","IN","THE","POND"],
        ["THE","BABY","SMILES","AT","THE","PUPPY"],["MY","FRIEND","BRINGS","A","BLUE","KITE"],["THE","GIRL","CARRIES","HER","LUNCH","BOX"],["THE","BOY","OPENS","THE","BIG","DOOR"],["WE","WATCH","CLOUDS","MOVE","ACROSS","SKY"]
      ],
      [
        ["THE","LION","IS","BIG","AND","STRONG"],["THE","SMALL","BIRD","CAN","FLY","HIGH"],["I","PACK","MY","BAG","BEFORE","SCHOOL","STARTS"],["WE","MAKE","A","SANDCASTLE","AT","THE","BEACH"],["THE","HAPPY","CHILDREN","PLAY","OUTSIDE","AFTER","SCHOOL"],
        ["MY","MOM","COOKS","DINNER","WHILE","I","READ"],["THE","DOG","WAITS","BY","THE","DOOR","QUIETLY"],["SHE","PUTS","ON","HER","BOOTS","BEFORE","RAIN"],["HE","SHARES","HIS","SNACK","WITH","A","FRIEND"],["THE","CAT","CHASES","A","BUTTERFLY","IN","THE","GARDEN"],
        ["WE","LOOK","FOR","SHELLS","BESIDE","THE","WATER"],["THE","FROG","SITS","ON","A","GREEN","LEAF"],["MY","BROTHER","HELPS","ME","BUILD","A","PUZZLE"],["THE","BEE","VISITS","EACH","FLOWER","FOR","NECTAR"],["THE","BIRD","MAKES","A","NEST","IN","SPRING"],
        ["I","CHOOSE","A","BOOK","FROM","THE","SHELF"],["THE","RAIN","STOPS","AND","A","RAINBOW","APPEARS"],["WE","CLEAN","OUR","ROOM","BEFORE","GUESTS","ARRIVE"],["THE","TURTLE","MOVES","SLOWLY","ACROSS","THE","PATH"],["MY","SISTER","SINGS","WHILE","SHE","DRAWS","PICTURES"],
        ["THE","BOY","THROWS","THE","BALL","OVER","THE","FENCE"],["THE","GIRL","FINDS","HER","LOST","RED","MITTEN"],["WE","PLANT","SEEDS","AND","WATER","THEM","DAILY"],["THE","MOON","LOOKS","BRIGHT","ABOVE","THE","HOUSES"],["I","FEEL","PROUD","WHEN","I","FINISH","READING"]
      ]
    ];
    const realLevel=clamp(level,1,5),sentences=tiers[realLevel-1];
    return repeatPool(sentences.map(tokens=>make("סדרו את המילים למשפט",tokens.join(" "),[],"",{skill:"משפטים",type:`בונים משפט — רמה ${realLevel}`,mode:"build",tokens:shuffle(tokens),joinWith:" ",word:true})));
  }

  function hebrewRecognition(kind,level){
    const realLevel=clamp(level,1,5);
    const active=hebrewWords.slice(0,realLevel===5?hebrewWords.length:clamp(6+realLevel*3,8,hebrewWords.length));
    const choiceCount=realLevel===1?2:realLevel===2?3:4;
    if(kind==="samePicture"){
      // Thirty clear pictures ensure a child does not see the same picture in
      // consecutive games. The final stage uses only nearby-category images
      // as distractors, so it is genuinely more demanding.
      const pictureGroups=[
        ["🐶","🐱","🐰","🦁","🐘","🐼"],
        ["🍎","🍌","🍐","🍓","🥕","🧀"],
        ["🌳","🌸","☀️","🌙","⭐","🌈"],
        ["🚗","🚲","🚂","✈️","🚜","🚢"],
        ["⚽","📕","🧸","🥁","🧩","💎"]
      ];
      const pictureItems=pictureGroups.flat();
      const stage=clamp(level,1,3);
      const optionCount=stage===1?2:stage===2?4:6;
      const similarPool=icon=>pictureGroups.find(group=>group.includes(icon))||pictureItems;
      return pictureItems.map(icon=>make("איזו תמונה זהה לתמונה הגדולה?",icon,options(icon,stage===3?similarPool(icon):pictureItems,optionCount),icon,{skill:"הבחנה חזותית",type:`תמונות זהות — רמה ${stage}`}));
    }
    if(kind==="hebrewLetter")return repeatPool(heAlphabet.slice(0,clamp(8+level*2,10,heAlphabet.length)).map(letter=>make(`מצאו את האות ${letter}`,letter,options(letter,heAlphabet),"",{skill:"אותיות",type:"זיהוי אות",word:true})));
    if(kind==="startsHebrew"){
      // The written-word stages deliberately include the former level-five
      // vocabulary, expanded to thirty clear words.  Pictures are removed in
      // those stages so they cannot reveal the answer.
      const startsHebrewItems=[
        ["🐶","כלב","כ"],["🐱","חתול","ח"],["🐟","דג","ד"],["🦁","אריה","א"],["🐘","פיל","פ"],
        ["🌳","עץ","ע"],["🌸","פרח","פ"],["🍎","תפוח","ת"],["🍌","בננה","ב"],["🥕","גזר","ג"],
        ["🏠","בית","ב"],["🚗","מכונית","מ"],["⚽","כדור","כ"],["📕","ספר","ס"],["☀️","שמש","ש"],
        ["🌙","ירח","י"],["🧀","גבינה","ג"],["🥁","תוף","ת"],["🧩","פאזל","פ"],["💎","יהלום","י"],
        ["🐰","ארנב","א"],["🐸","צפרדע","צ"],["🦊","שועל","ש"],["🐮","פרה","פ"],["🚌","אוטובוס","א"],
        ["🕯️","נר","נ"],["🪁","עפיפון","ע"],["🥚","ביצה","ב"],["👞","נעל","נ"],["🌈","קשת","ק"]
      ];
      const stage=clamp(level,1,4);
      const stageChoices=stage===1?2:stage===2?4:stage===3?4:6;
      const showPicture=stage<=2;
      return startsHebrewItems.map(([icon,word,letter])=>{
        const correct=showPicture?`${icon} ${word}`:word;
        const distractors=startsHebrewItems.filter(([, ,candidateLetter])=>candidateLetter!==letter).map(([candidateIcon,candidateWord])=>showPicture?`${candidateIcon} ${candidateWord}`:candidateWord);
        return make(`איזו מילה מתחילה באות ${letter}?`,correct,options(correct,distractors,stageChoices),showPicture?icon:"",{skill:"צליל ראשון",type:showPicture?"מתחיל באות — תמונה ומילה":"מתחיל באות — מילה כתובה",word:!showPicture});
      });
    }
    if(kind==="hebrewWordPicture"){
      // All stages use the same forty familiar pictures. Later stages are
      // harder because the wrong words belong to the same meaningful group.
      const pictureWords=[
        ["🐶","כלב","חיות"],["🐱","חתול","חיות"],["🦁","אריה","חיות"],["🐘","פיל","חיות"],["🐰","ארנב","חיות"],["🐸","צפרדע","חיות"],["🦊","שועל","חיות"],["🐮","פרה","חיות"],
        ["🍎","תפוח","מאכלים"],["🍌","בננה","מאכלים"],["🥕","גזר","מאכלים"],["🧀","גבינה","מאכלים"],["🍞","לחם","מאכלים"],["🍰","עוגה","מאכלים"],["🍦","גלידה","מאכלים"],["🍓","תות","מאכלים"],
        ["🌳","עץ","טבע"],["🌸","פרח","טבע"],["☀️","שמש","טבע"],["🌙","ירח","טבע"],["☁️","ענן","טבע"],["🌈","קשת","טבע"],["🍃","עלה","טבע"],["⭐","כוכב","טבע"],
        ["🏠","בית","חפצים"],["🚗","מכונית","חפצים"],["⚽","כדור","חפצים"],["📕","ספר","חפצים"],["🥁","תוף","חפצים"],["🧩","פאזל","חפצים"],["🔑","מפתח","חפצים"],["🧢","כובע","חפצים"],
        ["🛏️","מיטה","בית"],["🪑","כיסא","בית"],["🧸","דובי","בית"],["🪥","מברשת","בית"],["🕯️","נר","בית"],["🪁","עפיפון","בית"],["🎁","מתנה","בית"],["⌚","שעון","בית"]
      ];
      const stage=clamp(level,1,3);
      const optionCount=stage===1?2:stage===2?4:6;
      return pictureWords.map(([icon,word,group])=>{
        const distractors=stage===3
          ? pictureWords.filter(([,candidateWord,candidateGroup])=>candidateGroup===group&&candidateWord!==word).map(([,candidateWord])=>candidateWord)
          : pictureWords.filter(([,candidateWord])=>candidateWord!==word).map(([,candidateWord])=>candidateWord);
        return make("איזו מילה מתאימה לתמונה?",word,options(word,distractors,optionCount),icon,{skill:"מילים",type:stage===3?"מילה ותמונה — הסחות מאותה קבוצה":"מילה ותמונה"});
      });
    }
    if(kind==="missingHebrew"){
      const shortWords=["כלב","חתול","דג","סוס","בית","ספר","כדור","שמש","ירח","פרח","תפוח","גזר","בננה","כובע","נעל","דובי","כיסא","עץ","יד","פה","אף","אוזן","מים","לחם","חלב","עוגה","כתר","דלת","חלון","ארון"];
      const longWords=["מכונית","מטרייה","ארנבת","פרפרים","גלידה","גבינה","מזוודה","משקפיים","סנדוויץ","מלפפון","עגבנייה","כדורגל","מחברת","ספרייה","שמיכה","חללית","ספינה","משאית","מצלמה","מברשת","כפפות","חולצה","מכנסיים","טלפון","שולחן","מגלשה","גלגלים","צעצועים","ארנבונים","ממתקים"];
      const stage=clamp(level,1,3);
      if(stage<3){
        const words=stage===1?shortWords:longWords;
        return words.map((word,index)=>{
          const pos=stage===1?(index%2===0?word.length-1:1):(1+(index%(word.length-2)));
          const correct=word[pos],masked=word.slice(0,pos)+"_"+word.slice(pos+1);
          return make("איזו אות חסרה במילה?",correct,options(correct,heAlphabet),masked,{skill:"איות",type:stage===1?"אות חסרה — מילה קצרה":"אות חסרה — מילה ארוכה",word:true});
        });
      }
      const pairs=longWords.map((word,index)=>{
        const first=1+(index%(word.length-3)),second=word.length-2;
        const positions=[Math.min(first,second),Math.max(first,second)];
        const correct=positions.map(pos=>word[pos]).join("");
        const masked=[...word].map((letter,pos)=>positions.includes(pos)?"_":letter).join("");
        return {word,correct,masked};
      });
      const pairOptions=[...new Set(pairs.map(item=>item.correct))];
      return pairs.map(({correct,masked})=>make("אילו שתי אותיות חסרות במילה?",correct,options(correct,pairOptions,4),masked,{skill:"איות",type:"שתי אותיות חסרות",word:true}));
    }
    if(kind==="syllables"){const syllableWords=[
      ["🐶","כלב","כֶּ · לֶב"],["🐱","חתול","חָ · תוּל"],["🦁","אריה","אַר · יֵה"],
      ["🌸","פרח","פֶּ · רַח"],["🍌","בננה","בָּ · נָ · נָה"],["🥕","גזר","גֶּ · זֶר"],["🏠","בית","בַּ · יִת"],
      ["⚽","כדור","כַּ · דּוּר"],["📕","ספר","סֵ · פֶר"],["☀️","שמש","שֶׁ · מֶש"],["🌙","ירח","יָ · רֵ · חַ"],
      ["🧀","גבינה","גְּ · בִי · נָה"],["🧩","פאזל","פָּא · זֶל"]
    ],activeSyllables=syllableWords.slice(0,clamp(6+level,8,syllableWords.length));return repeatPool(activeSyllables.map(([icon,word,correct])=>make(`איך מחלקים את המילה ${word} להברות?`,correct,options(correct,activeSyllables.filter(x=>x[1]!==word).map(x=>x[2])),icon,{skill:"הברות",type:"מחלקים מילה",word:true})));};
    return [];
  }
  function alphabetOrder(level){
    // Every exercise begins at the next Hebrew letter. The final two stages
    // ask for the same consecutive letters in reverse alphabetical order.
    const stage=clamp(level,1,5);
    const config=[
      {length:3,lastStart:"ר",reverse:false},
      {length:5,lastStart:"צ",reverse:false},
      {length:7,lastStart:"ע",reverse:false},
      {length:4,lastStart:"ק",reverse:true},
      {length:6,lastStart:"פ",reverse:true}
    ][stage-1];
    const lastStart=heAlphabet.indexOf(config.lastStart);
    return Array.from({length:lastStart+1},(_,start)=>{
      const ascending=heAlphabet.slice(start,start+config.length);
      const ordered=config.reverse?[...ascending].reverse():ascending;
      const correct=ordered.join("");
      return make(config.reverse?"סדרו את האותיות מהסוף להתחלה":"סדרו את האותיות לפי האלף־בית",correct,[],"",{skill:"סדר האותיות",type:`${config.reverse?"סדר הפוך":"אלף־בית"} — ${config.length} אותיות`,mode:"build",tokens:shuffle(ordered),joinWith:"",word:true});
    });
  }
  const readingStories = [
    {text:"נועה לקחה מטרייה ונעלה מגפיים.",inference:"ירד גשם",inferenceOptions:["ירד גשם","נועה יצאה לשחות","נועה שכחה את התיק","היה חם מאוד"],check:"כנראה ירד גשם",falseCheck:"כנראה היה חם מאוד",info:"נועה",title:"יום גשום"},
    {text:"אורי זרע את הזרע, השקה אותו ולאחר כמה ימים הופיע נבט.",inference:"הזרע קיבל מים",inferenceOptions:["הזרע קיבל מים","אורי שכח את הזרע","הזרע היה צעצוע","אורי קטף פרחים"],check:"הזרע קיבל מים",falseCheck:"אורי שכח להשקות את הזרע",info:"אורי",title:"הזרע שצמח"},
    {text:"מיה מצאה גור קטן ורועד והביאה לו שמיכה.",inference:"לגור היה קר",inferenceOptions:["לגור היה קר","הגור רצה לרוץ","הגור חיפש אוכל","מיה יצאה לטיול"],check:"כנראה היה לגור קר",falseCheck:"מיה השאירה את הגור בלי עזרה",info:"מיה",title:"עוזרים לגור"},
    {text:"דן סיים לאכול, צחצח שיניים ונכנס למיטה.",inference:"הגיע זמן השינה",inferenceOptions:["הגיע זמן השינה","דן עומד לצאת לבית הספר","דן מתכונן לארוחת בוקר","דן הולך לשחק בחצר"],check:"הגיע זמן השינה",falseCheck:"דן התכונן לצאת לבית הספר",info:"דן",title:"לפני השינה"},
    {text:"תמר ארזה בקבוק מים, כובע ומפה ויצאה עם משפחתה.",inference:"המשפחה יצאה לטיול",inferenceOptions:["המשפחה יצאה לטיול","תמר הייתה צמאה","תמר השתעממה בבית","המשפחה של תמר מגובשת"],check:"המשפחה יצאה לטיול",falseCheck:"המשפחה נשארה בבית",info:"תמר",title:"יוצאים לטיול"},
    {text:"רון שמע רעם, ראה ברק וסגר את החלון.",inference:"הייתה סערה",inferenceOptions:["הייתה סערה","רון הדליק אור","רון רצה לצאת לטיול","היה יום בהיר"],check:"בחוץ הייתה סערה",falseCheck:"בחוץ היה יום בהיר ושמשי",info:"רון",title:"הסערה"},
    {text:"יעל אפתה עוגה והניחה עליה שבעה נרות.",inference:"למישהו היה יום הולדת",inferenceOptions:["למישהו היה יום הולדת","יעל הכינה ארוחת ערב","יעל פתחה מאפייה","מישהו איבד שבעה נרות"],check:"כנראה חגגו יום הולדת",falseCheck:"יעל הכינה עוגה לארוחת ערב רגילה",info:"שבעה",title:"עוגת יום הולדת"},
    {text:"גיל ראה שהעציץ יבש והשקה אותו.",inference:"הצמח היה זקוק למים",inferenceOptions:["הצמח היה זקוק למים","הצמח קיבל יותר מדי מים","גיל רצה לקטוף את הצמח","העציץ היה חדש מאוד"],check:"הצמח היה זקוק למים",falseCheck:"הצמח קיבל יותר מדי מים",info:"העציץ",title:"משקים את הצמח"}
  ];
  // Every incorrect option is also a plausible title for the same story.
  // This makes the later levels require reading the whole story, rather than
  // dismissing obviously unrelated answers.
  const storyTitleChoices = [
    ["יום גשום","בוקר בבית","בוחרים בגדים","טיול ביום שמש"],
    ["הזרע שצמח","טיפול בעציץ","פרחים בגינה","אורי והגינה"],
    ["עוזרים לגור","שמיכה חמה","טיול עם מיה","גור קטן בחצר"],
    ["לפני השינה","ארוחת ערב","ערב בבית","חדר הילדים"],
    ["יוצאים לטיול","אריזה לטיול","יום בחוץ","משפחה בדרך"],
    ["הסערה","ברק בשמיים","חלון פתוח","ערב בבית"],
    ["עוגת יום הולדת","אופים עוגה","שבעה נרות","חגיגה בבית"],
    ["משקים את הצמח","עציץ יבש","טיפול בגינה","גיל והצמחים"]
  ];
  function inferenceQuestions(level){
    // Every entry is a separate situation.  Do not make extra questions by only changing a name.
    const tiers=[
      [
        ["גיל ראה שהעציץ יבש והשקה אותו. מה אפשר להבין?","הצמח קיבל מים",["מישהו חגג יום הולדת","הגיע זמן השינה","היה קר בחוץ"]],["מיה לבשה מעיל, צעיף וכפפות. מה אפשר להבין?","בחוץ היה קר",["בחוץ היה חם","מיה הכינה ארוחה","מיה הלכה לים"]],["אורי צחצח שיניים ונכנס למיטה. מה אפשר להבין?","הגיע זמן השינה",["הגיע זמן ארוחת הבוקר","הגיע זמן הטיול","הגיע זמן המשחק בחצר"]],["תמר פתחה ספר והתיישבה בפינה שקטה. מה אפשר להבין?","תמר רצתה לקרוא",["תמר רצתה לרוץ","תמר רצתה לצייר","תמר רצתה לאכול"]],["יואב ראה שלוליות בדרך ונזהר מהן. מה אפשר להבין?","ירד גשם קודם לכן",["ירד שלג","היה יום יבש","היה חם מאוד"]],["נועה שמעה תינוק בוכה והביאה לו מוצץ. מה אפשר להבין?","נועה ניסתה להרגיע את התינוק",["נועה חיפשה צעצוע","נועה התכוננה לצאת","נועה רצתה לצייר"]],["אדם מצא את החתול מתחת למיטה. מה אפשר להבין?","החתול הסתתר",["החתול יצא לטיול","החתול אכל ארוחה","החתול חיפש כדור"]],["יעל ראתה ציפור פצועה וקראה למבוגר. מה אפשר להבין?","יעל רצתה לעזור לציפור",["יעל רצתה לצלם ציפור","יעל רצתה לשחק","יעל רצתה לאכול"]],["דן כיבה את האור וסגר את הווילון. מה אפשר להבין?","החדר נעשה חשוך",["החדר נעשה חם","החדר התמלא מים","החדר נעשה רועש"]],["רותם הוציא מטרייה כשהתחילו לרדת טיפות. מה אפשר להבין?","התחיל לרדת גשם",["התחיל לרדת שלג","התחיל יום חם","התחילה סערת חול"]],
        ["שירה מילאה כוס ריקה במים. מה אפשר להבין?","הכוס הייתה ריקה",["הכוס נשברה","הכוס הייתה מלאה","הכוס הייתה חמה"]],["עומר שם קסדה ורכב על אופניים. מה אפשר להבין?","עומר שמר על ראשו",["עומר הלך לישון","עומר הכין אוכל","עומר צייר תמונה"]],["רוני מצאה עיפרון על הרצפה והחזירה אותו לקלמר. מה אפשר להבין?","רוני סידרה את העיפרון",["רוני איבדה נעל","רוני שתתה מים","רוני פתחה חלון"]],["טל הריח ריח של עוגה מהתנור. מה אפשר להבין?","אופים עוגה",["שוטפים מכונית","משקים גינה","מתכוננים לשינה"]],["ליאור פתח את הברז ושטף ידיים בסבון. מה אפשר להבין?","ליאור ניקה את הידיים",["ליאור צבע את הידיים","ליאור הכין שיעורים","ליאור הלך לים"]],["אייל סגר את המקרר אחרי שהוציא חלב. מה אפשר להבין?","אייל לקח חלב",["אייל הכין מיטה","אייל מצא צעצוע","אייל סגר חלון"]],["מאיה הרימה צעצועים מהרצפה והניחה אותם בקופסה. מה אפשר להבין?","מאיה סידרה צעצועים",["מאיה שתלה פרחים","מאיה קראה ספר","מאיה ציירה מפה"]],["רז שמע את הצלצול ונכנס לכיתה. מה אפשר להבין?","התחיל שיעור",["התחילה ארוחת ערב","התחיל טיול","התחילה שינה"]],["אורית פתחה את ארון הבגדים וחיפשה חולצה. מה אפשר להבין?","אורית בחרה בגד",["אורית בחרה ספר","אורית חיפשה חתול","אורית הכינה אוכל"]],["ניב השקה את הכלב בקערה. מה אפשר להבין?","הכלב קיבל מים",["הכלב קיבל ספר","הכלב קיבל מיטה","הכלב קיבל צבעים"]],
        ["עדי סגרה את הדלת כי נשמע רעש חזק במסדרון. מה אפשר להבין?","עדי רצתה שקט",["עדי רצתה לצאת לטיול","עדי רצתה לאפות","עדי רצתה לשחות"]],["עמית פתח מפה ובדק היכן נמצא הפארק. מה אפשר להבין?","עמית חיפש את הדרך לפארק",["עמית חיפש מתכון","עמית חיפש צעצוע","עמית חיפש מיטה"]],["אילן ראה שהשעון מראה שבע וקם מהמיטה. מה אפשר להבין?","התחיל הבוקר",["התחיל הלילה","התחיל החורף","התחיל טיול"]],["רוני עטפה מתנה בסרט צבעוני. מה אפשר להבין?","רוני הכינה מתנה",["רוני הכינה מרק","רוני הכינה שיעורים","רוני הכינה גינה"]],["עדי האכילה את הדג באקווריום. מה אפשר להבין?","הדג קיבל אוכל",["הדג יצא לטיול","הדג קרא ספר","הדג לבש מעיל"]],["סהר הוציא מגבת אחרי שהתקלח. מה אפשר להבין?","סהר התנגב",["סהר הלך לבית הספר","סהר שתל עץ","סהר צייר תמונה"]],["שקד ראה שהחלב נשפך והביא סמרטוט. מה אפשר להבין?","שקד ניקה את החלב",["שקד שתה מיץ","שקד אפה לחם","שקד ישן"]],["גיא פתח חלון כי היה חם בחדר. מה אפשר להבין?","גיא רצה להכניס אוויר",["גיא רצה להחשיך","גיא רצה לשטוף את החלון","גיא רצה לצאת לים"]],["אלה הניחה צלחת לפני אחותה. מה אפשר להבין?","אלה התכוננה לאכול",["אלה התכוננה לרוץ","אלה התכוננה לישון","אלה התכוננה לצייר"]],["בר סגר את הספרייה אחרי שלקח ספר. מה אפשר להבין?","בר בחר ספר לקריאה",["בר בחר נעליים","בר בחר ארוחה","בר בחר משחק כדור"]]
      ],
      [
        ["נועה לקחה מטרייה, לבשה מגפיים והביטה בעננים הכהים. מה אפשר להבין?","כנראה עומד לרדת גשם",["נועה הולכת לשחות בים","נועה מתכוננת ליום חם","נועה בוחרת בגדים למסיבה"]],["תום הניח קופסת אוכל בתיק, סידר מחברות והדליק שעון מעורר. מה אפשר להבין?","תום מתכונן ליום לימודים",["תום מתכנן פיקניק","תום מכין ארוחת ערב","תום חוזר מבית הספר"]],["שני לקחה דלי, את חפירה וזרעים אל החצר. מה אפשר להבין?","שני מתכוננת לשתול",["שני מתכוננת לטאטא","שני מתכוננת לשטוף את החצר","שני מתכוננת לשחק בכדור"]],["איתי לבש סינר, ערבב קמח וביצים והכניס תבנית לתנור. מה אפשר להבין?","איתי אופה משהו",["איתי שוטף כלים","איתי מסדר את המטבח","איתי מכין כריך"]],["דנה ארזה בקבוק מים, כובע ומפה קטנה. מה אפשר להבין?","דנה מתכוננת לטיול",["דנה מתכוננת לשינה","דנה מתכוננת לשיעור ציור","דנה מתכוננת לארוחת ערב"]],["יובל שם אוכל בקערה, מילא מים ופתח לכלב את הדלת. מה אפשר להבין?","יובל מטפל בכלב",["יובל מחפש את הכלב","יובל מלמד את הכלב לקרוא","יובל מתכונן לרחוץ את הכלב"]],["נעמי אספה עלים צבעוניים מהאדמה והכניסה אותם לאלבום. מה אפשר להבין?","נעמי אוספת עלים",["נעמי שותלת עלים","נעמי מנקה את האלבום","נעמי מציירת עץ"]],["רועי לבש בגד ים, לקח מגבת ושם קרם הגנה בתיק. מה אפשר להבין?","רועי מתכונן לשחייה",["רועי מתכונן ליום גשום","רועי מתכונן לנסיעה באוטובוס","רועי מתכונן לקרוא ספר"]],["הילה ניקתה שולחן, הניחה צלחות והזמינה את המשפחה. מה אפשר להבין?","הילה מכינה ארוחה",["הילה מכינה שיעורים","הילה מכינה משחק","הילה מכינה טיול"]],["עידו הוציא פנס, סוללות ומפה לפני שיצא בערב. מה אפשר להבין?","עידו מתכונן לצאת בחושך",["עידו מתכונן ליום שמשי","עידו מתכונן לאפייה","עידו מתכונן לשיעור ספורט"]],
        ["ניצן פתחה את המקרר, הוציאה ירקות ושטפה אותם בכיור. מה אפשר להבין?","ניצן מתחילה להכין סלט",["ניצן מתחילה לצייר","ניצן מתחילה לישון","ניצן מתחילה לרוץ"]],["מתן לקח מחבט, כדור ונעליים נוחות למגרש. מה אפשר להבין?","מתן מתכונן למשחק ספורט",["מתן מתכונן לקריאה","מתן מתכונן לאפייה","מתן מתכונן לשינה"]],["תהל הוציאה צבעים, דפים ומכחולים והניחה סינר. מה אפשר להבין?","תהל מתכוננת לציור",["תהל מתכוננת לטיול","תהל מתכוננת לארוחה","תהל מתכוננת לשחייה"]],["אופק לקח את הכלב לרצועה, שקית ומים. מה אפשר להבין?","אופק מתכונן לטיול עם הכלב",["אופק מתכונן להאכיל את הכלב","אופק מתכונן לרחוץ את הכלב","אופק מתכונן לישון עם הכלב"]],["רוני כיסה את השולחן בעיתונים, לבש כפפות ופתח דבק. מה אפשר להבין?","רוני מתכונן לעבוד ביצירה",["רוני מתכונן לבשל","רוני מתכונן לנקות חלון","רוני מתכונן לשחק כדורגל"]],["אלה בדקה את טמפרטורת התנור, מדדה קמח והכינה תבנית. מה אפשר להבין?","אלה מכינה מאפה",["אלה מכינה טיול","אלה מכינה שיעורים","אלה מכינה מיטה"]],["נמרוד לקח כרטיסייה, אוזניות וספר וביקש שקט. מה אפשר להבין?","נמרוד מתכונן ללמוד",["נמרוד מתכונן לשחות","נמרוד מתכונן לשתול","נמרוד מתכונן לרכוב"]],["שחר לבשה פיג'מה, הניחה ספר ליד המיטה וכיבתה את האור. מה אפשר להבין?","שחר מתכוננת לישון",["שחר מתכוננת לבית הספר","שחר מתכוננת לטיול","שחר מתכוננת לבישול"]],["אריאל הוציא מטבעות, רשימת קניות ותיק בד. מה אפשר להבין?","אריאל מתכונן לקניות",["אריאל מתכונן לספורט","אריאל מתכונן לשינה","אריאל מתכונן לציור"]],["מיכל לקחה מצלמה, משקפת ומחברת קטנה. מה אפשר להבין?","מיכל מתכוננת לצפות בטבע",["מיכל מתכוננת לאפות","מיכל מתכוננת להתקלח","מיכל מתכוננת לקרוא"]],
        ["זוהר שם חולצה מלוכלכת בסל, הוסיף אבקה והפעיל מכונה. מה אפשר להבין?","זוהר מכבס בגדים",["זוהר תופר בגדים","זוהר קונה בגדים","זוהר מודד בגדים"]],["ניב בדק לחץ אוויר, הביא משאבה וניגש לאופניים. מה אפשר להבין?","ניב מתקן את האופניים",["ניב מצייר אופניים","ניב מוכר אופניים","ניב שוטף אופניים"]],["אמה הוציאה קערית, מזון ומים ליד הכלוב. מה אפשר להבין?","אמה מטפלת בחיית מחמד",["אמה בונה כלוב","אמה מחפשת חיה","אמה מציירת חיה"]],["גפן הניח מזוודה ליד הדלת, קיפל בגדים והביא דרכון. מה אפשר להבין?","גפן מתכונן לנסיעה",["גפן מתכונן לארוחה","גפן מתכונן לגינה","גפן מתכונן לשיעור"]],["איילה שמה פלסטר, חיטאה פצע וקראה לאמא. מה אפשר להבין?","איילה טיפלה בפציעה",["איילה הכינה יצירה","איילה ניקתה חדר","איילה ארזה תיק"]],["ניר סידר כריות, פרס שמיכה והניח ספר על הספה. מה אפשר להבין?","ניר הכין מקום נוח לקריאה",["ניר הכין מקום לאוכל","ניר הכין מקום לריצה","ניר הכין מקום לציור"]],["אורי מילא דלי, לקח סבון וספוג ליד המכונית. מה אפשר להבין?","אורי מתכונן לשטוף מכונית",["אורי מתכונן לנסוע במכונית","אורי מתכונן לתקן מכונית","אורי מתכונן לקנות מכונית"]],["עופרי הניחה נר, ברכה ומתנה על השולחן. מה אפשר להבין?","עופרי מכינה חגיגה",["עופרי מכינה שיעור","עופרי מכינה טיול","עופרי מכינה אימון"]],["גיא לקח מברשת שיניים, משחה וכוס קטנה. מה אפשר להבין?","גיא מתכונן לצחצח שיניים",["גיא מתכונן לאכול","גיא מתכונן לשתול","גיא מתכונן לצייר"]],["ליה סגרה תריסים, הפעילה מנורה וישבה ליד שולחן. מה אפשר להבין?","ליה מתכוננת לעבוד בתוך הבית",["ליה מתכוננת לשחות","ליה מתכוננת לצאת לגינה","ליה מתכוננת לרכוב"]]
      ],
      [
        ["גיל חזר מהגינה, שטף ידיים והניח כלי גינון ליד הדלת. מה אפשר להבין?","גיל עבד בגינה",["גיל מתכנן לעבוד בגינה מחר","גיל ניקה את הגינה","גיל בדק צמחים"]],["מיה מצאה את הכלב ליד שקית מזון פתוחה וקערה מלאה בפירורים. מה אפשר להבין?","הכלב כנראה אכל מהמזון שבשקית",["מיה מילאה את הקערה באוכל","הכלב הפיל את השקית","מישהו השאיר את השקית פתוחה"]],["אורי מצא דף, צבעים ומספריים. על הדף הייתה ברכה לאמא. מה אפשר להבין?","אורי הכין ברכה לאמא",["אורי קישט דף לבית הספר","אורי גזר תמונה מספר","אורי חיפש צבעים"]],["תמר לבשה חולצה ארוכה, סגרה חלון וביקשה שמיכה. מה אפשר להבין?","לתמר היה קר",["תמר מתכוננת לשינה","תמר רוצה לשבת ליד החלון","תמר עומדת לצאת"]],["נועה מצאה כדור בפינת החצר אחרי שחיפשה אותו זמן רב. מה אפשר להבין?","נועה איבדה את הכדור קודם",["נועה זרקה את הכדור עכשיו","נועה קנתה כדור חדש","נועה תשחק בכדור מחר"]],["דן ראה קופסת עוגיות ריקה ופירורים על השולחן. מה אפשר להבין?","מישהו אכל עוגיות",["מישהו אפה עוגיות","מישהו קנה עוגיות","מישהו סידר את הקופסה"]],["יעל ראתה גלגל חסר אוויר והביאה משאבה. מה אפשר להבין?","יעל ניסתה למלא אוויר בגלגל",["יעל ניסתה לשטוף רכב","יעל ניסתה להחנות רכב","יעל ניסתה לקשט רכב"]],["רון שמע רעש בחדר, מצא משחקים על הרצפה והחזיר אותם לקופסה. מה אפשר להבין?","רון סידר את המשחקים",["רון בחר משחק חדש","רון חיפש משחק אבוד","רון הכין משחק לחברים"]],["נור קרא מתכון, הוציא ירקות ושטף אותם בכיור. מה אפשר להבין?","נור התחיל להכין ארוחה",["נור סיים לאכול","נור מתכנן לגדל ירקות","נור מחפש ירקות למכירה"]],["עמית פתח חלון, הריח ריח שרוף וראה עשן בחוץ. מה אפשר להבין?","משהו כנראה נשרף בקרבת מקום",["מישהו בישל בבית","התחיל לרדת גשם","היה יום קר"]],
        ["שקד ראתה שלולית ליד הדלת ומגבות רטובות על הכיסא. מה אפשר להבין?","מישהו נכנס הביתה כשהוא רטוב",["מישהו שטף את הרצפה","מישהו שתה מים","מישהו פתח את הדלת"]],["לוטם שמע צלצול בדלת, ראה תיק של שליח וקיבל חבילה. מה אפשר להבין?","הגיעה חבילה לבית",["לוטם שלח חבילה","לוטם ארז חבילה","לוטם חיפש חבילה"]],["תום ראה שהשעון עצר, החליף סוללה והשעון חזר לפעול. מה אפשר להבין?","הסוללה הישנה נגמרה",["השעון היה חדש","השעון נפל","תום קנה שעון"]],["אלה מצאה דף מקומט ליד הפח והחזירה אותו למחברת. מה אפשר להבין?","אלה רצתה לשמור את הדף",["אלה רצתה לזרוק מחברת","אלה רצתה לצייר על הפח","אלה רצתה לנקות את השולחן"]],["אדם שמע ציוץ חזק, הסתכל למעלה וראה קן בעץ. מה אפשר להבין?","יש ציפורים בקן",["הקן נפל מהעץ","אדם בנה קן","העץ היה חדש"]],["מיכל פתחה ארון, מצאה קמח חסר והלכה לחנות. מה אפשר להבין?","מיכל צריכה לקנות קמח",["מיכל צריכה לאפות מיד","מיכל צריכה לנקות ארון","מיכל צריכה לגדל חיטה"]],["תהל קראה הודעה על מבחן, פתחה מחברת והתחילה לסכם. מה אפשר להבין?","תהל מתכוננת למבחן",["תהל סיימה מבחן","תהל מחכה למורה","תהל בוחרת מחברת חדשה"]],["אלון ראה עלים נופלים, אסף אותם לערימה והביא מגרפה. מה אפשר להבין?","אלון מסדר את החצר",["אלון שותל עץ","אלון קוטף פירות","אלון בונה גדר"]],["רוני החזירה ספר לספרייה, בחרה ספר אחר וישבה לקרוא. מה אפשר להבין?","רוני החליפה ספר לקריאה",["רוני קנתה ספר","רוני כתבה ספר","רוני קישטה ספר"]],["אורי פתח את התריס וראה שהרחוב לבן. מה אפשר להבין?","כנראה ירד שלג",["כנראה היה חם","כנראה התחיל קיץ","כנראה הייתה רוח בלבד"]],
        ["מיה ראתה שהכדור של אחיה נפל למים והביאה מגבת. מה אפשר להבין?","מיה ניסתה לייבש את הכדור",["מיה ניסתה לנפח כדור","מיה ניסתה לקנות כדור","מיה ניסתה לצבוע כדור"]],["גיל מצא פרח שמוט, נגע באדמה היבשה ומילא משפך. מה אפשר להבין?","גיל חושב שהצמח צריך מים",["גיל חושב שהצמח צריך אור","גיל חושב שהצמח צריך עציץ חדש","גיל חושב שהצמח צריך דשן"]],["נועה ראתה שהחתול מיילל ליד קערה ריקה והביאה מזון. מה אפשר להבין?","נועה חושבת שהחתול רעב",["נועה חושבת שהחתול צמא","נועה חושבת שהחתול רוצה לשחק","נועה חושבת שהחתול עייף"]],["דן מצא נעל אחת ליד הדלת וחיפש מתחת לספה. מה אפשר להבין?","דן מחפש את הנעל השנייה",["דן מחפש גרב","דן מחפש מעיל","דן מחפש תיק"]],["יובל ראה שהחלון פתוח והדפים עפו מהרצפה. מה אפשר להבין?","נכנסה רוח לחדר",["נכנס גשם לחדר","נכנס אור לחדר","נכנס עשן לחדר"]],["רומי מצאה כתם על החולצה לפני המסיבה ובחרה חולצה אחרת. מה אפשר להבין?","רומי לא רצתה ללבוש חולצה מוכתמת",["רומי לא רצתה ללבוש חולצה חמה","רומי לא רצתה ללבוש חולצה חדשה","רומי לא רצתה ללבוש חולצה קצרה"]],["ניב שמע רעש מהמכונה וראה שהכביסה עדיין רטובה. מה אפשר להבין?","המכונה עדיין לא סיימה",["המכונה התחילה עכשיו","המכונה התקלקלה בוודאות","המכונה ריקה"]],["איילה ראתה אור דולק במרפסת והניחה שם קערת מים. מה אפשר להבין?","איילה מצפה שמישהו או חיה יגיעו למרפסת",["איילה מנקה את המרפסת","איילה בודקת את הנורה","איילה מחפשת כיסא"]],["עומר קרא את שלט האזהרה, לבש קסדה וחיכה למדריך. מה אפשר להבין?","עומר עומד להשתתף בפעילות שדורשת זהירות",["עומר עומד ללכת לישון","עומר עומד להכין אוכל","עומר עומד לצייר"]],["ליה ראתה שהטלפון לא נדלק, חיברה אותו לחשמל וחיכתה. מה אפשר להבין?","ליה חושבת שהסוללה התרוקנה",["ליה חושבת שהטלפון נרטב","ליה חושבת שהטלפון מצלצל","ליה חושבת שהטלפון חדש"]]
      ],
      [
        ["אבא ביקש מגיל להכניס כביסה מהחבל. גיל ראה שהשמיים מתקדרים, אסף במהירות את הבגדים והכניס אותם הביתה. מה אפשר להבין?","גיל חשב שגשם עלול להתחיל",["גיל חשב שהגשם כבר ייבש את הבגדים","גיל רצה להשאיר בגדים בגשם","גיל חשב שהגשם יפסיק מיד"]],["בבית הספר הודיעו שמחר יתקיים טיול. בערב מיה ארזה בקבוק מים, כובע, כריך ומפה קטנה. מה אפשר להבין?","מיה מתכוננת לטיול של בית הספר",["מיה בודקת מה צריך לטיול","מיה מתכוננת לטיול משפחתי","מיה מסדרת תיק אחרי טיול"]],["אורי פתח מטרייה, הלך בזהירות על מדרכה רטובה וניסה לא לדרוך בשלוליות. מה אפשר להבין?","ירד גשם או שעדיין יורד גשם",["אורי מחפש מחסה מהגשם","אורי חושש שהנעליים יירטבו","אורי רוצה לשחק בשלוליות"]],["תמר שאלה באיזו שעה יוצאים, בדקה שהנעליים ליד הדלת והניחה בתיק בקבוק מים. מה אפשר להבין?","תמר מתכוננת לצאת לטיול",["תמר בודקת אם הטיול התחיל","תמר מתכוננת לחזור מטיול","תמר מחכה לאיסוף לטיול"]],["אחרי תחזית על גשם, נועה סגרה חלון והניחה מטרייה ליד הדלת. מה אפשר להבין?","נועה מתכוננת לגשם",["נועה מחכה שהגשם יסתיים","נועה רוצה לשחק בגשם","נועה חושבת שיהיה חם"]],["המורה אמרה להביא לטיול כובע ומים. דן הכין גם כריך ובדק שהתרמיל סגור. מה אפשר להבין?","דן מוכן לטיול",["דן מתכנן להישאר בכיתה","דן חזר מטיול","דן מכין ארוחה למשפחה"]],["יעל שמעה ברק ורעם, ניתקה מחשב מהחשמל והתרחקה מהחלון. מה אפשר להבין?","בחוץ יש סערה",["בחוץ מתחיל יום שמשי","בחוץ יש רוח קלה בלבד","בחוץ כבר הפסיק הגשם"]],["לפני הטיול רון בדק מסלול במפה, מילא בקבוק ושאל אם צריך מעיל. מה אפשר להבין?","רון מתכנן מה לקחת לטיול",["רון מחפש דרך הביתה מטיול","רון מסכם טיול שהסתיים","רון בודק אם לבטל טיול"]],["מיה ראתה שהגשם התחזק, התקשרה לאחיה וביקשה מטרייה לתחנה. מה אפשר להבין?","מיה רוצה להישאר יבשה בגשם",["מיה רוצה לטייל בגשם","מיה רוצה למדוד גשם","מיה רוצה לשטוף מטרייה"]],["ביום הטיול אורי לבש נעליים נוחות, לקח חטיף והצטרף לקבוצה ליד האוטובוס. מה אפשר להבין?","אורי עומד לצאת לטיול",["אורי חוזר מטיול","אורי מחכה לארוחה","אורי מתכונן לשיעור"]],
        ["לפני מסיבת יום הולדת תמר ניפחה בלונים, סידרה כיסאות והניחה צלחות על השולחן. מה אפשר להבין?","תמר מכינה את מקום המסיבה",["תמר בוחרת מתנה למסיבה","תמר מתכננת את המשחקים למסיבה","תמר מחכה שהאורחים ילכו"]],["גיל מצא מפתח ליד הדלת, בדק אם החלון סגור והתקשר לאמא. מה אפשר להבין?","גיל נזהר לפני שנכנס הביתה",["גיל מחפש מפתח נוסף","גיל חושב שהמפתח נשבר","גיל רוצה להחליף דלת"]],["בשיעור מדעים נועה לבשה חלוק, שמה משקפי מגן ובדקה את ההוראות. מה אפשר להבין?","נועה מתכוננת לניסוי",["נועה מתכוננת לנקות את המעבדה","נועה מתכוננת לצייר במעבדה","נועה מתכוננת לאכול במעבדה"]],["אחרי שהכלב ברח מהשער, דן קרא בשמו, לקח רצועה וחיפש ברחוב. מה אפשר להבין?","דן מחפש את הכלב",["דן מתכנן לטייל עם הכלב","דן מתכנן לאמן את הכלב","דן מתכנן לרחוץ את הכלב"]],["לפני השינה יעל בדקה שהדלת נעולה, כיבתה את האור והניחה מים ליד המיטה. מה אפשר להבין?","יעל מתכוננת ללילה",["יעל מתכוננת לבוקר","יעל מתכוננת לארוחת ערב","יעל מתכוננת לטיול"]],["בבוקר הטיול רון שמע שהאוטובוס מאחר, ישב ליד התיק ובדק שוב את השעה. מה אפשר להבין?","רון מחכה לצאת לטיול",["רון רוצה לבטל את הטיול","רון כבר חזר מהטיול","רון איבד את התיק בטיול"]],["לאחר שראתה עשן מהמחבת, מיה כיבתה את הכיריים וקראה למבוגר. מה אפשר להבין?","מיה חשבה שיש סכנה במטבח",["מיה חשבה שהאוכל מוכן","מיה חשבה שהמטבח נקי","מיה חשבה שצריך לערוך שולחן"]],["אורי ראה שהדשא רטוב, השמיים אפורים והחתול נכנס מהר הביתה. מה אפשר להבין?","כנראה ירד גשם בחוץ",["כנראה השמש יצאה","כנראה היה חם מאוד","כנראה התחיל שלג"]],["תמר קראה את ההזמנה, בחרה בגדים חגיגיים וביקשה מאבא להסיע אותה. מה אפשר להבין?","תמר מתכוננת לאירוע",["תמר מכינה אירוע בבית","תמר מבטלת אירוע","תמר חוזרת מאירוע"]],["בדרך לגן נועה עצרה, הרימה צעיף מהרצפה ושאלה אם הוא שייך למישהו. מה אפשר להבין?","נועה מנסה להחזיר צעיף שאבד",["נועה רוצה לקנות צעיף","נועה רוצה ללבוש צעיף","נועה רוצה לכבס צעיף"]],
        ["כשהגיעו לים, גיל שם קרם הגנה, חבש כובע ובדק היכן המציל. מה אפשר להבין?","גיל מתכונן לשהות בטוחה בשמש",["גיל מתכונן לצלול עמוק","גיל מתכונן לבנות ארמון חול","גיל מתכונן לאכול גלידה"]],["מיה שמעה שהספרייה נסגרת בקרוב, בחרה שני ספרים ורצה לדלפק. מה אפשר להבין?","מיה רוצה לשאול ספרים לפני הסגירה",["מיה רוצה להחזיר ספרים אחרי הסגירה","מיה רוצה לנקות את הספרייה","מיה רוצה לסדר ספרים במדף"]],["אורי ראה שהפרח נפל מהאגרטל, אסף אותו ומילא מים חדשים. מה אפשר להבין?","אורי מנסה לשמור על הפרחים",["אורי רוצה לשתול פרחים","אורי רוצה לקנות אגרטל","אורי רוצה לצייר פרחים"]],["תמר קיבלה הודעה שהרכבת מתעכבת, בדקה את הלוח וחיפשה מקום לשבת. מה אפשר להבין?","תמר מחכה לרכבת",["תמר יורדת מהרכבת","תמר מפספסת את הרכבת בכוונה","תמר מתקנת את הרכבת"]],["נועה ראתה את אחיה בוכה ליד מגדל קוביות שנפל, אספה קוביות והתחילה לבנות איתו. מה אפשר להבין?","נועה מנסה לעזור לאחיה להרגיש טוב",["נועה מנסה לנצח במשחק","נועה מנסה לסדר את החדר","נועה מנסה ללמד אותו לקרוא"]],["דן מצא פתק על המקרר: לא לשכוח להביא כלי נגינה. הוא הכניס גיטרה לתיק. מה אפשר להבין?","דן מתכונן לפעילות מוזיקלית",["דן מתכונן לשיעור ספורט","דן מתכונן לשיעור שחייה","דן מתכונן לטיול גינון"]],["יעל שמעה בתחזית על רוחות חזקות, סגרה את החלונות והכניסה את העציצים פנימה. מה אפשר להבין?","יעל מנסה להגן על העציצים מהרוח",["יעל מנסה להשקות את העציצים","יעל מנסה להחליף עציצים","יעל מנסה לקשט עציצים"]],["רון קרא שעליו להביא כסף קטן ליריד, ספר מטבעות ושם אותם בארנק. מה אפשר להבין?","רון מתכונן לקנות משהו ביריד",["רון מתכונן למכור ביריד","רון מתכונן לנקות את היריד","רון מתכונן לבנות יריד"]],["מיה ראתה שאחותה מחפשת מחברת, בדקה על השולחן והביאה לה אחת מהמדף. מה אפשר להבין?","מיה מנסה לעזור לאחותה למצוא מחברת",["מיה רוצה לקחת מחברת לעצמה","מיה רוצה לכתוב במחברת","מיה רוצה לצייר במחברת"]],["אורי ראה שהשמיים מתבהרים אחרי הגשם, לבש מעיל דק ויצא עם הכלב. מה אפשר להבין?","אורי חושב שאפשר לצאת למרות שהיה גשם",["אורי חושב שצריך להישאר בבית","אורי חושב שהגשם יתחזק","אורי חושב שיהיה שלג"]]
      ]
    ];
    const stage=clamp(level,1,4),items=tiers[stage-1];
    return items.map(([q,correct,wrong])=>make(q,correct,shuffle([correct,...wrong]),"",{skill:"הסקת מסקנות",type:`רמזים מתוך טקסט — רמה ${stage}`,word:true}));
  }
  function storyTitleQuestions(level){
    const stories=[
      ["עוזרים לחתלתול","נועה מצאה חתלתול רטוב ליד הבית.|היא הביאה לו מגבת וקערת מים.|אחר כך התקשרה לעמותה שתעזור לו.|נועה שמחה שהחתלתול הרגיש טוב יותר.","חתול ליד הבית|יום גשום|עוזרים לבעל חיים|בוקר בשכונה|חבר קטן חדש"],
      ["הזרע שצמח","אדם שתל זרע באדמה.|הוא השקה אותו בכל יום.|אחרי כמה ימים יצא נבט קטן.|אדם המשיך לטפל בצמח.","טיפול בעציץ|פרחים בגינה|מים לצמח|עבודה בגינה|נבט קטן"],
      ["יוצאים בגשם","בחוץ נשמעו רעמים והתחיל לרדת גשם.|יעל סגרה את החלון ולבשה מעיל.|היא ואבא יצאו לקנות מטרייה.|בדרך הם קפצו מעל שלוליות.","קונים מטרייה|שלוליות ברחוב|מעיל חדש|סוגרים חלון|יום סוער"],
      ["עוגת יום הולדת","יעל אפתה עוגה גדולה.|היא הניחה עליה נרות צבעוניים.|המשפחה שרה וחגגה יחד.|בסוף כולם אכלו עוגה.","אופים עוגה|נרות צבעוניים|חגיגה בבית|משפחה יחד|יום מיוחד"],
      ["ספר חדש בספרייה","בכיתה קיבלו ספר חדש.|המורה קראה את העמוד הראשון.|הילדים שאלו שאלות על הסיפור.|אחר כך כל ילד בחר ספר לקריאה.","שיעור קריאה|המורה בכיתה|שאלות על ספר|בחירת ספרים|ספרייה שקטה"],
      ["פיקניק בפארק","המשפחה ארזה כריכים ופירות.|הם פרשו שמיכה בפארק.|אחרי האוכל הילדים שיחקו בכדור.|לפני שחזרו הביתה אספו את כל האשפה.","ארוחת צהריים|משחק בכדור|יום בפארק|שומרים על הניקיון|טיול משפחתי"],
      ["ממחזרים בבית הספר","בבית הספר אספו בקבוקים וניירות.|הילדים הפרידו אותם לפחים שונים.|המורה הסבירה מה אפשר למחזר.|החצר נשארה נקייה יותר.","פחים צבעוניים|ניקיון החצר|שיעור במדעים|בקבוקים וניירות|ילדים עובדים יחד"],
      ["הצעצוע שנמצא","רון לא מצא את המכונית הקטנה שלו.|הוא חיפש מתחת למיטה ובארגז הצעצועים.|אחותו מצאה אותה מאחורי הווילון.|רון הודה לה ושיחק שוב.","מחפשים בחדר|ארגז צעצועים|עזרה מאחות|מכונית קטנה|משחק בבית"],
      ["אופים עוגיות","מיה ערבבה קמח, ביצים וסוכר.|היא יצרה עוגיות קטנות.|אבא הכניס אותן לתנור.|הריח הטוב מילא את הבית.","מתכון מתוק|התנור החם|עוגיות קטנות|עזרה במטבח|ריח טוב בבית"],
      ["שיעור שחייה","אורי הגיע לבריכה עם מצוף.|המדריכה הראתה לו איך לצוף במים.|אורי התאמן בשחייה קצרה.|בסוף הוא הרגיש בטוח יותר.","יום בבריכה|מצוף חדש|מדריכה נחמדה|לומדים לצוף|מים עמוקים"],
      ["קן על העץ","תמר ראתה קן קטן על עץ.|בתוכו היו ציפורים צעירות.|היא שמרה מרחק כדי לא להפריע.|תמר סיפרה על כך למשפחה.","טיול בגינה|ציפורים קטנות|עץ גבוה|משפחה בחוץ|שומרים מרחק"],
      ["ביקור אצל הרופאה","דן השתעל והרגיש לא טוב.|אמא לקחה אותו לרופאה.|הרופאה בדקה אותו והמליצה לנוח.|דן נשאר בבית עד שהרגיש טוב.","יום בבית|מחלה בחורף|מנוחה במיטה|בדיקה אצל רופאה|אמא ודון"],
      ["הגינה של סבתא","סבתא ביקשה מיואב לעזור בגינה.|הם עקרו עשבים והשקו את הפרחים.|יואב קטף עגבניות בשלות.|בסוף הכינו יחד סלט.","סלט לארוחה|פרחים בגינה|עוזרים לסבתא|עגבניות אדומות|עבודה בחוץ"],
      ["משחק הכדורגל","הקבוצה של גיל התאמנה לקראת משחק.|הילדים מסרו את הכדור זה לזה.|במשחק גיל הבקיע שער.|הקבוצה חגגה יחד.","אימון במגרש|שער יפה|חברים בקבוצה|כדורגל בחצר|ניצחון במשחק"],
      ["הגלידה התחילה להינמס","ביום חם מאוד ליה קנתה גלידה.|היא ישבה בצל ואכלה לאט.|הגלידה התחילה להינמס.|ליה מיהרה לסיים אותה.","יום קיץ|יושבים בצל|ליה ממהרת לאכול|קנייה בקיוסק|חם בחוץ"],
      ["העפיפון החדש","עמית קיבל עפיפון צבעוני.|הוא יצא עם אבא לשדה פתוח.|הרוח הרימה את העפיפון גבוה.|עמית רץ וצחק בהתרגשות.","רוח חזקה|שדה פתוח|מתנה צבעונית|ריצה בחוץ|אבא ועמית"],
      ["עוזרים באוטובוס","באוטובוס עלתה אישה עם שקיות כבדות.|אריאל קם ופינה לה מקום.|הוא גם עזר לה להחזיק שקית.|האישה חייכה ואמרה תודה.","נסיעה באוטובוס|שקיות כבדות|מקום פנוי|אישה מחייכת|מעשה טוב"],
      ["צדפים בחוף","נועם טיילה על שפת הים.|היא מצאה צדפים בצורות שונות.|היא בחרה כמה צדפים יפים לקחת הביתה.|בערב הכינה מהם קישוט.","טיול בים|קישוט בבית|צדפים יפים|חול על החוף|איסוף אוצרות"],
      ["בונים איש שלג","בלילה ירד שלג רב.|בבוקר הילדים יצאו לחצר.|הם גלגלו כדורי שלג ובנו איש שלג.|לבסוף הוסיפו לו צעיף וגזר.","בוקר קר|צעיף חדש|משחק בחצר|שלג לבן|גזר כתום"],
      ["דגים באקווריום","בכיתה הציבו אקווריום קטן.|הילדים ראו את הדגים שוחים בו.|הם למדו לתת להם מזון מתאים.|כל ילד רצה לעזור בטיפול.","שיעור בכיתה|דגים צבעוניים|מזון לדגים|אקווריום חדש|ילדים סקרנים"],
      ["קניות לשכנה","השכנה של מאיה לא יכלה לצאת מהבית.|מאיה ואמא הלכו בשבילה למכולת.|הן הביאו לה לחם, חלב ופירות.|השכנה הודתה להן בחום.","קניות במכולת|לחם וחלב|שכנה בבית|עזרה עם שקיות|אמא ומאיה"],
      ["פאזל גדול","ניב קיבל פאזל עם הרבה חלקים.|בהתחלה היה קשה למצוא את הפינות.|הוא מיין את החלקים לפי צבעים.|לאט לאט התמונה הושלמה.","חלקים צבעוניים|משחק בבית|מחפשים פינות|תמונה יפה|סבלנות במשחק"],
      ["ציור לקיר הכיתה","המורה ביקשה מהילדים לצייר ציור גדול.|כל ילד צייר חלק אחר.|אחד צייר עצים ואחר צייר שמש.|בסוף תלו את הציור על הקיר.","מורה בכיתה|ציור של שמש|קיר צבעוני|עבודה משותפת|עצים ירוקים"],
      ["שומרים על הגינה","בחצר בית הספר היו פרחים חדשים.|כמה ילדים רצו לקטוף אותם.|המורה הסבירה שעדיף להשאיר אותם לגדול.|הילדים השקו את הגינה במקום לקטוף.","פרחים חדשים|שיעור בחצר|מים לצמחים|ילדים בגינה|לא קוטפים"],
      ["מתקנים את האופניים","השרשרת באופניים של שחר נפלה.|אבא הראה לה איך להחזיר אותה למקום.|הם בדקו שהגלגלים מסתובבים טוב.|שחר יצאה לרכוב שוב.","רכיבה ברחוב|גלגלים מסתובבים|עזרה מאבא|אופניים חדשים|שרשרת שנפלה"],
      ["קשת אחרי הגשם","אחרי הגשם יצאה השמש.|יובל ראה קשת צבעונית בשמיים.|הוא קרא לאחותו שתראה גם היא.|שניהם הסתכלו עליה עד שנעלמה.","שמש בשמיים|צבעים יפים|גשם בבוקר|אחים יחד|מסתכלים בחלון"],
      ["הגור לומד לשבת","למשפחה הגיע גור חדש.|הם לימדו אותו לשבת כשאומרים לו מילה מיוחדת.|כשהוא הצליח, נתנו לו חטיף קטן.|הגור למד מהר מאוד.","חטיף לכלב|חבר חדש|לומדים בבית|כלב קטן|משחק עם גור"],
      ["הצגה בכיתה","הכיתה הכינה הצגה להורים.|הילדים למדו את התפקידים שלהם.|ביום ההצגה כולם דיברו בקול ברור.|ההורים מחאו כפיים בסוף.","הורים בבית הספר|לומדים תפקידים|מחיאות כפיים|יום מיוחד בכיתה|במה קטנה"],
      ["מנקים את הפארק","בטיול בפארק הילדים ראו אשפה על הדשא.|הם ביקשו שקיות ואספו אותה יחד.|אחר כך זרקו הכול לפח המתאים.|הפארק נראה נעים ונקי.","טיול בפארק|דשא ירוק|שקיות אשפה|ילדים יחד|פח גדול"],
      ["נוטעים עצים","ביום מיוחד הגיעו ילדים לשתול עצים.|כל ילד חפר בור קטן באדמה.|אחר כך הם הניחו שתיל והשקו אותו.|כולם קיוו שהעצים יגדלו ויהיו גבוהים.","מים לשתילים|יום בחוץ|בור באדמה|עצים גבוהים|עבודה בגינה"]
    ];
    const stage=clamp(level,1,4),choiceCount=[2,4,4,6][stage-1],sentenceCount=[1,2,3,4][stage-1];
    return stories.map(([title,text,alternatives])=>{
      const story=text.split("|").slice(0,sentenceCount).join(" ");
      return make(`${story} איזו כותרת מתאימה?`,title,shuffle([title,...alternatives.split("|").slice(0,choiceCount-1)]),"",{skill:"כותרת",type:`כותרת לסיפור — רמה ${stage}`,word:true});
    });
  }

  function readingQuestions(kind,level){
    const out=[];
    if(kind==="inference")return inferenceQuestions(level);
    if(kind==="storyTitle")return storyTitleQuestions(level);
    if(kind==="inference"){
      const questions=[
        ["נועה לקחה מטרייה ולבשה מגפיים. מה אפשר להבין?","ירד גשם",["נועה יצאה לטיול","נועה אוהבת מגפיים","נועה חזרה מבית הספר"]],
        ["אורי זרע זרע, השקה אותו ולאחר כמה ימים הופיע נבט. מה אפשר להבין?","הזרע קיבל מים",["אורי אוהב צמחים","אורי עבד בגינה","הזרע היה באדמה"]],
        ["מיה מצאה גור קטן ורועד והביאה לו שמיכה. מה אפשר להבין?","לגור היה קר",["מיה אוהבת לעזור","מיה מצאה שמיכה","הגור היה קטן"]],
        ["דן סיים לאכול, צחצח שיניים ונכנס למיטה. מה אפשר להבין?","הגיע זמן השינה",["דן שמר על השיניים","דן אכל ארוחה","דן היה בבית"]],
        ["תמר ארזה מים, כובע ומפה ויצאה עם משפחתה. מה אפשר להבין?","המשפחה יצאה לטיול",["תמר התכוננה מראש","היה יום שמשי","תמר אוהבת מפות"]],
        ["רון שמע רעם, ראה ברק וסגר את החלון. מה אפשר להבין?","הייתה סערה",["רון היה בבית","רון נזהר מהגשם","בחוץ היה חשוך"]],
        ["יעל אפתה עוגה והניחה עליה שבעה נרות. מה אפשר להבין?","למישהו היה יום הולדת",["יעל יודעת לאפות","העוגה הייתה חגיגית","יעל ספרה עד שבע"]],
        ["גיל ראה שהעציץ יבש והשקה אותו. מה אפשר להבין?","הצמח קיבל מים",["גיל אחראי על הצמחים בבית","גיל אוהב לעזור","גיל היה משועמם"]],
        ["אדם לבש מעיל, צעיף וכפפות לפני שיצא. מה אפשר להבין?","בחוץ היה קר",["אדם התכונן לצאת","אדם אוהב כפפות","אדם שמר על עצמו"]],
        ["שירה שמעה את השעון המעורר, קמה והתלבשה לבית הספר. מה אפשר להבין?","התחיל הבוקר",["שירה התארגנה מהר","שירה הולכת לבית הספר","שירה שמעה צליל"]],
        ["יואב לקח קופסת אוכל ובקבוק מים לפני שיצא לגן. מה אפשר להבין?","יואב התכונן ליום בגן",["יואב אוהב לשתות מים","יואב ארז דברים","יואב יצא מהבית"]],
        ["נועה חיפשה את החתול בבית ולבסוף מצאה אותו מתחת למיטה. מה אפשר להבין?","החתול התחבא",["נועה חיפשה את החתול","החתול היה בבית","המיטה נמצאת בחדר"]],
        ["אבא פתח מטרייה בזמן שהלך ברחוב. מה אפשר להבין?","ירד גשם",["אבא יצא לטיול","אבא הלך ברחוב","אבא התכונן למזג האוויר"]],
        ["רומי לקחה ספר מהספרייה והתיישבה לקרוא בפינה שקטה. מה אפשר להבין?","רומי רצתה לקרוא",["רומי אוהבת ספרים","רומי מצאה מקום שקט","רומי הייתה בספרייה"]],
        ["הילדים הכינו שלטים, שרו שירים ומחאו כפיים. מה אפשר להבין?","הייתה חגיגה או הופעה",["הילדים היו יחד","הילדים הכינו דברים","הילדים שמחו"]],
        ["דוד מילא את האמבטיה במים, הכניס סירה קטנה והפליג אותה. מה אפשר להבין?","דוד שיחק במים",["דוד אוהב סירות","האמבטיה הייתה מלאה","דוד היה בבית"]],
        ["מאיה ראתה ציפור עם כנף פצועה וקראה למבוגר. מה אפשר להבין?","מאיה רצתה לעזור לציפור",["הציפור נפצעה","מאיה שמה לב לציפור","מאיה הייתה ליד מבוגר"]],
        ["איתי הכין כריך, חתך ירקות וסידר צלחת על השולחן. מה אפשר להבין?","איתי התכונן לארוחה",["איתי עזר במטבח","היו ירקות בבית","איתי השתמש בצלחת"]],
        ["ליאור אסף עלים צבעוניים מהאדמה והכניס אותם לאלבום. מה אפשר להבין?","ליאור אסף עלים",["היו עלים על האדמה","ליאור אוהב טבע","ליאור הכין אלבום"]],
        ["בכיתה כיבו את האורות והקרינו סרט על הקיר. מה אפשר להבין?","הכיתה צפתה בסרט",["היה קיר בכיתה","האורות היו דלוקים קודם","התלמידים למדו יחד"]],
        ["אורי שמע את התינוק בוכה והביא לו מוצץ. מה אפשר להבין?","אורי ניסה להרגיע את התינוק",["התינוק בכה","אורי ידע איפה המוצץ","אורי עזר לתינוק"]],
        ["רותם ראה שלוליות בדרך לבית הספר ונזהר לא לדרוך בהן. מה אפשר להבין?","ירד גשם קודם לכן",["רותם הלך לבית הספר","הדרך הייתה רטובה","רותם נזהר"]],
        ["סבא הדליק נרות, ערך שולחן גדול והזמין את המשפחה. מה אפשר להבין?","המשפחה התכנסה לארוחה חגיגית",["סבא הכין את הבית","המשפחה הוזמנה","היו נרות על השולחן"]],
        ["רוני השקה את הגינה בכל בוקר במשך שבוע. מה אפשר להבין?","רוני טיפל בצמחים",["רוני קם בבוקר","יש גינה בבית","הצמחים קיבלו מים"]],
        ["נעמה לקחה דלי, את חפירה וזרעים אל החצר. מה אפשר להבין?","נעמה התכוננה לשתול",["נעמה יצאה לחצר","נעמה הביאה כלים","נעמה אוהבת גינון"]],
        ["שחר פתח את החלון ושמע ציוץ חזק מהעץ. מה אפשר להבין?","הייתה ציפור על העץ",["שחר פתח חלון","היה עץ ליד הבית","שחר שמע צליל"]],
        ["עומר מצא את הכדור שלו בפינת החצר אחרי שחיפש אותו זמן רב. מה אפשר להבין?","עומר איבד את הכדור קודם",["עומר חיפש בחצר","הכדור היה בפינה","עומר שמח למצוא אותו"]],
        ["המשפחה ארזה מזוודות, בדקה דרכונים והגיעה לשדה התעופה. מה אפשר להבין?","המשפחה יצאה לנסיעה",["המשפחה ארזה דברים","היו להם דרכונים","המשפחה הגיעה לשדה התעופה"]],
        ["איילת לבשה סינר, ערבבה קמח וביצים והכניסה תבנית לתנור. מה אפשר להבין?","איילת אפתה משהו",["איילת עבדה במטבח","היו קמח וביצים","התנור היה חם"]],
        ["אורי כיבה את הטלוויזיה, סידר את המשחקים והלך להתקלח. מה אפשר להבין?","אורי התכונן לשינה",["אורי סידר את המשחקים","אורי היה בבית","אורי התקלח"]]
      ];
      const realLevel=clamp(level,1,5);
      const start=(realLevel-1)*6;
      return repeatPool(questions.slice(start,start+6).map(([q,correct,wrong])=>make(q,correct,shuffle([correct,...wrong]),"📖",{skill:"הסקת מסקנות",type:`רמזים מהטקסט — רמה ${realLevel}`})));
    }
    const realLevel=clamp(level,1,5);
    const storyTiers=[[0,2],[3,4],[1,5],[6,7],[0,1,2,3,4,5,6,7]];
    const activeStories=storyTiers[realLevel-1].map(index=>readingStories[index]);
    activeStories.forEach((story,i)=>{
      if(kind==="inference")out.push(make(`${story.text} מה אפשר להבין?`,story.inference,options(story.inference,story.inferenceOptions||[]), "📖",{skill:"הסקת מסקנות",type:"רמזים מהטקסט"}));
      if(kind==="findInfo")out.push(make(`${story.text} איזה פרט מופיע בטקסט?`,story.info,options(story.info,readingStories.map(x=>x.info)),"📖",{skill:"איתור מידע",type:"מוצאים פרט"}));
      if(kind==="storyTitle"){
        const titles=storyTitleChoices[readingStories.indexOf(story)];
        const choiceCount=realLevel<=2?2:realLevel===3?3:4;
        out.push(make(`${story.text} איזו כותרת מתאימה?`,titles[0],shuffle(titles.slice(0,choiceCount)),"📰",{skill:"כותרת",type:`כותרת לסיפור — רמה ${realLevel}`}));
      }
      if(kind==="trueFalse"){const trueStatement=i%2===0,statement=trueStatement?story.check:story.falseCheck;const answers=realLevel<=2?["נכון","לא נכון"]:["נכון","לא נכון","אין מספיק מידע","אולי"];out.push(make(`${story.text} האם נכון לומר: “${statement}”?`,trueStatement?"נכון":"לא נכון",answers,"✅ ❌",{skill:"הבנת הנקרא",type:`נכון או לא נכון — רמה ${realLevel}`}));}
    });
    return repeatPool(out);
  }
  function eventOrder(level){
    const tiers=[
      [
        ["גורבים גרביים","נועלים נעליים"],["מכינים מברשת שיניים","מצחצחים שיניים"],["פותחים ספר","קוראים בו"],["מרימים כוס","שותים מים"],["לובשים מעיל","יוצאים החוצה"],["לוקחים צבע","מציירים בדף"],["מקלפים בננה","אוכלים אותה"],["פותחים מטרייה","הולכים בגשם"],["לוקחים כדור","משחקים בכדור"],["פותחים ברז","שוטפים ידיים"],["לוקחים צלחת","אוכלים ארוחה"],["מוציאים פיג'מה","מתלבשים לשינה"],["פותחים קופסה","מוציאים צעצוע"],["לוקחים מברשת","מסרקים שיער"],["פותחים דלת","נכנסים הביתה"],["ממלאים קערה","נותנים מים לכלב"],["לוקחים כובע","חובשים אותו"],["מוציאים ספרייה קטנה","בוחרים ספר"],["מוציאים מגבת","מתנגבים"],["מכבים אור","נכנסים למיטה"]
      ],
      [
        ["שוטפים ידיים","מתיישבים","אוכלים"],["פותחים ספר","קוראים","מסיימים סיפור"],["לובשים בגד ים","נכנסים למים","שוחים"],["מוציאים צבעים","מציירים ציור","מניחים לייבוש"],["מכינים כריך","שמים בקופסה","לוקחים לבית הספר"],["פותחים ארון","בוחרים חולצה","לובשים אותה"],["לוקחים רצועה","יוצאים עם הכלב","מטיילים איתו"],["ממלאים משפך","משקים עציץ","מחזירים את המשפך"],["מוציאים משחק","משחקים","מחזירים לקופסה"],["מקלפים תפוז","מחלקים לפלחים","אוכלים"],["שמים גרביים","נועלים נעליים","יוצאים מהבית"],["נכנסים למקלחת","מתרחצים","מתנגבים"],["פותחים מחברת","כותבים תשובה","סוגרים מחברת"],["לוקחים מגבת","נכנסים לבריכה","מתנגבים"],["שמים אוכל בקערה","קוראים לחתול","החתול אוכל"],["מוציאים צלחת","שמים עליה אוכל","אוכלים"],["לובשים פיג'מה","מצחצחים שיניים","נכנסים למיטה"],["פותחים חלון","מכניסים אוויר","סוגרים חלון"],["מוציאים מטרייה","פותחים אותה","נכנסים לבית"],["לוקחים עיפרון","כותבים מילה","מניחים את העיפרון"]
      ],
      [
        ["קמים בבוקר","מצחצחים שיניים","מתלבשים","אוכלים ארוחת בוקר"],["מערבבים בצק","שופכים לתבנית","אופים","אוכלים עוגה"],["מכניסים כביסה","מוסיפים אבקה","מפעילים מכונה","תולים לייבוש"],["אורזים תיק","יוצאים מהבית","מגיעים לבית הספר","מתחילים ללמוד"],["ממלאים בקבוק","לובשים כובע","יוצאים לטיול","שותים מים"],["אוספים צעצועים","ממיינים לקופסאות","מסדרים במדף","החדר מסודר"],["מכינים אדמה","זורעים זרע","משקים","מחכים לנבט"],["מוציאים ירקות","שוטפים אותם","חותכים","מכינים סלט"],["נכנסים לספרייה","בוחרים ספר","שואלים בדלפק","קוראים בבית"],["לוקחים כדור","מגיעים למגרש","משחקים","מחזירים את הכדור"],["מחפשים מתכון","מודדים מצרכים","מערבבים","מגישים ארוחה"],["מתכננים ציור","מציירים קווים","צובעים","תולים את הציור"],["מוציאים מזוודה","מקפלים בגדים","אורזים","סוגרים מזוודה"],["נכנסים לחנות","בוחרים מוצר","משלמים","לוקחים הביתה"],["ממלאים אמבטיה","מוסיפים סבון","מתרחצים","מרוקנים מים"],["שומעים צלצול","אוספים ציוד","יוצאים להפסקה","חוזרים לכיתה"],["מוצאים כתם","מביאים סמרטוט","מנקים","מחזירים את הסמרטוט"],["מוציאים אופניים","חובשים קסדה","רוכבים","מחזירים אופניים"],["שמים מזון בצלחת","עורכים שולחן","קוראים למשפחה","אוכלים יחד"],["מכינים תיק שינה","לובשים פיג'מה","קוראים סיפור","נרדמים"]
      ],
      [
        ["בודקים את מזג האוויר","לוקחים מטרייה","יוצאים מהבית","פותחים אותה בגשם"],["אוספים כביסה מהסל","מכניסים למכונה","מפעילים מכונה","תולים לייבוש"],["מוצאים ספר במחשב","מבקשים אותו בספרייה","לוקחים הביתה","מחזירים בזמן"],["מכינים הזמנה","מזמינים חברים","מקשטים את החדר","חוגגים יום הולדת"],["מכינים ציוד לגינה","שותלים שתיל","משקים אותו","עוקבים אחרי צמיחתו"],["מוצאים לכלוך על השולחן","מגבונים אותו","מסדרים צלחות","אוכלים ארוחה"],["שומעים תחזית גשם","סוגרים חלונות","לוקחים מעיל","יוצאים בזהירות"],["בודקים מפת מסלול","אורזים מים ואוכל","נוסעים לנקודת ההתחלה","מתחילים לטייל"],["מגלים שהדג רעב","מכינים מעט מזון","מאכילים אותו","בודקים שהמים נקיים"],["מוצאים גלגל ריק","מביאים משאבה","ממלאים אוויר","בודקים שאפשר לרכוב"],["מביאים קמח וביצים","מערבבים בלילה","אופים בתנור","מגישים מאפים"],["פותחים את דלת הכלוב","מנקים אותו","ממלאים מים ומזון","מחזירים את החיה"],["רואים שלולית בבית","מביאים מגבת","מנגבים את המים","מניחים להתייבש"],["מוצאים צעצוע שבור","אוספים את החלקים","מבקשים עזרת מבוגר","מתקנים או מחליפים"],["מחפשים חומר למבחן","קוראים במחברת","מתרגלים שאלות","ניגשים למבחן"],["מגיעים למגרש","מתחממים","משחקים בקבוצה","נחים בסוף המשחק"],["מכינים כריכים","ממלאים בקבוקים","נוסעים לפארק","עורכים פיקניק"],["מוצאים עלים יבשים","מגרפים לערימה","אוספים לשקית","מפנים את החצר"],["מכינים זרעים ואדמה","מניחים בעציץ","משקים בעדינות","מעמידים במקום מואר"],["פותחים תריס בבוקר","מסדרים את המיטה","מתלבשים","יוצאים ליום חדש"]
      ],
      [
        ["בוחרים יעד לטיול","בודקים מסלול","אורזים ציוד","נוסעים","מטיילים"],["מגלים שהצמח נובל","בודקים את האדמה","משקים במידה","מעמידים באור","עוקבים אחרי מצבו"],["מקבלים הזמנה למסיבה","בוחרים מתנה","עוטפים אותה","מגיעים למסיבה","נותנים את המתנה"],["אוספים בגדים מלוכלכים","ממיינים צבעים","מכבסים","תולים לייבוש","מקפלים לארון"],["בוחרים מתכון","קונים מצרכים","מכינים את האוכל","עורכים שולחן","אוכלים יחד"],["שומעים על מבחן","מארגנים חומר","לומדים","מתרגלים","ניגשים למבחן"],["מגלים שהכלב מלוכלך","מכינים מים וסבון","רוחצים אותו","מנגבים","מברישים פרווה"],["מחליטים לצייר ציור","מתכננים רעיון","מציירים","צובעים","מציגים את הציור"],["שמים לב שהאופניים מלוכלכים","מביאים דלי","שוטפים","מייבשים","מחזירים למקום"],["מכינים תיק לבית הספר","מכניסים מחברות","מכניסים אוכל","יוצאים","מגיעים לכיתה"],["רואים עננים כהים","לוקחים מטרייה","יוצאים","מתחיל גשם","נכנסים למקום יבש"],["מתכננים פיקניק","מכינים אוכל","מזמינים חברים","נוסעים לפארק","אוכלים יחד"],["מוצאים ספר שרוצים לקרוא","שואלים אותו","קוראים בכל יום","מסיימים","מחזירים לספרייה"],["קונים זרע","מכינים עציץ","זורעים","משקים","רואים נבט"],["מוצאים צעצועים מפוזרים","מחליטים לסדר","ממיינים לקופסאות","מסדרים במדף","החדר פנוי למשחק"],["מתחילים יום בים","מורחים קרם הגנה","נכנסים למים","נחים בצל","חוזרים הביתה"],["מתכוננים לרכיבה","בודקים אופניים","חובשים קסדה","רוכבים","מחזירים אופניים"],["רוצים להכין סלט","שוטפים ירקות","חותכים","מערבבים","מגישים"],["מתכוננים לשינה","לובשים פיג'מה","מצחצחים שיניים","קוראים סיפור","מכבים אור"],["מארגנים ערב משחקים","בוחרים משחק","מסבירים חוקים","משחקים","מחזירים לקופסה"]
      ]
    ];
    const realLevel=clamp(level,1,5),sequences=tiers[realLevel-1];
    return sequences.map(tokens=>make("סדרו את האירועים",tokens.join(" → "),[],"",{skill:"רצף אירועים",type:`מה קודם? — רמה ${realLevel}`,mode:"build",tokens:shuffle(tokens),joinWith:" → "}));
  }
  function sentenceHebrew(level){
    const tiers=[
      ["אני רץ","היא שרה","כלב נובח","חתול ישן","ציפור עפה","דג שוחה","אמא צוחקת","אבא קורא","ילד קופץ","ילדה רוקדת","שמש זורחת","גשם יורד","פרח גדל","דלת נפתחת","ספר נסגר","כדור מתגלגל","תינוק בוכה","סבא מחייך","סבתא מבשלת","ארנב אוכל"],
      ["הילד אוכל תפוח","החתול ישן בכיסא","הכלב רץ בגינה","אמא קוראת ספר","אבא שותה מים","הדג שוחה בים","הציפור בונה קן","הילדה מציירת פרח","הארנב אוכל גזר","הסבא מספר סיפור","הסבתא אופה עוגה","הילדים שרים יחד","השמש מחממת אותנו","הגשם מרטיב רחובות","הדבורה עפה לפרח","הפרה אוכלת עשב","הסוס רץ מהר","הברווז שוחה באגם","הילד לובש מעיל","הילדה שוטפת ידיים"],
      ["הילדים משחקים בכדור בחצר","הציפור עפה גבוה בשמיים","אמא מכינה ארוחת ערב","הילדה שותלת זרע באדמה","הארנב אוכל גזר טרי","הסבא קורא סיפור מעניין","הכלב מחפש את הכדור","החתול נח על הספה","אבא מסדר את החדר","הילדים אוספים עלים צבעוניים","הדג שוחה במים צלולים","הדבורה מבקרת בפרח צהוב","המשפחה יוצאת לטיול קצר","הילד בונה מגדל קוביות","הילדה כותבת מכתב לחברה","הצפרדע קופצת ליד הבריכה","אמא משקה עציצים במרפסת","אבא מתקן גלגל באופניים","הילדים אוכלים פירות מתוקים","הציפור שרה על העץ"],
      ["אמא שותלת פרח אדום בגינה","הילדה מציירת שמש צהובה גדולה","הילד לובש מעיל ביום גשום","הכלב מחפש את הכדור בחצר","הציפורים שרות שירים על העץ","המשפחה יוצאת לטיול ביער הירוק","אבא מכין כריכים לטיול של מחר","הסבתא אופה עוגיות מתוקות במטבח","הילדים בונים ארמון חול גדול","החתול מטפס על כיסא גבוה","הדג אוכל פירורים קטנים באקווריום","הילדה קוראת ספר לפני השינה","אמא מסדרת צעצועים בתוך הקופסה","אבא שוטף את המכונית הכחולה","הילדים לומדים מילים חדשות בכיתה","הארנב רץ בין הפרחים בגינה","הדבורה אוספת צוף מפרח ורוד","הילד שותה מים אחרי הריצה","המשפחה אוכלת ארוחה חמה יחד","הסבא משקה את העץ הצעיר"],
      ["הסבא קורא עיתון בבוקר ליד החלון","הדג שוחה לאט במים הצלולים","הילדים אוספים עלים צבעוניים בפארק הגדול","נועה מכינה עוגה מתוקה ליום ההולדת","הציפור בונה קן קטן בין הענפים","המשפחה אוכלת ארוחה חמה יחד בבית","אבא לוקח את הכלב לטיול ארוך","אמא מכינה סלט טרי לארוחת הערב","הילדה מסדרת את הספרים על המדף","הילד מצחצח שיניים לפני שהוא הולך לישון","הדבורה עפה מפרח לפרח בגינה היפה","הארנב מוצא גזר מתחת לשיח הירוק","הילדים משחקים במשחק חדש אחרי בית הספר","הסבתא מספרת סיפור מצחיק לפני השינה","אבא מתקן את האופניים בחצר הבית","המשפחה אורזת תיק גדול לטיול מחר","הילדה מציירת פרפר צבעוני על הדף","הכלב שומר על הבית בזמן הלילה","הילדים שותלים שתילים קטנים בגינה המשותפת","אמא סוגרת את החלון לפני הגשם"]
    ];
    const realLevel=clamp(level,1,5),sentences=tiers[realLevel-1].map(sentence=>sentence.split(" "));
    return sentences.map(tokens=>make("סדרו את המילים למשפט",tokens.join(" "),[],"",{skill:"משפטים",type:`בונים משפט — רמה ${realLevel}`,mode:"build",tokens:shuffle(tokens),joinWith:" ",word:true}));
  }
  function wordSearch(level){
    const realLevel=clamp(level,1,3),groups=wordSearchGroupsByLevel[realLevel-1],size=[5,9,9][realLevel-1];
    return groups.map((targets,puzzleIndex)=>{
      const letters=Array.from({length:size*size},()=>heAlphabet[Math.floor(Math.random()*heAlphabet.length)]);
      const paths=[];
      const placedLetters=Array(size*size).fill(null);
      targets.forEach((word,targetIndex)=>{
        const wordLetters=[...word];
        // Levels 2 and 3 also contain vertical words. Level 1 stays horizontal.
        const directions=realLevel===1?[[0,1]]:(targetIndex%2===1?[[1,0],[0,1]]:[[0,1],[1,0]]);
        let placedPath=null;
        for(const [rowStep,columnStep] of directions){
          const maxRow=size-(rowStep?(wordLetters.length-1):0);
          const maxColumn=size-(columnStep?(wordLetters.length-1):0);
          const starts=[];
          for(let row=0;row<maxRow;row++) for(let column=0;column<maxColumn;column++) starts.push([row,column]);
          const offset=(puzzleIndex*7+targetIndex*5)%starts.length;
          for(let attempt=0;attempt<starts.length;attempt++){
            const [row,column]=starts[(offset+attempt)%starts.length];
            const path=wordLetters.map((_,index)=>(row+rowStep*index)*size+column+columnStep*index);
            if(path.every((cell,index)=>placedLetters[cell]===null||placedLetters[cell]===wordLetters[index])){
              path.forEach((cell,index)=>{
                placedLetters[cell]=wordLetters[index];
                letters[cell]=wordLetters[index];
              });
              placedPath=path;
              break;
            }
          }
          if(placedPath) break;
        }
        if(!placedPath) throw new Error(`Could not place word-search word: ${word}`);
        paths.push(placedPath);
      });
      const label=targets.length===1?`מצאו את המילה ${targets[0]}`:"מצאו את כל המילים בתפזורת";
      return make(label,targets.join(" | "),[],"🔍",{skill:"תפזורת",type:`חיפוש מילים — רמה ${realLevel}`,mode:"wordsearch",grid:letters,size,paths,wordTargets:targets,word:true});
    });
  }

  function natureQuestions(kind,level){
    const familiarAnimals=level<=5?animals.filter(a=>["כלב","חתול","פרה","כבשה","סוס","תרנגולת","ארנב","ברווז","דג","צפרדע"].includes(a.he)):animals;
    const femaleAnimals=new Set(["פרה","כבשה","תרנגולת","צפרדע","דבורה"]);
    const soundAnimals=animals.filter(a=>["כלב","חתול","פרה","כבשה","סוס","תרנגולת","אריה","פיל","צפרדע","דבורה","ינשוף"].includes(a.he));
    if(kind==="animalSound"){const activeSoundAnimals=level<=5?soundAnimals.filter(a=>["כלב","חתול","פרה","כבשה","סוס","תרנגולת","צפרדע"].includes(a.he)):soundAnimals;return repeatPool(activeSoundAnimals.map(a=>make("לחצו לשמוע ובחרו את בעל החיים",a.icon,options(a.icon,activeSoundAnimals.map(x=>x.icon)),"🔊",{skill:"קולות של חיות",type:"מי משמיע את הקול?",audio:{kind:"animal",key:a.sound}})));}
    if(kind==="oddOneOut"){const simpleGroups=[
      ["🐶","🐱","🐰","🚗"],["🍎","🍐","🥭","⚽"],["🐝","🐞","🦋","🐘"],
      ["🐄","🐑","🐴","🍎"],["🚗","🚌","🚲","🐶"],["🥕","🍅","🍎","🐱"],
      ["🏠","🚗","🚌","🐰"],["🐔","🐄","🐑","🥁"],["🍌","🍎","🍐","🚲"],
      ["🐶","🐱","🐴","🏠"],["🧸","🧩","🥁","🍐"],["🌸","🌳","🌻","🚗"]
    ],advancedGroups=[
      ["🐟","🐬","🐋","🦁"],["🌳","🌻","🌵","🚂"],["🥁","🎸","🎹","🥕"],
      ["☀️","🌧️","❄️","🐶"],["📕","✏️","🖍️","🐝"],["🍎","🥕","🌽","🚌"]
    ],groups=level<=4?simpleGroups:simpleGroups.concat(advancedGroups);return groups.map(items=>make("מה לא שייך?",items[3],shuffle(items),"",{skill:"מיון",type:"יוצא דופן"}));}
    if(kind==="habitat"){
      const habitats=[...new Set(familiarAnimals.map(x=>x.habitat))];
      return familiarAnimals.map(a=>make(`איפה ${femaleAnimals.has(a.he)?"גרה":"גר"} ${a.he}?`,a.habitat,options(a.habitat,habitats),a.icon,{skill:"בתי גידול",type:"בעל חיים וסביבה",explain:`התשובה הנכונה היא ${a.habitat}.`}));
    }
    if(kind==="babyAdult"){
      const babyQuestionText=a=>{
        const custom={פרה:"איך נקראת הפרה הצעירה?",כבשה:"איך נקרא הכבש הצעיר?",תרנגולת:"איך נקרא התרנגול הצעיר?",אריה:"איך נקרא האריה הצעיר?"};
        if(custom[a.he])return custom[a.he];
        return femaleAnimals.has(a.he)?`איך נקראת ה${a.he} הצעירה?`:`איך נקרא ה${a.he} הצעיר?`;
      };
      return repeatPool(familiarAnimals.map(a=>make(babyQuestionText(a),a.baby,options(a.baby,familiarAnimals.map(x=>x.baby)),a.icon,{skill:"משפחות בעלי חיים",type:"גור ובוגר"})));
    }
    if(kind==="livingGroups"){
      const items=[
        ["🐶","חי","לאיזו קבוצה שייך מי שיכול לזוז בעצמו?"],
        ["🌳","צומח","לאיזו קבוצה שייך מי שיכול לייצר זרעים?"],
        ["⚽","דומם","לאיזו קבוצה שייך מי שאינו אוכל או נושם?"],
        ["🐝","חי","לאיזו קבוצה שייך מי שיכול לזוז בעצמו?"],
        ["🌻","צומח","לאיזו קבוצה שייך מי שגדל בעזרת אור, מים ואדמה?"],
        ["🚗","דומם","לאיזו קבוצה שייך מי שאינו גדל או נושם?"],
        ["🐋","חי","לאיזו קבוצה שייך מי שנושם ויכול לזוז בעצמו?"],
        ["🌵","צומח","לאיזו קבוצה שייך מי שגדל אך אינו יכול ללכת?"],
        ["💎","דומם","לאיזו קבוצה שייך מי שאינו אוכל, נושם או גדל?"]
      ],realLevel=clamp(level,1,4),active=items.slice(0,Math.min(items.length,2+realLevel*2)),answerCount=realLevel===1?2:realLevel===2?3:4;
      return repeatPool(active.map(([icon,group,question])=>make(question,group,options(group,["חי","צומח","דומם"],answerCount),"",{skill:"מיון בטבע",type:"חי, צומח או דומם"})));
    }
    if(kind==="plantFood"){const data=[["🍎","עץ תפוח","גדל"],["🍐","עץ אגס","גדל"],["🥭","עץ מנגו","גדל"],["🥥","דקל קוקוס","גדל"],["🥕","צמח גזר","גדל"],["🌽","צמח תירס","גדל"],["🍅","צמח עגבנייה","גדלה"],["🍇","גפן","גדלים"]];return repeatPool(data.map(([food,plant,verb])=>make(`על איזה צמח ${verb} ${food}?`,plant,options(plant,data.map(x=>x[1])),"",{skill:"צמחים ומזון",type:"מה גדל על הצמח?"})));}
    if(kind==="seasons"){const realLevel=clamp(level,1,5),answerCount=realLevel===1?2:realLevel===2?3:4;const rows=seasons.slice(0,realLevel===5?4:Math.max(2,realLevel));return repeatPool(rows.flatMap(([season,icon,activity,activityIcon])=>realLevel===1?[make("לאיזו עונה מתאים הסמל?",season,options(season,seasons.map(x=>x[0]),answerCount),icon,{skill:"עונות",type:"מזהים עונה"})]:[make(`באיזו עונה מתאים: ${activity}?`,season,options(season,seasons.map(x=>x[0]),answerCount),activityIcon,{skill:"עונות",type:realLevel>=4?"בוחרים פעילות מתאימה":"עונות השנה"}),make(`לאיזו עונה מתאים הסמל?`,season,options(season,seasons.map(x=>x[0]),answerCount),icon,{skill:"עונות",type:"עונות השנה"})]));}
    if(kind==="lifeCycle"){const tiers=[[["זרע","נבט","פרח"]],[["ביצה","זחל","פרפר"],["זרע","נבט","צמח","פרח"]],[["ביצה","זחל","גולם","פרפר"],["ביצה","ראשן","צפרדע צעירה","צפרדע"]],[["זרע","נבט","עץ צעיר","עץ עם תפוחים"],["ביצה","אפרוח","תרנגולת צעירה","תרנגולת"]],[["ביצה","זחל","גולם","דבורה"],["זרע","נבט","עלים","תרמיל"],["זרע","נבט","פרח","עגבנייה"]]],realLevel=clamp(level,1,5);return repeatPool(tiers[realLevel-1].map(tokens=>make("סדרו את מחזור החיים",tokens.join(" ← "),[],"",{skill:"מחזורי חיים",type:`סדר שלבים — רמה ${realLevel}`,mode:"build",tokens:shuffle(tokens),joinWith:" ← "})));}
    if(kind==="plantParts"){
      const data=[
        ["שורש","סופג מים מהאדמה","איזה חלק בצמח סופג מים מהאדמה?"],
        ["גבעול","מחזיק את הצמח","איזה חלק בצמח מחזיק את הצמח זקוף?"],
        ["עלה","קולט אור","איזה חלק בצמח קולט אור?"],
        ["פרח","עוזר ליצור זרעים","איזה חלק בצמח עוזר ליצור זרעים?"],
        ["פרי","שומר על הזרעים","ילד מצא גרעינים באבטיח. באיזה חלק של הצמח מצא אותם?"]
      ],realLevel=clamp(level,1,4),answerCount=realLevel===1?2:realLevel===2?3:4,active=data.slice(0,Math.min(data.length,1+realLevel));
      const parts=data.map(x=>x[0]),roles=data.map(x=>x[1]);
      return repeatPool(active.flatMap(([part,role,question])=>realLevel<=2
        ?[make(question,part,options(part,parts,answerCount),"",{skill:"חלקי הצמח",type:"חלק ותפקיד"})]
        :[make(question,part,options(part,parts,answerCount),"",{skill:"חלקי הצמח",type:"חלק ותפקיד"}),make(`מה תפקיד ה${part}?`,role,options(role,roles,answerCount),"",{skill:"חלקי הצמח",type:"חלק ותפקיד"})]));
    }
    if(kind==="animalFood"){
      const realLevel=clamp(level,1,5),answerCount=realLevel===1?2:realLevel===2?3:4;
      const active=animals.slice(0,realLevel===5?animals.length:3+realLevel*2);
      const femaleAnimals=new Set(["קואלה","פנדה","פרה","כבשה","תרנגולת","דבורה","צפרדע"]);
      const questionFor=a=>`מה ${femaleAnimals.has(a.he)?"אוכלת":"אוכל"} ${a.he}?`;
      return repeatPool(active.map(a=>make(questionFor(a),a.food,options(a.food,animals.map(x=>x.food),answerCount),"",{skill:"תזונת בעלי חיים",type:realLevel>=4?"מזון לבעל חיים פחות מוכר":"מה אוכלים?"})));
    }
    if(kind==="weather"){
      const data=[
        {weather:"גשום",choice:"מעיל גשם",icon:"🌧️",clue:"רואים טיפות גשם. מה מזג האוויר?"},
        {weather:"שמשי",choice:"כובע שמש",icon:"☀️",clue:"השמש זורחת בשמיים. מה מזג האוויר?"},
        {weather:"קר",choice:"צעיף",icon:"❄️",clue:"מרגישים קור ורואים פתיתי שלג. מה מזג האוויר?"},
        {weather:"סוער",choice:"להישאר במקום מוגן",icon:"⛈️",clue:"רואים ברק ורעם. מה מזג האוויר?"},
        {weather:"חם",choice:"לשתות מים",icon:"🌡️",clue:"חם מאוד בחוץ. מה מזג האוויר?"}
      ],realLevel=clamp(level,1,5),answerCount=realLevel===1?2:realLevel===2?3:4,active=data.slice(0,realLevel);
      return repeatPool(active.flatMap(item=>realLevel===1
        ?[make(item.clue,item.weather,options(item.weather,data.map(x=>x.weather),answerCount),"",{skill:"מזג אוויר",type:"מזהים מזג אוויר"})]
        :[make(`מה מתאים ליום ${item.weather}?`,item.choice,options(item.choice,data.map(x=>x.choice),answerCount),"",{skill:"מזג אוויר",type:realLevel>=4?"בוחרים פעולה בטוחה":"מתלבשים נכון"}),make(item.clue,item.weather,options(item.weather,data.map(x=>x.weather),answerCount),"",{skill:"מזג אוויר",type:"מזהים מזג אוויר"})]));
    }
    if(kind==="foodChain"){
      const basic=[
        ["עשב","ארנב","שועל","נשר","מפרקים"],["עשב","חגב","צפרדע","חסידה","מפרקים"],["עלים","זחל","ציפור","נץ","מפרקים"],["זרעים","עכבר","נחש","ינשוף","מפרקים"],["אצות","דג קטן","דג גדול","כריש","מפרקים"],
        ["פרחים","דבורה","לטאה","ינשוף","מפרקים"],["עלי אלון","כנימה","פרת משה רבנו","ציפור","מפרקים"],["עשב","ארבה","לטאה","נץ","מפרקים"],["פירות","עכבר","נחש","ינשוף","מפרקים"],["אגוזים","סנאי","שועל","נשר","מפרקים"],
        ["זרעים","דרור","בז","מפרקים","אדמה"],["זרעים","חיפושית","צפרדע","נחש","מפרקים"],["אצות","זואופלנקטון","דגיג","דג גדול","מפרקים"],["אצות","חלזון מים","ברווז","שועל","מפרקים"],["עלים","ארנבת","שועל","נשר","מפרקים"],
        ["גרגרים","עכבר","נמייה","נשר","מפרקים"],["עשב","ארנבת","שועל","נשר","מפרקים"],["צוף","חיפושית","צפרדע","ינשוף","מפרקים"],["עלים","חלזון","קיפוד","שועל","מפרקים"],["עשב","חיפושית","עכביש","ציפור","מפרקים"],
        ["צוף","פרפר","עכביש","ציפור","מפרקים"],["אצות","דגיגים","דג גדול","כלב ים","מפרקים"],["עשב","אייל","אריה","מפרקים","אדמה"],["זרעים","עכבר","שועל","נשר","מפרקים"],["אצות","דגיגים","פינגווין","כלב ים","מפרקים"],
        ["אצות","דגיגים","דג קטן","דג גדול","מפרקים"],["עשב","ארנב","ינשוף","נשר","מפרקים"],["עלים","זחל","ציפור שיר","ינשוף","מפרקים"],["פרחים","כנימה","פרת משה רבנו","דרור","מפרקים"],["פירות","חרק","לטאה","נחש","מפרקים"]
      ];
      const simplePairs=[
        ["עשב","ארנב"],["עשב","חגב"],["עלים","זחל"],["זרעים","עכבר"],["אצות","דג קטן"],["פרחים","דבורה"],
        ["עלי אלון","כנימה"],["עשב","ארבה"],["פירות","עכבר"],["אגוזים","סנאי"],["זרעים","דרור"],["זרעים","חיפושית"],
        ["אצות","זואופלנקטון"],["אצות","חלזון מים"],["עלים","ארנבת"],["גרגרים","עכבר"],["עשב","אייל"],["צוף","חיפושית"],
        ["עלים","חלזון"],["עשב","עכביש"],["צוף","פרפר"],["אצות","דגיגים"],["גרגרים","דרור"],["אצות","דגיגים"],
        ["עשב ים","צב ים"],["עלי בר","ארנב"],["קליפת עץ","זחל"],["פרחים","כנימה"],["פירות","קוף"],["נקטאר","פרפר"]
      ];
      const advanced=[
        ["אצות","זואופלנקטון","דגיג","טונה","כריש"],["אצות","דגיגים","פינגווין","כלב ים","לווייתן קטלן"],["עשב ים","חלזון ים","סרטן","תמנון","כריש"],["אצות","שרימפס","דג קטן","דולפין","כריש"],["אצות","דגיגים","דג קטן","דג גדול","מפרקים"],
        ["עלים","זחל","ציפור","נחש","נץ"],["עשב","חגב","לטאה","נחש","נשר"],["זרעים","עכבר","נחש","בז","מפרקים"],["פרחים","דבורה","עכביש","לטאה","נץ"],["עשב","חיפושית","צפרדע","נחש","ינשוף"],
        ["עלים","חלזון","קיפוד","שועל","מפרקים"],["זרעים","חרק","עכביש","ציפור","נץ"],["פירות","עכבר","נמייה","נשר","מפרקים"],["עלי אלון","זחל","ציפור","ינשוף","מפרקים"],["עשב","ארבה","צפרדע","חסידה","מפרקים"],
        ["צוף","פרפר","עכביש","ציפור","בז"],["עשב","ארנבת","שועל","נשר","מפרקים"],["פירות","סנאי","שועל","נשר","מפרקים"],["זרעים","דרור","נחש","נץ","מפרקים"],["עלים","כנימה","פרת משה רבנו","ציפור","נץ"],
        ["אצות","דגיגים","דג גדול","כלב ים","לווייתן קטלן"],["אצות","חלזון מים","ברווז","שועל","מפרקים"],["עשב","חגב","עכביש","ציפור","נץ"],["פירות","חרק","לטאה","נחש","מפרקים"],["עשב","חגב","ציפור","בז","מפרקים"],
        ["זרעים","עכבר","שועל","נשר","מפרקים"],["עלים","זחל","דרור","בז","מפרקים"],["פרחים","דבורה","צפרדע","נחש","ינשוף"],["אצות","זואופלנקטון","מדוזה","צב ים","כריש"],["עשב ים","דג קטן","דג גדול","דולפין","כריש"]
      ];
      // מפרקים מחזירים חומרים לאדמה, אבל אינם אוכלים את היצורים
      // בשרשרת שלפניהם. לכן הם אינם מוצגים כחוליה בשרשרת מזון ליניארית.
      // Keep chains child-friendly: decomposers and technical sea-life terms are
      // not presented as a link in this activity.
      const cleanChain = row => row.filter(token => !["מפרקים", "אדמה", "קריל"].includes(token));
      // Present the chain from the hunter back to its food source. This makes
      // the direction explicit: ינשוף ← נחש ← צפרדע ← דבורה ← פרחים.
      const reverseChain = row => cleanChain(row).reverse();
      const cleanBasic = basic.map(reverseChain);
      const cleanAdvanced = advanced.map(reverseChain);
      const reversePairs = simplePairs.map(row => [...row].reverse());
      const realLevel=clamp(level,1,5);
      const chains=realLevel===1?reversePairs:realLevel===2?cleanBasic.map(row=>row.slice(0,3)):realLevel===3?cleanAdvanced.map(row=>row.slice(0,3)):realLevel===4?cleanAdvanced.map(row=>row.slice(0,4)):cleanAdvanced.map(row=>row.slice(0,5));
      return repeatPool(chains.map(tokens=>make("סדרו את שרשרת המזון",tokens.join(" ← "),[],"",{skill:"שרשרת מזון",type:`מי אוכל את מי? — רמה ${realLevel}`,mode:"build",tokens:shuffle(tokens),joinWith:" ← "})));
    }
    if(kind==="adaptations"){
      const facts=[
        ["🐫","גמל","דבשת","לשרוד במדבר","ללכת על חול|להגן על העיניים מחול|לאכול צמחים קוצניים","ריסים ארוכים|רגליים ארוכות|שפתיים עבות","לשמור אנרגיה במדבר החם"],
        ["🐫","גמל","ריסים ארוכים","להגן על העיניים מחול","לשרוד זמן רב בלי מים|ללכת על חול|לאכול קוצים","דבשת|רגליים ארוכות|שפתיים עבות","ללכת במדבר כשיש רוח חזקה"],
        ["🐧","פינגווין","שכבת שומן","לשמור על חום הגוף","לשחות במים|לתפוס דגים|להסתתר מטורפים","קרומי שחייה|מקור מחודד|צבעי הסוואה","לשחות במים קרים מאוד"],
        ["🐧","פינגווין","קרומי שחייה","לשחות","לשמור על חום הגוף|לתפוס דגים|להסתתר מטורפים","שכבת שומן|מקור מחודד|צבעי הסוואה","להתקדם במהירות במים"],
        ["🦆","ברווז","קרומי שחייה","לשחות","לסנן מזון מהמים|לשמור על נוצות יבשות|למצוא מזון","מקור רחב|נוצות שומניות|צוואר ארוך","לחתור במים"],
        ["🦆","ברווז","מקור רחב","לסנן מזון מהמים","לשחות|לשמור על נוצות יבשות|למצוא מזון","קרומי שחייה|נוצות שומניות|צוואר ארוך","לחפש מזון בתוך המים"],
        ["🦎","לטאה","צבעי הסוואה","להסתתר","לתפוס חרקים|להימלט מטורף|לטפס על סלעים","לשון ארוכה|זנב מתנתק|טפרים חזקים","לא להתבלט בין הסלעים"],
        ["🦎","לטאה","לשון ארוכה","לתפוס חרקים","להסתתר|להימלט מטורף|לטפס על סלעים","צבעי הסוואה|זנב מתנתק|טפרים חזקים","לתפוס חרק קטן במהירות"],
        ["🦉","ינשוף","עיניים גדולות","לראות היטב בחושך","לתפוס טרף|לעוף בשקט|לקרוע מזון","טפרים חזקים|נוצות שקטות|מקור חד","למצוא טרף בלילה"],
        ["🦉","ינשוף","נוצות שקטות","לעוף בשקט","לראות בחושך|לתפוס טרף|לקרוע מזון","עיניים גדולות|טפרים חזקים|מקור חד","להתקרב לטרף בלי שישמע"],
        ["🐟","דג","זימים","לנשום במים","לשנות כיוון|להגן על הגוף|לשחות מהר","סנפירים|קשקשים|זנב חזק","לחיות מתחת למים"],
        ["🐟","דג","סנפירים","לשנות כיוון במים","לנשום במים|להגן על הגוף|לשחות מהר","זימים|קשקשים|זנב חזק","לפנות תוך כדי שחייה"],
        ["🦒","ג'ירפה","צוואר ארוך","להגיע לעלים גבוהים","להסתתר בעשב|לרוץ מהר|להגן על העיניים","כתמים|רגליים ארוכות|ריסים ארוכים","לאכול מעל צמרות השיחים"],
        ["🦒","ג'ירפה","כתמים","להסתתר בין אור וצל","להגיע לעלים גבוהים|לרוץ מהר|להגן על העיניים","צוואר ארוך|רגליים ארוכות|ריסים ארוכים","לא להתבלט בין העצים"],
        ["🐘","פיל","חדק","לשתות ולאסוף מזון","להתקרר בחום|לחפור באדמה|להגן על הגוף","אוזניים גדולות|חטים|עור עבה","לשתות מים בלי להתכופף"],
        ["🐘","פיל","אוזניים גדולות","לקרר את הגוף","לשתות ולאסוף מזון|לחפור באדמה|להגן על הגוף","חדק|חטים|עור עבה","להתקרר ביום חם"],
        ["🐝","דבורה","כנפיים","לעוף מפרח לפרח","להגן על עצמה|לאסוף אבקה|למצוא פרחים","עוקץ|שערות גוף|מחושים","להגיע לפרח רחוק"],
        ["🐝","דבורה","עוקץ","להגן על עצמה","לעוף מפרח לפרח|לאסוף אבקה|למצוא פרחים","כנפיים|שערות גוף|מחושים","להרחיק בעל חיים שמנסה לפגוע בה"],
        ["🐰","ארנב","אוזניים ארוכות","לשמוע סכנה","לקפוץ מהר|להסתתר|להרגיש מכשולים","רגליים אחוריות חזקות|פרווה בצבע הסביבה|שפם","לשמוע טורף מתקרב"],
        ["🐰","ארנב","רגליים אחוריות חזקות","לקפוץ מהר","לשמוע סכנה|להסתתר|להרגיש מכשולים","אוזניים ארוכות|פרווה בצבע הסביבה|שפם","לברוח במהירות מטורף"],
        ["🐢","צב","שריון","להגן עליו מפני סכנה","לשחות|לנשוך מזון|להסתתר","רגליים חזקות|מקור קשה|צבעי הסוואה","להגן על הגוף כשיש סכנה"],
        ["🐢","צב","רגליים חזקות","ללכת ולשחות","להגן מפני סכנה|לנשוך מזון|להסתתר","שריון|מקור קשה|צבעי הסוואה","להתקדם ביבשה ובמים"],
        ["🦔","קיפוד","קוצים","להגן מפני טורפים","למצוא מזון|לרחרח סכנה|ללכת בחושך","אף רגיש|חוש ריח טוב|עיניים המותאמות לחושך","להתגונן כששועל מתקרב"],
        ["🦌","אייל","קרניים","להתגונן ולהרשים איילים אחרים","לרוץ מהר|לשמוע סכנה|להסתתר","רגליים ארוכות|אוזניים גדולות|פרווה חומה","להתמודד עם אייל אחר"],
        ["🐻","דוב","פרווה עבה","לחמם את הגוף כשקר","לתפוס מזון|ללכת בשלג|למצוא אוכל","טפרים חזקים|כפות רחבות|חוש ריח טוב","להישאר חם בחורף"],
        ["🦓","זברה","פסים","להרחיק חרקים עוקצים","לרוץ מהר|לשמוע סכנה|לאכול עשב","רגליים חזקות|אוזניים גדולות|שיניים שטוחות","להפחית עקיצות"],
        ["🐦","נקר","מקור חזק","לנקר בגזעי עצים ולמצוא מזון","להיצמד לעץ|לתפוס חרקים|לשמור על שיווי משקל","טפרים חזקים|לשון ארוכה|זנב תומך","להוציא חרקים מתוך גזע"],
        ["🦎","זיקית","לשון ארוכה","לתפוס חרקים","להסתתר|לטפס על ענפים|לראות לכל הכיוונים","צבעי הסוואה|זנב נאחז|עיניים נעות בנפרד","לתפוס חרק מרחוק"],
        ["🦫","בונה","זנב שטוח","לשחות ולתקשר במים","לכרסם עצים|להישאר יבש|לבנות סכר","שיניים חזקות|פרווה שומנית|כפות קדמיות","להכות במים כדי להזהיר בונים אחרים"],
        ["🦊","שועל השלג","פרווה לבנה","להסתתר בשלג","לשמור על חום הגוף|ללכת על שלג|לשמוע טרף","פרווה עבה|כפות רחבות|אוזניים חדות","לא להתבלט בשלג"],
        ["🐬","דולפין","סנפירים","לשחות ולשנות כיוון","לנשום מעל המים|למצוא דגים|להגן על העור","פתח נשימה|הד קולי|עור חלק","לפנות במהירות במים"]
      ];
      const realLevel=clamp(level,1,5);
      const feminineSubjects=new Set(["דבורה","לטאה","ג'ירפה","זברה","זיקית","פרת משה רבנו","חיפושית","שושנת המים"]);
      return facts.slice(0,30).map(([icon,animal,trait,correct,wrong,traits,goal])=>{
        const functions=wrong.split("|");
        const featureChoices=traits.split("|");
        if(realLevel===4) return make(`איזו התאמה עוזרת ל${animal} ${goal}?`,trait,shuffle([trait,...featureChoices]),icon,{skill:"התאמה לסביבה",type:"בוחרים התאמה מתאימה"});
        if(realLevel===5){
          const feminine=feminineSubjects.has(animal);
          return make(`${animal} ${feminine?"צריכה":"צריך"} ${goal}. איזו התאמה תעזור ל${feminine?"ה":"ו"} במיוחד?`,trait,shuffle([trait,...featureChoices]),icon,{skill:"התאמה לסביבה",type:"מסיקים התאמה ממצב"});
        }
        return make(`מה התפקיד של ${trait} אצל ${animal}?`,correct,shuffle([correct,...functions.slice(0,realLevel===1?1:realLevel===2?2:3)]),icon,{skill:"התאמה לסביבה",type:`תכונה ותפקיד — רמה ${realLevel}`});
      });
    }
    if(kind==="adaptations"){const data=[
      ["🐫","למה משמשת הדבשת של הגמל?","לשרוד במדבר","לשמור על חום הגוף|למאגר מים במדבר|להפחיד אויבים"],["🐧","למה משמשת שכבת השומן של הפינגווין?","לשמור על חום הגוף","לשחות למרחקים ארוכים|להגן עליו מפני אויבים|לשרוד כשאין מזון"],["🦆","למה משמשים קרומי השחייה של הברווז?","לשחות","להגן על הרגליים מפני פגיעה|כדי שיוכל לישון אפילו במים|לחמם את הגוזלים"],["🦎","למה משמשים צבעי ההסוואה של הלטאה?","להסתתר","להפחיד אויבים|למצוא חן בעיני בני זוג|למצוא חן בעיני בנות זוג"],["🦉","למה משמשות העיניים הגדולות של הינשוף?","לראות היטב בלילה","להפחיד אויבים|לראות היטב ביום|להיראות יפה יותר"],["🐟","למה משמשים הזימים של הדג?","לנשום במים","לנשום מחוץ למים|להגן עליו|לחמם את הדגיגונים"],["🦒","למה משמש הצוואר הארוך של הג'ירפה?","להגיע לעלים גבוהים","לשתות בלי להיכנס למים|להיראות יפה יותר|לראות למרחוק"],["🐘","למה משמש החדק של הפיל?","לשתות ולאסוף עשבים ופירות","להשמיע קולות אזהרה חזקים|לחבק את הפילפילונים|לשרוד בערבה"],["🐝","למה משמשות הכנפיים של הדבורה?","לעוף מפרח לפרח","לקרר את הגוף כשחם|להגן על הדבורים הקטנות|לחמם את הגוף כשקר"],["🐰","למה משמשות האוזניים הארוכות של הארנב?","לשמוע סכנה","לקרר את הגוף כשחם|לחמם את הגוף כשקר|לחמם את הארנבונים"],
      ["🐢","למה משמש השריון של הצב?","להגן עליו מפני סכנה","לחמם את הצבונים|להיראות יפה יותר|לאגור מים"],["🦔","למה משמשים הקוצים של הקיפוד?","להגן עליו מפני טורפים","לחמם את הקיפודונים|לשמור על חום הגוף|לקרר את הגוף כשחם"],["🦌","למה משמשות הקרניים של האייל?","להתגונן ולהרשים איילים אחרים","לשמור על חום הגוף|לאגור מים|לחפור בחול"],["🐻","למה משמשת הפרווה העבה של הדוב?","לחמם את הגוף כשקר","לאגור מזון|לאגור מים|לקרר את הגוף כשחם"],["🦓","למה משמשים הפסים של הזברה?","להגן עליה מפני חרקים עוקצים","זו הפיג'מה שלה|לבלבל טורפים|להיראות יפה"],["🐦","למה משמש המקור החזק של הנקר?","לנקר בגזעי עצים ולמצוא מזון","להגנה מפני אויבים|לשתות מים|להיראות יפה"],["🦆","למה משמש המקור הרחב של הברווז?","לסנן מזון מן המים","לשחייה|לשתיית מים|לליטוף הברווזונים"],["🦎","למה משמשת הלשון הארוכה של הזיקית?","לתפוס חרקים","לשתות מים|ללקק את הזיקיות הקטנות|לנקות את הגוף"],["🐜","למה משמשת הלשון הארוכה של דב הנמלים?","לתפוס נמלים וטרמיטים","להגיע לצוף שבתוך פרחים|לשתות מים|לשמירה על חום הגוף"],["🦚","למה משמש הזנב המרשים של הטווס?","להרשים טווסים אחרים","לקרר את הגוף|להגנה מפני אויבים|לחמם את הטווסונים"],
      ["🦫","למה משמש הזנב השטוח של הבונה?","לשחות ולתקשר במים","להגנה מפני אויבים|לבניית סכרים במים|לחימום הגוף"],["🦩","למה משמשות הרגליים הארוכות של הפלמינגו?","לעמוד וללכת במים רדודים","להגנה מפני אויבים|לעוף יותר טוב|לחמם את הגוזלים"],["🦊","למה משמשת הפרווה הלבנה של שועל השלג?","להסתתר בשלג","לשמור על חום הגוף|להיראות יפה|להגנה מפני השמש"],["🐬","למה משמשים סנפירי הדולפין?","לשחות ולשנות כיוון במים","לחימום הדולפינים הקטנים|לזחול על היבשה|לקירור הגוף"],["🦭","למה משמשת שכבת השומן של כלב הים?","לשמור על חום הגוף במים קרים","לאגור מזון|לאגור מים|לחימום כלבלבי הים"],["🦅","למה משמשים הטפרים החזקים של הנשר?","לתפוס מזון","לעוף יותר טוב|לליטוף הגוזלים|לעמידה יציבה על האדמה"],["🐻‍❄️","למה משמשות הכפות הרחבות של דוב הקוטב?","ללכת על שלג ולשחות","לטפס על עצים|לחימום הדובונים|לשמור על חום הגוף"],["🌵","למה משמשים הקוצים של הקקטוס?","להגן עליו ולצמצם איבוד מים","לצמוח גבוה מבלי להתכופף|לפזר את הזרעים|למשוך חרקים"],["🪷","למה משמשים העלים הרחבים של שושנת המים?","לקלוט כמה שיותר אור שמש","לשאת את הפרחים|למשוך דבורים|להגנה מפני דגים"]
    ];return repeatPool(data.map(([icon,q,correct,wrong])=>make(q,correct,shuffle([correct,...wrong.split("|")]),icon,{skill:"התאמה לסביבה",type:"תכונה ותפקיד"})));}
    if(kind==="causeEffect"){
      const rows=[
        ["ירד גשם חזק","נוצרו שלוליות בחצר",["החצר התייבשה","ירד שלג בחצר","התחמם מאוד בחוץ"],["השמש ייבשה את החצר","הילדים טאטאו את החצר","רוח חזקה העיפה עלים"],"החצר מלאה שלוליות ואנשים מחזיקים מטריות"],
        ["דני יצא בלי מעיל ביום קר","היה לדני קר",["לדני היה חם מאוד","דני נרטב בים","דני הרגיש שבע"],["דני לבש מעיל עבה","דני ישב ליד תנור","דני שתה שוקו חם"],"דני רועד ומחפש את המעיל שלו"],
        ["הניחו קוביית קרח בשמש","קוביית הקרח נמסה",["קוביית הקרח קפאה יותר","קוביית הקרח גדלה","קוביית הקרח הפכה לשלג"],["הכניסו את הקרח למקפיא","הניחו את הקרח בשלג","עטפו את הקרח בשמיכה"],"על הצלחת נשארו מים במקום קוביית קרח"],
        ["הכניסו מים למקפיא","המים קפאו",["המים התחממו","המים התאדו","המים הפכו למיץ"],["חיממו את המים בסיר","הניחו את המים בשמש","ערבבו את המים בכף"],"בבקבוק המים היו גושי קרח"],
        ["לא השקו את העציץ זמן רב","הצמח נבל",["הצמח צמח מהר","הצמח פרח מיד","הצמח הפך לעץ"],["השקו את העציץ כל יום","הניחו את העציץ ליד מים","דאגו לאדמה לחה"],"עלי העציץ שמוטים והאדמה יבשה"],
        ["השקו את הצמח ודאגו לאור שמש","הצמח גדל",["הצמח התייבש","הצמח קפא","הצמח נשבר"],["לא השקו את הצמח","השאירו את הצמח בחושך","חתכו את גבעול הצמח"],"הצמח הוציא עלים חדשים והיה גבוה יותר"],
        ["כיבו את האור בחדר","החדר החשיך",["החדר התבהר","החדר התחמם מאוד","החדר התמלא מים"],["הדליקו מנורה","פתחו את התריסים ביום","הדליקו פנס"],"אי אפשר היה לראות היטב בחדר"],
        ["פתחו חלון ביום סוער","נכנסה רוח לחדר",["החדר התחמם מאוד","החלון נעלם","נכנס שלג לחדר"],["סגרו את החלון","סגרו את התריסים","כיבו את המאוורר"],"הווילון זז והניירות על השולחן התעופפו"],
        ["בלון נגע בקוץ","הבלון התפוצץ",["הבלון התמלא באוויר","הבלון התכווץ","הבלון הפך לכדור"],["ניפחו את הבלון","קשרו את הבלון","החזיקו את הבלון ביד"],"נשמע קול חזק ונשארו חתיכות בלון"],
        ["שחררו כדור מגובה","הכדור נפל למטה",["הכדור נשאר באוויר","הכדור עלה למעלה","הכדור נעלם"],["החזיקו את הכדור ביד","הניחו את הכדור על שולחן","תפסו את הכדור"],"הכדור הגיע לרצפה אחרי שהיה גבוה"],
        ["כוס מיץ נפלה על הרצפה","המיץ נשפך",["המיץ קפא","המיץ הפך לעוגה","המיץ נעלם"],["מישהו שתה את המיץ מהכוס","מישהו שטף את הרצפה והשאיר את הכוס ליד","מישהו הניח כוס ריקה על הרצפה"],"הרצפה הייתה רטובה ולידה כוס ריקה"],
        ["יצאו בגשם בלי מטרייה","הבגדים נרטבו",["הבגדים התייבשו","הבגדים התחממו","הבגדים הפכו לקטנים"],["לקחו מטרייה","לבשו מעיל גשם","נשארו במקום מקורה"],"המעיל מטפטף מים והנעליים רטובות"],
        ["הלכו בבוץ","הנעליים התלכלכו",["הנעליים התייבשו","הנעליים נצבעו","הנעליים נעלמו"],["הלכו על מדרכה יבשה","נעלו מגפיים נקיים בבית","ניקו את הנעליים"],"על הסוליות יש בוץ"],
        ["חיכו לפני שאכלו מרק חם","המרק התקרר",["המרק קפא","המרק נעלם","המרק הפך למים קרים"],["המשיכו לחמם את המרק","הכניסו את המרק למיקרוגל","כסו את המרק היטב"],"אפשר היה לאכול את המרק בלי להיכוות"],
        ["למדה היטב למבחן","הבינה את החומר טוב יותר",["שכחה את כל החומר","הגיעה מאוחר לבית הספר","המחברת נעלמה"],["לא פתחה את הספר","שיחקה בזמן הלמידה","הפסיקה ללמוד מיד"],"במבחן ידעה לענות על השאלות"],
        ["הלכה לישון מאוחר מאוד","הייתה עייפה בבוקר",["הייתה מלאת מרץ","הייתה רעבה מאוד","הייתה רטובה"],["הלכה לישון מוקדם","נחה בצהריים","ישנה מספיק שעות"],"בבוקר היא פיהקה והתקשתה להתעורר"],
        ["חיברו טלפון למטען","הסוללה התמלאה",["הסוללה התרוקנה","הטלפון התקרר","הטלפון נרטב"],["הוציאו את הטלפון מהמטען","השתמשו בטלפון שעות","כיבו את הטלפון"],"אחרי זמן מה הופיע בטלפון אחוז סוללה גבוה"],
        ["הכניסו סוללות חדשות לצעצוע","הצעצוע פעל",["הצעצוע נרטב","הצעצוע נשבר","הצעצוע התכווץ"],["הוציאו את הסוללות","השאירו את הצעצוע בלי סוללות","הניחו את הצעצוע בארון"],"כשלחצו על הכפתור הצעצוע התחיל להשמיע קול"],
        ["השאירו את הכביסה בחוץ בזמן הגשם","הכביסה נרטבה",["הכביסה התייבשה לגמרי","הכביסה התחממה מאוד","הכביסה התקפלה מעצמה"],["הכביסה עדיין לא הספיקה להתייבש","נשפכו מים על הכביסה בזמן השקיית העציצים","מישהו כיבס את הבגדים והניח אותם לייבוש"],"בבוקר הכביסה הייתה יבשה. אחר כך ירד גשם, וכשחזרו הביתה היא הייתה רטובה"],
        ["זרעו זרע באדמה והשקו אותו","נבט צמח",["הזרע הפך לאבן","הזרע קפא","הזרע נעלם"],["השאירו את הזרע בשקית","הכניסו את הזרע למקפיא","לא השקו את הזרע"],"מהאדמה יצא עלה קטן"],
        ["כוס זכוכית נפלה לרצפה","הכוס נשברה",["הכוס גדלה","הכוס נמסה","הכוס נהייתה רכה"],["הניחו את הכוס על שולחן","החזיקו את הכוס ביד","שמו את הכוס בארון"],"על הרצפה היו שברי זכוכית"],
        ["ניפחו בלון","הבלון גדל",["הבלון התפוצץ","הבלון התכווץ","הבלון נמס"],["הוציאו אוויר מהבלון","דקרו את הבלון בקוץ","קשרו בלון שכבר מלא"],"הבלון היה גדול ועגול יותר"],
        ["רחצו ידיים במים ובסבון","הידיים התנקו",["הידיים התלכלכו יותר","הידיים קפאו","הידיים נעלמו"],["שיחקו בחול","צבעו בצבעי גואש","נגעו באדמה"],"לא נשאר לכלוך על הידיים"],
        ["השאירו גלידה בשמש","הגלידה נמסה",["הגלידה קפאה יותר","הגלידה גדלה","הגלידה הפכה לעוגייה"],["הכניסו את הגלידה למקפיא","שמו את הגלידה בצידנית","הניחו את הגלידה בשלג"],"הגלידה החלה לטפטף מהגביע"],
        ["העיפו עפיפון ביום עם רוח","העפיפון עלה לשמיים",["העפיפון שקע במים","העפיפון קפא","העפיפון הפך לכדור"],["ניסו להעיף עפיפון בלי רוח","הניחו את העפיפון על הרצפה","קיפלו את העפיפון"],"העפיפון היה גבוה מעל הראש"],
        ["נתנו לכלב אוכל","הכלב הפסיק להיות רעב",["הכלב נעשה צמא מאוד","הכלב נרטב","הכלב נרדם מיד"],["לקחו מהכלב את האוכל","שמו את האוכל רחוק ממנו","נתנו לכלב רק צעצוע"],"הכלב אכל מהקערה והפסיק לחפש אוכל"],
        ["אפו עוגה בתנור","העוגה נאפתה",["העוגה קפאה","העוגה נרטבה","העוגה נעלמה"],["הכניסו את העוגה למקרר","השאירו את הבלילה בקערה","שפכו מים על העוגה"],"הבלילה הפכה לעוגה חמה"],
        ["ערבבו אדום וצהוב","נוצר צבע כתום",["נוצר צבע ירוק","נוצר צבע סגול","נוצר צבע כחול"],["ערבבו כחול וצהוב","ערבבו אדום וכחול","השתמשו רק בצהוב"],"על הדף הופיע צבע כתום"],
        ["שמו חלב במקרר","החלב נשאר קר",["החלב התחמם","החלב קפא מיד","החלב הפך למיץ"],["השאירו את החלב בשמש","שמו את החלב ליד תנור","הוציאו את החלב מהמקרר"],"כשמזגו את החלב הוא היה קר"],
        ["סגרו את החלון בזמן גשם","החדר נשאר יבש",["החדר התמלא מים","החדר התחמם מאוד","החדר החשיך"],["השאירו את החלון פתוח","פתחו את התריס בגשם","שפכו מים ליד החלון"],"בחוץ ירד גשם, אבל ליד החלון לא היו טיפות"],
      ];
      // Every distractor stays in the same real-world context as its question.
      // The earlier bank included disconnected answers such as things vanishing
      // or changing into unrelated objects, which did not teach cause and effect.
      const closeEffects=[
        ["החצר התייבשה בשמש","הגשם הפסיק מיד","הילדים נשארו מתחת לגג"],
        ["היה לדני חם","דני התחיל להזיע","דני לא הרגיש קור"],
        ["הקרח הפך לאפור","הקרח קירר את אדן החלון","הקרח התחמם"],
        ["המים נשארו נוזליים","המים התחממו","נוצרו אדים מעל המים"],
        ["העלים נשארו זקופים","הצמח קיבל הרבה מים","הצמח פרח"],
        ["הצמח התייבש","העלים נבלו","הצמח נשאר בלי אור"],
        ["היה ליקוי חמה","היה אמצע הלילה","היה ליקוי ירח"],
        ["החדר נשאר שקט","הווילון לא זז","החלון נשאר סגור"],
        ["הבלון נשאר שלם","הבלון התמלא באוויר","הבלון התכווץ"],
        ["הכדור נשאר ביד","הכדור הונח על שולחן","הכדור נתפס"],
        ["הכוס נשארה מלאה","המיץ נשאר בכוס","הרצפה נשארה יבשה"],
        ["הבגדים נשארו יבשים","הגשם נפסק","נפתחו מטריות"],
        ["דרכו בשלולית","שיחקו בארגז החול","שיחקו כדורגל על הדשא"],
        ["המרק נשאר חם","חיממו את המרק שוב","המרק היה חם מדי לאכילה"],
        ["היא התקשתה לענות","היא שכחה חלק מהחומר","היא לא הספיקה ללמוד"],
        ["היא התעוררה בקלות","היא הייתה ערנית בבוקר","היא ישנה מספיק שעות"],
        ["הסוללה התרוקנה","הטלפון נשאר בלי טעינה","האחוז בסוללה ירד"],
        ["הצעצוע לא פעל","הצעצוע נשאר כבוי","לא נשמע קול מהצעצוע"],
        ["הכביסה נשארה רטובה","הכביסה נרטבה בגשם","הבגדים לא הספיקו להתייבש"],
        ["הזרע נשאר באדמה","הזרע לא קיבל מים","לא יצא נבט מהאדמה"],
        ["הכוס נשארה שלמה","הכוס הונחה בעדינות","לא היו שברים על הרצפה"],
        ["הבלון התכווץ","הבלון נשאר באותו גודל","יצא אוויר מהבלון"],
        ["הידיים נשארו מלוכלכות","נשאר צבע על הידיים","לא השתמשו בסבון"],
        ["הגלידה נשארה קפואה","הגלידה הוחזרה למקפיא","הגלידה הייתה בצידנית"],
        ["העפיפון נשאר על הקרקע","לא הייתה רוח","העפיפון לא עלה גבוה"],
        ["הכלב המשיך לחפש אוכל","הכלב נשאר רעב","הקערה נשארה ריקה"],
        ["הבלילה נשארה נוזלית","העוגה לא נכנסה לתנור","העוגה נשארה לא אפויה"],
        ["נוצר צבע ירוק","נוצר צבע סגול","הצבע נשאר צהוב"],
        ["החלב התחמם","החלב נשאר מחוץ למקרר","החלב עמד בשמש"],
        ["טיפות גשם נכנסו לחדר","הרצפה ליד החלון נרטבה","החלון נשאר פתוח"],
      ];
      const closeCauses=[
        ["השמש ייבשה את החצר","הילדים אספו עלים מהחצר","השער לחצר נסגר"],
        ["דני לבש מעיל עבה","דני שתה שוקו חם","דני נכנס למקום מחומם"],
        ["הקרח היה ליד חלון פתוח","הקרח היה בתוך צידנית","הקרח היה מונח בצל"],
        ["הניחו את המים בשמש","חיממו את המים בסיר","השאירו את המים בחדר חם"],
        ["השקו את העציץ כל יום","הניחו את העציץ ליד מים","דאגו שהאדמה תהיה לחה"],
        ["לא השקו את הצמח","השאירו את הצמח בחושך","חתכו את גבעול הצמח"],
        ["היה ליקוי חמה","היה אמצע הלילה","היה ליקוי ירח"],
        ["סגרו את החלון","סגרו את התריסים","כיבו את המאוורר"],
        ["ניפחו את הבלון","קשרו את הבלון","הרחיקו את הבלון מהקוץ"],
        ["החזיקו את הכדור ביד","הניחו את הכדור על שולחן","תפסו את הכדור"],
        ["שתו את המיץ","סגרו את הכוס היטב","הניחו את הכוס על מגש"],
        ["לקחו מטרייה","לבשו מעיל גשם","נשארו במקום מקורה"],
        ["דרכו בשלולית","שיחקו בארגז החול","שיחקו כדורגל על הדשא"],
        ["המשיכו לחמם את המרק","הכניסו את המרק למיקרוגל","כסו את המרק כדי שישמור על החום"],
        ["לא פתחה את הספר","שיחקה בזמן הלמידה","הפסיקה ללמוד מיד"],
        ["הלכה לישון מוקדם","נחה בצהריים","ישנה מספיק שעות"],
        ["הוציאו את הטלפון מהמטען","השתמשו בטלפון שעות","השאירו את הטלפון בלי מטען"],
        ["הוציאו את הסוללות","השאירו את הצעצוע בלי סוללות","לחצו על הכפתור בלי סוללות"],
        ["הניחו את הכביסה בגשם","הרטיבו את הכביסה","השאירו את הכביסה בתוך מים"],
        ["השאירו את הזרע בשקית","לא השקו את הזרע","הכניסו את הזרע למקפיא"],
        ["הניחו את הכוס על שולחן","החזיקו את הכוס ביד","שמו את הכוס בארון"],
        ["הוציאו אוויר מהבלון","השאירו את הבלון בלי לנפח","קשרו בלון שכבר מלא"],
        ["שיחקו בחול","צבעו בצבעי גואש","נגעו באדמה"],
        ["הכניסו את הגלידה למקפיא","שמו את הגלידה בצידנית","הניחו את הגלידה בשלג"],
        ["ניסו להעיף עפיפון בלי רוח","הניחו את העפיפון על הרצפה","קיפלו את העפיפון"],
        ["לקחו מהכלב את האוכל","שמו את האוכל רחוק ממנו","נתנו לכלב רק צעצוע"],
        ["הכניסו את העוגה למקרר","השאירו את הבלילה בקערה","הוציאו את העוגה מהתנור מוקדם"],
        ["ערבבו כחול וצהוב","ערבבו אדום וכחול","השתמשו רק בצהוב"],
        ["השאירו את החלב בשמש","שמו את החלב ליד תנור","הוציאו את החלב מהמקרר"],
        ["השאירו את החלון פתוח","פתחו את התריס בגשם","שפכו מים ליד החלון"],
      ];
      const realLevel=clamp(level,1,5);
      return rows.map(([cause,effect,_wrongEffects,_wrongCauses,clue],index)=>{
        const wrongEffects=closeEffects[index];
        const wrongCauses=closeCauses[index];
        if(realLevel===4) return make(`מה יכול לגרום לכך ש${effect}?`,cause,options(cause,wrongCauses,4),"",{skill:"סיבה ותוצאה",type:"מוצאים סיבה מתאימה"});
        if(realLevel===5) return make(`${clue}. מה הסיבה הסבירה ביותר לכך?`,cause,options(cause,wrongCauses,4),"",{skill:"סיבה ותוצאה",type:"מסיקים סיבה ממצב"});
        return make(`מה צפוי לקרות אם ${cause}?`,effect,options(effect,wrongEffects,realLevel===1?2:realLevel===2?3:4),"",{skill:"סיבה ותוצאה",type:`תוצאה מתאימה — רמה ${realLevel}`});
      });
    }
    if(kind==="causeEffect"){
      const data=[
        {cause:"משקים את הצמח",effect:"הצמח גדל",effects:["הצמח נובל","הצמח קופא","הצמח נשבר"],question:"איזו פעולה יכולה לגרום לצמח לגדול?",causes:["לא משקים את הצמח","חותכים את הגבעול","מניחים את הצמח במקפיא"]},
        {cause:"מכניסים מים למקפיא",effect:"המים קופאים",effects:["המים מתחממים","המים נעלמים","המים הופכים לאדים"],question:"איזו פעולה יכולה לגרום למים לקפוא?",causes:["מחממים מים בסיר","מניחים מים בשמש","מערבבים מים בכף"]},
        {cause:"מחממים קרח",effect:"הקרח נמס",effects:["הקרח מתקשה","הקרח גדל","הקרח משנה צבע"],question:"איזו פעולה יכולה לגרום לקרח להימס?",causes:["מכניסים קרח למקפיא","מניחים קרח בשלג","עוטפים קרח בצמר"]},
        {cause:"מכבים את האור",effect:"החדר מחשיך",effects:["החדר מתבהר","החדר מתחמם","החדר מתמלא מים"],question:"איזו פעולה יכולה לגרום לחדר להחשיך?",causes:["מדליקים מנורה","פותחים את הווילון","פותחים חלון ביום"]},
        {cause:"מניחים חפץ בשמש",effect:"החפץ מתחמם",effects:["החפץ קופא","החפץ נרטב","החפץ נעלם"],question:"איזו פעולה יכולה לגרום לחפץ להתחמם?",causes:["מכניסים את החפץ למקרר","עוטפים את החפץ בקרח","מניחים את החפץ בצל"]},
        {cause:"לא משקים את הצמח",effect:"הצמח נובל",effects:["הצמח גדל מהר","הצמח פורח מיד","הצמח קופא"],question:"איזו פעולה יכולה לגרום לצמח לנבול?",causes:["משקים את הצמח","מניחים את הצמח בכוס מים","מטפלים בצמח כל יום"]},
        {cause:"מערבבים כחול וצהוב",effect:"נוצר צבע ירוק",effects:["נוצר צבע סגול","נוצר צבע כתום","נוצר צבע שחור"],question:"איזו פעולה יכולה ליצור צבע ירוק?",causes:["מערבבים אדום וכחול","מערבבים אדום וצהוב","צובעים רק בצהוב"]},
        {cause:"פותחים חלון",effect:"נכנס אוויר לחדר",effects:["החדר מחשיך","החדר מתמלא מים","החלון נעלם"],question:"איזו פעולה יכולה לגרום לאוויר להיכנס לחדר?",causes:["סוגרים את החלון","מכסים את החלון","סוגרים את הדלת"]},
        {cause:"משחררים כדור מגובה",effect:"הכדור נופל למטה",effects:["הכדור נשאר באוויר","הכדור קופא","הכדור נעלם"],question:"איזו פעולה יכולה לגרום לכדור ליפול מגובה?",causes:["מחזיקים את הכדור ביד","מניחים את הכדור על הרצפה","מגלגלים את הכדור על שולחן"]},
        {cause:"זורעים זרעים באדמה ומשקים",effect:"יכולים לצמוח נבטים",effects:["הזרעים הופכים לקרח","הזרעים נעלמים","הזרעים הופכים לאבנים"],question:"איזו פעולה יכולה לגרום לנבטים לצמוח?",causes:["מניחים זרעים על שולחן","מכניסים זרעים למקפיא","שמים זרעים בקופסה סגורה"]}
      ],realLevel=clamp(level,1,5),active=data.slice(0,realLevel===5?data.length:Math.min(data.length,2+realLevel*2));
      return repeatPool(active.flatMap(item=>realLevel<=2
        ?[make(`מה יכול לקרות אם ${item.cause}?`,item.effect,options(item.effect,item.effects),"",{skill:"סיבה ותוצאה",type:"חושבים כמו מדענים"})]
        :[make(`מה יכול לקרות אם ${item.cause}?`,item.effect,options(item.effect,item.effects),"",{skill:"סיבה ותוצאה",type:"חושבים כמו מדענים"}),make(item.question,item.cause,options(item.cause,item.causes),"",{skill:"סיבה ותוצאה",type:"בוחרים סיבה מתאימה"})]));
    }
    return [];
  }

  function build(gameId,level,profile){
    const game=catalog.find(g=>g.id===gameId);
    if(!game)return [];
    level=clamp(Number(level)||profile?.age||3,1,15);
    let pool=[];
    switch(game.kind){
      case "count": pool=countQuestions(level); break;
      case "numberQuantity": pool=numberQuantity(level); break;
      case "bigSmall": pool=bigSmall(level); break;
      case "moreGroups": pool=moreGroups(level); break;
      case "pattern": pool=patterns(level); break;
      case "sequence": pool=sequences(level); break;
      case "subtraction": pool=arithmetic(level,"subtract"); break;
      case "numberLine": pool=numberLine(level); break;
      case "shapes": pool=shapeQuestions(level); break;
      case "addition": pool=arithmetic(level,"add"); break;
      case "clock": pool=clockQuestions(level); break;
      case "multiplication": pool=multiplication(level); break;
      case "multiplicationNumbers": pool=multiplicationNumbers(level); break;
      case "wordProblems": pool=wordProblems(level); break;
      case "fractions": pool=fractions(level); break;
      case "memoryEnglish": pool=memoryEnglish(level); break;
      case "sentenceEnglish": pool=sentenceEnglish(level); break;
      case "uppercase": case "letterPicture": case "firstLetter": case "imageWord": case "dragEnglish": case "listenEnglish": case "missingEnglish": case "englishCategories": case "buildEnglish": case "crosswordEnglish": pool=wordQuestions(game.kind,level); break;
      case "samePicture": case "hebrewLetter": case "startsHebrew": case "hebrewWordPicture": case "missingHebrew": case "syllables": pool=hebrewRecognition(game.kind,level); break;
      case "alphabetOrder": pool=alphabetOrder(level); break;
      case "inference": case "findInfo": case "storyTitle": case "trueFalse": pool=readingQuestions(game.kind,level); break;
      case "eventOrder": pool=eventOrder(level); break;
      case "sentenceHebrew": pool=sentenceHebrew(level); break;
      case "wordSearch": pool=wordSearch(level); break;
      default: pool=natureQuestions(game.kind,level);
    }
    return pool.map((question,index)=>({...question,id:`${gameId}-${level}-${index}`,gameId,skill:question.skill||game.name}));
  }

  window.KIDS_GAMES = {catalog,build};
})();
