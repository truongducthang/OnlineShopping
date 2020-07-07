import React, { Component } from 'react';
import ProductItem from '../../cpn/ProductItem';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
//
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { connect } from 'react-redux';
// import { actFetchData } from '../../actions/actFetchData';
import { actFetchDataFeaturedProductsRequest } from '../../../actions/actFetchData';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  landscape: {
    breakpoint: { max: 767.98, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
class FeaturedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    this.props.fetchDatabaseFeaturedProducts();
  }
  log = () => {
    console.log(' \n ' + JSON.stringify(this.props.DbFeatureProducts) + ' \n');
  };

  showAllProducts = () => {
    if (this.props.DbFeatureProducts !== null) {
      return this.props.DbFeatureProducts.map((value, key) => (
        <ProductItem
        key={key}
        id={value.id}
        src={value.src}
        name={value.name}
        price={value.price}
        oldPrice={value.oldPrice}
        sale={value.sale}
        ></ProductItem>
      ));
    }
  };
  render() {
    return (
      <section className="featured-products">
        <div className="container">
          <div className="heading-secondary">
            <h2 className="heading-secondary__title">FEATURED PRODUCTS</h2>
            <div className="heading-secondary__icon">
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <Carousel
            arrows={true}
            swipeable={true}
            draggable={true}
            // showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={this.props.deviceType !== 'mobile' ? true : false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            // customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {this.showAllProducts()}
          </Carousel>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    DbFeatureProducts: state.DbFeatureProducts,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDatabaseFeaturedProducts: () => {
      dispatch(actFetchDataFeaturedProductsRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProducts);
