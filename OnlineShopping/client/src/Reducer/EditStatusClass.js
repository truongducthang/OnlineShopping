import * as Types from '../constants/ActionTypes'

const EditStatusClassInitialState = {isEditStatusClass:false,isEditStatusClassSIDEBAR:false};
const EditStatusClass = (state = EditStatusClassInitialState, action) => {
    switch (action.type) {
        case Types.CHANGE_EDIT_STATUS_CLASS:
          return {...state, isEditStatusClass:!state.isEditStatusClass}
    case Types.CHANGE_EDIT_STATUS_CLASS_SIDEBAR:
      return {...state,isEditStatusClassSIDEBAR:!state.isEditStatusClassSIDEBAR}
        default:
          return state;
      }
};

export default EditStatusClass
