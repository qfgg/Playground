import React, { Component } from 'react';
import { formatNum } from '../../../../../helper';


export default class BaseInfo extends Component {
  render() {
    const { lineSearchRes } = this.props;
    const {
      nat1Nm,
      nat2Nm,
      crctTpNm,
      pyscBw,
      cntrctBw,
      ispNm,
      wrkPath
    } = lineSearchRes || {};
    const pB = formatNum(pyscBw);
    const cB = formatNum(cntrctBw);

    return (
      <div className="base-info">
        <div>
          <span className="bold-title">Base info</span>
          <table className="table table-bordered lg">
            <thead>
              <tr>
                <th>A</th>
                <th>B</th>
                <th>Type</th>
                <th>Total Bandwidth</th>
                <th>Reserved Bandwidth</th>
                <th>Carrier</th>
                <th>Path</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{nat1Nm || '-'}</td>
                <td>{nat2Nm || '-'}</td>
                <td>{crctTpNm || '-'}</td>
                <td>{pB || '-'}</td>
                <td>{cB || '-'}</td>
                <td>{ispNm || '-'}</td>
                <td>{wrkPath || '-'}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-bordered sm">
            <tbody>
              <tr>
                <th>A</th>
                <td>{nat1Nm || '-'}</td>
              </tr>
              <tr>
                <th>B</th>
                <td>{nat2Nm || '-'}</td>
              </tr>
              <tr>
                <th>Type</th>
                <td>{crctTpNm || '-'}</td>
              </tr>
              <tr>
                <th>Total Bandwidth</th>
                <td>{pB || '-'}</td>
              </tr>
              <tr>
                <th>Reserved Bandwidth</th>
                <td>{cB || '-'}</td>
              </tr>
              <tr>
                <th>Carrier</th>
                <td>{ispNm || '-'}</td>
              </tr>
              <tr>
                <th>Path</th>
                <td>{wrkPath || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
