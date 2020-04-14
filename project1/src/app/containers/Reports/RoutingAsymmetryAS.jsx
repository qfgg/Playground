import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/Reports/RoutingAsymmetryAS';
import RoutingAsyAS from '../../components/Reports/RoutingAsymmetryAS';
import Breadcrumbs from '../../components/Reports/RoutingAsymmetryAS/Breadcrumbs';


const mapStateToProps = state => ({
  list: state.reportsRAASReducer.list,
  sortStatus: state.reportsRAASReducer.sortStatus,
  curPage: state.reportsRAASReducer.curPage,
  totalCnt: state.reportsRAASReducer.totalCnt,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class RoutingAsymmetryAS extends Component {
  render() {
    const { list, sortStatus, curPage, totalCnt, actions } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <RoutingAsyAS
          list={list}
          sortStatus={sortStatus}
          curPage={curPage}
          totalCnt={totalCnt}
          actions={actions}
        />
      </div>
    );
  }
}
