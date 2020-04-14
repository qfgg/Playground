import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/Admin/IDC';
import IDCs from '../../components/Admin/IDC';
import Breadcrumbs from '../../components/Admin/IDC/Breadcrumbs';
import { initIdc, confirmDel, confirmUpd } from '../../middlewares/Admin/IDC';


const mapStateToProps = state => ({
  isEditing: state.adminIDC.isEditing,
  resList: state.adminIDC.resList,
  sortStatus: state.adminIDC.sortStatus,
  curPage: state.adminIDC.curPage,
  totalCnt: state.adminIDC.totalCnt,
  totalEntries: state.adminIDC.totalEntries,
  entriesPerPage: state.adminIDC.entriesPerPage,
  initIdcStatus: state.adminIDC.initIdcStatus,
  updateStatus: state.adminIDC.updateStatus,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    initIdc,
    confirmDel,
    confirmUpd,
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class IDC extends Component {
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
      initIdcStatus
    } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <IDCs
          resList={resList}
          sortStatus={sortStatus}
          isEditing={isEditing}
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          curPage={curPage}
          totalCnt={totalCnt}
          initIdcStatus={initIdcStatus}
          {...actions}
        />
      </div>
    );
  }
}
