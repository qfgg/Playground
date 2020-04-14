import React, { Component } from 'react';
import SearchBar from '../Common/SearchBar';
import CompareChartPane from '../Common/CompareChartpane';
import '../Common/index.less';
// import chartUtils from '../../../../lib/chartUtils';
import { EX_DOMAIN_TYPES } from '../../../constants/CompareDashboard/External/ExCompareTypes';


export default class ExCompareResult extends Component {
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

    EX_DOMAIN_TYPES.map((item) => {
      if (fetchResultStatus[`exCompareDsh${item.value}`]) {
        isLoading = fetchResultStatus[`exCompareDsh${item.value}`].isFetching;
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
          side="external"
          domainList={EX_DOMAIN_TYPES}
          setSearchQuery={this.setSearchQuery}
          {...actions}
        />
        <div className="ibox-content compare-content">
          {
            EX_DOMAIN_TYPES.map((item, idx) =>
              (<CompareChartPane
                key={idx}
                domain={item}
                name={item.text}
                activeMethod={activeMethod}
                chartData={(fetchResultStatus[`exCompareDsh${item.value}`] || {}).chartData}
                tableData={(fetchResultStatus[`exCompareDsh${item.value}`] || {}).tableData}
                isLoading={(fetchResultStatus[`exCompareDsh${item.value}`] || {}).isFetching ?
                  fetchResultStatus[`exCompareDsh${item.value}`].isFetching : false}
                col={col}
                searchQuery={this.state.searchQuery}
              />))
          }
        </div>
      </div>
    );
  }
}
