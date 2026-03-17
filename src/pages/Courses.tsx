import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";
import CourseCard from "@/components/CourseCard";
import OfferCard from "@/components/OfferCard";
import ContactDialog from "@/components/ContactDialog";
import {
  courses,
  getCoursesByTrack,
  getLimitedTimeCourses,
  offers,
  type CourseTrack,
} from "@/data/coursePlatform";

const filters: Array<{ key: CourseTrack | "all"; label: string }> = [
  { key: "all", label: "All" },
  { key: "foundations", label: "Foundations" },
  { key: "advanced", label: "Advanced Workflows" },
];

const Courses = () => {
  const [activeTrack, setActiveTrack] = useState<CourseTrack | "all">("all");
  const visibleCourses = useMemo(() => getCoursesByTrack(activeTrack), [activeTrack]);
  const limitedTimeCourses = getLimitedTimeCourses();

  return (
    <main className="px-6 pt-24 pb-16">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Course Library
            </p>
            <h1 className="mb-4 text-4xl font-light md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
              Choose the workflow you want live next.
            </h1>
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              Start with the foundations if you want stack clarity and cleaner systems. Move into the
              advanced workflows when you are ready to ship content, image, and website outputs faster.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={70}>
          <div className="mb-16 rounded-card border border-brass/35 bg-brass/5 p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.22em] text-brass">Limited-Time Access</p>
                  <h2 className="mb-2 text-2xl font-medium">Currently free for a limited time</h2>
                  <p className="font-light leading-relaxed text-muted-foreground">
                    {limitedTimeCourses.map((course) => course.title).join(" + ")}
                  </p>
                </div>
              </div>
              <Button asChild variant="outline" className="rounded-btn">
                <Link to="/">See the Course Path</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="mb-16 grid gap-6 lg:grid-cols-3">
            {offers.map((offer) => (
              <OfferCard key={offer.slug} offer={offer} />
            ))}
          </div>
        </ScrollReveal>

        <Divider />

        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">Browse Products</p>
              <h2 className="text-3xl font-normal" style={{ letterSpacing: "-0.01em" }}>
                {courses.length} courses across foundations and advanced workflows
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveTrack(filter.key)}
                  className={`rounded-btn px-4 py-2 text-sm font-medium transition-colors ${
                    activeTrack === filter.key
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleCourses.map((course, index) => (
            <ScrollReveal key={course.slug} delay={index * 50}>
              <CourseCard course={course} />
            </ScrollReveal>
          ))}
        </div>

        <Divider />

        <ScrollReveal>
          <div className="rounded-card border border-border bg-card p-8 text-center md:p-10">
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">Need a recommendation?</p>
            <h2 className="mb-4 text-3xl font-normal" style={{ letterSpacing: "-0.01em" }}>
              Start with one workflow or book help choosing the right path.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light leading-relaxed text-muted-foreground">
              If you already know the bottleneck, pick the course that solves it. If not, the free consultation
              will help you decide whether to start with a course, membership, or a custom build.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-btn">
                <Link to="/">Back to Homepage</Link>
              </Button>
              <ContactDialog>
                <Button variant="outline" size="lg" className="rounded-btn">
                  Book Free Consultation
                </Button>
              </ContactDialog>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
};

export default Courses;
