---
tags:
  - media
  - transhumains
  - design
updated: 2026-10-16
---

# Transhumains - Visual identity

*Faction plates, palette tokens and the generation contract behind them.*

Scope: what each of the six blocks must look like at first glance. The plates are references for light, material and colour — not canon scenes. They feed portraits, ship cards and the app skin ([[transhumains-app|App PRD]], Q22).

![[00-identity-board.jpg]]

## Shared contract

| Item | Value |
|---|---|
| Format | 2048×1152 (16:9), header-crop safe: subject inside the central 60% |
| Model | SenseNova U1.5 Lite, watermark forced off |
| Chrome | dark ground, hairline rule, 6 px radius, single accent `#63E0FF` (Signal style, App PRD Q7/Q47) |
| Faction palettes | colour the content, never the chrome |
| Text | none baked into a plate, with one deliberate exception: the Hunter price sign, where the bounty on screen *is* the subject. Put the exact copy in `priority_emphasis` when a plate needs it. |
| Shared exclusions | no letters, no logos, no watermark, no collage, no duplicated subject |
| Repetition | **no copy-paste**: repeated elements (drones, ships, desks, figures, containers) must differ in model, scale, angle, distance or wear. Five identical drones in one frame is a defect |
| Casting | every plate containing people shows **at least one man and at least one woman**; name the cast in the brief so the model cannot default to a single figure |

## The six blocks

### Alpha — solarpunk engineering
Transhumanist democracy, education and art. Technology is clean, finished and made to be looked at: glass, brushed aluminium, champagne gold, hydroponic terraces, drones, thin rings of study light. No wear, no hard shadow.
Palette `#F5F1E8` porcelain · `#C9A227` champagne gold · `#C9CBD1` brushed aluminium · `#7A8F5A` olive · `#BFD8E8` sky
**Must**: immaculate materials, high-key warm light. **Must not**: dirt, weapons, dystopia, neon, classical temple architecture.

### Hazat — the armour is a cut, not a shell
ONU fleet, military nanotech, sworn nobles. Reactive armour reads as tailoring: white frock coat, standing collar, cinched waist, cobalt nano-weave over shoulders and forearms, brass braid at collar and cuff, white gloves, bare head. Victorian in the cut, Apple in the surface.
Palette `#EAF0F7` glacier white · `#1F49A0` cobalt · `#B08A46` ceremonial brass · `#42C8F0` instrument cyan · `#12161C` deck black
**Rank code**: hair colour carries rank — deep blue for the youngest officer, grey for seniors, white for the captain. European features throughout.
**Reference interior**: the command deck — captain and officers seated comfortably in a ring around a floating volumetric tactical display.
**Must not**: helmets, pauldrons, armour plate, exoskeleton, standing at battle stations, red uniform.

### Ares — vertical wet cyberpunk
Multicultural empire, freedom, diversity, strength. Stacked gantries under coolant rain, chrome limbs with lit seams, magenta and cyan neon burning over Martian rust. The city has never agreed with itself.
Palette `#04263F` deep blue · `#7A3B18` Martian rust · `#FF2E9A` neon magenta · `#16D8F0` neon cyan · `#B8BFC6` chrome
**Must**: cybernetic bodies, varied and visible; rain and reflection. **Must not**: daylight, minimalism, clean surfaces.

### Skavs — salvage, not biology
Recyclers, repairers, salvagers. Nothing is new and everything is repaired: hull plates welded from ten different ships, cable spaghetti, stripped components on the shelves, arc-welding sparks, amber work lamps. Every object came from something else and was made to fit.
Palette `#16120E` soot · `#7A4A22` rust · `#A65A2E` oxidised copper · `#E8A33C` work-light amber · `#8A8F96` cold steel
**Must**: dead technology only — mechanical, electrical, salvaged. **Must not**: bioluminescence, culture vats, grown tissue, xenobiology, any living technology.

### Xenos — the deal is the subject
Capitalist meritocracy, free trade, exploration. Hard unfiltered sunlight, bolted-on hull sections, and the contract being negotiated at the bar: iridescent diamond skin, gilded Venusians, gold-winged hosts, a private holographic interface in front of every seat.
Palette `#05070B` void · `#101418` hard shadow · `#DCDCD6` industrial white · `#9C7B3C` brass · crew accents `#C8352B`, `#2E6FC8`
**Must**: many layered translucent HUD panels; iridescent diamond skin on at least one patron. **Must not**: cyberpunk grime, rain, weapons, a unified national palette.

### Union — the surveillance reassures
Socialist dictatorship, security and comfort. East Asian civic futurism: porcelain, vermilion and jade, auspicious cloud motifs rendered in light, a soft sensor aperture set into the ceiling. The citizens are provided for.
Palette `#F7F5F0` porcelain · `#C8261E` vermilion · `#6FAE86` jade · `#F0A030` interior amber · `#14100E` lacquer black
**Must**: order, generosity, calm. **Must not**: decay, poverty, harsh red warning light, a menacing eye.

## Ships are out of scope

SenseNova does not render hulls well enough to spend plates on: the Hazat cruiser took three passes and never stopped reading as a wheel on a submarine. Ship visuals move to a mesh pipeline when that lands, and no further ship plates are generated here.

What the setting owes a hull, in words, is kept: the Hazat wheel is three machines in one — the rotating habitat ring carrying the crew's gravity (thick rim, brass banding, rows of amber cabin windows), a gyroscope in the gimballed spokes and hub rotor, and the lens of a combined laser array (curved mirror facets lining the rim's inner face, with a coherent light track running between them).

## Equipment plates

The catalogue aisles ([[00 Sommaire des rayons]]) are plated the same way: one plate per aisle, 2048×1152, same shared contract, no text, no copy-paste. A plate is a scene rather than a line-up — a bench, a crate, a bay, a corridor — holding three to six items of that aisle, chosen to span its range and to differ in scale, material and wear. The aisle's house carries the palette. The plates with people (clothing, sealed suits, cosmetics, property, standard of living) show at least one man and one woman; the rest have none.

Ships are excluded (above); the other 20 aisles are plated. One aisle regenerates like any other plate, pointing at its own brief.

The marketplace carries the second level: **one image per catalogue item** — `Equipement/Images/<aisle>-<slug>.jpg`, 1024×576, a single object centred on a dark studio ground, one shared recipe so 264 images read as one shelf. Per-item briefs are in `Equipement/Images/briefs.json` (subject + house), house palettes are read from this note and [[Transhumains - Corporate identity]] at render time, and the tools live in `Equipement/outils/`.

`transhumains/Medias/Equipement/`

| File | Content |
|---|---|
| `00-equipement-sheet.jpg` | the 20 plates in one sheet, catalogue order, 2360×3769 |
| `00-equipement-sheet.html` | sheet source |
| `<aisle>.png` | plate, 2048×1152 |
| `<aisle>.json` | that aisle's brief; `revision.reason` records what a rework changed |

Item images and their briefs live with the catalogue: `transhumains/Equipement/Images/` and `transhumains/Equipement/outils/`.

## Corporations and groups

The four nations plus Hazat and Skavs are plated here. The other 29 houses, orders and faiths are plated too, with their directions and palette tokens in [[Transhumains - Corporate identity]], their swatches in `01-corporate-sheet.png` and each plate beside its brief in this folder.

## Regenerate

```powershell
node .dsh/skills/sensenova/sensenova.mjs generate --prompt "@transhumains/Medias/Visual identity/hazat.json" --out "transhumains/Medias/Visual identity/hazat.png" --size 2048x1152
```

One brief per plate; `00-series.json` holds the shared contract. Alpha, Xenos, Union, Skavs and Hazat were each iterated at least once — the rework prompt is kept in the brief under `revision` when the plate came from an `edit`, and the brief itself is rewritten when the plate was regenerated wholesale.

**A rework is shot in two to four takes, shown once, and then only the chosen one exists.** The takes are generated together, presented side by side in the conversation so the choice is made on evidence rather than on a description, and the winner is landed. Nothing else is kept: no `variants/` folder, no comparison sheet rendered as an artifact, no discarded take committed. A kept alternative has to be renamed, re-linked and re-checked every time anything upstream changes, and that cost recurs for a picture nobody will look at again — the takes live in `workspace/` (disposable by design) exactly as long as the decision does. `revision.reason` in the brief is the record of what changed and why.

The board is rendered from `00-identity-board.html`: playwright-cli against a local static server, captured in three 1500 px bands and stitched, because a full-page capture exceeds the CLI's 5 s action ceiling on a 4 400 px page. Output is JPEG q93.

## Files

`transhumains/Medias/Visual identity/`

| File | Content |
|---|---|
| `00-identity-board.jpg` | the faction board, 2360×2950 |
| `00-identity-board.html` | board source |
| `01-corporate-sheet.png` | corporate sheet, 29 entries, 2360×2814 |
| `01-corporate-sheet.html` | sheet source |
| `02`, `03`, `04` `-corporate-plates*.jpg` | the 29 corporate plates in three batches |
| `00-series.json` | shared series contract |
| `alpha`, `hazat`, `ares`, `skav`, `xenos`, `union` `.json` | per-plate render briefs |
| `alpha`, `hazat`, `ares`, `skav`, `xenos`, `union` `.png` | plates, 2048×1152 |

Source illustrations: [[Transhumains - Images]].