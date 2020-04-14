import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/Admin/RouterExl';
import RouterExl from '../../components/Admin/RouterExl';
import Breadcrumbs from '../../components/Admin/RouterExl/Breadcrumbs';
import { initRouterExl, confirmDel, confirmUpd, createItem } from '../../middlewares/Admin/RouterExcluded';


const mapStateToProps = state => ({
  sortStatus: state.adminRouterExcluded.sortStatus,
  isEditing: state.adminRouterExcluded.isEditing,
  resList: state.adminRouterExcluded.resList,
  curPage: state.adminRouterExcluded.curPage,
  totalCnt: state.adminRouterExcluded.totalCnt,
  firstNav: state.myAppReducer.firstNav,
  secondNav: state.myAppReducer.secondNav,
  totalEntries: state.adminRouterExcluded.totalEntries,
  entriesPerPage: state.adminRouterExcluded.entriesPerPage,
  initRouterExlStatus: state.adminRouterExcluded.initRouterExlStatus,
  delStatus: state.adminRouterExcluded.delStatus,
  saveStatus: state.adminRouterExcluded.saveStatus,
  updateStatus: state.adminRouterExcluded.updateStatus,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    initRouterExl,
    confirmDel,
    confirmUpd,
    createItem,
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class RouterExcluded extends Component {
  render() {
    const {
      resList,
      isEditing,
      curPage,
      totalCnt,
      sortStatus,
      totalEntries,
      entriesPerPage,
      initRouterExlStatus,
      initRouterExl,
      actions
    } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <RouterExl
          resList={resList}
          sortStatus={sortStatus}
          isEditing={isEditing}
          curPage={curPage}
          totalCnt={totalCnt}
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          initRouterExlStatus={initRouterExlStatus}
          initRouterExl={initRouterExl}
          {...actions}
        />
      </div>
    );
  }
}
