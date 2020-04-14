import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { browserHistory } from 'react-router';
import ChartOption from '../../../Rechart/Common/ChartOption';
import CommonChart from '../../../Rechart/Common/CommonChart';
import JSONToCSVConvertor from '../../../../../lib/JSONToCSV';
import downloadPNG from '../../../../../lib/svgenie';


export default class FlowPane extends Component {
  constructor(props) {
    super(props);
    this.track = [];
    this.state = ({
      curX: undefined,
      curY: undefined,
      startX: undefined,
      startY: undefined,
      type: 'line',
      shouldClose: false,
    });
    this.mounted = false;
  }

  setChartType = (type) => {
    this.setState({ type });
  };

  componentDidMount() {
    if (this.pane) {
      this.setState({
        curX: this.pane.offsetLeft,
        curY: this.pane.offsetTop,
      });
    }
    this.mounted = true;
  }

  mouseDown = (evt) => {
    const { creEmpNm, index } = this.props;
    if (creEmpNm) {
      return;
    }
    evt.preventDefault();
    this.setState({
      startX: evt.clientX,
      startY: evt.clientY,
      shouldClose: true,
    });
    window.addEventListener('mousemove', this.mouseMove, false);
    this.track[0] = index;
  };

  mouseUp = () => {
    const { curIdx, tmpFlag, setPaneFlag, setDragFlag, resetFlag, setCurIdx } = this.props;
    if (curIdx !== -1) {
      setPaneFlag(tmpFlag.slice());
    } else {
      resetFlag([], tmpFlag.length);
    }
    this.setState({
      curX: 0,
      curY: 0,
      shouldClose: false,
    });
    window.removeEventListener('mousemove', this.mouseMove, false);
    setDragFlag(false, -1);
    setCurIdx(-1);
    this.track = [];
  };

  // calculate div coordinates to detect mouse enter, return position index
  detectMouseEnter = (x, y, blockXY) => {
    for (let i = 0, len = blockXY.length; i < len; i += 1) {
      if (blockXY[i] && x >= blockXY[i].left &&
        x <= blockXY[i].right &&
        y >= blockXY[i].top &&
        y <= blockXY[i].bottom) {
        return i;
      }
    }
    return -1;
  };

  cancelDrag = () => {
    this.mouseUp();
    window.removeEventListener('scroll', this.cancelDrag, false);
    window.removeEventListener('mouseup', this.cancelDrag, false);
  };

  mouseMove = (evt) => {
    if (!this.mounted) {
      return;
    }
    const {
      dragFlag,
      index,
      blockXY,
      setCurIdx,
      setDragFlag,
      setTmpFlag,
      creEmpNm,
    } = this.props;
    if (creEmpNm) {
      return;
    }
    if (dragFlag.dragIdx !== index &&
      (evt.clientX !== this.state.startX ||
        evt.clientY !== this.state.startY)) {
      setDragFlag(true, index);
    }

    // if trigger scroll event while dragging(normally caused by dragging to border), stop dragging
    window.addEventListener('scroll', this.cancelDrag, false);
    window.addEventListener('mouseup', this.cancelDrag, false);

    this.setState({
      curX: evt.clientX - this.state.startX,
      curY: evt.clientY - this.state.startY,
    });

    const enterIdx = this.detectMouseEnter(evt.clientX, evt.clientY, blockXY);

    // track mouse trace, when mouse moves across one block right after another, switch them
    if (enterIdx > -1 && enterIdx !== this.track[0]) {
      setCurIdx(enterIdx);
      setTmpFlag(this.track[0], enterIdx);
      this.track[0] = enterIdx;
    }
  };

  handleDownloadXls = (tableData, title, itemType) => {
    const data = [];
    const valName = itemType === 'traffic' ? 'Traffic(bps)' :
      itemType === 'flow' ? 'Flow(Flow/s)' :
      itemType === 'packet' ? 'Packet(pps)' : '';
    // tableData.forEach((item) => {
    //   data.push({
    //     Dimension: item.name,
    //     Time: item.time,
    //     [valName]: item.value,
    //   });
    // });
    tableData.forEach((item) => {
      let el;
      if (item.domain) {
        el = {};
        for (let i = 0, len = item.domain.length; i < len; i++) {
          el[item.domain[i].type] = item.domain[i].type === 'server_esm' ?
            item.domain[i].id : item.domain[i].name;
        }
        el = {
          ...el,
          Time: item.time,
          [valName]: item.value
        };
      } else {
        el = {
          Dimension: item.name,
          Time: item.time,
          [valName]: item.value,
        };
      }
      data.push(el);
    });
    JSONToCSVConvertor(data, title, true);
  };

  handleDownloadPNG = (title) => {
    downloadPNG(this.div, title, `${title}.png`);
  };

  sendToExplorer = () => {
    const { flNo, side } = this.props;
    browserHistory.push(`/${side}/explorer/flow/${flNo}`);
  };

  render() {
    const {
      selectedItem,
      title,
      desc,
      flNo,
      flGrpNo,
      index,
      dragFlag,
      blockXY,
      tmpFlag,
      width,
      contentWidth,
      col,
      chartStatus,
      getBlockXY
    } = this.props;
    const numFlGrpNo = flGrpNo === '-1' ? 'unnamed' : parseInt(flGrpNo);
    const paneClass = classNames('flow-pane', {
      'dragging-pane': dragFlag.isDragging && dragFlag.dragIdx === index,
      'selected-pane': selectedItem.flGrpNo === numFlGrpNo && selectedItem.item === flNo && selectedItem.showFlag,
      'move-effect': dragFlag.isDragging && dragFlag.dragIdx !== index,
    });

    let topDiff = 0;
    let leftDiff = 0;
    let rect;
    let preRect;
    if (dragFlag.isDragging && index !== dragFlag.dragIdx) {
      const flagIdx = tmpFlag.indexOf(index);
      if (flagIdx !== index) {
        rect = blockXY[flagIdx];
        preRect = blockXY[index];
        if (preRect && rect) {
          topDiff = rect.top - preRect.top;
          leftDiff = rect.left - preRect.left;
        }
      }
    }
    const posStyle = {
      top: `${this.state.curY + topDiff}px`,
      left: `${this.state.curX + leftDiff}px`,
    };
    const sizeStyle = contentWidth === 0 ? {} : chartStatus.chartData
    ? { width: width - 2, minHeight: width * 3 / 7 + 36 }
    : { width: width - 2, height: width * 3 / 7 + 36 };
    const itemType = (chartStatus || {}).chartData ? chartStatus.chartData.itemType : '';

    return (
      <div
        className={paneClass}
        ref={c => this.pane = c}
        style={this.state.curX === undefined ? {} : posStyle}
      >

        <div
          className="ibox-title flow-title"
        >
          <h4
            className={classNames({ move: dragFlag.isDragging })}
            title={desc}
            onMouseDown={this.mouseDown}
            onMouseUp={this.mouseUp}
          >
            {title}
          </h4>
          {
            chartStatus && chartStatus.chartData ?
              <ChartOption
                forbidToFlow
                setType={this.setChartType}
                downloadXls={() => this.handleDownloadXls(chartStatus.tableData,
                  (chartStatus.chartData || {}).chartTitle, itemType)}
                downloadPNG={() => this.handleDownloadPNG((chartStatus.chartData || {}).chartTitle)}
                sendToExplorer={this.sendToExplorer}
              /> : ''
          }
        </div>
        <div className="flow-content" ref={c => this.div = c} style={sizeStyle}>
          <div className="block-ground">
            {
              !chartStatus || chartStatus.isFetching ?
                <div className="spinner">
                  <i className="fa fa-spinner" />
                </div> :
                chartStatus.chartData ?
                  <CommonChart
                    data={chartStatus.chartData.data}
                    type={this.state.type}
                    chartCnt={chartStatus.chartData.chartCnt}
                    chartNm={chartStatus.chartData.chartLineNm}
                    stat={chartStatus.chartData.stat}
                    getBlockXY={getBlockXY}
                    shouldClose={this.state.shouldClose}
                    flNo={flNo}
                    col={col}
                  /> : chartStatus.isFetching === false ?
                  (<h2 className="noData" style={{ paddingTop: width * 3 / 14 - 18 }}>
                    No Chart Data!
                  </h2>) : ''
            }
          </div>
        </div>
      </div>
    );
  }
}

FlowPane.propTypes = {
  index: PropTypes.number,
  curIdx: PropTypes.number,
  tmpFlag: PropTypes.array,
  setPaneFlag: PropTypes.func,
  setDragFlag: PropTypes.func,
  resetFlag: PropTypes.func,
  dragFlag: PropTypes.object,
  blockXY: PropTypes.array,
  setCurIdx: PropTypes.func,
  selectedItem: PropTypes.object,
  title: PropTypes.string,
  desc: PropTypes.string,
  flNo: PropTypes.number,
  // flGrpNo: PropTypes.number,
  setTmpFlag: PropTypes.func,
};
