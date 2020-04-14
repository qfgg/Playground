import React, { Component } from 'react';
import SetEntries from '../../Common/SetEntries';
import Grid from '../Common/Grid';
import Pagination from '../../Pagination';
import { HEADER, FIELD } from '../../../constants/Admin/IntfManage/InterfaceTypes';
import '../Common/common.less';
import './index.less';


export default class InterfaceList extends Component {
  componentDidMount() {
    const { initInterface, entriesPerPage } = this.props;
    initInterface(1, entriesPerPage);
  }

  setCurPage = (page) => {
    const { setCurPage, initInterface, entriesPerPage } = this.props;
    setCurPage(page);
    initInterface(page, entriesPerPage);
  };

  render() {
    const {
      initInterface,
      sortStatus,
      isEditing,
      resList,
      curPage,
      totalCnt,
      totalEntries,
      setCurPage,
      sort,
      updateItem,
      confirmUpd,
      cancelUpd,
      initIntfStatus,
      actions
    } = this.props;
    const isLoading = (initIntfStatus && initIntfStatus.isFetching) || false;
    return (
      <div className="admin-intf admin-con">
        <SetEntries
          totalEntries={totalEntries}
          refreshList={initInterface}
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
          isLoading={totalEntries === 0 ? isLoading : false}
          sort={sort}
          notHandle
          gridId="intfNo"
          {...actions}
        />
        <Pagination totalCnt={totalCnt} curPage={curPage} setCurPage={this.setCurPage} />
      </div>
    );
  }
}
