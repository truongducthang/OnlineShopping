import * as Types from '../constants/ActionTypes'
const GetTextSearchFilterInitialState = ''
const GetTextSearchFilter = (state = GetTextSearchFilterInitialState, action) => {
    switch (action.type) {
        case Types.GET_TEXT_SEARCH_FILTER:
            state=action.getTextSearchFilter;
            return state
        default:
            return state
    }
}
export default GetTextSearchFilter;