import React, { Component } from 'react';
import SetEntries from '../../Common/SetEntries';
// import Grid from './Grid';
import Grid from '../Common/Grid';
import Pagination from '../../Pagination';
import { HEADER, FIELD } from '../../../constants/Admin/PopManage/PopTypes';

import '../Common/common.less';
import './index.less';


export default class PopsManage extends Component {
  componentDidMount() {
    const { initPop, entriesPerPage } = this.props;
    initPop(1, entriesPerPage);
  }

  setCurPage = (page) => {
    const { setCurPage, initPop, entriesPerPage } = this.props;
    setCurPage(page);
    initPop(page, entriesPerPage);
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
      actions,
      initPop,
      initPopStatus
    } = this.props;
    const isLoading = (initPopStatus && initPopStatus.isFetching) || false;
    return (
      <div className="admin-pop admin-con">
        <SetEntries
          totalEntries={totalEntries}
          setEntriesPerPage={setEntriesPerPage}
          refreshList={initPop}
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
          createItem={createItem}
          ifDel
          sort={sort}
          isLoading={totalEntries === 0 ? isLoading : false}
          entriesPerPage={entriesPerPage}
          curPage={curPage}
          confirmDel={confirmDel}
          canAdd
          gridId="popNo"
          {...actions}
        />
        <Pagination totalCnt={totalCnt} curPage={curPage} setCurPage={this.setCurPage} />
      </div>
    );
  }
}
