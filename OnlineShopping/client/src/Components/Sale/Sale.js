import React, { Component } from 'react';
import ProductItem from '../cpn/ProductItem';
import { connect } from 'react-redux';
// import { actFetchData } from '../../actions/actFetchData';
import { actFetchDataAllProductsRequest } from '../../actions/actFetchData';
import TitlePage from '../TitlePage/TitlePage';
import SidebarLeft from '../SidebarLeft/SidebarLeft';
class Sale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusFilter: true,
    };
  }
  componentDidMount() {
    this.props.fetchDatabaseAllProducts();
  }
  log = () => {
    console.log(' \n ' + JSON.stringify(this.props.DbAllProducts) + ' \n');
  };
  changeStatusFilter = () => {
    this.setState({
      // statusFilter: !this.state.statusFilter,
      statusFilter: false,
    });
  };
  // showAllProducts = () => {
  //   if (this.state.statusFilter === true) {
  //     if (
  //       this.props.DbAllProducts !== undefined ||
  //       this.props.DbAllProducts.length !== 0
  //     ) {
  //       return this.props.DbAllProducts.filter((item) => item.sale).map(
  //         (value, key) => (
  //           <div className="col-md-4" key={key}>
  //             <ProductItem
  //               key={key}
  //               id={value.id}
  //               src={value.src}
  //               name={value.name}
  //               price={value.price}
  //               oldPrice={value.oldPrice}
  //               sale={value.sale}
  //             ></ProductItem>
  //           </div>
  //         )
  //       );
  //     } else {
  //       return <h1>Product does not Exist</h1>;
  //     }
  //   }
  //   if (this.state.statusFilter === false) {
  //     if (
  //       this.props.GetDataFilter !== undefined ||
  //       this.props.GetDataFilter.length !== 0
  //     ) {
  //       return this.props.GetDataFilter.map((value, key) => (
  //         <div className="col-md-4" key={key}>
  //           <ProductItem
  //             key={key}
  //             id={value.id}
  //             src={value.src}
  //             name={value.name}
  //             price={value.price}
  //             oldPrice={value.oldPrice}
  //             sale={value.sale}
  //           ></ProductItem>
  //         </div>
  //       ));
  //     } else {
  //       return <h1>Product does not Exist</h1>;
  //     }
  //   }
  // };

  render() {
    let detailer = this.props.DbAllProducts.filter((value) => {
      return value.name.indexOf(this.props.GetTextSearchFilter) === -1;
    });
    let result = [];
    detailer
      .filter((item) => item.sale)
      .forEach((item) => {
        if (
          item.price >= this.props.GetPriceFilter[0] &&
          item.price <= this.props.GetPriceFilter[1]
        ) {
          result.push(item);
        }
      });

    const showAllProducts = () => {
      if (result !== undefined || result.length !== 0) {
        return result.map((value, key) => (
          <div className="col-md-4">
            <ProductItem
              id={value.id}
              key={key}
              src={value.src}
              name={value.name}
              price={value.price}
              oldPrice={value.oldPrice}
            ></ProductItem>
          </div>
        ));
      } else {
        return <h1>Product does not Exist</h1>;
      }
    };

    return (
      <div>
        <TitlePage name="sale"></TitlePage>
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-12 ">
                <SidebarLeft
                  changeStatusFilter={() => this.changeStatusFilter()}
                  data={this.props.DbAllProducts.filter((item) => item.sale)}
                ></SidebarLeft>
              </div>
              <div className="col-xl-9 col-md-12">
                {/* <div className="row">{this.showAllProducts()}</div> */}
                <div className="row">{showAllProducts()}</div>
              </div>
            </div>
          </div>
          <p onClick={() => this.log()}>----------CHECK DATA-----------</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    DbAllProducts: state.DbAllProducts,
    GetPriceFilter: state.GetPriceFilter,
    GetDataFilter: state.GetDataFilter,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDatabaseAllProducts: () => {
      dispatch(actFetchDataAllProductsRequest());
    },
    getDataFilter: (getDataFilter) => {
      dispatch({
        type: 'GET_DATA_FILTER',
        getDataFilter,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sale);
