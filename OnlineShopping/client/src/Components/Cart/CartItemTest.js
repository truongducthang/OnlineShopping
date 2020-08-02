import React, { Component } from 'react';
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
		return (
			<tr>
				<td>
					<img
						src={require('../../assets/img/products/' + item.product.src[1])}
						alt="Girl in a jacket"
						width={60}
						height={60}
					/>
					<p> {item.product.name}</p>
				</td>
				<td>{item.product.price}</td>
				<td>
					<div className="productDetail__quantity">
						<div className="decrement">
							<input
								// onClick={() =>
								//   this.setState({
								//     quantity:
								//       this.state.quantity > 1 ? this.state.quantity - 1 : 1,
								//   })
								// }
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
							value={item.quantity > 0 ? item.quantity : this.state.quantity}
							step="1"
						/>
						<div className="increment">
							<input
								// onClick={() =>
								//   this.setState({
								//     quantity:
								//       this.state.quantity > 0 ? this.state.quantity + 1 : 1,
								//   })
								// }
								onClick={(product, quantity) =>
									this.onUpdateQuantityInCart(item.product, item.quantity + 1)
								}
								type="button"
								value="+"
							/>
						</div>
					</div>
				</td>
				<td>{item.product.price * item.quantity}</td>
				<td>
					<div
						onClick={(product) => this.onDeleteProductInCart(item.product)}
						className="btn btn-danger delete"
					>
						Remove
					</div>
				</td>
			</tr>
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
