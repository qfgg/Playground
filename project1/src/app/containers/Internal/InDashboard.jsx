import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard/Internal';
import * as actions from '../../actions/Internal/Dashboard';
import Breadcrumbs from '../../components/Dashboard/Internal/Breadcrumbs';
import { saveTmpFilter } from '../../middlewares/Internal/Dashboard';


const mapStateToProps = state => ({
  domain: state.internalDashboardReducer.domain,
  dataType: state.internalDashboardReducer.dataType,
  fetchResultStatus: state.chartRequestReducer.fetchResultStatus,
  top: state.internalDashboardReducer.top,
  avg: state.internalDashboardReducer.avg,
  showingDomain: state.internalDashboardReducer.showingDomain,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions, saveTmpFilter }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class InDashboard extends Component {
  render() {
    const {
      domain,
      dataType,
      avg,
      top,
      fetchResultStatus,
      showingDomain,
      actions
    } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <Dashboard
          domain={domain}
          dataType={dataType}
          avg={avg}
          top={top}
          fetchResultStatus={fetchResultStatus}
          showingDomain={showingDomain}
          actions={actions}
        />
      </div>
    );
  }
}
