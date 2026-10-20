#!/usr/bin/env node
// Render the marketplace item images: one object per item, one shared recipe.
// node outils/render-articles.mjs [--only slug,slug] [--concurrency 4] [--force]
// Briefs: Images/briefs.json (per item). Palettes: read from the two identity notes at run time.
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync, appendFileSync, readdirSync, openSync, closeSync } from "node:fs";
import { spawn } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const EQ = resolve(HERE, "..");
const VAULT = resolve(EQ, "..", "..");
const IMG = resolve(EQ, "Images");
const CLI = resolve(VAULT, ".dsh/skills/sensenova/sensenova.mjs");
const LOG = resolve(VAULT, "workspace/market-run.log");
const ERRLOG = resolve(VAULT, "workspace/market-errors.log");
const SIZE = "1024x576";

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf("--" + k); return i >= 0 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : d; };
const only = opt("only", "").split(",").filter(Boolean);
const conc = Number(opt("concurrency", 4));
const force = args.includes("--force");

function slugs(name) { return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function log(line) { const s = new Date().toISOString().slice(11, 19) + " " + line; console.log(s); appendFileSync(LOG, s + "\n"); }

// house palettes: the six faction blocks from the visual identity note, the 27 houses from the corporate note
function factionPalettes() {
  const md = readFileSync(resolve(VAULT, "transhumains/Medias/Transhumains - Visual identity.md"), "utf8");
  const map = {};
  const re = /^### ([A-Za-z]+) [^\n]*\n([\s\S]{0,700}?\n)Palette ([^\n]+)/gm;
  let m; while ((m = re.exec(md))) { map[m[1]] = [...m[3].matchAll(/#[0-9A-Fa-f]{6}/g)].map((x) => x[0]); }
  return map;
}
function housePalettes() {
  const md = readFileSync(resolve(VAULT, "transhumains/Medias/Transhumains - Corporate identity.md"), "utf8");
  const map = {};
  for (const l of md.split("\n")) {
    if (!l.startsWith("| **")) continue;
    const c = l.split("|").map((x) => x.trim());
    const name = (c[1] || "").replace(/\*\*/g, "");
    if (!name || !c[4]) continue;
    map[name] = [...c[4].matchAll(/#[0-9A-Fa-f]{6}/g)].map((x) => x[0]);
  }
  return map;
}

// aisle default house, used when the item carries no brand of its own
const AISLE_HOUSE = {
  starters: "Legion", mods: "Neumann", cosmes: "Neumann", skills: "Hardvard", vet: "Alpha",
  combi: "Alpha", vie: "Union", immo: "Union", inge: "Guilde", bio: "Bakta", elec: "NetWatch",
  art: "Son-Y", chim: "Ten-Cents", mat: "Skavs", aug: "Macrotek", cin: "Macrotek",
  beam: "TherMoss", armor: "Macrotek", expl: "Macrotek", poke: "Ares"
};

const RECIPE = {
  asset: "marketplace item image for a hard science-fiction equipment catalogue",
  view: "one object only, three-quarter view, centred, filling about two thirds of the frame width",
  style: "clean catalogue product photography: a single soft key light from the upper left, a faint cool rim light, a seamless dark neutral studio ground with a soft vertical gradient, one subtle contact shadow, nothing else in the room",
  priority_emphasis: [
    "a single object, centred, with generous margin on every side",
    "reads clearly when shrunk to a 230 pixel wide shop tile",
    "the same light, ground and framing as every other image in this catalogue"
  ],
  exclusions: ["no text","no letters","no numbers","no words","no labels","no logos","no watermark","no people","no hands","no collage","no split panels","no border","no picture frame","no duplicate object","no second copy","no props","no scenery","no clutter"]
};

const data = JSON.parse(readFileSync(resolve(EQ, "données/supermarche.data.js"), "utf8").replace(/^[\s\S]*?=/, "").replace(/;\s*$/, ""));
const briefs = JSON.parse(readFileSync(resolve(IMG, "briefs.json"), "utf8"));
const pal = Object.assign({}, factionPalettes(), housePalettes());

function itemSlug(it) { return it.a + "-" + slugs(it.n); }
function briefFor(it) {
  const direct = briefs.items[it.n] || briefs.items[itemSlug(it)];
  if (direct) return direct;
  const byName = Object.entries(briefs.items).find(([k]) => k.endsWith(slugs(it.n)));
  return byName ? byName[1] : null;
}

const jobs = [];
for (const it of data.items) {
  if (it.a === "ship") continue;
  const b = briefFor(it);
  const slug = itemSlug(it);
  if (!b) { jobs.push({ skip: "no brief", slug, name: it.n }); continue; }
  const house = b.house || it.marque || AISLE_HOUSE[it.a] || "Alpha";
  jobs.push({ it, b, slug, house, out: resolve(IMG, slug + ".jpg"), png: resolve(IMG, ".tmp-" + slug + ".png"), briefPath: resolve(IMG, ".tmp-" + slug + ".json") });
}

let todo = jobs.filter((j) => !j.skip && (force || !existsSync(j.out)));
if (only.length) todo = todo.filter((j) => only.includes(j.slug));
const skipped = jobs.filter((j) => j.skip);
log("run start: " + todo.length + " to render, " + jobs.filter((j) => !j.skip).length + " briefed, " + skipped.length + " without a brief, concurrency " + conc);

function attempt(j) {
  return new Promise((res) => {
    const palette = (pal[j.house] || pal.Alpha || []).join(" ");
    const body = Object.assign({}, RECIPE, {
      subject: j.b.subject,
      view: j.b.view || RECIPE.view,
      design: (j.b.notes || "") + (j.b.notes ? " " : "") + "maker: " + j.house + (pal[j.house] ? " - " + palette + " as the only colour" : " - neutral"),
      palette: palette || "neutral grey",
      style: j.b.style || RECIPE.style,
      priority_emphasis: RECIPE.priority_emphasis.concat(j.b.priority_emphasis || []),
      exclusions: RECIPE.exclusions.concat(j.b.exclusions || [])
    });
    writeFileSync(j.briefPath, JSON.stringify(body, null, 2));
    const errFd = openSync(ERRLOG, "a");
    const a = spawn(process.execPath, [CLI, "generate", "--prompt", "@" + j.briefPath, "--out", j.png, "--size", SIZE], { stdio: ["ignore", errFd, errFd] });
    a.on("exit", (code) => {
      try { closeSync(errFd); } catch (e) {}
      if (code !== 0 || !existsSync(j.png)) { return res({ ok: false, why: "generate exit " + code }); }
      const c = spawn("ffmpeg", ["-y", "-loglevel", "error", "-i", j.png, "-q:v", "3", j.out], { stdio: ["ignore", "ignore", "ignore"] });
      c.on("exit", (code2) => {
        try { rmSync(j.png, { force: true }); rmSync(j.briefPath, { force: true }); } catch (e) {}
        if (code2 !== 0 || !existsSync(j.out)) return res({ ok: false, why: "convert exit " + code2 });
        res({ ok: true });
      });
    });
  });
}
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
// the image API throttles under a burst: retry with backoff rather than losing the item
async function shoot(j) {
  for (let i = 0; i < 5; i++) {
    const r = await attempt(j);
    if (r.ok) { log("OK " + j.slug + " (" + j.house + ")" + (i ? " after " + i + " retries" : "")); return true; }
    if (i < 4) { const back = 4000 * Math.pow(2, i); log("retry " + j.slug + " in " + (back / 1000) + "s (" + r.why + ")"); await wait(back); }
    else log("FAIL " + j.slug + " " + r.why + " after 5 attempts");
  }
  return false;
}
const queue = todo.slice();
let done = 0, failed = [];
await Promise.all(Array.from({ length: Math.max(1, conc) }, async () => {
  while (queue.length) {
    const j = queue.shift();
    let ok = false;
    try { ok = await shoot(j); } catch (e) { log("FAIL " + j.slug + " " + (e && e.message)); }
    if (!ok) failed.push(j.slug);
    done++;
  }
}));

const manifest = {};
for (const f of readdirSync(IMG)) { if (f.endsWith(".jpg")) manifest[f.replace(/\.jpg$/, "")] = f; }
writeFileSync(resolve(IMG, "manifest.json"), JSON.stringify(manifest, null, 1) + "\n");
const missing = jobs.filter((j) => j.skip).map((j) => j.slug);
log("run end: " + (done - failed.length) + "/" + done + " rendered, " + Object.keys(manifest).length + " images on disk");
if (failed.length) log("failed: " + failed.join(", "));
if (missing.length) log("still without a brief (" + missing.length + "): " + missing.slice(0, 40).join(", "));
