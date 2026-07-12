type App = {
  name: string;
  tag: string;
  live: boolean;
};

const APPS: App[] = [
  { name: "Clinic System", tag: "CL-01", live: true },
  { name: "PizzaStore", tag: "PZ-02", live: true },
  { name: "Fraud Detection", tag: "FD-03", live: true },
  { name: "Game Hub", tag: "GH-04", live: true },
];

function Dot({ live }: { live: boolean }) {
  return (
    <span className="relative inline-flex items-center justify-center w-2.5 h-2.5">
      {live && (
        <span className="absolute inline-flex w-full h-full rounded-full bg-accent animate-pulse2" />
      )}
      <span
        className={`relative inline-flex w-1.5 h-1.5 rounded-full ${
          live ? "bg-accent" : "bg-ink-faint"
        }`}
      />
    </span>
  );
}

export default function StatusPanel() {
  return (
    <div className="relative border border-line/25 bg-bg-panel">
      <span className="reg-mark -top-px -left-px" />
      <span className="reg-mark -top-px -right-px rotate-90" />
      <span className="reg-mark -bottom-px -left-px -rotate-90" />
      <span className="reg-mark -bottom-px -right-px rotate-180" />

      <div className="flex items-center justify-between px-4 py-2.5 border-b border-line/15">
        <span className="sheet-tag">SYS / STATUS</span>
        <span className="sheet-tag">{APPS.length} NODES</span>
      </div>

      <ul>
        {APPS.map((app, i) => (
          <li
            key={app.tag}
            className={`flex items-center justify-between px-4 py-3 ${
              i !== APPS.length - 1 ? "border-b border-line/10" : ""
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <Dot live={app.live} />
              <span className="font-mono text-[13px] text-ink truncate">{app.name}</span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-[10px] text-ink-faint">{app.tag}</span>
              {app.live && (
                <span className="font-mono text-[10px] tracking-[0.1em] text-accent">LIVE</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}