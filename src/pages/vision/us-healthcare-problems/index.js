import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Image from '../../../components/image'
import Divider from '../../../components/divider'
import References from '../../../components/references'
import Author from '../../../components/author'

import config from '../../../../config'
import { mediaUrl } from '../../../helpers'

const frontmatter = {
  metaTitle: 'US Healthcare Problems',
  metaDescription:
    'The United States is home to some of the best and worst care. The list serves as a call to action for everyone to close the gap.',
  heroImage: '/images/services/doh-preview.jpg',
}

class USHealthcareProblemsFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="us-healthcare-problems">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">US Healthcare Problems</h1>
              <p>
                The United States is home to some of the best and worst care.
                The US Healthcare Problems list is the product of GoInvo’s
                efforts to understand why these gaps exist and how they impact
                us. By drawing attention to the most prominent problems faced in
                our healthcare system, we can start to envision how it may be
                redesigned.
              </p>
              <p>
                GoInvo has spent the last two months researching and breaking
                down these problems. The result is a list ranked based on
                several quantitative indicators, such as number of deaths,
                number of American people impacted, and dollars spent or lost.
                The interconnected nature of the US healthcare system makes it
                nearly impossible to fully separate these problems. GoInvo has
                coupled analytical skills and interest in health policy to bring
                to light this complex web of menacing realities. Unsurprisingly,
                all problems can be attributed to the fee-for-service system in
                some way.
              </p>
              <p>
                GoInvo encourages you to be appalled by these statistics... and
                then do something about it.
              </p>
            </div>

            <div className="max-width max-width--md content-padding">
              <div className="margin-bottom--double">
                <div className="pure-g button-group margin-bottom">
                  <div className="pure-u-1">
                    <a
                      href="https://table2site.com/site/us-healthcare-problems"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--secondary margin-top--double margin-bottom button--block"
                    >
                      Visit USHealthcareProblems.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-width pad-vertical--double">
            <iframe
              class="airtable-embed"
              src="https://airtable.com/embed/shrE0r9pF2A7UdkVB?backgroundColor=gray&viewControls=on"
              frameborder="0"
              onmousewheel=""
              width="100%"
              height="600"
            ></iframe>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h2 className="header--lg text--center margin-bottom--half margin-top--double">
                We'd Like Your Feedback
              </h2>
              <p className="text--gray">
                We’ve highlighted the top problems related to healthcare in the
                US. Where data is available, we’ve also listed quantitative
                metrics supporting the severity of each problem. Explore the
                list and references then send your feedback on this draft to{' '}
                <a href="mailto:hello@goinvo.com"> hello@goinvo.com</a>.
              </p>
            </div>
          </div>

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <HubspotForm
                formId={config.hubspotNewsletterFullFormId}
                title="Subscribe to our open source healthcare newsletter."
                submitButtonText="Subscribe"
              />
            </div>
          </div>

          <div className="background--blue pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div id="methodology">
                <h2 className="header--xl text--center">Methodology</h2>
                <p className="text--gray">
                  The US Healthcare Problems list began as a google spreadsheet
                  research effort, with sources including “The Long Fix” by
                  Vivan Lee, CDC, and CMS. Our team aimed to pool relevant
                  quantitative and anecdotal information for each outlined
                  problem, making it possible to start to prioritize what needs
                  addressing. Ideally, the move away from a fee-for-service
                  system and towards a value-based approach would alleviate some
                  of this burden.
                </p>
                <p>
                  Fee-for-service: payment is dependent on the quantity of care
                </p>
                <p>Value-based: payment is dependent on the quality of care</p>
                <p>
                  The initial ranking is based on the quantitative data as well
                  as the prevalence of the problem as explained in research. The
                  next iteration will implement a more robust algorithm that
                  considers all of these factors using relative weightings.
                </p>
                <p>
                  Stay tuned for V02 where we will showcase the top 50 problems,
                  include a method of visually connecting related problems, and
                  showcase the current status of a problem being addressed.
                </p>
                <h3 className="header--md margin-bottom--half margin-top--double">
                  v1 - 21.Jan.2021
                </h3>
                <p className="text--gray">the the the...</p>
              </div>
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h2 className="header--xl text--center">Authors</h2>
                <Author name="Hannah Sennik" />
                <Author name="Juhan Sonin" company="GoInvo, MIT" />

                <h3 className="header--md">Contributors</h3>
                <Author
                  name="Anyone else?"
                  company="???"
                  image="/images/features/determinants-of-health/headshot-hrothgar.jpg"
                >
                  can add bio here.
                </Author>
              </div>

              <Divider />

              <div id="references">
                <References
                  references={[
                    {
                      title: 'you can write the first reference here',
                      link: 'full url here',
                    },
                    {
                      title: 'you can write the second reference here',
                      link: 'full url here',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default USHealthcareProblemsFeature
