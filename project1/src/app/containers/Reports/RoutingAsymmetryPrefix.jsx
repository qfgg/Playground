import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/Reports/RoutingAsymmetryPrefix';
import RoutingAsyPrfx from '../../components/Reports/RoutingAsymmetryPrefix';
import Breadcrumbs from '../../components/Reports/RoutingAsymmetryPrefix/Breadcrumbs';


const mapStateToProps = state => ({
  list: state.reportsRAPFReducer.list,
  sortStatus: state.reportsRAPFReducer.sortStatus,
  curPage: state.reportsRAPFReducer.curPage,
  totalCnt: state.reportsRAPFReducer.totalCnt,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class RoutingAsymmetryPrefix extends Component {
  render() {
    const { list, sortStatus, curPage, totalCnt, actions } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <RoutingAsyPrfx
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
