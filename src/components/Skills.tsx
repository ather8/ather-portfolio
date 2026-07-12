type SkillLevel = "Core" | "Proficient" | "Familiar";

type Skill = {
  name: string;
  level: SkillLevel;
};

type SkillCategory = {
  tag: string;
  title: string;
  skills: Skill[];
};

const LEVEL_STRENGTH: Record<SkillLevel, number> = {
  Core: 3,
  Proficient: 2,
  Familiar: 1,
};

const CATEGORIES: SkillCategory[] = [
  {
    tag: "01",
    title: "Frontend",
    skills: [
      { name: "React", level: "Core" },
      { name: "TypeScript", level: "Core" },
      { name: "Tailwind CSS", level: "Core" },
      { name: "Vite", level: "Core" },
    ],
  },
  {
    tag: "02",
    title: "Backend",
    skills: [
      { name: "FastAPI", level: "Core" },
      { name: "Django / DRF", level: "Proficient" },
      { name: "Python", level: "Core" },
      { name: "SQLAlchemy", level: "Proficient" },
      { name: "REST APIs", level: "Core" },
    ],
  },
  {
    tag: "03",
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: "Core" },
      { name: "Alembic (migrations)", level: "Proficient" },
      { name: "Redis", level: "Familiar" },
      { name: "Supabase", level: "Familiar" },
    ],
  },
  {
    tag: "04",
    title: "AI / ML",
    skills: [
      { name: "XGBoost", level: "Core" },
      { name: "Gemini API", level: "Proficient" },
      { name: "RAG (FAISS)", level: "Proficient" },
      { name: "scikit-learn / Pandas", level: "Core" },
      { name: "ONNX Runtime", level: "Familiar" },
    ],
  },
  {
    tag: "05",
    title: "Auth & Security",
    skills: [
      { name: "JWT / OAuth2", level: "Core" },
      { name: "RBAC design", level: "Core" },
      { name: "bcrypt", level: "Proficient" },
    ],
  },
  {
    tag: "06",
    title: "DevOps & Tools",
    skills: [
      { name: "Docker / Compose", level: "Core" },
      { name: "Git", level: "Core" },
      { name: "APScheduler", level: "Familiar" },
      { name: "Vercel / Railway", level: "Proficient" },
    ],
  },
];

function SignalBars({ level }: { level: SkillLevel }) {
  const strength = LEVEL_STRENGTH[level];
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {[1, 2, 3].map((bar) => (
        <span
          key={bar}
          className={`w-1 rounded-sm ${
            bar === 1 ? "h-2" : bar === 2 ? "h-3" : "h-4"
          } ${bar <= strength ? "bg-accent" : "bg-line/25"}`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container-sheet">
        <p className="eyebrow mb-3">04 / Skills</p>
        <div className="sheet-rule" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <div key={cat.tag} className="border border-line/20 bg-bg-panel p-5">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-mono text-[11px] text-accent tracking-[0.08em]">
                  {cat.tag}
                </span>
                <h3 className="text-sm font-semibold text-ink">{cat.title}</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="text-[13px] text-ink-dim">{skill.name}</span>
                    <SignalBars level={skill.level} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-8 pt-6 border-t border-line/10">
          {(["Core", "Proficient", "Familiar"] as SkillLevel[]).map((level) => (
            <div key={level} className="flex items-center gap-2">
              <SignalBars level={level} />
              <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-faint">
                {level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}