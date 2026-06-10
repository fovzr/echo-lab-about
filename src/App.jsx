import { useEffect, useState, useRef } from 'react';
import logo from './assets/EchoL.png';
import herologo from './assets/ECHOff.png';
import './App.css';
import trufLogo from './assets/Truf.png';
import strikeLogo from './assets/Strike.png';
import wsaltLogo from './assets/Wsalt.png';
import wafraLogo from './assets/WafraInv.png';
import eyeziLogo from './assets/Eyezi.png';
import tmhLogo from './assets/Tmh.png';
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef(null);
  // ── Force autoplay on mobile ──────────────────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  // ── Intersection observer for service cards ────────────────
  useEffect(() => {
    const serviceCards = document.querySelectorAll('.service-story');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('service-story-visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    serviceCards.forEach((card) => observer.observe(card));
    return () => serviceCards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <img src={logo} alt="Echo Lab logo" className="logo-img" />

        {/* Desktop links */}
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <a href="#about"    onClick={() => setMenuOpen(false)}>About</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#process"  onClick={() => setMenuOpen(false)}>Process</a>
        <a href="#contact"  onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="glow glow1"></div>
        <div className="glow glow2"></div>
        <img src={herologo} alt="Echo Lab logo" className="hero-logo" />
        <p className="small-title">NOT YOUR USUAL LAB™</p>
        <h1>
          <br />
          Build your ECHO.
        </h1>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div>
          <p className="section-tag">ABOUT ECHO LAB</p>
          <h2>
            Built for brands
            <br />
            that want to
            <br />
            be remembered.
          </h2>
        </div>
        <p className="about-text">
          Echo Lab combines strategy, creativity, and media production to help
          brands create meaningful impact. From campaigns and branding to
          cinematic storytelling and launch strategies, we build experiences
          that stay with audiences.
        </p>
      </section>

      {/* SHOWREEL */}
      <section className="showreel">
        <video
          ref={videoRef}
          className="showreel-video"
          src="/showreel.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </section>

      {/* CLIENTS */}
      <section className="clients">
        <p className="section-tag">CLIENTS</p>
        <h2>Brands That Echo</h2>
        <p className="clients-text">
          A selection of brands and campaigns shaped through strategy, visuals,
          media, and creative direction.
        </p>
        <div className="client-logo-band">
          <div className="client-logo-row">
            <img src={trufLogo} alt="Truf logo" className="truf-logo" />
            <img src={strikeLogo} alt="Strike logo" className="Strike-logo"/>
            <img src={wsaltLogo} alt="Wsalt logo" />
            <img src={wafraLogo} alt="Wafra logo" className="wafra-logo" />
            <img src={eyeziLogo} alt="Eyezi logo" />
            <img src={tmhLogo} alt="TMH logo" />

            <img src={trufLogo} alt="Truf logo" className="truf-logo" />
            <img src={strikeLogo} alt="Strike logo" />
            <img src={wsaltLogo} alt="Wsalt logo" />
            <img src={wafraLogo} alt="Wafra logo" className="wafra-logo" />
            <img src={eyeziLogo} alt="Eyezi logo" />
            <img src={tmhLogo} alt="TMH logo" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services cinematic-services">
        <div className="services-intro">
          <p className="section-tag">SERVICES</p>
          <h2>Creative systems<br />built to move brands.</h2>
          <p className="services-lead">
            From strategy to production, Echo Lab builds campaign experiences
            that feel intentional, cinematic, and impossible to ignore.
          </p>
        </div>
        <div className="service-story-list">
          <article className="service-story service-story-one">
            <div className="service-symbol">✦</div>
            <div className="service-story-content">
              <span>01</span>
              <h3>Media & Marketing</h3>
              <p>Strategy-led marketing, brand launches, media campaigns, and content systems designed to help brands show up with clarity.</p>
              <div className="service-tags">
                <p>Branding Identity</p><p>Launching Strategy</p>
                <p>Media Campaigns</p><p>Content Creation</p>
              </div>
            </div>
          </article>
          <article className="service-story service-story-two">
            <div className="service-symbol">◐</div>
            <div className="service-story-content">
              <span>02</span>
              <h3>Creative Production</h3>
              <p>Visual production for brands that need cinematic content, memorable photography, video direction, styling, and launch assets.</p>
              <div className="service-tags">
                <p>Videography</p><p>Photography</p>
                <p>Video Production</p><p>Menu Photo Shoots</p>
              </div>
            </div>
          </article>
          <article className="service-story service-story-three">
            <div className="service-symbol">◎</div>
            <div className="service-story-content">
              <span>03</span>
              <h3>Brand Experience</h3>
              <p>Events, PR activations, giveaways, booth concepts, and seasonal campaigns that turn a brand moment into something people remember.</p>
              <div className="service-tags">
                <p>Event Management</p><p>Public Relations</p>
                <p>Booth Creation</p><p>Seasonal Campaigns</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="process">
        <p className="section-tag">PROCESS</p>
        <h2>How We Work</h2>
        <div className="process-grid">
          <div className="process-card"><span>01</span><h3>Discover</h3><p>Understanding your brand, goals, and audience.</p></div>
          <div className="process-card"><span>02</span><h3>Strategize</h3><p>Building campaigns and creative direction.</p></div>
          <div className="process-card"><span>03</span><h3>Create</h3><p>Producing visuals, media, and experiences.</p></div>
          <div className="process-card"><span>04</span><h3>Launch</h3><p>Delivering campaigns designed to leave impact.</p></div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-wrapper">
          <div className="contact-left">
            <p className="section-tag">CONTACT</p>
            <h2>Let's Build<br />Something That Echoes.</h2>
            <p>We create bold marketing experiences, cinematic content, and unforgettable brand identities for modern businesses.</p>
            <div className="contact-info">
              <div className="contact-item">
                <span>Email us:</span>
                <a href="mailto:info@echolabco.com">info@echolabco.com</a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Company" />
            </div>
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Tell us about your project..." />
            <button type="button" className="contact-btn">Start a Project</button>
          </form>
        </div>
      </section>

     {/* FLOATING SOCIALS */}
<div className="floating-socials">
  <a
    href="https://instagram.com/echolab.co"
    target="_blank"
    rel="noreferrer"
    className="social-icon instagram"
    aria-label="Echo Lab Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://wa.me/96590997115"
    target="_blank"
    rel="noreferrer"
    className="social-icon whatsapp"
    aria-label="Echo Lab WhatsApp"
  >
    <FaWhatsapp />
  </a>

  <a
    href="https://www.linkedin.com/company/echolabco/"
    target="_blank"
    rel="noreferrer"
    className="social-icon linkedin"
    aria-label="Echo Lab LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="mailto:info@echolabco.com"
    className="social-icon email"
    aria-label="Email Echo Lab"
  >
    <MdEmail />
  </a>
</div>

    </div>
  );
}

export default App;