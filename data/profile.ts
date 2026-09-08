export const profile = {
  name: "Debashish Thakur",
  wordmark: "debashish thakur",
  initials: "DT",
  role: "AI/LLM Engineer",
  tagline: "Quiet systems, loud failures.",
  location: "Bangalore, India",
  locationQuery: "Bangalore, India",
  email: "debashishthakur9@gmail.com",
  github: "debashishthakur",
  siteUrl: "https://debawho.xyz",
};

export const links = [
  {
    label: "Resume",
    handle: "One page, PDF",
    href: "/Debashish_Thakur_Resume.pdf",
    icon: "file" as const,
  },
  {
    label: "LinkedIn",
    handle: "in/debashishthakur",
    href: "https://www.linkedin.com/in/debashishthakur/",
    icon: "linkedin" as const,
  },
  {
    label: "Email",
    handle: "debashishthakur9@gmail.com",
    href: "mailto:debashishthakur9@gmail.com",
    icon: "mail" as const,
  },
  {
    label: "GitHub",
    handle: "debashishthakur",
    href: "https://github.com/debashishthakur",
    icon: "github" as const,
  },
];

export const about = {
  lead: "AI/LLM engineer with 3 years building and shipping production-grade agent systems.",
  bullets: [
    "I lead agent engineering at BlueBear AI, building multi-agent workflows, MCP servers and structured-output pipelines for B2B automation.",
    "I write the guardrails too — skill- and rule-based access controls that decide what an agent may touch before it touches it.",
    "As founding ML engineer at Ayna AI I ran an LLM/VLM analytics framework across 10K+ workflow outputs and cut error rates by 18%.",
    "I rebuilt their image pipeline to serve 3K+ requests a day at 40% faster inference and 30% lower infrastructure cost.",
    "Most of my time goes to the unglamorous half of the problem: output that holds its shape and tool calls that fail loudly instead of silently.",
  ],
};

/* Marks live as local SVGs in /public/stack (see scripts/fetch-logos.mjs).
   `dark: true` means a `<slug>-dark.svg` variant exists and should swap in on
   the dark theme — those brands ship a near-black mark that would vanish. */
export const stackIcons = [
  { slug: "python", label: "Python" },
  { slug: "typescript", label: "TypeScript" },
  { slug: "cplusplus", label: "C++" },
  { slug: "langchain", label: "LangChain" },
  { slug: "claude", label: "Claude" },
  { slug: "openai", label: "OpenAI", dark: true },
  { slug: "mcp", label: "MCP", dark: true },
  { slug: "pytorch", label: "PyTorch" },
  { slug: "tensorflow", label: "TensorFlow", dark: true },
  { slug: "huggingface", label: "Hugging Face" },
  { slug: "scikitlearn", label: "scikit-learn" },
  { slug: "comfyui", label: "ComfyUI" },
  { slug: "fastapi", label: "FastAPI" },
  { slug: "django", label: "Django" },
  { slug: "flask", label: "Flask", dark: true },
  { slug: "docker", label: "Docker" },
  { slug: "postgresql", label: "PostgreSQL" },
  { slug: "mysql", label: "MySQL", dark: true },
  { slug: "googlecloud", label: "Google Cloud" },
  { slug: "n8n", label: "n8n" },
  { slug: "jupyter", label: "Jupyter" },
  { slug: "git", label: "Git" },
];

export type Role = {
  title: string;
  type: string;
  start: string;
  end: string | null;
  bullets: string[];
  tags: string[];
};

export type Company = {
  company: string;
  href: string | null;
  current: boolean;
  /* Local file under /public. `logoWide: true` marks a wordmark-shaped asset
     whose square left-edge mark gets cropped out by the plate, instead of the
     whole wordmark being shrunk to mush at 24px. */
  logo: string;
  logoWide: boolean;
  roles: Role[];
};

export const experience: Company[] = [
  {
    company: "BlueBear AI",
    href: "https://bluebear.ai",
    current: true,
    logo: "/logos/bluebear.png",
    logoWide: false,
    roles: [
      {
        title: "Founding AI/LLM Engineer",
        type: "Full-time",
        start: "01.2026",
        end: null,
        bullets: [
          "Lead development of production-grade LLM agents for B2B use cases, building MCP servers and structured-output pipelines.",
          "Orchestrate multi-agent workflows for complex automation, coordinating task delegation and execution across agents.",
          "Implement security guardrails — skill- and rule-based access controls that constrain agent behavior and block unauthorized actions.",
          "Apply systematic prompt engineering to raise agent output accuracy and consistency.",
        ],
        tags: ["Python", "TypeScript", "MCP", "Anthropic API", "Docker", "Postgres", "nsjail"],
      },
    ],
  },
  {
    company: "Ayna AI",
    href: "https://www.getayna.com",
    current: false,
    /* ayna-mark.svg is ayna.svg with the viewBox tightened to the spiral
       (measured at 0,15 → 180,195), so the circle fills the plate. */
    logo: "/logos/ayna-mark.svg",
    logoWide: false,
    roles: [
      {
        title: "Founding ML Engineer",
        type: "Full-time",
        start: "08.2024",
        end: "01.2026",
        bullets: [
          "Architected and deployed an LLM/VLM analytics framework processing 10K+ workflow outputs across text and images, surfacing 70+ edge cases and cutting error rates by 18%.",
          "Built a ComfyUI-based image generation pipeline serving 3K+ daily requests — 40% faster inference and 30% lower infrastructure cost.",
          "Led MCP server adoption for enterprise LLMs, automating three internal workflows and speeding up cross-team knowledge retrieval.",
          "Engineered the dataset pipeline for a multiclass segmentation model trained on 50K+ images, refining the set with vision-model inference.",
        ],
        tags: ["Python", "PyTorch", "ComfyUI", "MCP", "Vision models", "AWS"],
      },
    ],
  },
  {
    company: "Inspiron Info Inc",
    href: null,
    current: false,
    logo: "/logos/inspiron.svg",
    logoWide: true,
    roles: [
      {
        title: "Machine Learning Engineer",
        type: "Full-time",
        start: "11.2023",
        end: "08.2024",
        bullets: [
          "Designed and validated a movie revenue forecasting model in scikit-learn at 87% accuracy — 12 points above baseline.",
          "Engineered an LLM-powered text-to-SQL engine enabling natural language database queries with Matplotlib, Plotly and Seaborn visualization.",
          "Trained LSTM-based sequence models from scratch for natural language to SQL translation.",
        ],
        tags: ["Python", "scikit-learn", "LSTM", "SQL", "Plotly"],
      },
    ],
  },
];

export type Project = {
  name: string;
  icon: "lekhak" | "promptcraft" | "meanpdf";
  site: string | null;
  start: string;
  end: string | null;
  href: string | null;
  bullets: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "LekhakAI",
    icon: "lekhak",
    site: "https://www.lekhakai.com",
    start: "01.2025",
    end: null,
    href: "https://github.com/debashishthakur/lekhak-extension",
    bullets: [
      "Chrome extension for multi-LLM inference from anywhere in the browser, published on the Chrome Web Store.",
      "Routes a single prompt across providers so you can compare answers without leaving the page.",
    ],
    tags: ["TypeScript", "Chrome Extension", "Anthropic API", "Vite"],
  },
  {
    name: "The Prompt Craft",
    icon: "promptcraft",
    site: "https://the-prompt-craft.vercel.app",
    start: "05.2025",
    end: null,
    href: "https://github.com/debashishthakur/the-prompt-craft",
    bullets: [
      "Prompt intelligence platform benchmarking roughly 6,000 model prompts scraped from Reddit.",
      "Vector-embedding semantic search across the corpus, so you can find the prompt shape you need instead of the exact words.",
      "Scraping, embedding and ranking run as separate jobs so the corpus can grow without a re-index.",
    ],
    tags: ["Python", "Embeddings", "Vector search", "FastAPI"],
  },
  {
    name: "meanpdf",
    icon: "meanpdf",
    site: null,
    start: "02.2026",
    end: null,
    href: null,
    bullets: [
      "Local-first PDF toolkit — merge, split, compress and convert, all in-process. Nothing is ever uploaded.",
      "Backed by a 65-test suite, because a tool that mangles documents quietly is worse than no tool at all.",
    ],
    tags: ["Python", "PDF", "Local-first", "Pytest"],
  },
];

export const education = {
  school: "Assam Engineering College",
  degree: "B.Tech, Computer Science and Engineering",
  start: "07.2019",
  end: "08.2023",
  location: "Guwahati, Assam",
  grade: "7.4 / 10 CGPA",
};

export const awards = [
  {
    title: "Smart India Hackathon Finalist",
    detail: "Top 5 nationally. Led a team of five to build a real-time analysis tool for hackathon judges.",
    year: "2022",
  },
  {
    title: "Inter-college robotics champion",
    detail: "Architected an autonomous obstacle-avoiding robot that beat a field of 20+ teams.",
    year: "2022",
  },
  {
    title: "Coding Club Secretary",
    detail: "Ran 10+ technical events for 200+ students and grew sustained club participation.",
    year: "2021",
  },
];
