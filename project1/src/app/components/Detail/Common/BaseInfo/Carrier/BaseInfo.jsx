import React, { Component } from 'react';
import { formatNum } from '../../../../../helper';


export default class BaseInfo extends Component {
  render() {
    const { carrSearchRes } = this.props;
    const {
      ispNm,
      asNo,
      intfCnt,
      pyscBw,
      cntrctBw
    } = carrSearchRes || {};
    const iC = formatNum(intfCnt);
    const pB = formatNum(pyscBw);
    const cB = formatNum(cntrctBw);

    return (
      <div className="base-info">
        <div>
          <span className="bold-title">Base info</span>
          <table className="table table-bordered lg">
            <thead>
              <tr>
                <th>Name</th>
                <th>AS</th>
                <th># of Lines</th>
                <th>Total Bandwidth</th>
                <th>Reserved Bandwidth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ispNm || '-'}</td>
                <td>{asNo || '-'}</td>
                <td>{iC || '-'}</td>
                <td>{pB || '-'}</td>
                <td>{cB || '-'}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-bordered sm">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{ispNm || '-'}</td>
              </tr>
              <tr>
                <th>AS</th>
                <td>{asNo || '-'}</td>
              </tr>
              <tr>
                <th># of Lines</th>
                <td>{iC || '-'}</td>
              </tr>
              <tr>
                <th>Total Bandwidth</th>
                <td>{pB || '-'}</td>
              </tr>
              <tr>
                <th>Reserved Bandwidth</th>
                <td>{cB || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
