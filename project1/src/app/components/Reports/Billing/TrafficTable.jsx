import React, { Component } from 'react';
import { flowDataFormatter } from '../../../helper';


class TrafficTableRow extends Component {
  render() {
    const { no, rowData } = this.props;

    return (
      <tr>
        <td className="text-center">{no + 1}</td>
        <td className="text-left">{rowData.month}</td>
        <td className="text-left">{rowData.pop}</td>
        <td className="text-left">{rowData.esm}</td>
        <td className="text-right">{flowDataFormatter(rowData.avgMaxBps)}</td>
        <td />
      </tr>
    );
  }
}

export default class TrafficTable extends Component {
  render() {
    const { billing } = this.props;
    const table = billing.res && billing.res.table ? billing.res.table : [];

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="text-center no-width">No</th>
            <th className="text-left month-width">Month</th>
            <th className="text-left pop-width">PoP</th>
            <th className="text-left esm-width">ESM</th>
            <th className="text-right">Traffic</th>
            <th className="right-space" />
          </tr>
        </thead>
        <tbody>
          {
            (table || [] : []).map((item, idx) =>
              <TrafficTableRow key={idx} no={idx} rowData={item} />)
          }
        </tbody>
      </table>
    );
  }
}
