import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Image,
  MessageSquare,
  Monitor,
  Palette,
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
import ProjectCardMini from "@/components/ProjectCardMini";
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

const foundationSteps = [
  { slug: "tech-stack-overview", labelKey: "home.foundation.techStack" },
  { slug: "image-backwards-engineering", labelKey: "home.foundation.imageBackwards" },
  { slug: "key-business-files", labelKey: "home.foundation.keyFiles" },
  { slug: "lovable-crash-course", labelKey: "home.foundation.lovable" },
  { slug: "github-claude-workflow", labelKey: "home.foundation.github" },
];

const advancedLanes: Array<{
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
  accent: string;
}> = [
  { titleKey: "home.advanced.content", descKey: "home.advanced.content.desc", icon: MessageSquare, accent: "bg-lavender text-lavender-foreground" },
  { titleKey: "home.advanced.brand", descKey: "home.advanced.brand.desc", icon: Palette, accent: "bg-blush-peach text-blush-peach-foreground" },
  { titleKey: "home.advanced.website", descKey: "home.advanced.website.desc", icon: Monitor, accent: "bg-sky text-sky-foreground" },
];

const Index = () => {
  const { t } = useLanguage();
  const featuredProjects = getFeaturedProjects().slice(0, 3);
  const courseMap = new Map(courses.map((course) => [course.slug, course]));

  return (
    <main>
      {/* ── HERO ── */}
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
                  <ContactDialog>
                    <Button size="lg" className="rounded-btn text-sm font-medium">
                      {t("home.hero.cta1")}
                    </Button>
                  </ContactDialog>
                  <Button asChild variant="outline" size="lg" className="rounded-btn text-sm font-medium">
                    <a href="#steal-my-system">{t("home.hero.cta2")}</a>
                  </Button>
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

      {/* ── ABOUT (trust builder) ── */}
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
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <ContactDialog>
                    <Button className="rounded-btn">
                      {t("nav.cta")}
                    </Button>
                  </ContactDialog>
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

      {/* ── WAYS TO WORK (offers — Work With Me first) ── */}
      <section id="offers" className="px-6 py-20 md:py-24">
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

      {/* ── STEAL MY SYSTEM (roadmap) ── */}
      <section id="steal-my-system" className="px-6 py-20 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("home.roadmap.label")}</p>
              <h2 className="mb-4 text-3xl font-normal md:text-4xl" style={{ letterSpacing: "-0.01em" }}>
                {t("home.roadmap.title")}
              </h2>
              <p className="mx-auto max-w-2xl font-light leading-relaxed text-muted-foreground">
                {t("home.roadmap.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Phase 1 — Free Foundations */}
            <ScrollReveal>
              <div className="rounded-card border border-border bg-card p-8">
                <p className="mb-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("home.roadmap.phase1")}</p>
                <h3 className="mb-6 text-xl font-medium">{t("home.roadmap.foundations")}</h3>
                <ol className="space-y-4">
                  {foundationSteps.map((step, i) => {
                    const course = courseMap.get(step.slug);
                    if (!course) return null;
                    return (
                      <li key={step.slug} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-sm font-medium">{course.title}</p>
                          <p className="text-sm text-muted-foreground">{t(step.labelKey)}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </ScrollReveal>

            {/* Phase 2 — Copy My Workflows */}
            <ScrollReveal delay={80}>
              <div className="rounded-card border border-border bg-card p-8">
                <p className="mb-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("home.roadmap.phase2")}</p>
                <h3 className="mb-6 text-xl font-medium">{t("home.roadmap.advanced")}</h3>
                <div className="space-y-4">
                  {advancedLanes.map((lane) => {
                    const Icon = lane.icon;
                    return (
                      <div key={lane.titleKey} className="flex items-start gap-3">
                        <div className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${lane.accent}`}>
                          <Icon size={15} />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{t(lane.titleKey)}</p>
                          <p className="text-sm text-muted-foreground">{t(lane.descKey)}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    {t("home.cta.subtitle")}
                  </p>
                  <div className="mt-4">
                    <ContactDialog>
                      <Button size="sm" className="rounded-btn text-sm">
                        {t("nav.cta")}
                      </Button>
                    </ContactDialog>
                  </div>
                </div>
              </div>
            </ScrollReveal>
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

      {/* ── PROOF ── */}
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

      {/* ── CTA + FAQ ── */}
      <section className="px-6 py-20 md:py-24">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal>
            <div className="rounded-card border border-brass/40 bg-brass/5 p-8 md:p-10">
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
                <ContactDialog>
                  <Button className="rounded-btn">
                    {t("nav.cta")}
                  </Button>
                </ContactDialog>
                <Button asChild variant="outline" className="rounded-btn">
                  <Link to="/courses">{t("home.cta.browseCourses")}</Link>
                </Button>
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
