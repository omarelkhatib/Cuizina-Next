import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const AboutUs = (props) => {
  return (
    <>
      <div className="about-us-container1">
        <Head>
          <title>About-Us - Cuizina</title>
          <meta property="og:title" content="About-Us - Cuizina" />
          <link
            rel="canonical"
            href="https://active-apt-bat-couklh-omarelkhatib1-7005s-projects.vercel.app/about-us"
          />
        </Head>
        <Navigation></Navigation>
        <main className="about-page">
          <section className="hero-section">
            <video
              src="https://videos.pexels.com/video-files/7818015/7818015-hd_1280_720_24fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/7818015/pictures/preview-0.jpg"
              autoPlay="true"
              playsInline="true"
              className="hero-video"
            ></video>
            <div className="hero-overlay"></div>
            <div className="about-us-thq-hero-watermark-elm hero-watermark">
              <span className="about-us-text1">Z</span>
            </div>
            <div className="hero-content">
              <h1 className="hero-title about-us-hero-title">About Cuizina</h1>
              <p className="hero-subtitle">
                Flavor. Creativity. Craft. Delivered.
              </p>
            </div>
          </section>
          <section className="brand-story-section">
            <div className="container">
              <div className="brand-story-grid">
                <div className="brand-story-content">
                  <h2 className="section-title">
                    A Legacy of Culinary Excellence
                  </h2>
                  <p className="section-content">
                    Cuizina was born from a passion for delivering more than
                    just food; we deliver extraordinary experiences. Our
                    philosophy is rooted in a premium, editorial approach to
                    catering, where heritage meets innovation.
                  </p>
                  <p className="section-content">
                    From intimate gatherings to large-scale industrial
                    solutions, our commitment to quality remains unwavering. We
                    blend traditional techniques with modern imaginative flair
                    to ensure every recipe is memorable and every event is
                    seamless.
                  </p>
                </div>
                <div className="brand-story-image-wrapper">
                  <img
                    alt="Chefs plating gourmet dishes"
                    src="/img102-1500w.jpg"
                    className="brand-story-image"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="about-us-thq-founders-section-elm founders-section">
            <div className="founders-watermark">
              <span>Z</span>
            </div>
            <div className="container">
              <h2 className="founders-title section-title">
                Meet the Co-founders
              </h2>
              <div className="founders-carousel">
                <div className="founder-card">
                  <div className="founder-image-container">
                    <img
                      alt="Executive Chef Co-founder"
                      src="/img25-500w.jpg"
                      className="founder-image"
                    />
                  </div>
                  <div className="founder-info">
                    <h3 className="founder-name">Liliane Zina Rahme</h3>
                    <span className="founder-role">Culinary Director</span>
                    <p className="section-content">
                      A globally inspired creative visionary with refined
                      culinary taste, Liliane shaped Cuizina’s unique identity
                      and positioned it as one of the most distinctive catering
                      brands in the MENA region.
                    </p>
                  </div>
                </div>
                <div className="founder-card">
                  <div className="founder-image-container">
                    <img
                      alt="Operations Director Co-founder"
                      src="/img23-500w.jpg"
                      className="founder-image"
                    />
                  </div>
                  <div className="founder-info">
                    <h3 className="founder-name">Michel Khalifat</h3>
                    <span className="founder-role">Operations Director</span>
                    <p className="section-content">
                      A Les Roches hospitality graduate with over 25 years of
                      international F&amp;B leadership experience, Michel brings
                      world-class operational expertise to elevate Cuizina into
                      a next-level catering experience in MENA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="about-us-thq-industrial-overview-section-elm industrial-overview-section">
            <div className="container">
              <h2 className="section-title">
                Industrial Catering: A Fusion With Flavor
              </h2>
              <div className="sectors-grid">
                <div className="sector-card">
                  <div className="sector-icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide-hospital lucide"
                    >
                      <path d="M12 6v4"></path>
                      <path d="M14 14h-4"></path>
                      <path d="M14 18h-4"></path>
                      <path d="M14 8h-4"></path>
                      <path d="M18 12h1"></path>
                      <path d="M18 16h1"></path>
                      <path d="M18 20h1"></path>
                      <path d="M18 4h1"></path>
                      <path d="M18 8h1"></path>
                      <path d="M22 21v-3a2 2 0 0 0-2-2h-3"></path>
                      <path d="M22 3v3a2 2 0 0 1-2 2h-3"></path>
                      <path d="M2 21V3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"></path>
                      <path d="M4 12h1"></path>
                      <path d="M4 16h1"></path>
                      <path d="M4 20h1"></path>
                      <path d="M4 4h1"></path>
                      <path d="M4 8h1"></path>
                      <path d="M7 14h4"></path>
                      <path d="M7 18h4"></path>
                      <path d="M7 8h4"></path>
                    </svg>
                  </div>
                  <h3 className="sector-name">Hospitals</h3>
                  <p className="section-content">
                    Specialized nutrition and hygiene-first meal solutions for
                    healthcare environments.
                  </p>
                </div>
                <div className="sector-card">
                  <div className="sector-icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide-building-2 lucide"
                    >
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                      <path d="M10 6h4"></path>
                      <path d="M10 10h4"></path>
                      <path d="M10 14h4"></path>
                      <path d="M10 18h4"></path>
                    </svg>
                  </div>
                  <h3 className="sector-name">Corporate Dinners</h3>
                  <p className="section-content">
                    From boardrooms to gala events, we bring restaurant-quality
                    dining to your office.
                  </p>
                </div>
                <div className="sector-card">
                  <div className="sector-icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide-graduation-cap lucide"
                    >
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                      <path d="M22 10v6"></path>
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                    </svg>
                  </div>
                  <h3 className="sector-name">Schools &amp; Universities</h3>
                  <p className="section-content">
                    Balanced, creative menus designed to fuel the next
                    generation of leaders.
                  </p>
                </div>
                <div className="sector-card">
                  <div className="sector-icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide-fuel lucide"
                    >
                      <line x1="3" x2="15" y1="22" y2="22"></line>
                      <line x1="4" x2="14" y1="9" y2="9"></line>
                      <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"></path>
                      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"></path>
                      <path d="M18 5v3"></path>
                      <path d="M22 7v6"></path>
                    </svg>
                  </div>
                  <h3 className="sector-name">Oil &amp; Gas</h3>
                  <p className="section-content">
                    Robust and reliable catering for remote sites and
                    high-demand energy sectors.
                  </p>
                </div>
                <div className="sector-card">
                  <div className="sector-icon-box">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide-shield-check lucide"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 className="sector-name">Defense</h3>
                  <p className="section-content">
                    Highly secure and efficient supply chains for defense and
                    governmental institutions.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="kitchen-highlights-section">
            <div className="kitchen-grid">
              <div className="about-us-thq-kitchen-content-panel-elm kitchen-content-panel">
                <h2 className="section-title">The Central Kitchen</h2>
                <div className="highlight-items">
                  <div className="highlight-item">
                    <span className="highlight-number">1,500</span>
                    <p className="section-content">
                      SQM State-of-the-Art Facility
                    </p>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">10,000</span>
                    <p className="section-content">Daily Meal Capacity</p>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">ISO</span>
                    <p className="section-content">
                      Food Safety &amp; Hygiene Standards
                    </p>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">100%</span>
                    <p className="section-content">
                      Customizable Corporate Solutions
                    </p>
                  </div>
                </div>
              </div>
              <div className="kitchen-image-panel">
                <img
                  alt="Inside Cuizina Central Kitchen"
                  src="/img34-1500w.jpg"
                  className="kitchen-image"
                />
              </div>
            </div>
          </section>
          <section className="values-section">
            <div className="container">
              <div className="values-carousel-wrapper">
                <div className="value-item">
                  <div className="value-accent"></div>
                  <h3 className="section-subtitle">Excellence</h3>
                  <p className="section-content">
                    Precision in every plate, from ingredient selection to final
                    presentation.
                  </p>
                </div>
                <div className="value-item">
                  <div className="value-accent"></div>
                  <h3 className="section-subtitle">Creativity</h3>
                  <p className="section-content">
                    Imaginative flair that transforms standard catering into a
                    culinary journey.
                  </p>
                </div>
                <div className="value-item">
                  <div className="value-accent"></div>
                  <h3 className="section-subtitle">
                    Extraordinary Experiences
                  </h3>
                  <p className="section-content">
                    Delivering moments that linger in memory long after the last
                    course.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="about-us-thq-clients-preview-section-elm clients-preview-section">
            <div className="container">
              <div className="clients-layout">
                <div className="clients-grid">
                  <div className="client-logo-card">
                    <img
                      alt="Client 1"
                      src="/img93-1500w.jpg"
                      className="client-logo"
                    />
                  </div>
                  <div className="client-logo-card">
                    <img
                      alt="Client 2"
                      src="/img91-1500w.jpg"
                      className="client-logo"
                    />
                  </div>
                  <div className="client-logo-card">
                    <img
                      alt="Client 3"
                      src="/img95-1500w.jpg"
                      className="client-logo"
                    />
                  </div>
                  <div className="client-logo-card">
                    <img
                      alt="Client 4"
                      src="/img92-1500w.jpg"
                      className="client-logo"
                    />
                  </div>
                </div>
                <div className="clients-info">
                  <h2 className="section-title">A Valued Ingredient</h2>
                  <ul className="clients-bullets">
                    <li className="section-content">
                      <span>Relationship-driven partnerships</span>
                    </li>
                    <li className="section-content">
                      <span>Consistent quality at scale</span>
                    </li>
                    <li className="section-content">
                      <span>Tailor-made menus &amp; service</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="about-us-thq-cta-section-elm cta-section">
            <div className="cta-watermark">
              <span className="about-us-text6">Z</span>
            </div>
            <div className="container">
              <div className="cta-featured">
                <h2 className="cta-title section-title">
                  Contact us for catering solutions
                </h2>
                <p className="cta-text section-content">
                  Let&apos;s craft your next extraordinary experience together.
                </p>
                <Link href="/contact-us">
                  <a>
                    <div className="about-us-thq-btn-elm btn-lg btn-secondary btn">
                      <span className="about-us-text7">Request a Quote</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <div className="about-us-container2">
          <div className="about-us-container3">
            <Script
              html={`<script defer data-name="about-animations">
(function(){
  // Simple intersection observer for reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealOnScroll.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Apply to cards and panels
  document.querySelectorAll(".founder-card, .sector-card, .value-item, .client-logo-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    revealOnScroll.observe(el)
  })

  // Staggered reveal for highlight items
  const highlightItems = document.querySelectorAll(".highlight-item")
  highlightItems.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateX(-20px)"
    item.style.transition = \`all 0.6s ease-out \${index * 0.15}s\`

    const kitchenPanel = document.querySelector(".kitchen-content-panel")
    const kitchenObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          item.style.opacity = "1"
          item.style.transform = "translateX(0)"
        }
      },
      { threshold: 0.2 }
    )
    kitchenObserver.observe(kitchenPanel)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .about-us-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .about-us-thq-hero-watermark-elm {
            opacity: 0.2;
          }
          .about-us-text1 {
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 100;
          }
          .about-us-thq-founders-section-elm {
            display: none;
          }
          .about-us-thq-industrial-overview-section-elm {
            display: none;
            background-color: #e8efea;
          }
          .about-us-thq-kitchen-content-panel-elm {
            background-color: var(--color-primary);
          }
          .about-us-thq-clients-preview-section-elm {
            background-color: #e8efea;
          }
          .about-us-thq-cta-section-elm {
            display: none;
          }
          .about-us-text6 {
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 100;
          }
          .about-us-thq-btn-elm {
            text-decoration: none;
          }
          .about-us-text7 {
            fill: var(--color-primary);
            color: var(--color-primary);
          }
          .about-us-container2 {
            display: none;
          }
          .about-us-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
