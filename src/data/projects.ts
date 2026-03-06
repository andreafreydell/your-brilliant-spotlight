import type { Pillar } from "@/components/PillarTag";

export interface Project {
  slug: string;
  title: string;
  microLabel: string;
  description: string;
  pillar: Pillar;
  featured: boolean;
  illustration: string;
  caseStudy: {
    heroSubtitle: string;
    problem: string;
    shift: string;
    system: string;
    assets: string;
  };
}

export const projects: Project[] = [
  // ========== PILLAR 1: MANAGEMENT CONSULTING ==========
  {
    slug: "fundraising",
    title: "Debt & Equity Fundraising",
    microLabel: "Fundraising Strategy",
    description: "Capital structure design and investor-facing materials for growth-stage companies. From term sheets to pitch decks.",
    pillar: "consulting",
    featured: true,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="mc1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ddd8cf"/><stop offset="100%" stop-color="#e8e3db"/></linearGradient></defs><rect width="400" height="300" fill="url(#mc1)"/><rect x="120" y="170" width="32" height="40" rx="4" fill="#BFD6CF" opacity="0.5"/><rect x="164" y="140" width="32" height="70" rx="4" fill="#BFD3E6" opacity="0.5"/><rect x="208" y="110" width="32" height="100" rx="4" fill="#6E8F8B" opacity="0.4"/><rect x="252" y="80" width="32" height="130" rx="4" fill="#B79B63" opacity="0.45"/><rect x="100" y="210" width="204" height="3" rx="1" fill="#B79B63" opacity="0.4"/><line x1="310" y1="200" x2="310" y2="90" stroke="#6E8F8B" stroke-width="1.2" opacity="0.3"/><polyline points="306,98 310,90 314,98" fill="none" stroke="#6E8F8B" stroke-width="1.2" opacity="0.3"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Capital structure design for growth-stage companies across agriculture and artisanal brands",
      problem: "Two companies at different growth stages — a premium blueberry agriculture company (Santa Cruz Berries) and an artisanal jewelry brand — both needed capital to scale operations. SCB was looking to fund agricultural expansion and cold chain infrastructure. The jewelry brand needed seed capital to formalize production and enter new retail channels.",
      shift: "Structure the capital raise for each — define the right mix of debt and equity, build the investor-facing materials, and lead the fundraising process from strategy through close.",
      system: "Built detailed financial models projecting revenue, costs, and capital needs over a 5-year horizon. Designed the capital structure (debt vs. equity split) based on each company's risk profile and growth trajectory. Created investor decks, executive summaries, and data rooms. Managed investor outreach, due diligence responses, and negotiation support.",
      assets: "Both companies secured the capital they needed. SCB closed a round that funded their next phase of agricultural expansion. The jewelry brand raised initial capital that enabled formalized production and its first wholesale distribution partnerships.",
    },
  },
  {
    slug: "financial-modeling",
    title: "Financial Modeling",
    microLabel: "Financial Systems",
    description: "Operational and financial models built for decision-making. Scenario planning, unit economics, and investor-grade projections.",
    pillar: "consulting",
    featured: true,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="mc2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e2ddd6"/><stop offset="100%" stop-color="#ece5db"/></linearGradient></defs><rect width="400" height="300" fill="url(#mc2)"/><rect x="110" y="80" width="180" height="130" rx="6" fill="#FBF8F1" opacity="0.7"/><line x1="110" y1="108" x2="290" y2="108" stroke="#1F1E1C" stroke-width="0.5" opacity="0.1"/><line x1="110" y1="136" x2="290" y2="136" stroke="#1F1E1C" stroke-width="0.5" opacity="0.08"/><line x1="110" y1="164" x2="290" y2="164" stroke="#1F1E1C" stroke-width="0.5" opacity="0.08"/><line x1="170" y1="80" x2="170" y2="210" stroke="#1F1E1C" stroke-width="0.5" opacity="0.06"/><line x1="230" y1="80" x2="230" y2="210" stroke="#1F1E1C" stroke-width="0.5" opacity="0.06"/><rect x="172" y="138" width="56" height="24" rx="3" fill="#BFD6CF" opacity="0.4"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Investor-grade financial models across agriculture, fashion, fintech, and consumer goods",
      problem: "Multiple companies across agriculture, fashion, fintech, and consumer goods needed rigorous financial models to support decision-making — whether for fundraising, pricing strategy, or operational planning. Many were operating on intuition rather than data.",
      shift: "Build investor-grade financial models that could serve as living decision tools — not just static projections, but dynamic systems that adapted to different scenarios and informed real-time business decisions.",
      system: "Developed full P&L, cash flow, and balance sheet models with scenario analysis capabilities. Built unit economics frameworks, breakeven analysis, and sensitivity tables. Each model was tailored to the specific industry — agricultural yield cycles, fashion seasonal inventory, fintech user acquisition funnels — and designed to be usable by the founding team, not just the finance function.",
      assets: "Models became the financial backbone for fundraising decks, board reporting, and strategic planning. Enabled data-driven pricing decisions, inventory planning, and capital allocation across multiple engagements.",
    },
  },
  {
    slug: "market-analysis",
    title: "Data & Market Analysis",
    microLabel: "Market Intelligence",
    description: "Competitive landscape mapping, pricing analysis, and data-driven market entry frameworks.",
    pillar: "consulting",
    featured: false,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="mc3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d8dde4"/><stop offset="100%" stop-color="#e4ded5"/></linearGradient></defs><rect width="400" height="300" fill="url(#mc3)"/><circle cx="200" cy="145" r="60" fill="none" stroke="#BFD3E6" stroke-width="2" opacity="0.4"/><circle cx="200" cy="145" r="40" fill="none" stroke="#BFD6CF" stroke-width="1.5" opacity="0.3"/><circle cx="200" cy="145" r="20" fill="none" stroke="#E7B9A8" stroke-width="1" opacity="0.3"/><circle cx="200" cy="85" r="4" fill="#6E8F8B" opacity="0.5"/><circle cx="252" cy="120" r="4" fill="#B79B63" opacity="0.5"/><circle cx="235" cy="185" r="4" fill="#E7B9A8" opacity="0.5"/><circle cx="165" cy="185" r="4" fill="#BFD3E6" opacity="0.5"/><circle cx="148" cy="120" r="4" fill="#BFD6CF" opacity="0.5"/><polygon points="200,85 252,120 235,185 165,185 148,120" fill="#6E8F8B" opacity="0.08" stroke="#6E8F8B" stroke-width="1"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Strategic market intelligence for competitive positioning and market entry",
      problem: "Companies entering new markets or launching new product lines lacked clarity on competitive positioning, pricing benchmarks, and addressable market size. Leadership teams were making strategic bets without a clear view of the landscape.",
      shift: "Deliver comprehensive market intelligence — competitive mapping, pricing analysis, consumer segmentation, and market sizing — packaged into actionable strategic presentations for leadership and investors.",
      system: "Conducted primary and secondary research across target markets. Built competitive matrices mapping product positioning, pricing tiers, and distribution footprints. Analyzed consumer behavior data and purchase drivers. Synthesized findings into clear, visual presentation decks designed for board-level decision-making.",
      assets: "Informed go/no-go decisions on market entry. Pricing strategies were validated or recalibrated. Leadership teams gained a shared, data-backed view of where to compete and how to position — replacing assumption with evidence.",
    },
  },
  {
    slug: "wholesale-strategy",
    title: "Wholesale & Distribution",
    microLabel: "Commercial Strategy",
    description: "Channel architecture and distributor network strategy. Pricing tiers, territory mapping, and sell-through systems.",
    pillar: "consulting",
    featured: false,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="mc4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ddd6cb"/><stop offset="100%" stop-color="#e8e3db"/></linearGradient></defs><rect width="400" height="300" fill="url(#mc4)"/><circle cx="200" cy="130" r="18" fill="#BFD6CF" opacity="0.45"/><circle cx="130" cy="190" r="14" fill="#BFD3E6" opacity="0.4"/><circle cx="200" cy="200" r="14" fill="#E7B9A8" opacity="0.35"/><circle cx="270" cy="190" r="14" fill="#6E8F8B" opacity="0.35"/><circle cx="145" cy="110" r="10" fill="#B79B63" opacity="0.35"/><circle cx="255" cy="110" r="10" fill="#B79B63" opacity="0.35"/><line x1="200" y1="148" x2="130" y2="176" stroke="#1F1E1C" stroke-width="0.8" opacity="0.1"/><line x1="200" y1="148" x2="200" y2="186" stroke="#1F1E1C" stroke-width="0.8" opacity="0.1"/><line x1="200" y1="148" x2="270" y2="176" stroke="#1F1E1C" stroke-width="0.8" opacity="0.1"/><line x1="200" y1="112" x2="145" y2="110" stroke="#1F1E1C" stroke-width="0.8" opacity="0.08"/><line x1="200" y1="112" x2="255" y2="110" stroke="#1F1E1C" stroke-width="0.8" opacity="0.08"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Building structured wholesale distribution from DTC-first brands",
      problem: "A consumer brand with strong DTC presence needed to expand into wholesale distribution — but lacked a structured channel strategy. No defined pricing tiers for distributors, no territory framework, and no tools to manage multi-channel sell-through.",
      shift: "Design and implement a complete wholesale distribution system — from pricing architecture and distributor selection criteria to territory mapping and channel conflict management.",
      system: "Developed a tiered pricing structure (distributor, sub-distributor, retail) with margin frameworks that protected brand value. Mapped geographic territories and defined exclusivity terms. Created distributor onboarding materials, order systems, and performance tracking dashboards. Built the commercial terms and negotiation playbooks for the sales team.",
      assets: "Successfully launched the wholesale channel with a structured distributor network. Revenue diversified beyond DTC. Channel conflicts minimized through clear territory and pricing rules. Sell-through tracking enabled proactive inventory and relationship management.",
    },
  },
  {
    slug: "sales-training",
    title: "Sales Training Module",
    microLabel: "Training System",
    description: "End-to-end training program for wholesale sales teams. Product knowledge, objection handling, and conversion frameworks.",
    pillar: "consulting",
    featured: false,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="mc5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d5ddd4"/><stop offset="100%" stop-color="#e2ddd6"/></linearGradient></defs><rect width="400" height="300" fill="url(#mc5)"/><rect x="120" y="100" width="74" height="100" rx="4" fill="#FBF8F1" opacity="0.7" transform="rotate(-3 157 150)"/><rect x="206" y="100" width="74" height="100" rx="4" fill="#FBF8F1" opacity="0.7" transform="rotate(3 243 150)"/><line x1="200" y1="95" x2="200" y2="205" stroke="#B79B63" stroke-width="1.5" opacity="0.4"/><rect x="132" y="118" width="50" height="3" rx="1" fill="#1F1E1C" opacity="0.1" transform="rotate(-3 157 119)"/><rect x="132" y="130" width="40" height="3" rx="1" fill="#1F1E1C" opacity="0.08" transform="rotate(-3 152 131)"/><rect x="132" y="142" width="46" height="3" rx="1" fill="#1F1E1C" opacity="0.06" transform="rotate(-3 155 143)"/><rect x="218" y="118" width="50" height="3" rx="1" fill="#1F1E1C" opacity="0.1" transform="rotate(3 243 119)"/><rect x="218" y="130" width="40" height="3" rx="1" fill="#1F1E1C" opacity="0.08" transform="rotate(3 238 131)"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Comprehensive sales training for expanding wholesale teams",
      problem: "A wholesale sales team was expanding rapidly but underperforming on conversion and average order value. Salespeople had product knowledge gaps, inconsistent pitch quality, and no standardized approach to objection handling or upselling.",
      shift: "Design and deliver a comprehensive sales training program — a reusable module that could onboard new hires and upskill existing reps, covering product knowledge, sales methodology, and performance benchmarks.",
      system: "Developed a modular training curriculum: product deep-dives (materials, construction, competitive advantages), customer persona profiles, consultative selling techniques, objection handling frameworks, and upselling scripts. Created visual training materials and reference guides. Designed evaluation criteria and role-play exercises for ongoing reinforcement.",
      assets: "Standardized the sales pitch and customer experience across the entire team. Reduced onboarding time for new hires. Provided a repeatable framework that improved conversion consistency and average order value.",
    },
  },

  // ========== PILLAR 2: BRANDING & CREATIVE DIRECTION ==========
  {
    slug: "branding",
    title: "Brand Identity",
    microLabel: "Identity Systems",
    description: "Complete brand architecture — from naming and mark design to color systems, typography, and brand guidelines.",
    pillar: "creative",
    featured: true,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bc1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c8d5c4"/><stop offset="100%" stop-color="#ddd8cf"/></linearGradient></defs><rect width="400" height="300" fill="url(#bc1)"/><circle cx="200" cy="140" r="55" fill="none" stroke="#FBF8F1" stroke-width="3" opacity="0.6"/><rect x="185" y="105" width="30" height="70" rx="3" fill="#FBF8F1" opacity="0.5"/><rect x="120" y="215" width="24" height="24" rx="4" fill="#BFD6CF" opacity="0.5"/><rect x="152" y="215" width="24" height="24" rx="4" fill="#E7B9A8" opacity="0.5"/><rect x="184" y="215" width="24" height="24" rx="4" fill="#6E8F8B" opacity="0.45"/><rect x="216" y="215" width="24" height="24" rx="4" fill="#BFD3E6" opacity="0.5"/><rect x="248" y="215" width="24" height="24" rx="4" fill="#B79B63" opacity="0.45"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Cohesive visual identities across jewelry, fashion, agriculture, and home & lifestyle",
      problem: "Multiple brands — spanning jewelry, fashion, agriculture (Santa Cruz Berries), and home & lifestyle (Ambiente Gourmet) — needed cohesive visual identities that could carry across product, retail, digital, and wholesale touchpoints. Some were new launches; others were established brands in need of a reset.",
      shift: "Develop complete brand identity systems — from strategic positioning through to visual execution — that could scale across channels and maintain consistency as the businesses grew.",
      system: "Led the full identity process: brand strategy and positioning, naming when needed, logo and mark design, color systems, typography selection, and comprehensive brand guidelines. For each brand, created a design system that included application rules for packaging, digital, print, and environmental touchpoints. Ensured the identity reflected the brand's positioning — artisanal and warm for jewelry, premium and clean for agriculture, curated and editorial for home & lifestyle.",
      assets: "Each brand launched with a fully documented identity system that provided visual consistency across all channels. Brand guidelines became the reference for every downstream creative decision — from packaging and social media to wholesale catalogs and trade fair materials.",
    },
  },
  {
    slug: "product-design",
    title: "Product Design",
    microLabel: "Product Design",
    description: "Physical and digital product design across jewelry, fashion, agriculture, and fintech — from concept through production-ready deliverables.",
    pillar: "creative",
    featured: true,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bc2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d5ddd4"/><stop offset="100%" stop-color="#e2ddd6"/></linearGradient></defs><rect width="400" height="300" fill="url(#bc2)"/><rect x="0" y="212" width="400" height="88" fill="#dbd5cb" opacity="0.4"/><rect x="95" y="210" width="210" height="4" rx="1" fill="#B79B63" opacity="0.4"/><ellipse cx="155" cy="180" rx="20" ry="20" fill="none" stroke="#B79B63" stroke-width="1.5" opacity="0.4"/><ellipse cx="155" cy="180" rx="12" ry="12" fill="#E7B9A8" opacity="0.25"/><rect x="195" y="130" width="30" height="78" rx="5" fill="#BFD6CF" opacity="0.45"/><rect x="203" y="120" width="14" height="12" rx="2" fill="#BFD6CF" opacity="0.35"/><circle cx="272" cy="185" r="8" fill="#6E8F8B" opacity="0.4"/><circle cx="260" cy="192" r="7" fill="#6E8F8B" opacity="0.35"/><circle cx="280" cy="195" r="6" fill="#6E8F8B" opacity="0.3"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Five industries, five products, one design methodology",
      problem: "Five distinct product design challenges across unrelated industries: an artisanal jewelry brand needing its first collections designed, a custom jewelry commission project, a bohemian fashion line requiring full collection development, a premium blueberry brand needing product and packaging design for retail, and a fintech startup requiring digital product (UX/UI) design.",
      shift: "Design the actual products — not just the brand around them. From physical jewelry pieces and fashion garments to agricultural product presentation and fintech app interfaces. Each required deep understanding of the materials, market, and consumer expectations specific to its industry.",
      system: "For jewelry: designed collections with technical specs for production — materials, dimensions, finishing techniques. For fashion: developed seasonal collections with mood boards, fabric sourcing, pattern development, and production-ready tech packs. For agriculture: designed the premium blueberry product line including sizing, grading, and retail-ready packaging formats. For fintech: led UX research, wireframing, and interface design for the digital platform. Each project moved from concept through production-ready deliverables.",
      assets: "Jewelry collections launched and sold through wholesale and DTC channels. The fashion line was produced and shown. The blueberry brand achieved shelf-ready premium positioning. The fintech product moved to development with a validated interface design. Five industries, five products, one design methodology.",
    },
  },
  {
    slug: "packaging",
    title: "Packaging & POP Display",
    microLabel: "Packaging & Display",
    description: "Packaging systems, retail display design, distributor corner displays, and trade fair booth architecture at Colombiamoda.",
    pillar: "creative",
    featured: false,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bc3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e6ddd4"/><stop offset="100%" stop-color="#ece5db"/></linearGradient></defs><rect width="400" height="300" fill="url(#bc3)"/><rect x="155" y="90" width="90" height="110" rx="4" fill="#FBF8F1" opacity="0.7"/><rect x="160" y="95" width="80" height="15" rx="2" fill="#BFD6CF" opacity="0.3"/><rect x="172" y="130" width="56" height="20" rx="3" fill="#E7B9A8" opacity="0.3"/><rect x="180" y="136" width="40" height="2.5" rx="1" fill="#1F1E1C" opacity="0.1"/><rect x="184" y="142" width="32" height="2" rx="1" fill="#1F1E1C" opacity="0.07"/><rect x="135" y="200" width="130" height="5" rx="2" fill="#B79B63" opacity="0.4"/><rect x="160" y="205" width="80" height="30" rx="3" fill="#BFD3E6" opacity="0.2"/><rect x="100" y="70" width="200" height="3" rx="1" fill="#1F1E1C" opacity="0.05"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Complete physical retail presence from product packaging to Colombiamoda booth",
      problem: "A jewelry and fashion brand needed a complete physical retail presence system — from product packaging to point-of-purchase displays in its own stores, distributor corner displays in third-party retail, and a trade fair booth for Colombiamoda, Colombia's largest fashion and jewelry industry fair.",
      shift: "Design a cohesive packaging and display ecosystem that maintained brand consistency across four very different physical contexts: the product itself, owned retail, wholesale partner environments, and a high-traffic trade fair.",
      system: "Designed the packaging system (boxes, bags, inserts, labels) with premium materials and finishes consistent with the brand identity. Created POP display units for the brand's own retail store — fixtures, signage, and merchandising layout. Developed a modular \"jewelry corner\" display for distributors — compact, branded, and easy to install in third-party environments. Designed and directed the Colombiamoda booth — spatial layout, signage, lighting, and product presentation for the trade fair floor.",
      assets: "Unified brand presence across all physical touchpoints. The Colombiamoda booth successfully attracted buyers and press. Distributor corner displays gave the brand visibility in partner stores without requiring full retail buildouts. Packaging elevated the perceived value and unboxing experience.",
    },
  },
  {
    slug: "photography",
    title: "Photography & Production",
    microLabel: "Production",
    description: "Art direction for product and model photography. Shoot production, editing, and channel-ready asset libraries.",
    pillar: "creative",
    featured: false,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bc4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d8d5cf"/><stop offset="100%" stop-color="#e2ddd6"/></linearGradient></defs><rect width="400" height="300" fill="url(#bc4)"/><rect x="145" y="105" width="110" height="80" rx="8" fill="#FBF8F1" opacity="0.65"/><circle cx="200" cy="145" r="25" fill="none" stroke="#6E8F8B" stroke-width="1.5" opacity="0.4"/><circle cx="200" cy="145" r="15" fill="#BFD3E6" opacity="0.25"/><rect x="170" y="100" width="30" height="10" rx="4" fill="#FBF8F1" opacity="0.5"/><rect x="115" y="205" width="52" height="38" rx="4" fill="#BFD6CF" opacity="0.3" transform="rotate(-5 141 224)"/><rect x="175" y="202" width="52" height="38" rx="4" fill="#E7B9A8" opacity="0.3"/><rect x="235" y="205" width="52" height="38" rx="4" fill="#BFD3E6" opacity="0.3" transform="rotate(5 261 224)"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "End-to-end photo production across product and lifestyle photography",
      problem: "Multiple brands needed professional visual content for e-commerce, catalogs, social media, and wholesale presentations. Both product photography (jewelry, home goods, food products) and model/lifestyle photography (fashion, campaign imagery) were required. Existing visuals were inconsistent, low-quality, or nonexistent.",
      shift: "Art direct, produce, and deliver complete photography libraries for each brand — covering product (flat lay, on-white, styled), model/lifestyle (campaign, lookbook, editorial), and post-production (retouching, color grading, format preparation for each channel).",
      system: "Led end-to-end photo production: creative direction, mood boards, and shot lists. Sourced and managed photographers, stylists, models, and locations. Directed on-set art direction for both product and model shoots. Managed post-production — retouching, color correction, cropping, and export for web, print, and social formats. Built an organized asset library for each brand.",
      assets: "Each brand received a comprehensive, channel-ready image library. Visual consistency improved across all touchpoints — e-commerce conversion rates benefited from professional product imagery, and social media engagement increased with editorial-quality lifestyle content. Assets were reusable across seasons and campaigns.",
    },
  },
  {
    slug: "presentations",
    title: "Corporate Presentations",
    microLabel: "Presentation Design",
    description: "Investor decks, board presentations, and sales materials designed for strategic narrative and visual clarity.",
    pillar: "creative",
    featured: false,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bc5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ddd8cf"/><stop offset="100%" stop-color="#e8e3db"/></linearGradient></defs><rect width="400" height="300" fill="url(#bc5)"/><rect x="135" y="115" width="130" height="82" rx="6" fill="#FBF8F1" opacity="0.5" transform="rotate(3 200 156)"/><rect x="130" y="108" width="140" height="88" rx="6" fill="#FBF8F1" opacity="0.7"/><rect x="142" y="120" width="60" height="4" rx="2" fill="#1F1E1C" opacity="0.12"/><rect x="142" y="130" width="80" height="3" rx="1" fill="#1F1E1C" opacity="0.08"/><rect x="142" y="145" width="50" height="35" rx="4" fill="#BFD6CF" opacity="0.3"/><rect x="200" y="145" width="58" height="35" rx="4" fill="#E7B9A8" opacity="0.25"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "High-stakes presentation materials for boardrooms and investor meetings",
      problem: "Companies needed high-stakes presentation materials — investor pitch decks, board presentations, sales decks, and partnership proposals — but lacked the design capability and strategic clarity to produce them at the quality level their audiences expected.",
      shift: "Design corporate presentations that combined strategic narrative with visual polish — not just \"make it pretty,\" but structure the story, refine the data visualization, and create materials that could stand on their own in a boardroom or inbox.",
      system: "Worked with founders and leadership to define the narrative arc — problem, opportunity, solution, traction, ask. Designed custom presentation templates with consistent typography, data visualization, and brand-aligned visual language. Handled information architecture — what goes on each slide, what gets cut, and how data is visualized for maximum clarity. Delivered polished, print-ready and screen-ready files.",
      assets: "Presentations used successfully in fundraising rounds, board meetings, and commercial partnerships. Several directly supported investment closings. Teams adopted the templates and design systems for ongoing use beyond the initial engagement.",
    },
  },

  // ========== PILLAR 3: DIGITAL STRATEGY ==========
  {
    slug: "web-design",
    title: "Web Design & Optimization",
    microLabel: "Web & Optimization",
    description: "E-commerce redesigns, portfolio sites, B2B landing pages, and digital presence strategy — from UX research to launch.",
    pillar: "digital",
    featured: true,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ds1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c2d1e0"/><stop offset="100%" stop-color="#e4ded5"/></linearGradient></defs><rect width="400" height="300" fill="url(#ds1)"/><rect x="110" y="72" width="180" height="156" rx="8" fill="#FBF8F1" opacity="0.75"/><circle cx="126" cy="84" r="3" fill="#E7B9A8" opacity="0.5"/><circle cx="136" cy="84" r="3" fill="#B79B63" opacity="0.4"/><circle cx="146" cy="84" r="3" fill="#BFD6CF" opacity="0.5"/><rect x="110" y="92" width="180" height="1" fill="#1F1E1C" opacity="0.06"/><rect x="122" y="104" width="156" height="40" rx="4" fill="#BFD3E6" opacity="0.25"/><rect x="122" y="152" width="74" height="60" rx="4" fill="#BFD6CF" opacity="0.2"/><rect x="204" y="152" width="74" height="60" rx="4" fill="#E7B9A8" opacity="0.2"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Four web projects across e-commerce, portfolio, B2B, and fintech",
      problem: "Four distinct web projects: Ambiente Gourmet (a home & lifestyle e-commerce brand) needed a full website redesign to improve conversion. Andrea Freydell's personal brand needed a portfolio site. Santa Cruz Berries needed a B2B landing page for premium agricultural products. Fincreamos (a fintech company) required a digital presence strategy from scratch.",
      shift: "Design and deliver websites tailored to each brand's audience and conversion goals — ranging from e-commerce storefronts to single-page lead generation to personal portfolio sites. Each required UX strategy, visual design, and optimization thinking.",
      system: "Led UX research and site architecture for each project. Designed wireframes and high-fidelity mockups. For Ambiente Gourmet: restructured the product catalog, navigation, and checkout flow for conversion. For Santa Cruz Berries: built a focused landing page with product hero, value propositions, and B2B inquiry form. For Fincreamos: developed the digital strategy alongside the site — brand positioning for web, content plan, and lead funnel architecture. For the personal site: designed a portfolio structure showcasing work across all three disciplines.",
      assets: "Each site launched with a clear conversion path and a visual identity aligned to its brand system. Ambiente Gourmet's redesign improved the browsing-to-purchase experience. The SCB landing page provided a professional B2B entry point. The fintech digital strategy gave Fincreamos a complete online presence roadmap.",
    },
  },
  {
    slug: "social-strategy",
    title: "Social Media Strategy",
    microLabel: "Social Systems",
    description: "Content architecture, ad systems, influencer programs, and story-driven campaigns. Strategy through execution.",
    pillar: "digital",
    featured: true,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ds2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e2ddd6"/><stop offset="100%" stop-color="#d8d5cf"/></linearGradient></defs><rect width="400" height="300" fill="url(#ds2)"/><rect x="55" y="68" width="110" height="142" rx="10" fill="#FBF8F1" opacity="0.65" transform="rotate(-3.5 110 139)"/><rect x="145" y="62" width="110" height="142" rx="10" fill="#FBF8F1" opacity="0.85"/><rect x="235" y="68" width="110" height="142" rx="10" fill="#FBF8F1" opacity="0.65" transform="rotate(3.5 290 139)"/><rect x="68" y="82" width="84" height="52" rx="5" fill="#BFD6CF" opacity="0.35" transform="rotate(-3.5 110 108)"/><rect x="158" y="76" width="84" height="52" rx="5" fill="#E7B9A8" opacity="0.35"/><rect x="248" y="82" width="84" height="52" rx="5" fill="#BFD3E6" opacity="0.35" transform="rotate(3.5 290 108)"/><rect x="158" y="140" width="62" height="3" rx="1" fill="#1F1E1C" opacity="0.12"/><rect x="158" y="148" width="46" height="3" rx="1" fill="#1F1E1C" opacity="0.08"/><circle cx="188" cy="240" r="3" fill="#1F1E1C" opacity="0.18"/><circle cx="200" cy="240" r="3" fill="#1F1E1C" opacity="0.5"/><circle cx="212" cy="240" r="3" fill="#1F1E1C" opacity="0.18"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Building a systematic social media machine from strategy through execution",
      problem: "A consumer brand needed a complete social media strategy — not just content production, but a systematic approach to organic growth, paid acquisition, and influencer partnerships. The existing social presence was inconsistent, lacked a content calendar, and had no attribution or performance tracking.",
      shift: "Build the social media machine from strategy through execution: content architecture, ad systems, influencer program design, and story-driven campaigns. Create a repeatable system, not a one-time content batch.",
      system: "Developed the content strategy — pillar topics, posting cadence, format mix (carousel, reels, stories, static), and brand voice guidelines. Designed and managed paid ad campaigns across Meta platforms — from audience targeting and creative production to budget allocation and performance optimization. Created the influencer program: selection criteria, outreach templates, deliverable contracts, and performance tracking. Produced campaign-specific content including styled photography, ad creative, and story sequences.",
      assets: "Social media transformed from a sporadic effort into a structured revenue channel. Content quality and consistency improved dramatically. The ad system provided a measurable acquisition funnel. The influencer program extended reach into new audiences with tracked ROI. The brand had a social machine it could operate independently.",
    },
  },
  {
    slug: "pr",
    title: "PR & Press",
    microLabel: "Communications",
    description: "Press strategy, media placement, and editorial storytelling. Building brand credibility through earned coverage.",
    pillar: "digital",
    featured: false,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ds3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ddd6cb"/><stop offset="100%" stop-color="#e8e3db"/></linearGradient></defs><rect width="400" height="300" fill="url(#ds3)"/><rect x="130" y="80" width="140" height="140" rx="4" fill="#FBF8F1" opacity="0.7"/><rect x="155" y="90" width="90" height="6" rx="2" fill="#1F1E1C" opacity="0.12"/><rect x="130" y="102" width="140" height="1" fill="#1F1E1C" opacity="0.08"/><rect x="140" y="112" width="56" height="3" rx="1" fill="#1F1E1C" opacity="0.1"/><rect x="140" y="120" width="56" height="3" rx="1" fill="#1F1E1C" opacity="0.07"/><rect x="140" y="128" width="50" height="3" rx="1" fill="#1F1E1C" opacity="0.06"/><rect x="140" y="140" width="56" height="40" rx="3" fill="#BFD6CF" opacity="0.25"/><rect x="206" y="112" width="52" height="68" rx="3" fill="#E7B9A8" opacity="0.2"/><rect x="206" y="188" width="52" height="3" rx="1" fill="#1F1E1C" opacity="0.08"/><rect x="206" y="196" width="46" height="3" rx="1" fill="#1F1E1C" opacity="0.06"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Earned media strategy for brand credibility and audience reach",
      problem: "A brand needed earned media coverage to build credibility and awareness beyond its owned channels. It had a compelling founder story and differentiated product, but no PR strategy, no press kit, and no media relationships.",
      shift: "Develop and execute a PR strategy — identify target publications, craft the narrative, build the press materials, and secure coverage that would reach the brand's ideal customer and wholesale buyer audience.",
      system: "Defined the PR narrative — the brand story angles most likely to resonate with editors (founder journey, artisanal process, Colombian heritage, design philosophy). Built a press kit with brand story, product sheets, high-resolution imagery, and key messaging. Identified and pitched target publications and digital media outlets. Managed press relationships and coordinated product seeding for editorial features.",
      assets: "Secured press coverage across relevant publications and digital outlets. Stories and features gave the brand third-party credibility that strengthened both DTC conversion and wholesale buyer confidence. Press materials became a reusable asset for ongoing media outreach.",
    },
  },

  // ========== PILLAR 4: SCALING WITH AI ==========
  {
    slug: "image-genie",
    title: "Sheet → Image Genie",
    microLabel: "AI Image Generation",
    description: "Workflow system that generates realistic product, UGC, and editorial images at scale from a spreadsheet queue — replacing traditional photoshoots.",
    pillar: "ai",
    featured: true,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ai1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d8d0e4"/><stop offset="100%" stop-color="#e4ded5"/></linearGradient></defs><rect width="400" height="300" fill="url(#ai1)"/><rect x="80" y="100" width="100" height="120" rx="4" fill="#FBF8F1" opacity="0.7"/><rect x="90" y="112" width="80" height="4" rx="1" fill="#1F1E1C" opacity="0.1"/><rect x="90" y="122" width="60" height="3" rx="1" fill="#1F1E1C" opacity="0.07"/><rect x="90" y="132" width="70" height="3" rx="1" fill="#1F1E1C" opacity="0.07"/><rect x="90" y="142" width="50" height="3" rx="1" fill="#1F1E1C" opacity="0.07"/><path d="M200 160 L220 140 L240 155 L260 120 L280 150 L280 200 L200 200 Z" fill="#BFD6CF" opacity="0.3"/><rect x="200" y="100" width="100" height="120" rx="6" fill="none" stroke="#B79B63" stroke-width="1.5" opacity="0.4"/><circle cx="230" cy="130" r="12" fill="#E7B9A8" opacity="0.3"/><path d="M180 150 L200 150" stroke="#B79B63" stroke-width="1.5" opacity="0.5" stroke-dasharray="4 3"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Replacing traditional photoshoots with AI-generated product imagery at 1000+ images per day",
      problem: "An e-commerce company was spending significant time and budget on product photography — coordinating photoshoots for every new SKU, lifestyle image, and UGC-style content piece. The turnaround was slow, the cost per image was high, and the volume of content needed for multi-channel retail far exceeded what traditional production could deliver.",
      shift: "Build a workflow system that could take structured prompts from a spreadsheet and generate highly realistic product, UGC, and editorial images at scale — effectively replacing the photoshoot pipeline with an AI-powered image factory.",
      system: "Designed a spreadsheet-based prompt queue where each row defined the product, scene, style, lighting, and composition. Built the pipeline connecting structured prompts to image generation models, with quality control checkpoints and batch processing logic. The system supported product-on-white, lifestyle, UGC-style, and editorial formats. Implemented review and approval workflows so the marketing team could iterate on outputs without technical involvement.",
      assets: "The system generates 1000+ images per day from the spreadsheet queue. Photoshoot costs dropped dramatically. Content production timelines collapsed from weeks to hours. The marketing team now operates an on-demand image pipeline that scales with catalog growth.",
    },
  },
  {
    slug: "product-data-genie",
    title: "Sheet → Product Data Genie",
    microLabel: "AI Catalog Automation",
    description: "Pipeline using image understanding models to generate complete product data — SEO descriptions, attributes, and brand taxonomies — directly from images.",
    pillar: "ai",
    featured: true,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ai2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d4d0e2"/><stop offset="100%" stop-color="#e2ddd6"/></linearGradient></defs><rect width="400" height="300" fill="url(#ai2)"/><rect x="100" y="90" width="80" height="80" rx="6" fill="#FBF8F1" opacity="0.6"/><circle cx="140" cy="120" r="18" fill="#BFD3E6" opacity="0.3"/><rect x="112" y="145" width="56" height="15" rx="3" fill="#E7B9A8" opacity="0.25"/><path d="M190 130 L210 130" stroke="#B79B63" stroke-width="1.5" opacity="0.5" stroke-dasharray="4 3"/><rect x="220" y="90" width="100" height="80" rx="4" fill="#FBF8F1" opacity="0.7"/><rect x="230" y="102" width="70" height="4" rx="1" fill="#1F1E1C" opacity="0.12"/><rect x="230" y="112" width="60" height="3" rx="1" fill="#1F1E1C" opacity="0.08"/><rect x="230" y="122" width="50" height="3" rx="1" fill="#1F1E1C" opacity="0.06"/><rect x="230" y="136" width="80" height="3" rx="1" fill="#BFD6CF" opacity="0.3"/><rect x="230" y="145" width="65" height="3" rx="1" fill="#BFD6CF" opacity="0.25"/><rect x="230" y="154" width="72" height="3" rx="1" fill="#BFD6CF" opacity="0.2"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Eliminating manual catalog writing with AI-powered image-to-data pipelines",
      problem: "An e-commerce company with thousands of SKUs was manually writing product descriptions, assigning attributes, and categorizing items into proprietary brand taxonomies. The process was slow, inconsistent, and couldn't scale with the speed of new product launches. Catalog quality suffered — missing descriptions, inconsistent formatting, and poor SEO coverage.",
      shift: "Build a pipeline that uses image understanding models to generate complete product data directly from product images — SEO-optimized descriptions, attributes, material details, and brand-specific taxonomy classifications — eliminating the manual catalog writing bottleneck.",
      system: "Designed a pipeline where product images are processed through vision-language models that extract visual features — material, color, style, construction details. These outputs feed into structured templates that generate SEO descriptions, attribute lists, and category assignments aligned with the brand's proprietary taxonomy. Built quality scoring and human review layers. The system handles batch processing of new catalog entries and can retroactively enrich existing product data.",
      assets: "Manual catalog writing was eliminated for new product launches. Product data quality and consistency improved across the entire catalog. SEO descriptions are now generated at scale with proper keyword coverage. The taxonomy classification that previously took days now happens automatically, keeping the catalog organized as it grows.",
    },
  },
  {
    slug: "ai-content-platform",
    title: "Internal AI Content Platform",
    microLabel: "AI Marketing Platform",
    description: "Internal tool for generating on-brand images, carousels, and campaign assets using structured prompts and competitor benchmarking.",
    pillar: "ai",
    featured: true,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ai3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d0d4e2"/><stop offset="100%" stop-color="#e4ded5"/></linearGradient></defs><rect width="400" height="300" fill="url(#ai3)"/><rect x="80" y="80" width="240" height="140" rx="8" fill="#FBF8F1" opacity="0.7"/><rect x="90" y="90" width="60" height="60" rx="4" fill="#BFD6CF" opacity="0.3"/><rect x="158" y="90" width="60" height="60" rx="4" fill="#E7B9A8" opacity="0.3"/><rect x="226" y="90" width="60" height="60" rx="4" fill="#BFD3E6" opacity="0.3"/><rect x="90" y="160" width="80" height="4" rx="1" fill="#1F1E1C" opacity="0.1"/><rect x="90" y="170" width="60" height="3" rx="1" fill="#1F1E1C" opacity="0.07"/><rect x="90" y="185" width="220" height="24" rx="4" fill="#B79B63" opacity="0.15"/><rect x="100" y="192" width="50" height="10" rx="3" fill="#B79B63" opacity="0.3"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "A marketing team's AI-powered creative engine for on-brand content at scale",
      problem: "A marketing team was producing images, carousels, and campaign assets manually — each piece requiring designer time, creative briefs, and multiple revision rounds. Content output couldn't keep up with channel demands across social media, ads, email, and e-commerce. Competitor brands were publishing faster and in higher volume.",
      shift: "Build an internal AI content generation platform that enables the marketing team to produce on-brand visual assets using structured prompts and competitor benchmarking — without needing a designer for every piece.",
      system: "Developed an internal platform with structured prompt templates for different content types: product images, social carousels, campaign banners, and ad creative. Integrated competitor benchmarking feeds so the team could reference market trends and competitor aesthetics when generating content. Built brand guardrails — style presets, color palettes, typography rules, and tone-of-voice templates — to ensure all AI-generated content stayed on-brand. Currently expanding the system to automate ad copy generation, brand-correct text placement on images, and AI video generation.",
      assets: "The marketing team now generates on-brand visual content at 10x the previous speed. Designer bottleneck eliminated for routine content production. Competitor benchmarking built into the workflow keeps creative output market-aware. The platform is expanding into ad copy, text-on-image automation, and video — becoming the team's central creative production engine.",
    },
  },
  {
    slug: "ecommerce-agents",
    title: "Self-Building Ecommerce Agents",
    microLabel: "AI Agent System",
    description: "AI agents that generate and deploy internal tools for an ecommerce company — from software specs to working applications for ads, SEO, content, and operations.",
    pillar: "ai",
    featured: true,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ai4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d2cfe0"/><stop offset="100%" stop-color="#e2ddd6"/></linearGradient></defs><rect width="400" height="300" fill="url(#ai4)"/><circle cx="200" cy="120" r="24" fill="#BFD6CF" opacity="0.4"/><circle cx="200" cy="120" r="12" fill="#FBF8F1" opacity="0.5"/><line x1="200" y1="144" x2="140" y2="190" stroke="#B79B63" stroke-width="1.2" opacity="0.4"/><line x1="200" y1="144" x2="200" y2="195" stroke="#B79B63" stroke-width="1.2" opacity="0.4"/><line x1="200" y1="144" x2="260" y2="190" stroke="#B79B63" stroke-width="1.2" opacity="0.4"/><rect x="118" y="190" width="44" height="30" rx="4" fill="#FBF8F1" opacity="0.6"/><rect x="126" y="198" width="28" height="3" rx="1" fill="#1F1E1C" opacity="0.1"/><rect x="126" y="206" width="20" height="3" rx="1" fill="#1F1E1C" opacity="0.07"/><rect x="178" y="195" width="44" height="30" rx="4" fill="#FBF8F1" opacity="0.6"/><rect x="186" y="203" width="28" height="3" rx="1" fill="#1F1E1C" opacity="0.1"/><rect x="186" y="211" width="20" height="3" rx="1" fill="#1F1E1C" opacity="0.07"/><rect x="238" y="190" width="44" height="30" rx="4" fill="#FBF8F1" opacity="0.6"/><rect x="246" y="198" width="28" height="3" rx="1" fill="#1F1E1C" opacity="0.1"/><rect x="246" y="206" width="20" height="3" rx="1" fill="#1F1E1C" opacity="0.07"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "An experiment in AI agents that plan, spec, and build their own internal tools",
      problem: "An ecommerce company needed dozens of internal tools — for ad management, SEO optimization, content production, catalog operations, and more — but didn't have the engineering bandwidth to build them. Each tool request sat in a backlog, and teams relied on manual workarounds and spreadsheets in the meantime.",
      shift: "Experiment with building an AI agent system that could generate and deploy new internal tools autonomously — using LLMs for planning and specification, and Lovable for execution. Instead of a developer building each tool, an AI agent would plan the software, write the spec, and build a working application.",
      system: "Designed an agent architecture using planning LLMs (Opus/GPT) that analyze business requirements and generate detailed software specifications — feature lists, data models, user flows, and UI requirements. These specs are then fed to Lovable, which builds the actual working applications. The system covers tools for advertising, SEO, content management, catalog operations, and internal workflows. Each generated tool goes through a review and iteration cycle before deployment.",
      assets: "The system has produced 100+ build specifications and multiple working internal tools now in active use. Tool development that previously required weeks of engineering time now happens in hours. The experiment proved that AI agent systems can meaningfully accelerate internal tooling — and the company continues to expand the scope of what the agents build.",
    },
  },
];
export const getFeaturedProjects = () => {
  const featured = projects.filter((p) => p.featured);
  const pillarOrder = ["ai", "consulting", "creative", "digital"];
  return featured.sort((a, b) => pillarOrder.indexOf(a.pillar) - pillarOrder.indexOf(b.pillar));
};

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const getProjectsByPillar = (pillar: string) =>
  pillar === "all" ? projects : projects.filter((p) => p.pillar === pillar);

export const getAdjacentProjects = (slug: string) => {
  const idx = projects.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? projects[idx - 1] : projects[projects.length - 1],
    next: idx < projects.length - 1 ? projects[idx + 1] : projects[0],
  };
};
