import React, { Component } from 'react';
import Block from './Block';
import ToolTips from '../../../Common/ToolTip';
import OptionSlider from '../../../Common/OptionSlider';
import { OPTION_SLIDER } from '../../../../constants/helpDesp';
import './index.less';


export default class MainContent extends Component {
  constructor(props) {
    super(props);

    this.tmpBlockXY = [];
    this.prevCol = 2;
    this.state = ({
      tmpFlag: [],
      blockXY: [],
      scrollTop: 0,
      col: 2,
      contentWidth: 0,
      targetOrder: null,
      newListMove: [],
      flGrpObj: {},
      chartDataStatus: [],
      smallSize: false,
    });
  }

  componentDidMount() {
    this.setState({
      scrollTop: (document.documentElement.scrollTop || document.body.scrollTop),
    });
    window.addEventListener('scroll', this.updateScrollTop, false);
    window.addEventListener('resize', this.handleResize);
    this.mediaHandler();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.col !== nextState.col) {
  //     this.prevCol = nextState.col;
  //   }
  //   return true;
  // }

  componentDidUpdate() {
    if (this.bwrap && this.bwrap.offsetWidth !== this.state.contentWidth) {
      this.setState({
        contentWidth: this.bwrap.offsetWidth,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScrollTop, false);
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    if (this.bwrap && this.bwrap.offsetWidth !== this.state.contentWidth) {
      this.setState({
        contentWidth: this.bwrap.offsetWidth,
      });
    }
    this.mediaHandler();
  };

  mediaHandler = () => {
    if (document.body.clientWidth <= 800) {
      this.setState({
        smallSize: true,
        col: 1,
      });
    } else {
      this.setState({
        smallSize: false,
        col: this.prevCol,
      });
    }
  };

  updateScrollTop = () => {
    this.setState({
      scrollTop: (document.documentElement.scrollTop || document.body.scrollTop),
    });
  };

  resetFlag = (arr, len) => {
    for (let i = 0; i < len; i++) {
      arr[i] = i;
    }
    this.setState({
      tmpFlag: arr,
    });
  };


  componentWillReceiveProps(nextProp) {
    const { curGrp, flowGroup, clearChart } = this.props;
    // if (this.props.fetchChartStatus !== nextProp.fetchChartStatus) {
    //   const { fetchChartStatus, flow } = nextProp;
    //   const list = flow[curGrp];
    //   let flGrpObjTmp = {};
    //   for (let i = 0, len = flowGroup.length; i < len; i += 1) {
    //     if (flowGroup[i].flShrNo) {
    //       flGrpObjTmp = { ...flGrpObjTmp, [flowGroup[i].flGrpNo]: flowGroup[i].flShrNo };
    //     }
    //   }
    //   const chartDataStatusTmp = [];
    //   if (fetchChartStatus) {
    //     for (let i = 0, len = (flow[curGrp] || []).length; i < len; i += 1) {
    //       if (fetchChartStatus[flow[curGrp][i].flNo]) {
    //         chartDataStatusTmp.push(fetchChartStatus[list[i].flNo]);
    //       } else {
    //         chartDataStatusTmp.push([]);
    //       }
    //     }
    //   }
    //   console.log(flGrpObjTmp);
    //   this.setState({
    //     flGrpObj: flGrpObjTmp,
    //     chartDataStatus: chartDataStatusTmp
    //   });
    // }
    if (nextProp.curGrp &&
      ((!flowGroup.length && nextProp.flowGroup.length) ||
        curGrp !== nextProp.curGrp || (nextProp.flow[nextProp.curGrp] ?
          nextProp.flow[nextProp.curGrp].length !== this.state.tmpFlag.length : false))) {
      if (nextProp.flow[nextProp.curGrp]) {
        this.resetFlag([], nextProp.flow[nextProp.curGrp].length);
      }
    }
    if (nextProp.curGrp !== curGrp) {
      clearChart();
    }
  }

  updateBlockXY = ({ index, left, top, right, bottom, height }) => {
    const { flow, curGrp } = this.props;
    this.tmpBlockXY[index] = { left, right, top, bottom, height };
    this.setState({
      blockXY: this.tmpBlockXY,
    });
    if (this.tmpBlockXY.length === flow[curGrp].length) this.tmpBlockXY = [];
  };

  setPaneFlag = (arr) => {
    const { curGrp, flow, moveFlow, orderPageFlow } = this.props;
    const len = flow[curGrp].length;
    const newOrder = {
      flGrpNo: curGrp,
      order: this.state.targetOrder + 1
    };
    const flNo = flow[curGrp][this.state.targetOrder].flNo;
    const newList = {};
    for (let i = 0; i < len; i++) {
      newList[flow[curGrp][arr[i]].flNo] = i + 1;
    }
    orderPageFlow(curGrp, this.state.newListMove);
    moveFlow(flNo, curGrp, newOrder, newList);
    this.resetFlag([], len);
  };

  setTmpFlag = (from, to) => {
    if (from === to) {
      return;
    }

    const { flow, curGrp } = this.props;
    const { tmpFlag } = this.state;
    const list = flow[curGrp];
    let front;
    let mid;
    let end;
    let source;

    if (from < to) {
      front = tmpFlag.slice(0, from);
      mid = tmpFlag.slice(from, to + 1);
      end = tmpFlag.slice(to + 1);
      source = mid.shift();
      mid.push(source);
    } else if (from > to) {
      front = tmpFlag.slice(0, to);
      mid = tmpFlag.slice(to, from + 1);
      end = tmpFlag.slice(from + 1);
      source = mid.pop();
      mid.unshift(source);
    }

    const newTmpFlag = front.concat(mid, end);
    const newList = [];
    for (let i = 0, len = list.length; i < len; i++) {
      newList[newTmpFlag[i]] = list[i];
    }

    this.setState({
      tmpFlag: newTmpFlag,
      newListMove: newList,
      targetOrder: to,
    });
  };

  setCol = (newCol) => {
    this.setState({
      col: newCol,
    });
    this.prevCol = newCol;
  };

  getSide = flt => JSON.parse(flt).type || '';

  render() {
    const {
      dragFlag,
      curIdx,
      setDragFlag,
      setCurIdx,
      curGrp,
      flow,
      selectedItem,
      fetchChart,
      fetchChartStatus,
      orderPageFlow,
      initFlow,
      flGrpObj,
      initFlowStatus
    } = this.props;
    const { col, contentWidth, scrollTop, blockXY, tmpFlag, } = this.state;
    const list = flow[curGrp];

    return (
      <div className="flow-maincontent">
        {
          list && list.length !== 0 ?
            <div className="ibox-content">
              <div className="wrap">
                <ToolTips className="pull-right" type="L" desp={OPTION_SLIDER} />
                <div className="row-slider">
                  <OptionSlider
                    onChange={this.setCol}
                    defaultVal={2}
                    isHide={this.state.smallSize}
                  />
                </div>
              </div>
              <div ref={c => this.bwrap = c} className="block-wrap">
                {(list || []).map((item, idx) =>
                  (<Block
                    selectedItem={selectedItem}
                    flow={flow}
                    key={idx}
                    title={item.flNm}
                    desc={item.desc}
                    flGrpNo={item.flGrpNo}
                    flNo={item.flNo}
                    contentWidth={contentWidth - 20}
                    tmpFlag={tmpFlag}
                    blockXY={blockXY}
                    dragFlag={dragFlag}
                    curIdx={curIdx}
                    index={idx}
                    curGrp={curGrp}
                    creEmpNm={curGrp === 'unnamed' ? '' : (flGrpObj[curGrp] ? flGrpObj[curGrp] : '')}
                    setDragFlag={setDragFlag}
                    updateBlockXY={this.updateBlockXY}
                    setCurIdx={setCurIdx}
                    setTmpFlag={this.setTmpFlag}
                    setPaneFlag={this.setPaneFlag}
                    col={col}
                    initFlow={initFlow}
                    scrollTop={scrollTop}
                    resetFlag={this.resetFlag}
                    fetchChart={fetchChart}
                    chartStatus={fetchChartStatus[item.flNo] || []}
                    orderPageFlow={orderPageFlow}
                    side={this.getSide(item.flFltrset)}
                  />))}
                {
                  ((list || []).length % 2 > 0 && col === 2)
                  || ((list || []).length % 2 === 0 && col === 3) ?
                    <div
                      style={{ width: (contentWidth - 20) / col - 5 * 2,
                        height: `${((contentWidth - 20) / col - 5 * 2) * 3 / 7 + 72}px` }}
                      className="block"
                    /> :
                  null
                }

              </div>
            </div> : initFlowStatus.isFetching === false ?
            (<div className="ibox-content">
              <h2 className="no-flow-warning">No Flow Found!</h2>
            </div>) : ''
        }
      </div>
    );
  }
}
