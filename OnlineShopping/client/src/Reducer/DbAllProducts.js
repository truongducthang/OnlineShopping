import * as Types from '../constants/ActionTypes'
const DbAllProductsInitialState = [];
const DbAllProducts = (state = DbAllProductsInitialState, action) => {
  switch (action.type) {
    case Types.FETCH_DATABASE_ALL_PRODUCTS:
      state = action.databaseallproducts;
// console.log(action.products)
      return [...state]
    default:
      return [...state];
  }
};
export default DbAllProducts;
