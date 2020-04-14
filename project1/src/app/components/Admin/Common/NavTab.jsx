import React, { Component } from 'react';
import classNames from 'classnames';


export default class NavTab extends Component {
  render() {
    const { tablist, activeItem, handleClick, classes } = this.props;

    return (
      <ul className={`nav nav-tabs tab-custom ${classes}`}>
        {
          (tablist || []).map((item, idx) =>
            (<li key={idx} className={classNames({ active: item.value === activeItem.value })}>
              <a onClick={handleClick.bind(this, item)}>{item.text}</a>
            </li>))
        }
      </ul>
    );
  }
}
