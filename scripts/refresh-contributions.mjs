/**
 * Refreshes data/contributions.json from GitHub.
 *
 *   npm run refresh:github
 *
 * The contribution calendar is only available through the GraphQL API, which
 * requires auth — this shells out to the `gh` CLI so no token lives in the repo.
 * Run it whenever you want the heatmap to catch up; the site is static, so the
 * graph is frozen at whatever this last wrote.
 */
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const USER = process.argv[2] || "debashishthakur";
const out = join(dirname(fileURLToPath(import.meta.url)), "..", "data", "contributions.json");

const query = `query($u:String!){
  user(login:$u){
    contributionsCollection{
      contributionCalendar{
        totalContributions
        weeks{ firstDay contributionDays{ date contributionCount weekday } }
      }
    }
  }
}`;

let raw;
try {
  raw = execFileSync("gh", ["api", "graphql", "-f", `query=${query}`, "-F", `u=${USER}`], {
    encoding: "utf8",
    maxBuffer: 8 * 1024 * 1024,
  });
} catch (err) {
  console.error(
    "Could not reach GitHub. Install the gh CLI and run `gh auth login` first.",
  );
  console.error(err.stderr?.toString().trim() || err.message);
  process.exit(1);
}

const parsed = JSON.parse(raw);
const calendar = parsed?.data?.user?.contributionsCollection?.contributionCalendar;
if (!calendar) {
  console.error(`No contribution calendar came back for "${USER}".`);
  process.exit(1);
}

writeFileSync(out, `${JSON.stringify(parsed, null, 1)}\n`);
console.log(
  `Wrote ${calendar.totalContributions} contributions across ${calendar.weeks.length} weeks for ${USER}.`,
);
