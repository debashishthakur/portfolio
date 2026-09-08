import { profile } from "@/data/profile";

export function Hero() {
  return (
    <div className="screen-line-after border-edge flex border-x">
      <div className="border-edge shrink-0 border-r">
        <div className="mx-0.5 my-0.75">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/avatar.png"
            alt={`${profile.name}'s avatar`}
            width={160}
            height={160}
            fetchPriority="high"
            className="ring-border size-32 rounded-full object-cover ring-1 ring-offset-2 ring-offset-background select-none sm:size-40"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex grow items-end pb-1 pl-4">
          <span className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {profile.siteUrl.replace("https://", "")}
          </span>
        </div>

        <div className="border-edge border-t">
          <div className="flex items-center gap-2 pl-4">
            <h1 className="rise -translate-y-px text-2xl font-semibold tracking-tight sm:text-3xl">
              {profile.name}
            </h1>
          </div>
        </div>

        <div className="border-edge h-12.5 border-t py-1 pl-4 sm:h-9">
          <p className="font-mono text-sm text-balance text-muted-foreground">
            {profile.role}
          </p>
        </div>
      </div>
    </div>
  );
}
