import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="container nav-content">
      <div className="logo flex items-center gap-2">
        <span className="logo-text">Akib K.</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#resume">My Resume</a>
        </li>
      </ul>
      <button className="btn-primary">
        Lets talk <span className="arrow">↗</span>
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="container">
      <div className="hero-card">
        <div className="hero-image-container">
          <img src="/hero-3d.jpg" alt="Hero Character" className="hero-image" />
          <div className="hero-overlay">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Designing Tomorrow's Interactions, Today
            </motion.h1>
            <button className="contact-btn">
              Contact today <span className="arrow">↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="stats-section">
    <div className="container stats-grid">
      <div className="stat-card">
        <h3>64+</h3>
        <p>Client</p>
      </div>
      <div className="stat-card">
        <h3>125</h3>
        <p>Projects Done</p>
      </div>
      <div className="stat-card">
        <h3>2yr</h3>
        <p>Experience</p>
      </div>
      <div className="stat-card">
        <h3>99%</h3>
        <p>Client Satisfaction</p>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="about-section">
    <div className="container about-grid">
      <div className="about-image-card">
        <img src="/about-3d.jpg" alt="About Me" className="about-img" />
      </div>
      <div className="about-text">
        <h2 className="about-title">
          i’m <span className="highlight">Akib Khondaker</span> — a{" "}
          <span className="heavy">designer</span> from{" "}
          <span className="heavy">BD</span>
        </h2>
        <p>
          Hi, I’m Akib — a UI/UX designer driven by a love for clean,
          thoughtful, and pixel-perfect design. I’m passionate about crafting
          interfaces that not only look great but feel effortless to use.
          Whether it’s a mobile app, website, or dashboard, I’m here to turn
          your ideas into beautiful and intuitive digital experiences. Let’s
          build something amazing together!
        </p>
        <div className="about-footer">
          <span>Have any project in mind?</span>
          <button className="contact-btn-small">
            Contact today <span className="arrow">↗</span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="services-section">
    <div className="container">
      <div className="services-grid">
        <div className="services-intro">
          <h2>UNLOCK THE POWER OF EXCEPTIONAL DESIGN</h2>
          <p>
            My full range of UI/UX services, including user analysis,
            wireframing, interactive prototyping, and final design
            implementation, will help you create engaging and effective digital
            products that stand out in the market.
          </p>
        </div>
        <div className="services-cards">
          {[
            {
              title: "UI/UX DESIGN SERVICES",
              desc: "Designing seamless, impactful user journeys.",
              icon: "↗",
            },
            {
              title: "USER INTERFACE DESIGN",
              desc: "Designing interfaces that engage and delight.",
              icon: "↗",
            },
            {
              title: "BRANDING AND IDENTITY",
              desc: "Building memorable brands with strong visual identity.",
              icon: "↗",
            },
            {
              title: "MOTION GRAPHICS",
              desc: "Bringing ideas to life with animation.",
              icon: "↗",
            },
          ].map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-header">
                <h3>{service.title}</h3>
                <span className="card-arrow">{service.icon}</span>
              </div>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="portfolio-section">
    <div className="container">
      <div className="portfolio-header">
        <h2>Portfolio Highlights</h2>
        <p>
          These selected works represent the essence of my design style—clean,
          effective, and user-driven.
        </p>
      </div>
      <div className="portfolio-grid">
        <div className="portfolio-item large">
          <div className="portfolio-img-wrapper dark">
            <img src="/innerbuild portfolio.webp" alt="Project 1" />
          </div>
          <div className="portfolio-info">
            <div className="info-main">
              <h3>FurnishUp</h3>
              <p>
                FurnishUp delivers a sleek, minimal UI with smooth navigation
                for a seamless, modern furniture shopping experience.
              </p>
            </div>
            <span className="portfolio-arrow">↗</span>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-img-wrapper white">
            <img src="/innerbuild.webp" alt="Project 2" />
          </div>
          <div className="portfolio-info">
            <div className="info-main">
              <h3>Neo-Brutalism Fintech UI</h3>
              <p>
                Kept things simple but sharp. Used a strong yellow to add a bit
                of energy to the overall minimal look.
              </p>
            </div>
            <span className="portfolio-arrow">↗</span>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-img-wrapper dark-blue">
            {/* Replace with actual image if available, using placeholder color for now */}
            <div
              className="placeholder-img"
              style={{ background: "#1A2138" }}
            ></div>
          </div>
          <div className="portfolio-info">
            <div className="info-main">
              <h3>Oopsurance</h3>
              <p>
                Protect what matters most with ease. Our app offers quick
                quotes, seamless claims, and reliable coverage.
              </p>
            </div>
            <span className="portfolio-arrow">↗</span>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-img-wrapper light-green">
            <div
              className="placeholder-img"
              style={{ background: "#E8F3E8" }}
            ></div>
          </div>
          <div className="portfolio-info">
            <div className="info-main">
              <h3>Kids Companion App</h3>
              <p>
                Meet your child's cheerful companion! This app blends fun,
                learning, and emotional growth.
              </p>
            </div>
            <span className="portfolio-arrow">↗</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container footer-content">
      <div className="cta-section">
        <h2>Lets work together</h2>
        <a href="mailto:hello@akib.design" className="email-link">
          hello@akib.design <span className="arrow-large">↗</span>
        </a>
      </div>
      <div className="footer-links-grid">
        <div className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About me</a>
          <a href="#services">Service</a>
          <a href="#portfolio">My projects</a>
          <a href="#contact">Contact me</a>
        </div>
        <div className="social-links">
          {/* Add social icons here */}
          <a href="#">FB</a>
          <a href="#">YT</a>
          <a href="#">IN</a>
          <a href="#">IG</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Keep up with me if you can.</p>
        <div className="email-input-wrapper">
          <input type="email" placeholder="Enter your email" />
          <span className="input-arrow">↗</span>
        </div>
        <p className="copyright">© akib.design || All rights reserved.</p>
      </div>
    </div>
  </footer>
);

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
