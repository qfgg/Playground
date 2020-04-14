import React, { Component } from 'react';
import classNames from 'classnames';


export default class Checkbox extends Component {
  render() {
    const { className, checked, label, onCheck, disabled } = this.props;
    const boxClassName = classNames('checkbox-custom', className);

    return (
      <label className={boxClassName}>
        <input
          type="checkbox"
          checked={!!checked}
          onChange={onCheck}
          disabled={disabled}
        />
        <i>
          {label || ''}
        </i>
      </label>
    );
  }
}
