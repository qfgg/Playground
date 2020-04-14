import React, { Component } from 'react';
import classNames from 'classnames';
import blacklist from 'blacklist';


export default class Radio extends Component {
  handleSelect = (evt) => {
    const { title, invisibleTitle, onCheck, onChange } = this.props;
    onCheck({ type: title || invisibleTitle, item: evt.target.value });
    if (onChange) {
      onChange(evt);
    }
  }

  render() {
    const { text, id, className } = this.props;
    const boxClassName = classNames('radio', className);
    const props = blacklist(this.props, 'text', 'className', 'onCheck',
      'onChange', 'invisibleTitle');

    return (
      <div className={boxClassName}>
        <input
          type="radio"
          {...props}
          onChange={this.handleSelect}
        />
        <label htmlFor={id}>{text}</label>
      </div>
    );
  }
}
