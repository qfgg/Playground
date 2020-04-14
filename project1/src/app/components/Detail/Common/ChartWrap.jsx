import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartGroup from './ChartGroup';


export default class ChartWrap extends Component {
  render() {
    const {
      detailType,
      relationType,
      chartData,
      chartType,
      isFetchingChart,
      searchQuery,
      tableData,
      saveTmpFilter,
      searchNm
    } = this.props;

    return (
      <div className="tab-content">
        <div className="tab-pane active">
          <div className="panel-body no-top-border">
            <div className="detail-wrap">
              <ChartGroup
                data={chartData}
                tableData={tableData}
                detailType={detailType}
                relationType={relationType}
                chartType={chartType}
                isFetchingChart={isFetchingChart}
                searchQuery={searchQuery}
                saveTmpFilter={saveTmpFilter}
                searchNm={searchNm}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ChartWrap.propTypes = {
  detailType: PropTypes.string,
  relationType: PropTypes.string,
  chartData: PropTypes.object,
  isFetchingChart: PropTypes.bool,
};
