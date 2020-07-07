import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Poster(props) {
  return (
    <Router>
      <div className="poster">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="poster__item poster__item-1">
                <Link to="#">
                  <h3 className="poster__title">SEASONAL SALE</h3>
                  <p className="poster__content">Winter Collection -50% OFF</p>
                </Link >
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="poster__item poster__item-2">
                <Link to="#">
                  <h3 className="poster__title">NEW FOOTWEAR</h3>
                  <p className="poster__content">Spring / Summer 2020</p>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 mb-4">
              <div className="poster__item poster__item-3">
                <Link to="#">
                  <h3 className="poster__title">T-SHIRTS</h3>
                  <p className="poster__content">New Trendy Prints</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Poster;
