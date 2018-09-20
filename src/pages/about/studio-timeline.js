import React, { Component } from 'react'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'

class StudioTimelinePage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Hero image="/images/about/studio-timeline/bookshelf.jpg">
            <h1 className="header--xl">
              Our studio timeline<span className="text--serif text--primary">.</span>
            </h1>
          </Hero>
          <div className="max-width content-padding pad-vertical--double">
            <iframe
              src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1em1JKKCs47bf4bS54Arq2BYA-q8CbLEwW4K0-JZDQA8&font=Default&lang=en&initial_zoom=2&height=650'
              width='100%'
              height='650'
              webkitAllowFullscreen
              mozAllowFullscreen
              allowFullscreen
              frameBorder='0'>
            </iframe>
          </div>
        </Layout>
      </div>
    )
  }
}

export default StudioTimelinePage
