import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default class RelatedProducts extends Component {
  render() {
    let count = 1;
    return (
      <div className="related-product">
        <div className="container">
          <div className="heading-secondary">
            <h2 className="heading-secondary__title">RELATED PRODUCTS</h2>
            <div className="heading-secondary__icon">
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
