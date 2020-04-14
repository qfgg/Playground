import React, { Component } from 'react';
import './index.less';
import TrafficTable from './TrafficTable';


export default class MisconfReport extends Component {
  componentDidMount() {
    const { initRouter } = this.props;
    initRouter();
  }

  render() {
    const { routerList, initRouter, ifList, fetchResultStatus } = this.props;

    return (
      <div className="misconf">
        <div className="btn-right btn-margin-bottom">
          {
          // <button
          //   className="btn btn-xs btn-white"
          //   type="button"
          //   onClick={() => {}}
          // >
          //   Download XLSX
          // </button>
          }
        </div>
        <TrafficTable
          routerList={routerList}
          initRouter={initRouter}
          ifList={ifList}
          fetchResultStatus={fetchResultStatus}
        />
      </div>
    );
  }
}
