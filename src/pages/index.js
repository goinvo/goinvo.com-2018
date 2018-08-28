import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'
import Divider from '../components/divider';

const IndexPage = () => (
  <Layout>
    <h1 className="header--xl">Heading extra large</h1>
    <h2 className="header--lg">Heading large</h2>
    <h3 className="header--md">Heading medium</h3>
    <h4 className="header--sm">Heading small</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Turpis massa sed elementum tempus egestas sed. Aliquam faucibus purus in massa. Amet est placerat in egestas erat imperdiet sed euismod nisi. Turpis egestas integer eget aliquet. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Quis imperdiet massa tincidunt nunc pulvinar. Eu turpis egestas pretium aenean. Sapien eget mi proin sed libero enim sed faucibus turpis. Suspendisse in est ante in nibh mauris cursus. Tincidunt arcu non sodales neque sodales ut etiam sit.</p>
    <p className="text--caption">
      By some person
      <br/>
      From some place
    </p>
    <ul className="ul">
      <li>One thing</li>
      <li>Two thing</li>
      <li>Three thing</li>
    </ul>
    <Divider />
    <Divider animated />
    <Link to="/work/">Work</Link>
  </Layout>
)

export default IndexPage
