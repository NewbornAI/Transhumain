/**
 * build-data.mjs — Transhumains App
 * ------------------------------------------------------------------
 * Convertit les notes markdown du coffre (source humaine unique) en données
 * machine lues par la webapp (App/data/*.data.js) :
 *
 *   node App/tools/build-data.mjs
 *
 * Règle du coffre « nothing lives twice » : les .md restent la source ;
 * App/data/*.data.js est GÉNÉRÉ, jamais édité à la main.
 * Exception documentée : data/ref.data.js (constantes de règles) et
 * data/ships.data.js (fiche Stratios) sont des projections curées, avec
 * pointeur de source en tête de fichier.
 */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const HERE = path.dirname(url.fileURLToPath(import.meta.url));
const APP  = path.resolve(HERE, '..');
const ROOT = path.resolve(APP, '..');
const OUT  = path.join(APP, 'data');
const WARN = [];
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

/* ---------------- Markdown : helpers ---------------- */
const inline = (s) => String(s)
  .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
  .replace(/\[\[([^\]]+)\]\]/g, '$1')
  .replace(/\*\*(.+?)\*\*/g, '$1')
  .replace(/\*([^*]+)\*/g, '$1')
  .replace(/`([^`]+)`/g, '$1')
  .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
  /* garde-fou livraison (PRD phase 0) : aucune URL réseau dans les données livrées ;
     les liens bruts restent dans le coffre (.md source), l'app publique les rend sans protocole : le texte du crédit (ex. www.stellarcatalog.com/...) reste lisible et copiable, rien ne charge depuis le réseau (Q28 survivant au gate).
     Les mentions de crédit sans schéma (ex. stellarcatalog.com) restent du texte et passent. */
  .replace(/https?:\/\//g, '')
  .replace(/<br\s*\/?>/gi, '\n')
  .replace(/\s+/g, ' ')
  .trim();

const isSep = (l) => /^\|[\s|:\-–—]+\|$/.test(l.trim()) && l.includes('-');

function splitRow(line) {
  let s = line.trim();
  if (s.startsWith('|')) s = s.slice(1);
  if (s.endsWith('|')) s = s.slice(0, -1);
  return s.split('|').map(function (c) { return inline(c); });
}

/** Découpe un markdown en sections {level, title, lines[]}. */
function sections(md) {
  const out = [];
  let cur = { level: 0, title: 'Prélude', lines: [] };
  out.push(cur);
  for (const raw of md.split(/\r?\n/)) {
    const m = /^(#{1,4})\s+(.*)$/.exec(raw);
    if (m) { cur = { level: m[1].length, title: inline(m[2]), lines: [] }; out.push(cur); }
    else cur.lines.push(raw);
  }
  return out;
}

/** Blocs d'une section : paragraphes, listes, tableaux, citations. */
function blocks(lines) {
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.trim().startsWith('|')) {
      const raw = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) raw.push(lines[i++]);
      const head = splitRow(raw[0]);
      const rows = raw.slice(1).filter(function (r) { return !isSep(r); }).map(splitRow);
      const keep = head.map(function (_, c) { return head[c] !== '' || rows.some(function (r) { return (r[c] || '') !== ''; }); });
      const H = head.filter(function (_, c) { return keep[c]; });
      const R = rows.map(function (r) { return r.filter(function (_, c) { return keep[c]; }); })
                    .filter(function (r) { return r.some(function (c) { return c !== ''; }); });
      if (H.some(function (h) { return h !== ''; }) || R.length) out.push({ t: 'table', head: H, rows: R });
      continue;
    }
    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, ''));
      const text = inline(buf.join('\n'));
      if (text) out.push({ t: /^\[!/.test(text) ? 'callout' : 'p', text: text });
      continue;
    }
    if (/^\s*([-*+]|\d+\.)\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*([-*+]|\d+\.)\s+/.test(lines[i])) items.push(inline(lines[i++].replace(/^\s*([-*+]|\d+\.)\s+/, '')));
      out.push({ t: 'list', items: items.filter(Boolean) });
      continue;
    }
    const buf = [];
    while (i < lines.length && lines[i].trim() && !lines[i].trim().startsWith('|')
           && !/^\s*([-*+]|\d+\.)\s+/.test(lines[i]) && !/^>\s?/.test(lines[i])) buf.push(lines[i++]);
    const text = buf.map(inline).filter(Boolean).join('\n');
    if (text) out.push({ t: 'p', text: text });
  }
  return out;
}

function toSections(md, opts) {
  const skip = (opts && opts.skip) || [];
  return sections(md)
    .map(function (s, n) { return { id: 's' + n, level: s.level, title: s.title, blocks: blocks(s.lines) }; })
    .filter(function (s) { return s.level >= 2 && s.blocks.length && skip.indexOf(s.title) < 0; });
}

/** Tous les tableaux bruts d'un markdown (cellules conservées, colonnes non filtrées). */
function rawTables(md) {
  const out = [];
  const lines = md.split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    if (lines[i].trim().startsWith('|')) {
      const raw = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) raw.push(lines[i++]);
      const rows = raw.filter(function (r) { return !isSep(r); }).map(splitRow);
      if (rows.length) out.push(rows);
      continue;
    }
    i++;
  }
  return out;
}

/** Tableaux d'une section dont le titre matche. */
function tableOf(md, titleRe) {
  const sec = sections(md).find(function (s) { return s.level >= 2 && titleRe.test(s.title); });
  if (!sec) { WARN.push('section introuvable : ' + titleRe); return []; }
  return blocks(sec.lines).filter(function (b) { return b.t === 'table'; });
}

function emit(name, payload) {
  const body = JSON.stringify(payload);
  const js = '// GÉNÉRÉ par App/tools/build-data.mjs — NE PAS ÉDITER À LA MAIN.\n'
    + '// Source humaine : les notes markdown du coffre transhumains/ (voir meta.sources).\n'
    + 'window.TH_DATA = window.TH_DATA || {};\n'
    + 'window.TH_DATA.' + name + ' = ' + body + ';\n';
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, name + '.data.js'), js, 'utf8');
  console.log('  ' + name + '.data.js  ' + (body.length / 1024).toFixed(1) + ' Ko');
}

const today = new Date().toISOString().slice(0, 10);

/* ---------------- 1. Contenu : règles, lore, fiches ---------------- */
const SRC = {
  regles:  'Regles/Transhumains - Règles.md',
  caracs:  'Regles/Caracs.md',
  archive: 'Archives/Transhumains - archive.md',
  bg:      'Lore/Transhuman background.md',
  profils: 'Lore/Transhumains - Profils.md',
  astro:   'Lore/Transhumains - Astronav.md',
  persos:  'Personnages/Transhumains - Personnages.md',
  sad:     'Vaisseaux/Transhumains - SAD.md',
  camp:    'Campagne/Campagne transhu.md',
  medias:  'Medias/Transhumains - Images.md',
};

const content = {
  meta: { generated: today, builder: 'App/tools/build-data.mjs', sources: Object.keys(SRC).map(function (k) { return SRC[k]; }) },
  regles:   toSections(read(SRC.regles), { skip: ['FP'] }),
  caracs:   toSections(read(SRC.caracs)),
  lore:     toSections(read(SRC.bg)).concat(toSections(read(SRC.profils))),
  fiches:   toSections(read(SRC.persos), { skip: ['Template'] }),
  vaisseaux: toSections(read(SRC.sad)),
  campagne: toSections(read(SRC.camp)),
  medias:   toSections(read(SRC.medias)),
  archive:  toSections(read(SRC.archive)),
};
emit('content', content);

/* ---------------- 2. Astronav : tables structurées ---------------- */
const astroMd = read(SRC.astro);
const numOrNull = function (v) {
  const n = parseFloat(String(v === undefined || v === null ? '' : v).replace(',', '.'));
  return isNaN(n) ? null : n;
};

/* 2a. étoiles & colonies (distance depuis Sol, en années-lumière) */
const colonies = (function () {
  const t = tableOf(astroMd, /^Colonies$/);
  if (!t.length) return [];
  const rows = t[t.length - 1].rows;
  const out = [];
  for (const r of rows) {
    const nom = (r[0] || '').trim();
    if (!nom || /^Sol$/.test(nom) || /^https?:/i.test(nom) || /années lumières/.test(nom)
        || /^[a-z0-9.-]+\.(org|com|net|fr|io|games|edu)([\/?#]|$)/i.test(nom)) continue;
    out.push({
      nom: nom,
      ly: numOrNull(String(r[1] || '').replace(/[^\d.]/g, '')),
      secteur: (r[2] || '').trim(),
      longitude: (r[4] || '').trim(),
      latitude: (r[5] || '').trim(),
    });
  }
  return out;
})();

/* 2b. transit interstellaire : temps réel et temps propre par vitesse */
const interstellar = (function () {
  const sec = sections(astroMd).find(function (s) { return s.title === 'Proxima Centauri'; });
  if (!sec) { WARN.push('section Proxima Centauri introuvable'); return { speeds: [], rows: [] }; }
  const rows0 = rawTables(sec.lines.join('\n'))[0] || [];
  const speedRow = rows0.find(function (r) { return r.indexOf('Vitesse') >= 0; });
  if (!speedRow) { WARN.push('ligne Vitesse introuvable (transit interstellaire)'); return { speeds: [], rows: [] }; }
  const speeds = [];
  speedRow.forEach(function (c, i) {
    const m = /^([\d.]+)\s*c$/.exec((c || '').trim());
    if (m) speeds.push({ i: i, c: parseFloat(m[1]) });
  });
  const rows = [];
  for (const r of rows0) {
    const nom = (r[0] || '').trim();
    if (!nom || nom === 'Systeme' || !r[1] || !/ly/.test(r[1])) continue;
    const dm = /([\d.]+)\s*ly/.exec(r[1]);
    rows.push({
      systeme: nom,
      ly: dm ? parseFloat(dm[1]) : null,
      temps: speeds.map(function (s) { return { c: s.c, reel: (r[s.i] || '').trim(), propre: (r[s.i + 1] || '').trim() }; }),
    });
  }
  return { speeds: speeds.map(function (s) { return s.c; }), rows: rows };
})();

/* 2c. moteurs interplanétaires (carburant, accélération, temps par distance) */
const drives = (function () {
  const t = tableOf(astroMd, /^Vitesses interplan/);
  if (!t.length) return [];
  const tb = t.find(function (x) { return x.rows.some(function (r) { return (r[0] || '').trim() === 'Cargo'; }); }) || t[0];
  const dists = [1, 2, 3, 4, 5, 10, 15, 20, 30, 40];
  const out = [];
  for (const r of tb.rows) {
    const nom = (r[0] || '').trim();
    if (!/^(Ion|Cargo|Standard|Sport|Voile|Laser|Interstellaire|Lumi)/.test(nom)) continue;
    const transit = {};
    dists.forEach(function (d, k) { const v = numOrNull(r[7 + k]); if (v !== null) transit[d] = v; });
    out.push({
      nom: nom,
      carburant: numOrNull(r[1]),
      accelerationG: numOrNull(r[2]),
      dureeJours: numOrNull(r[3]),
      vitesseAUj: numOrNull(r[4]),
      deltaVkms: /c\s*$/.test((r[5] || '').trim()) ? null : numOrNull(r[5]),
      deltaVc: /c\s*$/.test((r[5] || '').trim()) ? numOrNull(r[5]) : null,
      reference: numOrNull(r[5]) === null && numOrNull(r[2]) === null,
      transitJours: transit,
    });
  }
  return out;
})();

/* 2d. corps par système (Alpha Centauri, Tau Ceti, YZ Ceti) */
const bodies = (function () {
  const out = {};
  const caps = { 'Alpha Centauri': 7, 'Tau Ceti': 11, 'YZ Ceti': 10 };
  const black = ['Corps', 'Star', 'AU', 'Planet', 'Système', 'Systeme', 'Interstellaire', 'Interplanétaire', 'Espace colonisé', 'Légende'];
  for (const sec of sections(astroMd)) {
    const cap = caps[sec.title];
    if (sec.level !== 2 || !cap) continue;
    const rows = [];
    let head = null;
    let headLen = 0;
    for (const t of rawTables(sec.lines.join('\n'))) {
      for (const r of t) {
        const cells = r.slice(0, cap);
        const ne = cells.filter(function (c) { return (c || '').trim() !== ''; });
        if (ne.length < 3) continue;
        if (black.indexOf(ne[0]) >= 0) {
          if (ne.length > headLen) { head = cells; headLen = ne.length; }
          continue;
        }
        if (/^[\d.]+\s*ly$/.test((ne[1] || '').trim())) continue;
        rows.push(cells);
      }
    }
    out[sec.title] = { head: head || [], rows: rows };
  }
  return out;
})();

/* crédits : les URLs brutes de la source,Declarees dans le meta pour que le
   gate « zero URL » les reconnaisse comme attribution (Q28) et non comme ressource. */
const astroCredits = Array.from(new Set((astroMd.match(/https?:\/\/[^\s|)\]<>]+/g) || []))).sort();
emit('astronav', {
  meta: { generated: today, source: SRC.astro, builder: 'App/tools/build-data.mjs', credits: astroCredits },
  colonies: colonies,
  interstellar: interstellar,
  drives: drives,
  bodies: bodies,
});

console.log('');
if (WARN.length) { console.log('⚠ ' + WARN.join('\n⚠ ')); } else { console.log('✓ extraction sans avertissement'); }
console.log('  ' + colonies.length + ' colonies · ' + drives.length + ' moteurs · '
  + interstellar.rows.length + ' routes interstellaires · ' + Object.keys(bodies).length + ' systèmes détaillés' + (Object.keys(bodies).length ? ' (' + Object.keys(bodies).map(function (k) { return k + ': ' + bodies[k].rows.length; }).join(', ') + ')' : ''));
// __APPEND__

