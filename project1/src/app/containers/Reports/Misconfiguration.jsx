import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MisconfReport from '../../components/Reports/Misconfiguration';
import * as actions from '../../actions/Reports/Rise';
import Breadcrumbs from '../../components/Reports/Misconfiguration/Breadcrumbs';
import { initRouter } from '../../middlewares/Reports/Misconfig';


const mapStateToProps = state => ({
  routerList: state.reportsMisconfigReducer.routerList,
  ifList: state.reportsMisconfigReducer.ifList,
  fetchResultStatus: state.chartRequestReducer.fetchResultStatus
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions, initRouter }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Misconfiguration extends Component {
  render() {
    const { actions, routerList, ifList, fetchResultStatus } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <MisconfReport
          routerList={routerList}
          ifList={ifList}
          fetchResultStatus={fetchResultStatus}
          {...actions}
        />
      </div>
    );
  }
}
