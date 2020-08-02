import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { Slider, Switch } from 'antd';
import { connect } from 'react-redux';

class SidebarLeft extends Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled: false,
			name: '',
			value: '',
		};
	}
	onChange = (event) => {
		this.props.changeStatusFilter();
		this.props.getTextSearchFilter(event.target.value);
		// let datafilter = this.props.data.filter((value) => {
		//   return value.name.indexOf(this.props.GetTextSearchFilter) !== -1;
		// });
		// let result = [];

		// this.props.data.forEach((item) => {
		//   if (
		//     item.price >= this.props.GetPriceFilter[0] &&
		//     item.price <= this.props.GetPriceFilter[1]
		//   ) {
		//     result.push(item);
		//   }
		// });

		// this.props.getDataFilter(result);
	};
	handleDisabledChange = (disabled) => {
		this.setState({ disabled });
	};
	handleValueChange = (value) => {
		let price = [];
		value.forEach((value) => price.push(value * 20));
		this.props.getPriceFilter(price);
	};
	handleClick = (event) => {
		// this.props.changeStatusFilter();
		event.preventDefault();
		let result = [];
		this.props.data.forEach((item) => {
			if (
				item.price >= this.props.GetPriceFilter[0] &&
				item.price <= this.props.GetPriceFilter[1]
			) {
				result.push(item);
			}
		});
		this.props.getDataFilter(result);
	};
	toggleClass = () => {
		this.props.changeEditStatusClassSidebar();
	};
	reset = (value) => {
		// console.log(value)
		this.props.GetPriceFilter[0] = 0;
		this.props.GetPriceFilter[1] = 2000;
	};
	render() {
		const { disabled } = this.state;
		return (
			<aside
				className={
					'sidebar ' +
					(this.props.EditStatusClass.isEditStatusClassSIDEBAR
						? 'Active'
						: null)
				}
			>
				<div className="sidebar-left">
					<div className="searchBar">
						<h3 className="title">Search</h3>
						<div className="search">
							<input
								// defaultValue={this.props.GetTextSearchFilter}
								value={this.props.GetTextSearchFilter}
								name="name"
								onChange={(event) => this.onChange(event)}
								type="search"
								placeholder="Search products..."
							/>
							<Link to="/">
								<FontAwesomeIcon icon={faSearch} />
							</Link>
						</div>
					</div>

					<div className="category">
						<h3 className="title">CATEGORIES</h3>
						<ul className="product-category">
							<li className="product-category__item">
								<Link
									className="product-category__link"
									to="/product-category/clothes-footwear/"
								>
									Clothes & Footwear
								</Link>
								<ul className="children">
									<li className="product-category__item">
										<Link
											className="product-category__link"
											to="/product-category/clothes-footwear/footwear"
										>
											Footwear
										</Link>
									</li>
									<li className="product-category__item">
										<Link
											className="product-category__link"
											to="/product-category/clothes-footwear/hoodies"
										>
											Hoodies
										</Link>
									</li>
									<li className="product-category__item">
										<Link
											className="product-category__link"
											to="/product-category/clothes-footwear/t-shirts"
										>
											T-Shirts
										</Link>
									</li>
								</ul>
							</li>
							<li className="product-category__item">
								<Link
									className="product-category__link"
									to="/product-category/digital-goods"
								>
									Digital goods
								</Link>
							</li>
						</ul>
					</div>
					<div className="price-filter">
						<h3 className="title">FILTER BY PRICE</h3>
						<div className="price-filter__slider">
							<Slider
								onChange={(value) => this.handleValueChange(value)}
								onClick={(value) => this.reset(value)}
								range
								// value={[0, 100]}
								defaultValue={[0, 100]}
								// value={[200,2000]}
								disabled={disabled}
							/>
							Disabled:
							<Switch
								size="small"
								checked={disabled}
								onChange={this.handleDisabledChange}
							/>
							<span className="float-right">
								Price: ${this.props.GetPriceFilter[0]} - $
								{this.props.GetPriceFilter[1]}
							</span>
						</div>
						<Link
							onClick={(event) => this.handleClick(event)}
							to="/"
							className="btn"
						>
							<span>Filter</span>
						</Link>{' '}
						<Link onClick={() => this.reset()} to="#" className="btn">
							<span>Reset</span>
						</Link>
					</div>
					<span onClick={() => this.toggleClass()} className="toggle-sidebar">
						<FontAwesomeIcon icon={faSlidersH} />
					</span>
				</div>
			</aside>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
		GetPriceFilter: state.GetPriceFilter,
		EditStatusClass: state.EditStatusClass,
		GetTextSearchFilter: state.GetTextSearchFilter,
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		getPriceFilter: (payload) => {
			dispatch({
				type: 'GET_PRICE_FILTER',
				payload,
			});
		},
		getDataFilter: (getDataFilter) => {
			dispatch({
				type: 'GET_DATA_FILTER',
				getDataFilter,
			});
		},
		getTextSearchFilter: (getTextSearchFilter) => {
			dispatch({
				type: 'GET_TEXT_SEARCH_FILTER',
				getTextSearchFilter,
			});
		},
		changeEditStatusClassSidebar: () => {
			dispatch({
				type: 'CHANGE_EDIT_STATUS_CLASS_SIDEBAR',
			});
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SidebarLeft);
