export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">ERR / 404</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-4">
          Signal lost.
        </h1>
        <p className="text-ink-dim leading-relaxed mb-8">
          This page doesn't exist, or it moved. Let's get you back to something
          that's actually live.
        </p>
        <a
          href="/"
          className="inline-block font-mono text-xs tracking-[0.1em] uppercase bg-accent text-accent-ink px-5 py-3 hover:opacity-90 transition-opacity"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}