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

### Session 2 — DimitrisStelios sprint (Dimitris)

**Hero (index.html)**
- Removed the old `7 / 33+ / 5` stat block in the hero. Replaced with a horizontal scrolling marquee of all 7 Athens gym names (yellow dot dividers, hover-lift, edge-fade mask via `mask-image`, reduced-motion fallback). Each name links to `gymnastiria.html`.
- Capped hero parallax: `translate = min(scrollY * 0.3, 80px)`, opacity floors at 0.4. Content no longer drifts into the `.scroll-indicator` zone at the bottom of the hero.

**About / Comparison sections (index.html)**
- Removed `.about-metrics` block (5 Τόνοι Λίπους / 2 Τόνοι Μυών) — redundant with copy elsewhere on the page
- Removed `.comparison-strip` section (Άλλα Γυμναστήρια vs MEGA GYM, 3-row VS table) — didn't earn its visual weight

**Services section (index.html)**
- Replaced Group Personal Training icon (was generic plus-circle) with a 3-person SVG (taller centre figure flanked by two smaller ones)
- Replaced Pilates Studio icon (was a bell) with a seated lotus-pose figure on a mat
- Added `margin-top: auto` on `.service-card > .btn` so all three "Learn More" buttons align horizontally at the bottom regardless of content above them

**Two Types of Gyms section (index.html)**
- Removed both duplicate "Δες τα Γυμναστήρια" CTAs from inside the gym-type cards
- Added one shared yellow CTA centred below the grid (uses existing `.section-cta` pattern)

**Transformations section (index.html)**
- Wrapped "5 τόνους" / "2 τόνους" (and English equivalents) in `<strong class="emph">` so the unit reads as one bold chunk. New `.emph` style: 800-weight, `white-space: nowrap`, black on light bg / yellow on dark bg

**Cross-page area-name translations (locations)**
- Added 7 location-name keys to both `el` and `en` blocks: `loc-kifissia`, `loc-metamorfosi`, `loc-glyfada`, `loc-vrilissia-melissia`, `loc-agia-paraskevi`, `loc-alimos`, `loc-gerakas` (Latin transliterations: Kifissia, Metamorfosi, Glyfada, Vrilissia-Melissia, Agia Paraskevi, Alimos, Gerakas)
- Tagged hero locations marquee (14 anchors), home locations-preview `<h3>`s (7), and gymnastiria.html directory `<h3>`s (7) with `data-i18n="loc-..."` keys. On gymnastiria, the area name is wrapped in `<span data-i18n>` so "MEGA GYM " stays static
- Addresses (Greek street names) intentionally left untranslated for now

**Locations finder (epikoinonia.html — full rebuild)**
- Replaced the standalone full-width map with a side-by-side layout: scrollable card list on the LEFT, sticky map on the RIGHT
- Cards namespaced as `.mg-loc-*` (was originally `.location-card` — collided with the home page's existing class and broke that section). Each card shows: index number (01-07), location name (translates GR↔EN), HQ pill on Kifissia, chevron arrow. Yellow accent stripe slides in from left on hover.
- Bidirectional hover/click linking: hover a card → corresponding pin scales + glows; hover a pin → corresponding card highlights; click a card → map `flyTo` + popup; click a pin → matching card scrolls into view + activates
- Pin shape rebuilt as a classic teardrop SVG (black body, yellow border, yellow M logo `mega-gym-m-cursor.png` overlaid). HQ (Kifissia) pin is bigger (50×66 vs 36×48) + permanent soft yellow drop-shadow glow (filter, not pulsing animation — Dimitris specifically asked for non-animated distinction)
- Popups: name, address, phone, tags, **"→ Get Directions"** yellow pill button (opens Google Maps)
- All 7 pin coordinates updated to user-provided exact lat/lng (was rough geocoded values that landed off-target)
- Card list height matches map (600px on desktop) using `flex: 1` per card so they distribute evenly. Mobile (<900px) reverts to natural sizing, list above map.

**Language change event (script.js)**
- `applyTranslations()` now dispatches a custom `mg:langchange` event after all `data-i18n` swaps complete. Lets JS-rendered content (e.g. epikoinonia map cards/popups) re-render on language switch. Used by epikoinonia inline script to swap area names + popup directions label between GR/EN.

**Preloader (all pages)**
- Switched logo from the black-background `mega-gym-logo.png` to the transparent yellow M (`mega-gym-m-transparent.png`) — consistent with the cursor visual
- Restructured the animation: the logo travels left → right inside a fixed-width track, dragging the yellow fill line behind it (one continuous ~1.8s animation, both `width` and `left` animated in sync)
- Added preloader markup to every page (previously only on dokimastiki + pilates)
- **NOTE — currently in showcase mode:** the `sessionStorage('megagym-loaded')` gate has been removed in `script.js`, so the preloader plays on EVERY page navigation. For production, restore the gate so it only shows on first visit per session.

**Nav fixes**
- Added missing Επικοινωνία link to `personal-training.html` nav (was the only subpage missing it)
- Changed `.nav-dropdown-toggle` from `display: flex` to `display: inline-flex` so the "Services" item sits on the same baseline as the other nav items (was rendering slightly higher because block-level flex broke inline baseline alignment)

**Home page locations card overlap fix**
- Added `padding-right: 90px` to `.location-card-featured > h3` so the absolute-positioned "Κεντρικό" badge no longer overlaps the Kifissia title

### Session 2 — Continued (Dimitris)

**Comprehensive home page i18n fill-in**
- Added all missing translation keys to both `el` and `en` blocks in `script.js`: `video-tag`, `video-title`, full `pricing-*` set (~17 keys for the 3 plans + features + popular badge), full `trainers-*` set (4 trainer cards × name+desc), full `faq-*` set (6 Q+A pairs), `transform-ioanna-name`, `transform-giannis-name`, `transform-prog-tx`, `transform-prog-long`. Plus 7 `addr-*` keys for translated street addresses (Greek street names → Latin transliterations) and `loc-hours`.
- Tagged previously-untagged elements: `<h4>Ιωάννα</h4>` / `<h4>Γιάννης</h4>` in transformations, transform-program spans, location addresses + hours line on locations preview cards.
- Trial form (dokimastiki.html): added `data-i18n` to all 7 location `<option>`s + interest options; added `trial-form-*` keys to dictionary.
- Contact form (epikoinonia.html): added `data-i18n` to all location options, added missing `epi-form-*` keys to `placeholderTranslations`, swapped placeholder HTML attributes from label-text to meaningful examples (`email@example.com`, `69x xxx xxxx`, `Γράψτε το μήνυμά σας...`).
- Home page contact form: added `data-i18n-placeholder` to all 4 inputs (was missing entirely — placeholders never translated). Added new `form-email` placeholder key.
- Phone CTA section on dokimastiki.html: tagged the 7 location `<span>`s with existing `loc-*` keys.

**Service cards (index.html "What We Offer") — symmetric layout + brand-aligned badge**
- Replaced Group Personal Training icon (was generic plus-circle) with a 3-person SVG (taller centre figure flanked by two smaller ones)
- Replaced Pilates Studio icon (was a bell) with a seated lotus-pose figure on a mat
- Pushed all 3 "Learn More" buttons to bottom via `.service-card > .btn { margin-top: auto }` so they align across cards
- Added `min-height` to `.service-card h3` (2.4em) and `.service-card p` (4.5em) so title and description rows align across cards regardless of 1-line vs 2-line content
- **Badge moved out of flow:** the `ΔΩΡΕΑΝ με Συνδρομή / FREE WITH MEMBERSHIP` badge is now `position: absolute; top: 14px; right: 14px` — small yellow pill with checkmark prefix. Removed the previous green styling and the two invisible-placeholder spans on the other cards (no longer needed since badge no longer takes flow space). Tightened `.service-icon { margin-bottom: 12px }` (was 20px).

**Two Types of Gyms section (index.html) — CTA consolidation + padding fix**
- Removed both "Δες τα Γυμναστήρια / View Gyms" CTAs from inside the cards. Added one shared yellow CTA centred below the grid (uses existing `.section-cta` pattern).
- Fixed asymmetric top/bottom padding on `.gym-type-card`: removed `margin-bottom: 28px` from `.gym-type-features` (was reserving space for the now-removed buttons; was making the bottom feel ~28px deeper than the top).

**Pricing CTAs unified (index.html)**
- All 3 "Ξεκίνα Τώρα / Get Started" buttons changed from mixed `btn-dark` / `btn-yellow` to uniform `btn-yellow btn-full`. Featured plan still differentiated by yellow border + "Most Popular" badge, not by button style.

**Section divider between FAQ and Locations (index.html)**
- Added 4px solid yellow `border-top` on `.locations-preview` (later moved to the new locations-finder section) so the section break from white FAQ to the next section reads visually.

**Locations finder moved from epikoinonia.html → index.html**
- The full list+map locations finder section (with all bidirectional hover linking, teardrop pins, HQ glow on Kifissia, language-aware city names + popups) **was moved from epikoinonia.html to index.html**, replacing the old `.locations-preview` 7-card grid.
- ~158 lines of dead leaflet code stripped from epikoinonia.html (gyms array, marker setup, render functions, etc.).
- Section uses `section-dark` so the visual break against the previous (white) FAQ section is automatic — no extra divider needed.

**Contact-quick section removed from index.html**
- The duplicate "Επικοινωνία / Επικοινωνήστε Μαζί Μας" contact section + form on the home page is gone. Users go to the dedicated `epikoinonia.html` page (linked in nav) for the contact form. Eliminates redundancy and shortens the home page.

**Footer social icons standardized site-wide**
- Every page footer now uses the same canonical 4-icon SVG block (Facebook, Instagram, YouTube, TikTok) inside `.footer-brand`.
- **Fixed text-initials → SVG** on `proponisi.html`, `personal-training.html`, `pilates.html`, `dokimastiki.html` (footers had `<a>FB</a><a>IG</a><a>YT</a>` text links instead of icons).
- **Added social row to `gymnastiria.html` footer** — was missing entirely.
- **Removed duplicates** on `index.html` (the `.contact-social` block in the contact section, before that section was also removed) and `epikoinonia.html` (had social-row in the wrong footer column AND in the contact section — now in the canonical footer-brand spot only).
- Added `margin-top: 24px` to `.social-row` so social icons aren't flush against the footer-brand description text.

**Trainer cards visibility fix (index.html)**
- `.trainer-avatar` background changed from washed-out light gray to brand black (#0a0a0a) with bold yellow letters and yellow border. PT/GP/PL/NT initials now pop on either light or dark cards.
- Bumped trainer avatar font weight 700 → 800; added subtle drop shadow.
- `.trainer-name` got explicit `color: var(--black)` and weight 700 (was 600); `.trainer-role` color bumped from `gray-500` to `gray-700` for readability on white cards.

**Nav fixes**
- "Services" dropdown nav item — changed `display: flex` to `display: inline-flex` on `.nav-dropdown-toggle` so it sits on the same baseline as the other inline `<a>` nav items (was rendering slightly higher).
- `personal-training.html` — added missing `<li><a href="epikoinonia.html">Επικοινωνία</a></li>` to the nav (was the only subpage missing it).

**Hero locations card overlap fix (index.html)**
- Added `padding-right: 90px` to `.location-card-featured > h3` so the "Κεντρικό" badge in the top-right corner of the Kifissia card no longer overlaps the title text. (Note: the home page locations preview was later removed entirely; the rule remains for the gymnastiria directory's featured card if it uses the same class.)

**Preloader**
- M-letter logo travel animation: logo travels left→right inside a fixed-width track, dragging the yellow fill line behind it (one continuous ~1.8s animation, `width` and `left` synced). Replaces the static-logo + filling-bar layout.
- Logo image source changed from black-background `mega-gym-logo.png` to transparent yellow M (`mega-gym-m-transparent.png`).
- Preloader markup added to every page (was only on dokimastiki + pilates).
- **`sessionStorage('megagym-loaded')` gate restored** — preloader now only plays on first visit per session, not on every page navigation. (Earlier removed for showcase / testing; restored before production.)

---

## Still To Do

### Homepage (index.html)
- [x] ~~Hero rework, parallax cap, stat block removal~~
- [x] ~~Remove/reduce duplicate "33+ years" stat~~ — about-metrics + comparison-strip removed
- [x] ~~"5/2 tons" stat~~ — kept with bold-unit emphasis on home only
- [x] ~~Services section symmetry~~ — badge to corner, content rows align
- [x] ~~Two Types of Gyms padding~~ — bottom fixed, single shared CTA
- [x] ~~Pricing CTAs unified~~ — all 3 yellow + full-width
- [x] ~~Old "Our Gyms" 7-card preview replaced with linked list+map finder~~
- [x] ~~Duplicate contact-quick section removed~~
- [ ] Hero badge "33 Χρόνια" + about-lead "Με 33 χρόνια εμπειρίας" — decide if both still needed (33+ now only appears in those 2 places, was previously 4)

### Gymnastiria page (gymnastiria.html)
- [ ] Consider whether the big EXCLUSIVE badge on the gym-type comparison card needs restyling (currently flat yellow — small loc-tags already done)
- [ ] Center the "want to try our..." section content
- [ ] **Add per-gym galleries** — when a user clicks a gym in the directory, open a gallery / detail view with multiple photos of that location. Each of the 7 gyms should have its own set of photos (interior, equipment, locker rooms, etc.). Needs photo set per location from client.

### Dokimastiki page (dokimastiki.html)
- [x] ~~Trust signals stat block (33/15K/7) removed~~
- [x] ~~"Why try us?" 3-card section archived (commented out, source preserved)~~
- [x] ~~Phone CTA padding tightened~~
- [ ] **Decide:** keep phone numbers on this page or move all to epikoinonia.html only?

### Personal Training page (personal-training.html)
- [ ] Translate testimonial names in the "proven results" section (still pending)
- [ ] **Add depth: more photos + more written content.** Currently the page is light on visual storytelling. Add gallery / before-after photos, longer copy on the transformation programs, photos of the EXCLUSIVE centers.

### Pilates Studio page (pilates.html)
- [ ] Replace emoji icons (🕐 👥 🏆) in the Schedule / Groups / Quality cards with proper SVG icons
- [ ] **Add depth: more photos + more written content.** New pilates images already exist in `Gym_pics/new/` (action shots + studio shots) — wire them into the page. Stelios noted in original handoff that this is a high-priority page.

### Proponisi page (proponisi.html)
- [ ] **Add depth: more photos + more written content** for Group Personal Training. Show TRX / MEGA ZONE / MEGA CAGE / SKILLMILL etc. with photos of the actual equipment in use.

### All Pages
- [ ] Audit every page for duplicate information and wrong section ordering
- [x] ~~Home page i18n coverage~~ — all pricing/trainers/faq/transform/addr/video/loc-hours keys + form placeholders + select options
- [ ] **i18n coverage on subpages:** missing keys remain on personal-training (`pt-opt*`, `pt-r*`, `pt-celeb-*`, etc.), pilates (`pil-acc-*`, `pil-hi-*`, `pil-ben-*`, `pil-group-*`), proponisi (`pro-why*`, `pro-intro-*`), gymnastiria (`gym-fc-feat*`, `gym-ex-feat*`).
- [ ] **Untagged Greek strings:** cookie banner text on pilates+proponisi, FAB button labels.
- [ ] **Meta tags / `<title>` runtime swap:** currently hardcoded Greek on every page.
- [x] ~~Preloader sessionStorage gate restored~~
- [x] ~~Footer social icons standardized site-wide~~

### Content / asset wiring (Dimitris flagged — needs source files)
- [ ] **TV channel logos:** ANT1, ALPHA, STAR, EPSILON in the "Όπως είδατε στα" section need real logo files + correct outbound links
- [ ] **Real trainer photos** for the Team section on home page (currently just initials in circles)
- [ ] **Per-gym photo sets** for the gymnastiria gallery feature above

### Asset cleanup / wiring
- [ ] **Wire favicon to `mega-gym-icon-black.png`** (currently every page uses the wider `mega-gym-logo.png` which doesn't read well at favicon size)
- [ ] **Set `og:image` to `1200x630wa.jpg`** for social share previews (proper 1200×630 dimensions)
- [ ] Decide whether to use unused interior shots (`gym-exterior-night.jpg`, `Mega-Gym-02.jpg`, `gym-interior-equipment.jpg`, `gym-interior-training.jpg`) somewhere or delete them. The night exterior shot is genuinely good — could anchor the gymnastiria page.

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
- **Language-change event:** `applyTranslations()` in script.js now dispatches `document.dispatchEvent(new CustomEvent('mg:langchange', { detail: { lang } }))` after every translation swap. Use this hook for any **JS-rendered content** (e.g. cards/popups built dynamically) that has no `data-i18n` attributes the i18n loop can find. The epikoinonia map's card+popup re-render listens for it.
- **`getLang()` source of truth:** read `localStorage.getItem('megagym-lang')` first, then fall back to `document.documentElement.lang`, then `'el'`. localStorage matches what `script.js` writes on toggle so initial JS render doesn't flash the wrong language.
- **Locations finder CSS namespace:** the side-by-side list+map layout on epikoinonia uses `.mg-loc-*` classes (`.mg-loc-finder`, `.mg-loc-list`, `.mg-loc-map`, `.mg-loc-card`, `.mg-loc-card__name`, `.mg-loc-card__hq`, `.mg-loc-card__num`, `.mg-loc-card__chevron`). Originally used `.location-card` which collided with the home page's existing class — keep these namespaced.
- **Map pins (Leaflet divIcon):** teardrop SVG path with `viewBox="0 0 32 44"`, point at `(16, 43)`. iconAnchor is bottom-centre `[w/2, h]` so the pin's tip sits exactly on the gym's lat/lng. HQ uses `.is-hq` modifier to scale up + add permanent yellow drop-shadow glow. M logo overlaid as `<img>` positioned absolutely (with a small `-1px` left nudge for visual centring of the asymmetric M glyph).
- **Location area names — single key set:** `loc-kifissia` / `loc-metamorfosi` / `loc-glyfada` / `loc-vrilissia-melissia` / `loc-agia-paraskevi` / `loc-alimos` / `loc-gerakas`. Used everywhere the area name appears (hero marquee, locations preview, gymnastiria directory, map cards/popups). Greek values are the original neighborhood names; English values are standard Latin transliterations (Kifissia, Metamorfosi, Glyfada, etc.).

---

*Last updated 2026-04-28*  
*Session 1: Stelios · Session 2 (multiple sub-sessions): Dimitris*
