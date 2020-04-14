import React, { Component } from 'react';
import { formatNum } from '../../helper';
import './common.less';

export default class SetEntries extends Component {
  handleSelectChange = (evt) => {
    const { setEntriesPerPage } = this.props;
    if (setEntriesPerPage) {
      setEntriesPerPage(parseInt(evt.target.value, 10));
    }
  };

  render() {
    const { totalEntries = 0, curPage = 1, size } = this.props;

    return (
      <div className="setEntries">
        <div className="setEnt pull-right">
          <span>Show</span>
          <select onChange={this.handleSelectChange} value={size}>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
          <span>entries</span>
        </div>
        <div className="showEnt pull-left">
          <span>Showing</span>
          <strong>{ (curPage - 1) * size + 1 }</strong>
          <span>to</span>
          <strong>{ curPage * size > totalEntries
            ? formatNum(totalEntries || 0) : curPage * size }</strong>
          <span>of</span>
          <strong>{ formatNum(totalEntries || 0) }</strong>
          <span>entries</span>
        </div>
      </div>
    );
  }
}
