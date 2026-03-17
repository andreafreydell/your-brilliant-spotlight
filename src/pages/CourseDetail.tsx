import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";
import CourseCard from "@/components/CourseCard";
import ContactDialog from "@/components/ContactDialog";
import { getCourseBySlug, getRelatedCourses } from "@/data/coursePlatform";

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const relatedCourses = getRelatedCourses(course);

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <Link
            to="/courses"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Back to course library
          </Link>
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] items-start">
          <ScrollReveal>
            <div className="rounded-card border border-border bg-card p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">
                {course.track === "foundations" ? "Foundations" : "Advanced Workflow"}
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
                    {course.limitedTimeNote ? "Get Free Access" : "Request Access"}
                  </a>
                </Button>
                <ContactDialog>
                  <Button variant="outline" size="lg" className="rounded-btn">
                    Book Free Consultation
                  </Button>
                </ContactDialog>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <aside className="rounded-card border border-border bg-card p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">At a glance</p>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium mb-2">Price</p>
                  <p className={course.limitedTimeNote ? "text-brass" : "text-muted-foreground"}>{course.priceLabel}</p>
                  {course.limitedTimeNote && (
                    <p className="mt-2 text-sm text-muted-foreground">{course.limitedTimeNote}</p>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Best for</p>
                  <p className="text-muted-foreground">{course.audience}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {course.tools.map((tool) => (
                      <span key={tool} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Prerequisites</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {course.prerequisites.length ? (
                      course.prerequisites.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                          <span>{item}</span>
                        </li>
                      ))
                    ) : (
                      <li>No prerequisites.</li>
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
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">Modules</p>
              <div className="space-y-4">
                {course.modules.map((module, index) => (
                  <div key={module.title} className="rounded-card border border-border bg-card p-6">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-2">
                      Module {index + 1}
                    </p>
                    <h2 className="text-2xl font-medium mb-3">{module.title}</h2>
                    <p className="text-muted-foreground font-light leading-relaxed mb-4">{module.summary}</p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Output:</span> {module.output}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <section>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">What they walk away with</p>
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
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">Need help applying this?</p>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Start with this course if it solves the bottleneck you already know. If you need help choosing the next workflow
                  or deciding between a course and custom support, book the free consultation.
                </p>
                <div className="flex flex-col gap-3">
                  <Button asChild className="rounded-btn">
                    <Link to="/courses">View All Courses</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-btn">
                    <Link to="/services">Book Free Consultation</Link>
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
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">Related</p>
                  <h2 className="text-3xl font-normal" style={{ letterSpacing: "-0.01em" }}>
                    More from the same track
                  </h2>
                </div>
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  View full library <ArrowRight size={16} />
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
