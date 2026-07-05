(() => {
  const catalog = [
    {id:"count",subject:"math",minAge:3,name:"כמה עצמים יש?",icon:"🔢",desc:"סופרים עצמים ובוחרים מספר",kind:"count"},
    {id:"number-quantity",subject:"math",minAge:3,name:"מספר וכמות",icon:"🍎",desc:"מתאימים מספר לקבוצת עצמים",kind:"numberQuantity"},
    {id:"big-small",subject:"math",minAge:3,name:"גדול וקטן",icon:"↕️",desc:"משווים גדלים ואורכים",kind:"bigSmall"},
    {id:"more-groups",subject:"math",minAge:4,name:"איפה יש יותר?",icon:"⚖️",desc:"משווים בין שתי כמויות",kind:"moreGroups"},
    {id:"visual-pattern",subject:"math",minAge:4,name:"דפוסים",icon:"🔴",desc:"מגלים מה מגיע בהמשך",kind:"pattern"},
    {id:"number-sequence",subject:"math",minAge:5,name:"רצף מספרים",icon:"➡️",desc:"משלימים מספר חסר ברצף",kind:"sequence"},
    {id:"picture-subtraction",subject:"math",minAge:5,name:"חיסור בתמונות",icon:"➖",desc:"מורידים עצמים ומחשבים",kind:"subtraction"},
    {id:"number-line",subject:"math",minAge:5,name:"ציר המספרים",icon:"📏",desc:"מוצאים את המקום הנכון",kind:"numberLine"},
    {id:"shapes",subject:"math",minAge:6,name:"מגלים צורות",icon:"🔷",desc:"שמות, צלעות ופינות",kind:"shapes"},
    {id:"addition",subject:"math",minAge:6,name:"חיבור",icon:"➕",desc:"מחברים מספרים בהדרגה",kind:"addition"},
    {id:"clock",subject:"math",minAge:6,name:"שעון",icon:"🕒",desc:"קוראים שעות ודקות",kind:"clock"},
    {id:"money",subject:"math",minAge:6,name:"כסף",icon:"🪙",desc:"מתאימים מטבעות לסכום",kind:"money"},
    {id:"multiplication",subject:"math",minAge:7,name:"כפל בקבוצות",icon:"✖️",desc:"סופרים קבוצות שוות",kind:"multiplication"},
    {id:"word-problems",subject:"math",minAge:7,name:"בעיות מילוליות",icon:"🧠",desc:"פותרים בעיה מתוך סיפור",kind:"wordProblems"},
    {id:"fractions",subject:"math",minAge:7,name:"שברים",icon:"🍕",desc:"חצי, שליש ורבע",kind:"fractions"},

    {id:"uppercase-letter",subject:"english",minAge:4,name:"אות גדולה",icon:"🔠",desc:"מזהים CAPITAL LETTERS",kind:"uppercase"},
    {id:"letter-picture",subject:"english",minAge:4,name:"אות ותמונה",icon:"🅰️",desc:"מתאימים אות גדולה לתמונה",kind:"letterPicture"},
    {id:"picture-word-memory",subject:"english",minAge:5,name:"זיכרון תמונה ומילה",icon:"🧠",desc:"מוצאים זוגות מתאימים",kind:"memoryEnglish"},
    {id:"first-letter",subject:"english",minAge:5,name:"האות הראשונה",icon:"🔤",desc:"בוחרים באיזו אות המילה מתחילה",kind:"firstLetter"},
    {id:"image-word",subject:"english",minAge:6,name:"תמונה ומילה",icon:"🖼️",desc:"בוחרים מילה מתוך ארבע אפשרויות",kind:"imageWord"},
    {id:"drag-word-picture",subject:"english",minAge:6,name:"גרירה והתאמה",icon:"🫳",desc:"גוררים מילה אל התמונה",kind:"dragEnglish"},
    {id:"listen-animal",subject:"english",minAge:6,name:"לחצו ושמעו",icon:"🔊",desc:"שומעים שם של בעל חיים ובוחרים תמונה",kind:"listenEnglish"},
    {id:"missing-letter-en",subject:"english",minAge:6,name:"אות חסרה",icon:"❓",desc:"משלימים אות חסרה במילה",kind:"missingEnglish"},
    {id:"word-categories",subject:"english",minAge:6,name:"קטגוריות מילים",icon:"🗂️",desc:"ממיינים חיות, אוכל וחפצים",kind:"englishCategories"},
    {id:"build-word-en",subject:"english",minAge:7,name:"בונים מילה",icon:"🧱",desc:"מרכיבים מילה מאותיות",kind:"buildEnglish"},
    {id:"sentence-order-en",subject:"english",minAge:7,name:"בונים משפט",icon:"💬",desc:"מסדרים מילים למשפט קצר",kind:"sentenceEnglish"},
    {id:"picture-crossword",subject:"english",minAge:7,name:"תשבץ תמונות",icon:"🧩",desc:"משלימים מילה לפי תמונה",kind:"crosswordEnglish"},

    {id:"same-picture",subject:"thinking",minAge:3,name:"תמונות זהות",icon:"🖼️",desc:"מוצאים את התמונה הזהה",kind:"samePicture"},
    {id:"hebrew-letter",subject:"reading",minAge:4,name:"זיהוי אות",icon:"🔤",desc:"מזהים אות עברית",kind:"hebrewLetter"},
    {id:"starts-hebrew",subject:"reading",minAge:5,name:"מתחיל באות",icon:"🔤",desc:"מוצאים מילה שמתחילה באות",kind:"startsHebrew"},
    {id:"hebrew-word-picture",subject:"reading",minAge:5,name:"מילה ותמונה",icon:"📖",desc:"מתאימים מילה קצרה לתמונה",kind:"hebrewWordPicture"},
    {id:"alphabet-order",subject:"reading",minAge:6,name:"סדר האותיות",icon:"אבג",desc:"מסדרים אותיות לפי האלף־בית",kind:"alphabetOrder"},
    {id:"missing-letter-he",subject:"reading",minAge:6,name:"אות חסרה במילה",icon:"❓",desc:"משלימים מילה בעברית",kind:"missingHebrew"},
    {id:"syllables",subject:"reading",minAge:6,name:"הברות",icon:"👏",desc:"מחלקים מילה להברות",kind:"syllables"},
    {id:"inference",subject:"reading",minAge:6,name:"הסקת מסקנות",icon:"💡",desc:"מבינים רמזים מתוך טקסט",kind:"inference"},
    {id:"event-order",subject:"reading",minAge:6,name:"רצף אירועים",icon:"1️⃣",desc:"מסדרים מה קרה קודם ואחר כך",kind:"eventOrder"},
    {id:"find-info",subject:"reading",minAge:6,name:"איתור מידע",icon:"🔎",desc:"מוצאים פרט מפורש בטקסט",kind:"findInfo"},
    {id:"sentence-order-he",subject:"reading",minAge:7,name:"סידור משפט",icon:"💬",desc:"מסדרים מילים למשפט",kind:"sentenceHebrew"},
    {id:"true-false",subject:"reading",minAge:7,name:"נכון או לא נכון",icon:"✅",desc:"קוראים ובודקים טענה",kind:"trueFalse"},
    {id:"story-title",subject:"reading",minAge:7,name:"כותרת לסיפור",icon:"📰",desc:"בוחרים כותרת מתאימה",kind:"storyTitle"},
    {id:"word-search",subject:"reading",minAge:7,name:"תפזורת",icon:"🔍",desc:"מחפשים מילים בתוך רשת אותיות",kind:"wordSearch"},

    {id:"animal-sound",subject:"nature",minAge:3,name:"מי משמיע את הקול?",icon:"🐮",desc:"שומעים קול ובוחרים בעל חיים",kind:"animalSound"},
    {id:"odd-one-out",subject:"nature",minAge:3,name:"מה לא שייך?",icon:"🧩",desc:"מוצאים תמונה יוצאת דופן",kind:"oddOneOut"},
    {id:"habitat",subject:"nature",minAge:4,name:"בית גידול",icon:"🏞️",desc:"מתאימים בעל חיים לסביבה",kind:"habitat"},
    {id:"baby-adult",subject:"nature",minAge:4,name:"גור ובוגר",icon:"🐣",desc:"מתאימים גור לבעל החיים הבוגר",kind:"babyAdult"},
    {id:"living-groups",subject:"nature",minAge:5,name:"חי, צומח או דומם",icon:"🌱",desc:"ממיינים דברים מהעולם",kind:"livingGroups"},
    {id:"plant-food",subject:"nature",minAge:5,name:"מה גדל על הצמח?",icon:"🍎",desc:"מתאימים פרי או ירק לצמח",kind:"plantFood"},
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
    {icon:"🐶",he:"כלב",en:"DOG",letter:"D",sound:"woof",habitat:"בית",baby:"גור",food:"עצם"},
    {icon:"🐱",he:"חתול",en:"CAT",letter:"C",sound:"meow",habitat:"בית",baby:"גור חתולים",food:"דג"},
    {icon:"🐄",he:"פרה",en:"COW",letter:"C",sound:"moo",habitat:"רפת",baby:"עגל",food:"עשב"},
    {icon:"🐑",he:"כבשה",en:"SHEEP",letter:"S",sound:"baa",habitat:"דיר",baby:"טלה",food:"עשב"},
    {icon:"🐴",he:"סוס",en:"HORSE",letter:"H",sound:"neigh",habitat:"אורווה",baby:"סייח",food:"חציר"},
    {icon:"🐔",he:"תרנגולת",en:"HEN",letter:"H",sound:"cluck",habitat:"לול",baby:"אפרוח",food:"זרעים"},
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
    ["🏠","בית","ב"],["🚗","מכונית","מ"],["⚽","כדור","כ"],["📚","ספר","ס"],["☀️","שמש","ש"],
    ["🌙","ירח","י"],["🧀","גבינה","ג"],["🥁","תוף","ת"],["🧩","פאזל","פ"],["💎","יהלום","י"]
  ];
  const shapes = [
    ["○","עיגול",0,0],["△","משולש",3,3],["□","ריבוע",4,4],["▭","מלבן",4,4],["⬟","מחומש",5,5],["⬡","משושה",6,6]
  ];
  const seasons = [
    ["חורף","🌧️","מעיל"],["אביב","🌸","טיול בין פרחים"],["קיץ","☀️","כובע שמש"],["סתיו","🍂","עלים נושרים"]
  ];
  const heAlphabet = [..."אבגדהוזחטיכלמנסעפצקרשת"];
  const shuffle = items => [...items].sort(() => Math.random() - .5);
  const clamp = (n,min,max) => Math.max(min,Math.min(max,n));
  const options = (correct,pool,count=4) => shuffle([correct,...shuffle(pool.filter(x=>x!==correct)).slice(0,count-1)]);
  const numberOptions = answer => options(String(answer),[answer-3,answer-2,answer-1,answer+1,answer+2,answer+3].filter(n=>n>=0).map(String));
  const make = (q,correct,a,visual="",extra={}) => ({q,correct,a,type:extra.type||"בוחרים תשובה",skill:extra.skill||"תרגול",visual,explain:extra.explain||`התשובה הנכונה היא ${correct}.`,...extra});
  const repeatPool = (items,count=18) => Array.from({length:Math.max(count,items.length)},(_,i)=>({...items[i%items.length]}));
  const pictures = ["🍎","⭐","🐟","🌼","🔵","🧸","🍐","🐞"];

  function countQuestions(level){
    const max=clamp(3+level*2,5,24);
    const out=[];
    pictures.slice(0,clamp(2+level,3,pictures.length)).forEach(icon=>{
      for(let n=1;n<=max;n++)out.push(make("כמה עצמים יש?",String(n),numberOptions(n),Array(n).fill(icon).join(" "),{skill:"ספירה",type:"כמה יש?"}));
    });
    return out;
  }
  function numberQuantity(level){
    const max=clamp(4+level*2,6,24);
    return Array.from({length:max},(_,i)=>{
      const n=i+1,icon=pictures[i%pictures.length];
      const nums=shuffle([n,Math.max(1,n-1),n+1,Math.max(1,n-2)]);
      const groups=nums.map(x=>Array(x).fill(icon).join(" "));
      return make(`איפה יש ${n} עצמים?`,groups[nums.indexOf(n)],shuffle(groups),"",{skill:"מספר וכמות",type:"מתאימים כמות"});
    });
  }
  function bigSmall(level){
    const widths=["▬","▬▬","▬▬▬","▬▬▬▬","▬▬▬▬▬","▬▬▬▬▬▬"];
    return Array.from({length:18},(_,i)=>{
      const askBig=i%2===0,available=widths.slice(0,clamp(3+Math.floor(level/2),3,6)),correct=askBig?available.at(-1):available[0];
      return make(askBig?"איזה פס הוא הארוך ביותר?":"איזה פס הוא הקצר ביותר?",correct,options(correct,available),"",{skill:"גדול וקטן",type:"משווים גדלים"});
    });
  }
  function moreGroups(level){
    const max=clamp(5+level*2,7,24);
    return Array.from({length:22},(_,i)=>{
      const a=1+(i*3)%max,b=1+(i*5+2)%max,icon=pictures[i%pictures.length],left=Array(a).fill(icon).join(" "),right=Array(b).fill(icon).join(" ");
      return make("באיזו קבוצה יש יותר?",a>b?left:right,shuffle([left,right,"אותו מספר","אי אפשר לדעת"]),"",{skill:"השוואה",type:"יותר או פחות"});
    });
  }
  function patterns(level){
    const sets=[["🔴","🔵"],["⭐","🌙"],["🍎","🍐","🍎"],["🔺","🔵","🟨"],["🐶","🐱","🐰"]];
    return Array.from({length:20},(_,i)=>{
      const pattern=sets[i%clamp(2+Math.floor(level/2),2,sets.length)],length=clamp(4+level,5,10),seq=Array.from({length},(_,j)=>pattern[j%pattern.length]),correct=pattern[length%pattern.length];
      return make("מה מגיע עכשיו?",correct,options(correct,[...new Set(sets.flat())]),seq.join(" ")+"  ?",{skill:"דפוסים",type:"ממשיכים דפוס"});
    });
  }
  function sequences(level){
    const steps=level<=2?[1]:level<=4?[1,2]:level<=6?[2,3,5]:[3,4,5,10];
    const out=[];
    steps.forEach(step=>{for(let start=0;start<16;start++){const missingIndex=level>=6?1+(start%3):3,seq=Array.from({length:4},(_,i)=>start+i*step),correct=seq[missingIndex];seq[missingIndex]="?";out.push(make("איזה מספר חסר?",String(correct),numberOptions(correct),seq.join("  ·  "),{skill:"רצפים",type:"רצף מספרים"}));}});
    return out;
  }
  function arithmetic(level,kind){
    const max=clamp(5+level*3,8,32),out=[];
    for(let a=1;a<=max;a++){for(let b=1;b<=Math.min(a,8);b++){const answer=kind==="add"?a+b:a-b;if(answer<0)continue;const icon=pictures[(a+b)%pictures.length],visual=kind==="add"?`${Array(Math.min(a,12)).fill(icon).join(" ")}  +  ${Array(Math.min(b,12)).fill(icon).join(" ")}`:`${Array(Math.min(a,16)).fill(icon).join(" ")}  −  ${b}`;out.push(make(kind==="add"?`כמה הם ${a} ועוד ${b}?`:`כמה נשארו אם מורידים ${b} מתוך ${a}?`,String(answer),numberOptions(answer),visual,{skill:kind==="add"?"חיבור":"חיסור",type:kind==="add"?"חיבור":"חיסור"}));}}
    return out;
  }
  function numberLine(level){
    const step=level>=7?5:level>=4?2:1,max=clamp(10+level*5,15,55);
    return Array.from({length:24},(_,i)=>{const start=(i*step)%Math.max(step,max-4*step),pos=i%4,seq=Array.from({length:5},(_,j)=>start+j*step),correct=seq[pos];seq[pos]="□";return make("איזה מספר מתאים לריבוע?",String(correct),numberOptions(correct),seq.join(" — "),{skill:"ציר המספרים",type:"מקום על הציר"});});
  }
  function shapeQuestions(level){
    const active=shapes.slice(0,clamp(3+Math.floor(level/2),3,shapes.length)),out=[];
    active.forEach(([icon,name,sides,corners])=>{
      out.push(make(`איזו צורה היא ${name}?`,icon,options(icon,active.map(x=>x[0])),active.map(x=>x[0]).join("  "),{skill:"צורות",type:"מזהים צורה"}));
      if(level>=4)out.push(make(`כמה צלעות יש ל${name}?`,String(sides),numberOptions(sides),icon,{skill:"צורות",type:"צלעות ופינות"}));
      if(level>=6)out.push(make(`כמה פינות יש ל${name}?`,String(corners),numberOptions(corners),icon,{skill:"צורות",type:"צלעות ופינות"}));
    });
    return repeatPool(out);
  }
  function clockQuestions(level){
    const clocks=["🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛"];
    return Array.from({length:24},(_,i)=>{const hour=i%12+1,minutes=level>=7?[0,15,30,45][i%4]:level>=4?[0,30][i%2]:0,answer=`${String(hour).padStart(2,"0")}:${String(minutes).padStart(2,"0")}`;return make("מה השעה?",answer,options(answer,[`${String((hour%12)+1).padStart(2,"0")}:${String(minutes).padStart(2,"0")}`,`${String(hour).padStart(2,"0")}:30`,`${String(hour).padStart(2,"0")}:45`]),clocks[i%12],{skill:"שעון",type:"קוראים שעון"});});
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
    return Array.from({length:24},(_,i)=>{const a=2+i%max,b=1+(i*3)%Math.min(9,a),add=i%2===0,answer=add?a+b:a-b,q=add?`לנועה היו ${a} מדבקות והיא קיבלה עוד ${b}. כמה יש לה עכשיו?`:`ליואב היו ${a} גולות והוא נתן ${b}. כמה נשארו?`;return make(q,String(answer),numberOptions(answer),"🧠",{skill:"בעיות מילוליות",type:"בעיה מילולית"});});
  }
  function fractions(level){
    const data=[["חצי","1/2","◼◼◻◻"],["רבע","1/4","◼◻◻◻"],["שלושה רבעים","3/4","◼◼◼◻"],["שליש","1/3","◼◻◻"],["שני שלישים","2/3","◼◼◻"]];
    const active=data.slice(0,clamp(2+Math.floor(level/2),2,data.length));
    return repeatPool(active.map(([name,fraction,visual])=>make(`איזה שבר צבוע?`,fraction,options(fraction,data.map(x=>x[1])),visual,{skill:"שברים",type:name})));
  }

  function wordQuestions(kind,level){
    const count=clamp(8+level*2,10,englishWords.length),active=englishWords.slice(0,count);
    if(kind==="uppercase")return repeatPool(active.map(([icon,word,letter])=>make(`מצאו את האות ${letter}`,letter,options(letter,"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),`${letter}  ${options(letter,"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")).join("  ")}`,{skill:"אותיות גדולות",type:"CAPITAL LETTERS"})));
    if(kind==="letterPicture")return repeatPool(active.map(([icon,word,letter])=>{const correct=`${icon} ${word}`;return make(`איזו תמונה מתחילה באות ${letter}?`,correct,options(correct,active.map(x=>`${x[0]} ${x[1]}`)),letter,{skill:"אות וצליל",type:"אות ותמונה"});}));
    if(kind==="firstLetter")return repeatPool(active.map(([icon,word,letter])=>make(`באיזו אות מתחילה המילה ${word}?`,letter,options(letter,"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),icon,{skill:"אות ראשונה",type:"צליל ראשון"})));
    if(kind==="imageWord")return repeatPool(active.map(([icon,word])=>make("איזו מילה מתאימה לתמונה?",word,options(word,active.map(x=>x[1])),icon,{skill:"אוצר מילים",type:"תמונה ומילה",word:true})));
    if(kind==="missingEnglish"||kind==="crosswordEnglish")return repeatPool(active.filter(x=>x[1].length<=clamp(3+Math.floor(level/2),4,8)).map(([icon,word])=>{const pos=level>=7?1+word.length%Math.max(1,word.length-2):word.length-1,correct=word[pos],masked=word.slice(0,pos)+"_"+word.slice(pos+1);return make("איזו אות חסרה?",correct,options(correct,"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),`${icon}  ${masked}`,{skill:"איות",type:kind==="crosswordEnglish"?"תשבץ תמונות":"אות חסרה",word:true});}));
    if(kind==="buildEnglish")return repeatPool(active.filter(x=>x[1].length<=clamp(3+Math.floor(level/2),4,8)).map(([icon,word])=>make("בנו את המילה מהאותיות",word,[],icon,{skill:"איות",type:"בונים מילה",mode:"build",tokens:shuffle([...word,...shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")).slice(0,clamp(level-3,1,4))]),joinWith:"",word:true})));
    if(kind==="dragEnglish")return repeatPool(active.map(([icon,word])=>make(`גררו את המילה ${word} אל התמונה המתאימה`,icon,options(icon,active.map(x=>x[0])),word,{skill:"התאמה",type:"גרירה ושחרור",mode:"drag",dragSource:word})));
    if(kind==="listenEnglish")return repeatPool(animals.slice(0,count).map(animal=>make("לחצו על הרמקול ובחרו את בעל החיים ששמעתם",animal.icon,options(animal.icon,animals.map(x=>x.icon)),"🔊",{skill:"האזנה",type:"לחצו ושמעו",audio:{kind:"speech",text:animal.en}})));
    if(kind==="englishCategories"){const cats=["ANIMAL","FOOD","OBJECT","NATURE"];return repeatPool(active.map(([icon,word,letter,cat])=>make(`איזו מילה שייכת לקטגוריה ${cat}?`,word,options(word,active.filter(x=>x[3]!==cat).map(x=>x[1])),cat,{skill:"קטגוריות",type:"מיון מילים"})));}
    return [];
  }
  function memoryEnglish(level){
    const active=englishWords.slice(0,clamp(8+level,10,englishWords.length));
    return Array.from({length:12},(_,i)=>{const selected=Array.from({length:3},(_,j)=>active[(i*3+j)%active.length]);return make("מצאו את כל זוגות התמונה והמילה","הושלם",[],"",{skill:"זיכרון",type:"משחק זיכרון",mode:"memory",pairs:selected.map(x=>[x[0],x[1]])});});
  }
  function sentenceEnglish(level){
    const sentences=[["I","SEE","A","CAT"],["THE","DOG","CAN","RUN"],["I","LIKE","RED","APPLES"],["THE","SUN","IS","HOT"],["A","FROG","CAN","JUMP"],["THE","BIRD","CAN","FLY"],["WE","PLAY","WITH","A","BALL"],["THE","LION","IS","BIG"]];
    return repeatPool(sentences.map(tokens=>make("סדרו את המילים למשפט",tokens.join(" "),[],tokens[0],{skill:"משפטים",type:"בונים משפט",mode:"build",tokens:shuffle(tokens),joinWith:" ",word:true})));
  }

  function hebrewRecognition(kind,level){
    const active=hebrewWords.slice(0,clamp(8+level*2,10,hebrewWords.length));
    if(kind==="samePicture")return repeatPool(active.map(([icon])=>make("איזו תמונה זהה לתמונה הגדולה?",icon,options(icon,active.map(x=>x[0])),icon,{skill:"הבחנה חזותית",type:"תמונות זהות"})));
    if(kind==="hebrewLetter")return repeatPool(heAlphabet.slice(0,clamp(8+level*2,10,heAlphabet.length)).map(letter=>make(`מצאו את האות ${letter}`,letter,options(letter,heAlphabet),letter,{skill:"אותיות",type:"זיהוי אות",word:true})));
    if(kind==="startsHebrew")return repeatPool(active.map(([icon,word,letter])=>{const correct=`${icon} ${word}`;return make(`איזו מילה מתחילה באות ${letter}?`,correct,options(correct,active.filter(x=>x[2]!==letter).map(x=>`${x[0]} ${x[1]}`)),letter,{skill:"צליל ראשון",type:"מתחיל באות"});}));
    if(kind==="hebrewWordPicture")return repeatPool(active.map(([icon,word])=>make("איזו מילה מתאימה לתמונה?",word,options(word,active.map(x=>x[1])),icon,{skill:"מילים",type:"מילה ותמונה"})));
    if(kind==="missingHebrew")return repeatPool(active.filter(x=>x[1].length>=3).map(([icon,word])=>{const pos=level>=6?1:word.length-1,correct=word[pos],masked=word.slice(0,pos)+"_"+word.slice(pos+1);return make("איזו אות חסרה?",correct,options(correct,heAlphabet),`${icon}  ${masked}`,{skill:"איות",type:"אות חסרה",word:true});}));
    if(kind==="syllables")return repeatPool(active.filter(x=>x[1].length>=3).map(([icon,word])=>{const split=Math.ceil(word.length/2),correct=`${word.slice(0,split)} · ${word.slice(split)}`;return make("איזו חלוקה להברות מתאימה?",correct,options(correct,[...active.filter(x=>x[1]!==word).map(x=>{const w=x[1],s=Math.max(1,Math.floor(w.length/2));return `${w.slice(0,s)} · ${w.slice(s)}`;})]),icon,{skill:"הברות",type:"מחלקים מילה"});}));
    return [];
  }
  function alphabetOrder(level){
    const length=clamp(3+Math.floor(level/3),3,6);
    return Array.from({length:18},(_,i)=>{const start=i%(heAlphabet.length-length),tokens=heAlphabet.slice(start,start+length),correct=tokens.join("");return make("סדרו את האותיות לפי האלף־בית",correct,[],tokens.join(" "),{skill:"סדר האותיות",type:"אלף־בית",mode:"build",tokens:shuffle(tokens),joinWith:"",word:true});});
  }
  const readingStories = [
    {text:"נועה לקחה מטרייה ולבשה מגפיים.",inference:"ירד גשם",event:"נועה לבשה מגפיים",info:"נועה",title:"יום גשום"},
    {text:"אורי שתל זרע, השקה אותו ולאחר כמה ימים הופיע נבט.",inference:"הזרע קיבל מים",event:"הופיע נבט",info:"אורי",title:"הזרע שצמח"},
    {text:"מיה מצאה גור קטן ורועד והביאה לו שמיכה.",inference:"לגור היה קר",event:"מיה הביאה שמיכה",info:"מיה",title:"עוזרים לגור"},
    {text:"דן סיים לאכול, צחצח שיניים ונכנס למיטה.",inference:"הגיע זמן השינה",event:"דן נכנס למיטה",info:"דן",title:"לפני השינה"},
    {text:"תמר ארזה מים, כובע ומפה ויצאה עם משפחתה.",inference:"המשפחה יצאה לטיול",event:"תמר ארזה מים",info:"תמר",title:"יוצאים לטיול"},
    {text:"רון שמע רעם, ראה ברק וסגר את החלון.",inference:"הייתה סערה",event:"רון סגר את החלון",info:"רון",title:"הסערה"},
    {text:"יעל אפתה עוגה והניחה עליה שבעה נרות.",inference:"למישהו היה יום הולדת",event:"יעל הניחה נרות",info:"שבעה",title:"עוגת יום הולדת"},
    {text:"גיל ראה שהעציץ יבש והשקה אותו.",inference:"הצמח היה זקוק למים",event:"גיל השקה",info:"העציץ",title:"משקים את הצמח"}
  ];
  function readingQuestions(kind,level){
    const out=[];
    readingStories.forEach((story,i)=>{
      if(kind==="inference")out.push(make(`${story.text} מה אפשר להבין?`,story.inference,options(story.inference,readingStories.map(x=>x.inference)), "📖",{skill:"הסקת מסקנות",type:"רמזים מהטקסט"}));
      if(kind==="findInfo")out.push(make(`${story.text} איזה פרט מופיע בטקסט?`,story.info,options(story.info,readingStories.map(x=>x.info)),"📖",{skill:"איתור מידע",type:"מוצאים פרט"}));
      if(kind==="storyTitle")out.push(make(`${story.text} איזו כותרת מתאימה?`,story.title,options(story.title,readingStories.map(x=>x.title)),"📰",{skill:"כותרת",type:"כותרת לסיפור"}));
      if(kind==="trueFalse"){const trueStatement=i%2===0,statement=trueStatement?story.event:"הסיפור התרחש בים";out.push(make(`${story.text} האם נכון לומר: “${statement}”?`,trueStatement?"נכון":"לא נכון",["נכון","לא נכון","אין מספיק מידע","אולי"],"✅",{skill:"הבנת הנקרא",type:"נכון או לא נכון"}));}
    });
    return repeatPool(out);
  }
  function eventOrder(){
    const sequences=[["שותלים זרע","משקים","צומח נבט"],["לובשים גרביים","נועלים נעליים","יוצאים"],["מערבבים בצק","אופים","אוכלים עוגה"],["שוטפים ידיים","מתיישבים","אוכלים"],["פותחים ספר","קוראים","מסיימים סיפור"],["אורזים תיק","יוצאים מהבית","מגיעים לבית הספר"]];
    return repeatPool(sequences.map(tokens=>make("סדרו את האירועים",tokens.join(" ← "),[],tokens.join(" · "),{skill:"רצף אירועים",type:"מה קודם?",mode:"build",tokens:shuffle(tokens),joinWith:" ← "})));
  }
  function sentenceHebrew(){
    const sentences=[["הילד","אוכל","תפוח"],["החתול","ישן","על הכיסא"],["נועה","קוראת","ספר"],["הכלב","רץ","בגינה"],["הציפור","עפה","בשמיים"],["אבא","מכין","סלט"],["הילדים","משחקים","בכדור"]];
    return repeatPool(sentences.map(tokens=>make("סדרו את המילים למשפט",tokens.join(" "),[],tokens[0],{skill:"משפטים",type:"בונים משפט",mode:"build",tokens:shuffle(tokens),joinWith:" ",word:true})));
  }
  function wordSearch(level){
    const words=hebrewWords.map(x=>x[1]).filter(w=>w.length>=3&&w.length<=clamp(3+Math.floor(level/2),4,6));
    return repeatPool(words.map(word=>{const size=Math.max(5,word.length),letters=Array.from({length:size*size},()=>heAlphabet[Math.floor(Math.random()*heAlphabet.length)]),row=Math.floor(Math.random()*size),start=Math.floor(Math.random()*(size-word.length+1)),path=[];[...word].forEach((letter,i)=>{const index=row*size+start+i;letters[index]=letter;path.push(index);});return make(`מצאו את המילה ${word}`,word,[],"🔍",{skill:"תפזורת",type:"חיפוש מילים",mode:"wordsearch",grid:letters,size,path,word:true});}));
  }

  function natureQuestions(kind,level){
    if(kind==="animalSound")return repeatPool(animals.map(a=>make("לחצו לשמוע ובחרו את בעל החיים",a.icon,options(a.icon,animals.map(x=>x.icon)),"🔊",{skill:"קולות של חיות",type:"מי משמיע את הקול?",audio:{kind:"animal",key:a.sound}})));
    if(kind==="oddOneOut"){const groups=[["🐶","🐱","🐰","🚗"],["🍎","🍐","🥭","⚽"],["🐟","🐬","🐋","🦁"],["🌳","🌻","🌵","🚂"],["🥁","🎸","🎹","🥕"],["🐝","🐞","🦋","🐘"]];return repeatPool(groups.map(items=>make("מה לא שייך?",items[3],shuffle(items),items.join(" "),{skill:"מיון",type:"יוצא דופן"})));}
    if(kind==="habitat")return repeatPool(animals.map(a=>make(`איפה חי ${a.he}?`,a.habitat,options(a.habitat,animals.map(x=>x.habitat)),a.icon,{skill:"בתי גידול",type:"בעל חיים וסביבה"})));
    if(kind==="babyAdult")return repeatPool(animals.map(a=>make(`איך נקרא הגור של ${a.he}?`,a.baby,options(a.baby,animals.map(x=>x.baby)),a.icon,{skill:"משפחות בעלי חיים",type:"גור ובוגר"})));
    if(kind==="livingGroups"){const items=[["🐶","חי"],["🌳","צומח"],["🪨","דומם"],["🐝","חי"],["🌻","צומח"],["🚗","דומם"],["🐋","חי"],["🌵","צומח"],["💎","דומם"]];return repeatPool(items.map(([icon,group])=>make("לאיזו קבוצה זה שייך?",group,["חי","צומח","דומם","לא בטוח"],icon,{skill:"מיון בטבע",type:"חי, צומח או דומם"})));}
    if(kind==="plantFood"){const data=[["🍎","עץ תפוח"],["🍐","עץ אגס"],["🥭","עץ מנגו"],["🥥","דקל קוקוס"],["🥕","צמח גזר"],["🌽","צמח תירס"],["🍅","צמח עגבנייה"],["🍇","גפן"]];return repeatPool(data.map(([food,plant])=>make(`על איזה צמח גדל ${food}?`,plant,options(plant,data.map(x=>x[1])),food,{skill:"צמחים ומזון",type:"מה גדל על הצמח?"})));}
    if(kind==="seasons")return repeatPool(seasons.flatMap(([season,icon,activity])=>[make(`לאיזו עונה מתאים הסמל?`,season,options(season,seasons.map(x=>x[0])),icon,{skill:"עונות",type:"עונות השנה"}),make(`באיזו עונה מתאים: ${activity}?`,season,options(season,seasons.map(x=>x[0])),activity,{skill:"עונות",type:"עונות השנה"})]));
    if(kind==="lifeCycle"){const cycles=[["פרפר",["ביצה","זחל","גולם","פרפר"]],["צפרדע",["ביצה","ראשן","צפרדע צעירה","צפרדע"]],["צמח",["זרע","נבט","צמח","פרח"]]];return repeatPool(cycles.map(([name,tokens])=>make(`סדרו את מחזור החיים של ${name}`,tokens.join(" ← "),[],name,{skill:"מחזורי חיים",type:"סדר שלבים",mode:"build",tokens:shuffle(tokens),joinWith:" ← "})));}
    if(kind==="plantParts"){const data=[["שורש","סופג מים מהאדמה","⬇️"],["גבעול","מחזיק את הצמח","🌱"],["עלה","קולט אור","🍃"],["פרח","עוזר ליצור זרעים","🌸"],["פרי","שומר על הזרעים","🍎"]];return repeatPool(data.flatMap(([part,role,icon])=>[make(`איזה חלק בצמח ${role}?`,part,options(part,data.map(x=>x[0])),icon,{skill:"חלקי הצמח",type:"חלק ותפקיד"}),make(`מה תפקיד ה${part}?`,role,options(role,data.map(x=>x[1])),icon,{skill:"חלקי הצמח",type:"חלק ותפקיד"})]));}
    if(kind==="animalFood")return repeatPool(animals.map(a=>make(`מה ${a.he} אוכל?`,a.food,options(a.food,animals.map(x=>x.food)),a.icon,{skill:"תזונת בעלי חיים",type:"מה אוכלים?"})));
    if(kind==="weather"){const data=[["גשום","מעיל גשם","🌧️"],["שמשי","כובע שמש","☀️"],["קר","צעיף","❄️"],["סוער","להישאר במקום מוגן","⛈️"],["חם","לשתות מים","🌡️"]];return repeatPool(data.flatMap(([weather,choice,icon])=>[make(`מה מתאים ליום ${weather}?`,choice,options(choice,data.map(x=>x[1])),icon,{skill:"מזג אוויר",type:"מתלבשים נכון"}),make("איזה מזג אוויר מוצג?",weather,options(weather,data.map(x=>x[0])),icon,{skill:"מזג אוויר",type:"מזהים מזג אוויר"})]));}
    if(kind==="foodChain"){const chains=[["🌿","🐛","🐦"],["🌾","🐭","🦉"],["🌱","🐰","🦊"],["🌿","🦌","🦁"],["🦠","🐟","🐬"]];return repeatPool(chains.map(tokens=>make("סדרו את שרשרת המזון",tokens.join(" ← "),[],tokens.join("  "),{skill:"שרשרת מזון",type:"מי אוכל את מי?",mode:"build",tokens:shuffle(tokens),joinWith:" ← "})));}
    if(kind==="adaptations"){const data=[["🐫","דבשת","עוזרת לשרוד במדבר"],["🐧","שכבת שומן","שומרת על חום הגוף"],["🦆","קרומי שחייה","עוזרים לשחות"],["🦎","צבעי הסוואה","עוזרים להסתתר"],["🦉","עיניים גדולות","עוזרות לראות בלילה"],["🐟","זימים","עוזרים לנשום במים"]];return repeatPool(data.map(([icon,feature,reason])=>make(`למה משמשים ${feature}?`,reason,options(reason,data.map(x=>x[2])),icon,{skill:"התאמה לסביבה",type:"תכונה ותפקיד"})));}
    if(kind==="causeEffect"){const data=[["משקים צמח","הצמח גדל"],["שמים מים במקפיא","המים קופאים"],["מחממים קרח","הקרח נמס"],["מכבים את האור","החדר מחשיך"],["שמים חפץ בשמש","החפץ מתחמם"],["לא משקים צמח","הצמח נובל"],["מערבבים כחול וצהוב","נוצר ירוק"]];return repeatPool(data.map(([cause,effect])=>make(`מה יקרה אם ${cause}?`,effect,options(effect,data.map(x=>x[1])),"🧪",{skill:"סיבה ותוצאה",type:"חושבים כמו מדענים"})));}
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
      case "money": pool=moneyQuestions(level); break;
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
