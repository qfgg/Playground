import React, { Component } from 'react';
import SetEntries from '../../Common/SetEntries';
import Pagination from '../../Pagination';
import Grid from '../Common/Grid';
import { CODE_HEADER, CODE_FIELD } from '../../../constants/Admin/CodeManage/CodeTypes';


export default class CdGrid extends Component {
  componentDidMount() {
    const { initChildCd, entriesPerPageCd, selectedGrp } = this.props;
    initChildCd(1, entriesPerPageCd, selectedGrp);
  }

  setCurPageCd = (page) => {
    const { setCurPageCd, initChildCd, entriesPerPageCd, selectedGrp } = this.props;
    setCurPageCd(page);
    initChildCd(page, entriesPerPageCd, selectedGrp);
  };

  componentWillReceiveProps(nextProps) {
    const { initChildCd, entriesPerPageCd } = this.props;
    if (nextProps.selectedGrp !== this.props.selectedGrp) {
      initChildCd(1, entriesPerPageCd, nextProps.selectedGrp);
    }
  }

  render() {
    const {
      resListCd,
      confirmUpdCd,
      updateCd,
      cancelUpdCd,
      confirmDelCd,
      addChildCd,
      isEditingCd,
      sortStatusCd,
      totalEntriesCd,
      totalCntCd,
      curPageCd,
      entriesPerPageCd,
      sort,
      initChildCd,
      setEntriesPerPageCd,
      setCurPageCd,
      selectedGrp,
      checkChildCd,
      checkCdStatus,
      actions
    } = this.props;

    return (
      <div className="admin-con pull-left cd-con">
        <SetEntries
          totalEntries={totalEntriesCd}
          setEntriesPerPage={setEntriesPerPageCd}
          refreshList={initChildCd}
          setCurPage={setCurPageCd}
          curPage={1}
          selectedGrp={selectedGrp}
        />
        <Grid
          list={resListCd}
          header={CODE_HEADER}
          field={CODE_FIELD}
          sortStatus={sortStatusCd}
          isEditing={isEditingCd}
          updateItem={updateCd}
          confirmUpd={confirmUpdCd}
          cancelUpd={cancelUpdCd}
          createItem={addChildCd}
          ifDel
          sort={sort}
          entriesPerPage={entriesPerPageCd}
          curPage={curPageCd}
          confirmDel={confirmDelCd}
          canAdd
          gridId="cd"
          selectedGrp={selectedGrp}
          checkChildCd={checkChildCd}
          checkStatus={checkCdStatus}
          {...actions}
        />
        <Pagination totalCnt={totalCntCd} curPage={curPageCd} setCurPage={this.setCurPageCd} />
      </div>
    );
  }
}
