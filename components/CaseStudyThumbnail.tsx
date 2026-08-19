const accentHex: Record<string, string> = {
  amber: "#dc2626",
  violet: "#818cf8",
  teal: "#2dd4bf",
  green: "#22c55e",
};

/**
 * Themed abstract illustration used as a case-study thumbnail when no real
 * screenshot is available yet. Purely decorative (aria-hidden), never
 * implies it's an actual product screenshot.
 */
export default function CaseStudyThumbnail({
  slug,
  accent,
  className,
}: {
  slug: string;
  accent: "amber" | "violet" | "teal" | "green";
  className?: string;
}) {
  const color = accentHex[accent];

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        background: `radial-gradient(circle at 15% 10%, ${color}26, transparent 55%), linear-gradient(135deg, #150f0e, #0a0605)`,
      }}
    >
      <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`grid-fade-${slug}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.35" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {[...Array(9)].map((_, i) => (
          <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" stroke={color} strokeOpacity="0.08" />
        ))}
        {[...Array(7)].map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} stroke={color} strokeOpacity="0.08" />
        ))}

        {slug === "inventrack" && (
          <g>
            <rect x="70" y="150" width="60" height="60" rx="6" fill="none" stroke={color} strokeWidth="2" strokeOpacity="0.7" />
            <rect x="150" y="110" width="60" height="100" rx="6" fill="none" stroke={color} strokeWidth="2" strokeOpacity="0.9" />
            <rect x="230" y="80" width="60" height="130" rx="6" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="2" />
            <rect x="310" y="130" width="55" height="80" rx="6" fill="none" stroke={color} strokeWidth="2" strokeOpacity="0.6" />
            <circle cx="260" cy="60" r="5" fill={color} />
            <path d="M100 150 L100 210 M180 110 L180 210 M260 80 L260 210 M337 130 L337 210" stroke={color} strokeOpacity="0.25" />
          </g>
        )}

        {slug === "aigros" && (
          <g>
            <path
              d="M40 210 Q120 90 200 170 T360 100"
              fill="none"
              stroke={color}
              strokeWidth="2.5"
              strokeOpacity="0.8"
              strokeLinecap="round"
            />
            <circle cx="200" cy="170" r="6" fill={color} />
            <circle cx="120" cy="120" r="4" fill={color} fillOpacity="0.7" />
            <circle cx="280" cy="130" r="4" fill={color} fillOpacity="0.7" />
            <path d="M200 170 L200 230 M170 210 Q200 175 230 210" stroke={color} strokeOpacity="0.5" strokeWidth="2" fill="none" />
            <rect x="30" y="40" width="46" height="30" rx="4" fill="none" stroke={color} strokeWidth="1.5" strokeOpacity="0.55" />
            <path d="M36 55 h34 M36 62 h20" stroke={color} strokeOpacity="0.4" />
          </g>
        )}

        {slug === "intellilearn" && (
          <g>
            <rect x="90" y="70" width="150" height="18" rx="4" fill={color} fillOpacity="0.18" />
            <rect x="90" y="100" width="110" height="18" rx="4" fill={color} fillOpacity="0.28" />
            <rect x="90" y="130" width="130" height="18" rx="4" fill={color} fillOpacity="0.12" />
            <circle cx="300" cy="110" r="46" fill="none" stroke={color} strokeWidth="2" strokeOpacity="0.6" />
            <path d="M282 110 l12 12 l24 -24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M90 190 L200 190 M90 210 L170 210" stroke={color} strokeOpacity="0.3" strokeWidth="2" />
          </g>
        )}

        {slug === "fyp-management" && (
          <g>
            <circle cx="90" cy="150" r="16" fill="none" stroke={color} strokeWidth="2" strokeOpacity="0.8" />
            <circle cx="200" cy="90" r="16" fill={color} fillOpacity="0.16" stroke={color} strokeWidth="2" />
            <circle cx="200" cy="210" r="16" fill="none" stroke={color} strokeWidth="2" strokeOpacity="0.6" />
            <circle cx="310" cy="150" r="16" fill="none" stroke={color} strokeWidth="2" strokeOpacity="0.8" />
            <path d="M106 150 L184 96 M106 150 L184 204 M216 96 L294 150 M216 204 L294 150" stroke={color} strokeOpacity="0.35" strokeWidth="1.5" />
          </g>
        )}

        <rect x="0" y="0" width="400" height="300" fill={`url(#grid-fade-${slug})`} />
      </svg>
    </div>
  );
}
