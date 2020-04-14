import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/Reports/UV';
import UVReport from '../../components/Reports/UV';
import Breadcrumbs from '../../components/Reports/UV/Breadcrumbs';


const mapStateToProps = state => ({
  list: state.reportsUVReducer.list,
  sortStatus: state.reportsUVReducer.sortStatus,
  curPage: state.reportsUVReducer.curPage,
  totalCnt: state.reportsUVReducer.totalCnt,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class UV extends Component {
  render() {
    const { list, sortStatus, curPage, totalCnt, actions } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <UVReport
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
