import { Panel, PanelHeader } from "@/components/panel";
import { profile } from "@/data/profile";

export function Brand() {
  return (
    <Panel id="brand">
      <PanelHeader title="Brand" />
      <div className="flex">
        <div className="border-edge grid shrink-0 place-items-center border-r px-2">
          <span className="font-mono text-xs text-muted-foreground [writing-mode:vertical-rl] select-none">
            Wordmark
          </span>
        </div>
        <div className="dot-grid grid flex-1 place-items-center py-10">
          <span className="font-script text-4xl leading-none select-none sm:text-5xl">
            {profile.wordmark}
          </span>
        </div>
      </div>
    </Panel>
  );
}
