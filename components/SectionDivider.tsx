/** Full-bleed section separator: spans the true viewport width and fades out at both edges. */
export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="h-px w-screen"
      style={{
        marginLeft: "calc(50% - 50vw)",
        background:
          "linear-gradient(90deg, transparent 0%, var(--border-strong) 20%, var(--border-strong) 80%, transparent 100%)",
      }}
    />
  );
}
