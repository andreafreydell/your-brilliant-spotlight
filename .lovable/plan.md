

## Repositioning: Portfolio-First Landing with "Organizational Architecture with AI"

### Problem with the current landing
The current homepage reads like a course marketplace for startup founders — "For founders who build," "Steal my systems," "Ways to work," offer cards with pricing. It feels salesy and prescriptive rather than showing Andrea's range and credibility.

### New direction
Reframe the site as a **professional portfolio** for someone who does organizational architecture — strategy, brand, digital, and AI — with the work speaking for itself. The tone shifts from "buy my stuff" to "here's what I do and what I've built."

---

### Site structure changes

**Navigation** (currently: Systems | Proof | Ways to Work | About)
Change to: **Work | About | Services | Contact**

**Homepage new section order:**
1. **Hero** — Clean introduction. No label like "For founders who build." Instead, something like: "Organizational architecture — strategy, brand, digital, and AI." Subtitle positions Andrea as someone who builds operating systems for businesses. One CTA: "See the Work." Optional secondary: "Get in Touch."
2. **Portfolio grid** — Move the proof/projects section up to be the primary content. Keep the dense mini-card grid. This IS the landing page's main body.
3. **About (brief)** — Keep the photo + short bio. Remove the "Who builds this" label. Simpler: name, what she does, link to full About page.
4. **Services (light)** — Replace the 3 offer cards with a simple, quiet list of capabilities (Organizational Architecture with AI, Strategy & Operations, Brand & Creative Direction, Digital Systems). No pricing, no "steal my system." Just a clean description and a "Let's talk" CTA.
5. **CTA + FAQ** — Simplified. Remove bullets about "steal my workflows." Just: "Interested in working together?" with contact CTA.

**Remove from homepage entirely:**
- "Steal My System" roadmap section
- Offer cards (limited-time / mentorship / custom builds)
- "For founders who build" label
- "What I help you build" highlight cards in hero

**Other pages stay** but nav labels update. Courses/Systems pages remain accessible but aren't the homepage focus.

---

### Files to edit

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Rebuild: Hero (simple) → Portfolio grid → About snippet → Light services list → CTA/FAQ |
| `src/i18n/en.ts` | Rewrite hero, offers, labels. Remove "founders who build," "steal my system" language. Add "Organizational Architecture" framing |
| `src/i18n/es.ts` | Mirror English changes |
| `src/components/Navbar.tsx` | Update nav link order/labels: Work, About, Services, Contact |
| `src/components/OfferCard.tsx` | May be removed from homepage; kept for Services page if needed |

### Tone shift examples
- **Before**: "For founders who build" → **After**: removed
- **Before**: "I'll build your AI systems with you" → **After**: "Organizational architecture for businesses that care about how they operate."
- **Before**: "Steal My Systems" → **After**: removed from landing; courses page keeps its own framing
- **Before**: 3 offer cards with pricing → **After**: a quiet capabilities list, no prices on homepage

