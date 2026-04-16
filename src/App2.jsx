import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

// ─── Navbar ──────────────────────────────────────────────────────────────────
const Navbar = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <nav className="navbar" ref={ref}>
      <div className="container nav-content">
        <span className="logo-text">Oktav.</span>
        <ul className="nav-links">
          {[
            ["Accueil", "home"],
            ["À propos", "about"],
            ["Services", "services"],
            ["Projets", "portfolio"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
        <motion.button
          className="btn-primary"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
        >
          Discutons <span className="arrow">↗</span>
        </motion.button>
      </div>
    </nav>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.4,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow" />
      <div className="container hero-inner">
        <div className="hero-text">
          <motion.span
            className="hero-badge"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            🌍 Cotonou, Bénin · Excellence Team
          </motion.span>
          <h1>
            <span className="hero-line">Fullstack</span>
            <span className="hero-line gold">× IA</span>
            <span className="hero-line">Developer</span>
          </h1>
          <motion.p
            className="hero-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            Je construis des produits web intelligents —<br />
            de la landing page à l'agent conversationnel.
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <a href="#portfolio">
              <button className="contact-btn">
                Voir mes projets <span className="arrow">↗</span>
              </button>
            </a>
            <a href="mailto:contact@excellenceteam.dev" className="mail-link">
              contact@excellenceteam.dev
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-lottie-wrap"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          {/*
            Remplace le src par une animation Lottie de ton choix depuis lottiefiles.com
            Suggestions :
              - Coding : https://lottiefiles.com/animations/coding
              - AI Brain : https://lottiefiles.com/animations/artificial-intelligence
          */}
          <Player
            src="https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.json"
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

// ─── Stats ────────────────────────────────────────────────────────────────────
const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { value: "6+", label: "Projets livrés" },
    { value: "2025", label: "Excellence Team" },
    { value: "18e", label: "Olympiades nationales maths" },
    { value: "∞", label: "Curiosité" },
  ];

  return (
    <section className="stats-section" ref={ref}>
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <h3>{s.value}</h3>
            <p>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ─── About ────────────────────────────────────────────────────────────────────
const About = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-img-card", {
        scrollTrigger: { trigger: ".about-section", start: "top 70%" },
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".about-text-block", {
        scrollTrigger: { trigger: ".about-section", start: "top 70%" },
        x: 80,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-img-card">
          {/*
            Remplace par une animation Lottie "developer at work" ou similaire
            Ex: https://lottiefiles.com/animations/developer
          */}
          <Player
            src="https://lottie.host/your-about-lottie.json"
            loop
            autoplay
            style={{ width: "100%", height: "320px" }}
          />
        </div>
        <div className="about-text-block">
          <h2 className="about-title">
            je suis <span className="highlight">Oktav</span> —<br />
            un <span className="heavy">builder</span> de{" "}
            <span className="heavy">produits IA</span>
          </h2>
          <p>
            Étudiant en Génie Électrique & Informatique à l'INSTI de Lokossa,
            co-fondateur d'Excellence Team. Je code des apps web fullstack,
            j'intègre des LLMs, j'explore la cybersécurité Red Team et je
            m'amuse avec Three.js le soir. Classé 18e aux olympiades nationales
            de mathématiques.
          </p>
          <div className="about-footer">
            <span>Un projet en tête ?</span>
            <motion.button
              className="contact-btn-small"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Contactez-moi <span>↗</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Services ─────────────────────────────────────────────────────────────────
const Services = () => {
  const services = [
    {
      title: "DÉVELOPPEMENT FULLSTACK JS",
      desc: "React, Node.js, Next.js, MongoDB — du front au back.",
      icon: "↗",
    },
    {
      title: "INTÉGRATION IA & LLM",
      desc: "Agents conversationnels, RAG, OpenRouter, Groq, fine-tuning.",
      icon: "↗",
    },
    {
      title: "CYBERSÉCURITÉ RED TEAM",
      desc: "Scripting offensif, Bash avancé, audit et pentest.",
      icon: "↗",
    },
    {
      title: "INTERFACES 3D & IMMERSIVES",
      desc: "Three.js, React Three Fiber, shaders, animations WebGL.",
      icon: "↗",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: { trigger: ".services-section", start: "top 65%" },
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-grid">
          <div className="services-intro">
            <h2>CE QUE JE CONSTRUIS POUR VOUS</h2>
            <p>
              Du prototype à la production — je couvre tout le cycle de
              développement, avec une obsession pour la qualité et
              l'intelligence artificielle embarquée.
            </p>
          </div>
          <div className="services-cards">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="service-card"
                whileHover={{ scale: 1.02, borderColor: "#C9A84C" }}
                transition={{ duration: 0.18 }}
              >
                <div className="card-header">
                  <h3>{s.title}</h3>
                  <span className="card-arrow">{s.icon}</span>
                </div>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Portfolio ────────────────────────────────────────────────────────────────
const Portfolio = () => {
  const projects = [
    {
      title: "LE TWIN",
      desc: "E-commerce Gen Z streetwear — React + Laravel Sanctum + studio de customisation graphique.",
      tags: ["React", "Laravel", "E-commerce"],
      size: "large",
      bg: "dark",
    },
    {
      title: "StudyNotes",
      desc: "PWA IA pour étudiants — Groq, OpenRouter, Docker, service worker offline.",
      tags: ["React", "Node.js", "AI", "PWA"],
      size: "",
      bg: "dark-purple",
    },
    {
      title: "VideoGen",
      desc: "Markdown → vidéo animée avec narration IA — Remotion + OpenRouter + Flask/gTTS.",
      tags: ["Remotion", "Python", "AI"],
      size: "",
      bg: "dark-blue",
    },
    {
      title: "CodeArena",
      desc: "Éditeur de code en ligne avec duels IA en temps réel — Monaco, Socket.io, OAuth.",
      tags: ["Monaco", "Socket.io", "AI"],
      size: "",
      bg: "dark-green",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="portfolio-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projets sélectionnés
          </motion.h2>
          <p>Des produits qui tournent en prod — pas juste des wireframes.</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className={`portfolio-item ${p.size}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <div className={`portfolio-img-wrapper ${p.bg}`}>
                <div className="project-tags">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="portfolio-info">
                <div className="info-main">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <span className="portfolio-arrow">↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer id="contact" className="footer">
    <div className="container footer-content">
      <div className="cta-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Construisons ensemble
        </motion.h2>
        <a href="mailto:contact@excellenceteam.dev" className="email-link">
          contact@excellenceteam.dev <span className="arrow-large">↗</span>
        </a>
      </div>
      <div className="footer-links-grid">
        <div className="footer-nav">
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Projets</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-links">
          <a href="#">GH</a>
          <a href="#">LN</a>
          <a href="#">TW</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Excellence Team © 2025 · Cotonou, Bénin · Tous droits réservés</p>
      </div>
    </div>
  </footer>
);

// ─── App ──────────────────────────────────────────────────────────────────────
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
