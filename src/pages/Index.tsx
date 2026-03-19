import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Code2,
  Compass,
  FolderTree,
  Image,
  MessageSquare,
  Monitor,
  Palette,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import andreaPortrait from "@/assets/andrea-portrait.webp";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";
import ProjectCard from "@/components/ProjectCard";
import ContactDialog from "@/components/ContactDialog";
import OfferCard from "@/components/OfferCard";
import { getFeaturedProjects } from "@/data/projects";
import { courses, offers } from "@/data/coursePlatform";
import { useLanguage } from "@/contexts/LanguageContext";

const heroHighlightKeys = [
  { titleKey: "home.highlight.content", descKey: "home.highlight.content.desc", icon: MessageSquare, accent: "bg-lavender text-lavender-foreground" },
  { titleKey: "home.highlight.image", descKey: "home.highlight.image.desc", icon: Image, accent: "bg-blush-peach text-blush-peach-foreground" },
  { titleKey: "home.highlight.website", descKey: "home.highlight.website.desc", icon: Monitor, accent: "bg-sky text-sky-foreground" },
  { titleKey: "home.highlight.ai", descKey: "home.highlight.ai.desc", icon: Bot, accent: "bg-seafoam text-seafoam-foreground" },
];

const foundationPath: Array<{
  slug: string;
  labelKey?: string;
  label: string;
  outcomeKey: string;
  icon: LucideIcon;
  accent: string;
}> = [
  { slug: "tech-stack-overview", label: "Tech Stack Overview", outcomeKey: "home.foundation.techStack", icon: Compass, accent: "bg-seafoam text-seafoam-foreground" },
  { slug: "image-backwards-engineering", label: "Image Backwards Engineering", outcomeKey: "home.foundation.imageBackwards", icon: Image, accent: "bg-blush-peach text-blush-peach-foreground" },
  { slug: "key-business-files", label: "Key Business Files", outcomeKey: "home.foundation.keyFiles", icon: FolderTree, accent: "bg-sky text-sky-foreground" },
  { slug: "lovable-crash-course", label: "Lovable Crash Course", outcomeKey: "home.foundation.lovable", icon: Workflow, accent: "bg-lavender text-lavender-foreground" },
  { slug: "github-claude-workflow", label: "GitHub + Claude Code + OpenAI Codex Workflow", outcomeKey: "home.foundation.github", icon: Code2, accent: "bg-seafoam text-seafoam-foreground" },
];

const advancedLanes: Array<{
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
  accent: string;
  courseItems: Array<{ slug: string; label: string }>;
}> = [
  {
    titleKey: "home.advanced.content", descKey: "home.advanced.content.desc", icon: MessageSquare, accent: "bg-lavender text-lavender-foreground",
    courseItems: [
      { slug: "ig-content-builder-3pillar", label: "3-Pillar Instagram Content Builder" },
      { slug: "personal-instagram-content-builder", label: "Personal Instagram Content Builder" },
    ],
  },
  {
    titleKey: "home.advanced.brand", descKey: "home.advanced.brand.desc", icon: Palette, accent: "bg-blush-peach text-blush-peach-foreground",
    courseItems: [
      { slug: "on-brand-automation", label: "On-Brand Automation" },
      { slug: "wide-range-image-generation", label: "Wide-Range Image Generation" },
    ],
  },
  {
    titleKey: "home.advanced.website", descKey: "home.advanced.website.desc", icon: Monitor, accent: "bg-sky text-sky-foreground",
    courseItems: [
      { slug: "website-photo-generator", label: "Website Photo Generator" },
      { slug: "website-content-generator", label: "Website Content Generator" },
    ],
  },
];

const Index = () => {
  const { t } = useLanguage();
  const featuredProjects = getFeaturedProjects().slice(0, 3);
  const courseMap = new Map(courses.map((course) => [course.slug, course]));

  return (
    <main>
      <section className="relative overflow-hidden px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--lavender)/0.28)_0%,transparent_52%),radial-gradient(ellipse_at_bottom_right,hsl(var(--seafoam)/0.22)_0%,transparent_48%)]" />
        <div className="container relative mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <ScrollReveal>
                <p className="mb-5 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  {t("home.hero.label")}
                </p>
                <h1
                  className="mb-6 max-w-4xl text-4xl font-light leading-tight md:text-6xl lg:text-7xl"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {t("home.hero.title")}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={120}>
                <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
                  {t("home.hero.subtitle")}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={220}>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="rounded-btn text-sm font-medium">
                    <a href="#offers">{t("home.hero.cta1")}</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-btn text-sm font-medium">
                    <a href="#course-roadmap">{t("home.hero.cta2")}</a>
                  </Button>
                  <ContactDialog>
                    <Button variant="outline" size="lg" className="rounded-btn text-sm font-medium">
                      {t("nav.cta")}
                    </Button>
                  </ContactDialog>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={280}>
              <div className="rounded-card border border-border bg-card/90 p-8 backdrop-blur-sm">
                <p className="mb-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("home.hero.whatYouCanBuild")}</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {heroHighlightKeys.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.titleKey} className="rounded-card border border-border bg-background/70 p-5">
                        <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full ${item.accent}`}>
                          <Icon size={18} />
                        </div>
                        <h2 className="mb-2 text-lg font-medium">{t(item.titleKey)}</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">{t(item.descKey)}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid items-start gap-12 md:grid-cols-5">
            <ScrollReveal className="md:col-span-2">
              <img
                src={andreaPortrait}
                alt="Andrea Freydell - founder and operator"
                className="aspect-[3/4] w-full rounded-btn object-cover"
                loading="lazy"
              />
            </ScrollReveal>

            <ScrollReveal delay={100} className="md:col-span-3">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("home.about.label")}</p>
                <h2 className="mb-6 text-4xl font-light md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
                  Andrea Freydell
                </h2>
                <div className="space-y-4 font-light leading-relaxed text-muted-foreground">
                  <p>{t("home.about.bio1")}</p>
                  <p>{t("home.about.bio2")}</p>
                  <p>{t("home.about.bio3")}</p>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild className="rounded-btn">
                    <Link to="/about">{t("home.about.readMore")}</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-btn">
                    <Link to="/work">{t("home.about.seeProof")}</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Divider />

      <section id="offers" className="px-6 pb-10">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="mb-8 max-w-2xl">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("home.offers.label")}</p>
              <h2 className="mb-4 text-3xl font-normal md:text-4xl" style={{ letterSpacing: "-0.01em" }}>
                {t("home.offers.title")}
              </h2>
              <p className="font-light leading-relaxed text-muted-foreground">
                {t("home.offers.subtitle")}
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {offers.map((offer, index) => (
              <ScrollReveal key={offer.slug} delay={index * 80}>
                <OfferCard offer={offer} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section id="course-roadmap" className="px-6 py-20 md:py-24">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("home.roadmap.label")}</p>
              <h2 className="mb-4 text-3xl font-normal md:text-4xl" style={{ letterSpacing: "-0.01em" }}>
                {t("home.roadmap.title")}
              </h2>
              <p className="font-light leading-relaxed text-muted-foreground">
                {t("home.roadmap.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_auto_1.05fr] lg:items-start">
            <ScrollReveal>
              <div className="rounded-card border border-border bg-card p-8">
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("home.roadmap.foundations")}</p>
                <h3 className="mb-6 text-2xl font-medium">{t("home.roadmap.buildBase")}</h3>
                <div className="space-y-4">
                  {foundationPath.map((step, index) => {
                    const course = courseMap.get(step.slug);
                    const Icon = step.icon;

                    if (!course) {
                      return null;
                    }

                    return (
                      <div key={step.slug} className="rounded-card border border-border bg-background/70 p-5">
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${step.accent}`}>
                              <Icon size={18} />
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                                {t("home.roadmap.step")} {index + 1}
                              </p>
                              <h4 className="text-lg font-medium">{step.label}</h4>
                            </div>
                          </div>
                          <p className="text-sm font-medium text-muted-foreground">{course.priceLabel}</p>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">{t(step.outcomeKey)}</p>
                        {course.limitedTimeNote && (
                          <p className="mt-4 inline-flex rounded-full bg-brass/10 px-3 py-1 text-xs font-medium text-brass">
                            {course.limitedTimeNote}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            <div className="hidden h-full items-start justify-center lg:flex">
              <div className="mt-24 inline-flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card">
                <ArrowRight size={22} className="text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-6">
              <ScrollReveal delay={80}>
                <div className="rounded-card border border-border bg-card p-8">
                  <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("home.roadmap.advanced")}</p>
                  <h3 className="mb-3 text-2xl font-medium">{t("home.roadmap.chooseOutcome")}</h3>
                  <p className="font-light leading-relaxed text-muted-foreground">
                    {t("home.roadmap.advancedSubtitle")}
                  </p>
                </div>
              </ScrollReveal>

              {advancedLanes.map((lane, index) => {
                const Icon = lane.icon;

                return (
                  <ScrollReveal key={lane.titleKey} delay={index * 90 + 120}>
                    <div className="rounded-card border border-border bg-card p-8">
                      <div className="mb-5 flex items-center gap-4">
                        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${lane.accent}`}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <h4 className="text-xl font-medium">{t(lane.titleKey)}</h4>
                          <p className="text-sm text-muted-foreground">{t(lane.descKey)}</p>
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {lane.courseItems.map((item) => (
                          <div key={item.slug} className="rounded-card border border-border bg-background/70 p-4">
                            <p className="text-sm font-medium leading-snug">{item.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <ScrollReveal delay={120}>
            <div className="mt-10 flex justify-center">
              <Button asChild variant="outline" size="lg" className="rounded-btn">
                <Link to="/courses">{t("home.roadmap.viewAll")}</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Divider />

      <section className="px-6 py-20 md:py-24">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("home.proof.label")}</p>
                <h2 className="mb-4 text-3xl font-normal md:text-4xl" style={{ letterSpacing: "-0.01em" }}>
                  {t("home.proof.title")}
                </h2>
                <p className="font-light leading-relaxed text-muted-foreground">
                  {t("home.proof.subtitle")}
                </p>
              </div>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("home.proof.viewAll")} <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 70}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section className="px-6 py-20 md:py-24">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal>
            <div className="rounded-card border border-border bg-card p-8 md:p-10">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("home.cta.label")}</p>
              <h2 className="mb-4 text-3xl font-normal" style={{ letterSpacing: "-0.01em" }}>
                {t("home.cta.title")}
              </h2>
              <p className="mb-6 font-light leading-relaxed text-muted-foreground">
                {t("home.cta.subtitle")}
              </p>
              <ul className="mb-8 space-y-3">
                {[t("home.cta.bullet1"), t("home.cta.bullet2"), t("home.cta.bullet3")].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild className="rounded-btn">
                  <Link to="/courses">{t("home.cta.browseCourses")}</Link>
                </Button>
                <ContactDialog>
                  <Button variant="outline" className="rounded-btn">
                    {t("nav.cta")}
                  </Button>
                </ContactDialog>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="rounded-card border border-border bg-card p-8 md:p-10">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("home.faq.label")}</p>
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: t("faq.q1"), a: t("faq.a1") },
                  { q: t("faq.q2"), a: t("faq.a2") },
                  { q: t("faq.q3"), a: t("faq.a3") },
                  { q: t("faq.q4"), a: t("faq.a4") },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="leading-relaxed text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
