import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import JSONToCSVConvertor from '../../../../lib/JSONToCSV';
import { flowDataFormatter } from '../../../helper';

export default class RelationHeadBar extends Component {
  handleSetView = (evt, item) => {
    evt.preventDefault();
    const { setIndView } = this.props;
    setIndView(item);
  };

  handleDownloadXls = (indData, title) => {
    if (indData) {
      const arr = [];
      for (const key in indData) {
        const dataIn = indData[key].in;
        const dataOut = indData[key].out;
        const dataTotal = indData[key].total;
        arr.push({
          Name: dataIn ? dataIn.chartTitle : dataOut.chartTitle,
          In: dataIn ? flowDataFormatter(dataIn.stat.v1.last) : '',
          Out: dataOut ? flowDataFormatter(dataOut.stat.v1.last) : '',
          Total: dataOut ? flowDataFormatter(dataTotal.stat.v1.last) : '',
        });
      }
      JSONToCSVConvertor(arr, title, true);
    }
  };

  handleDownloadLatency = () => {
    const { latencyList, detailType, field } = this.props;
    if (latencyList && detailType && latencyList[detailType]) {
      const list = latencyList[detailType].res;
      const arr = [];
      if (list && Array.isArray(list) && list.length > 0) {
        list.forEach((item) => {
          const maxLen = item.latency.length;
          for (let index = 0; index < maxLen; index++) {
            let row = {};
            field.forEach((fd) => {
              if (fd.isDownloadCol) {
                if (fd.isMult) {
                  row = { ...row, [fd.colName || 'Unnamed']: item[fd.name][index] || '' };
                } else {
                  row = { ...row, [fd.colName || 'Unnamed']: item[fd.name].split()[index] || '' };
                }
              }
            });
            arr.push(row);
          }
        });
      }
      JSONToCSVConvertor(arr, `${detailType}_Latency`, true);
    }
  };

  render() {
    const { indView, hideChart, toggleHideChart, indData, detailType, relationType } = this.props;

    return (
      <div className="relation-title ibox-title">
        <div className="btn-group select-view">
          {
            relationType !== 'Country' && relationType !== 'ESM' &&
            relationType !== 'Latency' ?
            '' :
            <button
              className={classNames('btn', 'btn-xs', 'btn-white', {
                active: indView === 'Summary',
              })}
              type="button"
              onClick={evt => this.handleSetView(evt, 'Summary')}
            >
              {
                relationType === 'Country' || relationType === 'Latency' ?
                'Map' : 'Pie'
              }
            </button>
          }
          <button
            className={classNames('btn', 'btn-xs', 'btn-white', {
              active: indView === 'Individual',
            })}
            type="button"
            onClick={evt => this.handleSetView(evt, 'Individual')}
          >
            {
              relationType === 'Country' || relationType === 'ESM' ||
              relationType === 'Latency' ?
              'Table' : 'Individual'
            }
          </button>
        </div>
        {
          relationType === 'Latency' ? (
            <div className="btn-right">
              <button
                className="btn btn-xs btn-white"
                type="button"
                onClick={() => this.handleDownloadLatency()}
              >
                Download XLSX
              </button>
            </div>
          ) : indView === 'Individual' ? (
            <div className="btn-right">
              <button
                className="btn btn-xs btn-white"
                type="button"
                onClick={() => this.handleDownloadXls(indData, `${detailType}_${relationType}`)}
              >
                Download XLSX
              </button>
              <button
                className="btn btn-xs btn-white"
                onClick={toggleHideChart}
              >
                {hideChart ? 'Show Chart' : 'Hide Chart'}
              </button>
            </div>
          ) : ''
        }
      </div>
    );
  }
}

RelationHeadBar.propTypes = {
  setIndView: PropTypes.func,
  indView: PropTypes.string,
  hideChart: PropTypes.bool,
  toggleHideChart: PropTypes.func,
  indData: PropTypes.object,
  detailType: PropTypes.string,
  relationType: PropTypes.string,
};
