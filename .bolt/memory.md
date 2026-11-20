# Project memory

## Product intent & audience

- Personal portfolio site for Malak Mahmoud, IT graduate / Junior Data Analyst, aimed at recruiters and companies.
- Communicates a dual identity: data analysis (Excel, SQL, Python) plus frontend development (React, TypeScript).
- Production-quality, shareable with recruiters; not a demo or starter.

## Brand personality & voice

- Professional, confident, data-informed tone.
- Headlines lean editorial: "Turning Data Into Insights & Ideas Into Digital Experiences."
- Copy avoids inflated claims (no "expert", no invented proficiency percentages).

## Visual design & UX direction

- Dark editorial visual system; premium, not cookie-cutter.
- Abstract visual identity built around "MM" initials — no fake profile photo.
- Custom favicon using "MM".
- Section structure: Hero, About, Skills, Projects, Education, Certifications, Training, Contact, Footer.
- Sticky responsive nav with mobile menu and active-section tracking; smooth scrolling.
- Scroll reveal animations, animated section transitions, hover states, back-to-top button.
- Hero: animated background, subtle floating technical elements, GitHub/LinkedIn icon links.
- Skills: categorized cards/grouped tags by domain (Data Analysis, SQL, Programming, IT/Networking, Frontend, Tools); no proficiency bars.
- Projects: interactive cards with category labels, tech tags, hover animations, View Project / View Source Code buttons; Project 1 (Employee Workforce Analysis Dashboard) gets featured/prominent treatment with illustrative dashboard preview clearly marked as sample data.
- Education as elegant timeline; certifications and training as cards.
- Contact: mailto-based form (Name, Email, Subject, Message) — frontend-only, no fake backend/storage.
- Responsive Tailwind layouts, accessibility labels, SEO meta title/description.

## Decisions, constraints & rationale

- Stack fixed by template + global `.bolt/prompt`: Vite + React + TypeScript + Tailwind + Lucide React; `@/` path alias for `src/`; no extra UI/icon packages.
- CV PDF stored at `/Malak_Mahmoud_CV.pdf` in `public/`; Download CV buttons link to this real file; no generated/fake CV.
- No fake personal photo; abstract identity used instead.
- No invented skill proficiency percentages or expert-level claims.
- No invented project URLs or social links: LinkedIn, GitHub, and project links remain visibly marked placeholders until user provides real URLs.
- No fake backend, no auth, no placeholder sections pretending to be complete.
- Build, TypeScript, and lint checks must all pass; no console errors.

## Open questions & assumptions

- Actual LinkedIn URL, GitHub URL, and per-project source/demo URLs not yet provided — currently placeholders.
- Final CV PDF assumed to be supplied by user and placed at `public/Malak_Mahmoud_CV.pdf`.
- Graduation year listed as 2026 and "currently looking for opportunity" — treated as upcoming graduate seeking entry-level roles.
- Contact form uses mailto; assumes user will later provide a real email destination if mailto default is insufficient.