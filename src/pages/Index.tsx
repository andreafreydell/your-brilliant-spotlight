import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
import {
  ScribbleCircle,
  ScribbleUnderline,
  ScribbleArrow,
  ScribbleStar,
  ScribbleSquiggle,
  StickyNote,
} from "@/components/Scribbles";
import { projects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

const capabilities = [
  { titleKey: "home.cap.arch", descKey: "home.cap.arch.desc" },
  { titleKey: "home.cap.strategy", descKey: "home.cap.strategy.desc" },
  { titleKey: "home.cap.brand", descKey: "home.cap.brand.desc" },
  { titleKey: "home.cap.digital", descKey: "home.cap.digital.desc" },
];

const Index = () => {
  const { t } = useLanguage();
  const allProjects = projects;

  return (
    <main className="relative">
      {/* ── ANIMATED OMBRE BACKGROUND ── */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="ombre-blob ombre-blob-1" />
        <div className="ombre-blob ombre-blob-2" />
        <div className="ombre-blob ombre-blob-3" />
      </div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container relative mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h1
              className="relative mb-6 inline-block text-4xl font-light leading-tight md:text-6xl lg:text-7xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              {t("home.hero.title")}
              {/* underline the whole headline */}
              <ScribbleUnderline
                aria-hidden
                className="pointer-events-none absolute -bottom-3 left-1/2 h-4 w-[80%] -translate-x-1/2 text-tag-red opacity-80 hidden md:block"
              />
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="mx-auto mb-8 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
              {t("home.hero.subtitle")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={220}>
            <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="relative">
                <Button asChild size="lg" className="rounded-btn text-sm font-medium">
                  <a href="#work">{t("home.hero.cta1")}</a>
                </Button>
                {/* circle the primary CTA */}
                <ScribbleCircle
                  aria-hidden
                  className="pointer-events-none absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] text-brass opacity-80 hidden md:block"
                  style={{ transform: "rotate(-8deg)" }}
                />
                {/* arrow pointing to the CTA */}
                <ScribbleArrow
                  aria-hidden
                  className="pointer-events-none absolute -left-28 -top-6 h-14 w-20 text-tag-red hidden md:block"
                  style={{ transform: "rotate(35deg)" }}
                />
                <StickyNote
                  color="peach"
                  rotate={-8}
                  className="absolute -left-44 top-1/2 -translate-y-1/2 hidden lg:block text-base"
                >
                  start here ✿
                </StickyNote>
              </div>
              <ContactDialog>
                <Button variant="outline" size="lg" className="rounded-btn text-sm font-medium">
                  {t("home.hero.cta2")}
                </Button>
              </ContactDialog>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section id="work" className="relative px-6 py-20 md:py-24">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="relative max-w-3xl">
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("home.proof.label")}</p>
                <h2 className="relative mb-4 inline-block text-3xl font-normal md:text-4xl" style={{ letterSpacing: "-0.01em" }}>
                  {t("home.proof.title")}
                  <ScribbleUnderline
                    aria-hidden
                    className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full text-seafoam-foreground opacity-80 hidden md:block"
                  />
                </h2>
                <p className="font-light leading-relaxed text-muted-foreground">
                  {t("home.proof.subtitle")}
                </p>
                <StickyNote
                  color="sky"
                  rotate={-4}
                  className="absolute -top-6 -right-4 hidden lg:block text-base"
                >
                  recent work →
                </StickyNote>
              </div>
              <Link
                to="/work"
                className="relative inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("home.proof.viewAll")} <ArrowRight size={16} />
                <ScribbleCircle
                  aria-hidden
                  className="pointer-events-none absolute -inset-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)] text-tag-red opacity-70 hidden md:block"
                  style={{ transform: "rotate(6deg)" }}
                />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
            {allProjects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={Math.min(index * 40, 400)}>
                <ProjectCardMini {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── ABOUT (brief) ── */}
      <section className="relative px-6 py-20 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid items-start gap-12 md:grid-cols-5">
            <ScrollReveal className="relative md:col-span-2">
              <img
                src={andreaPortrait}
                alt="Andrea Freydell"
                className="aspect-[3/4] w-full rounded-btn object-cover"
                loading="lazy"
              />
              {/* arrow pointing at the portrait */}
              <ScribbleArrow
                aria-hidden
                className="pointer-events-none absolute -right-10 top-6 h-16 w-24 text-tag-red opacity-80 hidden md:block"
                style={{ transform: "rotate(160deg)" }}
              />
              <StickyNote
                color="lavender"
                rotate={-8}
                className="absolute -right-12 -top-6 hidden lg:block text-base"
              >
                hi, I'm Andrea ☺
              </StickyNote>
            </ScrollReveal>

            <ScrollReveal delay={100} className="md:col-span-3">
              <div>
                <h2 className="relative mb-6 inline-block text-4xl font-light md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
                  Andrea Freydell
                  <ScribbleUnderline
                    aria-hidden
                    className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full text-brass opacity-80 hidden md:block"
                  />
                </h2>
                <div className="space-y-4 font-light leading-relaxed text-muted-foreground">
                  <p>{t("home.about.bio1")}</p>
                  <p>{t("home.about.bio2")}</p>
                </div>
                <div className="mt-8">
                  <Button asChild variant="outline" className="rounded-btn">
                    <Link to="/about">{t("home.about.readMore")}</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── SERVICES (light capabilities) ── */}
      <section className="relative px-6 py-20 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="relative mb-12 text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("home.services.label")}</p>
              <h2 className="relative mb-4 inline-block text-3xl font-normal md:text-4xl" style={{ letterSpacing: "-0.01em" }}>
                {t("home.services.title")}
                <ScribbleUnderline
                  aria-hidden
                  className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full text-blush-peach-foreground opacity-80 hidden md:block"
                />
              </h2>
              <StickyNote
                color="seafoam"
                rotate={6}
                className="absolute right-0 top-0 hidden lg:block text-base"
              >
                what I do best
              </StickyNote>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.titleKey} delay={i * 80}>
                <div className="relative rounded-card border border-border bg-card p-6">
                  {i === 0 && (
                    <ScribbleStar
                      aria-hidden
                      className="pointer-events-none absolute -top-3 -left-3 h-7 w-7 text-tag-red opacity-90 hidden md:block animate-[spin_22s_linear_infinite]"
                    />
                  )}
                  <h3 className="mb-2 text-lg font-medium">{t(cap.titleKey)}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t(cap.descKey)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={350}>
            <div className="mt-10 flex justify-center">
              <div className="relative">
                <Button asChild variant="outline" className="rounded-btn">
                  <Link to="/services">{t("home.services.viewAll")}</Link>
                </Button>
                <ScribbleArrow
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-4 h-14 w-20 text-brass hidden md:block"
                  style={{ transform: "rotate(-145deg)" }}
                />
              </div>
            </div>
          </ScrollReveal>
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
              <p className="mb-8 font-light leading-relaxed text-muted-foreground">
                {t("home.cta.subtitle")}
              </p>
              <ContactDialog>
                <Button className="rounded-btn">
                  {t("nav.cta")}
                </Button>
              </ContactDialog>
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
