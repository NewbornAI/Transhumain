# Working in this repository

*What this project is, who writes what, and where the material lives — for any agent session opened here.*

## What this is

Mandal's hard sci-fi transhumanist universe: tabletop-RPG rules, lore, art direction, and `App/`, the aide-de-table built from a PRD. Since 2026-10-20 it lives in its own public repository; it spent the two weeks before that inside a private vault, which is history and lives in git.

## Who writes what

- **Mandal's prose is canon.** Never rewrite his lore, his notes, or any outward-facing text. Propose the edit, show the sentence, let him take it or leave it.
- The agent's jobs here: image generation, the app (design and implementation), and the mechanical data work — extraction, verification, coverage.
- He has ten years of iteration behind the material: some in his head, some on the web (the Atomic Rockets wiki), some in the Office workbooks under `Source/`. Recovering structure from that pile is a joint job — the agent proposes a reading, he corrects it.

## Where things are

| path | what |
|---|---|
| `00 Accueil/` | the entry note and the MOC |
| `Lore/`, `Regles/`, `Equipement/`, `Vaisseaux/`, `Personnages/`, `Campagne/`, `Fiction/`, `Archives/` | the universe, its rules, its fiction |
| `Source/` | the original Office documents (12 xlsx, 5 docx, 1 drawio) the notes were written from |
| `App/` | the application: `prd/`, `data/` (generated), `tools/` (build + check) |
| images | **not in git** — `MEDIA.md` carries the archive, the reason and the two-command restore |

## The data pipeline, as it exists today

`node App/tools/build-data.mjs` reads the **markdown notes** and regenerates `App/data/content.data.js` and `astronav.data.js`. `node App/tools/check.mjs` guards delivery: no network URLs inside the data, `window.TH_DATA`, no ES modules, no `fetch` — the app must open over `file://` by double-click.

- `data/ref.data.js` and `data/ships.data.js` are **curated projections**, edited by hand *after* the matching `.md` is corrected; each carries its source pointer at the top.
- Generated means generated: never hand-edit a generated data file.
- The app is at **phase 0** — pipeline, PRD and guard-rails. There is no UI yet: `index.html` is phase 1.

## The workbooks (`Source/*.xlsx`)

They are **upstream of the notes**, not the app's input: the notes summarise them, the app reads the notes. Mining them recovers what the notes never transcribed — the 16 character sheets, the derived calculations — and lets us verify the notes against the source. Method, probe evidence and workflow: [`docs/sheet-mining.md`](docs/sheet-mining.md).

## House rules

- French for the material (notes, app copy, PRD); English for tooling, code comments and these instructions.
- No secrets, no credentials and no personal data in this repository — it is public.
- Commit in coherent slices with an explicit message; one topic per commit.
- Nothing lives twice: link instead of copying, and never restate what a file already says.
