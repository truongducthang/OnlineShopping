import React, { Component } from 'react';
import ProductItem from '../cpn/ProductItem';
import { connect } from 'react-redux';
// import { actFetchData } from '../../actions/actFetchData';
import { actFetchDataAllProductsRequest } from '../../actions/actFetchData';
import TitlePage from '../TitlePage/TitlePage';
import SidebarLeft from '../SidebarLeft/SidebarLeft';
class ClothesFootwearItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			statusFilter: true,
		};
	}
	componentDidMount() {
		this.props.fetchDatabaseAllProducts();
	}

	changeStatusFilter = () => {
		this.setState({
			// statusFilter: !this.state.statusFilter,
			statusFilter: false,
		});
	};

	render() {
		let datafilter = this.props.DbAllProducts.filter((value) => {
			return value.name.indexOf(this.props.GetTextSearchFilter) !== -1;
		});
		let result = [];
		datafilter
			.filter((item) => item.productPortfolio === this.props.match.params.name)
			.forEach((item) => {
				if (
					item.price >= this.props.GetPriceFilter[0] &&
					item.price <= this.props.GetPriceFilter[1]
				) {
					result.push(item);
				}
			});

		const showAllProducts = () => {
			if (result !== undefined && result.length !== 0) {
				return result.map((value, key) => (
					<div className="col-md-4">
						<ProductItem
							slug={this.props.match.params.slug}
							key={key}
							id={value.id}
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
								<div className="row">{showAllProducts()}</div>
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
		GetTextSearchFilter: state.GetTextSearchFilter,
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ClothesFootwearItem);
