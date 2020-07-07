import * as Types from '../constants/ActionTypes';

const GetPriceFilterInitialState = [0, 2000];
const GetPriceFilter = (state = GetPriceFilterInitialState, action) => {
	switch (action.type) {
		case Types.GET_PRICE_FILTER:
			state = action.payload;
			return [...state];

		default:
			return state;
	}
};

export default GetPriceFilter;
