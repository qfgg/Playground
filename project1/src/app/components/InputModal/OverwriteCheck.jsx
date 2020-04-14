import React, { Component } from 'react';
import Checkbox from '../Common/Checkbox';


export default class OverwriteCheck extends Component {
  render() {
    const { check, toggleCheck, msg } = this.props;
    return (
      <div>
        <Checkbox
          className="checkbox-inline pull-left"
          checked={check}
          onCheck={toggleCheck}
        />
        <div className="overwrite-msg pull-left">{msg}</div>
      </div>
    );
  }
}
