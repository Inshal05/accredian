"use client";

import { useEffect, useMemo, useState } from "react";
import ContactModal from "@/components/contact-modal";
import {
  audiences,
  brandAssets,
  catFramework,
  domainCards,
  edgeHighlights,
  faqs,
  footerLinks,
  heroHighlights,
  heroMetrics,
  navigationItems,
  partnerLogos,
  processSteps,
  segmentationCards,
  socialLinks,
  stats,
  testimonials,
} from "@/lib/enterprise-data";

function BrandMark({ footer = false }) {
  return (
    <a
      aria-label="Accredian Enterprise"
      className={footer ? "brand-mark footer-brand-mark" : "brand-mark"}
      href="#home"
    >
      <img
        alt="Accredian"
        className="brand-logo-image"
        src={footer ? brandAssets.footerLogo : brandAssets.headerLogo}
      />
    </a>
  );
}

function Icon({ name }) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.8",
  };

  const icons = {
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 12.2l2.3 2.4 4.8-5.2" />
      </>
    ),
    spark: (
      <>
        <path d="M12 3l1.9 4.8L19 9.7l-4.2 2.1L13 17l-1.8-5.2L7 9.7l5.1-1.9L12 3z" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="9" r="2.6" />
        <circle cx="15.5" cy="10.5" r="2.1" />
        <path d="M4.8 18c.9-2.3 2.7-3.5 5.2-3.5s4.3 1.2 5.2 3.5" />
        <path d="M14 17.8c.6-1.6 1.9-2.5 3.8-2.5 1 0 1.9.2 2.7.8" />
      </>
    ),
    gear: (
      <>
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2L5.5 5.5" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3.8 12h16.4M12 3c2.4 2.5 3.8 5.6 3.8 9S14.4 18.5 12 21c-2.4-2.5-3.8-5.6-3.8-9S9.6 5.5 12 3z" />
      </>
    ),
    expand: (
      <>
        <path d="M8 8L4.5 4.5M8 8V4.7M8 8H4.7" />
        <path d="M16 8l3.5-3.5M16 8V4.7M16 8h3.3" />
        <path d="M8 16l-3.5 3.5M8 16v3.3M8 16H4.7" />
        <path d="M16 16l3.5 3.5M16 16v3.3M16 16h3.3" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="5.2" />
        <circle cx="12" cy="12" r="1.8" />
      </>
    ),
    box: (
      <>
        <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" />
        <path d="M5 7l7 4 7-4M12 11v10" />
      </>
    ),
    bulb: (
      <>
        <path d="M9.2 16.2h5.6M9.8 19h4.4" />
        <path d="M8.5 13.8c-1.4-1.1-2.2-2.9-2.2-4.9A5.7 5.7 0 0112 3.2a5.7 5.7 0 015.7 5.7c0 2-.8 3.8-2.2 4.9-.7.6-1.2 1.3-1.5 2.2h-4c-.3-.9-.8-1.6-1.5-2.2z" />
      </>
    ),
    brain: (
      <>
        <path d="M9.2 5.2a3.3 3.3 0 00-5.4 2.6 3.2 3.2 0 001.3 2.6 3.4 3.4 0 00-.3 5.4 3.3 3.3 0 004.4 4.8 3.6 3.6 0 005.6 0 3.3 3.3 0 004.4-4.8 3.4 3.4 0 00-.3-5.4 3.2 3.2 0 001.3-2.6 3.3 3.3 0 00-5.4-2.6 3.6 3.6 0 00-5.6 0z" />
        <path d="M9.5 8.5v7M14.5 8.5v7M9.5 12h5" />
      </>
    ),
    leaders: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M6 19c1-2.8 3.1-4.2 6-4.2s5 1.4 6 4.2" />
        <path d="M18.4 9.4c1.4.2 2.6.9 3.3 2M2.3 11.4c.7-1.1 1.8-1.8 3.3-2" />
      </>
    ),
    chart: (
      <>
        <path d="M6 18V12M12 18V7M18 18V4" />
      </>
    ),
    wallet: (
      <>
        <rect x="4" y="7" width="16" height="10" rx="2" />
        <path d="M16 12h4M8 7V6a2 2 0 012-2h6" />
        <circle cx="15.5" cy="12" r="0.8" fill="currentColor" stroke="none" />
      </>
    ),
    "monitor-check": (
      <>
        <rect x="4" y="4.5" width="16" height="11" rx="2" />
        <path d="M9.5 19.5h5M12 15.5v4" />
        <path d="M8.7 10.3l2 2 4.6-4.4" />
      </>
    ),
    "monitor-cross": (
      <>
        <rect x="4" y="4.5" width="16" height="11" rx="2" />
        <path d="M9.5 19.5h5M12 15.5v4" />
        <path d="M9.2 9.2l5.6 5.6M14.8 9.2l-5.6 5.6" />
      </>
    ),
    cap: (
      <>
        <path d="M3 9.5L12 5l9 4.5-9 4.5-9-4.5z" />
        <path d="M7 11.6V15c0 1.3 2.2 2.5 5 2.5s5-1.2 5-2.5v-3.4" />
      </>
    ),
    briefcase: (
      <>
        <rect x="4" y="7" width="16" height="11" rx="2" />
        <path d="M9 7V5.8A1.8 1.8 0 0110.8 4h2.4A1.8 1.8 0 0115 5.8V7M4 11.5h16" />
      </>
    ),
    concept: (
      <>
        <rect x="6.2" y="4" width="11.6" height="16" rx="2" />
        <path d="M9.2 8.8h5.6M9.2 12h5.6M9.2 15.2h3.5" />
        <path d="M4 7.2h2.2M17.8 16.8H20" />
      </>
    ),
    application: (
      <>
        <path d="M4 6.5h16v8H4z" />
        <path d="M8 18h8M12 14.5V18" />
        <path d="M7.5 10.5h2.6M12 10.5h4.5" />
      </>
    ),
    tools: (
      <>
        <path d="M7 14.8l-3.2 3.2 1.2 1.2L8.2 16M13.4 5.2a3 3 0 004.2 4.2l-6.3 6.3-4.2-4.2 6.3-6.3z" />
        <circle cx="18.2" cy="5.8" r="1.2" />
      </>
    ),
    analysis: (
      <>
        <path d="M6 16V12M12 16V8M18 16V5" />
        <path d="M4 19h16" />
      </>
    ),
    plan: (
      <>
        <rect x="6" y="4.5" width="12" height="15" rx="2" />
        <path d="M9 8h6M9 11.5h6M9 15h3.5" />
      </>
    ),
    delivery: (
      <>
        <rect x="5.5" y="6" width="13" height="10" rx="2" />
        <path d="M18.5 9h1.7l1.3 2v3h-3" />
        <circle cx="9" cy="18" r="1.5" />
        <circle cx="18" cy="18" r="1.5" />
      </>
    ),
    headset: (
      <>
        <path d="M5 12a7 7 0 0114 0v5h-3v-4h-2v8h1" />
        <rect x="4" y="11.5" width="3" height="5" rx="1" />
        <rect x="17" y="11.5" width="3" height="5" rx="1" />
      </>
    ),
    "arrow-right": (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    facebook: (
      <>
        <path d="M13.4 20v-6.6h2.2l.5-2.9h-2.7V9c0-.9.4-1.6 1.8-1.6H16V5a8.7 8.7 0 00-1.8-.2c-2.5 0-4 1.5-4 4.1v1.6H8v2.9h2.2V20" />
      </>
    ),
    linkedin: (
      <>
        <path d="M7 9.3V20M7 5.3a.9.9 0 10.1 0zM11.2 20V9.3h3v1.5c.6-1 1.7-1.8 3.3-1.8 2.7 0 3.5 1.8 3.5 4.5V20" />
      </>
    ),
    twitter: (
      <>
        <path d="M20 7.3c-.6.3-1.3.5-2 .6a3.5 3.5 0 001.5-1.9c-.7.4-1.5.7-2.3.9A3.4 3.4 0 0014.7 6c-2 0-3.5 1.7-3.4 3.7A9.6 9.6 0 014 6.7a3.5 3.5 0 001.1 4.7c-.6 0-1.1-.2-1.6-.4 0 1.7 1.2 3.2 2.9 3.5-.5.2-1 .2-1.6.1.5 1.5 1.9 2.5 3.6 2.5A6.9 6.9 0 014 18.6 9.8 9.8 0 009.3 20c6.3 0 9.9-5.4 9.7-10.3.7-.4 1.3-1 1.8-1.7" />
      </>
    ),
    instagram: (
      <>
        <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.2" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    youtube: (
      <>
        <path d="M20 8.6c-.2-1.2-1.1-2.2-2.3-2.3C16.2 6 12 6 12 6s-4.2 0-5.7.3c-1.2.1-2.1 1.1-2.3 2.3C3.7 10.1 3.7 12 3.7 12s0 1.9.3 3.4c.2 1.2 1.1 2.2 2.3 2.3C7.8 18 12 18 12 18s4.2 0 5.7-.3c1.2-.1 2.1-1.1 2.3-2.3.3-1.5.3-3.4.3-3.4s0-1.9-.3-3.4z" />
        <path d="M10 9.4l4.4 2.6L10 14.6z" fill="currentColor" stroke="none" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 24 24" {...shared}>
      {icons[name] || icons.spark}
    </svg>
  );
}

function SectionHeading({ title, accent, description, center = false }) {
  return (
    <div className={center ? "section-heading section-heading-center" : "section-heading"}>
      <h2>
        {title} <span>{accent}</span>
      </h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function NavLink({ item, active, onClick }) {
  return (
    <a
      className={active ? "nav-link is-active" : "nav-link"}
      href={`#${item.id}`}
      onClick={() => onClick(item.id)}
    >
      {item.label}
    </a>
  );
}

function HeroIllustration() {
  return (
    <div className="hero-illustration-frame">
      <img
        alt="Accredian enterprise training hero"
        className="hero-illustration"
        src={brandAssets.heroImage}
      />
    </div>
  );
}

function AudienceIllustration() {
  return (
    <div className="audience-visual">
      <img
        alt="Professional illustration"
        className="audience-illustration"
        src={brandAssets.audienceImage}
      />
    </div>
  );
}

export default function EnterprisePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeFaqCategory, setActiveFaqCategory] = useState(faqs[0].category);
  const [openFaq, setOpenFaq] = useState(faqs[0].items[0].question);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-nav-section]"));
    const header = document.querySelector(".site-header");

    if (!sections.length) {
      return undefined;
    }

    let frameId = null;

    const getSectionId = (section) => section.getAttribute("data-nav-section") || "home";
    const getSectionByHash = () => {
      const hashId = window.location.hash.replace("#", "");

      if (!hashId) {
        return null;
      }

      const target = document.getElementById(hashId);

      if (!target) {
        return null;
      }

      return {
        id: getSectionId(target),
        element: target,
      };
    };

    const updateActiveSection = () => {
      const headerHeight = header?.getBoundingClientRect().height ?? 0;
      const probeLine = headerHeight + Math.min(Math.max(window.innerHeight * 0.22, 120), 220);
      let nextActiveSection = getSectionId(sections[0]);

      for (const section of sections) {
        const { top, bottom } = section.getBoundingClientRect();

        if (top <= probeLine && bottom > probeLine) {
          nextActiveSection = getSectionId(section);
          break;
        }

        if (top <= probeLine) {
          nextActiveSection = getSectionId(section);
          continue;
        }

        break;
      }

      const hashedSection = getSectionByHash();

      if (hashedSection) {
        const { top, bottom } = hashedSection.element.getBoundingClientRect();
        const isHashSectionAtTop = top <= probeLine && bottom > probeLine;

        if (isHashSectionAtTop) {
          nextActiveSection = hashedSection.id;
        }
      }

      setActiveSection((current) => (current === nextActiveSection ? current : nextActiveSection));
    };

    const requestSectionUpdate = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        updateActiveSection();
        frameId = null;
      });
    };

    updateActiveSection();

    window.addEventListener("scroll", requestSectionUpdate, { passive: true });
    window.addEventListener("resize", requestSectionUpdate);
    window.addEventListener("hashchange", requestSectionUpdate);

    return () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestSectionUpdate);
      window.removeEventListener("resize", requestSectionUpdate);
      window.removeEventListener("hashchange", requestSectionUpdate);
    };
  }, []);

  const activeFaqs = useMemo(
    () => faqs.find((category) => category.category === activeFaqCategory)?.items ?? [],
    [activeFaqCategory],
  );

  const closeMenu = () => setIsMenuOpen(false);
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    closeMenu();
  };
  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <main className="enterprise-page">
        <header className="site-header">
          <div className="container header-inner">
            <BrandMark />

            <nav aria-label="Primary navigation" className="desktop-nav">
              {navigationItems.map((item) => (
                <NavLink
                  active={activeSection === item.id}
                  item={item}
                  key={item.id}
                  onClick={handleNavClick}
                />
              ))}
            </nav>

            <div className="header-actions">
              <button className="button button-primary" onClick={openModal} type="button">
                Enquire now
              </button>
              <button
                aria-expanded={isMenuOpen}
                aria-label="Open navigation menu"
                className="menu-toggle"
                onClick={() => setIsMenuOpen((current) => !current)}
                type="button"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>

          {isMenuOpen ? (
            <div className="mobile-nav">
              <div className="container mobile-nav-inner">
                {navigationItems.map((item) => (
                  <NavLink
                    active={activeSection === item.id}
                    item={item}
                    key={item.id}
                    onClick={handleNavClick}
                  />
                ))}
                <button className="button button-primary button-full" onClick={openModal} type="button">
                  Contact us
                </button>
              </div>
            </div>
          ) : null}
        </header>

        <section className="hero-section" data-nav-section="home" id="home">
          <div className="container">
            <div className="hero-shell">
              <div className="hero-copy">
                <h1>
                  Next-Gen <span>Expertise</span>
                  <br />
                  For Your <span>Enterprise</span>
                </h1>
                <p className="hero-text">
                  Cultivate high-performance teams through expert learning,
                  strategic capability building, and flexible delivery models.
                </p>

                <div className="hero-highlights">
                  {heroHighlights.map((item) => (
                    <div className="hero-highlight" key={item}>
                      <span className="hero-highlight-icon">
                        <Icon name="check" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="hero-actions">
                  <button className="button button-primary" onClick={openModal} type="button">
                    Enquire Now
                  </button>
                  <a className="button button-secondary" href="#how-it-works">
                    How it works
                  </a>
                </div>
              </div>

              <div className="hero-art-panel">
                <div className="hero-metric-rail">
                  {heroMetrics.map((metric) => (
                    <article className="hero-metric" key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </article>
                  ))}
                </div>
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        <section className="section stats-section" data-nav-section="stats" id="stats">
          <div className="container">
            <SectionHeading
              accent="Record"
              center
              description="The numbers behind our success"
              title="Our Track"
            />

            <div className="stats-grid">
              {stats.map((stat) => (
                <article className="stat-card" key={stat.value}>
                  <div className="stat-pill">{stat.value}</div>
                  <p>{stat.title}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section partners-section" data-nav-section="clients" id="clients">
          <div className="container">
            <SectionHeading
              accent="Partnerships"
              center
              description="Successful collaborations with the industry's best"
              title="Our Proven"
            />

            <div className="partner-strip">
              {partnerLogos.map((logo) => (
                <div className={`partner-logo partner-logo-${logo.slug}`} key={logo.slug}>
                  <img alt={logo.name} src={logo.src} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section edge-section" data-nav-section="accredian-edge" id="accredian-edge">
          <div className="container">
            <SectionHeading
              accent="Edge"
              center
              description="Key aspects of our strategic training"
              title="The Accredian"
            />

            <div className="edge-roadmap">
              <div className="edge-roadmap-line" />
              {edgeHighlights.map((item, index) => (
                <article
                  className={index % 2 === 0 ? "edge-point edge-point-top" : "edge-point edge-point-bottom"}
                  key={item.title}
                >
                  <div className="edge-point-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="edge-point-node">
                    <span className="edge-node-ring" />
                    <span className="edge-node-core">
                      <Icon name={item.icon} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section domain-section" data-nav-section="accredian-edge">
          <div className="container">
            <SectionHeading
              accent="Expertise"
              center
              description="Specialized programs designed to fuel innovation"
              title="Our Domain"
            />

            <div className="domain-grid">
              {domainCards.map((card, index) => (
                <article
                  className={index === domainCards.length - 1 ? "domain-card domain-card-last" : "domain-card"}
                  key={card.title}
                >
                  <span className="domain-icon">
                    <Icon name={card.icon} />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section segmentation-section" data-nav-section="accredian-edge">
          <div className="container">
            <SectionHeading
              accent="Course Segmentation"
              center
              description="Explore custom-fit courses designed to address every professional focus"
              title="Tailored"
            />

            <div className="segmentation-grid">
              {segmentationCards.map((card) => (
                <article className="segmentation-card" key={card.title}>
                  <div className="segmentation-media">
                    <img alt={card.title} src={card.image} />
                    <span>{card.tag}</span>
                  </div>
                  <div className="segmentation-body">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section audience-section" data-nav-section="accredian-edge">
          <div className="container">
            <div className="audience-panel">
              <div className="audience-intro">
                <p className="kicker">Who Should Join?</p>
                <h2>
                  Strategic Skill <span>Enhancement</span>
                </h2>
                <AudienceIllustration />
              </div>

              <div className="audience-grid">
                {audiences.map((audience) => (
                  <article className="audience-card" key={audience.title}>
                    <span className="audience-icon">
                      <Icon name={audience.icon} />
                    </span>
                    <div>
                      <h3>{audience.title}</h3>
                      <p>{audience.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section framework-section" data-nav-section="cat-framework" id="cat-framework">
          <div className="container">
            <SectionHeading
              accent="Framework"
              center
              description="Our proven approach to learning excellence"
              title="The CAT"
            />

            <div className="framework-track">
              {catFramework.map((item) => (
                <article className="framework-step" key={item.title}>
                  <span className="framework-icon">
                    <Icon name={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" data-nav-section="how-it-works" id="how-it-works">
          <div className="container">
            <SectionHeading
              accent="Results"
              center
              description="A structured three-step approach to skill development"
              title="How We Deliver"
            />

            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article className="process-card" key={step.title}>
                  <span className="process-index">{index + 1}</span>
                  <span className="process-icon">
                    <Icon name={step.icon} />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" data-nav-section="faqs" id="faqs">
          <div className="container faq-layout">
            <div className="faq-sidebar">
              <SectionHeading accent="Questions" title="Frequently Asked" />

              <div className="faq-categories">
                {faqs.map((category) => (
                  <button
                    className={
                      category.category === activeFaqCategory
                        ? "faq-category is-active"
                        : "faq-category"
                    }
                    key={category.category}
                    onClick={() => {
                      setActiveFaqCategory(category.category);
                      setOpenFaq(category.items[0]?.question ?? "");
                    }}
                    type="button"
                  >
                    {category.category}
                  </button>
                ))}
              </div>
            </div>

            <div className="faq-panel">
              {activeFaqs.map((faq) => {
                const isOpen = faq.question === openFaq;

                return (
                  <article className="faq-item" key={faq.question}>
                    <button
                      aria-expanded={isOpen}
                      className="faq-trigger"
                      onClick={() =>
                        setOpenFaq((current) => (current === faq.question ? "" : faq.question))
                      }
                      type="button"
                    >
                      <span>{faq.question}</span>
                      <span className="faq-symbol">{isOpen ? "-" : "+"}</span>
                    </button>
                    {isOpen ? <p className="faq-answer">{faq.answer}</p> : null}
                  </article>
                );
              })}

              <button className="button button-primary faq-cta" onClick={openModal} type="button">
                Enquire Now
              </button>
            </div>
          </div>
        </section>

        <section className="section testimonials-section" data-nav-section="testimonials" id="testimonials">
          <div className="container">
            <SectionHeading
              accent="Our Partners"
              center
              description="What our clients are saying"
              title="Testimonials from"
            />

            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <article className="testimonial-card" key={testimonial.company}>
                  <div className={`testimonial-logo testimonial-logo-${testimonial.company.toLowerCase()}`}>
                    <img alt={testimonial.company} src={testimonial.logo} />
                  </div>
                  <p>"{testimonial.quote}"</p>
                </article>
              ))}
            </div>

            <div className="support-banner">
              <div className="support-banner-icon">
                <Icon name="headset" />
              </div>
              <div className="support-banner-copy">
                <h3>Want to Learn More About Our Training Solutions?</h3>
                <p>Get Expert Guidance for Your Team&apos;s Success!</p>
              </div>
              <button className="button button-light" onClick={openModal} type="button">
                Contact Us
                <Icon name="arrow-right" />
              </button>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container footer-top">
            <div className="footer-brand-block">
              <BrandMark footer />
              <div className="footer-socials">
                {socialLinks.map((link) => (
                  <a
                    aria-label={link.label}
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon name={link.icon} />
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-enquiry">
              <button className="button button-primary" onClick={openModal} type="button">
                Enquire Now
              </button>
              <p>Speak with our advisor</p>
            </div>
          </div>

          <div className="container footer-main">
            <div className="footer-column">
              <h3>Accredian</h3>
              {footerLinks.map((link) => (
                <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="footer-column footer-contact">
              <h3>Contact Us</h3>
              <p>
                Email us: <a href="mailto:enterprise@accredian.com">enterprise@accredian.com</a>
              </p>
              <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana</p>
            </div>
          </div>

          <div className="container footer-bottom">
            <p>© 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
          </div>
          <div className="container footer-bottom-fixed">
            <p>&copy; 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
          </div>
        </footer>
      </main>

      <ContactModal onClose={() => setIsModalOpen(false)} open={isModalOpen} />
    </>
  );
}
