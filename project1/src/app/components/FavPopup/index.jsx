import React, { Component } from 'react';
import Trigger from './Trigger';


export default class FavPopup extends Component {
  render() {
    return (
      <Trigger {...this.props}>{this.props.children}</Trigger>
    );
  }
}
