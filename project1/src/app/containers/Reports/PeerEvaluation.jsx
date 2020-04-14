import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/Reports/PeerEval';
import PeerEval from '../../components/Reports/PeerEvaluation';
import Breadcrumbs from '../../components/Reports/PeerEvaluation/Breadcrumbs';


const mapStateToProps = state => ({
  list: state.reportsPeerReducer.list,
  sortStatus: state.reportsPeerReducer.sortStatus,
  curPage: state.reportsPeerReducer.curPage,
  totalCnt: state.reportsPeerReducer.totalCnt,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class PeerEvaluation extends Component {
  render() {
    const { list, sortStatus, curPage, totalCnt, actions } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <PeerEval
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
