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
            title={label}
            className="flex size-8 items-center justify-center transition-transform duration-200 ease-out hover:scale-110"
          >
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
