import { FileText, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/data/profile";

const feet = [
  {
    label: "GitHub",
    href: `https://github.com/${profile.github}`,
    icon: <GitHubIcon className="size-4" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/debashishthakur/",
    icon: <LinkedInIcon className="size-4" />,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: <Mail className="size-4" strokeWidth={1.5} />,
  },
  {
    label: "Resume",
    href: "/Debashish_Thakur_Resume.pdf",
    icon: <FileText className="size-4" strokeWidth={1.5} />,
  },
];

export function SiteFooter() {
  return (
    <footer className="border-edge screen-line-before border-x">
      <nav
        aria-label="Elsewhere"
        className="screen-line-after flex items-center justify-center gap-1 py-3"
      >
        {feet.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
            aria-label={item.label}
            className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {item.icon}
          </a>
        ))}
      </nav>

      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 font-mono text-xs text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a
          href="#top"
          className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
