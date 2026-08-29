import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore, collection, doc, getDoc, getDocs, writeBatch, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
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
  const total=values.reduce((sum,value)=>sum+value,0);
  const chart=$("#weeklyChart"),detail=$("#weeklyChartDetail");
  const width=600,left=48,right=580,top=18,bottom=174,chartHeight=bottom-top;
  const xFor=index=>right-index*(right-left)/(Math.max(1,weeks.length-1));
  const yFor=value=>bottom-(value/max)*chartHeight;
  const pointInfo=index=>{
    const week=weeks[index],value=values[index]||0;
    return `${week.label}: ${number(value)} משחקים (${week.dates[0]}–${week.dates.at(-1)})`;
  };
  const grid=[max,Math.ceil(max/2),0].filter((value,index,array)=>array.indexOf(value)===index).map(value=>{
    const y=yFor(value);
    return `<g class="chart-grid"><line x1="${left}" y1="${y}" x2="${right}" y2="${y}"/><text x="${left-9}" y="${y+4}">${number(value)}</text></g>`;
  }).join("");
  const path=values.map((value,index)=>`${index?"L":"M"}${xFor(index).toFixed(1)},${yFor(value||0).toFixed(1)}`).join(" ");
  const labels=weeks.map((week,index)=>{
    const label=index===0?"השבוע":index%5===0?`לפני ${index} שבועות`:"";
    return label?`<text class="chart-x-label" x="${xFor(index)}" y="${bottom+27}">${label}</text>`:"";
  }).join("");
  // Zero-value weeks remain in the line but get no dot: a dot for every empty
  // week looks like an unexplained row of circles at the bottom of the chart.
  const points=weeks.map((week,index)=>{
    if(!(values[index]>0))return "";
    const value=values[index]||0,x=xFor(index),y=yFor(value);
    return `<g class="chart-point" data-week-index="${index}" tabindex="0" role="button" aria-label="${pointInfo(index)}"><title>${pointInfo(index)}</title><circle cx="${x}" cy="${y}" r="7"/></g>`;
  }).join("");
  chart.innerHTML=`<svg viewBox="0 0 ${width} 215" preserveAspectRatio="none" role="group" aria-label="משחקים בכל שבוע"><title>משחקים בכל שבוע</title>${grid}<path class="chart-line" d="${path}"/>${points}${labels}</svg>`;
  setText("#weeklyChartSummary",`השבוע: ${number(values[0])} משחקים · השיא השבועי: ${number(max)} · סך הכול ב־30 השבועות: ${number(total)}`);
  const selectPoint=index=>{
    chart.querySelectorAll(".chart-point").forEach(point=>point.classList.toggle("selected",Number(point.dataset.weekIndex)===index));
    setText("#weeklyChartDetail",pointInfo(index));
  };
  chart.onclick=event=>{const point=event.target.closest(".chart-point");if(point)selectPoint(Number(point.dataset.weekIndex))};
  chart.onkeydown=event=>{if((event.key==="Enter"||event.key===" ")&&event.target.closest(".chart-point")){event.preventDefault();selectPoint(Number(event.target.closest(".chart-point").dataset.weekIndex))}};
  const firstWeekWithGames=values.findIndex(value=>value>0);
  selectPoint(firstWeekWithGames>=0?firstWeekWithGames:0);
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
      const [totalSnapshot,resetSnapshot,...dailySnapshots]=await Promise.all([
        getDoc(doc(db,"statsTotals","games")),
        getDoc(doc(db,"statsMeta","reset")),
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
      const lastReset=resetSnapshot.exists()?resetSnapshot.data().lastResetAt?.toDate?.():null;
      setText("#lastReset",lastReset?`איפוס אחרון: ${lastReset.toLocaleString("he-IL")}`:"עדיין לא בוצע איפוס.");
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
  $("#resetStats").addEventListener("click",async()=>{
    if(!window.confirm("לאפס את כל מוני המשחקים? הפעולה תמחק את המונים המצרפיים ולא ניתן לשחזר אותם."))return;
    const resetButton=$("#resetStats");
    resetButton.disabled=true;
    setText("#resetStatus","מאפסים את המונים…");
    try{
      const daySnapshots=await getDocs(collection(db,"statsDays"));
      const operations=[...daySnapshots.docs.map(snapshot=>snapshot.ref),doc(db,"statsTotals","games")];
      // Firestore allows up to 500 operations per batch. Chunks make reset
      // safe even after counters have been collected for many years.
      while(operations.length){
        const batch=writeBatch(db);
        operations.splice(0,450).forEach(reference=>batch.delete(reference));
        await batch.commit();
      }
      const markerBatch=writeBatch(db);
      markerBatch.set(doc(db,"statsMeta","reset"),{lastResetAt:serverTimestamp()},{merge:true});
      await markerBatch.commit();
      setText("#resetStatus","המונים אופסו.");
      await loadStats();
    }catch(error){
      setText("#resetStatus","לא ניתן לאפס את המונים. ודאו שלחשבון יש הרשאת אדמין.");
      console.warn("Could not reset anonymous statistics.",error);
    }finally{resetButton.disabled=false}
  });

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
