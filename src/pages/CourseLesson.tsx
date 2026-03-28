import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";
import { getCourseBySlug } from "@/data/coursePlatform";
import { getLessonByCourseAndSlug } from "@/data/courseLessons";
import { useLanguage } from "@/contexts/LanguageContext";

const literalLessonSpanish = {
  title: "Como Usar la App de Literal",
  eyebrow: "Capacitacion Interna",
  summary:
    "Una leccion practica de operaciones para Grupo Ambiente sobre como usar la app de Literal, generar contenido semanal para Instagram, revisar errores y dejar documentado el flujo para que el equipo no tenga que reaprenderlo en vivo cada vez.",
  meetingLabel: "Abrir la app de Literal",
  promptSectionEyebrow: "Biblioteca de Recursos",
  promptSectionTitle: "Recursos operativos y plantillas",
  promptSectionDescription:
    "Estas son las guias y plantillas reutilizables que salieron de la capacitacion para que el equipo pueda repetir el flujo con mas consistencia.",
  objectives: [
    "Entender que hace la app de Literal, que necesita desde Drive y que resultados crea cada semana.",
    "Usar el Weekly Planner para generar un lote completo de posts, historias y anuncios en una sola sesion.",
    "Saber como revisar los assets generados antes de publicar porque el flujo todavia no es completamente automatico.",
    "Reportar problemas de una forma que haga la siguiente ronda de mejoras de la app mas rapida y mas precisa.",
  ],
  tools: [
    "App de Literal en literal.lovable.app",
    "Carpeta compartida de Google Drive para Literal",
    "App movil de Instagram",
    "WhatsApp para reportar errores",
    "Creditos de Lovable y soporte interno",
  ],
  actionItems: [
    "Verificar las credenciales de Instagram de la cuenta de Literal antes de intentar publicar desde el celular.",
    "Ejecutar el flujo de generacion de contenido y registrar cualquier congelamiento, imagen faltante o error de cambio de producto.",
    "Enviar capturas por WhatsApp cuando aparezca un error para que el bug se pueda reproducir y corregir mas rapido.",
    "Mantener una revision semanal corta de 15 minutos con Maria Andrea Freydell para compartir que funciono, que fallo y que deberia mejorarse despues.",
    "Recargar creditos de Lovable cuando la generacion se ponga lenta porque la cuenta puede haberse quedado sin creditos.",
  ],
  sections: [
    {
      title: "Contexto del Sistema",
      description:
        "Esta leccion nace de una capacitacion interna de Grupo Ambiente sobre como Laura puede operar la app de Literal para Literal Fina Perfumeria sin necesitar una explicacion nueva cada semana.",
      bullets: [
        "La app es un build personalizado en Lovable hecho para apoyar el flujo de marketing de Literal en Instagram.",
        "Este sistema se esta documentando como una leccion interna reutilizable para que empleados y colaboradores puedan revisar el proceso despues.",
        "La app activa que se debe usar es https://literal.lovable.app.",
      ],
      note:
        "Las notas originales mencionaban literal.logo.app durante la llamada, pero la URL de trabajo actual para este sistema es literal.lovable.app.",
    },
    {
      title: "Que Hace el Sistema",
      description:
        "El sistema genera una semana de contenido para redes usando los materiales de producto guardados en Drive y luego empaqueta los resultados en carpetas con fecha listas para revisar.",
      bullets: [
        "El Weekly Planner crea contenido de lunes a sabado.",
        "Cada dia puede incluir tres tipos de contenido: post, historia y anuncio.",
        "Una corrida semanal completa puede generar 36 piezas de contenido.",
        "El resultado se guarda en una carpeta de Google Drive con fecha para que el equipo revise y publique desde ahi.",
        "Un lote completo normalmente tarda unos 15 minutos en generarse.",
      ],
    },
    {
      title: "Insumos Necesarios Antes de Generar",
      description:
        "La app funciona mejor cuando los materiales fuente en Drive estan completos y actualizados. El flujo depende de informacion de producto, no solo de una foto aislada.",
      bullets: [
        "La carpeta compartida de Google Drive de Literal debe contener los PDFs vigentes del catalogo y las imagenes de apoyo de producto.",
        "Los productos que ya no estan activos deberian retirarse del material fuente cuando sea posible.",
        "Si solo hay una foto del producto, la app puede seguir funcionando, pero el resultado sera mas debil porque faltan detalles mas ricos del catalogo.",
        "Si se agregan archivos nuevos a Drive, usa la funcion de sync en la app para que vuelva a leer los insumos actualizados.",
      ],
    },
    {
      title: "Areas Principales de la App",
      description:
        "La capacitacion mostro dos pestanas principales y algunos controles de apoyo que importan en la operacion diaria.",
      bullets: [
        "Perfume Content Engine: se usa para generar o regenerar piezas individuales de contenido y probar imagenes especificas.",
        "Weekly Planner: se usa para generar una semana completa de resultados mucho mas rapido.",
        "Botones de Drive: abren las carpetas relevantes directamente desde la app.",
        "Selector de idioma: permite generar contenido en otro idioma si hace falta.",
        "Boton de sync: actualiza la app despues de hacer cambios en los materiales fuente de Drive.",
      ],
    },
    {
      title: "Flujo del Weekly Planner",
      description:
        "El Weekly Planner es el modo principal de operacion para el equipo porque reduce el trabajo repetitivo diario y crea un lote completo en una sola sesion.",
      numbered: [
        "Abre la pestana de Weekly Planner dentro de la app de Literal.",
        "Revisa los productos seleccionados o deja que el planner llene la semana automaticamente.",
        "Usa auto-fill para asignar productos y tipos de contenido variados en el calendario.",
        "Haz click en generate para construir la semana. Esto puede tardar unos 15 minutos, sobre todo porque la generacion de imagenes es la parte mas lenta.",
        "Espera a que termine de cargar el contenido y revisa las tarjetas generadas para cada dia.",
        "Cuando la semana este lista, sube el contenido a Drive para que el equipo pueda acceder a la carpeta fechada.",
      ],
      note:
        "La meta todavia no es la automatizacion total. La meta es reducir el trabajo de forma fuerte mientras se mantiene un paso manual de revision antes de publicar.",
    },
    {
      title: "Tipos de Contenido y Reglas de Marca",
      description:
        "La app varia automaticamente tanto los visuales como el copy, pero lo hace dentro de reglas de marca integradas que deberian mantenerse salvo que la persona duena del flujo decida actualizarlas.",
      bullets: [
        "El copy corto debe ser muy conciso, alrededor de 90 caracteres, y arrancar con un gancho sensorial directo.",
        "El copy largo debe usar tres beats concretos, detalles aterrizados y un cierre tactil en vez de poesia vaga.",
        "El vocabulario prohibido incluye palabras sin sustento como exclusivo, magico, exotico o artesanal sin evidencia, ademas de lenguaje de genero como para el o para ella.",
        "El tono de marca es honesto, preciso y calido: alguien que ama su oficio y dice la verdad sin intentar impresionar.",
        "El sistema visual rota entre varios arquetipos como monumental bottle, macro ingredient, scented pyramid, ritual intimo, editorial de moda, paisaje de origen y macro monumental.",
        "El filtro Literal le da a las imagenes una sensacion mas vintage y distintiva, y en general se recomienda.",
      ],
    },
    {
      title: "Como Revisar y Publicar el Resultado",
      description:
        "El flujo todavia requiere revision humana. El equipo deberia tratar los archivos generados como borradores fuertes, no como una publicacion totalmente autonoma.",
      bullets: [
        "Abre la carpeta con fecha que crea la app en Drive y revisa los assets de cada dia.",
        "Elige la mejor imagen o imagenes entre las opciones generadas para cada tipo de contenido.",
        "Si una imagen sale mal pero otra sirve, conserva la util y sigue adelante en vez de bloquear todo el dia.",
        "Copia el texto final en Instagram desde el celular y publica manualmente desde la cuenta de Literal.",
        "Trata cada asset generado como un activo de la empresa. Archiva, renombra y reutiliza los buenos resultados en vez de borrarlos a la ligera.",
      ],
    },
    {
      title: "Limitaciones Actuales y Que Hacer",
      description:
        "La herramienta ya es util, pero todavia esta en una etapa minimamente viable. Algunos errores son esperables y deben manejarse con calma.",
      bullets: [
        "Bug de cambio de botella: el sistema a veces cambia el empaque del producto en la imagen generada.",
        "Agotamiento de creditos: la generacion puede frenarse si la cuenta de Lovable se queda sin creditos.",
        "Congelamientos ocasionales: refrescar la pagina y volver a intentar puede destrabar algunas generaciones.",
        "Pueden aparecer items fuente repetidos o confusos en la interfaz, pero no necesariamente bloquean el flujo.",
        "La app no esta lista para publicar directamente en Instagram porque los errores visuales todavia necesitan revision manual.",
      ],
      note:
        "Si un error persiste en mas de un intento, documenta que producto, dia y tipo de contenido lo disparo para que el flujo se pueda corregir con precision y no por intuicion.",
    },
    {
      title: "Escalamiento y Ciclo de Feedback",
      description:
        "La app mejora mediante ciclos cortos de feedback semanales. Cuanto mejor reporte el equipo los problemas, mas rapido se vuelve automatico el flujo.",
      numbered: [
        "Toma una captura cuando la generacion se congele o produzca un error visible.",
        "Envia la captura por WhatsApp con una descripcion corta de lo que estabas generando.",
        "Menciona el producto exacto involucrado si el problema depende del producto, como un cambio de botella.",
        "Comparte si el problema se resolvio despues de refrescar o regenerar.",
        "Lleva los errores repetidos a la revision semanal de 15 minutos para que Maria Andrea Freydell pueda ajustar parametros o depurar el build.",
      ],
    },
    {
      title: "Roles y Siguientes Pasos de Automatizacion",
      description:
        "El proceso ya ahorra tiempo de forma importante, pero todavia hay espacio para automatizar mas cuando el nivel de error baje.",
      bullets: [
        "Laura es la operadora diaria del flujo de publicaciones de Literal.",
        "Leandro maneja la pauta o colocacion de anuncios.",
        "Maria Andrea Freydell es la responsable de la logica de la app, los parametros y la resolucion de errores.",
        "Una fase posterior podria conectar el contenido con un programador como Later para que el equipo revise el lote y luego programe la semana en un solo paso.",
        "La meta actual es primero la confiabilidad operativa y despues una automatizacion mas profunda.",
      ],
    },
  ],
  prompts: [
    {
      title: "Parametros de Copywriting de Literal",
      description:
        "Esta es la version condensada de las reglas de copy descritas durante la capacitacion. Usala para revisar si el texto generado todavia suena a Literal.",
      language: "text",
      content: `Copy corto
- Alrededor de 90 caracteres
- Gancho sensorial directo
- Sin introduccion, relleno o apertura vaga

Copy largo
- Tres beats concretos
- Ingrediente, origen, comportamiento o persona real
- Cierre tactil o sensorial

Evitar
- Adjetivos sin sustento como exclusivo, magico, exotico o artesanal sin prueba
- Lenguaje de genero como para el o para ella
- Poesia vacia o lenguaje de lujo generico

Tono
- Honesto
- Preciso
- Calido
- Adulto
- Facil de entender
- Dificil de olvidar`,
    },
    {
      title: "Plantilla para Reportar Errores",
      description:
        "Usa esta estructura corta cuando envies un problema a Maria para que la depuracion sea especifica y no vaga.",
      language: "text",
      content: `Tipo de problema:
Dia y tipo de contenido:
Producto involucrado:
Que paso:
Refrescar ayudo:
Captura adjunta:
Que necesito despues:`,
    },
    {
      title: "Agenda de Revision Semanal",
      description:
        "Una plantilla ligera para la revision de 15 minutos para que el equipo siga mejorando el sistema sin convertir la reunion en algo largo.",
      language: "text",
      content: `1. Que genero bien esta semana
2. Que productos o tipos de imagen fallaron
3. Que problemas de copy se repitieron
4. Que friccion hubo al publicar en Instagram
5. Que ajuste se deberia probar la proxima semana`,
    },
  ],
  assignment: [
    "Genera una semana completa dentro del Weekly Planner y guarda el resultado en Drive sin borrar los assets originales.",
    "Revisa cada dia y marca que imagenes estan listas, cuales necesitan regeneracion y cuales deben reportarse como bugs.",
    "Publica manualmente al menos un asset aprobado en Instagram para asegurarte de que el flujo completo este claro.",
    "Lleva un error repetido y una idea de mejora a la siguiente revision semanal para que el sistema se vuelva un repositorio interno vivo.",
  ],
  nextUp:
    "Idea para la siguiente leccion: como convertir el contenido semanal aprobado en un flujo de publicacion mas ligero con convenciones de nombres, reglas de programacion y un sistema de archivo mas limpio.",
};

const CourseLesson = () => {
  const { slug, lessonSlug } = useParams<{ slug: string; lessonSlug: string }>();
  const { t, language } = useLanguage();
  const course = getCourseBySlug(slug || "", language);
  const lesson = getLessonByCourseAndSlug(slug || "", lessonSlug || "", language);

  if (!course || !lesson) {
    return <Navigate to="/courses" replace />;
  }

  const localizedLesson =
    language === "es" &&
    lesson.courseSlug === "literal-fina-perfumeria-app-course" &&
    lesson.slug === "literal-app-operations"
      ? { ...lesson, ...literalLessonSpanish }
      : lesson;

  return (
    <main className="px-6 pt-24 pb-16">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <Link
            to={`/courses/${course.slug}`}
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            {t("courseLesson.backTo")} {course.title}
          </Link>
        </ScrollReveal>

        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <ScrollReveal>
            <div className="rounded-card border border-border bg-card p-8 md:p-10">
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {localizedLesson.eyebrow}
              </p>
              {course.contextNote && (
                <p className="mb-4 inline-flex rounded-full bg-sky/15 px-3 py-1 text-xs font-medium text-sky-foreground">
                {course.contextNote}
              </p>
              )}
              <h1 className="mb-4 text-4xl font-light md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
                {localizedLesson.title}
              </h1>
              <p className="mb-6 text-xl font-light leading-relaxed text-muted-foreground">
                {localizedLesson.summary}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-btn">
                  <Link to={`/courses/${course.slug}`}>{t("courseLesson.backToCourse")}</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-btn">
                  <a href={localizedLesson.meetingUrl} target="_blank" rel="noreferrer">
                    {localizedLesson.meetingLabel} <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <aside className="rounded-card border border-border bg-card p-8">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {t("courseLesson.lessonOverview")}
              </p>
              <div className="space-y-6">
                <div>
                  <p className="mb-2 text-sm font-medium">{t("courseLesson.linkedCourse")}</p>
                  <p className="text-muted-foreground">{course.title}</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium">{t("courseLesson.whatThisGives")}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {localizedLesson.objectives.map((objective) => (
                      <li key={objective} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium">{t("courseLesson.toolsUsed")}</p>
                  <div className="flex flex-wrap gap-2">
                    {localizedLesson.tools.map((tool) => (
                      <span key={tool} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </ScrollReveal>
        </section>

        <Divider />

        <section>
          <ScrollReveal>
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {t("courseLesson.actionItems")}
              </p>
              <h2 className="mb-4 text-3xl font-normal" style={{ letterSpacing: "-0.01em" }}>
                {t("courseLesson.whatToDo")}
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 md:grid-cols-2">
            {localizedLesson.actionItems.map((item, index) => (
              <ScrollReveal key={item} delay={index * 60}>
                <div className="rounded-card border border-border bg-card p-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {t("courseLesson.action")} {index + 1}
                  </p>
                  <p className="font-light leading-relaxed text-muted-foreground">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <Divider />

        <section>
          <ScrollReveal>
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {t("courseLesson.detailedNotes")}
              </p>
              <h2 className="mb-4 text-3xl font-normal" style={{ letterSpacing: "-0.01em" }}>
                {t("courseLesson.fullBreakdown")}
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {localizedLesson.sections.map((section, index) => (
              <ScrollReveal key={section.title} delay={index * 50}>
                <div className="rounded-card border border-border bg-card p-8">
                  <h3 className="mb-4 text-2xl font-medium">{section.title}</h3>
                  {section.description && (
                    <p className="mb-5 font-light leading-relaxed text-muted-foreground">
                      {section.description}
                    </p>
                  )}
                  {section.bullets && (
                    <ul className="space-y-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.numbered && (
                    <ol className="space-y-4">
                      {section.numbered.map((item, itemIndex) => (
                        <li key={item} className="flex items-start gap-4 text-muted-foreground">
                          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium text-foreground">
                            {itemIndex + 1}
                          </span>
                          <span className="pt-0.5">{item}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                  {section.note && (
                    <div className="mt-6 rounded-card border border-brass/25 bg-brass/5 p-5">
                      <p className="text-sm font-light leading-relaxed text-muted-foreground">
                        {section.note}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <Divider />

        <section>
          <ScrollReveal>
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {localizedLesson.promptSectionEyebrow ?? t("courseLesson.promptLibrary")}
              </p>
              <h2 className="mb-4 text-3xl font-normal" style={{ letterSpacing: "-0.01em" }}>
                {localizedLesson.promptSectionTitle ?? t("courseLesson.sourcePrompts")}
              </h2>
              {localizedLesson.promptSectionDescription && (
                <p className="font-light leading-relaxed text-muted-foreground">
                  {localizedLesson.promptSectionDescription}
                </p>
              )}
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {localizedLesson.prompts.map((prompt, index) => (
              <ScrollReveal key={prompt.title} delay={index * 70}>
                <div className="rounded-card border border-border bg-card p-8">
                  <h3 className="mb-3 text-2xl font-medium">{prompt.title}</h3>
                  {prompt.description && (
                    <p className="mb-5 font-light leading-relaxed text-muted-foreground">
                      {prompt.description}
                    </p>
                  )}
                  <pre className="overflow-x-auto rounded-card bg-muted/70 p-5 text-sm leading-relaxed text-foreground whitespace-pre-wrap">
                    <code>{prompt.content}</code>
                  </pre>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <Divider />

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <ScrollReveal>
            <div className="rounded-card border border-border bg-card p-8">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {t("courseLesson.assignment")}
              </p>
              <h2 className="mb-5 text-3xl font-normal" style={{ letterSpacing: "-0.01em" }}>
                {t("courseLesson.whatToBuild")}
              </h2>
              <ul className="space-y-3">
                {localizedLesson.assignment.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {localizedLesson.nextUp && (
            <ScrollReveal delay={80}>
              <div className="rounded-card border border-border bg-card p-8">
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {t("courseLesson.nextUp")}
                </p>
                <p className="font-light leading-relaxed text-muted-foreground">{localizedLesson.nextUp}</p>
              </div>
            </ScrollReveal>
          )}
        </section>
      </div>
    </main>
  );
};

export default CourseLesson;
