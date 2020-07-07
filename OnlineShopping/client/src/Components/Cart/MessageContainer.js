import React, { Component } from 'react';
import Message from './Message';
class MessageContainer extends Component {
    render() {
        console.log(this.props.Message)
        return (
            <Message></Message>
        );
    }
}

export default MessageContainer
