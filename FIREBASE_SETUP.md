# הגדרת סטטיסטיקה אנונימית ב־Firebase

המערכת שומרת ב־Firestore רק את המסמכים `statsDays/YYYY-MM-DD` ו־`statsTotals/games`. כל מסמך מכיל מספר התחלות משחק וזמן עדכון שרת. היא אינה שומרת שם, גיל, תשובה, כתובת IP, מזהה משתמש, cookie, localStorage, User Agent או נתון מכשיר.

## הגדרה

1. ב־Firebase Console צרו פרויקט או בחרו פרויקט קיים.
2. הפעילו **Cloud Firestore** במצב Production.
3. הפעילו **Authentication** ובחרו ספק כניסה עבור האדמין. ההנחיות בדף האדמין תומכות ב־Email/Password.
4. צרו חשבון Email/Password אחד עבור האדמין. חשבון זה משמש רק להגנת דף האדמין; הוא אינו קשור למדידת שחקנים ואינו נשמר ב־Firestore.
5. ב־Project settings > Your apps הוסיפו אפליקציית Web והעתיקו רק את `apiKey`, `authDomain`, `projectId`, `appId` אל `firebase-config.js`. אלו מזהי תצורה ציבוריים, לא סודות. אין להוסיף service account, סיסמה או secret לקבצי האתר.
6. הוסיפו לדומיינים מורשים ב־Authentication את `brightforest.co.il` ואת דומיין GitHub Pages אם עדיין נדרש.
7. הדביקו את תוכן `firestore.rules` בלשונית Firestore > Rules ולחצו Publish.
8. הגדירו לחשבון האדמין Custom Claim בשם `admin: true` באמצעות Firebase Admin SDK בסביבה מאובטחת או Cloud Shell. אין דרך בטוחה להגדיר Custom Claim מהדפדפן הציבורי.

דוגמה חד־פעמית ב־Node.js **מחוץ למאגר ובסביבה מאובטחת בלבד**:

```js
await admin.auth().setCustomUserClaims('FIREBASE_AUTH_UID_OF_ADMIN', { admin: true });
```

לאחר הגדרת ה־claim, התנתקו והתחברו מחדש ל־`admin-stats.html` כדי לקבל טוקן חדש.

## בדיקות אבטחה

ב־Firestore Rules Simulator ודאו:

- משתמש לא מחובר: אין `read` ל־`statsDays` או `statsTotals`.
- משתמש לא מחובר: רק `create` עם `gamesStarted: 1` ו־`updatedAt` של server timestamp, או `update` המגדיל ב־1, מותר.
- משתמש לא מחובר: אין מחיקה, החלפה או כתיבה לשדה אחר.
- משתמש מחובר ללא claim: אין קריאה.
- אדמין עם `admin: true`: קריאה מותרת בלבד.

## גבול אבטחה חשוב

כללי Firestore יכולים לאמת רק את בקשת הנתונים, ולא להוכיח שמשחק אכן נפתח בדפדפן. הקוד שולח את ההגדלה רק אחרי יצירת session תקין, ומונע דיווח כפול בזיכרון של אותה הרצה. משתמש זדוני עדיין יכול לחקות בקשת increment תקינה; מניעת זיוף מוחלט מחייבת שירות צד שרת או מזהה/מנגנון אימות נוסף, שלא נכללו כאן כדי לשמור על אנונימיות מלאה של שחקנים.
