

# Andrea Freydell — Personal Portfolio

A refined, multi-page portfolio site built with your custom design system: warm neutrals, pastel accents, Josefin Sans typography, and smooth scroll-reveal animations.

---

## Design System Setup
- Custom Tailwind theme with your exact tokens: canvas (#F6F2EA), paper (#FBF8F1), ink (#1F1E1C), seafoam, dusty-teal, blush-peach, sky, brass, tag-red
- Josefin Sans font loaded via Google Fonts
- 8pt spacing grid, 20px card radius, 14px button radius
- Signature underline stroke effect on key words
- Scroll-reveal animations (fade + translateY on intersection)

## Shared Components
- **Navbar** — Fixed, glass-blur background. Logo "Andrea Freydell" left, links (Work, Services, About) + "Let's Talk →" CTA button right. Mobile hamburger menu.
- **Footer** — Divider with brass dot, copyright text, minimal
- **Project Card** — Illustration area (SVG), micro label, title, description, "View Case Study →" link with hover animation
- **Pillar Tags** — Colored pill badges (seafoam=Consulting, peach=Creative, sky=Digital)
- **Buttons** — Primary (dark ink), Secondary (outline), Accent (tag-red)
- **Divider** — Line + brass dot + line

## Pages

### 1. Home (`/`)
Six sections in sequence:
1. **Hero** — "I build brand worlds that perform." + radial seafoam gradient background glow, two CTAs
2. **Three Pillars** — Centered 3-column grid: Management Consulting, Branding & Creative Direction, Digital Strategy
3. **Featured Work** — 6 selected project cards in 3-col grid
4. **Proof Strip** — Industry names in italic: Fragrance · Fashion · Fintech · Agriculture · Jewelry · Home & Lifestyle
5. **About Teaser** — 2-column: portrait placeholder left, bio text + "Read More →" right
6. **CTA Banner** — "Have a project in mind?" centered with accent button

### 2. Work (`/work`)
- Page header: "The Work" with intro copy
- Filter tabs: All / Consulting / Creative / Digital
- Full 13-card grid (3-col → 2-col → 1-col responsive)
- Each card links to its case study

### 3. Case Study (`/work/:slug`)
Template page with four-act structure:
- Hero header with project title, pillar tag, and full-width illustration
- WAY 1/4 — The Problem
- WAY 2/4 — The Shift
- WAY 3/4 — The System
- WAY 4/4 — The Assets
- Footer navigation: "See another project →" with next/prev links
- All 13 projects use placeholder case study content

### 4. Services (`/services`)
- Header: "Three Systems, One Practice"
- Three system cards with detailed service lists
- Engagement format section explaining the sprint-based approach
- CTA to contact

### 5. About (`/about`)
- Portrait placeholder + full bio text
- Industry tags row
- Tools & Platforms list
- CTA to contact

### 6. Contact (`/contact`)
- Header: "Let's Build Something"
- Contact form: Name, Email, "What are you working on?" textarea, multi-select for system interest (Consulting / Creative / Digital / Not sure yet)
- "Send it →" submit button (frontend-only, no backend)

## Data Architecture
- All 13 projects stored in a local data file with: slug, title, micro label, description, pillar, SVG illustration, and placeholder case study content
- No backend needed — purely static content

## Interactions & Polish
- Scroll-reveal animations on all sections using Intersection Observer
- Card hover: lift + shadow + border darken
- Button hover: slight lift + shadow
- Smooth scroll navigation
- Active nav link highlighting
- Responsive across all breakpoints (desktop/tablet/mobile)

