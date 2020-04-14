import React, { Component } from 'react';
import SetEntries from '../../Common/SetEntries';
// import Grid from './Grid';
import Grid from '../Common/Grid';
import Pagination from '../../Pagination';
import { HEADER, FIELD } from '../../../constants/Admin/RouterExcluded/RouterTypes';
import '../Common/common.less';
import './index.less';


export default class RouterExl extends Component {
  componentDidMount() {
    const { initRouterExl, entriesPerPage } = this.props;
    initRouterExl(1, entriesPerPage);
  }

  setCurPage = (page) => {
    const { setCurPage, initRouterExl, entriesPerPage } = this.props;
    setCurPage(page);
    initRouterExl(page, entriesPerPage);
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
      createItem,
      confirmDel,
      cancelUpd,
      entriesPerPage,
      totalEntries,
      setEntriesPerPage,
      setCurPage,
      initRouterExl,
      initRouterExlStatus,
      actions
    } = this.props;
    const isLoading = (initRouterExlStatus && initRouterExlStatus.isFetching) || false;
    return (
      <div className="admin-con admin-router">
        <SetEntries
          totalEntries={totalEntries}
          setEntriesPerPage={setEntriesPerPage}
          refreshList={initRouterExl}
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
          notHandle
          isLoading={totalEntries === 0 ? isLoading : false}
          entriesPerPage={entriesPerPage}
          curPage={curPage}
          sort={sort}
          confirmDel={confirmDel}
          canAdd
          gridId="routerNo"
          {...actions}
        />
        <Pagination
          totalCnt={totalCnt}
          curPage={curPage}
          setCurPage={this.setCurPage}
        />
      </div>
    );
  }
}
