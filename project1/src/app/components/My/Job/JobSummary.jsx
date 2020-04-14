import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class JobSummary extends Component {
  render() {
    const { jobNm, startStr, endStr, jobItem, redirectToExplorer } = this.props;

    return (
      <table className="table table-bordered job-sum">
        <thead>
          <tr>
            <th>Name</th>
            <th>Start</th>
            <th>End</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{jobNm || '-'}</td>
            <td><div>{startStr}</div></td>
            <td><div>{endStr}</div></td>
            <td>
              {
                jobItem.jobStas === 'completed' ?
                  <a onClick={redirectToExplorer} className="link-color">View</a> :
                  '-'
              }
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

JobSummary.propTypes = {
  jobNm: PropTypes.string,
  startStr: PropTypes.string,
  endStr: PropTypes.string,
};
