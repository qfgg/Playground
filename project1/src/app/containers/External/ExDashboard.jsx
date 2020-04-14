import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard/External';
import * as actions from '../../actions/External/Dashboard';
import Breadcrumbs from '../../components/Dashboard/External/Breadcrumbs';
import { saveTmpFilter } from '../../middlewares/External/Dashboard';


const mapStateToProps = state => ({
  domain: state.externalDashboardReducer.domain,
  dataType: state.externalDashboardReducer.dataType,
  top: state.externalDashboardReducer.top,
  fetchResultStatus: state.chartRequestReducer.fetchResultStatus,
  avg: state.externalDashboardReducer.avg,
  showingDomain: state.externalDashboardReducer.showingDomain,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    saveTmpFilter
  }, dispatch),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class ExDashboard extends Component {
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
