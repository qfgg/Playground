import React, { Component } from 'react';


export default class NoticeInfo extends Component {
  render() {
    return (
      <div className="notice-msg">
        <div>
          The chart can not be retrieved at once, so your query has been saved as a job.
          Would you like to name the job?
        </div>
        <br />
      </div>
    );
  }
}
