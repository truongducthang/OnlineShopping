import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/img/logo/logo.jpg';
import mobileLogo from '../../assets/img/logo/mobile-logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faMobileAlt,
  faShoppingBasket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import ShowCart from './ShowCart';
function Header(props) {
  let history = useHistory();
  // const [ActiveClass, setActiveClass] = useState(props.isChangeStatusClass);
  function toggleClass() {
    props.changeEditStatusClass();
    // setActiveClass(!ActiveClass);
  }
  function isLogout() {
    localStorage.removeItem('login');
    history.push('/');
  }
  let { Cart } = props;
  const showCartItem = () => {
    if (Cart.length > 0) {
      return Cart.map((item, key) => {
        return <ShowCart key={key} item={item}></ShowCart>;
      });
    } else {
      return <p>No products in the cart.</p>;
    }
  };
  const showTotalAmount = () => {
    let total = 0;
    if (Cart.length > 0) {
      for (let i = 0; i < Cart.length; i++) {
        total += Cart[i].product.price * Cart[i].quantity;
      }
    }
    return total;
  };
  const showTotalQuantity = () => {
    let total = 0;
    if (Cart.length > 0) {
      for (let i = 0; i < Cart.length; i++) {
        total += Cart[i].quantity;
      }
    }
    return total;
  };
  return (
    <div className="header">
      <header id="header" className="header-bar">
        <div className="container">
          <div className="branding d-none d-xl-flex ">
            <Link className="branding__logo" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className="branding__oHour branding__ope">
              <FontAwesomeIcon icon={faClock} />
              <div>
                <p>Mon - Fri: 8h:00 - 19:00</p>
                <p>Sat, Sun: 9:00 - 18:00</p>
              </div>
            </div>
            <div className="branding__contact branding__ope">
              <FontAwesomeIcon icon={faMobileAlt} />
              <div>
                <p>001-234-5679</p>
                <p>001-987-6543</p>
              </div>
            </div>
          </div>
        </div>
        <nav className="navigation d-none d-xl-flex">
          <div className="container d-flex justify-content-between">
            <ul className="main-nav">
              <li className="main-nav__item">
                <Link to="/Home" className="main-nav__link">
                  Home
                </Link>
              </li>
              <li className="main-nav__item">
                <Link to="/all-products" className="main-nav__link">
                  All products
                </Link>
              </li>
              <li className="main-nav__item">
                <Link
                  className="main-nav__link"
                  to="/product-category/clothes-footwear/t-shirts"
                >
                  t-shirts
                </Link>
              </li>
              <li className="main-nav__item">
                <Link
                  className="main-nav__link"
                  to="/product-category/clothes-footwear/hoodies"
                >
                  hoddies
                </Link>
              </li>
              <li className="main-nav__item">
                <Link
                  className="main-nav__link"
                  to="/product-category/clothes-footwear/footwear"
                >
                  footwear
                </Link>
              </li>
              <li className="main-nav__item">
                <Link
                  className="main-nav__link"
                  to="/product-category/digital-goods"
                >
                  digital goods
                </Link>
              </li>
              <li className="main-nav__item">
                <Link className="main-nav__link" to="/sale">
                  sale!
                </Link>
              </li>
            </ul>
            <ul className="mini-nav">
              <li className="mini-nav__item">
                {localStorage.getItem('login') ? (
                  <Link
                    onClick={() => isLogout()}
                    className="mini-nav__link"
                    to="#"
                  >
                    <FontAwesomeIcon icon={faUser} />
                    <span>Logout</span>
                  </Link>
                ) : (
                  <Link className="mini-nav__link" to="/signin">
                    <FontAwesomeIcon icon={faUser} />
                    <span>Login/Register</span>
                  </Link>
                )}
              </li>

              <li className="mini-nav__item show-cart">
                <Link className="mini-nav__link" to="/cart">
                  <FontAwesomeIcon icon={faShoppingBasket} />
                  <span>{showTotalQuantity()}</span>
                </Link>
                <ul className="shopping-cart">
                  {showCartItem()}
                  <div className="shopping-cart-bottom">
                    <p className="Subtotal">Subtotal : ${showTotalAmount()} </p>
                    <div className="buttons">
                      <Link className="btn" to="/cart">
                        View Cart
                      </Link>
                      <Link className="btn" to="/cart">
                        Checkout
                      </Link>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* mobile-navbar  */}
      <div className="mobile-header-bar d-xl-none fixed-top">
        <div className="mobile-branding">
          <Link className="mobile-branding__logo" to="/">
            <img src={mobileLogo} alt="logo" />
          </Link>
        </div>
        <div className="mini-nav">
          <li className="mini-nav__item">
            <Link className="mini-nav__link" to="/signin">
              <FontAwesomeIcon icon={faUser} />
              <span>Login/Register</span>
            </Link>
          </li>
          <li className="mini-nav__item  show-cart">
            <Link className="mini-nav__link" to="/cart">
              <FontAwesomeIcon icon={faShoppingBasket} />
              <span>{showTotalQuantity()}</span>
            </Link>
            <ul className="shopping-cart">
              {showCartItem()}
              <div className="shopping-cart-bottom">
                <p className="Subtotal">Subtotal : ${showTotalAmount()} </p>
                <div className="buttons">
                  <Link className="btn" to="/cart">
                    View Cart
                  </Link>
                  <Link className="btn" to="/cart">
                    Checkout
                  </Link>
                </div>
              </div>
            </ul>
          </li>
        </div>
        {/* button navigation  */}
        <span onClick={toggleClass} className="button-mobile-navigation" to="/">
          <div className="lines-button"></div>
        </span>
      </div>
      {/*END mobile-navbar  */}
      {/* overlay  */}
      <div
        className={
          'mobile-sticky-header-overlay ' +
          (props.EditStatusClass.isEditStatusClass ? 'Active' : null) +
          ' ' +
          (props.EditStatusClass.isEditStatusClassSIDEBAR ? 'Active' : null)
        }
      ></div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    EditStatusClass: state.EditStatusClass,
    Cart: state.Cart,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatusClass: () => {
      dispatch({
        type: 'CHANGE_EDIT_STATUS_CLASS',
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
