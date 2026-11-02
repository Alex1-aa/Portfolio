import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles.css';

// TODO: replace with your real LinkedIn profile URL.
const LINKEDIN_URL = 'https://www.linkedin.com/in/your-profile';

const projects = [
  {
    number: '01',
    label: 'Featured project',
    type: 'Full-stack app',
    title: 'Taskflow',
    description: 'A task management workspace with a React frontend and a Node.js REST API for creating, updating, and deleting tasks.',
    link: 'Open live app',
    url: 'https://taskflow-eta-one-42.vercel.app/',
    tags: ['React', 'Node.js', 'REST API'],
    visual: 'visual-lime',
    visualLabel: '01 — build / learn / iterate',
    shape: 'shape-window'
  },
  {
    number: '02',
    label: 'Project',
    type: 'Dashboard · UI',
    title: 'Personal Finance',
    description: 'A personal finance dashboard that makes spending, budgets, and savings goals legible through clear charts and summaries.',
    link: 'Open live app',
    url: 'https://finance-umber-six.vercel.app/',
    tags: ['React', 'TypeScript', 'Recharts'],
    visual: 'visual-blue',
    visualLabel: '02 — systems thinking',
    shape: 'shape-api'
  },
  {
    number: '03',
    label: 'Project',
    type: 'Product · UI',
    title: 'Weather',
    description: 'A weather forecast app with location search, a six-day outlook, saved preferences, and friendly loading and error states.',
    link: 'Open live app',
    url: 'https://weather-tau-ivory-39.vercel.app/',
    tags: ['React', 'Open-Meteo API', 'Vitest'],
    visual: 'visual-paper',
    visualLabel: '03 — make it clear',
    shape: 'shape-stack'
  }
];

const skillGroups = [
  { index: '01', title: 'Languages', items: ['JavaScript', 'Python', 'Java', 'SQL', 'HTML', 'CSS'] },
  { index: '02', title: 'Frameworks', items: ['React', 'Node.js'] },
  { index: '03', title: 'Tools & practices', items: ['Git & GitHub', 'REST APIs', 'PostgreSQL'] }
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeNav = () => setIsOpen(false);

  return (
    <header className="site-header" id="top">
      <a className="wordmark" href="#top" aria-label="Back to the top">
        <span className="wordmark-mark" aria-hidden="true">&lt;/&gt;</span>
        <span>MY <span className="wordmark-accent">PORTFOLIO</span></span>
      </a>
      <button
        className="menu-toggle"
        aria-expanded={isOpen}
        aria-controls="site-nav"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span className="sr-only">Toggle navigation</span>
      </button>
      <nav className={`site-nav${isOpen ? ' is-open' : ''}`} id="site-nav" aria-label="Primary navigation">
        <a href="#about" onClick={closeNav}>About</a>
        <a href="#projects" onClick={closeNav}>Projects</a>
        <a href="#skills" onClick={closeNav}>Skills</a>
        <a href="#contact" className="nav-cta" onClick={closeNav}>
          Contact <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

function Terminal() {
  const lines = [
    <><b className="code-purple">const</b> <b className="code-blue">engineer</b> = {'{'}</>,
    <><b className="code-green">name</b>: <b className="code-yellow">'Adejare Ayooluwa Alex'</b>,</>,
    <><b className="code-green">degree</b>: <b className="code-yellow">'BSc Software Engineering'</b>,</>,
    <><b className="code-green">school</b>: <b className="code-yellow">'Babcock University'</b>,</>,
    <><b className="code-green">approach</b>: [</>,
    <><b className="code-yellow">'curious'</b>, <b className="code-yellow">'precise'</b>,</>,
    <><b className="code-yellow">'always learning'</b></>,
    <>],</>,
    <>{'};'}<span className="cursor"></span></>
  ];

  return (
    <div className="hero-terminal" aria-label="Developer profile snapshot">
      <div className="terminal-topbar">
        <span className="terminal-lights">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span>profile.ts</span>
        <span className="terminal-index">01 / 04</span>
      </div>
      <div className="terminal-body">
        {lines.map((line, index) => (
          <div
            className={`code-line ${index > 0 && index < 5 ? 'indent' : ''} ${index > 4 && index < 7 ? 'double-indent' : ''}`}
            key={index}
          >
            <span className="line-number">{String(index + 1).padStart(2, '0')}</span>
            <span>{line}</span>
          </div>
        ))}
      </div>
      <div className="terminal-footer">
        <span><span className="footer-dot"></span> open to build</span>
        <span>UTF-8 · TypeScript</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-pad" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot"></span> Available for opportunities
        </div>
        <p className="hero-kicker">
          Software engineering graduate <span className="slash">/</span> Babcock University
        </p>
        <h1 id="hero-title">
          Building useful things<br />
          <em>with intention.</em>
        </h1>
        <p className="hero-intro">
          I’m <strong>Adejare Ayooluwa Alex</strong>, a software engineering graduate who enjoys turning
          thoughtful ideas into reliable, human-centred digital experiences.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            View selected work <span aria-hidden="true">↓</span>
          </a>
          <a href="#contact" className="text-link">
            Let’s connect <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-facts" aria-label="Quick facts">
          <div>
            <span className="fact-label">Based in</span>
            <span className="fact-value">Nigeria · open to remote</span>
          </div>
          <div>
            <span className="fact-label">Focus</span>
            <span className="fact-value">Full-stack development</span>
          </div>
        </div>
      </div>
      <Terminal />
    </section>
  );
}

function About() {
  return (
    <section className="about section-pad" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <span className="section-number">01</span>
        <h2 id="about-title">
          A little<br />
          <em>about me.</em>
        </h2>
      </div>
      <div className="about-content">
        <p className="section-lead">I care about the space where clean code meets clear thinking.</p>
        <div className="about-grid">
          <div className="about-text">
            <p>
              As a software engineering graduate of <strong>Babcock University</strong>, I’ve built a foundation
              across software design, web development, databases, and collaborative problem-solving.
            </p>
            <p>
              Whether I’m shaping an interface or working through a backend challenge, I bring a learning mindset,
              attention to detail, and a preference for solutions that stay understandable long after they ship.
            </p>
          </div>
          <div className="about-note">
            <span className="note-mark">“</span>
            <p>Good software should feel considered — from the first click to the last line of code.</p>
            <span className="note-line"></span>
            <span className="note-caption">working principle / 001</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ project }) {
  return (
    <div className={`project-visual ${project.visual}`}>
      <span className="visual-label">{project.visualLabel}</span>
      <div className={`visual-shape ${project.shape}`}>
        {project.shape === 'shape-window' && (
          <>
            <span></span>
            <span></span>
            <span></span>
            <b>
              ship<br />
              something<br />
              useful<span className="blink">_</span>
            </b>
          </>
        )}
        {project.shape === 'shape-api' && (
          <>
            <span>GET</span>
            <b>/your-api</b>
            <i>200 OK</i>
          </>
        )}
        {project.shape === 'shape-stack' && (
          <>
            <span></span>
            <span></span>
            <span></span>
            <b>
              thoughtful<br />
              by default
            </b>
          </>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.number === '01' ? 'project-card-featured' : ''}`}>
      <div className="project-meta">
        <span>{project.number} / {project.label}</span>
        <span>{project.type}</span>
      </div>
      <div className="project-body">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
            {project.link} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <ProjectVisual project={project} />
      </div>
      <div className="tag-row">
        {project.tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="projects section-pad" id="projects" aria-labelledby="projects-title">
      <div className="section-heading projects-heading">
        <span className="section-number">02</span>
        <h2 id="projects-title">
          Selected<br />
          <em>projects.</em>
        </h2>
        <p className="heading-aside">
          A few case-study slots ready for your completed work.<br />
          Swap the bracketed copy with your real project details.
        </p>
      </div>
      <div className="project-list">
        {projects.map(project => <ProjectCard project={project} key={project.number} />)}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills section-pad" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <span className="section-number">03</span>
        <h2 id="skills-title">
          Tools of<br />
          <em>the trade.</em>
        </h2>
      </div>
      <div className="skills-content">
        <p className="section-lead">A growing toolkit, grounded in fundamentals.</p>
        <div className="skills-grid">
          {skillGroups.map(group => (
            <div className="skill-group" key={group.index}>
              <span className="skill-index">{group.index}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div className="contact-copy">
          <span className="section-number">04</span>
          <h2 id="contact-title">
            Have a good<br />
            <em>idea?</em>
          </h2>
          <p>
            I’m always open to thoughtful conversations, collaborative builds, and opportunities to grow.
            If you’re working on something meaningful, I’d love to hear about it.
          </p>
          <a href="mailto:adejareayo1@gmail.com" className="button button-light">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-details">
          <span className="details-label">Find me here</span>
          <a href="https://github.com/Alex1-aa" target="_blank" rel="noreferrer">
            https://github.com/Alex1-aa<span>↗</span>
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            LinkedIn <span>↗</span>
          </a>
          <a href="mailto:adejareayo1@gmail.com">
            adejareayo1@gmail.com <span>↗</span>
          </a>
          <div className="detail-line"></div>
          <span className="details-label">Currently</span>
          <p>Open to graduate roles, freelance projects, and interesting collaborations.</p>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <div className="section-rule" aria-hidden="true">
          <span>scroll to explore</span>
          <span className="rule-line"></span>
          <span>02—04</span>
        </div>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Adejare Ayooluwa Alex</span>
        <span className="footer-mono">BU · SE · 001</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
