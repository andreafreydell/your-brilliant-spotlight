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
    <main>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--lavender)/0.18)_0%,transparent_52%),radial-gradient(ellipse_at_bottom_right,hsl(var(--seafoam)/0.14)_0%,transparent_48%)]" />
        <div className="container relative mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h1
              className="mb-6 text-4xl font-light leading-tight md:text-6xl lg:text-7xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              {t("home.hero.title")}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="mx-auto mb-8 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
              {t("home.hero.subtitle")}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={220}>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="rounded-btn text-sm font-medium">
                <a href="#work">{t("home.hero.cta1")}</a>
              </Button>
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
      <section id="work" className="px-6 py-20 md:py-24">
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
      <section className="px-6 py-20 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid items-start gap-12 md:grid-cols-5">
            <ScrollReveal className="md:col-span-2">
              <img
                src={andreaPortrait}
                alt="Andrea Freydell"
                className="aspect-[3/4] w-full rounded-btn object-cover"
                loading="lazy"
              />
            </ScrollReveal>

            <ScrollReveal delay={100} className="md:col-span-3">
              <div>
                <h2 className="mb-6 text-4xl font-light md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
                  Andrea Freydell
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
      <section className="px-6 py-20 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("home.services.label")}</p>
              <h2 className="mb-4 text-3xl font-normal md:text-4xl" style={{ letterSpacing: "-0.01em" }}>
                {t("home.services.title")}
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.titleKey} delay={i * 80}>
                <div className="rounded-card border border-border bg-card p-6">
                  <h3 className="mb-2 text-lg font-medium">{t(cap.titleKey)}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t(cap.descKey)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={350}>
            <div className="mt-10 flex justify-center">
              <Button asChild variant="outline" className="rounded-btn">
                <Link to="/services">{t("home.services.viewAll")}</Link>
              </Button>
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
