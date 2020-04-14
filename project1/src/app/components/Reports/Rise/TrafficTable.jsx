import React, { Component } from 'react';
import { TABLE_ROW } from '../../../constants/Reports/Rise/RiseTypes';
import LinkCellRenderer from '../Common/LinkCellRenderer';
import CommonChart from '../../Rechart/Common/CommonChart';

class TrafficTableRow extends Component {
  render() {
    const { rowData } = this.props;

    const data = [
      { traffic: 2400, name: '05:20' },
      { traffic: 1398, name: '05:21' },
      { traffic: 9800, name: '05:22' },
      { traffic: 3908, name: '05:23' },
      { traffic: 4800, name: '05:24' },
      { traffic: 3800, name: '05:25' },
      { traffic: 4300, name: '05:26' },
      { traffic: 2400, name: '05:27' },
      { traffic: 1398, name: '05:28' },
      { traffic: 9800, name: '05:29' },
      { traffic: 3908, name: '05:30' },
      { traffic: 4800, name: '05:31' },
      { traffic: 3800, name: '05:32' },
      { traffic: 4300, name: '05:33' },
      { traffic: 2400, name: '05:34' },
      { traffic: 1398, name: '05:35' },
      { traffic: 9800, name: '05:36' },
      { traffic: 3908, name: '05:37' },
      { traffic: 4800, name: '05:38' },
      { traffic: 3800, name: '05:39' },
      { traffic: 4300, name: '05:40' },
    ];

    return (
      <tr>
        <td className="text-center">{rowData.Time}</td>
        <td className="text-left">{rowData.Type}</td>
        <td className="text-left">
          <LinkCellRenderer keyName={rowData.Type.toLocaleLowerCase()} value={rowData.ID} />
        </td>
        <td className="text-left">{rowData.Name}</td>
        <td className="text-center">
          <CommonChart type="tinyline" data={data} dataKey="traffic" chartHeight={20} />
        </td>
      </tr>
    );
  }
}


export default class TrafficTable extends Component {
  render() {
    return (
      <table className="table table-content table-hover margin bottom">
        <thead>
          <tr>
            <th className="text-center time-width">Time</th>
            <th className="text-left type-width">Type</th>
            <th className="text-left id-width">ID</th>
            <th className="text-left name-width">Name</th>
            <th className="text-center traffic-width">Traffic</th>
          </tr>
        </thead>
        <tbody>
          {
            TABLE_ROW.map((item, idx) => <TrafficTableRow key={idx} rowData={item} />)
          }
        </tbody>
      </table>
    );
  }
}
