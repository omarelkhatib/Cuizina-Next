import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import QuoteFormContent from '../components/quote-form-content'
import Footer from '../components/footer'

const ContactUs = (props) => {
  return (
    <>
      <div className="contact-us-container1">
        <Head>
          <title>Contact-Us - Cuizina</title>
          <meta property="og:title" content="Contact-Us - Cuizina" />
          <link
            rel="canonical"
            href="https://active-apt-bat-couklh-omarelkhatib1-7005s-projects.vercel.app/contact-us"
          />
        </Head>
        <Navigation></Navigation>
        <section className="contact-us-thq-contact-hero-elm contact-hero">
          <div aria-hidden="true" className="contact-hero-watermark">
            <span className="contact-us-text10">Z</span>
          </div>
          <div className="contact-hero-container">
            <div className="contact-hero-content">
              <h1 className="hero-title">Contact Cuizina</h1>
              <p className="hero-subtitle">
                Whether it&apos;s a corporate gala or industrial catering at
                scale, we bring extraordinary culinary experiences to your
                table. Let&apos;s start the conversation.
              </p>
              <a href="#quote-form">
                <div className="contact-us-thq-btn-elm1 contact-hero-cta btn-outline btn">
                  <span className="contact-us-text11">Request a Quote</span>
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m7 7 10 10M17 7v10H7"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section id="quote-form" className="quote-form">
          <div className="quote-form-container">
            <div className="quote-form-split">
              <div className="quote-form-visual">
                <img
                  alt="Chef plating a gourmet dish"
                  src="/img68-1500w.jpg"
                  className="quote-form-image"
                />
                <div className="quote-form-overlay">
                  <h2 className="section-title">Crafting Your Event</h2>
                  <p className="section-content">
                    Every detail matters. Share your vision with us, and our
                    culinary experts will tailor a proposal that exceeds your
                    expectations.
                  </p>
                </div>
              </div>
              <QuoteFormContent
                btn={
                  <Fragment>
                    <span className="contact-us-text12">Send Request</span>
                  </Fragment>
                }
                formNote={
                  <Fragment>
                    <span className="contact-us-text13">
                      We’ll get back to you within 24–48 hours.
                    </span>
                  </Fragment>
                }
                formLabel={
                  <Fragment>
                    <span className="contact-us-text14">Full Name</span>
                  </Fragment>
                }
                formLabel1={
                  <Fragment>
                    <span className="contact-us-text15">
                      Company / Organization
                    </span>
                  </Fragment>
                }
                formLabel2={
                  <Fragment>
                    <span className="contact-us-text16">Email Address</span>
                  </Fragment>
                }
                formLabel3={
                  <Fragment>
                    <span className="contact-us-text17">Phone Number</span>
                  </Fragment>
                }
                formLabel4={
                  <Fragment>
                    <span className="contact-us-text18">Event Type</span>
                  </Fragment>
                }
                formLabel5={
                  <Fragment>
                    <span className="contact-us-text19">Estimated Guests</span>
                  </Fragment>
                }
                formLabel6={
                  <Fragment>
                    <span className="contact-us-text20">Event Date</span>
                  </Fragment>
                }
                formLabel7={
                  <Fragment>
                    <span className="contact-us-text21">Location</span>
                  </Fragment>
                }
                formLabel8={
                  <Fragment>
                    <span className="contact-us-text22">Message</span>
                  </Fragment>
                }
              ></QuoteFormContent>
            </div>
          </div>
        </section>
        <section className="contact-us-thq-contact-details-elm contact-details">
          <div className="contact-details-container">
            <div className="contact-us-thq-contact-details-grid-elm contact-details-grid">
              <div className="contact-us-thq-contact-card-elm1 contact-card">
                <div className="contact-card-icon">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Phone</h3>
                <a href="tel:+9613294600">
                  <div className="contact-link section-content">
                    <span>+961 3 294 600</span>
                  </div>
                </a>
                <p className="section-content">Mon-Fri, 9am - 6pm</p>
              </div>
              <div className="contact-us-thq-contact-card-elm2 contact-card">
                <div className="contact-card-icon">
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
                    <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Email</h3>
                <a href="mailto:info@cui-zina.com?subject=">
                  <div className="contact-link section-content">
                    <span>info@cui-zina.com</span>
                  </div>
                </a>
                <p className="section-content">For general inquiries</p>
              </div>
              <div className="contact-us-thq-contact-card-elm3 contact-card">
                <div className="contact-card-icon">
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
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle r="3" cx="12" cy="10"></circle>
                  </svg>
                </div>
                <h3 className="section-subtitle">Location</h3>
                <p className="section-content">
                  Main Coastal Road, Beirut, Lebanon
                </p>
                <p className="section-content">Central Kitchen Facility</p>
              </div>
              <div className="contact-us-thq-contact-card-elm4 contact-card">
                <div className="contact-card-icon">
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
                    <rect
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                      width="20"
                      height="20"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Social</h3>
                <div className="contact-social-links">
                  <a
                    href="https://www.instagram.com/cuizina.beirut/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className="contact-us-thq-section-content-elm17 contact-link section-content">
                      <span>Instagram</span>
                    </div>
                  </a>
                  <span className="contact-divider">/</span>
                  <a
                    href="https://www.facebook.com/cuizina.beirut/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className="contact-us-thq-section-content-elm18 contact-link section-content">
                      <span>Facebook</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-us-thq-location-hours-elm location-hours">
          <div className="location-hours-container">
            <div className="location-header">
              <h2 className="section-title">Visit Our Facility</h2>
              <p className="section-content">
                Experience the heart of Cuizina at our 1,500 sqm central kitchen
                facility.
              </p>
            </div>
            <div className="location-main">
              <div className="location-map-placeholder">
                <img
                  alt="Interior of Cuizina Central Kitchen"
                  src="/img34-1500w.jpg"
                  className="location-image"
                />
                <div className="location-scrim"></div>
              </div>
              <div className="location-info-bar">
                <div className="info-item">
                  <span className="info-label">Address</span>
                  <span className="info-value">Beirut, Lebanon</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Opening Hours</span>
                  <span className="info-value">Mon — Fri: 08:00 - 18:00</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Appointments</span>
                  <span className="info-value">
                    On-site visits by appointment only.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-strip">
          <div className="services-strip-container">
            <div className="services-strip-header">
              <h2 className="section-title">Our Expertise</h2>
              <p className="section-content">
                Discover the full breadth of our catering solutions across
                diverse sectors.
              </p>
            </div>
            <div className="services-strip-grid">
              <div className="service-mini-card">
                <div className="service-icon">
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
                    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                    <path d="M17 18h1"></path>
                    <path d="M12 18h1"></path>
                    <path d="M7 18h1"></path>
                  </svg>
                </div>
                <span className="section-content">Industrial</span>
              </div>
              <div className="service-mini-card">
                <div className="service-icon">
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
                    <rect x="4" y="2" rx="2" width="16" height="20"></rect>
                    <line x1="12" x2="12" y1="18" y2="18"></line>
                  </svg>
                </div>
                <span className="section-content">Corporate</span>
              </div>
              <div className="service-mini-card">
                <div className="service-icon">
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
                    <path d="M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path>
                    <path d="M18 22V15"></path>
                    <path d="M15 18l3-3 3 3"></path>
                  </svg>
                </div>
                <span className="section-content">Festivals</span>
              </div>
              <div className="service-mini-card">
                <div className="service-icon">
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M8 12h8"></path>
                    <path d="M12 8v8"></path>
                  </svg>
                </div>
                <span className="section-content">&amp; More</span>
              </div>
            </div>
            <div className="services-strip-cta">
              <Link href="/">
                <a>
                  <div className="contact-us-thq-btn-elm2 btn-lg btn-outline btn">
                    <span>Explore Full Services</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <div className="contact-us-container2">
          <div className="contact-us-container3">
            <Script
              html={`<script defer data-name="contact-page-logic">
(function(){
  // Smooth Scroll for Hero CTA
  const heroCta = document.querySelector(".contact-hero-cta")
  if (heroCta) {
    heroCta.addEventListener("click", (e) => {
      const targetId = heroCta.getAttribute("href")
      if (targetId.startsWith("#")) {
        e.preventDefault()
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      }
    })
  }

  // Form Validation and Feedback
  const contactForm = document.querySelector(".main-inquiry-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      // We allow native submission, but we can add a loading state
      const submitBtn = contactForm.querySelector(".form-submit")
      const originalText = submitBtn.innerText

      submitBtn.disabled = true
      submitBtn.innerText = "Processing..."

      // Note: Real submission happens naturally via form action="/submit"
      // This is purely for UI feedback before the page transition or reload
    })

    // Real-time validation visual cues
    const inputs = contactForm.querySelectorAll(".form-input, .form-textarea")
    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        if (input.checkValidity()) {
          input.style.borderColor = "var(--color-primary)"
        } else {
          input.style.borderColor = "#e74c3c"
        }
      })
    })
  }

  // Intersection Observer for staggered reveals
  const revealElements = document.querySelectorAll(".contact-card, .service-mini-card")
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 100)
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  revealElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    revealObserver.observe(el)
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
          .contact-us-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .contact-us-thq-contact-hero-elm {
            background-size: contain;
            background-color: transparent;
            background-image: url('/chatgpt%20image%20feb%2013%2C%202026%2C%2004_28_20%20pm-1500h.png');
            background-position: center;
          }
          .contact-us-text10 {
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 100;
          }
          .contact-us-thq-btn-elm1 {
            display: none;
            background-color: var(--color-primary);
          }
          .contact-us-text11 {
            fill: var(--color-secondary);
            color: var(--color-secondary);
          }
          .contact-us-text12 {
            display: inline-block;
          }
          .contact-us-text13 {
            display: inline-block;
          }
          .contact-us-text14 {
            display: inline-block;
          }
          .contact-us-text15 {
            display: inline-block;
          }
          .contact-us-text16 {
            display: inline-block;
          }
          .contact-us-text17 {
            display: inline-block;
          }
          .contact-us-text18 {
            display: inline-block;
          }
          .contact-us-text19 {
            display: inline-block;
          }
          .contact-us-text20 {
            display: inline-block;
          }
          .contact-us-text21 {
            display: inline-block;
          }
          .contact-us-text22 {
            display: inline-block;
          }
          .contact-us-thq-contact-details-elm {
            background-color: #e8efea;
          }
          .contact-us-thq-contact-details-grid-elm {
            background-color: #ffffff;
          }
          .contact-us-thq-contact-card-elm1 {
            background: #ffffff;
          }
          .contact-us-thq-contact-card-elm2 {
            background: #ffffff;
          }
          .contact-us-thq-contact-card-elm3 {
            background: #ffffff;
          }
          .contact-us-thq-contact-card-elm4 {
            background: #ffffff;
          }
          .contact-us-thq-section-content-elm17 {
            text-decoration: none;
          }
          .contact-us-thq-section-content-elm18 {
            text-decoration: none;
          }
          .contact-us-thq-location-hours-elm {
            background-color: #e8efea;
          }
          .contact-us-thq-btn-elm2 {
            text-decoration: none;
          }
          .contact-us-container2 {
            display: none;
          }
          .contact-us-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default ContactUs
