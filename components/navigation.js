import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-mobile-overlay {
  transition: none;
}
.navigation-mobile-overlay.is-open .navigation-overlay-item {
  animation: none;
  opacity: 1;
  transform: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <nav className="navigation-thq-navigation-wrapper-elm navigation-wrapper">
          <div className="navigation-container">
            <div aria-label="Cuizina Home" className="navigation-logo-link">
              <div className="navigation-thq-navigation-brand-wrapper-elm">
                <Link href="/">
                  <a className="navigation-link10">
                    <img
                      alt="image"
                      src="/cuizina%20-%20logo-200h.png"
                      className="navigation-image"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="navigation-desktop-menu">
              <ul className="navigation-links">
                <li>
                  <div className="navigation-link">
                    <Link href="/">
                      <a className="navigation-link11">Home</a>
                    </Link>
                  </div>
                </li>
                <li>
                  <Link href="/about-us">
                    <a>
                      <div className="navigation-link">
                        <span>About Us</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <a>
                      <div className="navigation-link">
                        <span>Contact Us</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery">
                    <a>
                      <div className="navigation-link">
                        <span>Gallery</span>
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
              <Link href="/contact-us">
                <a>
                  <div className="navigation-thq-btn-elm1 btn-primary btn-sm btn navigation-cta">
                    <span>Request a Quote</span>
                  </div>
                </a>
              </Link>
            </div>
            <button
              id="navToggle"
              type="button"
              aria-label="Toggle navigation menu"
              aria-controls="mobileOverlay"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
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
                <path d="M4 8h16M4 16h16"></path>
              </svg>
            </button>
          </div>
        </nav>
        <div
          id="mobileOverlay"
          aria-hidden="true"
          className="navigation-mobile-overlay navigation-thq-navigation-mobile-overlay-elm"
        >
          <div className="navigation-overlay-header">
            <div aria-label="Cuizina Home" className="navigation-logo-link">
              <span className="section-title navigation-brand">Cuizina</span>
            </div>
            <button
              id="navClose"
              type="button"
              aria-label="Close navigation menu"
              className="navigation-mobile-close"
            >
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
                <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                <path d="M3 15h18m-6-7l-3 3l-3-3"></path>
              </svg>
            </button>
          </div>
          <div className="navigation-overlay-content">
            <ul className="navigation-overlay-links">
              <li className="navigation-overlay-item">
                <a href="/">
                  <div className="navigation-overlay-link">
                    <span>Home</span>
                  </div>
                </a>
              </li>
              <li className="navigation-overlay-item">
                <Link href="/about-us">
                  <a>
                    <div className="navigation-thq-navigation-overlay-link-elm2 navigation-overlay-link">
                      <span>About</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-overlay-item">
                <Link href="/contact-us">
                  <a>
                    <div className="navigation-thq-navigation-overlay-link-elm3 navigation-overlay-link">
                      <span>Contact</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-overlay-item">
                <Link href="/gallery">
                  <a>
                    <div className="navigation-thq-navigation-overlay-link-elm4 navigation-overlay-link">
                      <span>{props.text4}</span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
            <div className="navigation-overlay-footer">
              <a href="/contact-us">
                <div className="navigation-overlay-cta btn-lg btn-primary btn">
                  <span>Request a Quote</span>
                </div>
              </a>
              <div className="navigation-overlay-contact">
                <p className="section-subtitle">Beirut, Lebanon</p>
                <p className="section-content">hello@cuizina.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<style>
        @keyframes navItemFadeIn {to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="navigation-container6">
          <div className="navigation-container7">
            <Script
              html={`<script defer data-name="navigation-logic">
  (function(){
  const navWrapper = document.querySelector(".navigation-wrapper");

  const navToggle =
    document.getElementById("navToggle") ||
    document.getElementById("mobile-toggle");

  const navClose =
    document.getElementById("navClose") ||
    document.getElementById("mobile-close");

  const mobileOverlay =
    document.getElementById("mobileOverlay") ||
    document.getElementById("mobile-overlay");

  const body = document.body;

  // If essential elements don't exist, stop safely (no crashes)
  if (!navToggle || !navClose || !mobileOverlay) return;

  function openMenu() {
    mobileOverlay.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileOverlay.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    body.style.overflow = "";
  }

  navToggle.addEventListener("click", openMenu);
  navClose.addEventListener("click", closeMenu);

  // Close menu on link click (support both class names)
  const mobileLinks = document.querySelectorAll(
    ".navigation-overlay-link, .navigation-mobile-link"
  );
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Sticky header scroll effect (only if wrapper exists)
  window.addEventListener("scroll", () => {
    if (!navWrapper) return;
    if (window.scrollY > 50) navWrapper.classList.add("is-scrolled");
    else navWrapper.classList.remove("is-scrolled");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("is-open")) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767 && mobileOverlay.classList.contains("is-open")) {
      closeMenu();
    }
  });
})();
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-thq-navigation-wrapper-elm {
            height: 101px;
            background: var(--color-secondary);
          }
          .navigation-thq-navigation-brand-wrapper-elm {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navigation-link10 {
            display: contents;
          }
          .navigation-image {
            width: 206px;
            height: 79px;
            object-fit: cover;
            text-decoration: none;
          }
          .navigation-link11 {
            text-decoration: none;
          }
          .navigation-thq-btn-elm1 {
            text-decoration: none;
          }
          .navigation-thq-navigation-overlay-link-elm2 {
            text-decoration: none;
          }
          .navigation-thq-navigation-overlay-link-elm3 {
            text-decoration: none;
          }
          .navigation-thq-navigation-overlay-link-elm4 {
            text-decoration: none;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
          .navigation-container6 {
            display: none;
          }
          .navigation-container7 {
            display: contents;
          }
          @media (max-width: 479px) {
            .navigation-container2 {
              display: flex;
            }
            .navigation-thq-navigation-mobile-overlay-elm {
              display: flex;
            }
            .navigation-container6 {
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}

Navigation.defaultProps = {
  text4: 'Gallery',
}

Navigation.propTypes = {
  text4: PropTypes.string,
}

export default Navigation
