const SUBJECTS = {
  math: { name: "חשבון", icon: "🔢", class: "math", desc: "סופרים, משווים ופותרים", trail: "אחו המספרים" },
  english: { name: "אנגלית", icon: "🔤", class: "english", desc: "אותיות, צלילים ומילים", trail: "יער המילים" },
  reading: { name: "קריאה", icon: "📖", class: "reading", desc: "סיפורים והבנת הנקרא", trail: "מפרץ הסיפורים" },
  nature: { name: "טבע", icon: "🌿", class: "nature", desc: "חיות, מזג אוויר והעולם", trail: "גן התגליות" }
};

const BUDDIES = ["🦊", "🐼", "🐰", "🦁"];
const BUDDY_IMAGES = {
  "🦊": "assets/brightwood-world.png",
  "🐼": "assets/brightwood-panda.png",
  "🐰": "assets/brightwood-rabbit.png",
  "🦁": "assets/brightwood-lion.png"
};
const BUDDY_IMAGES_OLDER = {
  "🦊": "assets/brightwood-older-red-panda.png",
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

const storeKey = "brightwood-quest-v1";
let state = JSON.parse(localStorage.getItem(storeKey) || '{"profiles":[],"activeId":null,"sound":true}');
let session = null;
let selectedAge = 5;
let selectedBuddy = "🦊";
let editingId = null;
let adultUnlocked = false;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const clamp = (n,min,max) => Math.max(min,Math.min(max,n));

function activeProfile(){ return state.profiles.find(p => p.id === state.activeId); }
function ageLevel(age){ return age <= 4 ? 1 : age === 5 ? 2 : age === 6 ? 3 : 4; }
function prepareProfile(p){
  p.subjects ||= ["math","english"];
  p.progress ||= {};
  p.log ||= [];
  p.stars ||= 0; p.streak ||= 0; p.correct ||= 0; p.answered ||= 0; p.minutes ||= 0; p.daily ||= 0;
  p.skillLevels ||= {};
  p.skillFeedback ||= {};
  Object.keys(SUBJECTS).forEach(key => {
    p.skillLevels[key] ||= {};
    p.skillFeedback[key] ||= {};
    [...new Set(BANK[key].map(q=>q.skill))].forEach(skill => p.skillLevels[key][skill] ||= ageLevel(p.age));
  });
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
  $("#streakCount").textContent=p?.streak||0;
  $(".sound-toggle").textContent=state.sound?"🔊":"🔇";
  const today=p?.dailyDate===new Date().toDateString()?p.daily||0:0;
  $("#dailyDone").textContent=`${Math.min(today,3)} / 3`;
  $("#dailyBar").style.width=`${Math.min(today/3*100,100)}%`;
  $("#continueButton").innerHTML=p?.answered ? `ממשיכים בהרפתקה <span>←</span>` : `מתחילים בהרפתקה <span>←</span>`;
  renderHero();
  renderSubjects();
  renderProfiles();
  renderSubjectToggles();
  if($("#dashboardScreen").classList.contains("active")) renderDashboard();
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
    return `<button class="subject-card ${s.class}" data-subject="${key}"><span class="level-chip">שלב ${level}</span><span class="icon">${s.icon}</span><h3>${s.name}</h3><p>${s.desc}</p><span class="go">←</span></button>`;
  }).join("");
}

function renderProfiles(){
  $("#profilesList").innerHTML=state.profiles.map(p=>`<div class="profile-row"><button class="profile-option" data-profile="${p.id}"><span class="mini-avatar">${p.buddy}</span><span><b>${escapeHtml(p.name)}</b><small>גיל ${p.age} · ${p.subjects.length} נושאים</small></span><span class="stars">★ ${p.stars}</span></button><button class="profile-edit" data-edit-profile="${p.id}" aria-label="עריכת הפרופיל של ${escapeHtml(p.name)}">✎</button></div>`).join("");
}

function renderSubjectToggles(){
  const chosen=activeProfile()?.subjects||Object.keys(SUBJECTS);
  $("#subjectToggles").innerHTML=Object.entries(SUBJECTS).map(([k,s])=>`<button class="subject-toggle ${chosen.includes(k)?"selected":""}" data-toggle-subject="${k}">${s.icon} ${s.name}<br><small>${s.desc}</small></button>`).join("");
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
    state.profiles.push(p); state.activeId=p.id; save(); closeModal("createModal"); renderAll(); openModal("subjectModal");
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
  const questions=[...BANK[subject]].sort(()=>Math.random()-.5).slice(0,5).map(q=>adaptedQuestion(q,p,subject));
  session={subject,questions,index:0,correct:0,start:Date.now(),locked:false,results:{}};
  showScreen("gameScreen"); renderQuestion();
}

function renderQuestion(){
  const q=session.questions[session.index], s=SUBJECTS[session.subject], p=activeProfile();
  $("#gameSubject").textContent="שביל "+s.name;
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
  session.locked=false;
  setTimeout(()=>speakQuestion(),250);
}

function speakQuestion(){
  if(!state.sound || !("speechSynthesis" in window) || !session)return;
  speechSynthesis.cancel();
  const q=session.questions[session.index];
  const parts=q.q.split(/([A-Za-z]+(?:\s+[A-Za-z]+)*)/g).filter(part=>part.trim());
  parts.forEach(part=>{
    const isEnglish=/[A-Za-z]/.test(part);
    const utter=new SpeechSynthesisUtterance(part);
    utter.lang=isEnglish?"en-US":"he-IL";
    utter.rate=isEnglish ? .72 : .82;
    utter.pitch=1.08;
    speechSynthesis.speak(utter);
  });
}

function answer(value,button){
  if(session.locked)return; session.locked=true;
  window.speechSynthesis?.cancel();
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
    return `<div class="progress-row"><span class="trail-icon">${s.icon}</span><b>${s.name}</b><div class="bar"><i style="width:${pct}%"></i></div><small>${x?.completed||0}/10</small></div>`;
  }).join("");
  $("#activityLog").innerHTML=p.log.length?p.log.map(x=>`<div class="log-row"><span class="log-icon">${SUBJECTS[x.subject].icon}</span><div><b>${SUBJECTS[x.subject].trail}</b><small>${x.correct} מתוך ${x.total} תשובות נכונות · ${x.date}</small></div></div>`).join(""):`<div class="empty-state">עוד אין הרפתקאות. בחרו שביל והסיפור מתחיל!</div>`;
  renderDifficulty(p);
  const skills=[];
  Object.entries(p.skillLevels).forEach(([subject,map])=>Object.entries(map).forEach(([skill,level])=>skills.push({subject,skill,level})));
  if(p.answered&&skills.length){
    const weak=[...skills].sort((a,b)=>a.level-b.level)[0];
    $("#insightTitle").textContent=`כדאי לתרגל: ${weak.skill}`;
    $("#insightText").textContent=`אפשר לחזק את ${weak.skill} בנושא ${SUBJECTS[weak.subject].name}. המשחק יתאים את השאלות בהדרגה, בקצב נעים וללא לחץ.`;
  } else {
    $("#insightTitle").textContent="מוכנים להרפתקה הראשונה";
    $("#insightText").textContent="השלימו שביל ופיפ ישתף כאן תובנה על הלמידה.";
  }
}

function renderDifficulty(p){
  $("#difficultyControls").innerHTML=p.subjects.map(key=>{
    const skills=[...new Set(BANK[key].map(q=>q.skill))];
    const rows=skills.map(skill=>{
      const feedback=p.skillFeedback[key][skill]||"ok", level=p.skillLevels[key][skill];
      return `<div class="skill-row"><span>${skill}<small class="level-badge">שלב ${level}</small></span><div class="level-adjust"><button class="${feedback==="up"?"selected":""}" data-adjust="${key}|${escapeHtml(skill)}|up">קל מדי</button><button class="${feedback==="ok"?"selected":""}" data-adjust="${key}|${escapeHtml(skill)}|ok">מתאים</button><button class="${feedback==="down"?"selected":""}" data-adjust="${key}|${escapeHtml(skill)}|down">קשה מדי</button></div></div>`;
    }).join("");
    return `<section class="difficulty-subject"><h3>${SUBJECTS[key].icon} ${SUBJECTS[key].name}</h3>${rows}</section>`;
  }).join("");
}

function adjustDifficulty(data){
  const [subject,skill,choice]=data.split("|"),p=activeProfile(),current=p.skillLevels[subject][skill]||ageLevel(p.age);
  p.skillFeedback[subject][skill]=choice;
  if(choice==="up")p.skillLevels[subject][skill]=clamp(current+1,1,5);
  if(choice==="down")p.skillLevels[subject][skill]=clamp(current-1,1,5);
  save(); renderDashboard(); renderSubjects();
}

function exportProgress(){
  const p=activeProfile(); if(!p)return;
  const report={
    child:{name:p.name,age:p.age,buddy:p.buddy},
    summary:{stars:p.stars,answered:p.answered,correct:p.correct,minutes:p.minutes},
    topics:p.subjects.map(key=>({topic:SUBJECTS[key].name,level:subjectLevel(p,key),completed:p.progress[key]?.completed||0,skills:p.skillLevels[key]})),
    recent:p.log
  };
  const blob=new Blob([JSON.stringify(report,null,2)],{type:"application/json;charset=utf-8"});
  const url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url;a.download=`brightwood-${p.name}.json`;a.click();URL.revokeObjectURL(url);
}

function resetProgress(){
  const p=activeProfile(); if(!p)return;
  if(!confirm(`לאפס את כל ההתקדמות של ${p.name}? הפעולה אינה ניתנת לביטול.`))return;
  Object.assign(p,{stars:0,streak:0,progress:{},log:[],correct:0,answered:0,minutes:0,daily:0,dailyDate:"",skillLevels:{},skillFeedback:{}});
  prepareProfile(p); save(); renderAll(); renderDashboard();
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
  $("#dashboardButton").onclick=()=>{if(!activeProfile())return openCreate();if(adultUnlocked)return showScreen("dashboardScreen");$("#adultAnswer").value="";$("#gateError").textContent="";openModal("adultGateModal")};
  $("#adultGateForm").onsubmit=e=>{e.preventDefault();if($("#adultAnswer").value.trim()==="93"){adultUnlocked=true;closeModal("adultGateModal");showScreen("dashboardScreen")}else $("#gateError").textContent="התשובה אינה נכונה. נסו שוב."};
  $("#printReport").onclick=()=>window.print();
  $("#exportReport").onclick=exportProgress;
  $("#resetProgress").onclick=resetProgress;
  $(".sound-toggle").onclick=e=>{state.sound=!state.sound;e.currentTarget.textContent=state.sound?"🔊":"🔇";save();if(state.sound)chime(true);else window.speechSynthesis?.cancel()};
  $("#listenAgain").onclick=speakQuestion;
  $("#continueButton").onclick=()=>{const p=activeProfile();if(!p)return openCreate();startGame(p.subjects[0])};
  $("#randomButton").onclick=()=>{const p=activeProfile();if(!p)return openCreate();startGame(p.subjects[Math.floor(Math.random()*p.subjects.length)])};
  $$(".modal-backdrop").forEach(m=>m.addEventListener("click",e=>{if(e.target===m&&m.id!=="createModal"&&!(!activeProfile()&&m.id==="profileModal"))closeModal(m.id)}));
}

init();
