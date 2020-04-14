import React, { Component } from 'react';
import TreeGroups from './TreeGroups';


export default class TreePanel extends Component {
  componentWillMount() {
    const { initFlowGroup, initSharedFlGrp } = this.props;
    initFlowGroup();
    initSharedFlGrp();
  }

  render() {
    const {
      flow,
      flowGroup,
      initFlow,
      delFlowGrp,
      updFlowGrp,
      sharedFlGrp,
      curGrp,
      selectedItem,
      selectGrp,
      updFlow,
      delFlow,
      copyFlow,
      openShare,
      setSelectedItem,
      searchKeyTxt,
      clearSearchFlag,
      moveFlow,
      orderPageFlow,
      initGrpSharedList,
      fetchChart,
      fetchChartStatus,
    } = this.props;


    return (
      <div className="tree-panel">
        <TreeGroups
          groups={flowGroup}
          flow={flow}
          initFlow={initFlow}
          updFlowGrp={updFlowGrp}
          delFlowGrp={delFlowGrp}
          sharedFlGrp={sharedFlGrp}
          curGrp={curGrp}
          selectedItem={selectedItem}
          searchKeyTxt={searchKeyTxt}
          selectGrp={selectGrp}
          updFlow={updFlow}
          delFlow={delFlow}
          moveFlow={moveFlow}
          copyFlow={copyFlow}
          openShare={openShare}
          setSelectedItem={setSelectedItem}
          clearSearchFlag={clearSearchFlag}
          orderPageFlow={orderPageFlow}
          initGrpSharedList={initGrpSharedList}
          fetchChart={fetchChart}
          fetchChartStatus={fetchChartStatus}
        />
      </div>
    );
  }
}

