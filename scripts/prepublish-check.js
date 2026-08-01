#!/usr/bin/env node
/*
 * Required local check before publishing a game version.
 *
 * Run only for game banks changed in the release, for example:
 *   node scripts/prepublish-check.js word-categories build-word-en shapes
 */
const { spawnSync } = require("child_process");
const path = require("path");

const gameIds = process.argv.slice(2);
if (!gameIds.length) {
  console.error("Choose at least one changed or new game id.");
  console.error("Example: node scripts/prepublish-check.js shapes word-categories");
  process.exit(1);
}

const root = path.resolve(__dirname, "..");
const checks = [
  [process.execPath, ["--check", "app.js"]],
  [process.execPath, ["--check", "games.js"]],
  [process.execPath, ["--check", "difficulty-levels.js"]],
  [process.execPath, ["--check", "expanded-question-banks.js"]],
  [process.execPath, ["scripts/audit-game-levels.js", ...gameIds]]
];

for (const [command, args] of checks) {
  const result = spawnSync(command, args, { cwd: root, stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status || 1);
}

console.log(`Pre-publish checks passed for: ${gameIds.join(", ")}`);
