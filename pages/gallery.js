import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Gallery3 from '../components/gallery3'
import Footer from '../components/footer'

const Gallery = (props) => {
  return (
    <>
      <div className="gallery-container">
        <Head>
          <title>Gallery - Cuizina</title>
          <meta property="og:title" content="Gallery - Cuizina" />
          <link
            rel="canonical"
            href="https://active-apt-bat-couklh-omarelkhatib1-7005s-projects.vercel.app/gallery"
          />
        </Head>
        <Navigation></Navigation>
        <Gallery3
          content1={
            <Fragment>
              <span className="gallery-text1">
                Browse through our gallery to discover the exquisite dishes and
                services we offer for various events and sectors.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="gallery-text2">
                Explore Our Culinary Creations
              </span>
            </Fragment>
          }
          rootClassName="gallery3root-class-name"
        ></Gallery3>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .gallery-container {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .gallery-text1 {
            color: var(--color-on-surface);
            display: inline-block;
          }
          .gallery-text2 {
            color: var(--color-on-surface);
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Gallery
