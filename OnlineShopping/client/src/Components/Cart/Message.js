import React, { Component } from 'react';
import { connect } from 'react-redux';
class Message extends Component {
  render() {
    let {Message} = this.props;
    return (
      <div>
        <h1> {Message}</h1>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
      Message: state.Message
  }
}
export default connect(mapStateToProps, null)(Message);
