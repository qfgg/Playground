import React, { Component } from 'react';
import DataSummary from '../Common/DataSummary';
import SearchBar from '../Common/SearchBar';
import ChartPanel from '../Common/ChartPanel';
import { DATA_TITLE } from '../../../constants/Dashboard/DashboardTypes';
import '../Common/index.less';


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      col: 2,
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
      domain,
      dataType,
      avg,
      top,
      fetchResultStatus,
      showingDomain,
      actions,
    } = this.props;
    const { col } = this.state;
    const sideType = 'external';
    const isFetchingChart = fetchResultStatus.exDashboard ?
      fetchResultStatus.exDashboard.isFetching : false;

    return (
      <div className="dashboard">
        {
          <DataSummary
            title={DATA_TITLE}
            side={sideType}
            lastStatusData={(fetchResultStatus.exLastStatus || {}).chartData}
            maxStatusData={(fetchResultStatus.exMaxStatus || {}).chartData}
            {...actions}
          />
        }
        <SearchBar
          domain={domain}
          dataType={dataType}
          avg={avg}
          top={top}
          col={col}
          setCol={this.setCol}
          side={sideType}
          setSearchQuery={this.setSearchQuery}
          {...actions}
        />
        <ChartPanel
          chartData={(fetchResultStatus.exDashboard || {}).chartData}
          tableData={(fetchResultStatus.exDashboard || {}).tableData}
          col={col}
          detailType={sideType}
          searchQuery={this.state.searchQuery}
          isFetchingChart={isFetchingChart}
          showingDomain={showingDomain}
          domain={domain}
          {...actions}
        />
      </div>
    );
  }
}
