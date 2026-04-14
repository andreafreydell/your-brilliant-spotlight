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
  getCourses,
  getCoursesByTrack,
  getLimitedTimeCourses,
  offers,
  type CourseTrack,
} from "@/data/coursePlatform";
import { useLanguage } from "@/contexts/LanguageContext";

const Courses = () => {
  const { t, language } = useLanguage();
  const [activeTrack, setActiveTrack] = useState<CourseTrack | "all">("all");
  const allCourses = useMemo(() => getCourses(language), [language]);
  const visibleCourses = useMemo(() => getCoursesByTrack(activeTrack, language), [activeTrack, language]);
  const limitedTimeCourses = getLimitedTimeCourses(language);

  const filters: Array<{ key: CourseTrack | "all"; labelKey: string }> = [
    { key: "all", labelKey: "courses.filter.all" },
    { key: "foundations", labelKey: "courses.filter.foundations" },
    { key: "advanced", labelKey: "courses.filter.advanced" },
  ];

  return (
    <main className="px-6 pt-24 pb-16">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {t("courses.label")}
            </p>
            <h1 className="mb-4 text-4xl font-light md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
              {t("courses.title")}
            </h1>
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              {t("courses.subtitle")}
            </p>
          </div>
        </ScrollReveal>


        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("courses.browse.label")}</p>
              <h2 className="text-3xl font-normal" style={{ letterSpacing: "-0.01em" }}>
                {allCourses.length} {t("courses.browse.suffix")}
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
                  {t(filter.labelKey)}
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
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{t("courses.recommendation.label")}</p>
            <h2 className="mb-4 text-3xl font-normal" style={{ letterSpacing: "-0.01em" }}>
              {t("courses.recommendation.title")}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light leading-relaxed text-muted-foreground">
              {t("courses.recommendation.subtitle")}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-btn">
                <Link to="/">{t("courses.recommendation.backHome")}</Link>
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

export default Courses;
