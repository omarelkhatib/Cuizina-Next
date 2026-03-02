import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Gallery3 = (props) => {
  return (
    <>
      <div
        className={`gallery3-thq-gallery3-elm thq-section-padding ${props.rootClassName} `}
      >
        <div className="gallery3-thq-max-width-elm thq-section-max-width">
          <div className="gallery3-thq-section-title-elm">
            <h2 className="gallery3-thq-text-elm1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="gallery3-text2">
                    Explore Our Culinary Creations
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="gallery3-thq-text-elm2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery3-text1">
                    Browse through our gallery to discover the exquisite dishes
                    and services we offer for various events and sectors.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery3-container1 thq-grid-4">
            <div className="gallery3-container2">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery3-thq-image1-elm thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery3-container3">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery3-thq-image2-elm thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery3-container4">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery3-thq-image3-elm thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery3-container5">
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery3-thq-image4-elm thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery3-container6">
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="gallery3-thq-image5-elm thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery3-container7">
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="gallery3-thq-image6-elm thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery3-container8">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="gallery3-thq-image7-elm thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery3-container9">
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="gallery3-thq-image8-elm thq-img-ratio-16-9"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery3-thq-gallery3-elm {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            background-color: var(--color-secondary);
          }
          .gallery3-thq-max-width-elm {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery3-thq-section-title-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery3-thq-text-elm1 {
            fill: var(--color-on-surface);
            color: var(--color-on-surface);
            text-align: center;
          }
          .gallery3-thq-text-elm2 {
            text-align: center;
          }
          .gallery3-container1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
          }
          .gallery3-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-thq-image1-elm {
            width: 100%;
            height: 340px;
            max-width: 600px;
            align-self: center;
          }
          .gallery3-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-thq-image2-elm {
            width: 100%;
            height: 340px;
            max-width: 600px;
            align-self: center;
          }
          .gallery3-container4 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-thq-image3-elm {
            width: 100%;
            height: 340px;
            max-width: 600px;
          }
          .gallery3-container5 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-thq-image4-elm {
            width: 100%;
            height: 340px;
            max-width: 600px;
          }
          .gallery3-container6 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-thq-image5-elm {
            width: 100%;
            height: 340px;
            max-width: 600px;
          }
          .gallery3-container7 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-thq-image6-elm {
            width: 100%;
            height: 340px;
            max-width: 600px;
          }
          .gallery3-container8 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-thq-image7-elm {
            width: 100%;
            height: 340px;
            max-width: 600px;
          }
          .gallery3-container9 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-thq-image8-elm {
            width: 100%;
            height: 340px;
            max-width: 600px;
          }
          .gallery3-text1 {
            color: var(--color-on-surface);
            display: inline-block;
          }
          .gallery3-text2 {
            color: var(--color-on-surface);
            display: inline-block;
          }

          @media (max-width: 991px) {
            .gallery3-thq-image1-elm {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery3-thq-image2-elm {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery3-thq-image3-elm {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery3-thq-image4-elm {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery3-thq-image5-elm {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery3-thq-image6-elm {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery3-thq-image7-elm {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery3-thq-image8-elm {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
          }
          @media (max-width: 767px) {
            .gallery3-thq-section-title-elm {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Gallery3.defaultProps = {
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1653152981798-8cf2073b99f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3MTYwOTY4MXw&ixlib=rb-4.1.0&q=80&w=1080',
  image2Alt: 'Industrial Catering',
  image5Src:
    'https://images.unsplash.com/photo-1546102741-936b7dcc25af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3MTYwOTY4Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  image4Alt: 'Healthcare Solutions Catering',
  image6Src:
    'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3MTYwOTY4NHw&ixlib=rb-4.1.0&q=80&w=1080',
  image3Alt: 'Festival Catering',
  image6Alt: 'Craft and Creativity',
  image7Src:
    'https://images.unsplash.com/photo-1591616976460-bdc5460e63e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3MTYwOTY4MXw&ixlib=rb-4.1.0&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1533137098665-47ca60257cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3MTYwOTY4MXw&ixlib=rb-4.1.0&q=80&w=1080',
  image7Alt: 'State-of-the-Art Kitchen',
  image8Src:
    'https://images.unsplash.com/photo-1666886573600-61c634663827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3MTYwOTY4M3w&ixlib=rb-4.1.0&q=80&w=1080',
  image5Alt: 'Tailor-Made Menus',
  image8Alt: 'Customizable Solutions',
  image4Src:
    'https://images.unsplash.com/photo-1650847908184-6932be251029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3MTYwOTY4M3w&ixlib=rb-4.1.0&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1600182610361-4b4d664e07b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc3MTYwOTY4Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  rootClassName: '',
  image1Alt: 'Corporate Event Catering',
  heading1: undefined,
}

Gallery3.propTypes = {
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image3Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image2Src: PropTypes.string,
  rootClassName: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
}

export default Gallery3
