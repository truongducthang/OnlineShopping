import * as Types from '../constants/ActionTypes'
const GetDataFilterInitialState = []
const GetDataFilter = (state = GetDataFilterInitialState, action) => {
    switch (action.type) {
        case Types.GET_DATA_FILTER:
            state = action.getDataFilter;
            return [...state]
        default:
            return state
    }
}
export default GetDataFilter;