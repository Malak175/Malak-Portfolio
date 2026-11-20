import { FormEvent, ReactNode, useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Check,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Send,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react';

type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  accent: 'blue' | 'cyan' | 'amber' | 'slate';
  featured?: boolean;
  linkLabel?: string;
};

type SkillGroup = {
  title: string;
  icon: typeof BarChart3;
  skills: string[];
};

const email = 'malak.mahmoud.zayed5@gmail.com';
const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];

const skillGroups: SkillGroup[] = [
  { title: 'Data Analysis & Reporting', icon: BarChart3, skills: ['Microsoft Excel', 'Data Cleaning', 'Data Visualization', 'Pivot Tables', 'Pivot Charts', 'Slicers', 'Excel Formulas', 'Dashboard Development', 'Reporting'] },
  { title: 'Database & SQL', icon: Database, skills: ['SQL', 'SELECT', 'WHERE', 'GROUP BY', 'ORDER BY', 'JOINs', 'Aggregate Functions', 'Data Filtering'] },
  { title: 'Programming', icon: Terminal, skills: ['Python', 'Java', 'C++', 'OOP Concepts', 'Conditions', 'Loops', 'Functions', 'Data Structures'] },
  { title: 'IT & Networking', icon: Network, skills: ['CCNA', 'Networking Fundamentals', 'Routing & Switching', 'Troubleshooting', 'Network Configuration'] },
  { title: 'Frontend Development', icon: Code2, skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'TypeScript', 'Bootstrap', 'Tailwind CSS', 'Responsive Web Design'] },
  { title: 'Tools', icon: Layers3, skills: ['Git', 'GitHub', 'VS Code'] },
];

const projects: Project[] = [
  {
    title: 'Employee Workforce Analysis Dashboard',
    category: 'Data Analysis / Microsoft Excel',
    description: 'An interactive workforce analysis experience exploring employee distribution, compensation, job ratings, and hiring trends through clear KPIs and visual reporting.',
    technologies: ['740 Employees', 'Interactive Dashboard', 'Pivot Tables & Charts', 'Workforce KPIs'],
    highlights: ['Compensation overview', 'Hiring trend analysis', 'Job rating distribution'],
    accent: 'blue',
    featured: true,
    linkLabel: 'Dashboard URL pending',
  },
  {
    title: 'Tabeebak',
    category: 'Full-Stack Development',
    description: 'An AI-powered healthcare platform that helps patients book appointments, browse doctors and laboratories, and receive health predictions.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'TanStack Query'],
    accent: 'cyan',
    linkLabel: 'Website URL pending',
  },
  {
    title: 'Beanora Café',
    category: 'Full-Stack Development',
    description: 'A responsive café menu and admin dashboard with REST APIs, JWT authentication, protected routes, CRUD operations, filtering, and dashboard statistics.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
    accent: 'amber',
    linkLabel: 'GitHub URL pending',
  },
  {
    title: 'Tabeebak Admin Dashboard',
    category: 'Frontend Development',
    description: 'A clean, scalable interface for managing doctors, laboratories, appointments, patients, and healthcare services.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'TanStack Query'],
    accent: 'slate',
    linkLabel: 'Website URL pending',
  },
  {
    title: 'X-O Game',
    category: 'Python Development',
    description: 'A Python game with player interaction and win/draw detection, organized into separate modules for readability and maintainability.',
    technologies: ['Python', 'Git', 'GitHub'],
    accent: 'slate',
    linkLabel: 'GitHub URL pending',
  },
];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="social-links" aria-label="Professional links">
      <a className="icon-button" href={`mailto:${email}`} aria-label="Send an email"><Mail size={18} /></a>
      <span className="icon-button is-disabled" aria-label="LinkedIn URL pending"><Linkedin size={18} /></span>
      <span className="icon-button is-disabled" aria-label="GitHub URL pending"><Github size={18} /></span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [showTop, setShowTop] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.toLowerCase())).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id.charAt(0).toUpperCase() + visible.target.id.slice(1));
    }, { rootMargin: '-28% 0px -58% 0px', threshold: [0, 0.15, 0.5] });
    sections.forEach((section) => section && observer.observe(section));
    const onScroll = () => setShowTop(window.scrollY > 560);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = String(form.get('subject') || 'Portfolio enquiry');
    const body = `Name: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />
      <header className="navbar">
        <div className="container nav-inner">
          <button className="brand" onClick={() => scrollTo('Home')} aria-label="Go to homepage"><span className="brand-mark">MM</span><span>Malak Mahmoud</span></button>
          <nav className={menuOpen ? 'nav-menu is-open' : 'nav-menu'} aria-label="Main navigation">
            {navItems.map((item) => <button key={item} className={activeSection === item ? 'nav-link active' : 'nav-link'} onClick={() => scrollTo(item)}>{item}</button>)}
            <a className="nav-cv" href="/Malak_Mahmoud_CV.pdf" download><Download size={15} /> Download CV</a>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-padding">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <span className="hero-kicker"><span className="status-dot" /> Open to opportunities in Data &amp; IT</span>
              <h1>Hi, I’m <span>Malak</span><br />Mahmoud.</h1>
              <p className="hero-title">IT Graduate <span>/</span> Junior Data Analyst</p>
              <p className="hero-lede">Turning data into insights <em>&amp;</em><br className="desktop-break" /> ideas into digital experiences.</p>
              <p className="hero-description">An Information Technology graduate passionate about data analysis, problem-solving, and building meaningful digital solutions with Excel, SQL, Python, and modern frontend technologies.</p>
              <div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo('Projects')}>Explore my work <ArrowDown size={17} /></button><a className="button button-ghost" href="/Malak_Mahmoud_CV.pdf" download>Download CV <Download size={17} /></a></div>
              <button className="text-link" onClick={() => scrollTo('Contact')}>Have a project in mind? <span>Let’s connect</span> <ArrowUpRight size={15} /></button>
            </div>
            <div className="hero-visual reveal">
              <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
              <div className="visual-core"><span className="core-label">DATA / DESIGN / DETAIL</span><span className="core-initials">MM</span><span className="core-caption">Analytical thinking<br />with a creative edge.</span></div>
              <div className="floating-chip chip-top"><BarChart3 size={16} /><span>Insightful</span></div><div className="floating-chip chip-right"><Code2 size={16} /><span>Build &amp; learn</span></div><div className="floating-chip chip-bottom"><Sparkles size={16} /><span>Always curious</span></div>
              <div className="visual-grid" />
            </div>
          </div>
          <div className="container hero-meta"><span>Based in Al Buhayrah, Egypt</span><span className="meta-line" /><span>Available for junior roles &amp; internships</span><span className="hero-scroll">Scroll to explore <ArrowDown size={15} /></span></div>
        </section>

        <section id="about" className="section-padding about-section"><div className="container about-grid"><SectionHeading eyebrow="01 / About me" title={<>A curious mind behind<br /><span>the numbers.</span></>} /><div className="about-content reveal"><p className="lead-paragraph">I’m Malak Mahmoud, an Information Technology graduate from the Egyptian E-Learning University.</p><p>I have a strong technical foundation in data analysis, Microsoft Excel, SQL, and Python, alongside experience in frontend development using React.js and modern web technologies.</p><p>I enjoy analyzing data, discovering meaningful patterns, solving problems, and building practical digital solutions. I’m currently looking for an opportunity to start my professional career in Data Analysis or IT, where I can contribute, learn, and grow.</p></div></div><div className="container highlights-grid">{[['01', 'B.Sc. in Information Technology'], ['02', 'Graduation Year: 2026'], ['03', 'Very Good — Honors'], ['04', 'Graduation Project: A+']].map(([number, text]) => <div className="highlight reveal" key={number}><span>{number}</span><strong>{text}</strong></div>)}</div></section>

        <section id="skills" className="section-padding skills-section"><div className="container"><SectionHeading eyebrow="02 / Toolkit" title={<>Skills that turn<br /><span>questions into clarity.</span></>} intro="A practical toolkit built across analytics, programming, IT fundamentals, and frontend development." /><div className="skills-grid">{skillGroups.map(({ title, icon: Icon, skills }, index) => <div className={`skill-group reveal delay-${(index % 3) + 1}`} key={title}><div className="skill-group-title"><span className="skill-icon"><Icon size={18} /></span><h3>{title}</h3></div><div className="tag-list">{skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

        <section id="projects" className="section-padding projects-section"><div className="container"><SectionHeading eyebrow="03 / Selected work" title={<>Projects with<br /><span>purpose behind them.</span></>} intro="A selection of academic and personal work spanning dashboards, healthcare platforms, and practical software." /><div className="projects-list">{projects.map((project, index) => <article className={`project-card ${project.featured ? 'featured' : ''} accent-${project.accent} reveal`} key={project.title}><div className="project-preview">{project.featured ? <><div className="preview-toolbar"><span>WORKFORCE / OVERVIEW</span><span className="preview-live"><span /> illustrative preview</span></div><div className="preview-kpi-row"><div><small>Total employees</small><strong>740</strong></div><div><small>Avg. rating</small><strong>4.2<span>/5</span></strong></div><div><small>New hires</small><strong>128</strong></div></div><div className="chart-area"><div className="chart-labels"><span>Headcount by department</span><span>2022 — 2025</span></div><div className="bars">{[48, 76, 61, 88, 69, 92, 82, 100, 74, 86, 58, 72].map((height, i) => <span key={i} style={{ height: `${height}%` }} />)}</div></div></> : <div className="project-symbol">{project.category.includes('Python') ? <Terminal size={42} /> : project.category.includes('Frontend') ? <Code2 size={42} /> : project.category.includes('Café') ? <Sparkles size={42} /> : <Database size={42} />}<span>{project.category.split(' / ')[0]}</span></div>}</div><div className="project-info"><div className="project-number">0{index + 1}</div><div className="project-body"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p>{project.highlights && <div className="project-highlights">{project.highlights.map((highlight) => <span key={highlight}><Check size={13} /> {highlight}</span>)}</div>}<div className="project-footer"><div className="tech-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><span className="project-link pending">{project.linkLabel} <ExternalLink size={14} /></span></div></div></div></article>)}</div></div></section>

        <section id="education" className="section-padding education-section"><div className="container education-grid"><SectionHeading eyebrow="04 / Education & credentials" title={<>The foundation<br /><span>underneath it all.</span></>} /><div className="timeline reveal"><div className="timeline-item"><span className="timeline-dot" /><div className="timeline-date">2022 — 2026</div><h3>B.Sc. in Information Technology</h3><p className="muted">Egyptian E-Learning University (EELU) · Alexandria, Egypt</p><p>Grade: Very Good (High) — Honors</p><div className="graduation-project"><span>Graduation project</span><strong>Tabeebak — AI-Powered Healthcare Management System</strong><b>Grade: A+</b></div></div><div className="timeline-item"><span className="timeline-dot" /><div className="timeline-date">December 2025</div><h3>React Frontend Web Developer Training</h3><p className="muted">Digital Egypt Pioneers Initiative (DEPI)</p><p>Responsive UI design, component-based architecture, and modern web development fundamentals.</p></div></div></div><div className="container certifications"><div className="cert-heading"><span className="eyebrow"><span className="eyebrow-line" />Certifications</span><h3>Learning that keeps moving.</h3></div><div className="cert-grid"><div className="cert-card reveal"><span className="cert-year">2024</span><h4>CCNA</h4><p>Cisco Networking Academy</p><small>Introduction to Networks · Switching, Routing, and Wireless Essentials · Enterprise Networking</small></div><div className="cert-card reveal"><span className="cert-year">2025</span><h4>Python Programming Language</h4><p>Egyptian E-Learning University</p><small>40-hour accredited training program</small></div><div className="cert-card reveal"><span className="cert-year">2025</span><h4>Artificial Intelligence</h4><p>EELU</p><small>Foundations of artificial intelligence</small></div></div></div></section>

        <section id="contact" className="section-padding contact-section"><div className="container contact-grid"><div className="contact-copy reveal"><SectionHeading eyebrow="05 / Contact" title={<>Let’s work<br /><span>together.</span></>} intro="I’m always open to discussing new opportunities, interesting projects, and collaborations." /><div className="contact-details"><a href={`mailto:${email}`}><Mail size={18} /><span><small>Email</small>{email}</span></a><div><MapPin size={18} /><span><small>Location</small>Al Buhayrah, Egypt</span></div><div><Linkedin size={18} /><span><small>LinkedIn</small>Profile URL pending</span></div></div><SocialLinks /></div><form className="contact-form reveal" onSubmit={handleSubmit}><div className="form-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label></div><label>Subject<input name="subject" required placeholder="Let’s talk about..." /></label><label>Message<textarea name="message" required rows={5} placeholder="Tell me a little about your idea or opportunity..." /></label><button className="button button-primary" type="submit">{sent ? 'Opening your email app' : 'Send message'} <Send size={16} /></button><p className="form-note">This opens your email app with the message prepared — no messages are stored here.</p></form></div></section>
      </main>

      <footer className="footer"><div className="container footer-inner"><div><button className="brand footer-brand" onClick={() => scrollTo('Home')}><span className="brand-mark">MM</span><span>Malak Mahmoud</span></button><p>Data-minded. Detail-oriented.<br />Always learning.</p></div><div className="footer-nav"><span>Explore</span>{navItems.slice(1).map((item) => <button key={item} onClick={() => scrollTo(item)}>{item}</button>)}</div><div className="footer-connect"><span>Let’s connect</span><a href={`mailto:${email}`}>{email}</a><SocialLinks /></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Malak Mahmoud. Built with curiosity.</span><span>IT Graduate / Junior Data Analyst</span></div></footer>
      {showTop && <button className="back-top" onClick={() => scrollTo('Home')} aria-label="Back to top"><ArrowUpRight size={18} /></button>}
    </div>
  );
}

export default App;
