import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const LINKS = [
  { label: "Email", value: "athersayed8@gmail.com", href: "mailto:athersayed8@gmail.com" },
  { label: "GitHub", value: "github.com/ather8", href: "https://github.com/ather8" },
  { label: "LinkedIn", value: "linkedin.com/in/ather-sayed", href: "https://www.linkedin.com/in/ather-sayed" },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mlgqrgwq", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: (() => {
          const fd = new FormData();
          fd.append("name", form.name);
          fd.append("email", form.email);
          fd.append("message", form.message);
          return fd;
        })(),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-sheet">
        <p className="eyebrow mb-3">06 / Contact</p>
        <div className="sheet-rule" />

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16">
          {/* Left: intro + direct links */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink leading-snug mb-4">
              Have a project in mind, or just want to talk shop?
            </h2>
            <p className="text-ink-dim leading-relaxed mb-8">
              I'm open to full-stack and applied-AI roles, freelance work, or
              just a conversation about something you're building. Reach out
              directly, or use the form.
            </p>

            <ul className="flex flex-col gap-4">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between border border-line/20 bg-bg-panel px-4 py-3 hover:border-accent/40 transition-colors"
                  >
                    <span className="sheet-tag">{link.label}</span>
                    <span className="text-sm text-ink group-hover:text-accent transition-colors">
                      {link.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="sheet-tag block mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-bg-panel border border-line/25 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="sheet-tag block mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-bg-panel border border-line/25 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="sheet-tag block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-bg-panel border border-line/25 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent/50 transition-colors resize-none"
                placeholder="What are you thinking about?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="font-mono text-xs tracking-[0.1em] uppercase bg-accent text-accent-ink px-5 py-3.5 hover:opacity-90 transition-opacity disabled:opacity-50 min-h-[44px]"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="font-mono text-xs text-accent">
                Message sent — I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-xs text-ink-faint">
                Something went wrong — try emailing directly instead.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}