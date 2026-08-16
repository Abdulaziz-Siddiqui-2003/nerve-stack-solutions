export default function AuroraBackground() {
  return (
    <>
      <div className="aurora-bg" aria-hidden="true">
        <div className="aurora-blob aurora-blob--amber" />
        <div className="aurora-blob aurora-blob--violet" />
        <div className="aurora-blob aurora-blob--ember" />
        <div className="aurora-blob aurora-blob--teal" />
      </div>
      <div className="grain-overlay" aria-hidden="true" />
    </>
  );
}
