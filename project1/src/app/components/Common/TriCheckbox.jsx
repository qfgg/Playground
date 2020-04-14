import React, { Component } from 'react';
import classNames from 'classnames';


export default class TriCheckbox extends Component {
  render() {
    const { className, checked, label, onCheck, disabled } = this.props;
    const boxClassName = classNames('tri-checkbox', className, {
      'full-check': checked === 'Y',
      'partly-check': checked === 'P'
    });

    return (
      <label className={boxClassName}>
        <input
          type="checkbox"
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
