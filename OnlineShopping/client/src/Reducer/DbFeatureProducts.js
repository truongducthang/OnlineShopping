import * as Types from '../constants/ActionTypes'
const DbFeatureProductsInitialState = [];
const DbFeatureProducts = (state = DbFeatureProductsInitialState, action) => {
  switch (action.type) {
    case Types.FETCH_DATABASE_FEATURED_PRODUCTS:
      state = action.databaseFeaturedProducts;
// console.log('Test FETCH_DATABASE_FEATURED_PRODUCTs')
// console.log(action.products)
      return [...state]
    default:
      return [...state];
  }
};
export default DbFeatureProducts;
