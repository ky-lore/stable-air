# Stable Air Heating & Cooling — Brand Rules

_Scraped from https://stableairhvac.com/ on 2026-08-25. Design language: Premium / Inland template family (elevated dark + accent-band static site)._

## Company Facts (confirmed from onboarding)

| Field | Value |
|---|---|
| Legal name | Stable Air LLC |
| DBA | Stable Air Heating & Cooling LLC |
| Industry | HVAC (LLC) |
| Tagline | Your Trusted Partner for Reliable Heating & Cooling Services |
| Concept | "Leading the charge in comfort" — knight-on-horse mascot (Stable = horse + cavalry "charge" pun) |
| Owner | Anthony Formichelli (Owner) |
| Main phone | (518) 645-8011 |
| Owner cell | (518) 416-6508 |
| Email | StableAirHVAC@gmail.com (onboarding) · site shows anthony@stableairhvac.com — confirm which to display |
| Address | 30 Wood Rd, Round Lake, NY 12151 |
| Hours | Mon–Sun, 24 Hours (24/7) |
| EIN | 414853546 |
| CRM / integration | Housecall Pro |
| Domain | StableAirHVAC.com (GoDaddy) — ⚠️ do NOT use live until SEO/domain approval, ~2–3 wks. Client also weighing MyStableAir.com |
| Hosting/CMS | WordPress — ⚠️ someone else currently hosts; access can't be granted |
| Social | IG [@StableAirHVAC](https://instagram.com/StableAirHVAC) · [Facebook](https://www.facebook.com/share/14qn7F617oC/?mibextid=wwXIfr) · GBP (newly made) · no Yelp |
| Brand book | coming via Slack (not yet received) |

**Service area (onboarding — authoritative):** Clifton Park, Mechanicville, Halfmoon, Ballston Lake, Ballston Spa, Latham, Saratoga Springs. _(Site also lists Round Lake, Burnt Hills, Delmar, Glenville, Loudonville, Niskayuna, Rexford, Rotterdam, Slingerlands — usable as extended coverage.)_

**Ideal customer:** homeowners 30–60, single-family homes.
**Competitors:** Grasshopper Heating & Cooling, Glamorgan, Reimer, Family Danz, Adams Heating, Mohawk Heating & Cooling.

## Services

- **Cooling** — AC install / repair / maintenance / replacement, ductless **mini-splits** (with rebates), duct cleaning
- **Heating** — gas furnaces, boilers + tankless boilers, water heaters (tank & tankless)
- **Preventative maintenance** — seasonal tune-ups, memberships
- **Home Improvements** — kitchen/bath remodeling, insulation, electrical upgrades, solar integration

## Brand Colors — ROYAL PURPLE + GOLD (corrected from live screenshot)

> ⚠️ The Astra `#046BD2` blue tokens I first scraped were **unused theme defaults** — the actual applied brand is a heraldic **deep-purple + gold** system. These hex values are pulled from the live site CSS and match the screenshot.

| Token | Hex | Use |
|---|---|---|
| Purple 900 (base) | `#1A0542` | header/nav, hero base, footer, darkest bands |
| Purple 800 | `#24024B` | dark headings text, deep panels |
| Purple 700 | `#3A076A` | mid gradient stop, section bg |
| Purple 500 (accent) | `#5D00AF` | vivid purple accents, links on light |
| Gold 300 (light) | `#FFF8DC` / `#FFF3C0` | top of gold gradient, highlights |
| **Gold 500 (primary)** | `#FFD24D` | **primary CTA / panel gold**, buttons, gold cards |
| Gold 400 | `#F1C151` / `#FFC14B` | nav link text, secondary gold |
| Gold 700 (deep) | `#E0980F` / `#E39C12` | bottom of gold gradient, gold shadow |
| White | `#FFFFFF` | text on purple, surfaces |

**Signature gold gradient** (hero card / gold buttons):
`linear-gradient(150deg, #FFF7D6, #FFD24D 30%, #F6B619 55%, #9A6606)` — or the simpler `linear-gradient(180deg,#FFF8DC,#FFD24D 46%,#E0980F)`.

**Theme direction:** deep-purple (`#1A0542`→`#3A076A`) hero & accent bands, **gold** as the CTA/highlight color, purple text on gold panels and gold/white text on purple. Premium/Inland dark-band structure, but purple-not-slate and gold-not-cyan. Keep it heraldic/bold to match the knight mascot — don't sand it down to a generic HVAC blue.

## Typography (custom fonts pulled to `/fonts`)

| Font file | Role |
|---|---|
| `FTY-STRATEGYCIDE-NCV.woff2` | bold condensed **display** — big headlines / hero |
| `Gotham-Ultra.woff2` | heavy display alt / eyebrows |
| `Gotham-Medium.woff2` | headings + body |
| `Ephemera-Nickson-Two.woff2` | script accent (use sparingly) |

Fallback stack: `'Gotham Medium', system-ui, -apple-system, sans-serif`.

## Voice / Copy (verbatim from live site — reuse)

Headlines: "Proudly Leading The Charge in Comfort" · "Keeping Round Lake Comfortable Year-Round" · "Your Trusted Partner for Year-Round Home Comfort" · "Delivering Comfort You Can Count On" · "Upfront & Honest Pricing" · "Let's Bring Comfort Back to Your Home!"

Why-choose pillars: **Certified HVAC Specialists · Built on Trust & Care · Driven by Excellence · Service with Integrity.**

### Coupons (exact, from live homepage carousel — used verbatim on site)
1. **$1,000 OFF — Any New System Install** — Valid for A/C, furnace, or tankless water heater replacement · Free in-home estimate · No pressure, no gimmicks · Interest-free financing available.
2. **FREE — Smart WiFi-Thermostat** — Free Smart WiFi-Thermostat with purchase of a Membership Plan · Pay labor only for installation · Mention when purchasing a Family Plan Membership.
3. **$99 — Water Heater Flush** — Normally $269 · Includes full inspection and maintenance · Valid for tank or tankless.
4. **$79 — System Tune-Up** — Normally $179 · Includes full inspection and tune-up · Valid for A/C or furnace depending on season · Use now or save for later.

_All four carry: "*Must mention this coupon when scheduling appointment." Verify still current before launch._

## Testimonials (real, from /testimonials — safe to reuse)

- **Ryan Donnelly** — "Anthony and the team at Stable Air were professional from start to finish. They explained everything clearly, arrived on time, and had our AC running perfectly the same day."
- **Kelsey Donovan** — "We recently had our water heater replaced, and the experience couldn't have been better. Anthony answered all of our questions, the installation was clean and efficient, and the pricing was fair."
- **Michael Harrington** — "Our furnace stopped working during a cold weekend, and Stable Air responded much faster than we expected. Anthony quickly found the issue and had our heat restored the same day."
- **Ashley Bennett** — "We scheduled seasonal HVAC maintenance before summer... The technician was friendly, respectful of our home, and explained what was checked."
- **Jason Whitmore** — "After comparing several HVAC companies around Round Lake, we chose Stable Air for a new AC installation. Anthony helped us select the right system without any pressure."

## Assets (in `/assets`)

**Logos:** `logo-stableair.png` (512×512), `logo-mascot.svg`, `mascot.svg` (character mascot).
**Photos:** `van-front.webp`, `truck.webp`, `truck-scaled.webp` (branded vehicles), `couple-discussing.webp`, `family-relaxing.webp`, `home-improvement.webp`, `heating-services.webp`, `stable-air-hero.webp`, `hvac-tips.jpg`.
Raw scraped HTML for all key pages kept in `/assets/_raw` for reference.

## Website Brief (from onboarding)

**Reference sites client likes:** callwarmwelcome.com · mastonstulsa.com · caswellair.com · shiptons.ca

**Requested pages / priorities:**
- **Mini Splits** page with **rebates highlighted** (hero nav item)
- **"Fast Track" form** — auto-filtering intake capturing **Unit Type · Service Requested · Priority Level**
- **Duct Cleaning** page + coupons
- **$79 Tune-Up** (Furnace/AC) offer
- **Water Filtration** page
- **Home Improvement** hub: Electric Panel Upgrade, Insulation, Kitchen & Bath Remodels, Siding, Roofing
- **Membership** page with **dedicated login** → exclusive coupons, filters at cost, promotions, priority support

**Features:** contact form · photo gallery · live chat · customer login/membership portal.
**Integration:** Housecall Pro (booking/CRM — form + booking should target this).

## Still open / to confirm

- Which email to display (Gmail vs anthony@stableairhvac.com) · HVAC license # (not provided) · years in business · brand affiliations (Carrier/Trane/etc.) · which promos are currently live.
- **Brand book** (coming in Slack) — reconcile exact hex/fonts against this doc when it lands.
- **Do not point anything at StableAirHVAC.com yet** (2–3 wk approval); build on a placeholder/staging path. Domain may become MyStableAir.com.
- "Your Story" / pitch copy pending Growth team — using site's existing verbatim copy as placeholder.

## Build notes (site v1)

- **Stack:** static HTML + one `styles.css` + `app.js`. Pages built from `_build/parts/*.html` + shared `_build/header.html`/`footer.html` via `_build/build.py` (stamps head + active nav). Edit a part → rerun `python3 _build/build.py`. `index.html` is hand-authored (video hero, coupons, stats, marquee).
- **Nav (top-level only, no submenu pages):** Home · Mini Splits (Rebates pill) · Air Conditioning · Heating · Home Improvements · Membership · Resources · Contact.
- **Motion/creative:** video hero (aerial homes, `assets/video/hero.mp4`, Ken Burns + gold sheen), count-up stats, service-area marquee, reveal-on-scroll w/ stagger, floating spinning gold **crest** (mascot in a gold shield) in every dark band, coupon shine-sweep, icon micro-interactions. Heating dark band uses `fireplace.mp4`. All motion respects `prefers-reduced-motion`.
- **Badge reuse:** `logo-mascot.svg` = full lockup (nav/footer/CTA); `mascot.svg` = standalone knight, reused as crest + coupon watermark.
- **Fonts:** FTY Strategycide (display, uppercase headings) · Gotham Ultra/Medium (headings/body) · Ephemera loaded but unused.
- **Placeholders to finish:** member portal login (→ Housecall Pro), Fast Track form action (→ Housecall Pro), membership plan names/pricing, rebate amounts, final home-improvement scope, live-promo confirmation. Do NOT deploy to StableAirHVAC.com until client's 2–3 wk SEO approval.
