type EduStep = {
  tag: string;
  place: string;
  detail: string;
  range: string;
  highlight?: boolean;
};

const STEPS: EduStep[] = [
  {
    tag: "ED-01",
    place: "Nozha Language Schools",
    detail: "K–12 education",
    range: "2005 — 2019",
  },
  {
    tag: "ED-02",
    place: "Ain Shams University",
    detail: "Bachelor's Degree",
    range: "2019 — Sep 2024",
    highlight: true,
  },
  {
    tag: "ED-03",
    place: "Military Service",
    detail: "National service",
    range: "Dec 2024 — Dec 2025",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="container-sheet">
        <p className="eyebrow mb-3">02 / Education</p>
        <div className="sheet-rule" />

        <div className="relative max-w-2xl">
          {/* connecting line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line/25" />

          <ul className="flex flex-col gap-10">
            {STEPS.map((step) => (
              <li key={step.tag} className="relative pl-10">
                {/* node */}
                <span
                  className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border ${
                    step.highlight
                      ? "border-accent bg-bg"
                      : "border-line/50 bg-bg"
                  }`}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1.5">
                  <h3 className="text-base font-semibold text-ink">
                    {step.place}
                  </h3>
                  <span className="font-mono text-[11px] tracking-[0.08em] text-ink-faint">
                    {step.range}
                  </span>
                </div>
                <p className="text-sm text-ink-dim">{step.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}