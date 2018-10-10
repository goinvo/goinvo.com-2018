import React, { Component } from 'react'
import { Link } from 'gatsby'

class Card extends Component {
  render() {
    const { children, className, noShadow, fillHeight, link = null, externalLink = null } = this.props;

    const completeClassName = `card ${noShadow ? '' : 'card--shadow'} ${fillHeight ? 'card--fill-height' : ''} ${className ? className : ''}`;

    if (link) {
      return (
        externalLink ?
          <a href={link} className={completeClassName} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        :
          <Link to={link} className={completeClassName}>
            {children}
          </Link>
      )
    } else {
      return (
        <div className={completeClassName}>
          {children}
        </div>
      )
    }
  }
}

export default Card
