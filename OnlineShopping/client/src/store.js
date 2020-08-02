import { createStore, combineReducers, applyMiddleware } from 'redux';
import EditStatusClass from './Reducer/EditStatusClass';
import DbFeatureProducts from './Reducer/DbFeatureProducts';
import DbAllProducts from './Reducer/DbAllProducts';
import GetPriceFilter from './Reducer/GetPriceFilter';
import GetDataFilter from './Reducer/GetDataFilter';
import GetTextSearchFilter from './Reducer/GetTextSearchFilter';
import Cart from './Reducer/Cart.js';
import Message from './Reducer/Message';
import thunk from 'redux-thunk';

const allReducer = combineReducers({
	EditStatusClass: EditStatusClass,
	DbFeatureProducts: DbFeatureProducts,
	DbAllProducts: DbAllProducts,
	GetPriceFilter: GetPriceFilter,
	GetDataFilter: GetDataFilter,
	GetTextSearchFilter: GetTextSearchFilter,
	Cart: Cart,
	Message: Message,
});

// store quan li  Reducer  (  quan li  state &  Action)
var store1 = createStore(allReducer, applyMiddleware(thunk));
console.log(store1.getState());
// store1.subscribe(() => {
//   console.log('STATE thay doi : ' + JSON.stringify(store1.getState()));
// });

export default store1;
