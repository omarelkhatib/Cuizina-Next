import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-section">
          <div className="footer-thq-footer-accent-line-elm footer-accent-line"></div>
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-brand footer-column">
                <a href="Homepage">
                  <div className="footer-logo">
                    <img
                      alt={props.imageAlt}
                      src={props.imageSrc}
                      className="footer-image"
                    />
                  </div>
                </a>
                <p className="footer-description section-content">
                  Delivering extraordinary culinary experiences through craft,
                  creativity, and precision. From corporate events to industrial
                  catering, we flavor every moment.
                </p>
                <div className="footer-socials">
                  <a
                    href="https://www.instagram.com/cuizina.beirut/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      aria-label="Follow Cuizina on Instagram"
                      className="footer-thq-footer-social-link-elm1 footer-social-link"
                    >
                      <svg
                        fill="none"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        stroke="currentColor"
                        viewbox="0 0 24 24"
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
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/cuizina.beirut/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      aria-label="Follow Cuizina on Facebook"
                      className="footer-thq-footer-social-link-elm2 footer-social-link"
                    >
                      <svg
                        fill="none"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        stroke="currentColor"
                        viewbox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-column">
                <h3 className="section-subtitle footer-heading">Quick Links</h3>
                <nav className="footer-nav">
                  <ul className="footer-list">
                    <li className="footer-item">
                      <Link href="/">
                        <a>
                          <div className="footer-thq-footer-link-elm1 footer-link">
                            <span>Home</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="footer-item">
                      <Link href="/about-us">
                        <a>
                          <div className="footer-thq-footer-link-elm2 footer-link">
                            <span>About Us</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="footer-item">
                      <Link href="/contact-us">
                        <a>
                          <div className="footer-thq-footer-link-elm3 footer-link">
                            <span>Contact Us</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="footer-item">
                      <Link href="/contact-us">
                        <a>
                          <div className="footer-thq-footer-link-elm4 footer-link">
                            <span>Request a Quote</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer-column">
                <h3 className="section-subtitle footer-heading">
                  Our Expertise
                </h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <span className="footer-text">Industrial Catering</span>
                  </li>
                  <li className="footer-item">
                    <span className="footer-text">Corporate Events</span>
                  </li>
                  <li className="footer-item">
                    <span className="footer-text">Festival Catering</span>
                  </li>
                  <li className="footer-item">
                    <span className="footer-text">Healthcare Solutions</span>
                  </li>
                </ul>
              </div>
              <div className="footer-contact footer-column">
                <h3 className="section-subtitle footer-heading">Contact</h3>
                <ul className="footer-thq-footer-list-elm3 footer-list footer-contact-list">
                  <li className="footer-contact-item">
                    <div className="footer-icon-wrapper">
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewbox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </svg>
                    </div>
                    <span className="footer-text">Beirut, Lebanon</span>
                  </li>
                  <li className="footer-contact-item">
                    <div className="footer-icon-wrapper">
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewbox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                      </svg>
                    </div>
                    <a href="tel:+9613294600">
                      <div className="footer-link">
                        <span>+961 3 294 600</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-contact-item">
                    <div className="footer-icon-wrapper">
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewbox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </svg>
                    </div>
                    <a href="mailto:info@cui-zina.com?subject=">
                      <div className="footer-link">
                        <span>info@cui-zina.com</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-divider"></div>
              <div className="footer-bottom-content">
                <p className="footer-copyright">
                  © 2026 Cuizina Catering. All rights reserved.
                </p>
                <div className="footer-legal">
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="footer-watermark">
            <span className="footer-text9">Z</span>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-logic">
(function(){
  /**
   * Footer logic for Cuizina website.
   * Handles simple interactive elements within the footer context.
   */
  ;(function () {
    const socialLinks = document.querySelectorAll(".footer-social-link")

    socialLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        // Subtle scale effect managed by CSS, but can add JS logic here for analytics
      })
    })

    // Ensure watermark doesn't interfere with clicks (safety measure)
    const watermark = document.querySelector(".footer-watermark")
    if (watermark) {
      watermark.style.pointerEvents = "none"
    }
  })()
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-thq-footer-accent-line-elm {
            background-color: transparent;
          }
          .footer-image {
            width: 206px;
            height: 72px;
            object-fit: cover;
          }
          .footer-thq-footer-social-link-elm1 {
            text-decoration: none;
          }
          .footer-thq-footer-social-link-elm2 {
            text-decoration: none;
          }
          .footer-thq-footer-link-elm1 {
            text-decoration: none;
          }
          .footer-thq-footer-link-elm2 {
            text-decoration: none;
          }
          .footer-thq-footer-link-elm3 {
            text-decoration: none;
          }
          .footer-thq-footer-link-elm4 {
            text-decoration: none;
          }
          .footer-thq-footer-list-elm3 {
            height: 215px;
          }
          .footer-text9 {
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 100;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  imageSrc: '/cuizina%20logo%20-%20transparent%20-%20metal-200h.png',
  imageAlt: 'image',
}

Footer.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Footer
