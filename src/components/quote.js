import React from 'react'

import Divider from './divider'

const Quote = ({ quotee, quoteeSub, children }) => (
  <div className="quote">
    <div className="quote__inner-container max-width max-width--sm">
      <Divider />
      <p className="quote__content header--lg">{children}</p>
      <p className="text--caption">
        <span>{quotee}</span>
        <br />
        <span>{quoteeSub}</span>
      </p>
      <Divider />
    </div>
  </div>
)

export default Quote
