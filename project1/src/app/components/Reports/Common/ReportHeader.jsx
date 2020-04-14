import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';


export default class ReportHeader extends Component {
  render() {
    const { headerList, activePeriod, setActivePeriod } = this.props;

    return (
      <div className="header">
        <ul className="category-list">
          {headerList.map((item, idx) =>
            (<li key={idx}>
              <a
                className={classNames({ active: item === activePeriod })}
                onClick={() => setActivePeriod(item)}
              >
                <i className="fa fa-circle" />{item}
              </a>
            </li>))}
        </ul>
      </div>
    );
  }
}
