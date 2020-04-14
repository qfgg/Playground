import React, { Component } from 'react';
import SetEntries from '../../Common/SetEntries';
import Grid from '../Common/Grid';
import CdGrid from './CdGrid';
import Pagination from '../../Pagination';
import { GROUP_HEADER, GROUP_FIELD } from '../../../constants/Admin/CodeManage/CodeTypes';
import '../Common/common.less';
import './index.less';


export default class CdManage extends Component {
  componentDidMount() {
    const { initGrpCd, entriesPerPageGrp } = this.props;
    initGrpCd(1, entriesPerPageGrp);
  }

  setCurPage = (page) => {
    const { setCurPageGrp, initGrpCd, entriesPerPageGrp } = this.props;
    setCurPageGrp(page);
    initGrpCd(page, entriesPerPageGrp);
  };

  componentWillReceiveProps(nprops) {
    if (!this.props.selectedGrp && nprops.resListGrp && nprops.resListGrp[0] &&
      nprops.resListGrp[0].grpCd !== this.props.selectedGrp) {
      this.props.selectGroup(nprops.resListGrp[0].grpCd);
    }
  }

  render() {
    const {
      confirmUpdGrp,
      isEditing,
      isEditingCd,
      updateGrpCd,
      cancelUpdGrp,
      confirmDelGrp,
      resListGrp,
      resListCd,
      selectedGrp,
      confirmUpdCd,
      updateCd,
      cancelUpdCd,
      confirmDelCd,
      curPageGrp,
      totalCntGrp,
      curPageCd,
      totalCntCd,
      sortStatusGrp,
      sortStatusCd,
      initChildCd,
      entriesPerPageCd,
      entriesPerPageGrp,
      initGrpCd,
      totalEntriesGrp,
      totalEntriesCd,
      addGrpCd,
      addChildCd,
      sortGrp,
      sortCd,
      initGrpStatus,
      initCdStatus,
      setEntriesPerPageGrp,
      setEntriesPerPageCd,
      setCurPageGrp,
      setCurPageCd,
      selectGroup,
      checkChildCd,
      checkGrpCd,
      checkGrpStatus,
      checkCdStatus,
      actions
    } = this.props;
    const isLoading = (initGrpStatus && initGrpStatus.isFetching) || false;

    return (
      <div>
        <div className="admin-con pull-left grp-con">
          <SetEntries
            totalEntries={totalEntriesGrp}
            setEntriesPerPage={setEntriesPerPageGrp}
            refreshList={initGrpCd}
            setCurPage={setCurPageGrp}
            curPage={curPageGrp}
          />
          <Grid
            list={resListGrp}
            header={GROUP_HEADER}
            field={GROUP_FIELD}
            sortStatus={sortStatusGrp}
            isEditing={isEditing}
            updateItem={updateGrpCd}
            confirmUpd={confirmUpdGrp}
            cancelUpd={cancelUpdGrp}
            createItem={addGrpCd}
            ifDel
            sort={sortGrp}
            isLoading={totalEntriesGrp === 0 ? isLoading : false}
            entriesPerPage={entriesPerPageGrp}
            curPage={curPageGrp}
            confirmDel={confirmDelGrp}
            canAdd
            gridId="grpCd"
            selectGroup={selectGroup}
            selectedGrp={selectedGrp}
            initChildCd={initChildCd}
            checkGrpCd={checkGrpCd}
            checkStatus={checkGrpStatus}
            {...actions}
          />
          <Pagination totalCnt={totalCntGrp} curPage={curPageGrp} setCurPage={this.setCurPage} />
        </div>
        <CdGrid
          resListCd={resListCd}
          sortStatusCd={sortStatusCd}
          isEditingCd={isEditingCd}
          addChildCd={addChildCd}
          entriesPerPageCd={entriesPerPageCd}
          totalEntriesCd={totalEntriesCd}
          totalCntCd={totalCntCd}
          curPageCd={curPageCd}
          updateCd={updateCd}
          cancelUpdCd={cancelUpdCd}
          confirmUpdCd={confirmUpdCd}
          confirmDelCd={confirmDelCd}
          initCdStatus={initCdStatus}
          selectedGrp={selectedGrp}
          sort={sortCd}
          initChildCd={initChildCd}
          setCurPageCd={setCurPageCd}
          setEntriesPerPageCd={setEntriesPerPageCd}
          checkChildCd={checkChildCd}
          checkCdStatus={checkCdStatus}
          {...actions}
        />
      </div>
    );
  }
}
