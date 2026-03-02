import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import QuoteFormContent from '../components/quote-form-content'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Cuizina</title>
          <meta property="og:title" content="Cuizina" />
          <link
            rel="canonical"
            href="https://active-apt-bat-couklh-omarelkhatib1-7005s-projects.vercel.app/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-signature">
          <div className="hero-signature__video-wrapper">
            <video
              src="https://videos.pexels.com/video-files/19905887/19905887-hd_1280_720_24fps.mp4"
              loop="true"
              muted="true"
              autoPlay
              playsInline
              className="hero-signature__video"
            ></video>
            <div className="home-thq-hero-signatureoverlay-elm hero-signature__overlay"></div>
          </div>
          <div className="hero-signature__content">
            <div
              aria-hidden="true"
              className="home-thq-hero-signaturewatermark-elm hero-signature__watermark"
            >
              <span className="home-text10">Z</span>
            </div>
            <h1 className="hero-title">A new culinary experience.</h1>
            <p className="hero-subtitle">
              Flavor. Creativity. Craft. Delivered.
            </p>
            <div className="hero-signature__actions">
              <a href="#contact-form">
                <div className="home-thq-btn-elm1 btn-lg btn-primary btn">
                  <span>Request a Quote</span>
                </div>
              </a>
              <Link href="/gallery">
                <a>
                  <div className="home-thq-btn-elm2 btn-lg btn-outline btn">
                    <span>Discover Cuizina</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section id="about-preview" className="intro-cuizina">
          <div className="intro-cuizina__wrapper">
            <div className="intro-cuizina__text">
              <h2 className="section-title">Introducing Cuizina</h2>
              <p className="section-content">
                Like all memorable recipes, Cuizina began with the blending of
                the right ingredients: a meeting of two individuals with the
                know-how, vision and passion to bring a much-needed new wave to
                the food and beverage industry.
              </p>
              <p className="section-content">
                Liliane Zina Rahme and Michel Khalifat founded Cuizina to shake
                up the status quo in the field of events and catering,
                satisfying the appetite of clients for a higher level of
                gastronomic excellence founded on creativity, flavor and
                delivering an unforgettable experience.
              </p>
            </div>
            <div className="home-thq-intro-cuizinamedia-elm intro-cuizina__media">
              <img
                alt="Gourmet Plating"
                src="/img57-400h.jpg"
                className="home-thq-intro-cuizinaimage-elm intro-cuizina__image"
              />
            </div>
          </div>
        </section>
        <section className="home-thq-services-accordion-elm services-accordion">
          <div className="services-accordion__header">
            <h2 className="section-title">Cuizina Caters For All</h2>
          </div>
          <div className="services-accordion__grid">
            <details open="true" className="services-accordion__item">
              <summary className="services-accordion__summary">
                <span className="home-thq-section-subtitle-elm1 section-subtitle">
                  Industrial Catering
                </span>
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
                  className="services-accordion__icon"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              <div className="services-accordion__content">
                <p className="section-content">
                  Large-scale solutions for healthcare, education, and corporate
                  sectors with uncompromised quality.
                </p>
              </div>
            </details>
            <details className="services-accordion__item">
              <summary className="services-accordion__summary">
                <span className="home-thq-section-subtitle-elm2 section-subtitle">
                  Corporate Events
                </span>
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
                  className="services-accordion__icon"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              <div className="services-accordion__content">
                <p className="section-content">
                  Elegant menus and professional service designed to reflect
                  your brand&apos;s excellence during meetings and galas.
                </p>
              </div>
            </details>
            <details className="services-accordion__item">
              <summary className="services-accordion__summary">
                <span className="section-subtitle">Festivals</span>
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
                  className="services-accordion__icon"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              <div className="services-accordion__content">
                <p className="section-content">
                  High-volume, high-energy catering for public events, ensuring
                  speed without sacrificing flavor.
                </p>
              </div>
            </details>
            <details className="services-accordion__item">
              <summary className="services-accordion__summary">
                <span className="section-subtitle">&amp; More</span>
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
                  className="services-accordion__icon"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              <div className="services-accordion__content">
                <p className="section-content">
                  Private dinners, weddings, and bespoke gatherings tailored to
                  your unique vision.
                </p>
              </div>
            </details>
          </div>
          <div className="services-accordion__footer">
            <p className="section-content">
              From small gatherings to large-scale events, we deliver
              tailor-made experiences designed to exceed expectations.
            </p>
          </div>
        </section>
        <section className="home-thq-kitchen-highlights-elm kitchen-highlights">
          <div className="kitchen-highlights__container">
            <h2 className="home-thq-section-title-elm3 section-title">
              All About the Central Kitchen
            </h2>
            <div className="home-thq-kitchen-highlightsgrid-elm kitchen-highlights__grid">
              <div className="home-thq-kitchen-highlightscard-elm1 kitchen-highlights__card">
                <div className="kitchen-highlights__icon-box">
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
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">1,500 sqm Central Kitchen</h3>
                <p className="section-content">
                  Our state-of-the-art facility is designed for maximum
                  efficiency and culinary excellence.
                </p>
              </div>
              <div className="home-thq-kitchen-highlightscard-elm2 kitchen-highlights__card">
                <div className="kitchen-highlights__icon-box">
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
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">10,000 Meals/Day</h3>
                <p className="section-content">
                  Massive capacity to serve large organizations without
                  compromising on individual taste.
                </p>
              </div>
              <div className="home-thq-kitchen-highlightscard-elm3 kitchen-highlights__card">
                <div className="kitchen-highlights__icon-box">
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
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Food Safety Standards</h3>
                <p className="section-content">
                  Rigorous hygiene protocols and safety standards are at the
                  core of our operations.
                </p>
              </div>
              <div className="home-thq-kitchen-highlightscard-elm4 kitchen-highlights__card">
                <div className="kitchen-highlights__icon-box">
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
                  >
                    <path d="M12 3v19"></path>
                    <path d="M5 8h14"></path>
                    <path d="M15 21a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6Z"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Customizable Solutions</h3>
                <p className="section-content">
                  Diverse menus tailored to unique corporate cultures and
                  dietary requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="taste-gallery">
          <div className="taste-gallery__header">
            <h2 className="section-title">
              Taste &amp; Experience the Difference
            </h2>
            <p className="section-content">
              Precision, quality ingredients, and imaginative flair. Our
              culinary team crafts every plate to be a visual and sensory
              masterpiece, ensuring consistency at any scale.
            </p>
          </div>
          <div className="taste-gallery__grid">
            <div className="taste-gallery__item">
              <img
                alt="Culinary Precision"
                src="/img68-1500w.jpg"
                className="taste-gallery__img"
              />
            </div>
            <div className="taste-gallery__item">
              <img
                alt="Gourmet Appetizers"
                src="/img64-1500w.jpg"
                className="taste-gallery__img"
              />
            </div>
            <div className="taste-gallery__item">
              <img
                alt="Chef Presentation"
                src="/img66-1500w.jpg"
                className="taste-gallery__img"
              />
            </div>
            <div className="taste-gallery__item">
              <img
                alt="Buffet Elegance"
                src="/img76-1500w.jpg"
                className="taste-gallery__img"
              />
            </div>
            <div className="taste-gallery__item">
              <img
                alt="Modern Catering"
                src="/img72-1500w.jpg"
                className="taste-gallery__img"
              />
            </div>
            <div className="taste-gallery__item">
              <img
                alt="Kitchen Excellence"
                src="/img74-1500w.jpg"
                className="taste-gallery__img"
              />
            </div>
          </div>
        </section>
        <section className="home-thq-clients-preview-elm clients-preview">
          <div className="clients-preview__container">
            <div className="clients-preview__header">
              <h2 className="section-title">
                Our Clients: A Valued Ingredient
              </h2>
            </div>
            <div className="clients-preview__layout">
              <div className="clients-preview__carousel">
                <div className="clients-preview__grid">
                  <div className="clients-preview__logo-box">
                    <img alt="Client 1" src="/img93-1500w.jpg" />
                  </div>
                  <div className="clients-preview__logo-box">
                    <img alt="Client 2" src="/img91-1500w.jpg" />
                  </div>
                  <div className="clients-preview__logo-box">
                    <img alt="Client 3" src="/img95-1500w.jpg" />
                  </div>
                  <div className="clients-preview__logo-box">
                    <img alt="Client 4" src="/img92-1500w.jpg" />
                  </div>
                </div>
              </div>
              <div className="clients-preview__info">
                <ul className="clients-preview__list">
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
        <section className="home-thq-partnerships-strip-elm partnerships-strip">
          <div className="partnerships-strip__card">
            <div className="partnerships-strip__grid">
              <div className="partnerships-strip__text">
                <h2 className="section-title">Our Partnerships</h2>
                <p className="section-content">
                  We believe in the power of community. Our partnerships extend
                  beyond the kitchen, supporting healthcare catering initiatives
                  and providing essential community support across Beirut and
                  beyond.
                </p>
                <a href="#contact-form">
                  <div className="btn-accent btn-lg btn">
                    <span>Contact us for catering solutions</span>
                  </div>
                </a>
              </div>
              <div className="partnerships-strip__media">
                <img
                  alt="Community Support"
                  src="/img40-1500w.jpg"
                  className="partnerships-strip__image"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact-form"
          className="home-thq-contact-inquiry-elm contact-inquiry"
        >
          <div className="contact-inquiry__container">
            <h2 className="section-title">Request a Quote</h2>
          </div>
          <QuoteFormContent
            btn={
              <Fragment>
                <span className="home-text17">Send Request</span>
              </Fragment>
            }
            formNote={
              <Fragment>
                <span className="home-text18">
                  We’ll get back to you within 24–48 hours.
                </span>
              </Fragment>
            }
            formLabel={
              <Fragment>
                <span className="home-text19">Full Name</span>
              </Fragment>
            }
            formLabel1={
              <Fragment>
                <span className="home-text20">Company / Organization</span>
              </Fragment>
            }
            formLabel2={
              <Fragment>
                <span className="home-text21">Email Address</span>
              </Fragment>
            }
            formLabel3={
              <Fragment>
                <span className="home-text22">Phone Number</span>
              </Fragment>
            }
            formLabel4={
              <Fragment>
                <span className="home-text23">Event Type</span>
              </Fragment>
            }
            formLabel5={
              <Fragment>
                <span className="home-text24">Estimated Guests</span>
              </Fragment>
            }
            formLabel6={
              <Fragment>
                <span className="home-text25">Event Date</span>
              </Fragment>
            }
            formLabel7={
              <Fragment>
                <span className="home-text26">Location</span>
              </Fragment>
            }
            formLabel8={
              <Fragment>
                <span className="home-text27">Message</span>
              </Fragment>
            }
            rootClassName="quote-form-contentroot-class-name"
          ></QuoteFormContent>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<script defer data-name="cuizina-logic">
(function(){
  // Smooth scroll for CTAs
  const actionButtons = document.querySelectorAll('a[href^="#"]')

  actionButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = button.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Form Success Feedback
  const contactForm = document.querySelector(".contact-inquiry__form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      // In a real scenario, the action attribute would handle this.
      // We'll just show a visual confirmation if the user stays on page.
      const submitBtn = contactForm.querySelector('button[type="submit"]')
      submitBtn.textContent = "Sending..."
      submitBtn.style.opacity = "0.7"
      submitBtn.disabled = true
    })
  }

  // Accordion behavior - Ensure only one is open at a time (Optional enhancement)
  const accordions = document.querySelectorAll(".services-accordion__item")
  accordions.forEach((acc) => {
    acc.addEventListener("toggle", (e) => {
      if (acc.open) {
        accordions.forEach((otherAcc) => {
          if (otherAcc !== acc && otherAcc.open) {
            otherAcc.open = false
          }
        })
      }
    })
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
          .home-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home-thq-hero-signatureoverlay-elm {
            opacity: 0.5;
          }
          .home-thq-hero-signaturewatermark-elm {
            opacity: 0.2;
          }
          .home-text10 {
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 100;
            line-height: 1.6;
          }
          .home-thq-btn-elm1 {
            display: none;
          }
          .home-thq-btn-elm2 {
            text-decoration: none;
          }
          .home-thq-intro-cuizinamedia-elm {
            width: 478px;
          }
          .home-thq-intro-cuizinaimage-elm {
            width: 100%;
            height: 383px;
          }
          .home-thq-services-accordion-elm {
            display: none;
            background-size: contain;
            background-color: transparent;
            background-image: url('/chatgpt%20image%20feb%2013%2C%202026%2C%2004_28_20%20pm-1500w.png');
            background-position: center;
          }
          .home-thq-section-subtitle-elm1 {
            color: var(--color-accent);
          }
          .home-thq-section-subtitle-elm2 {
            fill: var(--color-accent);
            color: var(--color-accent);
          }
          .home-thq-kitchen-highlights-elm {
            height: auto;
            display: none;
            background-size: cover;
            background-color: transparent;
            background-image: url('/chatgpt%20image%20feb%2013%2C%202026%2C%2004_28_20%20pm-1500w.png');
          }
          .home-thq-section-title-elm3 {
            color: var(--color-secondary);
          }
          .home-thq-kitchen-highlightsgrid-elm {
            background-size: cover;
            background-image: url('/img36-1500w.jpg');
          }
          .home-thq-kitchen-highlightscard-elm1 {
            width: 75%;
            height: 75%;
            margin-top: 10px;
            margin-left: 10px;
            margin-right: 10px;
          }
          .home-thq-kitchen-highlightscard-elm2 {
            width: 75%;
            height: 75%;
            margin-top: 10px;
            margin-left: 10px;
            justify-self: end;
            margin-right: 10px;
          }
          .home-thq-kitchen-highlightscard-elm3 {
            width: 75%;
            height: 75%;
            align-self: end;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
          }
          .home-thq-kitchen-highlightscard-elm4 {
            width: 75%;
            height: 75%;
            align-self: end;
            margin-left: 10px;
            justify-self: end;
            margin-right: 10px;
            margin-bottom: 10px;
          }
          .home-thq-clients-preview-elm {
            display: none;
            background-color: #e8efea;
          }
          .home-thq-partnerships-strip-elm {
            display: none;
            background-color: #e8efea;
          }
          .home-thq-contact-inquiry-elm {
            background-color: var(--color-secondary);
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          @media (max-width: 1200px) {
            .home-thq-kitchen-highlights-elm {
              display: none;
              background-size: cover;
              background-image: url('/chatgpt%20image%20feb%2013%2C%202026%2C%2004_28_20%20pm-1500w.png');
            }
            .home-thq-kitchen-highlightsgrid-elm {
              background-size: cover;
              background-image: url('/img36-1500w.jpg');
            }
            .home-thq-kitchen-highlightscard-elm1 {
              margin-top: 10px;
              margin-left: 10px;
              margin-right: 10px;
            }
            .home-thq-kitchen-highlightscard-elm2 {
              margin-top: 10px;
              margin-left: 10px;
              margin-right: 10px;
            }
            .home-thq-kitchen-highlightscard-elm3 {
              margin-left: 10px;
              margin-right: 10px;
              margin-bottom: 10px;
            }
            .home-thq-kitchen-highlightscard-elm4 {
              margin-left: 10px;
              margin-right: 10px;
              margin-bottom: 10px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
