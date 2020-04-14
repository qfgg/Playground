import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ExCompareResult from '../../components/CompareDashboard/External';
import * as actions from '../../actions/External/CompareDashboard';
import Breadcrumbs from '../../components/CompareDashboard/External/Breadcrumbs';


const mapStateToProps = state => ({
  activeData: state.externalCompareReducer.activeData,
  activeInterval: state.externalCompareReducer.activeInterval,
  activeAvg: state.externalCompareReducer.activeAvg,
  activeMethod: state.externalCompareReducer.activeMethod,
  top: state.externalCompareReducer.top,
  fetchResultStatus: state.chartRequestReducer.fetchResultStatus
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class ExCompareDashboard extends Component {
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

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <ExCompareResult
          activeData={activeData}
          activeInterval={activeInterval}
          activeAvg={activeAvg}
          activeMethod={activeMethod}
          top={top}
          fetchResultStatus={fetchResultStatus}
          actions={actions}
        />
      </div>
    );
  }
}
