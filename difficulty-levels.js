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
  const fractionLevels = [
    [[1,2],[1,4]],
    [[3,4],[1,3]],
    [[2,3]],
    [[1,5],[2,5]],
    [[3,5],[4,5]],
    [[1,6],[2,6],[3,6],[4,6],[5,6]],
    [[1,7],[2,7],[3,7],[4,7],[5,7],[6,7]],
    [[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8]],
    [[1,6],[3,6],[5,6],[1,7],[4,7],[6,7],[1,8],[3,8],[5,8],[7,8]]
  ];
  const fractionColors = ["כחול","אדום","סגול","ירוק","כתום"];
  const fractionColorClasses = ["blue","red","purple","green","orange"];
  const livingItems = [
    ["🐶","כלב","חי"],["🌳","עץ","צומח"],["⚽","כדור","דומם"],
    ["🐝","דבורה","חי"],["🌻","חמנייה","צומח"],["🚗","מכונית","דומם"],
    ["🐋","לווייתן","חי"],["🌵","קקטוס","צומח"],["💎","יהלום","דומם"]
  ];
  const seasonLevels = [
    [["לאיזו עונה מתאים הסמל?","חורף","❄️"],["לאיזו עונה מתאים הסמל?","אביב","🌸"],["לאיזו עונה מתאים הסמל?","קיץ","☀️"],["לאיזו עונה מתאים הסמל?","סתיו","🍂"]],
    [["באיזו עונה מתאים ללבוש מעיל?","חורף","🧥"],["באיזו עונה מתאים טיול בין פרחים?","אביב","🌷"],["באיזו עונה מתאים כובע שמש?","קיץ","🧢"],["באיזו עונה מתאימים עלים נושרים?","סתיו","🍁"]],
    [["באיזו עונה בדרך כלל יורד הרבה גשם?","חורף","🌧️"],["באיזו עונה מתחילים לפרוח פרחים?","אביב","🌼"],["באיזו עונה חם מאוד?","קיץ","🌡️"],["באיזו עונה העלים משנים צבע?","סתיו","🍂"]],
    [["הילדים קופצים בשלוליות. איזו עונה זו?","חורף","💦"],["הדבורים עפות בין פרחים חדשים. איזו עונה זו?","אביב","🐝"],["המשפחה הולכת לים. איזו עונה זו?","קיץ","🏖️"],["נושבת רוח ועלים נופלים מהעצים. איזו עונה זו?","סתיו","🌬️"]],
    [["באיזו עונה כדאי לשתות מים קרים ביום חם מאוד?","קיץ","🧊"],["מתי כדאי לקחת מטרייה ומגפיים?","חורף","☔"],["מתי אפשר לראות הרבה פרפרים ליד פרחים?","אביב","🦋"],["מתי מתאים ללבוש סוודר קל?","סתיו","🧶"],["מתי נעים לצאת לפיקניק בין הפרחים?","אביב","🧺"],["מתי השמש חזקה וכדאי לחפש צל?","קיץ","🌞"],["מתי השלוליות נשארות ברחוב אחרי הגשם?","חורף","🥾"],["מתי אוספים עלים צבעוניים מהאדמה?","סתיו","🍃"]]
  ];

  window.KIDS_GAMES.build = (gameId, level, profile) => {
    const realLevel = clamp(Number(level) || 1, 1, 5);
    let pool;
    if (gameId === "seasons") {
      const seasonLevel = clamp(Number(level) || 1, 1, 5);
      const answerCount = seasonLevel === 1 ? 2 : seasonLevel === 2 ? 3 : 4;
      pool = repeat(seasonLevels[seasonLevel - 1].map(([prompt, answer, visual]) => question(
        prompt,
        answer,
        choices(answer, ["חורף","אביב","קיץ","סתיו"], answerCount),
        visual,
        "עונות",
        `עונות השנה — רמה ${seasonLevel}`
      )));
    } else if (gameId === "living-groups") {
      const active = livingItems.slice(0, Math.min(livingItems.length, 2 + realLevel * 2));
      const answerCount = realLevel === 1 ? 2 : realLevel === 2 ? 3 : 4;
      pool = repeat(active.map(([visual, label, answer]) => question(
        realLevel === 5 ? `לאיזו קבוצה שייך ${label}?` : "לאיזו קבוצה זה שייך?",
        answer,
        choices(answer, ["חי","צומח","דומם","לא בטוח"], answerCount),
        realLevel === 5 ? "" : visual,
        "מיון בטבע",
        realLevel === 5 ? "מיון לפי מילה" : "חי, צומח או דומם"
      )));
    } else if (gameId === "adaptations") {
      const answerCount = realLevel === 1 ? 2 : realLevel === 2 ? 3 : 4;
      pool = repeat(adaptations[realLevel - 1].map(([visual, q, correct, wrong]) => question(q, correct, choices(correct, wrong, answerCount), visual, "התאמה לסביבה", `תכונה ותפקיד — רמה ${realLevel}`)));
    } else if (gameId === "cause-effect") {
      const answerCount = realLevel === 1 ? 2 : realLevel === 2 ? 3 : 4;
      const allEffects = causes.flatMap(tier => tier.map(([, effect]) => effect));
      pool = repeat(causes[realLevel - 1].map(([cause, effect]) => question(`מה יקרה אם ${cause}?`, effect, choices(effect, allEffects, answerCount), "🧪", "סיבה ותוצאה", `חושבים כמו מדענים — רמה ${realLevel}`)));
    } else if (gameId === "fractions") {
      const fractionLevel = clamp(Number(level) || 1, 1, 9);
      const active = fractionLevels[fractionLevel - 1];
      const allFractions = fractionLevels.flat().map(([numerator, denominator]) => `${numerator}/${denominator}`);
      pool = repeat(active.map(([numerator, denominator], index) => {
        const answer = `${numerator}/${denominator}`;
        const colorIndex = index % fractionColors.length;
        return {
          ...question(`איזה חלק צבוע ב${fractionColors[colorIndex]}?`, answer, choices(answer, allFractions, 4), "●".repeat(numerator) + "○".repeat(denominator - numerator), "שברים", `איזה חלק זה? — רמה ${fractionLevel}`),
          fractionColor: fractionColorClasses[colorIndex]
        };
      }));
    }
    if (!pool) return originalBuild(gameId, level, profile);
    const idLevel = gameId === "fractions" ? clamp(Number(level) || 1, 1, 9) : realLevel;
    return pool.map((item, index) => ({ ...item, id: `${gameId}-${idLevel}-${index}`, gameId }));
  };
})();
