import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Geist_Mono, Caveat } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans-face",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-face",
  display: "swap",
});

const script = Caveat({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-script-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: `${profile.name} – ${profile.role}`,
  description:
    "AI/LLM engineer building production-grade agents: MCP servers, multi-agent orchestration, structured output, and guardrails that hold.",
  openGraph: {
    title: `${profile.name} – ${profile.role}`,
    description: profile.tagline,
    url: profile.siteUrl,
    siteName: profile.name,
    type: "profile",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

// Runs before first paint so a dark-mode visitor never sees a white flash.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${sans.variable} ${mono.variable} ${script.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
