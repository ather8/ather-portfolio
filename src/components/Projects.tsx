type Project = {
  id: string;
  tag: string;
  name: string;
  summary: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
};

const PROJECTS: Project[] = [
  {
    id: "clinic",
    tag: "PR-01",
    name: "Clinic System",
    summary: "Mobile-first clinic management system with a patient portal, staff dashboard, and AI-assisted clinical tools.",
    situation:
      "Clinics need to manage patients, appointments, and billing across different staff roles, while giving patients a simple self-service way to book and track care from their phone.",
    task:
      "Rebuild an earlier prototype into a proper mobile-first PWA that serves five distinct roles with the right access boundaries, plus AI tooling to speed up clinical work.",
    action:
      "Built a Django REST Framework + PostgreSQL backend with JWT auth and role-based access across 5 roles (admin, doctor, nurse, receptionist, patient), automatic double-booking prevention, and a billing workflow. Added an AI triage chat, AI report summarization via Gemini, and OCR document extraction. Shipped as an installable PWA with a React + TypeScript + Vite frontend.",
    result:
      "A deployed, installable mobile-first system live at clinic-system.up.railway.app, covering patient booking, staff workflows, and AI-assisted triage.",
    tags: ["Django", "React", "PostgreSQL", "PWA", "Gemini"],
    demoUrl: "https://clinic-system.up.railway.app/",
    codeUrl: "https://github.com/ather8/clinic-system",
  },
  {
    id: "pizzastore",
    tag: "PR-02",
    name: "PizzaStore",
    summary: "Restaurant management system with demand forecasting and a natural-language query interface.",
    situation:
      "Restaurant managers need to plan inventory and staffing around demand, but usually rely on gut instinct — and non-technical staff can't query sales data directly without writing SQL.",
    task:
      "Build a role-aware restaurant management platform that forecasts demand from real order history and lets managers ask questions about the business in plain language, safely.",
    action:
      "Built a FastAPI + PostgreSQL backend with JWT auth and role-based access (Admin/Manager/Cashier), atomic bulk checkout, and weekly automatic model retraining via APScheduler. Trained an XGBoost forecasting model on 48,000 real orders (MAE 1.74 units after hyperparameter tuning) for 7-day recursive forecasting. Integrated Gemini for natural-language queries, constrained to pre-written SQL templates running against a read-only database user as a security layer.",
    result:
      "A deployed system where a manager can ask a plain-English question and get a safe, real answer, plus a working forecasting model that retrains itself weekly — live at pizza-store-frontend-iota.vercel.app.",
    tags: ["React", "FastAPI", "XGBoost", "Gemini API"],
    demoUrl: "https://pizza-store-frontend-ruby.vercel.app",
    codeUrl: "https://github.com/ather8/Full-Stack-Pizza-Store",
  },
  {
    id: "fraud",
    tag: "PR-03",
    name: "FraudWatch AI",
    summary: "Real-time credit card fraud detection combining a supervised and unsupervised model.",
    situation:
      "Catching fraudulent transactions requires balancing catching real fraud against overwhelming reviewers with false positives — and most public fraud datasets are extremely imbalanced.",
    task:
      "Build a fraud-detection system that uses labeled data properly rather than defaulting to a purely unsupervised approach, and expose it through a usable live-scoring interface.",
    action:
      "Trained an XGBoost model with class weighting as the primary signal on the ULB/Kaggle credit card fraud dataset (~0.17% fraud rate), using a time-based train/test split to avoid leakage. Paired it with an Isolation Forest as a secondary anomaly signal, served both via ONNX Runtime behind a FastAPI backend, with a React dashboard for live predictions.",
    result:
      "A system tuned to ~75% recall / ~85% precision at a 0.97 decision threshold on held-out data — a deliberate trade-off to catch more real fraud at the cost of more cases for analysts to review.",
    tags: ["React", "FastAPI", "XGBoost", "ONNX"],
    demoUrl: "https://fraudwatchai.up.railway.app",
    codeUrl: "https://github.com/ather8/Fraud_Detection_System",
  },
  {
    id: "gamehub",
    tag: "PR-04",
    name: "Game Hub",
    summary: "Frontend showcase pulling live game data from an external API.",
    situation:
      "A portfolio benefits from at least one project that's purely about frontend craft — clean UI, responsive layout, and working with external data — separate from the backend-heavy projects.",
    task:
      "Build a polished, responsive game-browsing app that fetches and displays real game data, with reusable, maintainable components.",
    action:
      "Built with React, TypeScript, and Vite, styled with Tailwind, fetching dynamic game data from an external API through modular, reusable components, with ESLint/Prettier enforced for code quality.",
    result:
      "A deployed, responsive frontend showcase demonstrating clean component architecture and API-driven UI, live on Vercel.",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    demoUrl: "https://game-hub-six-tau.vercel.app/",
    codeUrl: "https://github.com/ather8/game-hub",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="relative border border-line/20 bg-bg-panel p-6 flex flex-col gap-4">
      <span className="reg-mark -top-px -left-px" />
      <span className="reg-mark -top-px -right-px rotate-90" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-[11px] text-ink-faint tracking-[0.1em]">
            {project.tag}
          </span>
          <h3 className="text-lg font-semibold text-ink mt-1">{project.name}</h3>
        </div>
      </div>

      <p className="text-sm text-ink-dim leading-relaxed">{project.summary}</p>

      <details className="group">
        <summary className="cursor-pointer font-mono text-[11px] tracking-[0.08em] uppercase text-ink-faint hover:text-ink-dim transition-colors list-none flex items-center gap-1.5">
          <span className="inline-block transition-transform group-open:rotate-90">›</span>
          Situation &amp; Task
        </summary>
        <div className="mt-3 pl-4 border-l border-line/15 flex flex-col gap-3">
          <div>
            <span className="sheet-tag block mb-1">Situation</span>
            <p className="text-[13px] text-ink-dim leading-relaxed">{project.situation}</p>
          </div>
          <div>
            <span className="sheet-tag block mb-1">Task</span>
            <p className="text-[13px] text-ink-dim leading-relaxed">{project.task}</p>
          </div>
        </div>
      </details>

      <div>
        <span className="sheet-tag block mb-1">Action</span>
        <p className="text-[13px] text-ink-dim leading-relaxed">{project.action}</p>
      </div>
      <div>
        <span className="sheet-tag block mb-1">Result</span>
        <p className="text-[13px] text-ink-dim leading-relaxed">{project.result}</p>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] tracking-[0.06em] uppercase text-ink-faint border border-line/20 px-2 py-1"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-2.5 mt-2">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-[0.08em] uppercase bg-accent text-accent-ink px-4 py-3 text-center hover:opacity-90 transition-opacity min-h-[44px] flex items-center justify-center"
          >
            Live Demo
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-[0.08em] uppercase border border-line/25 text-ink-dim px-4 py-3 text-center hover:text-ink hover:border-line/40 transition-colors min-h-[44px] flex items-center justify-center"
          >
            View Code
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container-sheet">
        <p className="eyebrow mb-3">03 / Projects</p>
        <div className="sheet-rule" />

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}