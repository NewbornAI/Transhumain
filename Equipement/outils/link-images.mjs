#!/usr/bin/env node
// Point every catalogue item at its rendered image: sets the img field of the machine export.
// Run after render-articles.mjs; idempotent. node outils/link-images.mjs
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const EQ = resolve(HERE, "..");
const IMG = resolve(EQ, "Images");
const DATA = resolve(EQ, "données/supermarche.data.js");

function slugs(name) { return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

const raw = readFileSync(DATA, "utf8");
const head = raw.slice(0, raw.indexOf("=") + 1);
const tail = raw.slice(raw.lastIndexOf("};") + 1);
const data = JSON.parse(raw.slice(raw.indexOf("=") + 1, raw.lastIndexOf("};") + 1));
const onDisk = new Set(readdirSync(IMG).filter((f) => f.endsWith(".jpg")));

let linked = 0, absent = [];
for (const it of data.items) {
  if (it.a === "ship") continue;
  const file = it.a + "-" + slugs(it.n) + ".jpg";
  if (onDisk.has(file)) { it.img = "Images/" + file; linked++; } else { absent.push(it.n); delete it.img; }
}
data.meta.updated = new Date().toISOString().slice(0, 10);
writeFileSync(DATA, head + " " + JSON.stringify(data, null, 1) + tail, "utf8");
console.log("linked " + linked + " items, " + absent.length + " still without an image");
if (absent.length) console.log("no image: " + absent.join(", "));
