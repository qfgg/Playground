import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FilterBar from '../../components/Explorer/External/FilterBar';
import MainContent from '../../components/Explorer/External/MainContent';
import * as actions from '../../actions/External/Explorer';
import { checkFiltersNameSuccess } from '../../actions/My/Filtersets';
import {
  saveMyFiltersets,
  checkFiltersetsName,
  updateFilterset
} from '../../middlewares/My/Filtersets';
import {
  initList,
  searchList,
  saveItem,
  delItem,
  initItem,
  checkSubmitNm,
  fetchResult,
  getJob,
  getFilter,
  getFlow,
  getAnaRouters,
  getAna
} from '../../middlewares/External/Explorer';
import Breadcrumbs from '../../components/Explorer/External/Breadcrumbs';


const mapStateToProps = state => ({
  favoredItemList: state.externalExplorerReducer.favoredItemList,
  selectedItemList: state.externalExplorerReducer.selectedItemList,
  initResList: state.externalExplorerReducer.initResList,
  searchResList: state.externalExplorerReducer.searchResList,
  separateList: state.externalExplorerReducer.separateList,
  radioList: state.externalExplorerReducer.radioList,
  checkList: state.externalExplorerReducer.checkList,
  top: state.externalExplorerReducer.top,
  period: state.externalExplorerReducer.period,
  splitStatus: state.externalExplorerReducer.splitStatus,
  checkSubmitNmStatus: state.externalExplorerReducer.checkSubmitNmStatus,
  updateNmStatus: state.externalExplorerReducer.updateNmStatus,
  fetchExplorerStatus: state.externalExplorerReducer.fetchExplorerStatus,
  fetchResultStatus: state.chartRequestReducer.fetchResultStatus,
  getJobStatus: state.externalExplorerReducer.getJobStatus,
  checkSetNmStatus: state.myFiltersetsReducer.checkNmStatus,
  searchQuery: state.externalExplorerReducer.searchQuery,
  hasChartData: state.externalExplorerReducer.hasChartData,
  chartsInit: state.externalExplorerReducer.chartsInit,
  data: state.externalExplorerReducer.data,
  table: state.externalExplorerReducer.table,
  isSplit: state.externalExplorerReducer.isSplit,
  splitList: state.externalExplorerReducer.splitList,
  getFlowStatus: state.externalExplorerReducer.getFlowStatus,
  getFilterStatus: state.externalExplorerReducer.getFilterStatus,
  anaRouters: state.externalExplorerReducer.anaRouters,
  ana: state.externalExplorerReducer.ana,
  allIF: state.externalExplorerReducer.allIF,
  routerIF: state.externalExplorerReducer.routerIF
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    initList,
    searchList,
    saveItem,
    delItem,
    initItem,
    saveMyFiltersets,
    checkFiltersetsName,
    updateFilterset,
    checkSubmitNm,
    checkFiltersNameSuccess,
    fetchResult,
    getJob,
    getFilter,
    getFlow,
    getAnaRouters,
    getAna
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowFilter: true,
      filter: {}
    };
  }

  toggleFilterBar = () => {
    this.setState({
      isShowFilter: !this.state.isShowFilter,
    });
  };

  setFilter = query =>
    this.setState({
      filter: query
    });

  render() {
    const {
      favoredItemList,
      selectedItemList,
      initResList,
      searchResList,
      separateList,
      radioList,
      checkList,
      top,
      period,
      splitStatus,
      checkSubmitNmStatus,
      updateNmStatus,
      params,
      fetchExplorerStatus,
      fetchResultStatus,
      getJobStatus,
      checkSetNmStatus,
      searchQuery,
      hasChartData,
      chartsInit,
      data,
      table,
      isSplit,
      splitList,
      getFlowStatus,
      getFilterStatus,
      anaRouters,
      ana,
      allIF,
      routerIF,
      actions,
    } = this.props;
    const { isShowFilter, filter } = this.state;

    return (
      <div className="ibox-content explorer-wrap external">
        <Breadcrumbs />
        <FilterBar
          favoredItemList={favoredItemList}
          selectedItemList={selectedItemList}
          initResList={initResList}
          searchResList={searchResList}
          separateList={separateList}
          radioList={radioList}
          checkList={checkList}
          top={top}
          period={period}
          fetchResultStatus={fetchResultStatus}
          checkSubmitNmStatus={checkSubmitNmStatus}
          updateNmStatus={updateNmStatus}
          setType={params.type}
          setNo={params.setNo}
          getJobStatus={getJobStatus}
          checkSetNmStatus={checkSetNmStatus}
          toggleFilterBar={this.toggleFilterBar}
          isShowFilter={isShowFilter}
          searchQuery={searchQuery}
          filter={filter}
          setFilter={this.setFilter}
          getFlowStatus={getFlowStatus}
          getFilterStatus={getFilterStatus}
          allIF={allIF}
          routerIF={routerIF}
          {...actions}
        />
        <MainContent
          fetchExplorerStatus={fetchExplorerStatus}
          fetchResultStatus={fetchResultStatus}
          splitStatus={splitStatus}
          isShowFilter={isShowFilter}
          setType={params.type}
          setNo={params.setNo}
          getJobStatus={getJobStatus}
          selectedItemList={selectedItemList}
          separateList={separateList}
          radioList={radioList}
          top={top}
          period={period}
          searchQuery={searchQuery}
          hasChartData={hasChartData}
          chartsInit={chartsInit}
          data={data}
          table={table}
          isSplit={isSplit}
          splitList={splitList}
          anaRouters={anaRouters}
          ana={ana}
          {...actions}
        />
      </div>
    );
  }
}
