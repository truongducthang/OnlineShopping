import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// import T_Shirt_0101 from '../../assets/img/product/t-shirts/0101.jpg';
// import T_Shirt_0102 from '../../assets/img/products/FeaturedProduct/001-a.jpg';
function ProductItem(props) {
  const chuyendoiURL =  (str) =>{
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

}

  return (
    <div className="productItem">
      {/* <div className="col-md-3 "> */}
      <Link to={"/product/" + (props.slug!==undefined?(props.slug+'/'):"")+  chuyendoiURL(props.name) +"."+props.id+".html"} className="productItem__img">
        {/* <img src={T_Shirt_0101} alt="" className="img-fluid " /> */}
        <img
          src={require('../../assets/img/products/' + props.src[0])}
          alt={require('../../assets/img/products/' + props.src[0])}
          className="img-fluid productItem__img--01"
        />
        <img
          src={require('../../assets/img/products/' + props.src[1])}
          alt={require('../../assets/img/products/' + props.src[1])}
          className="img-fluid productItem__img--02"
        />
      </Link>
      <div className="productItem__content">
        <Link to={"/product/" + (props.slug!==undefined?(props.slug+'/'):"")+  chuyendoiURL(props.name) +"."+props.id+".html"}>        
          <h4 className="productItem__content--title">{props.name}</h4>
        </Link>
        <div className="productItem__content--price">
          <Link to="#">$ {props.price}</Link>
          {props.sale === true ? (
            <Link to="#" className="price-sale">
              ${props.oldPrice}
            </Link>
          ) : (
            ''
          )}
        </div>
        <div className="productItem__content--rating">
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
        <Link to={"/product/" + (props.slug!==undefined?(props.slug+'/'):"")+  chuyendoiURL(props.name) +"."+props.id+".html"} className="btn">
          <FontAwesomeIcon icon={faShoppingBag} />
          <span>Select Options</span>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
}

export default ProductItem;
