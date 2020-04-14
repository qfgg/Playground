import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/Reports/Top10';
import Top10Report from '../../components/Reports/Top10';
import Breadcrumbs from '../../components/Reports/Top10/Breadcrumbs';


const mapStateToProps = state => ({
  list: state.reportsTop10Reducer.list,
  sortStatus: state.reportsTop10Reducer.sortStatus,
  curPage: state.reportsTop10Reducer.curPage,
  totalCnt: state.reportsTop10Reducer.totalCnt,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Top10 extends Component {
  render() {
    const { list, sortStatus, curPage, totalCnt, actions } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <Top10Report
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
