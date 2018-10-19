import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import Sticky from '../components/sticky'
import CategoriesList, { allCategory } from '../components/categories-list'
import Columns from '../components/columns'
import Card from '../components/card'
import ImageBlock from '../components/image-block'
import Quote from '../components/quote'
import Collapsible from '../components/collapsible'
import HubspotForm from '../components/hubspot-form'
import GradientImageColumns from '../components/gradient-image-columns'

import config from '../../config'

import { extractCaseStudyDataFromQuery } from '../helpers'

import Caret from '../assets/images/icon-caret.inline.svg'

import features from '../data/features'
import CATEGORIES_LIST from '../data/categories.json'
import caseStudiesOrder from '../data/case-study-order.json'

const upNextList = [
  {
    link: "/services/",
    image: "/images/services/shr-completeness.jpg",
    title: "Learn more about our services",
    caption: "No matter the size or structure of your team, we integrate to magnify your efforts."
  },
  {
    link: "/vision/",
    image: "/images/homepage/standardized-health-data-preview-2.jpg",
    title: "Explore our research",
    caption: "We investigate the future of healthcare through our podcast, features, books, and articles. Check it out!"
  },
  {
    link: "/about/",
    image: "/images/about/bowling.jpg",
    title: "Meet the team",
    caption: "We bring together the very best people and deploy them on your hardest digital problems."
  }
];

const getWorkItemsOfCategory = (workItems, catId, viewMore = false) => {
  let newWorkItems = [];

  if (catId === allCategory.id) {
    newWorkItems = viewMore ? workItems : workItems.slice(0, 4);
  } else {
    newWorkItems = workItems.filter(item => {
      return item.categories.filter(cat => {
        return cat === catId;
      }).length;
    });
  }

  return newWorkItems;
}

class WorkPage extends Component {
  constructor(props) {
    super(props);

    const workFeatures = features.filter(feature => !feature.hiddenWorkPage);

    const workItems = extractCaseStudyDataFromQuery(props.data).concat(workFeatures).sort((a, b) => {
      return caseStudiesOrder.indexOf(a.slug || a.id) > caseStudiesOrder.indexOf(b.slug || b.id) ? 1 : -1;
    })

    const query = props.location && props.location.search ? props.location.search : null;
    const categoryId = query ? query.substr(query.indexOf("=") + 1) : allCategory.id;
    const selectedCategory = CATEGORIES_LIST.find(cat => cat.id === categoryId) || allCategory;
    const activeWorkItems = getWorkItemsOfCategory(workItems, selectedCategory.id);

    this.state = {
      workItems,
      selectedCategory,
      activeWorkItems,
      categoriesStuck: false,
      categoriesCollapsed: false,
      suppressCollapseTransition: false,
      partialView: true,
      viewMoreCount: workItems.length - activeWorkItems.length
    };

  }

  handleCategoriesStickyStateChange = (isStuck) => {
    this.setState({
      suppressCollapseTransition: true,
      categoriesStuck: isStuck,
      categoriesCollapsed: isStuck
    }, () => {
      this.setState({ suppressCollapseTransition: false })
    });
  }

  toggleCategories = () => {
    this.setState({ categoriesCollapsed: !this.state.categoriesCollapsed });
  }

  setSelectedCategory = (cat) => {
    this.setState({
      partialView: true,
      selectedCategory: cat,
      activeWorkItems: getWorkItemsOfCategory(this.state.workItems, cat.id),
      categoriesCollapsed: this.state.categoriesStuck ? true : false,
    });
  }

  viewMore = () => {
    this.setState({
      partialView: false,
      selectedCategory: allCategory,
      activeWorkItems: getWorkItemsOfCategory(this.state.workItems, allCategory.id, true)
    });
  }

  render() {
    return (
      <Layout>
        <Helmet
          title="GoInvo | Work"
          meta={[
            { name: 'description', content: 'We help healthcare organizations make clinical strength software for high-test, high stress environments.' },
            { name: 'keywords', content: 'healthcare design, health design, healthcare UI design, healthcare UX design, designing healthcare systems, goinvo work' },
          ]}
        />
        <Hero image="/images/work/dr-emily.jpg" position="center top">
          <h1 className="header--xl">
            Patient tested<span className="text--serif text--primary">.</span><br/>
            Clinician approved<span className="text--serif text--primary">.</span>
          </h1>
        </Hero>
        <Sticky top={50}
                scrollOffset={50}
                target="#target-stick"
                zIndex={500}
                onStateChange={this.handleCategoriesStickyStateChange}>
          {
            this.state.categoriesStuck ?
              <button className="button button--primary button--bg-white button--block" onClick={this.toggleCategories}>
                {this.state.selectedCategory.title}
                <Caret className={`icon icon--md margin-left flip ${!this.state.categoriesCollapsed ? 'flip--is-flipped' : ''}`} style={{ marginTop: '-1px' }} />
              </button>
            : null
          }
          <Collapsible collapsed={this.state.categoriesCollapsed} suppressTransition={this.state.suppressCollapseTransition}>
          <div className="background--gray pad-top pad-bottom--double" id="categories-list">
            <div className="max-width content-padding">
                <CategoriesList columns={3} selectedCategoryId={this.state.selectedCategory.id} onSelectCategory={this.setSelectedCategory} includeAll />
            </div>
          </div>
          </Collapsible>
        </Sticky>
        <div id="target-stick"></div>
        <Collapsible collapsed={this.state.selectedCategory.id === 'open-source' ? false : true} transitionSpeed="slow">
          <div className="background--blue">
            <div className="max-width content-padding pad-vertical">
              <h2 className="header--xl">Open source healthcare matters</h2>
              <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                  <h3 className="header--lg">We live in a closed healthcare system.</h3>
                  <p className="text--gray">The algorithms that drive our care, to our clinical and life data, to hospital and treatment pricing, are governed by blackbox services.</p>
                  <p className="text--gray">By using these closed systems, we are actively designed out of the decision-making process, in favor of corporate “optimized care” for optimized returns (vs optimized health outcomes).</p>
                  <p className="text--gray">The biases built into software, implemented with intent or accidentally, need interrogation, citizen collaboration, and correction.</p>
                  <p className="text--gray">It’s our health.</p>
                  <p className="text--gray">Our very lives are at stake.</p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg">
                  <h3 className="header--lg">We demand that our healthcare services be open.</h3>
                  <p className="text--gray">
                    1. to inspect and correct bias,<br/>
                    2. to be accessible for rapid innovation and evolution,<br/>
                    3. and to become more valuable as more patients, clinicians, clinics, companies, and governments engage in healthcare for all.
                  </p>
                  <a href="http://www.opensourcehealthcare.org" target="_blank" rel="noopener noreferrer" className="button button--primary button--lg margin-top">Check out our open source journal</a>
                </div>
              </div>
            </div>
          </div>
        </Collapsible>
        <div className="max-width content-padding pad-vertical--double">
          <div className="margin-top--double">
            <Columns columns={2}>
              { this.state.activeWorkItems.map(item => {
                const link = item.slug ? `/work/${item.slug}` : item.link;
                const externalLink = item.slug ? false : item.link.includes('/vision/') ? false : true;
                const suppressNewTab = item.external ? false : true;

                return (
                  <Card key={link} link={link} externalLink={externalLink} suppressNewTab={suppressNewTab}>
                    <ImageBlock
                      title={item.title}
                      image={item.image}
                      client={item.client || null}
                      categories={item.categories}
                      caption={item.caption}
                      hoverable />
                  </Card>
                )
              })}
            </Columns>
          </div>
          {
            this.state.selectedCategory.id === allCategory.id && this.state.partialView ?
              <div className="margin-top margin-bottom--double">
                <button className="button button--primary button--block" onClick={this.viewMore}>View more ({this.state.viewMoreCount})</button>
              </div>
            : null
          }
        </div>
        <Quote background="gray" quotee="Igor Gershfang" quoteeSub="Walgreens Emerging Tech Director">
          Invo beautifully helped shape our next generation clinician and patient experience.
        </Quote>
        <GradientImageColumns image="/images/work/eric-comp.jpg" backgroundColor="black" gradient offsetContent reverse>
          <h2 className="header--xl text--white">Want to take your healthcare product to the next level?</h2>
          <HubspotForm formId={config.hubspotContactFormId} title="Get in touch" />
        </GradientImageColumns>
        <div className="background--blue">
          <div className="max-width content-padding pad-vertical pad-vertical--quad--only-lg">
            <h4 className="header--md">Up next</h4>
            <Columns columns={3}>
              { upNextList.map(item => {
                return (
                  <Card key={item.link} link={item.link}>
                    <ImageBlock
                      title={item.title}
                      image={item.image}
                      caption={item.caption}
                      hoverable />
                  </Card>
                )
              })}
            </Columns>
          </div>
        </div>
      </Layout>
    )
  }
}

export const workPageQuery = graphql`
  query WorkQuery {
    allMdx(
      filter: { frontmatter: { hidden: { eq: false } } }
    ) {
      edges {
        node {
          parent {
            ... on File {
              name
            }
          }
          frontmatter {
            title
            image
            client
            categories
            caption
          }
        }
      }
    }
  }
`

export default WorkPage
