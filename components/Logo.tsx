export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="28"
      height="28"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0.5" y="0.5" width="31" height="31" rx="8" fill="#111114" stroke="#27272A" />
      <circle cx="9" cy="10" r="2.4" fill="#FAFAFA" />
      <circle cx="23" cy="10" r="2.4" fill="#F59E0B" />
      <circle cx="16" cy="22" r="2.4" fill="#FAFAFA" />
      <path
        d="M9 10L23 10M9 10L16 22M23 10L16 22"
        stroke="#F59E0B"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}
