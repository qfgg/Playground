import React, { Component } from 'react';
import SetEntries from '../../Common/SetEntries';
// import Grid from './Grid';
import Grid from '../Common/Grid';
import Pagination from '../../Pagination';
import { HEADER, FIELD } from '../../../constants/Admin/IDC/IdcTypes';
import '../Common/common.less';
import './index.less';


export default class IDCs extends Component {
  componentDidMount() {
    const { initIdc, entriesPerPage } = this.props;
    initIdc(1, entriesPerPage);
  }

  setCurPage = (page) => {
    const { setCurPage, initIdc, entriesPerPage } = this.props;
    setCurPage(page);
    initIdc(page, entriesPerPage);
  };

  render() {
    const {
      sortStatus,
      isEditing,
      confirmDel,
      resList,
      curPage,
      totalCnt,
      sort,
      updateItem,
      confirmUpd,
      cancelUpd,
      entriesPerPage,
      totalEntries,
      setEntriesPerPage,
      setCurPage,
      actions,
      initIdc,
      initIdcStatus
    } = this.props;
    const isLoading = (initIdcStatus && initIdcStatus.isFetching) || false;
    return (
      <div className="admin-con admin-idc">
        <SetEntries
          totalEntries={totalEntries}
          setEntriesPerPage={setEntriesPerPage}
          refreshList={initIdc}
          setCurPage={setCurPage}
          curPage={curPage}
        />
        <Grid
          list={resList}
          header={HEADER}
          field={FIELD}
          sortStatus={sortStatus}
          isEditing={isEditing}
          updateItem={updateItem}
          confirmUpd={confirmUpd}
          cancelUpd={cancelUpd}
          ifDel
          isLoading={totalEntries === 0 ? isLoading : false}
          sort={sort}
          totalEntries={totalEntries}
          confirmDel={confirmDel}
          entriesPerPage={entriesPerPage}
          curPage={curPage}
          gridId="idcCd"
          {...actions}
        />
        <Pagination totalCnt={totalCnt} curPage={curPage} setCurPage={this.setCurPage} />
      </div>
    );
  }
}
