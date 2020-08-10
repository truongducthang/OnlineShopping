import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	actDeleteProductInCart,
	actUpdateProductInCart,
} from '../../actions/cart';
import { connect } from 'react-redux';
class CartItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quantity: 1,
		};
	}

	onDeleteProductInCart = (product) => {
		this.props.onDeleteProductInCart(product);
	};
	onUpdateQuantityInCart = (product, quantity) => {
		if (quantity > 0) {
			this.setState({
				quantity: quantity,
			});
			this.props.onUpdateQuantityInCart(product, quantity);
		}
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
		return (
			<li className="cart-products__product">
				<div className="cart-products__img">
					<Link
						to={
							'/product/' +
							(this.props.slug !== undefined ? this.props.slug + '/' : '') +
							chuyendoiURL(item.product.name) +
							'.' +
							item.product.id +
							'.html'
						}
					>
						<img
							src={require('../../assets/img/products/' + item.product.src[1])}
							alt=""
						/>
					</Link>
				</div>
				<div className="cart-products__content">
					<div className="cart-products__description">
						<Link
							to={
								'/product/' +
								(this.props.slug !== undefined ? this.props.slug + '/' : '') +
								chuyendoiURL(item.product.name) +
								'.' +
								item.product.id +
								'.html'
							}
							className="cart-products__name"
						>
							{item.product.name}
						</Link>
						<span className="cart-products__categories">
							Category:
							<Link
								to={'/product-category/' + item.product.productPortfolio}
								className="cart-products__tags"
							>
								{item.product.productPortfolio}
							</Link>
						</span>
						<div className="cart-products__actions">
							<span
								onClick={(product) => this.onDeleteProductInCart(item.product)}
								className="cart-products__del btn btn-danger "
							>
								Remove
							</span>
						</div>
					</div>
					<div className="cart-products__details">
						<div className="cart-products__prices">
							<p className="cart-products__real-prices">
								${item.product.price}
							</p>
							<p className="cart-products__discount-prices">
								<del>
									{item.product.sale === true
										? '$' + item.product.oldPrice
										: ''}
								</del>
								<span className="cart-products__space">
									{item.product.sale === true ? '|' : ''}
								</span>
								<span className="cart-products__percent-prices">
									{item.product.sale === true
										? '-' +
										  Math.ceil(
												('1' - item.product.price / item.product.oldPrice) * 100
										  ) +
										  '%'
										: ''}
								</span>
							</p>
						</div>
						<div className="cart-products__quantity">
							<div className="decrement">
								<input
									onClick={(product, quantity) =>
										this.onUpdateQuantityInCart(item.product, item.quantity - 1)
									}
									type="button"
									value="-"
									disabled={this.state.disabled}
								/>
							</div>
							<input
								type="number"
								value={
									item.quantity > 0 ? item.quantity : this.state.quantity
								}
								step="1"
							/>
							<div className="increment">
								<input
									onClick={(product, quantity) =>
										this.onUpdateQuantityInCart(item.product, item.quantity + 1)
									}
									type="button"
									value="+"
								/>
							</div>
						</div>
					</div>
				</div>
			</li>
		);
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onDeleteProductInCart: (product) => {
			dispatch(actDeleteProductInCart(product));
		},
		onUpdateQuantityInCart: (product, quantity) => {
			dispatch(actUpdateProductInCart(product, quantity));
		},
	};
};

export default connect(null, mapDispatchToProps)(CartItem);
