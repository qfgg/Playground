import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/Admin/IspManage';
import IspsManage from '../../components/Admin/IspManage';
import Breadcrumbs from '../../components/Admin/IspManage/Breadcrumbs';
import { initIsp, confirmDel, confirmUpd } from '../../middlewares/Admin/IspManage';

const mapStateToProps = state => ({
  isEditing: state.adminIspManage.isEditing,
  resList: state.adminIspManage.resList,
  sortStatus: state.adminIspManage.sortStatus,
  curPage: state.adminIspManage.curPage,
  totalCnt: state.adminIspManage.totalCnt,
  totalEntries: state.adminIspManage.totalEntries,
  entriesPerPage: state.adminIspManage.entriesPerPage,
  initIspStatus: state.adminIspManage.initIspStatus,
  updateStatus: state.adminIspManage.updateStatus,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    initIsp,
    confirmDel,
    confirmUpd,
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class IspManage extends Component {
  render() {
    const {
      resList,
      isEditing,
      curPage,
      totalCnt,
      sortStatus,
      totalEntries,
      entriesPerPage,
      actions,
      initIspStatus
    } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <IspsManage
          resList={resList}
          sortStatus={sortStatus}
          isEditing={isEditing}
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          curPage={curPage}
          totalCnt={totalCnt}
          initIspStatus={initIspStatus}
          {...actions}
        />
      </div>
    );
  }
}
