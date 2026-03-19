import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";
import CourseCard from "@/components/CourseCard";
import ContactDialog from "@/components/ContactDialog";
import { getCourseBySlug, getRelatedCourses } from "@/data/coursePlatform";
import { getLessonsForCourse } from "@/data/courseLessons";
import { useLanguage } from "@/contexts/LanguageContext";

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");
  const { t } = useLanguage();

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const relatedCourses = getRelatedCourses(course);
  const lessons = getLessonsForCourse(course.slug);

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <Link
            to="/courses"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            {t("courseDetail.backToLibrary")}
          </Link>
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] items-start">
          <ScrollReveal>
            <div className="rounded-card border border-border bg-card p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">
                {course.track === "foundations" ? t("courseDetail.foundations") : t("courseDetail.advancedWorkflow")}
              </p>
              {course.limitedTimeNote && (
                <p className="mb-4 inline-flex rounded-full bg-brass/10 px-3 py-1 text-xs font-medium text-brass">
                  {course.limitedTimeNote}
                </p>
              )}
              <h1 className="text-4xl md:text-5xl font-light mb-4" style={{ letterSpacing: "-0.02em" }}>
                {course.title}
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-6">{course.hook}</p>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">{course.summary}</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-btn">
                  <a href={`mailto:andrea.f@grupoambiente.com.co?subject=${encodeURIComponent(`Interested in ${course.title}`)}`}>
                    {course.limitedTimeNote ? t("courseDetail.getFreeAccess") : t("courseDetail.requestAccess")}
                  </a>
                </Button>
                {lessons.length > 0 && (
                  <Button asChild variant="outline" size="lg" className="rounded-btn">
                    <Link to={`/courses/${course.slug}/lessons/${lessons[0].slug}`}>{t("courseDetail.viewCourseContent")}</Link>
                  </Button>
                )}
                <ContactDialog>
                  <Button variant="outline" size="lg" className="rounded-btn">
                    {t("nav.cta")}
                  </Button>
                </ContactDialog>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <aside className="rounded-card border border-border bg-card p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">{t("courseDetail.atAGlance")}</p>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium mb-2">{t("courseDetail.price")}</p>
                  <p className={course.limitedTimeNote ? "text-brass" : "text-muted-foreground"}>{course.priceLabel}</p>
                  {course.limitedTimeNote && (
                    <p className="mt-2 text-sm text-muted-foreground">{course.limitedTimeNote}</p>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">{t("courseDetail.bestFor")}</p>
                  <p className="text-muted-foreground">{course.audience}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">{t("courseDetail.tools")}</p>
                  <div className="flex flex-wrap gap-2">
                    {course.tools.map((tool) => (
                      <span key={tool} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">{t("courseDetail.prerequisites")}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {course.prerequisites.length ? (
                      course.prerequisites.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                          <span>{item}</span>
                        </li>
                      ))
                    ) : (
                      <li>{t("courseDetail.noPrerequisites")}</li>
                    )}
                  </ul>
                </div>
              </div>
            </aside>
          </ScrollReveal>
        </div>

        <Divider />

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] items-start">
          <ScrollReveal>
            <section>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">{t("courseDetail.modules")}</p>
              <div className="space-y-4">
                {course.modules.map((module, index) => (
                  <div key={module.title} className="rounded-card border border-border bg-card p-6">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-2">
                      {t("courseDetail.module")} {index + 1}
                    </p>
                    <h2 className="text-2xl font-medium mb-3">{module.title}</h2>
                    <p className="text-muted-foreground font-light leading-relaxed mb-4">{module.summary}</p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{t("courseDetail.output")}</span> {module.output}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <section>
              {lessons.length > 0 && (
                <div className="rounded-card border border-border bg-card p-8 mb-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">{t("courseDetail.courseContent")}</p>
                  <div className="space-y-4">
                    {lessons.map((lesson) => (
                      <div key={lesson.slug} className="rounded-card border border-border bg-background/70 p-5">
                        <h2 className="text-xl font-medium mb-2">{lesson.title}</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{lesson.summary}</p>
                        <Button asChild variant="outline" className="rounded-btn">
                          <Link to={`/courses/${course.slug}/lessons/${lesson.slug}`}>{t("courseDetail.openLesson")}</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">{t("courseDetail.walkAway")}</p>
              <div className="rounded-card border border-border bg-card p-8 mb-6">
                <ul className="space-y-3">
                  {course.outputs.map((output) => (
                    <li key={output} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-card border border-border bg-card p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">{t("courseDetail.needHelp")}</p>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  {t("courseDetail.needHelpDesc")}
                </p>
                <div className="flex flex-col gap-3">
                  <Button asChild className="rounded-btn">
                    <Link to="/courses">{t("courseDetail.viewAllCourses")}</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-btn">
                    <Link to="/services">{t("nav.cta")}</Link>
                  </Button>
                </div>
              </div>
            </section>
          </ScrollReveal>
        </div>

        {relatedCourses.length > 0 && (
          <>
            <Divider />
            <ScrollReveal>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">{t("courseDetail.related")}</p>
                  <h2 className="text-3xl font-normal" style={{ letterSpacing: "-0.01em" }}>
                    {t("courseDetail.moreFromTrack")}
                  </h2>
                </div>
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("courseDetail.viewFullLibrary")} <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedCourses.map((related, index) => (
                <ScrollReveal key={related.slug} delay={index * 60}>
                  <CourseCard course={related} />
                </ScrollReveal>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default CourseDetail;
