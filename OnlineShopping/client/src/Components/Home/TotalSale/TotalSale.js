import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
function TotalSale(props) {
  return (
    <Router>
      <div className="total-sale">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="total-sale__content">
                TOTAL SALE: -50% for all winter collection!
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-content-center">
              <div className="total-sale__btn">
                <Link to="#" className="btn btn-block">
                  Browse sale products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default TotalSale;
