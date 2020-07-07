import React, { Component } from 'react';
import ProductItem from '../cpn/ProductItem';
import { connect } from 'react-redux';
// import { actFetchData } from '../../actions/actFetchData';
import { actFetchDataAllProductsRequest } from '../../actions/actFetchData';
import TitlePage from '../TitlePage/TitlePage';
import SidebarLeft from '../SidebarLeft/SidebarLeft';
class DigitalGoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusFilter: true,
    };
  }
  chuyendoiURL = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');

    // return
    return str;
  };
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
  showAllProducts = () => {
    if (this.state.statusFilter === true) {
      if (
        this.props.DbAllProducts !== undefined ||
        this.props.DbAllProducts.length !== 0
      ) {
        return this.props.DbAllProducts.filter(
          (item) => item.productPortfolio === this.props.match.params.name
        ).map((value, key) => (
          <div className="col-md-4 " key={key}>
            <ProductItem
              key={key}
              id={value.id}
              src={value.src}
              name={value.name}
              price={value.price}
              oldPrice={value.oldPrice}
              sale={value.sale}
            ></ProductItem>
          </div>
        ));
      } else {
        return <h1>Product does not Exist</h1>;
      }
    }
    if (this.state.statusFilter === false) {
      if (
        this.props.GetDataFilter !== undefined ||
        this.props.GetDataFilter.length !== 0
      ) {
        return this.props.GetDataFilter.map((value, key) => (
          <div className="col-md-4">
            <ProductItem
              key={key}
              id={value.id}
              src={value.src}
              name={value.name}
              price={value.price}
              oldPrice={value.oldPrice}
              sale={value.sale}
            ></ProductItem>
          </div>
        ));
      } else {
        return <h1>Product does not Exist</h1>;
      }
    }
  };

  render() {
    console.log(this.props.match.params.name.replace(' ', '-'));
    // let result = [];
    // this.props.DbAllProducts.forEach((item) => {
    //   if (
    //     item.price >= this.props.GetPriceFilter[0] &&
    //     item.price <= this.props.GetPriceFilter[1]
    //   ) {
    //     result.push(item);
    //   }
    // });

    // const showAllProducts = () => {
    //   if (result === undefined || result.length !== 0) {
    //     return result.map((value, key) => (
    //       <div className="col-md-4">
    //         <ProductItem
    //           key={key}
    //           src={value.src}
    //           name={value.name}
    //           price={value.price}
    //           oldPrice={value.oldPrice}
    //         ></ProductItem>
    //       </div>
    //     ));
    //   } else {
    //     return <h1>Product does not Exist</h1>;
    //   }
    // };

    return (
      <div>
        <TitlePage
          slug={this.props.match.params.slug}
          name={this.props.match.params.name}
        ></TitlePage>
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-12 ">
                <SidebarLeft
                  changeStatusFilter={() => this.changeStatusFilter()}
                  data={this.props.DbAllProducts.filter(
                    (item) =>
                      item.productPortfolio === this.props.match.params.name
                  )}
                ></SidebarLeft>
              </div>
              <div className="col-xl-9 col-md-12">
                {/* <div className="row">{this.showAllProducts()}</div> */}
                <div className="row">{this.showAllProducts()}</div>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DigitalGoods);
