import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/tag"
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Helmet from 'react-helmet'

import Layout from './layout'
import Image from '../image'
import Hero from '../hero'
import Results from '../results'
import Columns from '../columns'
import Card from '../card'
import ImageBlock from '../image-block'
import References from '../references'

import { extractWorkItemLinkDetails, concatCaseStudiesAndFeatures, findCaseStudyById } from '../../helpers'

import config from '../../../config'

class CaseStudyLayout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query CaseStudyQuery {
            allMdx(
              filter: { frontmatter: { hidden: { eq: false } } }
            ) {
              edges {
                node {
                  id
                  parent {
                    ... on File {
                      name
                    }
                  }
                  code {
                    body
                  }
                  frontmatter {
                    title
                    image
                    client
                    categories
                    caption
                    results {
                      stat
                      description
                    }
                    references {
                      title
                      link
                    }
                    upNext
                    metaDescription
                    metaKeywords
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const caseStudiesWithFeatures = concatCaseStudiesAndFeatures(data, false);
          const caseStudy = findCaseStudyById(data, this.props.pageContext.id);

          const meta = [];
          if (caseStudy.frontmatter.metaDescription) {
            meta.push({ name: 'description', content: caseStudy.frontmatter.metaDescription })
          }
          if (caseStudy.frontmatter.metaKeywords) {
            meta.push({ name: 'keywords', content: caseStudy.frontmatter.metaKeywords })
          }

          return (
            <Layout>
              <Helmet
                title={`GoInvo | ${caseStudy.frontmatter.title}`}
                meta={meta}
              />
              <MDXProvider
                components={{
                  h1: ({children, ...props}) => (
                    <h1 className="header--xl margin-top--double margin-bottom--half" {...props}>{children}</h1>
                  ),
                  h2: ({children, ...props}) => (
                    <h2 className="header--lg margin-top--double text--center" {...props}>{children}</h2>
                  ),
                  h3: ({children, ...props}) => (
                    <h3 className="header--md margin-bottom--half" {...props}>{children}</h3>
                  ),
                  h4: ({children, ...props}) => (
                    <h4 className="header--sm margin-bottom--half" {...props}>{children}</h4>
                  ),
                  p: ({children, ...props}) => (
                    <p className="text--gray margin-top--none margin-bottom--double">{children}</p>
                  ),
                  ul:({children, ...props}) => (
                    <ul className="ul margin-top--none margin-bottom--double">{children}</ul>
                  ),
                  img: props => <Image className="image--max-width" sizes={config.sizes.caseStudy} {...props} />
                }}
              >
                <div className="case-study">
                  <Hero image={caseStudy.frontmatter.image} />
                  <div className="max-width max-width--md content-padding">
                    <MDXRenderer>{caseStudy.code.body}</MDXRenderer>
                  </div>
                  {
                    caseStudy.frontmatter.results ?
                      <Results stats={caseStudy.frontmatter.results} />
                    : null
                  }
                  <div className="background--blue pad-vertical--double pad-bottom--quad">
                    <div className="max-width content-padding">
                      <h3 className="header--md">Up next</h3>
                      <Columns columns={3}>
                        { caseStudy.frontmatter.upNext.map(id => {
                          const nextItem = caseStudiesWithFeatures.find(item => item.slug === id || item.id === id);
                          const { link, externalLink, suppressNewTab } = extractWorkItemLinkDetails(nextItem)

                          return (
                            <Card key={link} link={link} externalLink={externalLink} suppressNewTab={suppressNewTab}>
                              <ImageBlock
                                title={nextItem.title}
                                image={nextItem.image}
                                caption={nextItem.caption}
                                hoverable />
                            </Card>
                          )
                        })}
                      </Columns>
                    </div>
                  </div>
                  {
                    caseStudy.frontmatter.references ?
                      <div className="background--gray pad-vertical">
                        <div className="max-width content-padding">
                          <References references={caseStudy.frontmatter.references} />
                        </div>
                      </div>
                    : null
                  }
                </div>
              </MDXProvider>
            </Layout>
          )
        }}
      />
    )
  }
}

export default CaseStudyLayout
