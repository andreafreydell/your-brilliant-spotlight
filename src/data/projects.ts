import type { Pillar } from "@/components/PillarTag";

export interface Project {
  slug: string;
  title: string;
  microLabel: string;
  description: string;
  pillar: Pillar;
  featured: boolean;
  caseStudy: {
    heroSubtitle: string;
    problem: string;
    shift: string;
    system: string;
    assets: string;
  };
}

export const projects: Project[] = [
  {
    slug: "maison-lumiere",
    title: "Maison Lumière",
    microLabel: "Fragrance · Brand World",
    description: "A full brand identity and go-to-market strategy for a luxury niche fragrance house entering the European market.",
    pillar: "creative",
    featured: true,
    caseStudy: {
      heroSubtitle: "Building a luxury fragrance brand from the ground up",
      problem: "Maison Lumière had exquisite products but no cohesive brand story. They were invisible in a market dominated by heritage houses with centuries of narrative equity.",
      shift: "We repositioned the brand around the concept of 'emotional architecture' — each scent as a space you inhabit, not just a fragrance you wear.",
      system: "Developed a complete brand system: visual identity, packaging architecture, retail experience guidelines, and a content strategy built around sensory storytelling.",
      assets: "Brand book, packaging suite, retail concept renders, social media templates, launch campaign creative, and a brand film treatment.",
    },
  },
  {
    slug: "terra-collective",
    title: "Terra Collective",
    microLabel: "Agriculture · Strategy",
    description: "Operational restructuring and brand positioning for a regenerative agriculture cooperative.",
    pillar: "consulting",
    featured: true,
    caseStudy: {
      heroSubtitle: "Reimagining how a cooperative communicates its mission",
      problem: "A network of 40+ farms lacked unified positioning. Each member told a different story, diluting their collective market power.",
      shift: "Created a shared narrative framework: 'From Ground Truth' — positioning the cooperative as the authority on regenerative practices.",
      system: "Built a tiered membership communication system, unified brand guidelines, and a quarterly content calendar tied to seasonal rhythms.",
      assets: "Brand guidelines, member toolkit, quarterly report templates, website wireframes, and investor pitch materials.",
    },
  },
  {
    slug: "aurelie-jewels",
    title: "Aurélie Jewels",
    microLabel: "Jewelry · Digital",
    description: "E-commerce strategy and digital brand experience for an artisan jewelry brand scaling internationally.",
    pillar: "digital",
    featured: true,
    caseStudy: {
      heroSubtitle: "Taking artisan craftsmanship into the digital realm",
      problem: "Beautiful product, terrible digital presence. The website conveyed none of the care and artistry that defined the physical experience.",
      shift: "Reframed the digital experience as an extension of the atelier — every interaction should feel handcrafted.",
      system: "Designed a digital experience architecture: storytelling product pages, a 'craft journal' content hub, and a personalization engine for gift-giving.",
      assets: "UX wireframes, UI design system, content strategy, email sequences, and a social media visual system.",
    },
  },
  {
    slug: "finleap-rebrand",
    title: "Finleap Rebrand",
    microLabel: "Fintech · Brand Identity",
    description: "Complete visual rebrand and positioning strategy for a fintech startup moving from B2B to B2B2C.",
    pillar: "creative",
    featured: true,
    caseStudy: {
      heroSubtitle: "Evolving a fintech brand for a new audience",
      problem: "The existing brand was built for investor decks, not consumer trust. As they pivoted to B2B2C, everything needed to feel more human.",
      shift: "Moved from 'tech-first' to 'trust-first' positioning, making financial infrastructure feel accessible and warm.",
      system: "New visual identity system with flexible color palettes for different product lines, motion design language, and tone of voice guidelines.",
      assets: "Logo suite, color system, typography scale, icon set, motion principles, brand voice guide, and launch campaign.",
    },
  },
  {
    slug: "haven-home",
    title: "Haven Home",
    microLabel: "Home & Lifestyle · Strategy",
    description: "Go-to-market strategy and brand architecture for a sustainable home goods marketplace.",
    pillar: "consulting",
    featured: true,
    caseStudy: {
      heroSubtitle: "Launching a marketplace that stands for something",
      problem: "Another 'sustainable' marketplace in a crowded space. No clear differentiator beyond good intentions.",
      shift: "Positioned Haven as a 'curated home studio' — not a marketplace, but a trusted editor of beautiful, responsible design.",
      system: "Brand architecture separating Haven (editorial voice) from Haven Market (commerce), with distinct but connected visual systems.",
      assets: "Brand strategy deck, naming architecture, visual identity, website UX, buyer personas, and launch roadmap.",
    },
  },
  {
    slug: "mode-atelier",
    title: "Mode Atelier",
    microLabel: "Fashion · Digital Strategy",
    description: "Digital transformation roadmap for a heritage fashion atelier entering direct-to-consumer channels.",
    pillar: "digital",
    featured: true,
    caseStudy: {
      heroSubtitle: "Bridging heritage craft with modern commerce",
      problem: "A 30-year-old atelier with zero digital presence. Their clients were aging and new generations didn't know they existed.",
      shift: "Designed a 'digital atelier' concept — bringing the appointment-based, intimate experience online without losing its exclusivity.",
      system: "Virtual appointment system, curated digital lookbooks, CRM integration, and a phased social media strategy.",
      assets: "Digital strategy roadmap, platform specifications, content calendar, CRM workflows, and training materials.",
    },
  },
  {
    slug: "bloom-botanicals",
    title: "Bloom Botanicals",
    microLabel: "Beauty · Brand World",
    description: "End-to-end brand creation for a plant-based skincare line targeting the wellness-conscious consumer.",
    pillar: "creative",
    featured: false,
    caseStudy: {
      heroSubtitle: "Creating a brand that grows with its community",
      problem: "The founders had formulations but no brand. In a saturated clean beauty market, they needed a distinct point of view.",
      shift: "Built the brand around 'botanical intelligence' — the idea that plants have been solving problems for millennia.",
      system: "Full brand identity, packaging system designed for refill, educational content framework, and retail partnership strategy.",
      assets: "Brand identity suite, packaging designs, website design, social templates, and retail pitch deck.",
    },
  },
  {
    slug: "atlas-ventures",
    title: "Atlas Ventures",
    microLabel: "Fintech · Consulting",
    description: "Strategic advisory for a venture fund's portfolio brand consolidation across three continents.",
    pillar: "consulting",
    featured: false,
    caseStudy: {
      heroSubtitle: "Unifying a global portfolio under one strategic vision",
      problem: "12 portfolio companies, three continents, zero brand cohesion. Each company operated in isolation, missing cross-pollination opportunities.",
      shift: "Created a 'portfolio brand architecture' that gave each company autonomy while building collective brand equity for the fund.",
      system: "Portfolio brand guidelines, shared resource library, quarterly brand health metrics, and cross-portfolio collaboration frameworks.",
      assets: "Brand architecture document, portfolio guidelines, metrics dashboard specs, and collaboration playbook.",
    },
  },
  {
    slug: "sable-studio",
    title: "Sable Studio",
    microLabel: "Fashion · Creative Direction",
    description: "Creative direction for a contemporary womenswear label's seasonal campaign and brand refresh.",
    pillar: "creative",
    featured: false,
    caseStudy: {
      heroSubtitle: "Redefining a fashion brand's creative voice",
      problem: "The label had lost its creative direction after rapid growth. Collections felt disconnected from the founding vision.",
      shift: "Returned to the founder's original inspiration — architecture and structure — and built a creative framework around 'constructed femininity.'",
      system: "Seasonal creative direction framework, shoot guidelines, styling codes, and a visual merchandising system.",
      assets: "Campaign creative, lookbook, brand refresh guidelines, VM specifications, and social content system.",
    },
  },
  {
    slug: "verde-foods",
    title: "Verde Foods",
    microLabel: "Agriculture · Digital",
    description: "Digital platform strategy for a farm-to-table food brand building a direct consumer channel.",
    pillar: "digital",
    featured: false,
    caseStudy: {
      heroSubtitle: "Connecting farms directly to urban tables",
      problem: "Great product, complex supply chain, and consumers who didn't understand why they should pay premium for direct-from-farm produce.",
      shift: "Built the narrative around 'food with a face' — every product connected to a specific farmer, field, and story.",
      system: "E-commerce platform with farm profiles, seasonal subscription model, content hub featuring farmer stories, and logistics integration.",
      assets: "Platform wireframes, subscription model, content strategy, farmer onboarding kit, and marketing launch plan.",
    },
  },
  {
    slug: "lux-hospitality",
    title: "Lux Hospitality Group",
    microLabel: "Hospitality · Consulting",
    description: "Brand portfolio strategy for a boutique hotel group expanding across Mediterranean markets.",
    pillar: "consulting",
    featured: false,
    caseStudy: {
      heroSubtitle: "Crafting a hotel group that feels local everywhere",
      problem: "Five properties, five completely different brands. No guest loyalty transfer, no economies of scale in marketing.",
      shift: "Developed a 'locally rooted, globally connected' framework — each property maintains its unique character under a subtle shared identity.",
      system: "Master brand architecture, property-level brand guidelines, loyalty program design, and centralized marketing operations framework.",
      assets: "Portfolio brand strategy, individual property guidelines, loyalty program concept, and marketing operations manual.",
    },
  },
  {
    slug: "cipher-app",
    title: "Cipher",
    microLabel: "Fintech · Product Design",
    description: "Product design and brand identity for a privacy-first personal finance management application.",
    pillar: "digital",
    featured: false,
    caseStudy: {
      heroSubtitle: "Making privacy the product feature",
      problem: "Users wanted financial clarity but didn't trust apps with their data. Existing solutions traded privacy for convenience.",
      shift: "Positioned privacy not as a limitation but as the core feature — 'Your money, your eyes only.'",
      system: "Product design system, onboarding flow, data visualization framework, and a trust-building content strategy.",
      assets: "UI design system, product prototype, brand identity, marketing website, and launch campaign.",
    },
  },
  {
    slug: "noma-fragrance",
    title: "Nōma Fragrance",
    microLabel: "Fragrance · Creative Direction",
    description: "Creative direction and retail concept for a Japanese-inspired fragrance brand launching in North America.",
    pillar: "creative",
    featured: false,
    caseStudy: {
      heroSubtitle: "Translating Japanese aesthetics for a Western audience",
      problem: "The brand's Japanese minimalism was being misread as 'basic' by North American consumers accustomed to maximalist luxury.",
      shift: "Reframed minimalism as 'intentional luxury' — every absence is a deliberate choice, every detail carries meaning.",
      system: "Retail experience design, packaging redesign for the NA market, cultural translation guidelines, and influencer strategy.",
      assets: "Retail concept, packaging suite, cultural playbook, influencer brief, and launch event concept.",
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
