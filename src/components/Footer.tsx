const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/ather8" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ather-sayed" },
  { label: "Email", href: "mailto:athersayed8@gmail.com" },
];

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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/15 mt-12">
      <div className="container-sheet py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <PulseMark />
            <div>
              <p className="text-sm font-semibold text-ink">Ather Sayed</p>
              <p className="font-mono text-[11px] text-ink-faint tracking-[0.06em]">
                Full-Stack Engineer
              </p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] tracking-[0.08em] uppercase text-ink-faint hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-mono text-[11px] tracking-[0.08em] uppercase text-ink-dim hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-10 pt-6 border-t border-line/10">
          <p className="font-mono text-[10px] text-ink-faint tracking-[0.04em]">
            © {year} Ather Sayed. Built with React, TypeScript &amp; Tailwind.
          </p>
          <a
            href="#top"
            className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-faint hover:text-ink transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}