import { Panel } from "@/components/panel";
import calendarJson from "@/data/contributions.json";
import { profile } from "@/data/profile";

const calendar =
  calendarJson.data.user.contributionsCollection.contributionCalendar;

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/* Four filled steps plus an empty one, scaled against this account's own
   busiest day — a fixed scale would read as inactive for most people. */
const busiest = Math.max(
  1,
  ...calendar.weeks.flatMap((w) => w.contributionDays.map((d) => d.contributionCount)),
);

function level(count: number) {
  if (count === 0) return 0;
  return Math.min(4, Math.ceil((count / busiest) * 4));
}

const STEP = [
  "bg-muted",
  "bg-accent/30",
  "bg-accent/50",
  "bg-accent/75",
  "bg-accent",
];

export function Contributions() {
  // A month label sits above the first week that lands in a new month, unless
  // that month has too few columns left to hold the word without colliding.
  let previousMonth = -1;
  let lastLabelAt = -99;
  const columns = calendar.weeks.map((week, i) => {
    const month = new Date(`${week.firstDay}T00:00:00Z`).getUTCMonth();
    const isNew = month !== previousMonth && i - lastLabelAt >= 3;
    previousMonth = month;
    if (isNew) lastLabelAt = i;
    return { week, label: isNew ? MONTHS[month] : null };
  });

  return (
    <Panel>
      <h2 className="sr-only">GitHub contributions</h2>
      <div className="overflow-x-auto p-4">
        <div className="min-w-max">
          {/* Labels are placed on the column pitch (10px cell + 3px gap) so a
              word wider than its own column cannot shove the row out of step. */}
          <div className="relative h-4">
            {columns.map(({ week, label }, i) =>
              label ? (
                <span
                  key={week.firstDay}
                  className="absolute top-0 font-mono text-[0.625rem] text-muted-foreground"
                  style={{ left: `${i * 13}px` }}
                >
                  {label}
                </span>
              ) : null,
            )}
          </div>

          <div className="flex gap-[3px]">
            {columns.map(({ week }) => (
              <div key={week.firstDay} className="grid gap-[3px]">
                {Array.from({ length: 7 }, (_, weekday) => {
                  const day = week.contributionDays.find(
                    (d) => d.weekday === weekday,
                  );
                  if (!day) {
                    return <span key={weekday} className="size-2.5" />;
                  }
                  return (
                    <span
                      key={day.date}
                      title={`${day.contributionCount} on ${day.date}`}
                      className={`size-2.5 rounded-[2px] ${STEP[level(day.contributionCount)]}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="screen-line-before flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 font-mono text-xs text-muted-foreground">
        <span>
          <span className="tnum text-foreground">
            {calendar.totalContributions}
          </span>{" "}
          contributions in the last year on{" "}
          <a
            href={`https://github.com/${profile.github}`}
            target="_blank"
            rel="noreferrer noopener"
            className="underline underline-offset-4"
          >
            GitHub
          </a>
        </span>
        <span className="flex items-center gap-1">
          Less
          {STEP.map((step) => (
            <span key={step} className={`size-2.5 rounded-[2px] ${step}`} />
          ))}
          More
        </span>
      </div>
    </Panel>
  );
}
