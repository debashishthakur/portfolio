import { profile } from "@/data/profile";

export function Cover() {
  return (
    <div className="screen-line-before screen-line-after border-edge dot-grid flex aspect-2/1 items-center justify-center border-x select-none sm:aspect-3/1">
      <span className="rise font-script text-5xl leading-none sm:text-7xl">
        {profile.wordmark}
      </span>
    </div>
  );
}
