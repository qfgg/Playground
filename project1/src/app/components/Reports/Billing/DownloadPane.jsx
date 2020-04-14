import React, { Component } from 'react';
import Checkbox from '../../Common/Checkbox';
import { flowDataFormatter } from '../../../helper';
import JSONToCSVConvertor from '../../../../lib/JSONToCSV';


export default class DownloadPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: {}
    };
  }

  handleDownload = (data) => {
    if (!data) {
      return;
    }
    const d = [];
    const { checked } = this.state;
    const selected = Object.keys(checked).map(item => item.split('/').join('-'));
    const filterData = data.filter(item => selected.indexOf(item.month) !== -1);

    filterData.forEach((item, idx) => {
      d.push({
        No: idx + 1,
        Month: item.month,
        PoP: item.pop,
        ESM: item.esm,
        Traffic: flowDataFormatter(item.avgMaxBps),
      });
    });
    JSONToCSVConvertor(d, 'billing', true);
  };

  handleCheck = (item) => {
    this.setState({
      checked: {
        ...this.state.checked,
        [item]: !this.state.checked[item]
      }
    });
  };

  getItem = (table) => {
    if (!table) {
      return [];
    }
    const rec = {};
    for (let i = 0, len = table.length; i < len; i++) {
      if (!rec[table[i].month]) {
        rec[table[i].month] = true;
      }
    }
    return Object.keys(rec).map(item => item.split('-').join('/'));
  };

  render() {
    const { billing } = this.props;
    const { checked } = this.state;
    const checkItem = this.getItem(billing.res && billing.res.table ?
      billing.res.table : null);

    return (
      <div className="download">
        <ul>
          {
            (checkItem || []).map((item, idx) =>
              (<li key={idx}>
                <Checkbox
                  label={item}
                  checked={checked[item]}
                  onCheck={this.handleCheck.bind(this, item)}
                />
              </li>))
          }
        </ul>
        <div className="btn-download">
          <button
            className="btn btn-xs"
            onClick={this.handleDownload.bind(this,
              billing.res && billing.res.table ? billing.res.table : null)}
          >
            Download
          </button>
        </div>
      </div>
    );
  }
}
