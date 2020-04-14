import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FilterBar from '../../components/Explorer/Internal/FilterBar';
import MainContent from '../../components/Explorer/Internal/MainContent';
import * as actions from '../../actions/Internal/Explorer';
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
  getFlow
} from '../../middlewares/Internal/Explorer';
import { checkFiltersNameSuccess } from '../../actions/My/Filtersets';
import {
  saveMyFiltersets,
  checkFiltersetsName,
  updateFilterset
} from '../../middlewares/My/Filtersets';
import Breadcrumbs from '../../components/Explorer/Internal/Breadcrumbs';


const mapStateToProps = state => ({
  favoredItemList: state.internalExplorerReducer.favoredItemList,
  selectedItemList: state.internalExplorerReducer.selectedItemList,
  initResList: state.internalExplorerReducer.initResList,
  searchResList: state.internalExplorerReducer.searchResList,
  separateList: state.internalExplorerReducer.separateList,
  radioList: state.internalExplorerReducer.radioList,
  checkList: state.internalExplorerReducer.checkList,
  top: state.internalExplorerReducer.top,
  period: state.internalExplorerReducer.period,
  splitStatus: state.internalExplorerReducer.splitStatus,
  checkSubmitNmStatus: state.internalExplorerReducer.checkSubmitNmStatus,
  updateNmStatus: state.internalExplorerReducer.updateNmStatus,
  fetchExplorerStatus: state.internalExplorerReducer.fetchExplorerStatus,
  fetchResultStatus: state.chartRequestReducer.fetchResultStatus,
  getJobStatus: state.internalExplorerReducer.getJobStatus,
  aRouterSelected: state.internalExplorerReducer.aRouterSelected,
  bRouterSelected: state.internalExplorerReducer.bRouterSelected,
  checkSetNmStatus: state.myFiltersetsReducer.checkNmStatus,
  searchQuery: state.internalExplorerReducer.searchQuery,
  hasChartData: state.internalExplorerReducer.hasChartData,
  chartsInit: state.internalExplorerReducer.chartsInit,
  data: state.internalExplorerReducer.data,
  table: state.internalExplorerReducer.table,
  isSplit: state.internalExplorerReducer.isSplit,
  splitList: state.internalExplorerReducer.splitList,
  getFlowStatus: state.internalExplorerReducer.getFlowStatus,
  getFilterStatus: state.internalExplorerReducer.getFilterStatus
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
    checkFiltersNameSuccess,
    checkSubmitNm,
    fetchResult,
    getJob,
    getFilter,
    getFlow
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowFilter: true,
    };
  }

  toggleFilterBar = () => {
    this.setState({
      isShowFilter: !this.state.isShowFilter,
    });
  };

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
      fetchResultStatus,
      fetchExplorerStatus,
      getJobStatus,
      checkSetNmStatus,
      aRouterSelected,
      bRouterSelected,
      searchQuery,
      hasChartData,
      chartsInit,
      data,
      table,
      isSplit,
      splitList,
      getFlowStatus,
      getFilterStatus,
      actions,
    } = this.props;
    const { isShowFilter } = this.state;

    return (
      <div className="ibox-content explorer-wrap internal">
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
          checkSetNmStatus={checkSetNmStatus}
          period={period}
          fetchResultStatus={fetchResultStatus}
          checkSubmitNmStatus={checkSubmitNmStatus}
          updateNmStatus={updateNmStatus}
          setType={params.type}
          setNo={params.setNo}
          getJobStatus={getJobStatus}
          toggleFilterBar={this.toggleFilterBar}
          isShowFilter={isShowFilter}
          aRouterSelected={aRouterSelected}
          bRouterSelected={bRouterSelected}
          searchQuery={searchQuery}
          getFlowStatus={getFlowStatus}
          getFilterStatus={getFilterStatus}
          {...actions}
        />
        <MainContent
          fetchResultStatus={fetchResultStatus}
          fetchExplorerStatus={fetchExplorerStatus}
          splitStatus={splitStatus}
          isShowFilter={isShowFilter}
          setType={params.type}
          setNo={params.setNo}
          selectedItemList={selectedItemList}
          separateList={separateList}
          radioList={radioList}
          top={top}
          period={period}
          getJobStatus={getJobStatus}
          searchQuery={searchQuery}
          hasChartData={hasChartData}
          chartsInit={chartsInit}
          data={data}
          table={table}
          isSplit={isSplit}
          splitList={splitList}
          {...actions}
        />
      </div>
    );
  }
}
