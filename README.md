# debashishthakur.com

Personal portfolio — Next.js 15 (App Router), Tailwind v4, TypeScript. Statically
rendered, no client-side data fetching, no analytics.

## Run it

```bash
npm install
npm run dev              # http://localhost:3000
npm run build            # production build
npm start                # serve the build
npm run refresh:github   # pull a fresh contribution calendar
```

## Editing content

Everything you will want to change lives in [`data/profile.ts`](data/profile.ts).

| Export | What it drives |
|---|---|
| `profile` | Name, wordmark, role, location, email, GitHub handle |
| `links` | The 2×2 card grid under the hero, and the footer icons |
| `about` | Lead line plus the bullet list |
| `stackIcons` | The brand-mark row — each `slug` maps to `/public/stack/<slug>.svg` |
| `experience` | Companies, each holding one or more roles |
| `projects` | Collapsible project rows |
| `education`, `awards` | The two credential panels |

Dates are written `MM.YYYY`. An `end` of `null` renders as `∞` with a
screen-reader-only "Present", so ongoing work needs no separate flag.

## Brand assets

The stack row uses the real multi-color brand marks, stored locally in
`public/stack/` so nothing is hotlinked and everything stays vector-crisp.
`scripts/fetch-logos.mjs` rebuilt that folder — it pulls from svgl's API index
and generates the three marks svgl lacks (PyTorch, scikit-learn, Jupyter) from
`simple-icons`. An entry flagged `dark: true` in `stackIcons` has a
`<slug>-dark.svg` twin that swaps in on the dark theme; those brands
(MCP, TensorFlow, Flask, MySQL) ship a near-black glyph that would vanish.

The GitHub and LinkedIn social tiles use their real tile artwork, stored locally
in `public/links/` (webp); the Email and Resume tiles are drawn glyphs on a
brand-appropriate ground. All four carry an inset ring so dark tiles stay
legible on the dark page.

Experience rows lead with the employer's logo from `public/logos/`, sitting on a
constant white plate so each mark keeps the ground it was drawn for in both
themes. BlueBear's asset is square; Ayna's and Inspiron's are wide wordmarks, so
they are flagged `logoWide: true` in `data/profile.ts` and the plate crops them
down to the square mark at their left edge instead of shrinking the whole
wordmark to mush at 24px.

Project rows each carry a mark: LekhakAI's is the Devanagari "ले" in glow-blue
on near-black violet, recreated as styled text because that is how lekhakai.com
itself renders it — there is no image asset to download. The other two use drawn
lucide glyphs on their product color.

## The GitHub heatmap (currently not shown)

The contribution graph is unmounted from the page, but everything it needs is
still here: `components/contributions.tsx`, `data/contributions.json`, and
`npm run refresh:github` (which shells out to the `gh` CLI — the calendar is
GraphQL-only and needs auth, so no token lives in the repo). To bring it back,
import `Contributions` in `app/page.tsx` and drop it between two panels with a
`<HatchBand />` after it.

## Avatar and résumé

The hero portrait is `public/avatar.png` (400×400) — replace that file to change
it, keeping it square. The résumé is served from
`public/Debashish_Thakur_Resume.pdf`; replace the file to update the download.

## How the design works

Four ideas carry the page, and they are worth knowing before you change CSS.

**Ruled panels.** Every block is a `Panel` whose top and bottom hairlines run off
both screen edges, with `border-x` holding the column. That is
`.screen-line-before` / `.screen-line-after` in
[`app/globals.css`](app/globals.css), positioned with `left: calc(50% - 50vw)` and
`width: 100vw` — exact against a centered column, so the rules reach the viewport
edges without ever creating horizontal overflow. Do not go back to the `200vw`
form; it overflowed the viewport by 257px on desktop.

**Negative-z hairlines.** Those rules and the striped `.hatch-band` dividers sit
at `z-index: -1`. They stay visible because `<html>` has no background of its own:
the `body` background propagates to the canvas, and the content column re-paints
its own background with `isolate` so the rules paint above it. If you ever add a
background to `html`, every rule and band disappears. This is the one load-bearing
rule in the stylesheet.

**Two voices.** IBM Plex Sans sets names and section titles; Geist Mono sets
everything that is data — body copy, dates, tags, metadata. Caveat appears exactly
twice, in the cover banner and the Brand panel.

**Two grays and one accent.** `--foreground` and `--muted-foreground` do the
typographic work; `--edge` (the border mixed back toward the background) does the
structural work. Colour is reserved: green for contribution density, blue
(`--info`) for the one pulsing dot that marks the current employer.

Theme is class-based (`.dark` on `<html>`), set before first paint by a small
inline script in [`app/layout.tsx`](app/layout.tsx), so a dark-mode visitor never
sees a white flash. The choice persists in `localStorage`; with no stored choice
it follows the system.

## Deploying

A stock static Next.js app — Vercel, Netlify, or Cloudflare Pages all work with no
configuration. Update `profile.siteUrl` so canonical and Open Graph URLs point at
the real domain.
