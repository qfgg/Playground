import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/Admin/CodeManage';
import CdManage from '../../components/Admin/CodeManage';
import Breadcrumbs from '../../components/Admin/CodeManage/Breadcrumbs';
import {
  initGrpCd,
  initChildCd,
  confirmDelGrp,
  confirmDelCd,
  confirmUpdGrp,
  confirmUpdCd,
  addGrpCd,
  addChildCd,
  checkGrpCd,
  checkChildCd
} from '../../middlewares/Admin/CodeManage';

const mapStateToProps = state => ({
  isEditing: state.adminCodeReducer.isEditing,
  isEditingCd: state.adminCodeReducer.isEditingCd,
  sortStatusGrp: state.adminCodeReducer.sortStatusGrp,
  sortStatusCd: state.adminCodeReducer.sortStatusCd,
  resListGrp: state.adminCodeReducer.resListGrp,
  resListCd: state.adminCodeReducer.resListCd,
  selectedGrp: state.adminCodeReducer.selectedGrp,
  curPageGrp: state.adminCodeReducer.curPageGrp,
  totalCntGrp: state.adminCodeReducer.totalCntGrp,
  curPageCd: state.adminCodeReducer.curPageCd,
  totalCntCd: state.adminCodeReducer.totalCntCd,
  totalEntriesGrp: state.adminCodeReducer.totalEntriesGrp,
  entriesPerPageGrp: state.adminCodeReducer.entriesPerPageGrp,
  totalEntriesCd: state.adminCodeReducer.totalEntriesCd,
  entriesPerPageCd: state.adminCodeReducer.entriesPerPageCd,
  checkGrpStatus: state.adminCodeReducer.checkGrpStatus,
  checkCdStatus: state.adminCodeReducer.checkCdStatus,
  isDupGrp: state.adminCodeReducer.isDupGrp,
  isDupCd: state.adminCodeReducer.isDupCd
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    initGrpCd,
    initChildCd,
    confirmDelGrp,
    confirmDelCd,
    confirmUpdGrp,
    confirmUpdCd,
    addGrpCd,
    addChildCd,
    checkGrpCd,
    checkChildCd
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class CodeManage extends Component {
  render() {
    const {
      resListGrp,
      resListCd,
      sortStatusGrp,
      sortStatusCd,
      isEditing,
      isEditingCd,
      curPageGrp,
      curPageCd,
      totalCntGrp,
      totalCntCd,
      totalEntriesCd,
      totalEntriesGrp,
      checkCdStatus,
      checkGrpStatus,
      initGrpStatus,
      initCdStatus,
      selectedGrp,
      entriesPerPageCd,
      entriesPerPageGrp,
      actions
    } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <CdManage
          resListGrp={resListGrp}
          resListCd={resListCd}
          selectedGrp={selectedGrp}
          isEditing={isEditing}
          isEditingCd={isEditingCd}
          curPageGrp={curPageGrp}
          curPageCd={curPageCd}
          entriesPerPageGrp={entriesPerPageGrp}
          entriesPerPageCd={entriesPerPageCd}
          totalCntGrp={totalCntGrp}
          totalCntCd={totalCntCd}
          sortStatusGrp={sortStatusGrp}
          sortStatusCd={sortStatusCd}
          totalEntriesCd={totalEntriesCd}
          totalEntriesGrp={totalEntriesGrp}
          checkGrpStatus={checkGrpStatus}
          checkCdStatus={checkCdStatus}
          initGrpStatus={initGrpStatus}
          initCdStatus={initCdStatus}
          {...actions}
        />
      </div>
    );
  }
}
