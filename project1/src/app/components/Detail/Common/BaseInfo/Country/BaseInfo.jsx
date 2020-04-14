import React, { Component } from 'react';


export default class BaseInfo extends Component {
  render() {
    const { cntSearchRes } = this.props;
    const { cntryCd, cntryNm, timeZone } = cntSearchRes || {};

    return (
      <div className="base-info">
        <div>
          <span className="bold-title">Base info</span>
          <table className="table table-bordered lg">
            <thead>
              <tr>
                <th>Country Code</th>
                <th>Name</th>
                <th>Timezone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{cntryCd || '-'}</td>
                <td>{cntryNm || '-'}</td>
                <td>{timeZone || '-'}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-bordered sm">
            <tbody>
              <tr>
                <th>Country Code</th>
                <td>{cntryCd || '-'}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{cntryNm || '-'}</td>
              </tr>
              <tr>
                <th>Timezone</th>
                <td>{timeZone || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
