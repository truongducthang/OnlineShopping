import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ProductItem from '../../cpn/ProductItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { connect } from 'react-redux';
import { actFetchDataAllProductsRequest } from '../../../actions/actFetchData';
//carousel
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

//end carousel
class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeItem: 'footwear',
    };
  }

  componentDidMount() {
    this.props.fetchDatabaseAllProducts();
  }

  handleClick = (productPortfolio) => {
    this.setState({ changeItem: productPortfolio });
  };

  listItems = () => {
    if (this.props.DbAllProducts) {
      return this.props.DbAllProducts.filter(
        (value) => value.productPortfolio === this.state.changeItem
      ).map((value, key) => (
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
    let data = this.props.DbAllProducts;
    const optionFilter = data
      .map((e) => e['productPortfolio'])
      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the dead keys & store unique objects
      .filter((e) => data[e])
      .map((e) => data[e]);

    return (
      <section className="new-arrival">
        <div className="container">
          <div className="heading-secondary">
            <h2 className="heading-secondary__title">NEW ARRIVAL</h2>
            <div className="heading-secondary__icon">
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="new-arrival__nav">
            <ul className="nav justify-content-center">
              {optionFilter.map((value, key) => {
                return (
                  <li
                    key={key}
                    onClick={(productPortfolio) =>
                      this.handleClick(value.productPortfolio)
                    }
                    className="nav-item"
                  >
                    <NavLink exact to="#" className="nav-link ">
                      {value.productPortfolio}
                    </NavLink>
                  </li>
                );
              })}
              {/* <li className="nav-item">
										<NavLink exact to="#" className="nav-link ">
											SALE
										</NavLink>
									</li> */}
            </ul>
          </div>
        </div>{' '}
        {/* list data  */}
        <div className="list-products">
          <div className="container">
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
              {this.listItems()}
            </Carousel>
          </div>
        </div>
        {/* end list data  */}
      </section>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    DbAllProducts: state.DbAllProducts,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDatabaseAllProducts: () => {
      dispatch(actFetchDataAllProductsRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewArrival);
