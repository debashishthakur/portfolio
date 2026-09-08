import { SiteHeader } from "@/components/site-header";
import { Cover } from "@/components/cover";
import { Hero } from "@/components/hero";
import { Overview } from "@/components/overview";
import { SocialLinks } from "@/components/social-links";
import { About } from "@/components/about";
import { Stack } from "@/components/stack";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Education, Awards } from "@/components/credentials";
import { Brand } from "@/components/brand";
import { SiteFooter } from "@/components/site-footer";
import { HatchBand } from "@/components/panel";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-md bg-foreground px-4 py-2 text-sm text-background focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-60"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="px-2">
        <div className="isolate mx-auto bg-background md:max-w-3xl [&_[id]]:scroll-mt-20">
          <span id="top" className="sr-only" />

          <Cover />
          <Hero />
          <HatchBand />

          <Overview />
          <HatchBand />

          <SocialLinks />
          <HatchBand />

          <About />
          <HatchBand />

          <Stack />
          <HatchBand />

          <Experience />
          <HatchBand />

          <Projects />
          <HatchBand />

          <Education />
          <HatchBand />

          <Awards />
          <HatchBand />

          <Brand />
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
