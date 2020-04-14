import React, { Component } from 'react';
import FlowPane from './FlowPane';


export default class Block extends Component {
  componentDidMount() {
    const { flNo, fetchChart } = this.props;
    fetchChart(flNo);

    this.getBlockXY();
  }

  // componentWillReceiveProps(nProps) {
  //   const { flNo, fetchChart, flGrpNo } = this.props;
  //   if (nProps.flNo !== flNo && nProps.flGrpNo !== flGrpNo) {
  //     fetchChart(nProps.flNo);
  //   }
  // }

  componentDidUpdate(preProps) {
    const { col, contentWidth, scrollTop, flow, curGrp, dragFlag, curIdx } = this.props;
    if (preProps.col !== col ||
      preProps.contentWidth !== contentWidth ||
      preProps.scrollTop !== scrollTop ||
      flow[curGrp].length !== preProps.tmpFlag.length ||
      preProps.dragFlag.isDragging !== dragFlag.isDragging || curIdx !== preProps.curIdx) {
      this.getBlockXY(curIdx !== preProps.curIdx);
    }
  }

  getBlockXY = (flag) => {
    if (this.block) {
      const { index, updateBlockXY, blockXY, dragFlag } = this.props;
      let clientHeight = this.block.clientHeight;
      if (dragFlag.isDragging && blockXY[index] && flag) {
        clientHeight = blockXY[index].height;
      }
      const rect = this.block.getBoundingClientRect();
      updateBlockXY({
        index,
        left: rect.left,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        height: clientHeight,
      });
    }
  }

  render() {
    const {
      selectedItem,
      list,
      title,
      desc,
      flGrpNo,
      flNo,
      contentWidth,
      index,
      tmpFlag,
      blockXY,
      dragFlag,
      curIdx,
      setDragFlag,
      setPaneFlag,
      setTmpFlag,
      setCurIdx,
      col,
      scrollTop,
      resetFlag,
      chartStatus,
      creEmpNm,
      side
    } = this.props;
    let preRect;
    let nextRect;
    let _height = 'auto';
    const w = contentWidth / col - 5 * 2;

    if (dragFlag.isDragging) {
      if (dragFlag.dragIdx <= index && curIdx > index) {
        nextRect = blockXY[index + 1];
        if (nextRect) {
          _height = `${nextRect.height}px`;
        }
      }
      if (curIdx < index && dragFlag.dragIdx >= index) {
        preRect = blockXY[index - 1];
        if (preRect) {
          _height = `${preRect.height}px`;
        }
      }
      if (curIdx === index) {
        _height = `${w * 3 / 7 + 72}px`;
      }
    }
    const sizeStyle = contentWidth === 0 ? {}
      : { width: w, minHeight: w * 3 / 7 + 36, height: _height };

    return (
      <div className="block" ref={c => this.block = c} style={sizeStyle}>
        <div className="photo-frame" />
        <FlowPane
          selectedItem={selectedItem}
          index={index}
          id={index}
          list={list}
          flGrpNo={flGrpNo}
          flNo={flNo}
          title={title}
          desc={desc}
          tmpFlag={tmpFlag}
          blockXY={blockXY}
          setCurIdx={setCurIdx}
          curIdx={curIdx}
          dragFlag={dragFlag}
          setDragFlag={setDragFlag}
          creEmpNm={creEmpNm}
          setPaneFlag={setPaneFlag}
          getBlockXY={this.getBlockXY}
          setTmpFlag={setTmpFlag}
          col={col}
          width={w}
          contentWidth={contentWidth}
          scrollTop={scrollTop}
          resetFlag={resetFlag}
          chartStatus={chartStatus}
          side={side}
        />
      </div>
    );
  }
}
