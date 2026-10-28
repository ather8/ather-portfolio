type Role = {
  tag: string;
  title: string;
  company: string;
  location: string;
  range: string;
  current?: boolean;
  summary: string;
  points: string[];
  stack: string[];
};

const ROLES: Role[] = [
  {
    tag: "EX-01",
    title: "AI Specialist (Intern)",
    company: "Memphis Tours",
    location: "Egypt",
    range: "1 Oct 2026 — Present",
    current: true,
    summary:
      "Building AI features for a travel company's sales operation, where a wrong price or an invented package costs real money and trust.",
    points: [
      "Messenger sales assistant: ERP-backed pricing, a reply price check that strips any amount the ERP did not provide, and a human review of the first quotes before customers see them.",
      "Request spam detector: a multilingual embeddings classifier, precision-first, evaluated on a sealed test set and a fairness audit, running in shadow mode.",
      "SalesAI draft emails and itinerary offers: a deterministic output gate and a code-built offer in which the model can only re-word the voice, never the facts.",
    ],
    stack: ["Python", "FastAPI", "PHP", "Embeddings", "Gemini", "MySQL"],
  },
  {
    tag: "EX-02",
    title: "Independent ML & Full-Stack Specialization",
    company: "Self-directed",
    location: "Cairo, Egypt",
    range: "Dec 2025 — Present",
    summary:
      "Full-time study and building after military service: 19 certifications and three deployed full-stack AI projects.",
    points: [
      "Machine Learning and Deep Learning coursework from Stanford, DeepLearning.AI, IBM and Meta.",
      "Shipped PizzaStore, Clinic System and FraudWatch AI end to end, from data and model training to containerized deployment.",
    ],
    stack: ["XGBoost", "PyTorch", "React", "Django", "Docker"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container-sheet">
        <h2 className="eyebrow mb-3">02 / Experience</h2>
        <div className="sheet-rule" />

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line/25" />

          <ul className="flex flex-col gap-12">
            {ROLES.map((role) => (
              <li key={role.tag} className="relative pl-10">
                <span
                  className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border bg-bg ${
                    role.current ? "border-accent" : "border-line/50"
                  }`}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                  <h3 className="text-base font-semibold text-ink">
                    {role.title}
                  </h3>
                  <span className="font-mono text-[11px] tracking-[0.08em] text-ink-faint">
                    {role.range}
                  </span>
                </div>
                <p className="font-mono text-[11px] tracking-[0.06em] text-accent mb-3">
                  {role.company} · {role.location}
                </p>
                <p className="text-sm text-ink-dim leading-relaxed mb-3">
                  {role.summary}
                </p>
                <ul className="flex flex-col gap-2 mb-4">
                  {role.points.map((pt) => (
                    <li
                      key={pt}
                      className="text-[13px] text-ink-dim leading-relaxed pl-4 relative"
                    >
                      <span className="absolute left-0 text-ink-faint">›</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {role.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-[0.06em] uppercase text-ink-faint border border-line/20 px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10">
          <a
            href="#projects"
            className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-dim hover:text-accent transition-colors"
          >
            See the three internship projects →
          </a>
        </p>
      </div>
    </section>
  );
}
