import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Player } from "@lottiefiles/react-lottie-player";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

// Custom Interactive SVG Logo Toggle
const LogoToggle = ({ isDark, toggleDark }) => {
  return (
    <div
      onClick={toggleDark}
      style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      title={isDark ? "Passer en mode jour" : "Passer en mode nuit"}
    >
      <motion.svg
        width="45"
        height="45"
        viewBox="0 0 100 100"
        style={{
          borderRadius: "50%",
          background: "var(--accent)",
          border: "2px solid var(--black)",
          flexShrink: 0,
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <path
          d="M 5 45 C 5 10 95 10 95 45 C 80 20 20 20 5 45 Z"
          fill="#1A1A1A"
        />
        <motion.path
          animate={{
            d: isDark ? "M 30 50 Q 35 52 40 50" : "M 32 48 Q 35 44 38 48",
          }}
          transition={{ duration: 0.4 }}
          stroke="#1A1A1A"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <motion.path
          animate={{
            d: isDark ? "M 60 50 Q 65 52 70 50" : "M 62 48 Q 65 44 68 48",
          }}
          transition={{ duration: 0.4 }}
          stroke="#1A1A1A"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <motion.path
          animate={{
            d: isDark ? "M 45 70 Q 50 68 55 70" : "M 38 65 Q 50 78 62 65",
          }}
          transition={{ duration: 0.4 }}
          stroke="#1A1A1A"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <AnimatePresence>
          {isDark && (
            <motion.text
              initial={{ opacity: 0, y: 10, scale: 0.5 }}
              animate={{
                opacity: [0, 1, 0],
                y: [10, -15],
                scale: [0.5, 1.2],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              x="70"
              y="30"
              fontSize="24"
              fill="#1A1A1A"
              fontWeight="900"
              style={{ fontFamily: "sans-serif" }}
            >
              Z
            </motion.text>
          )}
        </AnimatePresence>
      </motion.svg>
    </div>
  );
};

// Striking Stagger Text Reveal Animation
const StaggerText = ({ text }) => {
  const words = text.split(" ");
  return (
    <div style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{
            marginRight: "12px",
            display: "inline-block",
            paddingBottom: "5px",
          }}
          initial={{ y: "100%", opacity: 0, rotateZ: 5 }}
          whileInView={{ y: 0, opacity: 1, rotateZ: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: i * 0.1,
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
        >
          {word === "Passionné" || word === "Digital" ? (
            <span style={{ color: "var(--accent)" }}>{word}</span>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </div>
  );
};

// Striking Block Reveal Animation
const RevealBlock = ({ children, delay = 0, direction = "up" }) => {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Navbar = ({ isDark, toggleDark }) => (
  <motion.nav
    className="navbar-wrapper"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
  >
    <div className="navbar">
      <div className="logo">
        <LogoToggle isDark={isDark} toggleDark={toggleDark} />
        <span className="logo-title">Octave B.</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#accueil">Accueil</a>
        </li>
        <li>
          <a href="#apropos">À propos</a>
        </li>
        <li>
          <a href="#competences">Compétences</a>
        </li>
        <li>
          <a href="#projets">Projets</a>
        </li>
      </ul>
      <a href="#contact" style={{ textDecoration: "none" }}>
        <motion.button
          className="nav-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discutons ↗
        </motion.button>
      </a>
    </div>
  </motion.nav>
);

const Hero = () => {
  const ref = useRef(null);

  return (
    <section id="accueil" className="hero-section" ref={ref}>
      <div className="container">
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-content">
            <h1 style={{ display: "flex", flexDirection: "column" }}>
              <StaggerText text="Développeur Web Passionné" />
              <StaggerText text="Créateur Digital" />
            </h1>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Bienvenue dans mon univers numérique où le design rencontre la
              performance. Je construis des expériences web uniques, rapides et
              ultra-intelligentes.
            </motion.p>
            <motion.a
              href="#contact"
              className="btn-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              whileHover={{ scale: 1.08, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactez-moi ↗
            </motion.a>
          </div>
          <div className="hero-image-container">
            <motion.div
              className="hero-img-card"
              animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            >
              <motion.img
                src="/octave-new-profile.png"
                alt="Octave Profile"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>
        </motion.div>

        <div className="stats-grid">
          {[
            { val: "64+", label: "Clients Satisfaits" },
            { val: "125", label: "Projets Livrés" },
            { val: "2ans", label: "D'Expérience" },
            { val: "99%", label: "Taux de Réussite" },
          ].map((stat, i) => (
            <RevealBlock key={i} delay={i * 0.1}>
              <div className="stat-item">
                <h3>{stat.val}</h3>
                <p>{stat.label}</p>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="apropos" className="about-section">
      <div className="container">
        <RevealBlock>
          <div className="white-card">
            <h2 className="about-header">
              Je suis <strong>Octave BAHOUN</strong> <br />
              <span>— un développeur basé au Bénin</span>
            </h2>
            <div className="about-content">
              <div className="about-img-container">
                <motion.img
                  src="/about-3d.jpg"
                  alt="About Octave"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="about-text">
                <p style={{ marginBottom: "20px" }}>
                  Salut ! Passionné par le code depuis mes débuts, je me
                  consacre aujourd'hui à la création d'applications web et de
                  sites interactifs qui repoussent les limites. Mon approche est
                  simple :
                  <strong>
                    {" "}
                    un design minimaliste couplé à une performance redoutable
                  </strong>
                  .
                </p>
                <p>
                  En dehors du code, je suis passionné par l'art digital et la
                  musique. J'adore intégrer des concepts créatifs dans mes
                  projets techniques. Construisons quelque chose de mémorable
                  ensemble !
                </p>
              </div>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: "React & Next.js", value: 90 },
    { name: "JavaScript / ES6+", value: 85 },
    { name: "CSS3 / TailwindCSS", value: 95 },
    { name: "GSAP & Framer Motion", value: 80 },
  ];

  const softSkills = [
    "Résolution de problèmes",
    "Créativité",
    "Esprit d'équipe",
    "Autonomie",
    "Attention aux détails",
    "Adaptabilité",
  ];

  return (
    <section id="competences" className="skills-section">
      <div className="container">
        <RevealBlock>
          <h2 className="section-title center">
            Mes <strong>Compétences</strong>
          </h2>
        </RevealBlock>

        <RevealBlock delay={0.2}>
          <div className="white-card">
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Techniques</h3>
                <div>
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="skill-bar-container">
                      <div className="skill-info">
                        <span>{skill.name}</span>
                        <span>{skill.value}%</span>
                      </div>
                      <div className="skill-track">
                        <motion.div
                          className="skill-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.value}%` }}
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.1,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3>Soft Skills</h3>
                <div className="soft-skills-wrapper">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="soft-skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "var(--bg-bento)",
                        color: "var(--accent)",
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: "40px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Player
                    autoplay
                    loop
                    src="https://lottie.host/812dbf2d-70f7-43ca-80e9-74d320958434/Y831pQun2w.json"
                    style={{ height: "150px", width: "150px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Plateforme FurnishUp",
      desc: "Une expérience e-commerce révolutionnaire pour le mobilier de maison avec des intéractions 3D web.",
      tech: ["React", "GSAP", "Tailwind"],
      img: "/innerbuild portfolio.webp",
    },
    {
      title: "Fintech Néo-Brutale",
      desc: "Un tableau de bord bancaire stylisé, combinant accessibilité et architecture de données complexe.",
      tech: ["Next.js", "Framer Motion"],
      img: "/innerbuild.webp",
    },
    {
      title: "Oopsurance Cover",
      desc: "L'assurance simplifiée via une application mobile super intelligente et intuitive.",
      tech: ["React Native", "Node.js"],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    },
    {
      title: "Kids Companion",
      desc: "Interface ludique d'apprentissage pour les jeunes enfants, axée sur les micro-interactions.",
      tech: ["Vue.js", "CSS Modules"],
      img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section id="projets" className="projects-section">
      <div className="container">
        <RevealBlock>
          <h2 className="section-title center">
            Mes <strong>Projets</strong>
          </h2>
        </RevealBlock>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <RevealBlock key={index} delay={index * 0.1}>
              <a href="#" className="project-card">
                <div className="project-img-wrapper">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="tech-tags">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="container">
      <RevealBlock>
        <div className="white-card">
          <h2 className="section-title">
            Prêt à <strong>collaborer ?</strong>
          </h2>

          <div className="contact-grid">
            <div className="contact-info">
              <RevealBlock direction="right" delay={0.1}>
                <motion.div className="contact-card" whileHover={{ x: 10 }}>
                  <div className="contact-icon">📧</div>
                  <div>
                    <h4>Envoyez un mail</h4>
                    <p>hello@octave.design</p>
                  </div>
                </motion.div>
              </RevealBlock>
              <RevealBlock direction="right" delay={0.2}>
                <motion.div className="contact-card" whileHover={{ x: 10 }}>
                  <div className="contact-icon">📱</div>
                  <div>
                    <h4>Appelez-moi</h4>
                    <p>+33 6 00 00 00 00</p>
                  </div>
                </motion.div>
              </RevealBlock>
              <RevealBlock direction="right" delay={0.3}>
                <motion.div className="contact-card" whileHover={{ x: 10 }}>
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Localisation</h4>
                    <p>Bénin, Afrique</p>
                  </div>
                </motion.div>
              </RevealBlock>
            </div>

            <RevealBlock direction="left" delay={0.2}>
              <form className="contact-form">
                <input type="text" placeholder="Votre Nom" required />
                <input type="email" placeholder="Votre Email" required />
                <textarea
                  placeholder="Comment puis-je vous aider ?"
                  required
                ></textarea>
                <motion.button
                  type="submit"
                  className="btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Envoyer le message ↗
                </motion.button>
              </form>
            </RevealBlock>
          </div>
        </div>
      </RevealBlock>
    </div>
  </section>
);

const Footer = ({ isDark }) => (
  <footer>
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ marginBottom: 20 }}>
        <LogoToggle isDark={isDark} toggleDark={() => {}} />
      </div>
      <p>© {new Date().getFullYear()} Octave BAHOUN. Tous droits réservés.</p>
    </div>
  </footer>
);

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(!isDark);

  return (
    <>
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer isDark={isDark} />
    </>
  );
}
