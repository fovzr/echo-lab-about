import { useEffect, useRef } from 'react';
import logo from './assets/Echo L .png';
import herologo from './assets/ECHO ff.png';
import './App.css';
import trufLogo from './assets/Truf .png';
import strikeLogo from './assets/Strike .png';
import wsaltLogo from './assets/Wsalt.png';
import wafraLogo from './assets/Wafra inv.png';
import eyeziLogo from './assets/Eyezi.png';
import tmhLogo from './assets/Tmh .png';

function App() {
  const videoRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const bar = progressRef.current;
    const section = document.querySelector('.showreel');

    if (!video || !section) return;

    const isMobile = window.matchMedia('(max-width: 700px)').matches;

    video.muted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    if (isMobile) {
      video.loop = true;
      video.autoplay = true;
      video.controls = false;

      const playMobileVideo = () => {
        video.currentTime = 0.1;
        video.play().catch(() => {});
      };

      if (video.readyState >= 2) {
        playMobileVideo();
      } else {
        video.addEventListener('loadeddata', playMobileVideo, { once: true });
      }

      if (bar) bar.style.width = '100%';
      return;
    }

    video.pause();

    const scrub = () => {
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(scrolled / total, 1);

      if (!video.duration) return;

      const half = video.duration / 2;
      const raw = half + progress * video.duration;

      video.currentTime = (raw + 2) % video.duration;

      if (bar) bar.style.width = progress * 100 + '%';
    };

    const init = () => {
      video.pause();
      video.currentTime = Math.max(0.1, video.duration / 2);
      scrub();
      window.addEventListener('scroll', scrub, { passive: true });
    };

    if (video.readyState >= 1) {
      init();
    } else {
      video.addEventListener('loadedmetadata', init, { once: true });
    }

    return () => window.removeEventListener('scroll', scrub);
  }, []);

  useEffect(() => {
  const video = videoRef.current;
  const bar = progressRef.current;
  const section = document.querySelector('.showreel');

  if (!video || !section) return;

  video.pause();

  const scrub = () => {
    const rect = section.getBoundingClientRect();

const start = window.innerHeight;
const end = -rect.height;

const progress = Math.min(
  Math.max((start - rect.top) / (start - end), 0),
  1
);
    if (!video.duration) return;

    const half = video.duration / 2;
    const raw = half + progress * video.duration;

    video.currentTime = (raw + 2) % video.duration;

    if (bar) bar.style.width = progress * 100 + '%';
  };

  const init = () => {
    video.pause();
    video.currentTime = video.duration / 2;
    scrub();
    window.addEventListener('scroll', scrub, { passive: true });
  };

  if (video.readyState >= 1) {
    init();
  } else {
    video.addEventListener('loadedmetadata', init, { once: true });
  }

  return () => window.removeEventListener('scroll', scrub);
}, []);

  return (
    <div className="app">
      <nav className="navbar">
        <img src={logo} alt="Echo Lab logo" className="logo-img" />

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="glow glow1"></div>
        <div className="glow glow2"></div>

        <img src={herologo} alt="Echo Lab logo" className="hero-logo" />

        <p className="small-title">NOT YOUR USUAL LAB™</p>

        <h1>
          <br />
          Create the Signal.
          <br />
          Leave the ECHO.
        </h1>
      </section>

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

      <section className="showreel">
        <div className="showreel-sticky">
          <video
            ref={videoRef}
            className="showreel-video"
            src="/showreel.mp4"
            muted
            playsInline
            preload="auto"
            aria-label="Echo Lab showreel"
          />

          <div className="showreel-progress">
            <div className="showreel-progress-bar" ref={progressRef} />
          </div>
        </div>
      </section>

      <section className="clients">
        <p className="section-tag">CLIENTS</p>

        <h2>Brands That Echo</h2>

        <p className="clients-text">
          A selection of brands and campaigns shaped through strategy, visuals,
          media, and creative direction.
        </p>

        <div className="client-logo-band">
          <div className="client-logo-row">
            <img src={trufLogo} alt="Truf logo" />
            <img src={strikeLogo} alt="Strike logo" />
            <img src={wsaltLogo} alt="Wsalt logo" />
            <img src={wafraLogo} alt="Wafra logo" />
            <img src={eyeziLogo} alt="Eyezi logo" />
            <img src={tmhLogo} alt="TMH logo" />

            <img src={trufLogo} alt="Truf logo" />
            <img src={strikeLogo} alt="Strike logo" />
            <img src={wsaltLogo} alt="Wsalt logo" />
            <img src={wafraLogo} alt="Wafra logo" />
            <img src={eyeziLogo} alt="Eyezi logo" />
            <img src={tmhLogo} alt="TMH logo" />
          </div>
        </div>
      </section>

      <section id="services" className="services cinematic-services">
        <div className="services-intro">
          <p className="section-tag">SERVICES</p>

          <h2>
            Creative systems
            <br />
            built to move brands.
          </h2>

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

              <p>
                Strategy-led marketing, brand launches, media campaigns, and
                content systems designed to help brands show up with clarity.
              </p>

              <div className="service-tags">
                <p>Branding Identity</p>
                <p>Launching Strategy</p>
                <p>Media Campaigns</p>
                <p>Content Creation</p>
              </div>
            </div>
          </article>

          <article className="service-story service-story-two">
            <div className="service-symbol">◐</div>

            <div className="service-story-content">
              <span>02</span>
              <h3>Creative Production</h3>

              <p>
                Visual production for brands that need cinematic content,
                memorable photography, video direction, styling, and launch
                assets.
              </p>

              <div className="service-tags">
                <p>Videography</p>
                <p>Photography</p>
                <p>Video Production</p>
                <p>Menu Photo Shoots</p>
              </div>
            </div>
          </article>

          <article className="service-story service-story-three">
            <div className="service-symbol">◎</div>

            <div className="service-story-content">
              <span>03</span>
              <h3>Brand Experience</h3>

              <p>
                Events, PR activations, giveaways, booth concepts, and seasonal
                campaigns that turn a brand moment into something people
                remember.
              </p>

              <div className="service-tags">
                <p>Event Management</p>
                <p>Public Relations</p>
                <p>Booth Creation</p>
                <p>Seasonal Campaigns</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="process" className="process">
        <p className="section-tag">PROCESS</p>

        <h2>How We Work</h2>

        <div className="process-grid">
          <div className="process-card">
            <span>01</span>
            <h3>Discover</h3>
            <p>Understanding your brand, goals, and audience.</p>
          </div>

          <div className="process-card">
            <span>02</span>
            <h3>Strategize</h3>
            <p>Building campaigns and creative direction.</p>
          </div>

          <div className="process-card">
            <span>03</span>
            <h3>Create</h3>
            <p>Producing visuals, media, and experiences.</p>
          </div>

          <div className="process-card">
            <span>04</span>
            <h3>Launch</h3>
            <p>Delivering campaigns designed to leave impact.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-wrapper">
          <div className="contact-left">
            <p className="section-tag">CONTACT</p>

            <h2>
              Let's Build
              <br />
              Something That Echoes.
            </h2>

            <p>
              We create bold marketing experiences, cinematic content, and
              unforgettable brand identities for modern businesses.
            </p>

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

            <button type="button" className="contact-btn">
              Start a Project
            </button>
          </form>
        </div>
      </section>

      <div className="floating-socials">
        <a
          href="https://instagram.com/echolab.co"
          target="_blank"
          rel="noreferrer"
          className="social-icon instagram"
          aria-label="Echo Lab Instagram"
        >
          IG
        </a>

        <a
          href="https://wa.me/96590997115"
          target="_blank"
          rel="noreferrer"
          className="social-icon whatsapp"
          aria-label="Echo Lab WhatsApp"
        >
          WA
        </a>

        <a
          href="https://www.linkedin.com/company/echolabco/"
          target="_blank"
          rel="noreferrer"
          className="social-icon linkedin"
          aria-label="Echo Lab LinkedIn"
        >
          IN
        </a>

        <a
          href="mailto:info@echolabco.com"
          className="social-icon email"
          aria-label="Email Echo Lab"
        >
          @
        </a>
      </div>
    </div>
  );
}

export default App;