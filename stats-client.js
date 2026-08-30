import { firebaseConfig, firebaseIsConfigured } from "./firebase-config.js";

// Deliberately page-memory-only. It is never persisted, never sent, and cannot
// identify a player, browser or device after the page closes.
const reportedSessions = new WeakSet();
const reportedTrophyMilestones = new WeakSet();
let lastReportAttemptAt = -Infinity;

function israelDateKey(now=new Date()){
  const parts=new Intl.DateTimeFormat("en-CA",{
    timeZone:"Asia/Jerusalem",year:"numeric",month:"2-digit",day:"2-digit"
  }).formatToParts(now).reduce((result,part)=>{
    if(part.type!=="literal")result[part.type]=part.value;
    return result;
  },{});
  return `${parts.year}-${parts.month}-${parts.day}`;
}

let firebase=null;
async function database(){
  if(!firebaseIsConfigured())return null;
  if(!firebase){
    const [appSdk,firestoreSdk]=await Promise.all([
      import("https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js")
    ]);
    const app=appSdk.getApps().length?appSdk.getApps()[0]:appSdk.initializeApp(firebaseConfig);
    firebase={db:firestoreSdk.getFirestore(app),...firestoreSdk};
  }
  return firebase;
}

async function recordGameStart(gameSession){
  const now=performance.now();
  // Covers an accidental duplicate click/event in the same moment without
  // storing anything after this page run. A real next game cannot start in
  // this short interval because the current game must first be completed.
  if(!gameSession || reportedSessions.has(gameSession) || now-lastReportAttemptAt<500)return;
  reportedSessions.add(gameSession);
  lastReportAttemptAt=now;
  const sdk=await database();
  if(!sdk)return;

  // A single atomic batch increments only anonymous aggregate counters.
  // No player name, age, IP, identifier, URL, device data or answer is read
  // or transmitted by this module.
  try{
    const batch=sdk.writeBatch(sdk.db);
    const fields={gamesStarted:sdk.increment(1),updatedAt:sdk.serverTimestamp()};
    batch.set(sdk.doc(sdk.db,"statsDays",israelDateKey()),fields,{merge:true});
    batch.set(sdk.doc(sdk.db,"statsTotals","games"),fields,{merge:true});
    await batch.commit();
  }catch(error){
    // Statistics must never interrupt a game. Errors are intentionally not
    // retried automatically, which also avoids technical duplicate counts.
    console.warn("Anonymous game-start counter was not recorded.",error);
  }
}

async function recordTrophyEarned(milestone){
  // The milestone object exists only for the current answer. This avoids a
  // duplicate request in the same page run without persisting any identity.
  if(!milestone || reportedTrophyMilestones.has(milestone))return;
  reportedTrophyMilestones.add(milestone);
  const sdk=await database();
  if(!sdk)return;
  try{
    const fields={trophiesEarned:sdk.increment(1),updatedAt:sdk.serverTimestamp()};
    const batch=sdk.writeBatch(sdk.db);
    batch.set(sdk.doc(sdk.db,"trophyStatsDays",israelDateKey()),fields,{merge:true});
    batch.set(sdk.doc(sdk.db,"statsTotals","trophies"),fields,{merge:true});
    await batch.commit();
  }catch(error){
    // A reporting problem never changes the reward shown to the child.
    console.warn("Anonymous trophy counter was not recorded.",error);
  }
}

window.BrightForestStats=Object.freeze({recordGameStart,recordTrophyEarned});
