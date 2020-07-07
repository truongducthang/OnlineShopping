import * as Types from '../constants/ActionTypes';
import * as Message from '../constants/Message';
const MessageInitialState = Message.MSG_WELCOME;
const Messages = (state = MessageInitialState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            return action.message
        default:
            return state
    }
}
export default Messages;