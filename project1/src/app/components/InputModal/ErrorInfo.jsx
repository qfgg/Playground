import React, { Component } from 'react';


export default class ErrorInfo extends Component {
  render() {
    const { msg } = this.props;
    return (
      <div className="err-msg">{msg}</div>
    );
  }
}
