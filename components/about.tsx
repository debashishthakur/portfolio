import { Panel, PanelBody, PanelHeader } from "@/components/panel";
import { about } from "@/data/profile";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader title="About" />
      <PanelBody className="space-y-3 font-mono text-sm">
        <p className="leading-6">{about.lead}</p>
        <ul className="space-y-2">
          {about.bullets.map((point) => (
            <li
              key={point.slice(0, 24)}
              className="relative pl-4 leading-6 text-muted-foreground before:absolute before:top-[0.6875rem] before:left-0 before:h-px before:w-2 before:bg-muted-foreground/60"
            >
              {point}
            </li>
          ))}
        </ul>
      </PanelBody>
    </Panel>
  );
}
