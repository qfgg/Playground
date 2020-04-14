import React, { Component } from 'react';
import classNames from 'classnames';


export default class FailureDetail extends Component {
  render() {
    const { detail, jobNm, showFD, onFDClose } = this.props;
    const popClass = classNames({
      fd: true,
      infopop: true,
      'show-pop': showFD,
    });

    return (
      <div className={popClass}>
        <div className="ibox-title heading-clear">
          <h3 className="pull-left">
            {`${jobNm} - failure detail`}
          </h3>
        </div>
        <div className="ibox-content panel-space">{detail}</div>
        <a
          className="btn btn-w-m btn-info btn-xs link-bgcolor"
          onClick={() => onFDClose()}
        >
          Close
        </a>
      </div>
    );
  }
}
