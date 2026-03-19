import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";
import { getCourseBySlug } from "@/data/coursePlatform";
import { getLessonByCourseAndSlug } from "@/data/courseLessons";
import { useLanguage } from "@/contexts/LanguageContext";

const CourseLesson = () => {
  const { slug, lessonSlug } = useParams<{ slug: string; lessonSlug: string }>();
  const course = getCourseBySlug(slug || "");
  const lesson = getLessonByCourseAndSlug(slug || "", lessonSlug || "");
  const { t } = useLanguage();

  if (!course || !lesson) {
    return <Navigate to="/courses" replace />;
  }

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
                {lesson.eyebrow}
              </p>
              <h1
                className="mb-4 text-4xl font-light md:text-5xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                {lesson.title}
              </h1>
              <p className="mb-6 text-xl font-light leading-relaxed text-muted-foreground">
                {lesson.summary}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-btn">
                  <Link to={`/courses/${course.slug}`}>{t("courseLesson.backToCourse")}</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-btn">
                  <a href={lesson.meetingUrl} target="_blank" rel="noreferrer">
                    {lesson.meetingLabel} <ExternalLink size={16} />
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
                    {lesson.objectives.map((objective) => (
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
                    {lesson.tools.map((tool) => (
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
            {lesson.actionItems.map((item, index) => (
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
            {lesson.sections.map((section, index) => (
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
                {t("courseLesson.promptLibrary")}
              </p>
              <h2 className="mb-4 text-3xl font-normal" style={{ letterSpacing: "-0.01em" }}>
                {t("courseLesson.sourcePrompts")}
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {lesson.prompts.map((prompt, index) => (
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
                {lesson.assignment.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {lesson.nextUp && (
            <ScrollReveal delay={80}>
              <div className="rounded-card border border-border bg-card p-8">
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {t("courseLesson.nextUp")}
                </p>
                <p className="font-light leading-relaxed text-muted-foreground">{lesson.nextUp}</p>
              </div>
            </ScrollReveal>
          )}
        </section>
      </div>
    </main>
  );
};

export default CourseLesson;
