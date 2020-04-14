import React, { Component } from 'react';
import SearchBar from '../Common/SearchBar';
import CompareChartPane from '../Common/CompareChartpane';
import '../Common/index.less';
import { IN_DOMAIN_TYPES } from '../../../constants/CompareDashboard/Internal/InCompareTypes';


export default class InCompareResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      col: 1,
      searchQuery: null,
    };
  }

  setCol = (target) => {
    if (this.state.col !== target) {
      this.setState({
        col: target,
      });
    }
  };

  setSearchQuery = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  render() {
    const {
      activeData,
      activeInterval,
      activeAvg,
      activeMethod,
      top,
      fetchResultStatus,
      actions,
    } = this.props;
    const { col } = this.state;
    let isLoading = false;

    IN_DOMAIN_TYPES.map((item) => {
      if (fetchResultStatus[`inCompareDsh${item.value}`]) {
        isLoading = fetchResultStatus[`inCompareDsh${item.value}`].isFetching;
      }
    });

    return (
      <div>
        <SearchBar
          activeData={activeData}
          activeInterval={activeInterval}
          activeAvg={activeAvg}
          activeMethod={activeMethod}
          top={top}
          isLoading={isLoading}
          col={col}
          setCol={this.setCol}
          side="internal"
          domainList={IN_DOMAIN_TYPES}
          setSearchQuery={this.setSearchQuery}
          {...actions}
        />
        <div className="ibox-content compare-content">
          {
            IN_DOMAIN_TYPES.map((item, idx) =>
              (<CompareChartPane
                key={idx}
                domain={item}
                name={item.text}
                activeMethod={activeMethod}
                chartData={(fetchResultStatus[`inCompareDsh${item.value}`] || {}).chartData}
                tableData={(fetchResultStatus[`inCompareDsh${item.value}`] || {}).chartData}
                isLoading={(fetchResultStatus[`inCompareDsh${item.value}`] || {}).isFetching ?
                  fetchResultStatus[`inCompareDsh${item.value}`].isFetching : false}
                col={col}
                searchQuery={this.state.searchQuery}
              />))
          }
        </div>
      </div>
    );
  }
}
