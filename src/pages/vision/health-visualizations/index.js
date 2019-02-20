import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Columns from '../../../components/columns'
import PosterCard from '../../../components/vision/health-visualizations/poster-card'
//import Image from '../../../components/image'
//import { mediaUrl } from '../../../helpers'

import posters from '../../../data/vision/health-visualizations/posters.json'

import config from '../../../../config'

const frontmatter = {
  metaTitle: '',
  metaDescription: '',
  heroImage: '/images/features/posters/health-visualizations-hero.jpg',
}

class Posters extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posterItems: posters,
    }
  }

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="poster-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl margin-bottom--none">
                Health Visualization Posters
              </h1>
              <p className="text--gray text--sm margin-top--none margin-bottom--double">
                All of the following works are open source, available to all
                under a{' '}
                <a
                  href="https://creativecommons.org/licenses/by/3.0/us/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Creative Commons Attribution v3
                </a>{' '}
                license.
              </p>

              <Columns columns={3}>
                {this.state.posterItems.map((poster, i) => {
                  return (
                    <PosterCard
                      title={poster.title}
                      image={poster.image}
                      learnMoreLink={poster.learnMoreLink}
                      id={poster.id}
                      downloadLink={poster.downloadLink}
                      sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                    />
                  )
                })}
              </Columns>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Posters
