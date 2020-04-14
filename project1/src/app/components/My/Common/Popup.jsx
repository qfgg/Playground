import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import JobSummary from '../Job/JobSummary';
import Detail from './Detail';


export default class Popup extends Component {
  render() {
    const { type, item, filterset, startStr, endStr, redirectToExplorer } = this.props;
    let nm = '';
    let tp = '';
    if (type === 'job') {
      nm = item.jobNm || 'Unnamed';
      tp = item.jobTp;
    } else {
      nm = item.fltrsetNm;
      tp = item.fltrsetTp;
    }

    const popClass = classNames({
      infopop: true,
      'show-pop': this.props.showPop,
    });

    return (
      <div className={popClass}>
        <div className="ibox-title heading-clear">
          <h3 className="pull-left">
            {`${nm} (${(tp)[0].toUpperCase() + tp.slice(1)})`}
          </h3>
        </div>
        <div className="ibox-content panel-space">
          {
            type === 'job' &&
              <JobSummary
                jobNm={nm}
                startStr={startStr}
                endStr={endStr}
                jobItem={item}
                redirectToExplorer={redirectToExplorer}
              />
          }
          <Detail item={item} filterset={filterset} />
        </div>
        <a
          className="btn btn-w-m btn-info btn-xs link-bgcolor"
          onClick={() => this.props.onPopClose()}
        >
          Close
        </a>
        <a
          className="btn btn-w-m btn-info btn-xs link-bgcolor toExplorer"
          onClick={() => this.props.filToExplorer()}
        >
          toExplorer
        </a>
      </div>
    );
  }
}

Popup.propTypes = {
  type: PropTypes.string,
  item: PropTypes.object,
  filterset: PropTypes.object,
  startStr: PropTypes.string,
  endStr: PropTypes.string,
  showPop: PropTypes.bool,
  onPopClose: PropTypes.func,
};
