import StatusPanel from "./StatusPanel";

export default function Hero() {
  return (
    <section id="top" className="relative pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="container-sheet grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center">
        {/* Left: intro */}
        <div>
          {/* Photo callout */}
          <div className="inline-flex flex-col items-start mb-8">
            <div className="relative w-24 h-24 border border-line/30 overflow-hidden">
              <img
                src="/ather-photo.jpg"
                alt="Ather Sayed"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="font-mono text-[10px] tracking-[0.1em] text-ink-faint mt-1.5">
              AS-01
            </span>
          </div>

          <p className="eyebrow mb-3">Full-Stack Engineer</p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] font-semibold text-ink mb-6">
            Ather Sayed
          </h1>
          <p className="text-ink-dim text-base md:text-lg leading-relaxed max-w-lg mb-8">
            I build and ship full-stack production systems — from
            restaurant operations to clinic management to fraud detection —
            not just prototypes.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="font-mono text-xs tracking-[0.1em] uppercase bg-accent text-accent-ink px-5 py-3 hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs tracking-[0.1em] uppercase border border-line/30 text-ink-dim px-5 py-3 hover:text-ink hover:border-line/50 transition-colors"
            >
              Résumé
            </a>
            <a
              href="#contact"
              className="font-mono text-xs tracking-[0.1em] uppercase border border-line/30 text-ink-dim px-5 py-3 hover:text-ink hover:border-line/50 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Quick stat row */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 pt-8 border-t border-line/15">
            {[
              ["4", "Live apps"],
              ["48K", "Orders trained on"],
              ["5", "RBAC roles"],
              ["13", "Certifications"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="font-mono text-xl text-ink">{value}</div>
                <div className="text-[11px] text-ink-faint uppercase tracking-[0.08em]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: status panel */}
        <div>
          <StatusPanel />
        </div>
      </div>
    </section>
  );
}