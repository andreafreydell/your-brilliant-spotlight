import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Course, CourseTrack } from "@/data/coursePlatform";
import { useLanguage } from "@/contexts/LanguageContext";

const trackStyles: Record<CourseTrack, string> = {
  foundations: "bg-seafoam text-seafoam-foreground",
  advanced: "bg-lavender text-lavender-foreground",
};

interface CourseCardProps {
  course: Course;
  className?: string;
}

const CourseCard = ({ course, className }: CourseCardProps) => {
  const { t } = useLanguage();

  const trackLabels: Record<CourseTrack, string> = {
    foundations: t("courseCard.foundations"),
    advanced: t("courseCard.advancedWorkflow"),
  };

  return (
    <Link
      to={`/courses/${course.slug}`}
      className={cn(
        "group block rounded-card border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5",
        className
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-semibold", trackStyles[course.track])}>
          {trackLabels[course.track]}
        </span>
        <div className="text-right">
          <span
            className={cn(
              "text-sm font-medium",
              course.limitedTimeNote
                ? "text-brass"
                : course.isFreeAccess
                  ? "text-dusty-teal"
                  : "text-muted-foreground"
            )}
          >
            {course.priceLabel}
          </span>
          {course.limitedTimeNote && (
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-brass/80">{t("courseCard.limitedTime")}</p>
          )}
        </div>
      </div>
      {course.limitedTimeNote && (
        <p className="mb-4 inline-flex rounded-full bg-brass/10 px-3 py-1 text-xs font-medium text-brass">
          {course.limitedTimeNote}
        </p>
      )}
      {course.contextNote && (
        <p className="mb-4 inline-flex rounded-full bg-sky/15 px-3 py-1 text-xs font-medium text-sky-foreground">
          {course.contextNote}
        </p>
      )}
      <h3 className="mb-3 text-xl font-medium">{course.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{course.hook}</p>
      <div className="mb-5 flex flex-wrap gap-2">
        {course.tools.slice(0, 3).map((tool) => (
          <span key={tool} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
            {tool}
          </span>
        ))}
      </div>
      <span className="inline-flex items-center gap-2 text-sm font-medium text-dusty-teal transition-all group-hover:gap-3">
        {t("courseCard.explore")} <ArrowRight size={16} />
      </span>
    </Link>
  );
};

export default CourseCard;
