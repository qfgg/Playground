import React, { Component } from 'react';


export default class BaseInfo extends Component {
  render() {
    const { esmSearchRes } = this.props;
    const { esmCd, esmNm, fullEsmNm } = esmSearchRes || {};

    return (
      <div className="base-info">
        <div>
          <span className="bold-title">Base info</span>
          <table className="table table-bordered lg">
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Full Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{esmCd || '-'}</td>
                <td>{esmNm || '-'}</td>
                <td>{fullEsmNm || '-'}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-bordered sm">
            <tbody>
              <tr>
                <th>Code</th>
                <td>{esmCd || '-'}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{esmNm || '-'}</td>
              </tr>
              <tr>
                <th>Full Name</th>
                <td>{fullEsmNm || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
