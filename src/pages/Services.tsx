import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";
import ContactDialog from "@/components/ContactDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const waysToWork = [
    {
      title: t("services.courseLibrary.title"),
      description: t("services.courseLibrary.desc"),
      items: [t("services.courseLibrary.item1"), t("services.courseLibrary.item2"), t("services.courseLibrary.item3")],
    },
    {
      title: t("services.membership.title"),
      description: t("services.membership.desc"),
      items: [t("services.membership.item1"), t("services.membership.item2"), t("services.membership.item3")],
    },
    {
      title: t("services.customBuilds.title"),
      description: t("services.customBuilds.desc"),
      items: [t("services.customBuilds.item1"), t("services.customBuilds.item2"), t("services.customBuilds.item3")],
    },
    {
      title: t("services.advisory.title"),
      description: t("services.advisory.desc"),
      items: [t("services.advisory.item1"), t("services.advisory.item2"), t("services.advisory.item3")],
    },
  ];

  const backgroundSystems = [
    {
      num: "Background 1",
      title: t("services.bg1.title"),
      color: "bg-lavender",
      services: [t("services.bg1.s1"), t("services.bg1.s2"), t("services.bg1.s3")],
    },
    {
      num: "Background 2",
      title: t("services.bg2.title"),
      color: "bg-seafoam",
      services: [t("services.bg2.s1"), t("services.bg2.s2"), t("services.bg2.s3")],
    },
    {
      num: "Background 3",
      title: t("services.bg3.title"),
      color: "bg-blush-peach",
      services: [t("services.bg3.s1"), t("services.bg3.s2"), t("services.bg3.s3")],
    },
    {
      num: "Background 4",
      title: t("services.bg4.title"),
      color: "bg-sky",
      services: [t("services.bg4.s1"), t("services.bg4.s2"), t("services.bg4.s3")],
    },
  ];

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">{t("services.label")}</p>
            <h1 className="text-4xl md:text-5xl font-light mb-4" style={{ letterSpacing: "-0.02em" }}>
              {t("services.title")}
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              {t("services.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {waysToWork.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 80}>
              <div className="rounded-card border border-border bg-card p-8 h-full">
                <h2 className="text-2xl font-medium mb-3">{item.title}</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-5">{item.description}</p>
                <ul className="space-y-3">
                  {item.items.map((service) => (
                    <li key={service} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <Divider />

        <ScrollReveal>
          <div className="max-w-3xl mb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">{t("services.background.label")}</p>
            <h2 className="text-3xl font-normal mb-4" style={{ letterSpacing: "-0.01em" }}>
              {t("services.background.title")}
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              {t("services.background.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {backgroundSystems.map((system, index) => (
            <ScrollReveal key={system.title} delay={index * 70}>
              <div className="rounded-card border border-border bg-card p-6 h-full">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-2">{system.num}</p>
                <div className="flex items-center gap-4 mb-5">
                  <div className={`h-10 w-10 rounded-full ${system.color}`} />
                  <h3 className="text-lg font-medium">{system.title}</h3>
                </div>
                <ul className="space-y-3">
                  {system.services.map((service) => (
                    <li key={service} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <Divider />

        <ScrollReveal>
          <div className="rounded-card border border-border bg-card p-8 md:p-10 text-center">
            <h2 className="text-3xl font-normal mb-4" style={{ letterSpacing: "-0.01em" }}>
              {t("services.cta.title")}
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground font-light leading-relaxed mb-8">
              {t("services.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-btn">
                <Link to="/courses">{t("home.cta.browseCourses")}</Link>
              </Button>
              <ContactDialog>
                <Button variant="outline" size="lg" className="rounded-btn">
                  {t("nav.cta")}
                </Button>
              </ContactDialog>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
};

export default Services;
