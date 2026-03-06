import type { Pillar } from "@/components/PillarTag";
import { ReactNode } from "react";

export interface Project {
  slug: string;
  title: string;
  microLabel: string;
  description: string;
  pillar: Pillar;
  featured: boolean;
  illustration: string; // SVG string
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
      heroSubtitle: "Capital structure design for growth-stage companies",
      problem: "The company needed to raise a significant round but had no institutional-grade materials, unclear capital structure, and no fundraising narrative.",
      shift: "Reframed the fundraising story from 'we need money' to 'here's the system that makes your investment compound.' Built investor-grade financial projections and a narrative deck.",
      system: "Designed a complete fundraising system: financial model, investor deck, term sheet analysis framework, and a staged outreach strategy targeting the right investor profiles.",
      assets: "Financial model, investor pitch deck, term sheet comparison matrix, investor CRM template, and due diligence data room structure.",
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
      heroSubtitle: "Decision-grade financial models for scaling businesses",
      problem: "The business was making growth decisions based on gut feel. No scenario planning, no unit economics clarity, and investor conversations kept stalling on the numbers.",
      shift: "Built models that don't just project — they help you decide. Every assumption is toggleable, every scenario tells a story.",
      system: "Three-statement financial model with scenario analysis, unit economics dashboard, and a quarterly re-forecasting framework.",
      assets: "Financial model (Excel), unit economics calculator, board reporting template, and investor-ready projections deck.",
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
      heroSubtitle: "Data-driven frameworks for market entry and competitive positioning",
      problem: "Entering a new market with no structured intelligence. Pricing was guesswork, competitor positioning was unclear, and the team had no shared framework for evaluating opportunities.",
      shift: "Built a living market intelligence system — not a one-time report, but a framework the team can update and use for ongoing decision-making.",
      system: "Competitive landscape map, pricing architecture analysis, customer segmentation framework, and a market entry scoring model.",
      assets: "Market analysis report, competitor database, pricing strategy document, and opportunity scoring template.",
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
      heroSubtitle: "Building distribution networks that scale",
      problem: "The brand was selling direct but needed wholesale channels to scale. No distributor strategy, no tiered pricing, no territory plan.",
      shift: "Designed distribution as a brand experience — every channel touchpoint reinforces the brand, not dilutes it.",
      system: "Channel architecture framework, tiered pricing model, territory mapping, distributor onboarding kit, and sell-through tracking system.",
      assets: "Distribution strategy deck, pricing matrix, territory map, distributor agreement template, and sell-through dashboard.",
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
      heroSubtitle: "Training systems that turn sales teams into brand ambassadors",
      problem: "Sales teams knew the product but couldn't sell the story. Conversion rates were low because reps defaulted to feature-listing instead of value-selling.",
      shift: "Redesigned training around 'selling the system, not the spec' — teaching reps to diagnose client needs and prescribe solutions.",
      system: "Modular training program with product knowledge base, objection handling scripts, role-play scenarios, and a certification framework.",
      assets: "Training manual, video modules, objection handling guide, role-play scenario cards, and certification checklist.",
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
      heroSubtitle: "Building brand systems from the ground up",
      problem: "The brand existed in fragments — a logo here, colors there, no cohesion. Every touchpoint told a different story.",
      shift: "Approached identity as architecture, not decoration. Every visual element serves a structural purpose in the brand system.",
      system: "Complete brand identity system: naming framework, mark design, color architecture, typography scale, photography guidelines, and application rules.",
      assets: "Brand book, logo suite, color system, typography guide, stationery suite, social media templates, and brand application examples.",
    },
  },
  {
    slug: "product-design",
    title: "Product Design",
    microLabel: "Product Design",
    description: "Physical product design across industries — jewelry collections, fashion lines, agricultural packaging, and fintech interfaces.",
    pillar: "creative",
    featured: true,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bc2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d5ddd4"/><stop offset="100%" stop-color="#e2ddd6"/></linearGradient></defs><rect width="400" height="300" fill="url(#bc2)"/><rect x="0" y="212" width="400" height="88" fill="#dbd5cb" opacity="0.4"/><rect x="95" y="210" width="210" height="4" rx="1" fill="#B79B63" opacity="0.4"/><ellipse cx="155" cy="180" rx="20" ry="20" fill="none" stroke="#B79B63" stroke-width="1.5" opacity="0.4"/><ellipse cx="155" cy="180" rx="12" ry="12" fill="#E7B9A8" opacity="0.25"/><rect x="195" y="130" width="30" height="78" rx="5" fill="#BFD6CF" opacity="0.45"/><rect x="203" y="120" width="14" height="12" rx="2" fill="#BFD6CF" opacity="0.35"/><circle cx="272" cy="185" r="8" fill="#6E8F8B" opacity="0.4"/><circle cx="260" cy="192" r="7" fill="#6E8F8B" opacity="0.35"/><circle cx="280" cy="195" r="6" fill="#6E8F8B" opacity="0.3"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Designing physical products that embody brand strategy",
      problem: "Products were being designed in isolation from the brand. Collections lacked cohesion and didn't communicate the brand's positioning.",
      shift: "Integrated product design into the brand system — every product decision reinforces the brand narrative.",
      system: "Product design framework linking brand strategy to material selection, form factor, and packaging. Cross-industry methodology adapted per sector.",
      assets: "Product design specs, material palettes, prototype documentation, production guidelines, and collection architecture.",
    },
  },
  {
    slug: "packaging",
    title: "Packaging & POP",
    microLabel: "Packaging & Display",
    description: "Packaging systems, retail display design, and trade fair environments. From shelf presence to booth architecture at Colombiamoda.",
    pillar: "creative",
    featured: false,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bc3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e6ddd4"/><stop offset="100%" stop-color="#ece5db"/></linearGradient></defs><rect width="400" height="300" fill="url(#bc3)"/><rect x="155" y="90" width="90" height="110" rx="4" fill="#FBF8F1" opacity="0.7"/><rect x="160" y="95" width="80" height="15" rx="2" fill="#BFD6CF" opacity="0.3"/><rect x="172" y="130" width="56" height="20" rx="3" fill="#E7B9A8" opacity="0.3"/><rect x="180" y="136" width="40" height="2.5" rx="1" fill="#1F1E1C" opacity="0.1"/><rect x="184" y="142" width="32" height="2" rx="1" fill="#1F1E1C" opacity="0.07"/><rect x="135" y="200" width="130" height="5" rx="2" fill="#B79B63" opacity="0.4"/><rect x="160" y="205" width="80" height="30" rx="3" fill="#BFD3E6" opacity="0.2"/><rect x="100" y="70" width="200" height="3" rx="1" fill="#1F1E1C" opacity="0.05"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Packaging and retail environments that sell the brand story",
      problem: "Beautiful products in forgettable packaging. Retail presence was an afterthought, and trade fair booths were generic rental setups.",
      shift: "Treated packaging as the first brand experience and retail display as spatial storytelling.",
      system: "Packaging system with tiered formats, retail display design language, and modular trade fair booth architecture.",
      assets: "Packaging designs, display specifications, booth renders, production files, and retail merchandising guidelines.",
    },
  },
  {
    slug: "photography",
    title: "Photography & Production",
    microLabel: "Production",
    description: "Art direction for product and model photography. Shoot production, editing, and post-production across campaign and catalog contexts.",
    pillar: "creative",
    featured: false,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bc4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d8d5cf"/><stop offset="100%" stop-color="#e2ddd6"/></linearGradient></defs><rect width="400" height="300" fill="url(#bc4)"/><rect x="145" y="105" width="110" height="80" rx="8" fill="#FBF8F1" opacity="0.65"/><circle cx="200" cy="145" r="25" fill="none" stroke="#6E8F8B" stroke-width="1.5" opacity="0.4"/><circle cx="200" cy="145" r="15" fill="#BFD3E6" opacity="0.25"/><rect x="170" y="100" width="30" height="10" rx="4" fill="#FBF8F1" opacity="0.5"/><rect x="115" y="205" width="52" height="38" rx="4" fill="#BFD6CF" opacity="0.3" transform="rotate(-5 141 224)"/><rect x="175" y="202" width="52" height="38" rx="4" fill="#E7B9A8" opacity="0.3"/><rect x="235" y="205" width="52" height="38" rx="4" fill="#BFD3E6" opacity="0.3" transform="rotate(5 261 224)"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Art direction that makes products irresistible",
      problem: "Product photography was inconsistent — different styles, different quality, no visual throughline across campaigns and catalogs.",
      shift: "Created a visual language system for photography that adapts across contexts while maintaining brand coherence.",
      system: "Photography direction framework: mood references, lighting standards, styling codes, shot lists, and post-production specifications.",
      assets: "Art direction guides, shot lists, mood boards, editing presets, and campaign/catalog photography suites.",
    },
  },
  {
    slug: "presentations",
    title: "Corporate Presentations",
    microLabel: "Presentation Design",
    description: "Investor decks, board presentations, and sales materials designed for clarity, persuasion, and visual polish.",
    pillar: "creative",
    featured: false,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bc5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ddd8cf"/><stop offset="100%" stop-color="#e8e3db"/></linearGradient></defs><rect width="400" height="300" fill="url(#bc5)"/><rect x="135" y="115" width="130" height="82" rx="6" fill="#FBF8F1" opacity="0.5" transform="rotate(3 200 156)"/><rect x="130" y="108" width="140" height="88" rx="6" fill="#FBF8F1" opacity="0.7"/><rect x="142" y="120" width="60" height="4" rx="2" fill="#1F1E1C" opacity="0.12"/><rect x="142" y="130" width="80" height="3" rx="1" fill="#1F1E1C" opacity="0.08"/><rect x="142" y="145" width="50" height="35" rx="4" fill="#BFD6CF" opacity="0.3"/><rect x="200" y="145" width="58" height="35" rx="4" fill="#E7B9A8" opacity="0.25"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Presentations that close deals and align teams",
      problem: "Presentations were text-heavy, visually inconsistent, and failed to persuade. Investor meetings were being lost to poor communication design.",
      shift: "Redesigned presentations as narrative instruments — every slide advances a single idea with visual clarity.",
      system: "Presentation design system: master templates, data visualization standards, narrative structure frameworks, and brand-compliant component library.",
      assets: "Presentation templates, data viz library, narrative frameworks, and custom icon sets.",
    },
  },

  // ========== PILLAR 3: DIGITAL STRATEGY ==========
  {
    slug: "web-design",
    title: "Web Design",
    microLabel: "Web & Optimization",
    description: "E-commerce and brand websites — from wireframe to launch. UX strategy, landing pages, and conversion optimization.",
    pillar: "digital",
    featured: true,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ds1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c2d1e0"/><stop offset="100%" stop-color="#e4ded5"/></linearGradient></defs><rect width="400" height="300" fill="url(#ds1)"/><rect x="110" y="72" width="180" height="156" rx="8" fill="#FBF8F1" opacity="0.75"/><circle cx="126" cy="84" r="3" fill="#E7B9A8" opacity="0.5"/><circle cx="136" cy="84" r="3" fill="#B79B63" opacity="0.4"/><circle cx="146" cy="84" r="3" fill="#BFD6CF" opacity="0.5"/><rect x="110" y="92" width="180" height="1" fill="#1F1E1C" opacity="0.06"/><rect x="122" y="104" width="156" height="40" rx="4" fill="#BFD3E6" opacity="0.25"/><rect x="122" y="152" width="74" height="60" rx="4" fill="#BFD6CF" opacity="0.2"/><rect x="204" y="152" width="74" height="60" rx="4" fill="#E7B9A8" opacity="0.2"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Web experiences that convert visitors into believers",
      problem: "The website was a brochure, not a sales tool. No conversion strategy, poor mobile experience, and content that didn't match the brand's actual positioning.",
      shift: "Redesigned the web experience as a conversion system — every page has a job, every element earns its place.",
      system: "UX strategy, wireframe architecture, responsive design system, conversion funnel mapping, and A/B testing framework.",
      assets: "Website wireframes, UI design system, development specs, analytics setup, and conversion tracking dashboard.",
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
      heroSubtitle: "Social media systems that build audiences and drive revenue",
      problem: "Posting without strategy. No content architecture, no ad system, and influencer partnerships were ad hoc with no measurement framework.",
      shift: "Built social media as a system, not a channel — with content pillars, campaign logic, and measurable conversion paths.",
      system: "Content architecture with pillars and formats, ad campaign framework, influencer program with tiered partnerships, and analytics reporting system.",
      assets: "Content calendar, ad creative templates, influencer brief templates, analytics dashboard, and campaign playbooks.",
    },
  },
  {
    slug: "pr",
    title: "PR & Press",
    microLabel: "Communications",
    description: "Press strategy, media placement, and editorial storytelling. Building brand narrative through earned coverage.",
    pillar: "digital",
    featured: false,
    illustration: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ds3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ddd6cb"/><stop offset="100%" stop-color="#e8e3db"/></linearGradient></defs><rect width="400" height="300" fill="url(#ds3)"/><rect x="130" y="80" width="140" height="140" rx="4" fill="#FBF8F1" opacity="0.7"/><rect x="155" y="90" width="90" height="6" rx="2" fill="#1F1E1C" opacity="0.12"/><rect x="130" y="102" width="140" height="1" fill="#1F1E1C" opacity="0.08"/><rect x="140" y="112" width="56" height="3" rx="1" fill="#1F1E1C" opacity="0.1"/><rect x="140" y="120" width="56" height="3" rx="1" fill="#1F1E1C" opacity="0.07"/><rect x="140" y="128" width="50" height="3" rx="1" fill="#1F1E1C" opacity="0.06"/><rect x="140" y="140" width="56" height="40" rx="3" fill="#BFD6CF" opacity="0.25"/><rect x="206" y="112" width="52" height="68" rx="3" fill="#E7B9A8" opacity="0.2"/><rect x="206" y="188" width="52" height="3" rx="1" fill="#1F1E1C" opacity="0.08"/><rect x="206" y="196" width="46" height="3" rx="1" fill="#1F1E1C" opacity="0.06"/><rect x="352" y="260" width="16" height="16" rx="3" fill="#C54A3D" opacity="0.9"/></svg>`,
    caseStudy: {
      heroSubtitle: "Earned media strategies that build credibility and reach",
      problem: "No press strategy. Media outreach was reactive, messaging was inconsistent, and the brand had no editorial narrative.",
      shift: "Built PR as storytelling infrastructure — not press releases, but narratives placed in the right publications at the right time.",
      system: "Press strategy framework, media list architecture, pitch templates, editorial calendar, and coverage tracking system.",
      assets: "Media strategy deck, journalist database, pitch templates, press kit, and coverage report template.",
    },
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

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
