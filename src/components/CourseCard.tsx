import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Course, CourseTrack } from "@/data/coursePlatform";

const trackStyles: Record<CourseTrack, string> = {
  foundations: "bg-seafoam text-seafoam-foreground",
  advanced: "bg-lavender text-lavender-foreground",
};

const trackLabels: Record<CourseTrack, string> = {
  foundations: "Foundations",
  advanced: "Advanced Workflow",
};

interface CourseCardProps {
  course: Course;
  className?: string;
}

const CourseCard = ({ course, className }: CourseCardProps) => (
  <Link
    to={`/courses/${course.slug}`}
    className={cn(
      "group block rounded-card border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5",
      className
    )}
  >
    <div className="flex items-start justify-between gap-4 mb-4">
      <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-semibold", trackStyles[course.track])}>
        {trackLabels[course.track]}
      </span>
      <div className="text-right">
        <span className={cn("text-sm font-medium", course.limitedTimeNote ? "text-brass" : "text-muted-foreground")}>
          {course.priceLabel}
        </span>
        {course.limitedTimeNote && (
          <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-brass/80">Limited time</p>
        )}
      </div>
    </div>
    {course.limitedTimeNote && (
      <p className="mb-4 inline-flex rounded-full bg-brass/10 px-3 py-1 text-xs font-medium text-brass">
        {course.limitedTimeNote}
      </p>
    )}
    <h3 className="text-xl font-medium mb-3">{course.title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{course.hook}</p>
    <div className="flex flex-wrap gap-2 mb-5">
      {course.tools.slice(0, 3).map((tool) => (
        <span key={tool} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
          {tool}
        </span>
      ))}
    </div>
    <span className="inline-flex items-center gap-2 text-sm font-medium text-dusty-teal transition-all group-hover:gap-3">
      Explore course <ArrowRight size={16} />
    </span>
  </Link>
);

export default CourseCard;
