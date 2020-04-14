import React, { Component } from 'react';
import ChartGroup from './ChartGroup';


export default class ChartPanel extends Component {
  render() {
    const {
      chartData,
      tableData,
      col,
      searchQuery,
      detailType,
      isFetchingChart,
      showingDomain,
      domain,
      saveTmpFilter
    } = this.props;

    return (
      <div className="chart-panel">
        <ChartGroup
          chartData={chartData}
          tableData={tableData}
          col={col}
          searchQuery={searchQuery}
          detailType={detailType}
          showingDomain={showingDomain}
          isFetchingChart={isFetchingChart}
          domain={domain}
          saveTmpFilter={saveTmpFilter}
        />
      </div>
    );
  }
}
