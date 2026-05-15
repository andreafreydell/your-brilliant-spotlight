// Hand-drawn decorative SVG scribbles and arrows
// Colors pull from the warm pastel palette (seafoam, blush-peach, sky, brass, lavender, tag-red)

type SvgProps = { className?: string; style?: React.CSSProperties };

export const ScribbleCircle = ({ className, style }: SvgProps) => (
  <svg viewBox="0 0 120 120" className={className} style={style} fill="none" aria-hidden>
    <path
      d="M60 12 C 30 14, 14 38, 18 64 C 22 92, 50 108, 78 104 C 104 100, 114 76, 108 52 C 102 28, 80 14, 56 18"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="0"
    />
  </svg>
);

export const ScribbleUnderline = ({ className, style }: SvgProps) => (
  <svg viewBox="0 0 200 24" className={className} style={style} fill="none" aria-hidden>
    <path
      d="M4 14 C 40 4, 80 22, 120 10 C 150 2, 180 18, 196 8"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const ScribbleArrow = ({ className, style }: SvgProps) => (
  <svg viewBox="0 0 140 80" className={className} style={style} fill="none" aria-hidden>
    <path
      d="M6 14 C 30 6, 60 8, 84 28 C 100 42, 108 58, 110 70"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M96 56 L 110 70 L 124 58"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ScribbleStar = ({ className, style }: SvgProps) => (
  <svg viewBox="0 0 60 60" className={className} style={style} fill="none" aria-hidden>
    <path d="M30 6 L 30 54 M 6 30 L 54 30 M 13 13 L 47 47 M 47 13 L 13 47" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const ScribbleSquiggle = ({ className, style }: SvgProps) => (
  <svg viewBox="0 0 160 30" className={className} style={style} fill="none" aria-hidden>
    <path
      d="M4 15 Q 20 2, 36 15 T 68 15 T 100 15 T 132 15 T 156 15"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

type StickyProps = {
  children: React.ReactNode;
  color?: "yellow" | "peach" | "seafoam" | "sky" | "lavender";
  rotate?: number;
  className?: string;
  style?: React.CSSProperties;
};

const stickyColors: Record<NonNullable<StickyProps["color"]>, string> = {
  yellow: "bg-brass/30 text-ink",
  peach: "bg-blush-peach text-blush-peach-foreground",
  seafoam: "bg-seafoam text-seafoam-foreground",
  sky: "bg-sky text-sky-foreground",
  lavender: "bg-lavender text-lavender-foreground",
};

export const StickyNote = ({
  children,
  color = "yellow",
  rotate = -3,
  className = "",
  style,
}: StickyProps) => (
  <div
    className={`pointer-events-none select-none px-4 py-3 text-xs font-medium leading-snug shadow-[2px_4px_10px_-2px_rgba(0,0,0,0.15)] ${stickyColors[color]} ${className}`}
    style={{
      transform: `rotate(${rotate}deg)`,
      fontFamily: '"Caveat", "Josefin Sans", cursive',
      maxWidth: "180px",
      ...style,
    }}
    aria-hidden
  >
    {children}
  </div>
);
