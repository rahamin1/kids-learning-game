import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { firebaseConfig, firebaseIsConfigured } from "./firebase-config.js";

const $=selector=>document.querySelector(selector);
const setText=(selector,value)=>$(selector).textContent=value;
const number=value=>new Intl.NumberFormat("he-IL").format(Number(value)||0);

function israelDateKey(daysAgo=0){
  const date=new Date(Date.now()-daysAgo*86400000);
  const parts=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Jerusalem",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(date).reduce((result,part)=>{
    if(part.type!=="literal")result[part.type]=part.value;
    return result;
  },{});
  return `${parts.year}-${parts.month}-${parts.day}`;
}
function israelWeekday(){
  return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Jerusalem",weekday:"short"}).format(new Date());
}
function lastThirtyWeeks(){
  const weekdays={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6};
  const daysSinceSunday=weekdays[israelWeekday()]??0;
  return Array.from({length:30},(_,weekIndex)=>{
    const startDaysAgo=daysSinceSunday+weekIndex*7;
    // A calendar week runs Sunday–Saturday. The current week is naturally
    // partial, so future days are never requested or counted.
    const dates=Array.from({length:7},(_,dayIndex)=>startDaysAgo-dayIndex)
      .filter(daysAgo=>daysAgo>=0)
      .map(daysAgo=>israelDateKey(daysAgo));
    return {dates,label:weekIndex===0?"השבוע":`לפני ${weekIndex} שבועות`};
  });
}
function renderWeeklyChart(weeks,values){
  const max=Math.max(1,...values);
  $("#weeklyChart").innerHTML=weeks.map((week,index)=>{
    const total=values[index]||0;
    const start=week.dates[0],end=week.dates.at(-1);
    const percent=total?Math.max(7,Math.round(total/max*100)):2;
    const label=index===0?"השבוע":index%5===0?`${index} ש׳`:"";
    return `<div class="weekly-bar-column" title="${week.label}: ${number(total)} משחקים (${start}–${end})" aria-label="${week.label}: ${number(total)} משחקים"><b>${number(total)}</b><i style="--bar-height:${percent}%"></i><small>${label}</small></div>`;
  }).join("");
}

if(!firebaseIsConfigured()){
  setText("#loginStatus","יש להשלים תחילה את firebase-config.js לפי הוראות ההתקנה.");
}else{
  const app=getApps().length?getApps()[0]:initializeApp(firebaseConfig);
  const auth=getAuth(app),db=getFirestore(app);

  async function loadStats(){
    setText("#statsUpdated","טוענים נתונים…");
    try{
      const dates=Array.from({length:7},(_,index)=>israelDateKey(index));
      const weeks=lastThirtyWeeks();
      const chartDates=[...new Set(weeks.flatMap(week=>week.dates))];
      const [totalSnapshot,...dailySnapshots]=await Promise.all([
        getDoc(doc(db,"statsTotals","games")),
        ...chartDates.map(date=>getDoc(doc(db,"statsDays",date)))
      ]);
      const dailyByDate=new Map(chartDates.map((date,index)=>[date,dailySnapshots[index].exists()?Number(dailySnapshots[index].data().gamesStarted)||0:0]));
      const daily=dates.map(date=>dailyByDate.get(date)||0);
      setText("#metricToday",number(daily[0]));
      setText("#metricYesterday",number(daily[1]));
      setText("#metricWeek",number(daily.reduce((sum,value)=>sum+value,0)));
      setText("#metricTotal",number(totalSnapshot.exists()?totalSnapshot.data().gamesStarted:0));
      renderWeeklyChart(weeks,weeks.map(week=>week.dates.reduce((sum,date)=>sum+(dailyByDate.get(date)||0),0)));
      const stamps=[totalSnapshot,...dailySnapshots].filter(snapshot=>snapshot.exists()).map(snapshot=>snapshot.data().updatedAt?.toDate?.()).filter(Boolean);
      const latest=stamps.sort((a,b)=>b-a)[0];
      setText("#statsUpdated",latest?`עדכון אחרון: ${latest.toLocaleString("he-IL")}`:"עדיין לא התקבלו נתונים.");
    }catch(error){
      setText("#statsUpdated","לא ניתן לטעון נתונים. ודאו שלחשבון יש הרשאת אדמין.");
      console.warn("Could not load anonymous statistics.",error);
    }
  }

  $("#adminSignIn").addEventListener("click",async()=>{
    const email=$("#adminEmail").value.trim(),password=$("#adminPassword").value;
    if(!email||!password){setText("#loginStatus","יש להזין דוא״ל וסיסמה.");return}
    setText("#loginStatus","מתחברים…");
    try{await signInWithEmailAndPassword(auth,email,password);setText("#loginStatus","")}catch(error){setText("#loginStatus","לא ניתן להתחבר. בדקו את פרטי הכניסה.");console.warn("Admin sign-in failed.",error)}
  });
  $("#adminSignOut").addEventListener("click",()=>signOut(auth));
  $("#refreshStats").addEventListener("click",loadStats);

  onAuthStateChanged(auth,async user=>{
    if(!user){$("#loginCard").classList.remove("hidden");$("#dashboard").classList.add("hidden");return}
    const token=await user.getIdTokenResult();
    if(token.claims.admin!==true){
      await signOut(auth);
      setText("#loginStatus","לחשבון זה אין הרשאת אדמין.");
      return;
    }
    $("#loginCard").classList.add("hidden");$("#dashboard").classList.remove("hidden");
    setText("#adminIdentity","אדמין מחובר/ת");
    loadStats();
  });
}
