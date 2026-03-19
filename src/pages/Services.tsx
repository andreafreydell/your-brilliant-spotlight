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
      titleKey: "Course Library",
      description: t("services.label") === "Formas de Trabajar Juntos"
        ? "Para fundadores que quieren plantillas de implementación estructuradas y auto-servicio en las rutas de bases y flujos avanzados."
        : "For founders who want structured, self-serve implementation blueprints across the foundations and advanced workflow tracks.",
      items: t("services.label") === "Formas de Trabajar Juntos"
        ? ["Cursos individuales", "Paquetes", "Rutas de implementación claras"]
        : ["Standalone courses", "Bundles", "Clear implementation paths"],
    },
    {
      titleKey: "Membership",
      description: t("services.label") === "Formas de Trabajar Juntos"
        ? "Para compradores que quieren la biblioteca actual más futuros lanzamientos, una cadencia de lanzamiento mensual y una relación más continua con la plataforma."
        : "For buyers who want the current library plus future builds, a monthly release cadence, and a more ongoing relationship with the platform.",
      items: t("services.label") === "Formas de Trabajar Juntos"
        ? ["Todos los cursos actuales", "Futuros lanzamientos incluidos", "Capa de producto orientada a la comunidad"]
        : ["All current courses", "Future workflow releases", "Community-oriented product layer"],
    },
    {
      titleKey: t("services.label") === "Formas de Trabajar Juntos" ? "Proyectos Personalizados" : "Custom Builds",
      description: t("services.label") === "Formas de Trabajar Juntos"
        ? "Para negocios cuyo caso de uso no encaja limpiamente en el catálogo y necesita una arquitectura de flujo de trabajo más específica."
        : "For businesses whose use case does not fit neatly into the catalog and needs a more specific workflow architecture.",
      items: t("services.label") === "Formas de Trabajar Juntos"
        ? ["Diagnóstico y alcance", "Stack recomendado", "Ruta de proyecto personalizado"]
        : ["Diagnosis and scope", "Recommended stack", "Custom build path"],
    },
    {
      titleKey: t("services.label") === "Formas de Trabajar Juntos" ? "Asesoría Estratégica" : "Strategic Advisory",
      description: t("services.label") === "Formas de Trabajar Juntos"
        ? "Para fundadores que necesitan ayuda decidiendo qué construir primero, cómo estructurar el stack y dónde la IA debería realmente crear palanca."
        : "For founders who need help deciding what to build first, how to structure the stack, and where AI should actually create leverage.",
      items: t("services.label") === "Formas de Trabajar Juntos"
        ? ["Mapeo de prioridades", "Decisiones de stack", "Secuenciación de flujos"]
        : ["Priority mapping", "Stack decisions", "Workflow sequencing"],
    },
  ];

  const backgroundSystems = [
    {
      num: "Background 1",
      title: t("services.label") === "Formas de Trabajar Juntos" ? "Escalando con IA" : "Scaling with AI",
      color: "bg-lavender",
      services: t("services.label") === "Formas de Trabajar Juntos"
        ? ["Construcción de flujos y capas operativas asistidas por IA", "Sistemas de imagen y contenido", "Lógica de herramientas internas para equipos lean"]
        : ["Workflow builds and AI-assisted operating layers", "Image and content systems", "Internal tooling logic for lean teams"],
    },
    {
      num: "Background 2",
      title: t("services.label") === "Formas de Trabajar Juntos" ? "Consultoría de Gestión" : "Management Consulting",
      color: "bg-seafoam",
      services: t("services.label") === "Formas de Trabajar Juntos"
        ? ["Marco financiero y operativo", "Decisiones de crecimiento basadas en lógica de negocio", "Claridad estratégica antes de la ejecución"]
        : ["Financial and operational framing", "Growth decisions grounded in business logic", "Strategic clarity before execution"],
    },
    {
      num: "Background 3",
      title: t("services.label") === "Formas de Trabajar Juntos" ? "Branding y Dirección Creativa" : "Branding & Creative Direction",
      color: "bg-blush-peach",
      services: t("services.label") === "Formas de Trabajar Juntos"
        ? ["Calidad de marca como input operativo", "Sistemas creativos y dirección visual", "Mejor gusto integrado en los flujos"]
        : ["Brand quality as an operating input", "Creative systems and visual direction", "Stronger taste embedded into workflows"],
    },
    {
      num: "Background 4",
      title: t("services.label") === "Formas de Trabajar Juntos" ? "Estrategia Digital" : "Digital Strategy",
      color: "bg-sky",
      services: t("services.label") === "Formas de Trabajar Juntos"
        ? ["Pensamiento web, de contenido y conversión", "Sistemas digitales en lugar de activos desconectados", "Una ruta práctica de la idea a la interfaz"]
        : ["Web, content, and conversion thinking", "Digital systems rather than disconnected assets", "A practical route from idea to interface"],
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
            <ScrollReveal key={item.titleKey} delay={index * 80}>
              <div className="rounded-card border border-border bg-card p-8 h-full">
                <h2 className="text-2xl font-medium mb-3">{item.titleKey}</h2>
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
