// Firebase web configuration is intentionally public. Do not place passwords,
// service-account keys or any other secret in this file. Fill these values in
// from Firebase Console before publishing.
export const firebaseConfig = Object.freeze({
  apiKey: "AIzaSyDfgY7Dk282U79whXNepw4H0svxdfuWiTg",
  authDomain: "brightforest-stats.firebaseapp.com",
  projectId: "brightforest-stats",
  appId: "1:414600751649:web:740010e14bbc5664411160"
});

export function firebaseIsConfigured(){
  return Object.values(firebaseConfig).every(value=>typeof value==="string" && value.trim().length>0);
}
