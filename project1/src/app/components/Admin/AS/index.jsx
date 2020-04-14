import React, { Component } from 'react';
import SetEntries from '../../Common/SetEntries';
import ASGrid from './ASGrid';
import Pagination from '../../Pagination';
import { HEADER, FIELD } from '../../../constants/Admin/AS/ASTypes';

import '../Common/common.less';
import './index.less';


export default class ASTable extends Component {
  componentDidMount() {
    const { initAS, entriesPerPage } = this.props;
    initAS(1, entriesPerPage);
  }

  setCurPage = (page) => {
    const { setCurPage, initAS, entriesPerPage } = this.props;
    setCurPage(page);
    initAS(page, entriesPerPage);
  };

  render() {
    const {
      sortStatus,
      confirmDel,
      confirmUpd,
      updateItem,
      cancelUpd,
      isEditing,
      resList,
      curPage,
      entriesPerPage,
      totalCnt,
      totalEntries,
      setEntriesPerPage,
      setCurPage,
      sort,
      createItem,
      initAS,
      initASStatus,
      checkStatus,
      clearASCheck,
      checkAS
    } = this.props;
    const isLoading = (initASStatus && initASStatus.isFetching) || false;

    return (
      <div className="admin-pop admin-con">
        <SetEntries
          totalEntries={totalEntries}
          setEntriesPerPage={setEntriesPerPage}
          refreshList={initAS}
          setCurPage={setCurPage}
          curPage={curPage}
        />
        <ASGrid
          list={resList}
          header={HEADER}
          field={FIELD}
          sortStatus={sortStatus}
          isEditing={isEditing}
          updateItem={updateItem}
          confirmUpd={confirmUpd}
          cancelUpd={cancelUpd}
          createItem={createItem}
          sort={sort}
          isLoading={totalEntries === 0 ? isLoading : false}
          entriesPerPage={entriesPerPage}
          curPage={curPage}
          confirmDel={confirmDel}
          checkStatus={checkStatus}
          clearASCheck={clearASCheck}
          checkAS={checkAS}
        />
        <Pagination totalCnt={totalCnt} curPage={curPage} setCurPage={this.setCurPage} />
      </div>
    );
  }
}
