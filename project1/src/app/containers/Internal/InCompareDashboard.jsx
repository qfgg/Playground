import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InCompareResult from '../../components/CompareDashboard/Internal';
import * as actions from '../../actions/Internal/CompareDashboard';
import Breadcrumbs from '../../components/CompareDashboard/Internal/Breadcrumbs';


const mapStateToProps = state => ({
  activeData: state.internalCompareReducer.activeData,
  activeInterval: state.internalCompareReducer.activeInterval,
  activeAvg: state.internalCompareReducer.activeAvg,
  activeMethod: state.internalCompareReducer.activeMethod,
  top: state.internalCompareReducer.top,
  fetchResultStatus: state.chartRequestReducer.fetchResultStatus
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class InCompareDashboard extends Component {
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
        <InCompareResult
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
