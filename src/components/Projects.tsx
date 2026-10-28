type Project = {
  id: string;
  tag: string;
  date: string;
  name: string;
  summary: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  /** Work done for an employer: no public demo or code, shows a status badge instead. */
  work?: {
    company: string;
    status: string;
    note: string;
  };
};

const PROJECTS: Project[] = [
  {
    id: "clinic",
    tag: "PR-01",
    date: "JUN 2026",
    name: "Clinic System",
    summary:
      "Mobile-first clinic management system with a patient portal, staff dashboard, and AI-assisted clinical tools.",
    situation:
      "Clinics need to manage patients, appointments, and billing across different staff roles, while giving patients a simple self-service way to book and track care from their phone.",
    task: "Rebuild an earlier prototype into a proper mobile-first PWA that serves five distinct roles with the right access boundaries, plus AI tooling to speed up clinical work.",
    action:
      "Built a Django REST Framework + PostgreSQL backend with RBAC across 5 roles (admin, doctor, nurse, receptionist, patient), automatic double-booking prevention, and a billing workflow. Added an AI triage chat, Gemini-powered medical report summarization, and OCR document extraction. Shipped as an installable, offline-capable PWA and wrapped natively for Android via Capacitor, with the Django backend and React frontend deployed as separate Docker services on Railway.",
    result:
      "A deployed, installable mobile-first system live at clinic-system.up.railway.app, covering patient booking, staff workflows, billing, and AI-assisted triage.",
    tags: ["Django", "React", "PostgreSQL", "PWA", "Gemini"],
    demoUrl: "https://clinic-system.up.railway.app/",
    codeUrl: "https://github.com/ather8/clinic-system",
  },
  {
    id: "pizzastore",
    tag: "PR-02",
    date: "JUL 2026",
    name: "PizzaStore",
    summary:
      "Restaurant management system with demand forecasting and a natural-language query interface.",
    situation:
      "Restaurant managers need to plan inventory and staffing around demand, but usually rely on gut instinct — and non-technical staff can't query sales data directly without writing SQL.",
    task: "Build a role-aware restaurant management platform that forecasts demand from real order history and lets managers ask questions about the business in plain language, safely.",
    action:
      "Built a FastAPI + PostgreSQL backend with JWT auth and role-based access (Admin/Manager/Cashier), atomic bulk checkout, and weekly automatic model retraining via APScheduler. Trained an XGBoost forecasting model on 48,000 real orders (MAE 1.74 units after hyperparameter tuning) for 7-day recursive forecasting. Integrated Gemini for natural-language queries, constrained to pre-written SQL templates running against a read-only database user as a security layer.",
    result:
      "A deployed system where a manager can ask a plain-English question and get a safe, real answer, plus a working forecasting model that retrains itself weekly — live at pizza-store-frontend-iota.vercel.app.",
    tags: ["React", "FastAPI", "XGBoost", "Gemini API"],
    demoUrl: "https://pizza-store-frontend-iota.vercel.app",
    codeUrl: "https://github.com/ather8/Full-Stack-Pizza-Store",
  },
  {
    id: "fraud",
    tag: "PR-03",
    date: "APR 2026",
    name: "FraudWatch AI",
    summary:
      "Real-time credit card fraud detection combining a supervised and unsupervised model.",
    situation:
      "Catching fraudulent transactions requires balancing catching real fraud against overwhelming reviewers with false positives — and most public fraud datasets are extremely imbalanced.",
    task: "Build a fraud-detection system that uses labeled data properly rather than defaulting to a purely unsupervised approach, and expose it through a usable live-scoring interface.",
    action:
      "Trained an XGBoost model with class weighting as the primary signal on the ULB/Kaggle credit card fraud dataset (~0.17% fraud rate), using a time-based train/test split to avoid leakage. Paired it with an Isolation Forest as a secondary anomaly signal, served both via ONNX Runtime behind a FastAPI backend, with a React dashboard for live predictions.",
    result:
      "A system tuned to ~75% recall / ~85% precision at a 0.97 decision threshold on held-out data — a deliberate trade-off to catch more real fraud at the cost of more cases for analysts to review.",
    tags: ["React", "FastAPI", "XGBoost", "ONNX"],
    demoUrl: "https://fraudwatchai.up.railway.app/",
    codeUrl: "https://github.com/ather8/Fraud_Detection_System",
  },
];


const WORK_PROJECTS: Project[] = [
  {
    id: "momo",
    tag: "MT-01",
    date: "OCT 2026",
    name: "Momo — Messenger AI Sales Assistant",
    summary:
      "A sales assistant that quotes catalogue trips on Messenger, built around one rule: it never states a price it did not get from the ERP.",
    situation:
      "A sales assistant that talks to customers can invent or mis-add a number, and a wrong quote costs money and trust. The assistant also needed to reply in the customer's own language and get Messenger leads into the ERP.",
    task: "Make \"never quote a wrong price\" true in code rather than only in the prompt, and give the team a way to inspect real quotes before customers see them.",
    action:
      "Built an ERP pricing client that reads the exact price for a room type and travel date, and a price tool that turns a party into rooms and totals it in code. The model only writes the wording: a reply price check strips any amount that did not come from a verified quote. Anything unclear (ambiguous date, children, large groups, failed lookup) is refused and handed to a person. Added a first-quotes review that holds each quote for human approval, with a portal screen and command line, plus a language fix and a rule that pushes Messenger leads to the ERP. Every new behaviour ships switched off and fails closed.",
    result:
      "A pilot assistant with automated tests across the pricing, review and language layers, including a headless-browser test of the review screen and mutation checks that confirm the safety tests fail when a guard is removed. During the pilot, a person approves quotes before customers see them.",
    tags: ["PHP", "LLM guardrails", "ERP API", "Messenger", "Playwright"],
    work: {
      company: "Memphis Tours",
      status: "Pilot",
      note: "Internal company system — no public demo or code.",
    },
  },
  {
    id: "spam",
    tag: "MT-02",
    date: "OCT 2026",
    name: "Request Spam Detection",
    summary:
      "A multilingual classifier that flags junk, test and spam notes in inbound travel requests, tuned to avoid flagging real clients.",
    situation:
      "Inbound travel requests were mixed with test messages, keyboard mash, spam and cold vendor pitches. The ERP had no usable labels, and wrongly flagging a real traveller costs far more than letting junk through.",
    task: "Build a spam detector from scratch that is precision-first, works across languages without treating language or script as evidence of spam, and is evaluated honestly before anyone acts on it.",
    action:
      "Created the labels (LLM labelling plus hand-reviewed sets), then compared three approaches: rules only, TF-IDF + logistic regression, and multilingual embeddings + logistic regression. The simplest strong one won, with calibrated probabilities and a flag cut-off chosen for high precision. Added transparent safety rules, a short-note policy, a time-based split that keeps near-duplicate senders out of training, a sealed test set that can only be scored once, and a fairness audit across script, channel, country and device.",
    result:
      "A saved model and scoring pipeline with an evaluation write-up that is explicit about where the evidence is thin. It runs in shadow mode: verdicts are written to a file and nothing is deleted or acted on until they are compared with what reps actually do.",
    tags: ["Python", "scikit-learn", "Embeddings", "NLP", "Fairness audit"],
    work: {
      company: "Memphis Tours",
      status: "Shadow mode",
      note: "Internal company system — no public demo or code.",
    },
  },
  {
    id: "salesai",
    tag: "MT-03",
    date: "OCT 2026",
    name: "SalesAI — Draft Emails & Itinerary Offers",
    summary:
      "An assistant that drafts client emails and builds day-by-day itinerary offers for sales reps, with a deterministic gate in front of every draft.",
    situation:
      "Reps spend time hand-assembling package emails from the website's trip pages, and a model-written draft can mix languages, invent packages, add uninvited payment plans or leak internal costs.",
    task: "Work on the draft-email pipeline and the package-offer builder so that every client-facing draft is in the client's language, uses only real products and carries no internal figures. The model must never be able to change a fact.",
    action:
      "On the draft side: lead form in, typed facts out, scoped catalogue search, brief, draft, then a gate of always-run checks (one company, one language, no unsolicited payment breakdown or discounts, only real products, no internal costs, no placeholders, no invented credentials). On the offer side: a rep picks a trip by website link or program id, the service finds it in the website catalogue and lays out the whole offer in code as typed pieces. Dates, prices and which list an item sits in are written by code and never sent to the model. The model re-voices only the opening and closing, and every returned segment is compared to its original for the same numbers, links and claims. If the model step fails, the rep still gets the code-built offer.",
    result:
      "A deployed FastAPI service covered by automated rule tests, plus golden tests that run the real model and assert the one honest invariant for a non-deterministic system: no violation ever gets through.",
    tags: ["Python", "FastAPI", "Gemini / Vertex", "MySQL", "pytest"],
    work: {
      company: "Memphis Tours",
      status: "Internal",
      note: "Internal company system — no public demo or code.",
    },
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="relative border border-line/20 bg-bg-panel p-6 flex flex-col gap-4">
      <span className="reg-mark -top-px -left-px" />
      <span className="reg-mark -top-px -right-px rotate-90" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-ink-faint tracking-[0.1em]">
              {project.tag}
            </span>
            <span className="font-mono text-[11px] text-ink-faint/60 tracking-[0.1em]">
              · {project.date}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-ink mt-1">
            {project.name}
          </h3>
        </div>
        {project.work && (
          <span className="shrink-0 font-mono text-[10px] tracking-[0.08em] uppercase text-accent border border-accent/40 px-2 py-1">
            {project.work.status}
          </span>
        )}
      </div>

      <p className="text-sm text-ink-dim leading-relaxed">{project.summary}</p>

      <details className="group">
        <summary className="cursor-pointer font-mono text-[11px] tracking-[0.08em] uppercase text-ink-faint hover:text-ink-dim transition-colors list-none flex items-center gap-1.5">
          <span className="inline-block transition-transform group-open:rotate-90">
            ›
          </span>
          Situation &amp; Task
        </summary>
        <div className="mt-3 pl-4 border-l border-line/15 flex flex-col gap-3">
          <div>
            <span className="sheet-tag block mb-1">Situation</span>
            <p className="text-[13px] text-ink-dim leading-relaxed">
              {project.situation}
            </p>
          </div>
          <div>
            <span className="sheet-tag block mb-1">Task</span>
            <p className="text-[13px] text-ink-dim leading-relaxed">
              {project.task}
            </p>
          </div>
        </div>
      </details>

      <div>
        <span className="sheet-tag block mb-1">Action</span>
        <p className="text-[13px] text-ink-dim leading-relaxed">
          {project.action}
        </p>
      </div>
      <div>
        <span className="sheet-tag block mb-1">Result</span>
        <p className="text-[13px] text-ink-dim leading-relaxed">
          {project.result}
        </p>
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

      {project.work && (
        <p className="font-mono text-[11px] tracking-[0.04em] text-ink-faint mt-2 pt-4 border-t border-line/10">
          {project.work.company} · {project.work.note}
        </p>
      )}

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

function GroupHeading({ tag, title, blurb }: { tag: string; title: string; blurb: string }) {
  return (
    <div className="mb-5 flex flex-col gap-1">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[11px] text-accent tracking-[0.08em]">
          {tag}
        </span>
        <h3 className="text-base font-semibold text-ink">{title}</h3>
      </div>
      <p className="text-sm text-ink-faint max-w-2xl">{blurb}</p>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container-sheet">
        <h2 className="eyebrow mb-3">04 / Projects</h2>
        <div className="sheet-rule" />

        <GroupHeading
          tag="A"
          title="AI Specialist internship — Memphis Tours"
          blurb="Work from my current internship at Memphis Tours, where I've been an AI Specialist intern since 1 October 2026. These are internal company systems, so there are no public demos or code links."
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {WORK_PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <GroupHeading
          tag="B"
          title="Personal projects"
          blurb="Live, deployed full-stack apps I built on my own."
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
