# Trinity Chigubhu — Engineering Portfolio Website

> **Production-Quality Portfolio for Trinity Chigubhu | Computer Science Engineer, Full-Stack Developer & Cybersecurity Enthusiast**

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.10-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.14-teal.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 1. Professional Identity & Engineering Positioning

- **Name:** Trinity Chigubhu
- **Title:** Computer Science Engineer
- **Institution:** Aditya University, India
- **Primary Positioning:**
  - Full-Stack Software Developer
  - Backend Development Enthusiast
  - Cybersecurity & Defensive Systems Enthusiast
  - AI and Large Language Model Explorer
- **GitHub:** [https://github.com/Vachigubhu](https://github.com/Vachigubhu)

---

## 2. Architecture & Design Principles

This portfolio is built to reflect genuine software engineering ability:
1. **Separation of Concerns:** Pure data models (`src/data/`) are decoupled from presentation components (`src/components/`).
2. **Type Safety:** Strict TypeScript interfaces (`src/types/index.ts`) ensure reliable data contracts and prevent runtime issues.
3. **No Arbitrary Metrics:** No fabricated percentage bars or inflated proficiencies. Skills are qualified with contextual explanations and verified experience levels.
4. **Honest Project Status:** Clear distinction between completed projects, active prototypes, and upcoming architectural concepts.
5. **Defensive Security & Performance:** Configured with security headers (`X-Frame-Options`, `nosniff`, `X-XSS-Protection`), lightweight bundles, and zero bloated libraries.

---

## 3. Technology Stack

- **Frontend Core:** React 18.3.1, TypeScript 5.6.3
- **Build Tool:** Vite 5.4.10
- **Styling:** Tailwind CSS 3.4.14, PostCSS 8.4.47, Autoprefixer 10.4.20
- **Iconography:** lucide-react 0.454.0
- **Typography:** Inter & JetBrains Mono

---

## 4. Project Structure

```text
trinity-chigubhu-portfolio/
├── index.html                 # Semantic HTML5 entry with SEO, OpenGraph & JSON-LD
├── package.json               # Project manifest and exact dependencies
├── tsconfig.json              # TypeScript compiler configuration
├── tsconfig.node.json         # Node TypeScript resolution for Vite
├── vite.config.ts             # Vite build and dev server config
├── tailwind.config.js         # Custom theme, dark mode, engineering color tokens
├── postcss.config.js          # PostCSS configuration
├── vercel.json                # Vercel SPA routing & security headers
├── netlify.toml               # Netlify build & security headers
├── .env.example               # Environment variables template
├── public/                    # Static assets & icons
└── src/
    ├── main.tsx               # Application bootstrap
    ├── App.tsx                # Layout orchestrator with active section tracking
    ├── index.css              # Tailwind imports, scrollbar, and tech grid styling
    ├── types/
    │   └── index.ts           # TypeScript interfaces (Projects, Skills, Certs, etc.)
    ├── data/
    │   ├── skills.ts          # Structured technical skill inventory
    │   ├── projects.ts        # Detailed project profiles & architectural decisions
    │   ├── certifications.ts  # Academic info & verified professional certificates
    │   └── journey.ts         # Engineering timeline milestones
    └── components/
        ├── Navbar.tsx         # Responsive header with status indicator & mobile drawer
        ├── Hero.tsx           # High-impact introduction with terminal inspection card
        ├── About.tsx          # Academic background at Aditya University & core pillars
        ├── Skills.tsx         # Interactive categorized inventory with experience badges
        ├── Projects.tsx       # Filterable showcase (Full-Stack, Backend, IoT, AI)
        ├── ProjectCard.tsx    # Responsive project card with tags & action triggers
        ├── ProjectModal.tsx   # Detailed modal with problem, solution & decisions
        ├── Certifications.tsx # Education highlights & certificate credentials
        ├── Journey.tsx        # Engineering timeline of growth
        ├── GitHubActivity.tsx # Public repository showcase with API integration & fallback
        ├── Contact.tsx        # Accessible contact form with input validation
        ├── Footer.tsx         # Semantic footer, links, and system status
        └── CVModal.tsx        # Printable resume preview and summary modal
```

---

## 5. Local Development Workflow

### Prerequisites
- Node.js `>= 18.20.0`
- npm `>= 9.0.0` or pnpm / yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Vachigubhu/trinity-chigubhu-portfolio.git
cd trinity-chigubhu-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build & Preview
```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 6. Deployment Guide

### Deploying to Vercel
1. Push the code to a GitHub repository under `@Vachigubhu`.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**.
4. Root Directory: `./` (or `trinity-chigubhu-portfolio`).
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**. The included `vercel.json` ensures full SPA routing and applies security headers.

### Deploying to Netlify
1. Connect repository to [Netlify](https://netlify.com).
2. The included `netlify.toml` automatically configures `npm run build`, `dist` publishing directory, and `/* -> /index.html` rewrites.

---

## 7. Customization & Missing Information Checklist

When updating with personal verified assets:
- [ ] **Contact Email:** Replace `trinity.chigubhu@example.com` in `src/components/Contact.tsx` and `.env` with your real personal or university email address.
- [ ] **LinkedIn URL:** Replace placeholder `https://linkedin.com/in/trinity-chigubhu` with your confirmed LinkedIn profile slug.
- [ ] **Resume File:** Add your downloadable PDF file (e.g., `trinity-chigubhu-resume.pdf`) into `public/` and link it directly in `src/components/Hero.tsx` or `CVModal.tsx`.
- [ ] **OpenGraph Image:** Place a real screenshot of your portfolio or avatar in `public/og-preview.png` for rich social preview cards.
