/* Additional five-level generators kept separate from the main question bank. */
(() => {
  const originalBuild = window.KIDS_GAMES.build;
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  const shuffle = items => [...items].sort(() => Math.random() - .5);
  const choices = (correct, wrong, count) => shuffle([correct, ...shuffle(wrong.filter(item => item !== correct)).slice(0, count - 1)]);
  const repeat = items => Array.from({ length: Math.max(12, items.length) }, (_, i) => ({ ...items[i % items.length] }));
  const question = (q, correct, answers, visual, skill, type) => ({ q, correct, a: answers, visual, skill, type, explain: `התשובה הנכונה היא ${correct}.` });

  const adaptations = [
    [["🐫","למה משמשת הדבשת של הגמל?","לשרוד במדבר",["לשמור על חום הגוף"]],["🦆","למה משמשים קרומי השחייה של הברווז?","לשחות",["להגן על הרגליים"]]],
    [["🐧","למה משמשת שכבת השומן של הפינגווין?","לשמור על חום הגוף",["לשחות למרחקים ארוכים","להגן עליו מפני אויבים"]],["🐟","למה משמשים הזימים של הדג?","לנשום במים",["לנשום מחוץ למים","להגן עליו"]]],
    [["🦉","למה משמשות העיניים הגדולות של הינשוף?","לראות היטב בלילה",["להפחיד אויבים","לראות היטב ביום","להיראות יפה יותר"]],["🦒","למה משמש הצוואר הארוך של הג'ירפה?","להגיע לעלים גבוהים",["לשתות בלי להיכנס למים","לראות למרחוק","להיראות יפה יותר"]]],
    [["🦔","למה משמשים הקוצים של הקיפוד?","להגן עליו מפני טורפים",["לחמם את הקיפודונים","לשמור על חום הגוף","לקרר את הגוף"]],["🦫","למה משמש הזנב השטוח של הבונה?","לשחות ולתקשר במים",["להגן מפני אויבים","לבניית סכרים","לחימום הגוף"]]],
    [["🐻‍❄️","למה משמשות הכפות הרחבות של דוב הקוטב?","ללכת על שלג ולשחות",["לטפס על עצים","לחמם את הדובונים","לשמור על חום הגוף"]],["🌵","למה משמשים הקוצים של הקקטוס?","להגן עליו ולצמצם איבוד מים",["לצמוח גבוה","לפזר זרעים","למשוך חרקים"]]]
  ];
  const causes = [
    [["משקים צמח","הצמח גדל"],["מכבים את האור","החדר מחשיך"]],
    [["שמים מים במקפיא","המים קופאים"],["מחממים קרח","הקרח נמס"]],
    [["שמים חפץ בשמש","החפץ מתחמם"],["פותחים חלון","נכנס אוויר"]],
    [["לא משקים צמח","הצמח נובל"],["מערבבים כחול וצהוב","נוצר ירוק"]],
    [["זורקים כדור למעלה","הכדור נופל בחזרה"],["שמים זרעים באדמה ומשקים","יכולים לצמוח נבטים"]]
  ];

  window.KIDS_GAMES.build = (gameId, level, profile) => {
    const realLevel = clamp(Number(level) || 1, 1, 5);
    let pool;
    if (gameId === "adaptations") {
      const answerCount = realLevel === 1 ? 2 : realLevel === 2 ? 3 : 4;
      pool = repeat(adaptations[realLevel - 1].map(([visual, q, correct, wrong]) => question(q, correct, choices(correct, wrong, answerCount), visual, "התאמה לסביבה", `תכונה ותפקיד — רמה ${realLevel}`)));
    } else if (gameId === "cause-effect") {
      const answerCount = realLevel === 1 ? 2 : realLevel === 2 ? 3 : 4;
      const allEffects = causes.flatMap(tier => tier.map(([, effect]) => effect));
      pool = repeat(causes[realLevel - 1].map(([cause, effect]) => question(`מה יקרה אם ${cause}?`, effect, choices(effect, allEffects, answerCount), "🧪", "סיבה ותוצאה", `חושבים כמו מדענים — רמה ${realLevel}`)));
    }
    if (!pool) return originalBuild(gameId, level, profile);
    return pool.map((item, index) => ({ ...item, id: `${gameId}-${realLevel}-${index}`, gameId }));
  };
})();
