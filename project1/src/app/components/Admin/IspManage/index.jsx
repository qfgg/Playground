import React, { Component } from 'react';
import SetEntries from '../../Common/SetEntries';
// import Grid from './Grid';
import Grid from '../Common/Grid';
import Pagination from '../../Pagination';
import { HEADER, FIELD } from '../../../constants/Admin/IspManage/IspTypes';
import '../Common/common.less';
import './index.less';


export default class IspsManage extends Component {
  componentDidMount() {
    const { initIsp, entriesPerPage } = this.props;
    initIsp(1, entriesPerPage);
  }

  setCurPage = (page) => {
    const { setCurPage, initIsp, entriesPerPage } = this.props;
    setCurPage(page);
    initIsp(page, entriesPerPage);
  };

  render() {
    const {
      sortStatus,
      isEditing,
      resList,
      curPage,
      totalCnt,
      sort,
      updateItem,
      confirmUpd,
      cancelUpd,
      actions,
      confirmDel,
      entriesPerPage,
      totalEntries,
      setEntriesPerPage,
      setCurPage,
      initIsp,
      initIspStatus
    } = this.props;
    const isLoading = (initIspStatus && initIspStatus.isFetching) || false;
    return (
      <div className="admin-isp admin-con">
        <SetEntries
          totalEntries={totalEntries}
          setEntriesPerPage={setEntriesPerPage}
          refreshList={initIsp}
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
          ifDel={false}
          isLoading={totalEntries === 0 ? isLoading : false}
          sort={sort}
          totalEntries={totalEntries}
          confirmDel={confirmDel}
          entriesPerPage={entriesPerPage}
          curPage={curPage}
          gridId="ispId"
          {...actions}
        />
        <Pagination totalCnt={totalCnt} curPage={curPage} setCurPage={this.setCurPage} />
      </div>
    );
  }
}
