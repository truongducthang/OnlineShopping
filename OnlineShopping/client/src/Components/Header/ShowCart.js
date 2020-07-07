import React, { Component } from 'react';
import { actDeleteProductInCart } from '../../actions/cart';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ShowCart extends Component {
  onDeleteProductInCart = (product) => {
    console.log(product);
    this.props.onDeleteProductInCart(product);
  };
  render() {
    let { item } = this.props;
    const chuyendoiURL = (str) => {
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
    // console.log('-----------------');
    // console.log(this.props.Cart);
    // console.log('-----------------');
    return (
      <li className="shopping-cart__item">
        <div className="img-wrap">
          <Link
            onClick={(product) => this.onDeleteProductInCart(item.product)}
            className="shopping-cart__item--removeItem"
            to="#"
          >
            ×
          </Link>
          <img
            src={require('../../assets/img/products/' + item.product.src[1])}
            alt="Girl in a jacket"
            width={60}
            height={60}
          />
        </div>
        <div className="description">
          <Link
            to={
              '/product/' +
              (this.props.slug !== undefined ? this.props.slug + '/' : '') +
              chuyendoiURL(item.product.name) +
              '.' +
              item.product.id +
              '.html'
            }
            className="name"
          >
            {item.product.name}
          </Link>
          <div className="quantity-amount-wrap">
            <span className="quantity">{item.quantity}</span>
            <p> × </p>
            <span className="amount">${item.product.price}</span>
          </div>
        </div>
      </li>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    Cart: state.Cart,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actDeleteProductInCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCart);
