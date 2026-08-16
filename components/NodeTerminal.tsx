const terminalRows = [
  "$ pipeline init --stack nextjs --automation n8n",
  "> syncing API gateways and CI checks",
  "> web -> data -> insight -> action",
  "> automations ready for deployment",
  "[web] auth . crm . seo . analytics",
  "[mobile] react native . flutter . release ops",
  "[ai] gemini . openai . model orchestration",
  "[ops] latency < 150ms . uptime > 99.9%",
];

export default function NodeTerminal() {
  return (
    <div className="relative w-full max-w-[620px]" aria-hidden="true">
      <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),transparent_45%)] blur-3xl" />
      <div className="relative overflow-hidden rounded-[28px] border border-border bg-background/90 shadow-[0_0_0_1px_rgba(39,39,42,0.8),0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-muted">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="h-2.5 w-2.5 rounded-full bg-subtle" />
          <span className="ml-4 font-mono">system://nerve-stack</span>
        </div>

        <div className="grid gap-6 p-5 md:p-7">
          <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted">
            <span className="rounded-full border border-border bg-card px-2 py-1">flow</span>
            <span className="rounded-full border border-border bg-card px-2 py-1">systems</span>
            <span className="rounded-full border border-border bg-card px-2 py-1">n8n</span>
          </div>

          <div className="grid gap-4 md:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-2xl border border-border bg-card p-4 font-mono text-xs leading-6 text-foreground shadow-inner shadow-accent/5">
              {terminalRows.map((row) => (
                <div key={row} className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_10px_rgba(245,158,11,0.75)]" />
                  <span className="text-foreground/90">{row}</span>
                </div>
              ))}
            </div>

            <div className="relative flex min-h-[220px] items-center justify-center rounded-2xl border border-border bg-surface p-4">
              <div className="absolute inset-5 rounded-full border border-dashed border-accent/30" />
              <div className="absolute left-10 top-10 h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
              <div className="absolute right-12 top-12 h-3 w-3 rounded-full bg-foreground" />
              <div className="absolute left-14 bottom-12 h-3 w-3 rounded-full bg-foreground" />
              <div className="absolute right-14 bottom-16 h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
              <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-card" />
              <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_18px_rgba(245,158,11,0.9)]" />
              <div className="absolute left-1/2 top-1/2 h-[2px] w-[140px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent/0 via-accent to-accent/0" />
              <div className="absolute left-1/2 top-1/2 h-[140px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-accent/0 via-accent to-accent/0" />
              <div className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                <div className="text-foreground">signal</div>
                <div className="mt-1 text-accent">active</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
