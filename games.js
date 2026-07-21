(() => {
  const catalog = [
    {id:"count",subject:"math",minAge:3,name:"כמה עצמים יש?",icon:"🔢",desc:"סופרים עצמים ובוחרים מספר",kind:"count"},
    {id:"number-quantity",subject:"math",minAge:3,name:"מספר וכמות",icon:"🍎",desc:"מתאימים מספר לקבוצת עצמים",kind:"numberQuantity"},
    {id:"big-small",subject:"thinking",minAge:3,name:"גדול וקטן",icon:"↕️",desc:"משווים גדלים",kind:"bigSmall"},
    {id:"more-groups",subject:"math",minAge:4,maxAge:5,name:"איפה יש יותר?",icon:"⚖️",desc:"משווים בין שתי כמויות",kind:"moreGroups"},
    {id:"visual-pattern",subject:"thinking",minAge:5,name:"דפוסים",icon:"🔴",desc:"מגלים מה מגיע בהמשך",kind:"pattern"},
    {id:"number-sequence",subject:"math",minAge:5,name:"רצף מספרים",icon:"➡️",desc:"משלימים מספר חסר ברצף",kind:"sequence"},
    {id:"picture-subtraction",subject:"math",minAge:5,name:"חיסור",icon:"➖",desc:"מורידים ומחשבים",kind:"subtraction"},
    {id:"number-line",subject:"math",minAge:5,name:"ציר המספרים",icon:"📏",desc:"מוצאים את המקום הנכון",kind:"numberLine"},
    {id:"shapes",subject:"math",minAge:6,name:"מגלים צורות",icon:"🔷",desc:"שמות, צלעות וקודקודים",kind:"shapes"},
    {id:"addition",subject:"math",minAge:6,name:"חיבור",icon:"➕",desc:"מחברים מספרים בהדרגה",kind:"addition"},
    {id:"clock",subject:"thinking",minAge:6,name:"שעון",icon:"🕒",desc:"קוראים שעות ודקות",kind:"clock"},
    {id:"multiplication",subject:"math",minAge:7,name:"כפל בקבוצות",icon:"✖️",desc:"סופרים קבוצות שוות",kind:"multiplication"},
    {id:"word-problems",subject:"math",minAge:7,name:"בעיות מילוליות",icon:"🧠",desc:"פותרים בעיה מתוך סיפור",kind:"wordProblems"},
    {id:"fractions",subject:"math",minAge:7,name:"איזה חלק זה?",icon:"🍕",desc:"מזהים חלקים צבועים",kind:"fractions"},

    {id:"uppercase-letter",subject:"english",minAge:6,name:"אות גדולה",icon:"🔠",desc:"מזהים CAPITAL LETTERS",kind:"uppercase",disabled:true},
    {id:"letter-picture",subject:"english",minAge:6,name:"אות ומילה",icon:"🅰️",desc:"מתאימים אות למילה",kind:"letterPicture"},
    {id:"picture-word-memory",subject:"english",minAge:6,name:"זיכרון תמונה ומילה",icon:"🧠",desc:"מוצאים זוגות מתאימים",kind:"memoryEnglish"},
    {id:"first-letter",subject:"english",minAge:6,name:"האות הראשונה",icon:"🔤",desc:"בוחרים באיזו אות המילה מתחילה",kind:"firstLetter"},
    {id:"image-word",subject:"english",minAge:6,name:"תמונה ומילה",icon:"🖼️",desc:"בוחרים מילה מתוך ארבע אפשרויות",kind:"imageWord"},
    {id:"drag-word-picture",subject:"english",minAge:6,name:"מילה ותמונה",icon:"🖼️",desc:"לוחצים על התמונה המתאימה למילה",kind:"dragEnglish"},
    {id:"listen-animal",subject:"english",minAge:6,name:"לחצו ושמעו",icon:"🔊",desc:"שומעים שם של בעל חיים ובוחרים תמונה",kind:"listenEnglish",disabled:true},
    {id:"missing-letter-en",subject:"english",minAge:6,name:"אות חסרה",icon:"❓",desc:"משלימים אות חסרה במילה",kind:"missingEnglish"},
    {id:"word-categories",subject:"english",minAge:6,name:"קטגוריות מילים",icon:"🗂️",desc:"ממיינים חיות, אוכל וחפצים",kind:"englishCategories"},
    {id:"build-word-en",subject:"english",minAge:7,name:"בונים מילה",icon:"🧱",desc:"מרכיבים מילה מאותיות",kind:"buildEnglish"},
    {id:"sentence-order-en",subject:"english",minAge:7,name:"בונים משפט",icon:"💬",desc:"מסדרים מילים למשפט קצר",kind:"sentenceEnglish"},

    {id:"same-picture",subject:"thinking",minAge:3,maxAge:4,name:"תמונות זהות",icon:"🖼️",desc:"מוצאים את התמונה הזהה",kind:"samePicture"},
    {id:"hebrew-letter",subject:"reading",minAge:4,name:"זיהוי אות",icon:"אבג",desc:"מזהים אות עברית",kind:"hebrewLetter",disabled:true},
    {id:"starts-hebrew",subject:"reading",minAge:5,name:"מתחיל באות",icon:"אבג",desc:"מוצאים מילה שמתחילה באות",kind:"startsHebrew"},
    {id:"hebrew-word-picture",subject:"reading",minAge:5,name:"מילה ותמונה",icon:"📖",desc:"מתאימים מילה קצרה לתמונה",kind:"hebrewWordPicture"},
    {id:"alphabet-order",subject:"reading",minAge:6,name:"סדר האותיות",icon:"אבג",desc:"מסדרים אותיות לפי האלף־בית",kind:"alphabetOrder"},
    {id:"missing-letter-he",subject:"reading",minAge:6,name:"אות חסרה במילה",icon:"❓",desc:"משלימים מילה בעברית",kind:"missingHebrew"},
    {id:"syllables",subject:"reading",minAge:6,name:"הברות",icon:"👏",desc:"מחלקים מילה להברות",kind:"syllables",disabled:true},
    {id:"inference",subject:"reading",minAge:6,name:"הסקת מסקנות",icon:"💡",desc:"מבינים רמזים מתוך טקסט",kind:"inference"},
    {id:"event-order",subject:"reading",minAge:6,name:"רצף אירועים",icon:"1️⃣",desc:"מסדרים מה קרה קודם ואחר כך",kind:"eventOrder"},
    {id:"find-info",subject:"reading",minAge:6,name:"איתור מידע",icon:"🔎",desc:"מוצאים פרט מפורש בטקסט",kind:"findInfo",disabled:true},
    {id:"sentence-order-he",subject:"reading",minAge:7,name:"סידור משפט",icon:"💬",desc:"מסדרים מילים למשפט",kind:"sentenceHebrew"},
    {id:"true-false",subject:"reading",minAge:7,name:"נכון או לא נכון",icon:"✅",desc:"קוראים ובודקים טענה",kind:"trueFalse"},
    {id:"story-title",subject:"reading",minAge:7,name:"כותרת לסיפור",icon:"📰",desc:"בוחרים כותרת מתאימה",kind:"storyTitle"},
    {id:"word-search",subject:"reading",minAge:7,name:"תפזורת",icon:"🔍",desc:"מחפשים מילים בתוך רשת אותיות",kind:"wordSearch"},

    {id:"animal-sound",subject:"nature",minAge:3,name:"מי משמיע את הקול?",icon:"🐮",desc:"שומעים קול ובוחרים בעל חיים",kind:"animalSound",disabled:true},
    {id:"odd-one-out",subject:"thinking",minAge:3,name:"מה לא שייך?",icon:"🧩",desc:"מוצאים תמונה יוצאת דופן",kind:"oddOneOut"},
    {id:"habitat",subject:"nature",minAge:4,name:"בית גידול",icon:"🏞️",desc:"מתאימים בעל חיים לסביבה",kind:"habitat"},
    {id:"baby-adult",subject:"nature",minAge:4,name:"גור ובוגר",icon:"🐣",desc:"מתאימים גור לבעל החיים הבוגר",kind:"babyAdult"},
    {id:"living-groups",subject:"nature",minAge:5,name:"חי, צומח או דומם",icon:"🌱",desc:"ממיינים דברים מהעולם",kind:"livingGroups"},
    {id:"plant-food",subject:"nature",minAge:5,name:"מה גדל על הצמח?",icon:"🍎",desc:"מתאימים פרי או ירק לצמח",kind:"plantFood",disabled:true},
    {id:"seasons",subject:"nature",minAge:5,name:"עונות השנה",icon:"🍂",desc:"מתאימים מזג אוויר ופעילות לעונה",kind:"seasons"},
    {id:"life-cycle",subject:"nature",minAge:6,name:"מחזור חיים",icon:"🦋",desc:"מסדרים שלבי התפתחות",kind:"lifeCycle"},
    {id:"plant-parts",subject:"nature",minAge:6,name:"חלקי הצמח",icon:"🌻",desc:"מכירים שורש, גבעול, עלה ופרח",kind:"plantParts"},
    {id:"animal-food",subject:"nature",minAge:6,name:"מה בעלי חיים אוכלים?",icon:"🥕",desc:"מתאימים מזון לבעל חיים",kind:"animalFood"},
    {id:"weather",subject:"nature",minAge:6,name:"מזג אוויר",icon:"🌦️",desc:"מתאימים לבוש ופעילות למזג האוויר",kind:"weather"},
    {id:"food-chain",subject:"nature",minAge:7,name:"שרשרת מזון",icon:"🔗",desc:"מסדרים מי אוכל את מי",kind:"foodChain"},
    {id:"adaptations",subject:"nature",minAge:7,name:"התאמה לסביבה",icon:"🦎",desc:"מגלים כיצד בעלי חיים מסתגלים",kind:"adaptations"},
    {id:"cause-effect",subject:"nature",minAge:7,name:"סיבה ותוצאה",icon:"🧪",desc:"חושבים כמו מדענים",kind:"causeEffect"}
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
    ["🍌","BANANA","B","FOOD"],["🥭","MANGO","M","FOOD"],["🧀","CHEESE","C","FOOD"],["🥁","DRUM","D","OBJECT"]
  ];
  const hebrewWords = [
    ["🐶","כלב","כ"],["🐱","חתול","ח"],["🐟","דג","ד"],["🦁","אריה","א"],["🐘","פיל","פ"],
    ["🌳","עץ","ע"],["🌸","פרח","פ"],["🍎","תפוח","ת"],["🍌","בננה","ב"],["🥕","גזר","ג"],
    ["🏠","בית","ב"],["🚗","מכונית","מ"],["⚽","כדור","כ"],["📕","ספר","ס"],["☀️","שמש","ש"],
    ["🌙","ירח","י"],["🧀","גבינה","ג"],["🥁","תוף","ת"],["🧩","פאזל","פ"],["💎","יהלום","י"]
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
  const countingMaximums = [5,10,15,20,24,27,30,50,100];
  function objectRows(icon,count){
    const rowSize=count>30?10:5,rows=[];
    for(let i=0;i<count;i+=rowSize)rows.push(Array(Math.min(rowSize,count-i)).fill(icon).join(" "));
    return rows.join("\n");
  }

  function countQuestions(level){
    const max=countingMaximums[level-1];
    const out=[];
    pictures.slice(0,clamp(2+level,3,pictures.length)).forEach(icon=>{
      for(let n=1;n<=max;n++)out.push(make("כמה עצמים יש?",String(n),numberOptions(n,level===1?2:4),objectRows(icon,n),{skill:"ספירה",type:"כמה יש?",objectGrid:true}));
    });
    return out;
  }
  function numberQuantity(level){
    const max=countingMaximums[level-1];
    return Array.from({length:max},(_,i)=>{
      const n=i+1,icon=pictures[i%pictures.length];
      const candidates=[n,n-1,n+1,n-2,n+2,n-3,n+3].filter(x=>x>=1&&x<=max);
      const answerCount=level===1?2:4;
      const nums=[n,...shuffle([...new Set(candidates)].filter(x=>x!==n)).slice(0,answerCount-1)];
      for(let extra=1;nums.length<answerCount&&extra<=max;extra++)if(!nums.includes(extra))nums.push(extra);
      const groups=nums.map(x=>objectRows(icon,x));
      return make("מצאו את הכמות המתאימה למספר",groups[nums.indexOf(n)],shuffle(groups),String(n),{skill:"מספר וכמות",type:"מתאימים כמות",word:true,answerObjectGrid:true});
    });
  }
  function bigSmall(level){
    const pairs=[
      ["🐭","🐘"],["🐜","🐻"],["🐇","🦒"],["🐱","🐴"],["🐌","🐋"],["🐞","🦁"],["🐥","🦉"],["🌱","🌳"],["🐞","🐘"],["🐭","🐴"]
    ];
    const groups=[
      [["🐭",1],["🐰",2],["🐱",3],["🐶",4],["🐴",5],["🐘",6]],
      [["🐜",1],["🐞",2],["🐥",3],["🐱",4],["🐻",5],["🦒",6]],
      [["🐌",1],["🐰",2],["🐶",3],["🐴",4],["🦁",5],["🐘",6]],
      [["🐞",1],["🐥",2],["🐰",3],["🐶",4],["🐴",5],["🐘",6]],
      [["🐭",1],["🐱",2],["🐶",3],["🐻",4],["🦁",5],["🦒",6]],
      [["🐜",1],["🐞",2],["🐥",3],["🐰",4],["🐶",5],["🐴",6]]
    ];
    const scalesFor = pairs => Object.fromEntries(pairs.map(([icon,size])=>[icon,size]));
    const pairScale = (small,big) => ({[small]:.52,[big]:1.75});
    const groupScale = group => {
      const max=Math.max(...group.map(x=>x[1])),min=Math.min(...group.map(x=>x[1]));
      return Object.fromEntries(group.map(([icon,size])=>[icon,.48+((size-min)/(max-min||1))*1.5]));
    };
    const useScaledIcons = level < 6;
    const makeCompare=(question,items,correct,extra={})=>make(question,correct,shuffle(items),extra.visual||"",{skill:"גדול וקטן",type:extra.type||"משווים גדלים",imageAnswers:extra.imageAnswers,answerScales:useScaledIcons?extra.answerScales:null,word:extra.word,explain:extra.explain||`התשובה הנכונה היא ${correct}.`});
    const makeOrder=(question,tokens,extra={})=>make(question,tokens.join(" ← "),[],extra.visual||"",{skill:"גדול וקטן",type:extra.type||"מסדרים לפי גודל",mode:"build",tokens:shuffle(tokens),joinWith:" ← ",explain:extra.explain||`הסדר הנכון הוא ${tokens.join(" ← ")}.`});
    const questions=[];
    pairs.forEach(([small,big],i)=>{
      if(level===1){
        questions.push(makeCompare(i%2?"מי קטן יותר?":"מי גדול יותר?",[small,big],i%2?small:big,{imageAnswers:true,answerScales:pairScale(small,big),type:"גדול או קטן"}));
      }
    });
    const groupCountForLevel = () => level >= 7 ? 6 : level >= 6 ? 4 : level >= 4 ? 6 : 4;
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
        const active=group.slice(0,4).sort((a,b)=>a[1]-b[1]).map(x=>x[0]);
        questions.push(makeOrder("סדרו מהקטן לגדול",active,{type:"סדר גודל"}));
        questions.push(makeOrder("סדרו מהגדול לקטן",[...active].reverse(),{type:"סדר גודל"}));
      });
    }
    return repeatPool(questions,24);
  }
  function moreGroups(level){
    const max=clamp(5+level*2,7,24);
    const groupRows=(icon,count)=>Array.from({length:Math.ceil(count/4)},(_,row)=>Array(Math.min(4,count-row*4)).fill(icon).join(" ")).join("\n");
    return Array.from({length:22},(_,i)=>{
      const a=1+(i*3)%max;
      let b=1+(i*5+2)%max;
      if(a===b)b=b%max+1;
      const icon=pictures[i%pictures.length],left=groupRows(icon,a),right=groupRows(icon,b);
      return make("באיזו קבוצה יש יותר?",a>b?left:right,shuffle([left,right]),"",{skill:"השוואה",type:"יותר או פחות",answerObjectGrid:true});
    });
  }
  function patterns(level){
    const configs=[
      {pattern:["🔴","🔵"],pool:["🔴","🔵","🟡","🟢"]},
      {pattern:["⭐","🌙"],pool:["⭐","🌙","☀️","☁️"]},
      {pattern:["🍎","🍐"],pool:["🍎","🍐","🍌","🍓"]},
      {pattern:["🐶","🐱"],pool:["🐶","🐱","🐰","🐻"]},
      {pattern:["🟨","🔺"],pool:["🟨","🔺","🔵","🟢"]},
      {pattern:["🌸","🍃"],pool:["🌸","🍃","🌼","🌳"]},
      {pattern:["🧸","🎈"],pool:["🧸","🎈","🎁","⭐"]},
      {pattern:["🔺","🔵","🟨"],pool:["🔺","🔵","🟨","🟢"]},
      {pattern:["🐶","🐱","🐰"],pool:["🐶","🐱","🐰","🐻"]},
      {pattern:["🍌","🍓","🍎"],pool:["🍌","🍓","🍎","🍐"]}
    ];
    const active=configs.slice(0,clamp(3+level,4,configs.length));
    const maxLength=clamp(3+Math.floor(level/2),3,7);
    const questions=[];
    active.forEach(({pattern,pool})=>{
      for(let length=3;length<=maxLength;length++){
        const seq=Array.from({length},(_,j)=>pattern[j%pattern.length]),correct=pattern[length%pattern.length];
        questions.push(make("מה מגיע עכשיו?",correct,options(correct,pool),"",{skill:"דפוסים",type:"ממשיכים דפוס",patternTiles:[...seq,"?"],explain:`הדפוס חוזר על עצמו: ${pattern.join(" ")}.`}));
      }
      if(level>=6&&pattern.length===2){
        const shifted=[pattern[1],pattern[0]],seq=Array.from({length:maxLength},(_,j)=>shifted[j%shifted.length]),correct=shifted[maxLength%shifted.length];
        questions.push(make("מה מגיע עכשיו?",correct,options(correct,pool),"",{skill:"דפוסים",type:"ממשיכים דפוס",patternTiles:[...seq,"?"],explain:`הדפוס חוזר על עצמו: ${shifted.join(" ")}.`}));
      }
    });
    return repeatPool(questions,Math.max(24,questions.length));
  }
  function sequences(level){
    const steps=level<=2?[1]:level<=4?[1,2]:level<=6?[2,3,5]:[3,4,5,10];
    const out=[];
    steps.forEach(step=>{for(let start=0;start<16;start++){const missingIndex=level>=6?1+(start%3):3,seq=Array.from({length:4},(_,i)=>start+i*step),correct=seq[missingIndex];seq[missingIndex]="?";out.push(make("איזה מספר חסר?",String(correct),numberOptions(correct),seq.join("  ·  "),{skill:"רצפים",type:"רצף מספרים"}));}});
    return out;
  }
  function arithmetic(level,kind){
    const max=clamp(5+level*3,8,32),out=[];
    const minA=level>=7?4:level>=5?2:1;
    const minB=level>=7?2:1;
    for(let a=minA;a<=max;a++){for(let b=minB;b<=Math.min(a,8);b++){const answer=kind==="add"?a+b:a-b;if(answer<0)continue;if(kind!=="add"&&level>=4&&answer===0)continue;const icon=pictures[(a+b)%pictures.length],pictureVisual={groups:[Array(Math.min(a,12)).fill(icon),Array(Math.min(b,12)).fill(icon)],operator:"+"},left=Math.max(a,b),right=Math.min(a,b),expression=kind==="add"?`${left} + ${right}`:`${left} − ${right}`;out.push(make(expression,String(answer),numberOptions(answer),"",{skill:kind==="add"?"חיבור":"חיסור",type:kind==="add"?"חיבור":"חיסור",word:true,pictureMath:kind==="add"&&level<6?pictureVisual:null}));}}
    return out;
  }
  function numberLine(level){
    const step=level>=7?5:level>=4?2:1,max=clamp(10+level*5,15,55);
    return Array.from({length:24},(_,i)=>{const base=level>=4?step:0,start=base+((i*step)%Math.max(step,max-4*step)),pos=level>=7?1+(i%3):i%4,seq=Array.from({length:5},(_,j)=>start+j*step),correct=seq[pos],display=seq.map((n,index)=>index===pos?"□":n);return make("איזה מספר מתאים לריבוע?",String(correct),numberOptions(correct),display.join(" — "),{skill:"ציר המספרים",type:"מקום על הציר",numberLine:{items:display}});});
  }
  function shapeQuestions(level){
    const active=shapes.slice(0,clamp(3+Math.floor(level/2),3,shapes.length)),out=[];
    active.forEach(([icon,name,sides,corners])=>{
      out.push(make(`איזו צורה היא ${name}?`,icon,options(icon,active.map(x=>x[0])),"",{skill:"צורות",type:"מזהים צורה"}));
      if(level>=4)out.push(make(`כמה צלעות יש ל${name}?`,String(sides),numberOptions(sides),icon,{skill:"צורות",type:"צלעות וקודקודים"}));
      if(level>=6)out.push(make(`כמה קודקודים יש ל${name}?`,String(corners),numberOptions(corners),icon,{skill:"צורות",type:"צלעות וקודקודים"}));
    });
    return repeatPool(out);
  }
  function clockQuestions(level){
    const makeClock=(q,answer,answers,hour,minutes,type)=>make(q,answer,answers,"",{skill:"שעון",type,clock:{hour,minutes}});
    return Array.from({length:24},(_,i)=>{
      const hour=i%12+1;
      const hourText=String(hour).padStart(2,"0");
      if(level<4){
        const answer=`${hourText}:00`;
        return makeClock("מה השעה?",answer,options(answer,[`${String((hour%12)+1).padStart(2,"0")}:00`,`${String(((hour+1)%12)+1).padStart(2,"0")}:00`,`${String(((hour+2)%12)+1).padStart(2,"0")}:00`]),hour,0,"שעות שלמות");
      }
      if(level<7){
        const half=i%2===0,minutes=half?30:0,answer=`${hourText}:${half?"30":"00"}`;
        return makeClock("איזו שעה מוצגת בשעון?",answer,options(answer,[`${hourText}:00`,`${hourText}:30`,`${String((hour%12)+1).padStart(2,"0")}:00`,`${String((hour%12)+1).padStart(2,"0")}:30`]),hour,minutes,"שעות וחצאים");
      }
      const minuteOptions=[0,15,30,45],minutes=minuteOptions[i%4],answer=`${hourText}:${String(minutes).padStart(2,"0")}`;
      return makeClock("איזו שעה מוצגת בשעון?",answer,options(answer,[`${hourText}:00`,`${hourText}:15`,`${hourText}:30`,`${hourText}:45`,`${String((hour%12)+1).padStart(2,"0")}:00`]),hour,minutes,"שעות, חצאים ורבעים");
    });
  }
  function moneyQuestions(level){
    const coins=[1,2,5,10],maxCoins=clamp(2+Math.floor(level/2),2,5);
    return Array.from({length:24},(_,i)=>{const used=Array.from({length:maxCoins},(_,j)=>coins[(i+j)%coins.length]),answer=used.reduce((a,b)=>a+b,0);return make("כמה שקלים יש כאן?",`${answer} ₪`,options(`${answer} ₪`,[`${answer-1} ₪`,`${answer+1} ₪`,`${answer+2} ₪`]),used.map(x=>`${x}₪`).join(" + "),{skill:"כסף",type:"סופרים כסף"});});
  }
  function multiplication(level){
    const max=clamp(level-3,2,6);
    const out=[];
    for(let a=2;a<=max;a++)for(let b=2;b<=8;b++){const answer=a*b;out.push(make(`כמה הם ${a} קבוצות של ${b}?`,String(answer),numberOptions(answer),Array(a).fill(`(${Array(b).fill("●").join(" ")})`).join("  "),{skill:"כפל",type:"קבוצות שוות"}));}
    return repeatPool(out);
  }
  function wordProblems(level){
    const max=clamp(8+level*2,12,28);
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
    templates.forEach((template,index)=>{
      const a=template.add?2+(index*3)%max:4+(index*3)%(max-1);
      const b=template.add?1+(index*2)%Math.min(9,max):1+(index*2)%Math.min(9,a-1);
      const answer=template.add?a+b:a-b;
      questions.push(make(template.question(a,b),String(answer),numberOptions(answer),template.icon||thinkingVisuals[index%thinkingVisuals.length],{skill:"בעיות מילוליות",type:"בעיה מילולית"}));
    });
    return repeatPool(questions,24);
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
    const count=clamp(8+level*2,10,englishWords.length),active=englishWords.slice(0,count);
    if(kind==="uppercase")return repeatPool(active.map(([icon,word,letter])=>make(`מצאו את האות ${letter}`,letter,options(letter,"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),"",{skill:"אותיות גדולות",type:"CAPITAL LETTERS"})));
    if(kind==="letterPicture")return repeatPool(active.map(([icon,word,letter])=>{const correct=`${icon} ${word}`;return make(`איזו מילה מתחילה באות ${letter}?`,correct,options(correct,active.map(x=>`${x[0]} ${x[1]}`)),"",{skill:"אות ומילה",type:"אות ומילה"});}));
    if(kind==="firstLetter")return repeatPool(active.map(([icon,word,letter])=>make(`באיזו אות מתחילה המילה ${word}?`,letter,options(letter,"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),icon,{skill:"אות ראשונה",type:"צליל ראשון"})));
    if(kind==="imageWord")return repeatPool(active.map(([icon,word])=>make("איזו מילה מתאימה לתמונה?",word,options(word,active.map(x=>x[1])),icon,{skill:"אוצר מילים",type:"תמונה ומילה",word:true})));
    if(kind==="missingEnglish")return repeatPool(active.filter(x=>x[1].length<=clamp(3+Math.floor(level/2),4,8)).map(([icon,word])=>{const pos=level>=7?1+word.length%Math.max(1,word.length-2):word.length-1,correct=word[pos],masked=word.slice(0,pos)+"_"+word.slice(pos+1);return make("איזו אות חסרה?",correct,options(correct,"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),`${icon}  ${masked}`,{skill:"איות",type:"אות חסרה",word:true});}));
    if(kind==="buildEnglish")return repeatPool(active.filter(x=>x[1].length<=clamp(3+Math.floor(level/2),4,8)).map(([icon,word])=>make("בנו את המילה מהאותיות",word,[],icon,{skill:"איות",type:"בונים מילה",mode:"build",tokens:shuffle([...word,...shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")).slice(0,clamp(level-3,1,4))]),joinWith:"",word:true})));
    if(kind==="dragEnglish")return repeatPool(active.map(([icon,word])=>make(`לחצו על התמונה המתאימה למילה ${word}`,icon,options(icon,active.map(x=>x[0])),"",{skill:"התאמה",type:"מילה ותמונה"})));
    if(kind==="listenEnglish")return repeatPool(animals.slice(0,count).map(animal=>make("לחצו על הרמקול ובחרו את בעל החיים ששמעתם",animal.icon,options(animal.icon,animals.map(x=>x.icon)),"🔊",{skill:"האזנה",type:"לחצו ושמעו",audio:{kind:"speech",text:animal.en}})));
    if(kind==="englishCategories"){const categoryPools={ANIMAL:["DOG","CAT","BEAR","FISH","LION","FROG","OWL"],FOOD:["APPLE","EGG","JUICE","BANANA","MANGO","CHEESE"],OBJECT:["GIFT","HAT","KEY","CAR","DRUM"],NATURE:["SUN","MOON","TREE","STAR"]},categoryIcons={ANIMAL:"🐾",FOOD:"🍎",OBJECT:"🎒",NATURE:"🌿"};return repeatPool(active.map(([icon,word,letter,cat])=>{const distractors=Object.entries(categoryPools).filter(([key])=>key!==cat).flatMap(([,words])=>words);return make(`איזו מילה שייכת לקטגוריה ${cat}?`,word,options(word,distractors),categoryIcons[cat]||"✨",{skill:"קטגוריות",type:"מיון מילים"});}));}
    return [];
  }
  function memoryEnglish(level){
    const active=englishWords.slice(0,clamp(8+level,10,englishWords.length));
    const pairCount=level>=7?4:3;
    return Array.from({length:12},(_,i)=>{const selected=Array.from({length:pairCount},(_,j)=>active[(i*2+j)%active.length]);return make("התאימו בין כל תמונה למילה שלה","הושלם",[],"",{skill:"זיכרון",type:"משחק זיכרון",mode:"memory",pairs:selected.map(x=>[x[0],x[1]])});});
  }
  function sentenceEnglish(level){
    const sentences=[["I","SEE","A","CAT"],["THE","DOG","CAN","RUN"],["I","LIKE","RED","APPLES"],["THE","SUN","IS","HOT"],["A","FROG","CAN","JUMP"],["THE","BIRD","CAN","FLY"],["WE","PLAY","WITH","A","BALL"],["THE","LION","IS","BIG"]];
    return repeatPool(sentences.map(tokens=>make("סדרו את המילים למשפט",tokens.join(" "),[],"",{skill:"משפטים",type:"בונים משפט",mode:"build",tokens:shuffle(tokens),joinWith:" ",word:true})));
  }

  function hebrewRecognition(kind,level){
    const active=hebrewWords.slice(0,clamp(8+level*2,10,hebrewWords.length));
    if(kind==="samePicture"){
      const groups=[
        ["🐶","🐱","🐟","🦁","🐘"],
        ["🍎","🍌","🥕","🧀"],
        ["🌳","🌸","☀️","🌙"],
        ["🏠","🚗","⚽","📕","🥁","🧩","💎"]
      ];
      const similarPool=icon=>groups.find(group=>group.includes(icon))||active.map(x=>x[0]);
      return repeatPool(active.map(([icon])=>make("איזו תמונה זהה לתמונה הגדולה?",icon,options(icon,level>=4?similarPool(icon):active.map(x=>x[0])),icon,{skill:"הבחנה חזותית",type:"תמונות זהות"})));
    }
    if(kind==="hebrewLetter")return repeatPool(heAlphabet.slice(0,clamp(8+level*2,10,heAlphabet.length)).map(letter=>make(`מצאו את האות ${letter}`,letter,options(letter,heAlphabet),"",{skill:"אותיות",type:"זיהוי אות",word:true})));
    if(kind==="startsHebrew")return repeatPool(active.map(([icon,word,letter])=>{const correct=`${icon} ${word}`;return make(`איזו מילה מתחילה באות ${letter}?`,correct,options(correct,active.filter(x=>x[2]!==letter).map(x=>`${x[0]} ${x[1]}`)),"",{skill:"צליל ראשון",type:"מתחיל באות"});}));
    if(kind==="hebrewWordPicture")return repeatPool(active.map(([icon,word])=>make("איזו מילה מתאימה לתמונה?",word,options(word,active.map(x=>x[1])),icon,{skill:"מילים",type:"מילה ותמונה"})));
    if(kind==="missingHebrew")return repeatPool(active.filter(x=>x[1].length>=3).map(([icon,word])=>{const pos=level>=6?1:word.length-1,correct=word[pos],masked=word.slice(0,pos)+"_"+word.slice(pos+1);return make("איזו אות חסרה?",correct,options(correct,heAlphabet),`${icon}  ${masked}`,{skill:"איות",type:"אות חסרה",word:true});}));
    if(kind==="syllables"){const syllableWords=[
      ["🐶","כלב","כֶּ · לֶב"],["🐱","חתול","חָ · תוּל"],["🦁","אריה","אַר · יֵה"],
      ["🌸","פרח","פֶּ · רַח"],["🍌","בננה","בָּ · נָ · נָה"],["🥕","גזר","גֶּ · זֶר"],["🏠","בית","בַּ · יִת"],
      ["⚽","כדור","כַּ · דּוּר"],["📕","ספר","סֵ · פֶר"],["☀️","שמש","שֶׁ · מֶש"],["🌙","ירח","יָ · רֵ · חַ"],
      ["🧀","גבינה","גְּ · בִי · נָה"],["🧩","פאזל","פָּא · זֶל"]
    ],activeSyllables=syllableWords.slice(0,clamp(6+level,8,syllableWords.length));return repeatPool(activeSyllables.map(([icon,word,correct])=>make(`איך מחלקים את המילה ${word} להברות?`,correct,options(correct,activeSyllables.filter(x=>x[1]!==word).map(x=>x[2])),icon,{skill:"הברות",type:"מחלקים מילה",word:true})));};
    return [];
  }
  function alphabetOrder(level){
    const length=clamp(3+Math.floor(level/3),3,6);
    return Array.from({length:18},(_,i)=>{const start=i%(heAlphabet.length-length),tokens=heAlphabet.slice(start,start+length),correct=tokens.join("");return make("סדרו את האותיות לפי האלף־בית",correct,[],"",{skill:"סדר האותיות",type:"אלף־בית",mode:"build",tokens:shuffle(tokens),joinWith:"",word:true});});
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
  function readingQuestions(kind,level){
    const out=[];
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
      return questions.map(([q,correct,wrong])=>make(q,correct,shuffle([correct,...wrong]),"📖",{skill:"הסקת מסקנות",type:"רמזים מהטקסט"}));
    }
    readingStories.forEach((story,i)=>{
      if(kind==="inference")out.push(make(`${story.text} מה אפשר להבין?`,story.inference,options(story.inference,story.inferenceOptions||[]), "📖",{skill:"הסקת מסקנות",type:"רמזים מהטקסט"}));
      if(kind==="findInfo")out.push(make(`${story.text} איזה פרט מופיע בטקסט?`,story.info,options(story.info,readingStories.map(x=>x.info)),"📖",{skill:"איתור מידע",type:"מוצאים פרט"}));
      if(kind==="storyTitle")out.push(make(`${story.text} איזו כותרת מתאימה?`,story.title,options(story.title,readingStories.map(x=>x.title)),"📰",{skill:"כותרת",type:"כותרת לסיפור"}));
      if(kind==="trueFalse"){const trueStatement=i%2===0,statement=trueStatement?story.check:story.falseCheck;out.push(make(`${story.text} האם נכון לומר: “${statement}”?`,trueStatement?"נכון":"לא נכון",["נכון","לא נכון","אין מספיק מידע","אולי"],"✅",{skill:"הבנת הנקרא",type:"נכון או לא נכון"}));}
    });
    return repeatPool(out);
  }
  function eventOrder(){
    const sequences=[["זורעים זרע","משקים","נובט נבט"],["לובשים גרביים","נועלים נעליים","יוצאים"],["מערבבים בצק","אופים","אוכלים עוגה"],["שוטפים ידיים","מתיישבים","אוכלים"],["פותחים ספר","קוראים","מסיימים סיפור"],["אורזים תיק","יוצאים מהבית","מגיעים לבית הספר"],["קמים בבוקר","מצחצחים שיניים","אוכלים ארוחת בוקר"],["מציירים ציור","צובעים","תולים על הקיר"],["ממלאים בקבוק","יוצאים לטיול","שותים מים"],["אוספים צעצועים","מסדרים במדף","החדר נקי"],["מכניסים כביסה","מפעילים מכונה","תולים לייבוש"],["שמים קסדה","עולים על אופניים","מתחילים לרכוב"]];
    return repeatPool(sequences.map(tokens=>make("סדרו את האירועים",tokens.join(" ← "),[],"",{skill:"רצף אירועים",type:"מה קודם?",mode:"build",tokens:shuffle(tokens),joinWith:" ← "})));
  }
  function sentenceHebrew(){
    const sentences=[["הילד","אוכל","תפוח"],["החתול","ישן","על הכיסא"],["נועה","קוראת","ספר"],["הכלב","רץ","בגינה"],["הציפור","עפה","בשמיים"],["אבא","מכין","סלט"],["הילדים","משחקים","בכדור"],["הארנב","קופץ","בחצר"],["אמא","שותלת","פרח"],["הילדה","מציירת","שמש"],["הסבא","קורא","עיתון"],["הדג","שוחה","במים"]];
    return repeatPool(sentences.map(tokens=>make("סדרו את המילים למשפט",tokens.join(" "),[],"",{skill:"משפטים",type:"בונים משפט",mode:"build",tokens:shuffle(tokens),joinWith:" ",word:true})));
  }
  function wordSearch(level){
    const words=hebrewWords.map(x=>x[1]).filter(w=>w.length>=3&&w.length<=clamp(3+Math.floor(level/2),4,6));
    return repeatPool(words.map(word=>{const size=Math.max(5,word.length),letters=Array.from({length:size*size},()=>heAlphabet[Math.floor(Math.random()*heAlphabet.length)]),row=Math.floor(Math.random()*size),start=Math.floor(Math.random()*(size-word.length+1)),path=[];[...word].forEach((letter,i)=>{const index=row*size+start+i;letters[index]=letter;path.push(index);});return make(`מצאו את המילה ${word}`,word,[],"🔍",{skill:"תפזורת",type:"חיפוש מילים",mode:"wordsearch",grid:letters,size,path,word:true});}));
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
    if(kind==="livingGroups"){const items=[["🐶","חי"],["🌳","צומח"],["⚽","דומם"],["🐝","חי"],["🌻","צומח"],["🚗","דומם"],["🐋","חי"],["🌵","צומח"],["💎","דומם"]];return repeatPool(items.map(([icon,group])=>make("לאיזו קבוצה זה שייך?",group,["חי","צומח","דומם","לא בטוח"],icon,{skill:"מיון בטבע",type:"חי, צומח או דומם"})));}
    if(kind==="plantFood"){const data=[["🍎","עץ תפוח","גדל"],["🍐","עץ אגס","גדל"],["🥭","עץ מנגו","גדל"],["🥥","דקל קוקוס","גדל"],["🥕","צמח גזר","גדל"],["🌽","צמח תירס","גדל"],["🍅","צמח עגבנייה","גדלה"],["🍇","גפן","גדלים"]];return repeatPool(data.map(([food,plant,verb])=>make(`על איזה צמח ${verb} ${food}?`,plant,options(plant,data.map(x=>x[1])),"",{skill:"צמחים ומזון",type:"מה גדל על הצמח?"})));}
    if(kind==="seasons")return repeatPool(seasons.flatMap(([season,icon,activity,activityIcon])=>[make(`לאיזו עונה מתאים הסמל?`,season,options(season,seasons.map(x=>x[0])),icon,{skill:"עונות",type:"עונות השנה"}),make(`באיזו עונה מתאים: ${activity}?`,season,options(season,seasons.map(x=>x[0])),activityIcon,{skill:"עונות",type:"עונות השנה"})]));
    if(kind==="lifeCycle"){const cycles=[["פרפר",["ביצה","זחל","גולם","פרפר"]],["צפרדע",["ביצה","ראשן","צפרדע צעירה","צפרדע"]],["צמח",["זרע","נבט","צמח","פרח"]],["תרנגולת",["ביצה","אפרוח","תרנגולת צעירה","תרנגולת"]],["עץ תפוח",["זרע","נבט","עץ צעיר","עץ עם תפוחים"]],["דבורה",["ביצה","זחל","גולם","דבורה"]],["שעועית",["זרע","נבט","עלים","תרמיל"]],["עגבנייה",["זרע","נבט","פרח","עגבנייה"]]];return repeatPool(cycles.map(([name,tokens])=>make(`סדרו את מחזור החיים של ${name}`,tokens.join(" ← "),[],"",{skill:"מחזורי חיים",type:"סדר שלבים",mode:"build",tokens:shuffle(tokens),joinWith:" ← "})));}
    if(kind==="plantParts"){const data=[["שורש","סופג מים מהאדמה","⬇️"],["גבעול","מחזיק את הצמח","🌱"],["עלה","קולט אור","🍃"],["פרח","עוזר ליצור זרעים","🌸"],["פרי","שומר על הזרעים","🍎"]];return repeatPool(data.flatMap(([part,role,icon])=>[make(`איזה חלק בצמח ${role}?`,part,options(part,data.map(x=>x[0])),icon,{skill:"חלקי הצמח",type:"חלק ותפקיד"}),make(`מה תפקיד ה${part}?`,role,options(role,data.map(x=>x[1])),icon,{skill:"חלקי הצמח",type:"חלק ותפקיד"})]));}
    if(kind==="animalFood")return repeatPool(animals.map(a=>make(`מה המזון של ${a.he}?`,a.food,options(a.food,animals.map(x=>x.food)),a.icon,{skill:"תזונת בעלי חיים",type:"מה אוכלים?"})));
    if(kind==="weather"){const data=[["גשום","מעיל גשם","🌧️"],["שמשי","כובע שמש","☀️"],["קר","צעיף","❄️"],["סוער","להישאר במקום מוגן","⛈️"],["חם","לשתות מים","🌡️"]];return repeatPool(data.flatMap(([weather,choice,icon])=>[make(`מה מתאים ליום ${weather}?`,choice,options(choice,data.map(x=>x[1])),icon,{skill:"מזג אוויר",type:"מתלבשים נכון"}),make("איזה מזג אוויר מוצג?",weather,options(weather,data.map(x=>x[0])),icon,{skill:"מזג אוויר",type:"מזהים מזג אוויר"})]));}
    if(kind==="foodChain"){const chains=[["🌿","🐛","🐦"],["🌾","🐭","🦉"],["🌱","🐰","🦊"],["🌿","🦌","🦁"],["🦠","🐟","🐬"],["🌻","🐝","🦎"],["🍎","🐛","🐦"],["אצה","🐟","🐬"],["🌾","🐔","🦊"],["🥕","🐰","🦉"]];return repeatPool(chains.map(tokens=>make("סדרו את שרשרת המזון",tokens.join(" ← "),[],"",{skill:"שרשרת מזון",type:"מי אוכל את מי?",mode:"build",tokens:shuffle(tokens),joinWith:" ← "})));}
    if(kind==="adaptations"){const data=[["🐫","דבשת","עוזרת לשרוד במדבר"],["🐧","שכבת שומן","שומרת על חום הגוף"],["🦆","קרומי שחייה","עוזרים לשחות"],["🦎","צבעי הסוואה","עוזרים להסתתר"],["🦉","עיניים גדולות","עוזרות לראות בלילה"],["🐟","זימים","עוזרים לנשום במים"],["🦒","צוואר ארוך","עוזר להגיע לעלים גבוהים"],["🐘","חדק","עוזר לשתות ולהרים דברים"],["🐝","כנפיים","עוזרות לעוף מפרח לפרח"],["🐰","אוזניים ארוכות","עוזרות לשמוע סכנה"]];return repeatPool(data.map(([icon,feature,reason])=>make(`למה משמשים ${feature}?`,reason,options(reason,data.map(x=>x[2])),icon,{skill:"התאמה לסביבה",type:"תכונה ותפקיד"})));}
    if(kind==="causeEffect"){const data=[["משקים צמח","הצמח גדל"],["שמים מים במקפיא","המים קופאים"],["מחממים קרח","הקרח נמס"],["מכבים את האור","החדר מחשיך"],["שמים חפץ בשמש","החפץ מתחמם"],["לא משקים צמח","הצמח נובל"],["מערבבים כחול וצהוב","נוצר ירוק"],["פותחים חלון","נכנס אוויר"],["זורקים כדור למעלה","הכדור נופל בחזרה"],["שמים זרעים באדמה ומשקים","יכולים לצמוח נבטים"]];return repeatPool(data.map(([cause,effect])=>make(`מה יקרה אם ${cause}?`,effect,options(effect,data.map(x=>x[1])),"🧪",{skill:"סיבה ותוצאה",type:"חושבים כמו מדענים"})));}
    return [];
  }

  function build(gameId,level,profile){
    const game=catalog.find(g=>g.id===gameId);
    if(!game)return [];
    level=clamp(Number(level)||profile?.age||3,1,9);
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
