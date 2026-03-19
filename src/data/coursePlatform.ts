export type CourseTrack = "foundations" | "advanced";

export interface CourseModule {
  title: string;
  summary: string;
  output: string;
}

export interface Course {
  slug: string;
  title: string;
  track: CourseTrack;
  hook: string;
  summary: string;
  audience: string;
  priceLabel: string;
  limitedTimeNote?: string;
  prerequisites: string[];
  tools: string[];
  outputs: string[];
  modules: CourseModule[];
}

export interface Offer {
  slug: string;
  label: string;
  title: string;
  price: string;
  description: string;
  highlights: string[];
}

const CLAUDE_CODE_LABEL = "Claude Code + OpenAI Codex (Free Module)";
const COWORK_LABEL = "Claude Cowork (Now Featuring Free Codex Upgrade)";
const LIMITED_TIME_NOTE = "Currently free for a limited time.";

export const offers: Offer[] = [
  {
    slug: "custom-builds",
    label: "Recommended",
    title: "Work With Me",
    price: "Free intro call",
    description: "15 minutes to map your stack, find the bottleneck, and plan what to build next.",
    highlights: [
      "Workflow and stack diagnosis",
      "Scoped build plan",
      "Ongoing support options",
    ],
  },
  {
    slug: "limited-time",
    label: "Free",
    title: "Steal My Systems",
    price: "Available now",
    description: "Two foundation systems, free — no strings.",
    highlights: [
      "Tech Stack Overview",
      "Image Backwards Engineering",
    ],
  },
  {
    slug: "membership",
    label: "Self-Paced",
    title: "Copy My Workflows",
    price: "$49/mo",
    description: "Every system I build, current and future.",
    highlights: [
      "Full system library",
      "New workflows monthly",
    ],
  },
];

export const platformStats = [
  { value: "11", label: "workflow systems" },
  { value: "2", label: "free foundation systems to start" },
  { value: "1+", label: "new system drop each month" },
  { value: "2", label: "tracks: foundations and advanced" },
];

export const trustBullets = [
  "Start with two free foundation systems — no commitment",
  "Built for non-technical founders and lean teams",
  "Copy My Workflows includes the full library plus future releases",
  "Free call available when the systems aren't the right fit",
];

export const homeFaqs = [
  {
    question: "Where should I start if I am new to this?",
    answer:
      "Start with The Tech Stack Overview, then take Image Backwards Engineering. Both are currently free for a limited time and give you the clearest entry point into the rest of the library.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. The courses are designed for non-technical founders who want to understand the stack, direct better builds, and make smarter implementation decisions.",
  },
  {
    question: "Can I buy one course or should I join membership?",
    answer:
      "Buy one course if you have a specific bottleneck. Join membership if you want the full library, future releases, and the most leverage over time.",
  },
  {
    question: "How do I get access?",
    answer:
      "Use the request-access button on any course or book the free consultation if you want help choosing the right path first.",
  },
];

export const courses: Course[] = [
  {
    slug: "tech-stack-overview",
    title: "The Tech Stack Overview",
    track: "foundations",
    hook: "Understand which tool does what so you stop stacking software on top of a messy workflow.",
    summary:
      `A clean map of how Lovable, ${CLAUDE_CODE_LABEL}, ${COWORK_LABEL}, GitHub, Notion, Sheets, and Shopify can work together for a founder-led business.`,
    audience: "Non-technical founders who need clarity before they start building.",
    priceLabel: "Currently Free",
    limitedTimeNote: LIMITED_TIME_NOTE,
    prerequisites: [],
    tools: ["Lovable", CLAUDE_CODE_LABEL, COWORK_LABEL, "GitHub", "Notion", "Shopify"],
    outputs: [
      "A personal stack map",
      "A tool-decision framework",
      "A clearer order of implementation",
    ],
    modules: [
      {
        title: "The Stack at a Glance",
        summary: "Map each tool to its actual role and remove overlap.",
        output: "A one-page architecture view.",
      },
      {
        title: "App Layer vs Operating Layer",
        summary: "Learn what belongs in Lovable, GitHub, Notion, and commerce systems.",
        output: "A cleaner system boundary map.",
      },
      {
        title: "Founders' Most Common Stack Mistakes",
        summary: "Avoid overbuilding, duplicate data, and bad tool choices.",
        output: "A pre-build checklist.",
      },
    ],
  },
  {
    slug: "image-backwards-engineering",
    title: "Image Backwards Engineering",
    track: "foundations",
    hook: "Reverse-engineer strong visuals and the system behind them so generation becomes more controlled and more on-brand.",
    summary:
      "A practical method for analyzing reference images, tracing what makes them work, and turning that logic into repeatable direction for AI-assisted image generation.",
    audience: "Founders and creative operators who want better visual output without prompt guessing.",
    priceLabel: "Currently Free",
    limitedTimeNote: LIMITED_TIME_NOTE,
    prerequisites: [],
    tools: ["Image models", "Reference boards", "Notion or Sheets"],
    outputs: [
      "An image analysis checklist",
      "A reverse-engineering framework",
      "A prompt variable library",
      "A tighter brand image guardrail set",
    ],
    modules: [
      {
        title: "What Makes an Image Work",
        summary: "Analyze composition, lighting, styling, and mood with intention.",
        output: "A repeatable reference-analysis sheet.",
      },
      {
        title: "Reverse-Engineering Strong Outputs",
        summary: "Separate the visual result from the decisions and workflow that created it.",
        output: "A visual deconstruction framework.",
      },
      {
        title: "Turning References Into Prompt Variables",
        summary: "Separate style, subject, scene, and brand constraints.",
        output: "Reusable prompt components.",
      },
      {
        title: "Adaptation and Controlled Variation",
        summary: "Generate useful variation without losing the signal that made the original strong.",
        output: "A structured variation and adaptation matrix.",
      },
    ],
  },
  {
    slug: "key-business-files",
    title: "Key Business Files",
    track: "foundations",
    hook: "Create the operating files that make every downstream workflow cleaner and more useful.",
    summary:
      "A course about the core documents, databases, references, and naming systems that AI workflows need in order to perform well.",
    audience: "Founders whose tools are ahead of their internal structure.",
    priceLabel: "$297",
    prerequisites: [],
    tools: ["Notion", "Sheets", "Drive or Dropbox"],
    outputs: [
      "Brand files",
      "Product and audience source files",
      "Content and asset organization templates",
    ],
    modules: [
      {
        title: "Brand and Offer Files",
        summary: "Clarify voice, positioning, offers, and visual cues.",
        output: "A brand operating document.",
      },
      {
        title: "Audience and Product Structure",
        summary: "Organize the information workflows need to generate strong output.",
        output: "Structured customer and product files.",
      },
      {
        title: "Workflow Brief Templates",
        summary: "Create clearer instructions and reduce ambiguity before asking AI to act.",
        output: "Reusable briefing templates.",
      },
    ],
  },
  {
    slug: "lovable-crash-course",
    title: "Lovable Crash Course",
    track: "foundations",
    hook: "Use Lovable as a founder tool for building interfaces and workflow touchpoints without turning the build into a mess.",
    summary:
      "A practical guide to scoping, prompting, connecting, and iterating Lovable builds in a way that fits real business operations.",
    audience: "Non-technical builders who want a faster route to usable interfaces.",
    priceLabel: "$297",
    prerequisites: ["The Tech Stack Overview"],
    tools: ["Lovable", "Supabase or Sheets", "GitHub"],
    outputs: [
      "A scoped build brief",
      "A simple prototype",
      "A better launch checklist",
    ],
    modules: [
      {
        title: "Scoping the Build",
        summary: "Decide what the first version should do and what should stay out.",
        output: "A focused feature map.",
      },
      {
        title: "Connecting Data",
        summary: "Choose the simplest working data layer for the use case.",
        output: "A connected prototype.",
      },
      {
        title: "Iterating With Control",
        summary: "Improve the build without losing the logic underneath it.",
        output: "A cleaner app revision flow.",
      },
    ],
  },
  {
    slug: "github-claude-workflow",
    title: `GitHub, ${CLAUDE_CODE_LABEL}, and ${COWORK_LABEL} Crash Course`,
    track: "foundations",
    hook: "Create a safer operating rhythm for AI-assisted builds instead of improvising every request from scratch.",
    summary:
      `A founder-friendly workflow for version control, implementation requests, documentation, and structured handoffs across ${CLAUDE_CODE_LABEL} and ${COWORK_LABEL}.`,
    audience: "Founders who are building with AI but need more control and less chaos.",
    priceLabel: "$297",
    prerequisites: ["The Tech Stack Overview"],
    tools: ["GitHub", CLAUDE_CODE_LABEL, COWORK_LABEL],
    outputs: [
      "A cleaner repo habit",
      "Better request patterns",
      "A troubleshooting workflow",
    ],
    modules: [
      {
        title: "GitHub Without the Intimidation",
        summary: "Learn just enough version control to keep the work safe and readable.",
        output: "A practical repo structure.",
      },
      {
        title: `${CLAUDE_CODE_LABEL} vs ${COWORK_LABEL}`,
        summary: "Use each tool for the right job instead of blending everything together.",
        output: "A decision framework for AI tasks.",
      },
      {
        title: "Common Failure Points",
        summary: "Handle context problems, conflicts, and bloated requests more cleanly.",
        output: "A troubleshooting checklist.",
      },
    ],
  },
  {
    slug: "ig-content-builder-3pillar",
    title: "3-Pillar Instagram Content Builder",
    track: "advanced",
    hook: "Turn your brand pillars into a repeatable content engine instead of a weekly brainstorm.",
    summary:
      "A workflow for planning, generating, reviewing, and packaging Instagram content around three core strategic pillars.",
    audience: "Brand accounts that need more consistent social output.",
    priceLabel: "$297",
    prerequisites: ["Key Business Files", "Image Backwards Engineering"],
    tools: ["Claude", "Notion or Sheets", "Optional image model", "Optional scheduler"],
    outputs: [
      "A pillar system",
      "A content prompt matrix",
      "A weekly review and scheduling process",
    ],
    modules: [
      {
        title: "Pillar Setup",
        summary: "Define the categories that make the account coherent.",
        output: "A three-pillar content map.",
      },
      {
        title: "Prompting and Variation",
        summary: "Create multiple content directions without losing the brand.",
        output: "A reusable prompt matrix.",
      },
      {
        title: "Review and Calendar Logic",
        summary: "Approve, refine, and schedule without bottlenecks.",
        output: "A weekly content flow.",
      },
    ],
  },
  {
    slug: "on-brand-automation",
    title: "On-Brand Automation",
    track: "advanced",
    hook: "Build a system that keeps AI outputs aligned with your brand instead of drifting every time you scale.",
    summary:
      "A workflow for injecting brand guardrails into prompts, content generation, image direction, and review.",
    audience: "Brands that care about consistency across copy and visuals.",
    priceLabel: "$297",
    prerequisites: ["Image Backwards Engineering", "Key Business Files"],
    tools: ["Claude", "Notion", "Optional Lovable", "Optional image model"],
    outputs: [
      "A brand guardrail layer",
      "A review scorecard",
      "A maintenance system for future updates",
    ],
    modules: [
      {
        title: "Usable Brand Inputs",
        summary: "Translate abstract brand ideas into workflow-ready instructions.",
        output: "A usable brand control file.",
      },
      {
        title: "Workflow Checkpoints",
        summary: "Place the brand rules at the right stages of the system.",
        output: "A checkpoint map.",
      },
      {
        title: "Scaling Without Drift",
        summary: "Increase output without diluting voice or visual quality.",
        output: "A scaling checklist.",
      },
    ],
  },
  {
    slug: "wide-range-image-generation",
    title: "Wide-Range Image Generation",
    track: "advanced",
    hook: "Generate useful product and brand imagery at scale without turning the process into an expensive experiment.",
    summary:
      "A workflow for producing product, lifestyle, and campaign-support imagery in organized batches with cleaner review logic.",
    audience: "Visual businesses that need more image volume across channels.",
    priceLabel: "$297",
    prerequisites: ["Image Backwards Engineering"],
    tools: ["Image model", "Notion or Sheets", "Folder automation"],
    outputs: [
      "An image category system",
      "A prompt framework by use case",
      "A generation and curation pipeline",
    ],
    modules: [
      {
        title: "Image Categories",
        summary: "Define the types of visuals the business actually needs.",
        output: "An image-use framework.",
      },
      {
        title: "Prompt Systems",
        summary: "Prompt by use case rather than prompting from scratch every time.",
        output: "A structured prompt library.",
      },
      {
        title: "Batching and Curation",
        summary: "Generate, review, and store with much less waste.",
        output: "A cleaner asset pipeline.",
      },
    ],
  },
  {
    slug: "personal-instagram-content-builder",
    title: "Personal Instagram Content Builder",
    track: "advanced",
    hook: "Build a founder-content system that turns your lifestyle, work, and perspective into a repeatable publishing pipeline.",
    summary:
      "A workflow for personal-brand content generation across categories, sub-prompts, carousels, stories, and publishing structure.",
    audience: "Founders building a public-facing personal brand.",
    priceLabel: "$297",
    prerequisites: ["3-Pillar Instagram Content Builder", "Image Backwards Engineering"],
    tools: ["Claude", "Image model", "Optional animation tools", "Folder storage"],
    outputs: [
      "A founder-content map",
      "A sub-prompt library",
      "A carousel and story workflow",
    ],
    modules: [
      {
        title: "Content Categories",
        summary: "Define the founder content mix that feels personal but still strategic.",
        output: "A personal brand content map.",
      },
      {
        title: "Sequenced Storytelling",
        summary: "Build carousels and stories as connected narratives instead of isolated posts.",
        output: "A content-sequence system.",
      },
      {
        title: "Publishing Structure",
        summary: "Organize assets so the output is actually usable.",
        output: "A founder-content publishing flow.",
      },
    ],
  },
  {
    slug: "website-photo-generator",
    title: "Website Photo Generator",
    track: "advanced",
    hook: "Create website-ready visuals faster, with clearer brand control and less dependence on constant custom shoots.",
    summary:
      "A workflow for generating and packaging visuals across homepage heroes, collection assets, supporting product imagery, and launch graphics.",
    audience: "Ecommerce brands that need faster website asset production.",
    priceLabel: "$297",
    prerequisites: ["Image Backwards Engineering", "On-Brand Automation"],
    tools: ["Image model", "Shopify or site builder", "Folder storage"],
    outputs: [
      "A website asset map",
      "Placement-based prompting",
      "A publish-ready visual package",
    ],
    modules: [
      {
        title: "Image Types by Page",
        summary: "Different pages need different visual logic.",
        output: "A website image requirements map.",
      },
      {
        title: "Prompting by Placement",
        summary: "Generate for conversion context, not just aesthetics.",
        output: "A prompt framework by placement.",
      },
      {
        title: "Packaging for Upload",
        summary: "Deliver the images in a way the site team can actually use.",
        output: "A ready-to-publish asset bundle.",
      },
    ],
  },
  {
    slug: "website-content-generator",
    title: "Website Content Generator",
    track: "advanced",
    hook: "Turn your brand, product, and offer inputs into structured website copy without starting from a blank page every time.",
    summary:
      "A workflow for producing homepage, landing page, collection page, and product page copy with more structure and less generic output.",
    audience: "Brands that need better website copy with a repeatable production process.",
    priceLabel: "$297",
    prerequisites: ["Key Business Files", "On-Brand Automation"],
    tools: ["Claude", "Notion or Sheets", "Lovable or site builder"],
    outputs: [
      "A copy source system",
      "Page-role-based prompts",
      "A publish-ready content package",
    ],
    modules: [
      {
        title: "Source Inputs",
        summary: "Organize the information the copy system needs before generation begins.",
        output: "A website copy source file.",
      },
      {
        title: "Prompting by Page Role",
        summary: "Generate copy in structured sections instead of giant uncontrolled drafts.",
        output: "A page-based prompt system.",
      },
      {
        title: "Editing and Packaging",
        summary: "Review, tighten, and store copy in a reusable format.",
        output: "A final content package.",
      },
    ],
  },
];

export const getCoursesByTrack = (track: CourseTrack | "all") =>
  track === "all" ? courses : courses.filter((course) => course.track === track);

export const getCourseBySlug = (slug: string) =>
  courses.find((course) => course.slug === slug);

export const getLimitedTimeCourses = () =>
  courses.filter((course) => Boolean(course.limitedTimeNote));

export const getRelatedCourses = (course: Course) =>
  courses.filter((item) => item.track === course.track && item.slug !== course.slug).slice(0, 3);
