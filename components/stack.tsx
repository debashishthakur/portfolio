import { Panel, PanelBody, PanelHeader } from "@/components/panel";
import { stackIcons } from "@/data/profile";

/* Real brand marks, served as local SVGs from /public/stack so nothing is
   hotlinked and everything stays crisp at any density. Marks flagged `dark`
   ship a near-black glyph and swap to their white variant on the dark theme. */

export function Stack() {
  return (
    <Panel id="stack">
      <PanelHeader title="Stack" count={stackIcons.length} />
      <PanelBody className="flex flex-wrap gap-x-4 gap-y-4">
        {stackIcons.map(({ slug, label, dark }) => (
          <span
            key={slug}
            className="group relative flex size-8 items-center justify-center transition-transform duration-200 ease-out hover:scale-110"
          >
            {/* Instant tooltip — no native-title delay. Inverted chip, same
                voice as text selection; screen readers already get the label
                from the img alt. */}
            <span
              role="tooltip"
              className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 scale-95 rounded-md bg-foreground px-2 py-1 font-mono text-[0.6875rem] leading-4 whitespace-nowrap text-background opacity-0 shadow-[0_4px_12px_-4px_rgb(0_0_0/0.4)] transition-all duration-100 ease-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
            >
              {label}
              <span
                aria-hidden="true"
                className="absolute top-full left-1/2 -mt-1 size-2 -translate-x-1/2 rotate-45 bg-foreground"
              />
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/stack/${slug}.svg`}
              alt={label}
              width={32}
              height={32}
              loading="lazy"
              className={`size-8 object-contain ${dark ? "dark:hidden" : ""}`}
            />
            {dark ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`/stack/${slug}-dark.svg`}
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
                loading="lazy"
                className="hidden size-8 object-contain dark:block"
              />
            ) : null}
          </span>
        ))}
      </PanelBody>
    </Panel>
  );
}
