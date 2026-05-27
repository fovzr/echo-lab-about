import logo from './assets/Echo L .png';
import './App.css';
import trufLogo from './assets/Truf .png';
import strikeLogo from './assets/Strike .png';
import wsaltLogo from './assets/Wsalt.png';
import wafraLogo from './assets/Wafra inv.png';
import eyeziLogo from './assets/Eyezi.png';
import tmhLogo from './assets/Tmh .png'; 

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">

        <img
          src={logo}
          alt="Echo Lab logo"
          className="logo-img"
        />

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>

      {/* HERO */}

      <section className="hero">

        <div className="glow glow1"></div>
        <div className="glow glow2"></div>

        <p className="small-title">
          NOT YOUR USUAL LAB™
        </p>

        <h1>
          Strategic marketing,
          <br />
          media, and brand
          <br />
          experiences built
          <br />
          to echo.
        </h1>

        <p className="hero-text">
          Echo Lab is a Kuwait-based creative marketing agency specializing in
          branding, campaigns, media production, and modern digital storytelling.
        </p>

        <div className="hero-buttons">

          <a href="#services">
            <button className="primary-btn">
              View Services
            </button>
          </a>

          <a
            href="https://instagram.com/echolab.co"
            target="_blank"
            rel="noreferrer"
          >
            <button className="secondary-btn">
              Instagram
            </button>
          </a>

        </div>

      </section>

      {/* ABOUT */}

      <section id="about" className="about">

        <div>

          <p className="section-tag">
            ABOUT ECHO LAB
          </p>

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

      {/* CLIENTS */}

      <section className="clients">

        <p className="section-tag">
          CLIENTS
        </p>

        <h2>
          Brands That Echo
        </h2>

        <p className="clients-text">
          A selection of brands and campaigns shaped through strategy, visuals,
          media, and creative direction.
        </p>

        <div className="client-grid">

          <div className="client-card">
            <img src={trufLogo} alt="Truf logo" />
          </div>

          <div className="client-card">
            <img src={strikeLogo} alt="Strike Tournament logo" />
          </div>

          <div className="client-card">
            <img src={wsaltLogo} alt="Wsalt logo" />
          </div>

          <div className="client-card">
            <img src={wafraLogo} alt="Wafra logo" />
          </div>

          <div className="client-card">
            <img src={eyeziLogo} alt="Eyezi logo" />
          </div>

          <div className="client-card">
            <img src={tmhLogo} alt="TMH logo" />
          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section id="services" className="services">

        <p className="section-tag">
          SERVICES
        </p>

        <h2>
          What We Build
        </h2>

        <div className="service-grid">

          <div className="service-card">

            <h3>
              Media & Marketing
            </h3>

            <ul>
              <li>Branding identity</li>
              <li>Launching strategy</li>
              <li>Content creation</li>
              <li>Media campaigns</li>
              <li>Videography</li>
              <li>Photography</li>
            </ul>

          </div>

          <div className="service-card">

            <h3>
              Creative Production
            </h3>

            <ul>
              <li>Video production</li>
              <li>Menu photo shoots</li>
              <li>Packaging</li>
              <li>Styling</li>
              <li>Seasonal campaigns</li>
            </ul>

          </div>

          <div className="service-card">

            <h3>
              Brand Experience
            </h3>

            <ul>
              <li>PR lists</li>
              <li>Event management</li>
              <li>Giveaways</li>
              <li>Booth creation</li>
              <li>Public relations</li>
            </ul>

          </div>

        </div>

      </section>

      {/* PROCESS */}

      <section id="process" className="process">

        <p className="section-tag">
          PROCESS
        </p>

        <h2>
          How We Work
        </h2>

        <div className="process-grid">

          <div className="process-card">

            <span>01</span>

            <h3>
              Discover
            </h3>

            <p>
              Understanding your brand, goals, and audience.
            </p>

          </div>

          <div className="process-card">

            <span>02</span>

            <h3>
              Strategize
            </h3>

            <p>
              Building campaigns and creative direction.
            </p>

          </div>

          <div className="process-card">

            <span>03</span>

            <h3>
              Create
            </h3>

            <p>
              Producing visuals, media, and experiences.
            </p>

          </div>

          <div className="process-card">

            <span>04</span>

            <h3>
              Launch
            </h3>

            <p>
              Delivering campaigns designed to leave impact.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="contact">

        <h2>
          Build Your ECHO.
        </h2>

        <p>
          Let’s create something unforgettable.
        </p>

        <a
          href="mailto:info@echolabco.com"
          className="contact-btn"
        >
          info@echolabco.com
        </a>

      </section>

    </div>
  );
}

export default App;