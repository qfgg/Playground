import React, { Component } from 'react';
import blacklist from 'blacklist';
import SetEntries from '../../Common/SetEntries';
import RouterTable from './RouterTable';
import Pagination from '../../Pagination';
import '../Common/common.less';
import './index.less';


export default class RouterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routerExCheck: {},
      ifExCheck: {}
    };
  }

  componentDidMount() {
    const { initRouter, entriesPerPage } = this.props;
    initRouter(1, entriesPerPage);
  }

  setCurPage = (page) => {
    const { setCurPage, initRouter, entriesPerPage } = this.props;

    this.setState({
      routerExCheck: {},
      ifExCheck: {}
    });
    setCurPage(page);
    initRouter(page, entriesPerPage);
  };

  checkRouter = (routerNo, sign) => {
    const { routerExCheck } = this.state;

    if (routerExCheck[routerNo] === undefined) {
      this.setState(preState => ({
        routerExCheck: {
          ...preState.routerExCheck,
          [routerNo]: sign
        }
      }));
    } else {
      this.setState(preState => ({
        routerExCheck: blacklist(preState.routerExCheck, routerNo.toString())
      }));
    }
  };

  checkIF = (routerif, sign) => {
    const { ifExCheck } = this.state;

    if (ifExCheck[routerif] === undefined) {
      this.setState(preState => ({
        ifExCheck: {
          ...preState.ifExCheck,
          [routerif]: sign
        }
      }));
    } else {
      this.setState(preState => ({
        ifExCheck: blacklist(preState.ifExCheck, routerif)
      }));
    }
  };

  save = () => {
    const { routerExCheck, ifExCheck } = this.state;
    const { updateRouters, updateIFs, curPage, entriesPerPage } = this.props;
    const routerKeys = Object.keys(routerExCheck);
    const ifKeys = Object.keys(ifExCheck);

    if (routerKeys.length > 0) {
      updateRouters(routerKeys.map(item => ({
        routerNo: item,
        excludedYn: routerExCheck[item]
      })), () => {
        this.setState({
          routerExCheck: {}
        });
      }, curPage, entriesPerPage);
    }
    if (ifKeys.length > 0) {
      let arr;
      updateIFs(ifKeys.map((item) => {
        arr = item.split('_');
        return {
          intfNo: arr[1],
          excludedYn: ifExCheck[item]
        };
      }), () => {
        this.setState({
          ifExCheck: {}
        });
      }, arr[0]);
    }
  };

  render() {
    const {
      initRouter,
      sortStatus,
      ifSortStatus,
      resList,
      curPage,
      totalCnt,
      totalEntries,
      setCurPage,
      sort,
      sortIf,
      initIF,
      initRouterStatus,
      isSaving,
      ifList,
      entriesPerPage,
      setEntriesPerPage,
      clearSortIf
    } = this.props;
    const { routerExCheck, ifExCheck } = this.state;
    const isLoading = (initRouterStatus && initRouterStatus.isFetching) || false;

    return (
      <div className="admin-router admin-con">
        <SetEntries
          totalEntries={totalEntries}
          refreshList={initRouter}
          setCurPage={setCurPage}
          curPage={curPage}
          setEntriesPerPage={setEntriesPerPage}
        />
        <RouterTable
          list={resList}
          ifList={ifList}
          isLoading={isLoading}
          routerExCheck={routerExCheck}
          ifExCheck={ifExCheck}
          checkRouter={this.checkRouter}
          checkIF={this.checkIF}
          initIF={initIF}
          sortStatus={sortStatus}
          sort={sort}
          curPage={curPage}
          entriesPerPage={entriesPerPage}
          sortIf={sortIf}
          ifSortStatus={ifSortStatus}
          clearSortIf={clearSortIf}
        />
        <button
          className="add-btn margintop pull-right"
          onClick={isSaving ? null : this.save}
        >
          {
            isSaving ?
              (<div className="spinner">
                <i className="fa fa-spinner" />
              </div>) : 'Save'
          }
        </button>
        <Pagination
          totalCnt={totalCnt}
          curPage={curPage}
          setCurPage={this.setCurPage}
        />
      </div>
    );
  }
}
