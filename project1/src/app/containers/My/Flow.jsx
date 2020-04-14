import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TreeSidebar from '../../components/My/Flow/TreeSidebar';
import MainContent from '../../components/My/Flow/MainContent';
import {
  initFlowGroup,
  initFlow,
  addFlowGrp,
  delFlowGrp,
  updFlowGrp,
  shareFlowGrp,
  initSharedFlGrp,
  delFlow,
  updFlow,
  copyFlow,
  fetchChart,
  moveFlow,
  getSuggest,
  initGrpSharedList,
  delGrpSharedList,
  checkGrpName
} from '../../middlewares/My/Flow';
import * as actions from '../../actions/My/Flow';
import Breadcrumbs from '../../components/My/Flow/Breadcrumbs';


const mapStateToProps = state => ({
  flow: state.myFlowReducer.flow,
  flowGroup: state.myFlowReducer.flowGroup,
  flGrpObj: state.myFlowReducer.flGrpObj,
  sharedFlGrp: state.myFlowReducer.sharedFlGrp,
  dragFlag: state.myFlowReducer.dragFlag,
  curIdx: state.myFlowReducer.curIdx,
  curGrp: state.myFlowReducer.curGrp,
  selectedItem: state.myFlowReducer.selectedItem,
  fetchChartStatus: state.myFlowReducer.fetchChartStatus,
  searchKW: state.myFlowReducer.searchKW,
  curType: state.myFlowReducer.curType,
  suggestResList: state.myFlowReducer.suggestResList,
  grpSharedList: state.myFlowReducer.grpSharedList,
  shareGrpStatus: state.myFlowReducer.shareGrpStatus,
  initFlowStatus: state.myFlowReducer.initFlowStatus,
  checkGrpNmStatus: state.myFlowReducer.checkGrpNmStatus
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    initFlow,
    initFlowGroup,
    addFlowGrp,
    delFlowGrp,
    updFlowGrp,
    updFlow,
    delFlow,
    copyFlow,
    moveFlow,
    shareFlowGrp,
    initSharedFlGrp,
    fetchChart,
    getSuggest,
    initGrpSharedList,
    delGrpSharedList,
    checkGrpName
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class MyFlow extends Component {
  render() {
    const {
      actions,
      flow,
      dragFlag,
      curIdx,
      curGrp,
      flowGroup,
      sharedFlGrp,
      selectedItem,
      fetchChartStatus,
      searchKW,
      curType,
      flGrpObj,
      suggestResList,
      grpSharedList,
      shareGrpStatus,
      initFlowStatus,
      checkGrpNmStatus
    } = this.props;

    return (
      <div className="flow-wrap ibox-content">
        <Breadcrumbs />
        <TreeSidebar
          flow={flow}
          flowGroup={flowGroup}
          selectedItem={selectedItem}
          curGrp={curGrp}
          addFlowGrp={addFlowGrp}
          sharedFlGrp={sharedFlGrp}
          searchKW={searchKW}
          curType={curType}
          flGrpObj={flGrpObj}
          suggestResList={suggestResList}
          grpSharedList={grpSharedList}
          delGrpSharedList={delGrpSharedList}
          shareGrpStatus={shareGrpStatus}
          fetchChartStatus={fetchChartStatus}
          fetchChart={fetchChart}
          checkGrpNmStatus={checkGrpNmStatus}
          {...actions}
        />
        <MainContent
          flow={flow}
          flowGroup={flowGroup}
          selectedItem={selectedItem}
          curGrp={curGrp}
          dragFlag={dragFlag}
          flGrpObj={flGrpObj}
          curIdx={curIdx}
          fetchChartStatus={fetchChartStatus}
          initFlowStatus={initFlowStatus}
          {...actions}
        />
      </div>
    );
  }
}
