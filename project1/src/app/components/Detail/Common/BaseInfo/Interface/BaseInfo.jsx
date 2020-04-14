import React, { Component } from 'react';
import { formatNum } from '../../../../../helper';


export default class BaseInfo extends Component {
  openWindowIfNm = (routerNo, intfNo) => {
    window.open(`http://nms2.navercorp.com/monitor/main?monitorType=Interface&monitorId=${routerNo}&monitorSubId=${intfNo}`);
  };

  render() {
    const { ifSearchRes } = this.props;
    const {
      intfNm,
      idxNum,
      alias,
      bw,
      desc,
      hostNm,
      ipAddr,
      ntwkFuncCdNm,
      routerNo,
      intfNo
    } = ifSearchRes || {};
    const bandwidth = formatNum(bw);

    return (
      <div className="base-info">
        <div>
          <span className="bold-title">Base info</span>
          <table className="table table-bordered lg">
            <thead>
              <tr>
                <th>Interface name</th>
                <th>Index</th>
                <th>Alias</th>
                <th>Bandwidth</th>
                <th>Description</th>
                <th>Router name</th>
                <th>Router IP</th>
                <th>Router type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a onClick={this.openWindowIfNm.bind(null, routerNo, intfNo)}>
                    {intfNm || '-'}
                  </a>
                </td>
                <td>{idxNum || '-'}</td>
                <td>{alias || '-'}</td>
                <td>{bandwidth || '-'}</td>
                <td>{desc || '-'}</td>
                <td>{hostNm || '-'}</td>
                <td>{ipAddr || '-'}</td>
                <td>{ntwkFuncCdNm || '-'}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-bordered sm">
            <tbody>
              <tr>
                <th>Interface name</th>
                <td>
                  <a onClick={this.openWindowIfNm.bind(null, routerNo, intfNo)}>
                    {intfNm || '-'}
                  </a>
                </td>
              </tr>
              <tr>
                <th>Index</th>
                <td>{idxNum || '-'}</td>
              </tr>
              <tr>
                <th>Alias</th>
                <td>{alias || '-'}</td>
              </tr>
              <tr>
                <th>Bandwidth</th>
                <td>{bandwidth || '-'}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{desc || '-'}</td>
              </tr>
              <tr>
                <th>Router name</th>
                <td>{hostNm || '-'}</td>
              </tr>
              <tr>
                <th>Router IP</th>
                <td>{ipAddr || '-'}</td>
              </tr>
              <tr>
                <th>Router type</th>
                <td>{ntwkFuncCdNm || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
