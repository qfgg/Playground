import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/Admin/RouterManage';
import RouterList from '../../components/Admin/RouterManage';
import {
  initRouter,
  updateRouters,
  initIF,
  updateIFs
} from '../../middlewares/Admin/RouterManage';
import Breadcrumbs from '../../components/Admin/RouterManage/Breadcrumbs';


const mapStateToProps = state => ({
  resList: state.adminRouterReducer.resList,
  sortStatus: state.adminRouterReducer.sortStatus,
  ifSortStatus: state.adminRouterReducer.ifSortStatus,
  curPage: state.adminRouterReducer.curPage,
  totalCnt: state.adminRouterReducer.totalCnt,
  totalEntries: state.adminRouterReducer.totalEntries,
  entriesPerPage: state.adminRouterReducer.entriesPerPage,
  initRouterStatus: state.adminRouterReducer.initRouterStatus,
  updateRouterStatus: state.adminRouterReducer.updateRouterStatus,
  updateIFStatus: state.adminRouterReducer.updateIFStatus,
  ifList: state.adminRouterReducer.ifList
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    initRouter,
    updateRouters,
    initIF,
    updateIFs
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class RouterManage extends Component {
  render() {
    const {
      resList,
      curPage,
      totalCnt,
      sortStatus,
      ifSortStatus,
      totalEntries,
      entriesPerPage,
      initRouterStatus,
      updateRouterStatus,
      updateIFStatus,
      ifList,
      actions
    } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <RouterList
          resList={resList}
          sortStatus={sortStatus}
          ifSortStatus={ifSortStatus}
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          curPage={curPage}
          initRouterStatus={initRouterStatus}
          totalCnt={totalCnt}
          isSaving={(updateRouterStatus && updateRouterStatus.isSaving) ||
            (updateIFStatus && updateIFStatus.isSaving)}
          ifList={ifList}
          {...actions}
        />
      </div>
    );
  }
}
