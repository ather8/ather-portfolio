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
    desc: "LLM guardrails, embeddings classifiers, forecasting (XGBoost) and fraud detection, wired into real products and evaluated honestly.",
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
              three live full-stack applications — a restaurant system with
              XGBoost demand forecasting and a Gemini query interface, a
              mobile-first clinic system with AI triage and OCR, and a
              real-time fraud detector — each deployed and used, not left as a
              notebook.
            </p>
            <p className="text-ink-dim leading-relaxed mb-4">
              Since 1 October 2026 I've been working as an AI Specialist intern at
              Memphis Tours, applying that to a travel company's sales work: a
              Messenger assistant that may only quote prices the ERP provided,
              a precision-first spam detector for inbound requests, and a
              draft-email and itinerary-offer assistant where a deterministic
              gate sits in front of every draft. The lesson that keeps
              repeating: the model writes the words, code owns the facts.
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
