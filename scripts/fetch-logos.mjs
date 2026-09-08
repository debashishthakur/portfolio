import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { execSync } from "node:child_process";

const OUT = "public/stack";
mkdirSync(OUT, { recursive: true });

const api = JSON.parse(
  readFileSync(process.argv[2] || "svgl.json", "utf8"),
);

// [file base name, list of svgl title candidates (lowercased substrings)]
const WANT = [
  ["typescript", ["typescript"]],
  ["python", ["python"]],
  ["cplusplus", ["c++"]],
  ["docker", ["docker"]],
  ["postgresql", ["postgresql"]],
  ["django", ["django"]],
  ["fastapi", ["fastapi"]],
  ["googlecloud", ["google cloud"]],
  ["n8n", ["n8n"]],
  ["git", ["git"]],
  ["huggingface", ["hugging face"]],
  ["langchain", ["langchain"]],
  ["claude", ["claude"]],
  ["tensorflow", ["tensorflow"]],
  ["mysql", ["mysql"]],
  ["flask", ["flask"]],
  ["mcp", ["model context protocol"]],
];

function grab(url, file) {
  execSync(`curl -sL --max-time 30 "${url}" -o "${OUT}/${file}"`);
  const head = readFileSync(`${OUT}/${file}`, "utf8").slice(0, 600);
  if (!head.includes("<svg")) throw new Error(`${file}: not an svg`);
  console.log(`ok ${file}  <- ${url}`);
}

for (const [name, cands] of WANT) {
  const hit = api.find((e) =>
    cands.some((c) => (e.title || "").toLowerCase() === c),
  ) || api.find((e) => cands.some((c) => (e.title || "").toLowerCase().includes(c)));
  if (!hit) {
    console.log(`MISS ${name}`);
    continue;
  }
  const r = hit.route;
  if (typeof r === "string") {
    grab(r, `${name}.svg`);
  } else {
    grab(r.light, `${name}.svg`);
    grab(r.dark, `${name}-dark.svg`);
  }
}

// simple-icons fallbacks, written as colored standalone SVGs
const si = await import("simple-icons");
for (const [name, key, hex] of [
  ["pytorch", "siPytorch", null],
  ["scikitlearn", "siScikitlearn", null],
  ["jupyter", "siJupyter", null],
]) {
  const icon = si[key];
  const fill = hex || `#${icon.hex}`;
  writeFileSync(
    `${OUT}/${name}.svg`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="${fill}" d="${icon.path}"/></svg>\n`,
  );
  console.log(`ok ${name}.svg  <- simple-icons ${fill}`);
}
