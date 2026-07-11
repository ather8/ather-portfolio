import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

function getInitialTheme(): "blueprint" | "diazo" {
  if (typeof document === "undefined") return "blueprint";
  return (document.documentElement.getAttribute("data-theme") as "blueprint" | "diazo") || "blueprint";
}

function ThemeToggle() {
  // local state here is just to re-render the label/aria — the actual
  // theme is applied straight to the DOM, not derived from this state.
  const [theme, setTheme] = useState<"blueprint" | "diazo">(getInitialTheme);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "diazo" || stored === "blueprint") {
      document.documentElement.setAttribute("data-theme", stored);
      setTheme(stored);
    }
  }, []);

  const toggle = () => {
    const next = theme === "blueprint" ? "diazo" : "blueprint";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "blueprint" ? "light" : "dark"} theme`}
      className="font-mono text-[11px] tracking-[0.12em] border border-line/25 px-2.5 py-1.5 text-ink-dim hover:text-accent hover:border-accent/40 transition-colors"
    >
      [ {theme === "blueprint" ? "LIGHT" : "DARK"} ]
    </button>
  );
}

function PulseMark() {
  return (
    <div className="w-8 h-8 border border-line/30 flex items-center justify-center shrink-0">
      <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
        <path
          d="M0 5 H5 L7 1 L10 9 L12 5 H18"
          stroke="currentColor"
          className="text-accent"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/15 bg-bg/85 backdrop-blur">
      <div className="container-sheet flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-3" aria-label="Home">
          <PulseMark />
          <span className="font-mono text-xs tracking-[0.12em] text-ink-dim hidden sm:inline">
            AS&nbsp;/&nbsp;PORTFOLIO
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-dim hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile toggle button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="w-9 h-9 border border-line/25 flex items-center justify-center"
          >
            <span className="font-mono text-xs text-ink-dim">{open ? "X" : "≡"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-line/15 bg-bg-panel px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-xs tracking-[0.1em] uppercase text-ink-dim hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}