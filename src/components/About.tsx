const CAPABILITIES = [
  {
    code: "FS",
    title: "Full-Stack Delivery",
    desc: "React/TypeScript frontends wired to real backends — auth, RBAC, databases, deployment — not just UI mockups.",
  },
  {
    code: "BE",
    title: "Backend & Systems",
    desc: "API design, role-based access control, data pipelines — built for systems that run in production, not demos.",
  },
  {
    code: "AI",
    title: "Applied ML/AI",
    desc: "Forecasting (XGBoost), natural-language querying (Gemini), and fraud-detection models wired into live products.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-sheet">
        <p className="eyebrow mb-3">01 / About</p>
        <div className="sheet-rule" />

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink leading-snug mb-6">
              I build systems people actually use —
              <br className="hidden md:block" />
              not just proof-of-concepts.
            </h2>
            <p className="text-ink-dim leading-relaxed mb-4">
              Since completing military service in December 2025, I've shipped
              three live production applications, each pairing a real full-stack
              foundation with production AI features: a restaurant management
              system with XGBoost demand forecasting and a Gemini-powered query
              interface, a mobile-first clinic management system with
              AI-assisted triage and OCR, and a real-time fraud-detection system
              combining a supervised model with an anomaly detector. Each one
              shipped, deployed, and used — not left as a notebook or a local
              demo.
            </p>
            <p className="text-ink-dim leading-relaxed">
              I care about the full lifecycle: data modeling, access control,
              API design, frontend polish, and deployment. I'd rather ship one
              thing that works end-to-end than ten things that only work on my
              machine.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.code}
                className="border border-line/20 bg-bg-panel p-5 flex flex-col gap-3"
              >
                <span className="font-mono text-xs text-accent tracking-[0.1em]">
                  {cap.code}
                </span>
                <h3 className="text-sm font-semibold text-ink">{cap.title}</h3>
                <p className="text-[13px] text-ink-faint leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
