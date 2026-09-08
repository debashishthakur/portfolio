// Author-time helper: full-page screenshots of a running build in both themes
// and widths, for visual verification. Usage: node scripts/shoot.mjs <url> <outdir>
import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const URL = process.argv[2] || "http://localhost:3000";
const OUT = process.argv[3] || ".";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--font-render-hinting=none"],
});

for (const [name, vp] of [
  ["desktop", { width: 1280, height: 900, deviceScaleFactor: 2 }],
  ["mobile", { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true }],
]) {
  for (const scheme of ["light", "dark"]) {
    const page = await browser.newPage();
    await page.setViewport(vp);
    await page.emulateMediaFeatures([
      { name: "prefers-color-scheme", value: scheme },
    ]);
    await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
    await page.evaluate(() => document.fonts.ready);
    await new Promise((r) => setTimeout(r, 1500));
    await page.screenshot({
      path: `${OUT}/site-${name}-${scheme}.png`,
      fullPage: true,
    });
    console.log(`site-${name}-${scheme} done`);
    await page.close();
  }
}

await browser.close();
