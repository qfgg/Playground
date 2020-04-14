import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tree from './Tree';
import SharedTree from './SharedTree';


export default class TreeGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragOverRec: {
        flGrpNo: '',
        idx: -1,
      },
      dragOverTailFlag: {
        flGrpNo: '',
        idx: -1,
      },
      nameEditFlag: {},
      grpNmEditFlag: {
        flGrpNo: '',
      },
      nodeNmEditFlag: {
        flGrpNo: '',
        flNo: '',
      },
    };
  }

  setDragOverRec = (flGrpNo, idx) => {
    this.setState({
      dragOverRec: {
        flGrpNo,
        idx,
      },
    });
  };

  setDragOverTailFlag = (flGrpNo, idx) => {
    this.setState({
      dragOverTailFlag: {
        flGrpNo,
        idx,
      },
    });
  };

  setGrpNmEditFlag = (flGrpNo) => {
    this.setState({
      grpNmEditFlag: {
        flGrpNo,
      },
    });
  };

  setNodeNmEditFlag = (flGrpNo, flNo) => {
    this.setState({
      nodeNmEditFlag: {
        flGrpNo,
        flNo,
      },
    });
  };

  setNameEditFlag = (flGrpNo, itemNo) => {
    this.setState({
      nameEditFlag: { flGrpNo, itemNo }
    });
  };

  setClickItem = (grpNo, item) => {
    const { setSelectedItem } = this.props;
    if (grpNo !== item) {
      setSelectedItem(grpNo, item, true);
      setTimeout(() => setSelectedItem(grpNo, item, false), 1000);
    } else {
      setSelectedItem(grpNo, item);
    }
  };

  render() {
    const {
      groups,
      flow,
      initFlow,
      delFlowGrp,
      curGrp,
      selectedItem,
      selectGrp,
      updFlow,
      delFlow,
      copyFlow,
      updFlowGrp,
      openShare,
      searchKeyTxt,
      clearSearchFlag,
      sharedFlGrp,
      moveFlow,
      orderPageFlow,
      initGrpSharedList,
      fetchChart,
      fetchChartStatus,
    } = this.props;
    const {
      dragOverRec,
      dragOverTailFlag,
      grpNmEditFlag,
      nodeNmEditFlag,
      nameEditFlag
    } = this.state;
    const sublistClass = classNames('tree-children', { hide: this.state.closeFlows });
    const newGroups = [{ flGrpNo: 'unnamed', flGrpNm: 'Unnamed' }, ...groups];
    return (
      <div className="tree">
        <ul className="tree-wrap">
          <li className="tree-node root tree-open">
            <a className="tree-item">
              <i className="iconfont icon icon-folder-open1" />
              { 'Flows' }
            </a>
            <ul className={sublistClass}>
              {
                newGroups.map((item, idx) => (
                  <Tree
                    key={idx}
                    searchKeyTxt={searchKeyTxt}
                    curGrp={curGrp}
                    flow={flow}
                    initFlow={initFlow}
                    delFlowGrp={delFlowGrp}
                    flGrpNo={item.flGrpNo}
                    flGrpNm={item.flGrpNm}
                    moveFlow={moveFlow}
                    dragOverRec={dragOverRec}
                    dragOverTailFlag={dragOverTailFlag}
                    grpNmEditFlag={grpNmEditFlag}
                    nodeNmEditFlag={nodeNmEditFlag}
                    setGrpNmEditFlag={this.setGrpNmEditFlag}
                    setNodeNmEditFlag={this.setNodeNmEditFlag}
                    nameEditFlag={nameEditFlag}
                    selectGrp={selectGrp}
                    updFlow={updFlow}
                    setDragOverRec={this.setDragOverRec}
                    setNameEditFlag={this.setNameEditFlag}
                    setDragOverTailFlag={this.setDragOverTailFlag}
                    delFlow={delFlow}
                    copyFlow={copyFlow}
                    updFlowGrp={updFlowGrp}
                    openShare={openShare}
                    clickItem={selectedItem}
                    setClickItem={this.setClickItem}
                    clearSearchFlag={clearSearchFlag}
                    orderPageFlow={orderPageFlow}
                    initGrpSharedList={initGrpSharedList}
                    fetchChart={fetchChart}
                    fetchChartStatus={fetchChartStatus}
                  />))
              }
              <SharedTree
                // searchFlag={searchFlag}
                group={groups}
                searchKeyTxt={searchKeyTxt}
                clickItem={selectedItem}
                sharedFlGrp={sharedFlGrp}
                setClickItem={this.setClickItem}
                selectGrp={selectGrp}
                initFlow={initFlow}
                flow={flow}
                fetchChart={fetchChart}
                fetchChartStatus={fetchChartStatus}
              />
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

TreeGroups.propTypes = {
  setSelectedItem: PropTypes.func,
  groups: PropTypes.array,
  flow: PropTypes.object,
  initFlow: PropTypes.func,
  delFlowGrp: PropTypes.func,
  // curGrp: PropTypes.number,
  selectedItem: PropTypes.object,
  updFlow: PropTypes.func,
  delFlow: PropTypes.func,
  copyFlow: PropTypes.func,
  updFlowGrp: PropTypes.func,
  openShare: PropTypes.func,
  clearSearchFlag: PropTypes.func,
  sharedFlGrp: PropTypes.array,
};
