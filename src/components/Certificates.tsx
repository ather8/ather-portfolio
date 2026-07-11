import { useEffect, useState } from "react";

type Certificate = {
  id: string;
  tag: string;
  title: string;
  issuer: string;
  date: string;
  verifyUrl: string;
  image: string;
};

const CERTIFICATES: Certificate[] = [
  {
    id: "c1",
    tag: "CT-01",
    title: "Gen AI Foundational Models for NLP & Language Understanding",
    issuer: "IBM",
    date: "Jun 2026",
    verifyUrl: "https://coursera.org/verify/CQUX8QFHP1KV",
    image: "/certificates/cert-01.jpg",
  },
  {
    id: "c2",
    tag: "CT-02",
    title: "Generative AI and LLMs: Architecture and Data Preparation",
    issuer: "IBM",
    date: "May 2026",
    verifyUrl: "https://coursera.org/verify/DS4EY4UONHTL",
    image: "/certificates/cert-02.jpg",
  },
  {
    id: "c3",
    tag: "CT-03",
    title: "AI Capstone Project with Deep Learning",
    issuer: "IBM",
    date: "May 2026",
    verifyUrl: "https://coursera.org/verify/2KPR40KM1EYI",
    image: "/certificates/cert-03.jpg",
  },
  {
    id: "c4",
    tag: "CT-04",
    title: "Deep Learning with PyTorch",
    issuer: "IBM",
    date: "Apr 2026",
    verifyUrl: "https://coursera.org/verify/QFF25B5F803I",
    image: "/certificates/cert-04.jpg",
  },
  {
    id: "c5",
    tag: "CT-05",
    title: "Introduction to Neural Networks and PyTorch",
    issuer: "IBM",
    date: "Apr 2026",
    verifyUrl: "https://coursera.org/verify/62ON4TGSHYYZ",
    image: "/certificates/cert-05.jpg",
  },
  {
    id: "c6",
    tag: "CT-06",
    title: "Docker Training Course for the Absolute Beginner",
    issuer: "KodeKloud",
    date: "Apr 2026",
    verifyUrl: "",
    image: "/certificates/cert-06.jpg",
  },
  {
    id: "c7",
    tag: "CT-07",
    title: "Deep Learning with Keras and TensorFlow",
    issuer: "IBM",
    date: "Apr 2026",
    verifyUrl: "https://coursera.org/verify/ZWMFZU5RQ7M7",
    image: "/certificates/cert-07.jpg",
  },
  {
    id: "c8",
    tag: "CT-08",
    title: "Introduction to Deep Learning & Neural Networks with Keras",
    issuer: "IBM",
    date: "Mar 2026",
    verifyUrl: "https://coursera.org/verify/WK40ZAUFNVZU",
    image: "/certificates/cert-08.jpg",
  },
  {
    id: "c9",
    tag: "CT-09",
    title: "Machine Learning with Python",
    issuer: "IBM",
    date: "Mar 2026",
    verifyUrl: "https://coursera.org/verify/WCZCDDFTHVSC",
    image: "/certificates/cert-09.jpg",
  },
  {
    id: "c10",
    tag: "CT-10",
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    date: "Feb 2026",
    verifyUrl: "https://coursera.org/verify/MB1901TQOOXL",
    image: "/certificates/cert-10.jpg",
  },
  {
    id: "c11",
    tag: "CT-11",
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "DeepLearning.AI & Stanford Online",
    date: "Jan 2026",
    verifyUrl: "https://coursera.org/verify/74OLOK7O4GG2",
    image: "/certificates/cert-11.jpg",
  },
  {
    id: "c12",
    tag: "CT-12",
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI & Stanford Online",
    date: "Jan 2026",
    verifyUrl: "https://coursera.org/verify/XGUEQRD9IL53",
    image: "/certificates/cert-12.jpg",
  },
  {
    id: "c13",
    tag: "CT-13",
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford Online",
    date: "Dec 2025",
    verifyUrl: "https://coursera.org/verify/2M8Y6KVACWCN",
    image: "/certificates/cert-13.jpg",
  },
];

function Lightbox({
  cert,
  onClose,
}: {
  cert: Certificate;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-bg-panel-2/90 backdrop-blur-sm flex items-center justify-center p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
    >
      <div
        className="relative max-w-2xl w-full bg-bg-panel border border-line/25"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="reg-mark -top-px -left-px" />
        <span className="reg-mark -top-px -right-px rotate-90" />
        <span className="reg-mark -bottom-px -left-px -rotate-90" />
        <span className="reg-mark -bottom-px -right-px rotate-180" />

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 w-8 h-8 border border-line/25 bg-bg-panel flex items-center justify-center font-mono text-xs text-ink-dim hover:text-ink z-10"
        >
          X
        </button>

        <img
          src={cert.image}
          alt={cert.title}
          className="w-full max-h-[70vh] object-contain bg-bg-panel-2"
        />

        <div className="p-5 border-t border-line/15">
          <span className="font-mono text-[10px] text-ink-faint tracking-[0.08em]">
            {cert.tag}
          </span>
          <h3 className="text-base font-semibold text-ink mt-1">{cert.title}</h3>
          <p className="text-sm text-ink-dim mt-0.5">
            {cert.issuer} · {cert.date}
          </p>
          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 font-mono text-[11px] tracking-[0.08em] uppercase text-accent hover:opacity-80"
            >
              Verify Credential →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-20 md:py-28">
      <div className="container-sheet">
        <p className="eyebrow mb-3">05 / Certificates</p>
        <div className="sheet-rule" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CERTIFICATES.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setActive(cert)}
              className="group relative border border-line/20 bg-bg-panel text-left overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-bg-panel-2">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <span className="font-mono text-[10px] text-ink-faint tracking-[0.08em]">
                  {cert.tag}
                </span>
                <p className="text-xs text-ink-dim mt-1 line-clamp-2">{cert.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && <Lightbox cert={active} onClose={() => setActive(null)} />}
    </section>
  );
}