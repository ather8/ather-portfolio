# Ather Sayed — Portfolio

Personal portfolio site built from scratch with a custom "technical schematic" design system — steel/navy palette, hairline borders, monospace data readouts — instead of a templated UI kit.

**Live:** [your-deployed-url.com](https://your-deployed-url.com)

## Stack

- React + TypeScript + Vite
- Tailwind CSS (custom design tokens, no component library)
- Formspree (contact form submission)

## Sections

- **Hero** — headline, photo, and a "system status" panel: three live apps plus the three Memphis Tours systems (pilot / shadow / internal)
- **About** — capability breakdown (Full-Stack / Backend / Applied ML)
- **Experience** — AI Specialist intern at Memphis Tours (Oct 2026 –), plus the independent ML/full-stack specialization
- **Education** — chronological timeline (school → university → military service)
- **Projects** — STAR-format case studies in two groups. Group A, internship work at Memphis Tours (internal systems, status badge instead of demo/code links):
  - Momo Messenger AI Sales Assistant — ERP-verified pricing, reply price check, first-quotes review
  - Request Spam Detection — multilingual embeddings classifier, sealed test, fairness audit, shadow mode
  - SalesAI Draft Emails & Itinerary Offers — deterministic gate, code-built offers, model re-voices only
  Group B, personal projects (live, deployed):
  - [AI-Powered Hospital System](https://github.com/ather8/AI-Powered-Hospital-System) — RBAC, AI triage chatbot, RAG clinical search
  - [PizzaStore](https://github.com/ather8/Full-Stack-Pizza-Store) — XGBoost demand forecasting, Gemini natural-language queries
  - [FraudWatch AI](https://github.com/ather8/Fraud_Detection_System) — XGBoost + Isolation Forest fraud detection, ONNX-served
  - [Game Hub](https://github.com/ather8/game-hub) — React/TypeScript frontend showcase
- **Skills** — categorized by Frontend / Backend / Databases / AI-ML / Auth & Security / DevOps
- **Certificates** — 13 certifications (IBM, DeepLearning.AI/Stanford, KodeKloud) with a lightbox viewer
- **Contact** — form (via Formspree) + direct links

## Theming

Two themes, toggled via a `data-theme` attribute on `<html>` (no React state, no flash-of-wrong-theme):

- `blueprint` (default) — dark navy "schematic" theme
- `diazo` — light "paper print" theme

Both share the same layout and components; only CSS custom properties in `index.css` change.

## Local development

```bash
npm install
npm run dev
```

````

Runs at `http://localhost:5173`.

```bash
npm run build    # production build to /dist
npm run preview  # preview the production build locally
```

## Project structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── StatusPanel.tsx
│   ├── About.tsx
│   ├── Education.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Certificates.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── NotFound.tsx
├── App.tsx
├── main.tsx
└── index.css        # design tokens (colors, fonts, both themes)
public/
├── ather-photo.jpg
├── certificates/     # cert-01.jpg – cert-13.jpg
├── favicon.svg
├── og-image.png
├── robots.txt
└── sitemap.xml
```

## Deployment

Deployed on Vercel. `vercel.json` rewrites all paths to `index.html` so client-side 404 handling works correctly for unknown routes.

## Contact

- Email: athersayed8@gmail.com
- LinkedIn: [linkedin.com/in/ather-sayed](https://www.linkedin.com/in/ather-sayed)
- GitHub: [github.com/ather8](https://github.com/ather8)
````
