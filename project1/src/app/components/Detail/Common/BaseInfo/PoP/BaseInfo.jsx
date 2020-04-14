import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class BaseInfo extends Component {
  render() {
    const { popSearchRes } = this.props;
    const { popNm, cmnty, prfxs, desc } = popSearchRes || {};

    return (
      <div className="base-info">
        <div>
          <span className="bold-title">Base info</span>
          <table className="table table-bordered lg">
            <thead>
              <tr>
                <th>Name</th>
                <th>Community</th>
                <th>Prefixes</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{popNm || '-'}</td>
                <td>{cmnty || '-'}</td>
                <td>{prfxs || '-'}</td>
                <td>{desc || '-'}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-bordered sm">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{popNm || '-'}</td>
              </tr>
              <tr>
                <th>Community</th>
                <td>{cmnty || '-'}</td>
              </tr>
              <tr>
                <th>Prefixes</th>
                <td>{prfxs || '-'}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{desc || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

BaseInfo.propTypes = {
  popSearchRes: PropTypes.object,
};
