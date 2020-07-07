import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
function CardItem(props) {
	return (
		<Router>
			<div className="col-md-3 ">
				<div className="shopify__product">
					<Link to="#" className="shopify__product--img">
						<img src={props.src} alt="" className="img-fluid" />
					</Link>
					<div className="shopify__product--description ">
						<div className="info d-flex justify-content-lg-between">
							<div className="info__name">
								<Link to="#">ZARA </Link>
							</div>
							<div className="rating">
								<span>
									<Link to="#">
										<FontAwesomeIcon icon={faStar} />
										<FontAwesomeIcon icon={faStar} />
										<FontAwesomeIcon icon={faStar} />
										<FontAwesomeIcon icon={faStar} />
										<FontAwesomeIcon icon={faStar} />
									</Link>
								</span>
							</div>
						</div>
						<div className="title">
							<Link to="#">Standard Fit Sport Shirt</Link>
						</div>
						<div className="price  d-flex">
							<Link to="#">$888</Link>
							<Link to="#" className="price-sale">
								$888
							</Link>
						</div>
						<button type="button" className="btn btn-primary mt-3">
							<FontAwesomeIcon icon={faShoppingBag} />
							<span>ADD TO CART</span>
						</button>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default CardItem;
