import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const QuoteFormContent = (props) => {
  return (
    <>
      <div
        className={`quote-form-content-thq-quote-form-content-elm quote-form-content ${props.rootClassName} `}
      >
        <form
          action="/submit"
          method="POST"
          data-form-id="3abcdee0-0193-44a8-8183-0508d654f07b"
          className="main-inquiry-form"
        >
          <div className="form-grid quote-form-content-thq-form-grid-elm">
            <div className="form-group">
              <label htmlFor="full-name" className="form-label">
                {props.formLabel ?? (
                  <Fragment>
                    <span className="quote-form-content-text17">Full Name</span>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                required="true"
                placeholder={props.formInputPlaceholder}
                data-form-field-id="full-name"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="company" className="form-label">
                {props.formLabel1 ?? (
                  <Fragment>
                    <span className="quote-form-content-text12">
                      Company / Organization
                    </span>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder={props.formInputPlaceholder1}
                data-form-field-id="company"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                {props.formLabel2 ?? (
                  <Fragment>
                    <span className="quote-form-content-text13">
                      Email Address
                    </span>
                  </Fragment>
                )}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required="true"
                placeholder={props.formInputPlaceholder2}
                data-form-field-id="email"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                {props.formLabel3 ?? (
                  <Fragment>
                    <span className="quote-form-content-text21">
                      Phone Number
                    </span>
                  </Fragment>
                )}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required="true"
                placeholder={props.formInputPlaceholder3}
                data-form-field-id="phone"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="event-type" className="form-label">
                {props.formLabel4 ?? (
                  <Fragment>
                    <span className="quote-form-content-text14">
                      Event Type
                    </span>
                  </Fragment>
                )}
              </label>
              <select
                id="event-type"
                name="event-type"
                required="true"
                data-form-field-id="event-type"
                className="form-input"
              >
                <option value="true" disabled="true" selected="true">
                  Select an option
                </option>
                <option value="corporate">Corporate</option>
                <option value="industrial">Industrial</option>
                <option value="private">Private</option>
                <option value="festival">Festival</option>
                <option value="healthcare">Healthcare</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="guests" className="form-label">
                {props.formLabel5 ?? (
                  <Fragment>
                    <span className="quote-form-content-text18">
                      Estimated Guests
                    </span>
                  </Fragment>
                )}
              </label>
              <input
                type="number"
                id="guests"
                min="1"
                name="guests"
                placeholder={props.formInputPlaceholder4}
                data-form-field-id="guests"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date" className="form-label">
                {props.formLabel6 ?? (
                  <Fragment>
                    <span className="quote-form-content-text19">
                      Event Date
                    </span>
                  </Fragment>
                )}
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required="true"
                data-form-field-id="date"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="location" className="form-label">
                {props.formLabel7 ?? (
                  <Fragment>
                    <span className="quote-form-content-text20">Location</span>
                  </Fragment>
                )}
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder={props.formInputPlaceholder5}
                data-form-field-id="location"
                className="form-input"
              />
            </div>
            <div className="full-width form-group">
              <label htmlFor="message" className="form-label">
                {props.formLabel8 ?? (
                  <Fragment>
                    <span className="quote-form-content-text15">Message</span>
                  </Fragment>
                )}
              </label>
              <textarea
                id="message"
                name="message"
                required="true"
                placeholder={props.formTextareaPlaceholder}
                data-form-field-id="message"
                className="form-textarea"
              ></textarea>
            </div>
          </div>
          <div className="form-footer">
            <button
              id="thq_button_oHPc"
              name="button"
              type="submit"
              data-form-field-id="thq_button_oHPc"
              className="btn-lg btn-primary form-submit btn"
            >
              <span>
                {props.btn ?? (
                  <Fragment>
                    <span className="quote-form-content-text16">
                      Send Request
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <p className="form-note">
              {props.formNote ?? (
                <Fragment>
                  <span className="quote-form-content-text11">
                    We’ll get back to you within 24–48 hours.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </form>
      </div>
      <style jsx>
        {`
          .quote-form-content-thq-quote-form-content-elm {
            position: relative;
          }
          .quote-form-content-text11 {
            display: inline-block;
          }
          .quote-form-content-text12 {
            display: inline-block;
          }
          .quote-form-content-text13 {
            display: inline-block;
          }
          .quote-form-content-text14 {
            display: inline-block;
          }
          .quote-form-content-text15 {
            display: inline-block;
          }
          .quote-form-content-text16 {
            display: inline-block;
          }
          .quote-form-content-text17 {
            display: inline-block;
          }
          .quote-form-content-text18 {
            display: inline-block;
          }
          .quote-form-content-text19 {
            display: inline-block;
          }
          .quote-form-content-text20 {
            display: inline-block;
          }
          .quote-form-content-text21 {
            display: inline-block;
          }

          @media (max-width: 479px) {
            .quote-form-content-thq-quote-form-content-elm {
              display: block;
            }
            .quote-form-content-thq-form-grid-elm {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </>
  )
}

QuoteFormContent.defaultProps = {
  formNote: undefined,
  formLabel1: undefined,
  formLabel2: undefined,
  formLabel4: undefined,
  rootClassName: '',
  formLabel8: undefined,
  formInputPlaceholder3: '+961 -- --- ---',
  btn: undefined,
  formLabel: undefined,
  formLabel5: undefined,
  formInputPlaceholder5: 'City, District',
  formLabel6: undefined,
  formInputPlaceholder4: 'e.g. 150',
  formInputPlaceholder2: 'john@example.com',
  formLabel7: undefined,
  formLabel3: undefined,
  formInputPlaceholder1: 'Company Ltd.',
  formInputPlaceholder: 'John Doe',
  formTextareaPlaceholder: 'Tell us more about your requirements...',
}

QuoteFormContent.propTypes = {
  formNote: PropTypes.element,
  formLabel1: PropTypes.element,
  formLabel2: PropTypes.element,
  formLabel4: PropTypes.element,
  rootClassName: PropTypes.string,
  formLabel8: PropTypes.element,
  formInputPlaceholder3: PropTypes.string,
  btn: PropTypes.element,
  formLabel: PropTypes.element,
  formLabel5: PropTypes.element,
  formInputPlaceholder5: PropTypes.string,
  formLabel6: PropTypes.element,
  formInputPlaceholder4: PropTypes.string,
  formInputPlaceholder2: PropTypes.string,
  formLabel7: PropTypes.element,
  formLabel3: PropTypes.element,
  formInputPlaceholder1: PropTypes.string,
  formInputPlaceholder: PropTypes.string,
  formTextareaPlaceholder: PropTypes.string,
}

export default QuoteFormContent
