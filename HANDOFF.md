# MEGA GYM — Project Handoff Notes

> Pull this file whenever you pick up the project. Update it before you push.  
> Owner: Stelios & Dimitris · Repo: github.com/daththeanalyst/mega-gym-website

---

## What This Is

New website for MEGA GYM — a Greek gym chain with 7 locations in Athens. Client's current site is outdated. We are building a modern static HTML/CSS/JS replacement, hosted on GitHub Pages.

**Stack:** Plain HTML + CSS + JS (no framework)  
**Pages:** index.html · gymnastiria.html · proponisi.html · personal-training.html · pilates.html · dokimastiki.html · epikoinonia.html · 404.html

---

## Recently Completed

- **Logo:** Added `border-radius` to nav + footer logo images (CSS only — placeholder until client provides a transparent PNG)
- **Section headers:** Added `text-align: center` to `.section-header` so all section titles centre on desktop
- **Hero slogan:** Fixed line-break awkwardness with `&nbsp;` — Greek "ΖΩΗ ΜΟΥ" stays on one line, English "ABOVE ALL" stays on one line
- **Page transitions:** Fixed navbar glitch on load — removed `translateY` from `@keyframes pageIn` (transform on body breaks `position: fixed` children)
- **Service cards:** Centred content on desktop (`align-items: center`, `text-align: center`, `justify-content: center` on `.service-programs`)
- **Contact form (epikoinonia.html):** Fixed unreadable form — labels were invisible because `.form-row` used a 2-col grid. Switched to flex column, made labels white
- **Epikoinonia — locations section:** Removed the 7 directory cards (map pins have all the info). Kept the title + map. Switched section to dark bg, adjusted padding, fixed margin-collapse gap with `overflow: hidden`
- **Epikoinonia — careers title:** Removed redundant "ΚΑΡΙΕΡΑ - " prefix from the h2 (yellow tag above already says Καριέρα). Updated both GR + EN translation keys in script.js
- **Gymnastiria — section order:** Swapped sections so gym locations grid comes first, type-comparison cards (Fitness Club vs EXCLUSIVE) come second
- **Images:** Replaced all low-quality placeholder photos across the site with new high-quality 16:9 images (source folder: `Gym_pics/new/`). Files copied with clean names to `assets/MegaGymPhotos/`:
  - Hero slideshow (4 slides): `gym-freeweights.png`, `gym-main-floor-dark.png`, `gym-industrial-red.png`, `gym-functional.png`
  - About section: `gym-reception.png`
  - Gallery strip: `gym-cardio.png`, `gym-machines-pink.png`, `gym-classic-warm.png`
  - Remaining new images (pilates, PT studio, wellness, locker room, tech station) are in `Gym_pics/new/` — to be assigned to their pages when we work on them
- **EXCLUSIVE tag:** Restyled on both index.html and gymnastiria.html — subtle gold tint background + thin gold border (replaces flat yellow). CSS classes: `.tag-ex` (index) + `.loc-tags span.loc-exclusive` (gymnastiria)
- **Pilates Studio tag:** Restyled on both pages — subtle pink/mauve tint + thin pink border (replaces green). CSS classes: `.tag-pl` (index) + `.loc-tags span.loc-pilates` (gymnastiria)
- **Logo replaced:** All 8 pages updated from `mega-gym-logo.jpg` to `mega-gym-logo.png` (new black-background logo from client). Source at `Gym_pics/new/`. Files in `assets/MegaGymPhotos/`: `mega-gym-logo.png`, `mega-gym-icon-black.png`, `mega-gym-m-transparent.png` (high-res, for future use)
- **Custom cursor:** M-letter branded cursor implemented (desktop-only via `@media (hover: hover) and (pointer: fine)`):
  - Default state: transparent M logo at `assets/MegaGymPhotos/mega-gym-m-cursor.png` (32×32px, hotspot `8 8`)
  - Pointer/hover state: white M with black outline at `assets/MegaGymPhotos/mega-gym-m-cursor-pointer.png` (32×32px, hotspot `8 8`) — applies to `a`, `button`, `[role="button"]`, and other interactive elements via `!important`
  - Text inputs/textareas keep native I-beam cursor
- **Pilates page — 32 years section removed:** Removed the "32 Χρόνια Πολύτιμη Εμπειρία" white badge section entirely (was redundant with about page content)
- **Personal Training page — content cleanup:**
  - Removed yellow `.pt-callout` bubble ("Biggest PT Studio" section)
  - Removed `.pt-stat-block` ("Φέτος κάψαμε 5 ΤΟΝΟΥΣ λίπος...") black bubble
  - Removed `page-hero__container` class from `#exclusive-deep` container (was adding 80px extra top padding)
  - Centred `.pt-feature-card` content (icon + text now centred, `margin: 0 auto` on icon circle)
- **Dokimastiki page — phone section rework:**
  - Removed duplicate "Quick Locations" 7-card grid section entirely
  - Kept phone CTA section — retitled to "Κλείσε Ραντεβού Τηλεφωνικά" / "Book by Phone"
  - Section background changed to yellow (`section--yellow`)
  - Removed the large standalone phone number that was under the title
  - Layout: switched from CSS grid to flexbox (`justify-content: center`, `flex-wrap: wrap`) so the bottom row of 3 locations centres correctly
  - Bottom row has 1.5× vertical gap vs top row (`row-gap: 24px`, `column-gap: 16px`)
- **Dark mode navbar fix:** Scoped `body.dark-mode .nav-links { background: #0e0e0e }` inside `@media (max-width: 768px)` — it was leaking onto desktop and adding a black highlight behind nav links
- **Nav CTA button — layout shift fix:** Added `min-width: 190px` + `text-align: center` to `.nav-cta` so the button doesn't resize when switching GR↔EN (Greek text is wider than English)
- **Dark mode layout shift fix:** Added `overflow-y: scroll` + `scrollbar-width: none` + `::-webkit-scrollbar { width: 0 }` to `html` — forces a permanent (invisible) scrollbar gutter so page doesn't shift left when dark mode adds enough content to need a scrollbar

---

## Still To Do

### Homepage (index.html)
- [ ] Hero section rework — do alignment first, then content; one change at a time
- [ ] Remove/reduce duplicate "33+ years" stat — appears in hero badge, about text, about accent card, and comparison table (4 times). Keep max 2.
- [ ] The "5 tons fat / 2 tons muscle" stat in the transformations subtitle — decide if it stays or goes

### Gymnastiria page
- [ ] Consider whether the big EXCLUSIVE badge on the gym-type comparison card also needs restyling (currently flat yellow — the small loc-tags have been done)

### Dokimastiki page — open question
- [ ] **Phone numbers on this page?** Currently listed in the phone CTA section only. Decide: keep on this page or move all to epikoinonia.html only. Main CTA here is booking a trial, so phone numbers may not be necessary.

### All Pages
- [ ] Audit every page for duplicate information and wrong section ordering

---

## Future / Backlog (not started yet)

- **Loading screen:** Replace the progress bar preloader with an M-letter fill animation. Needs SVG/image assets from Stelios first — do not implement until ready
- **Logo:** Current logo (`mega-gym-logo.png`) has a black background. Replace with transparent-background PNG when client provides one
- **Pilates page (pilates.html):** High priority — pilates studios are trending right now and this page matters to the client. Build with extra care and design quality. New pilates images ready in `Gym_pics/new/` (action shots + studio shots)
- **CV upload (epikoinonia.html):** Do NOT add yet — wait for client confirmation
- **Forms backend:** Contact + trial forms currently show a client-side success message only (no real submission). Will need a backend or form service when client is ready
- **AI Chat:** Placeholder "Coming Soon" in the FAB — leave as-is for now

---

## Architecture Notes

- **i18n:** All visible text has a `data-i18n` key. Greek translations are in `script.js` around line 30–380, English around line 364–700. Use `&nbsp;` inside translation strings for non-breaking spaces — it works because translations are applied via `el.innerHTML`
- **Dark mode:** `body.dark-mode` class toggled by JS. All dark overrides are grouped at the top of `styles.css` (~lines 1–200)
- **CSS specificity gotcha:** `.loc-tags span` (specificity 0,1,1) overrides plain class selectors. When adding classes to spans inside `.loc-tags`, use `.loc-tags span.your-class` to beat the base rule
- **Page transitions:** `body.page-transition` fades in on load via `@keyframes pageIn`. Only use `opacity` — adding `transform` on body breaks `position: fixed` navbar
- **Images:** Logo is now at `assets/MegaGymPhotos/mega-gym-logo.png`. All other images use the new high-quality set
- **Custom cursor:** CSS-only, desktop-only (`@media (hover: hover) and (pointer: fine)`). Two cursor images: `mega-gym-m-cursor.png` (default) and `mega-gym-m-cursor-pointer.png` (hover over clickable elements). Pointer cursor uses `!important` to override specificity of class-based `cursor: pointer` rules elsewhere. Chrome enforces a 128×128px max cursor size — always resize source to 32×32 before use
- **Euro sign in script.js:** The `€` character is stored as the literal 6-char ASCII sequence `€` (not the actual unicode glyph). Standard text editors and `sed` may silently fail to find/replace it. Use PowerShell byte-level string replacement when editing euro amounts
- **Scrollbar:** `html { overflow-y: scroll; scrollbar-width: none; }` + `::-webkit-scrollbar { width: 0 }` hides the scrollbar visually but keeps the gutter reserved — this prevents layout shift when switching dark/light mode

---

*Last updated by Stelios — 2026-04-28*
