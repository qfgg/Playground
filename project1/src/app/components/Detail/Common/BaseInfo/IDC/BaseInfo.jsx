import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class BaseInfo extends Component {
  render() {
    const { idcSearchRes } = this.props;
    const { fullName, cntryCd } = idcSearchRes || {};

    return (
      <div className="base-info">
        <div>
          <span className="bold-title">Base info</span>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{fullName || '-'}</td>
                <td>{cntryCd || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

BaseInfo.propTypes = {
  idcSearchRes: PropTypes.object,
};
