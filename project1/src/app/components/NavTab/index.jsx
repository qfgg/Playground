import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';


export default class NavTab extends Component {
  render() {
    const { tablist, cntlist, selectedItem, handleClick, noCnt } = this.props;

    return noCnt ? (
      <ul className="nav nav-tabs tab-custom">
        {
          tablist.map((item, idx) =>
            (<li key={idx} className={classNames({ active: item === selectedItem })}>
              <a onClick={evt => handleClick(evt, item)}>{item}</a>
            </li>))
        }
      </ul>
    ) : (
      <ul className="nav nav-tabs tab-custom">
        {
          tablist.map((item, idx) =>
            (<li key={idx} className={classNames({ active: item === selectedItem })}>
              <a onClick={evt => handleClick(evt, item)}>{`${item} (${cntlist[idx]})`}</a>
            </li>))
        }
      </ul>
    );
  }
}
