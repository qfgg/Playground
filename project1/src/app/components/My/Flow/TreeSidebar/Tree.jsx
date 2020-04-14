import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TreeBtnGroup from './TreeBtnGroup';
import LeafBtnGroup from './LeafBtnGroup';


export default class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeTree: false,
    };
    this.mounted = false;
  }

  toggleTree = () => {
    this.setState({
      closeTree: !this.state.closeTree,
    });
  };

  selectGrp = (flGrpNo) => {
    const { selectGrp, initFlow, flow, fetchChart, fetchChartStatus } = this.props;
    initFlow(flGrpNo);
    selectGrp(flGrpNo);
    let isFetching = true;
    (flow[flGrpNo] || []).map((item) => {
      isFetching = ((fetchChartStatus || {})[item.flNo] || {}).isFetching;
    });
    if (!isFetching) {
      flow[flGrpNo].map(item => fetchChart(item.flNo));
    }
    this.setState({
      closeTree: false,
    });
  };

  dragStart = (evt, idx) => {
    const { flow, flGrpNo } = this.props;
    evt = evt || window.event;
    evt.dataTransfer.setData('Text',
      JSON.stringify({ flow: flow[flGrpNo], flGrpNo, idx }));
  };

  dragOver = (evt) => {
    evt.preventDefault();
  };

  dragOverTail = (evt) => {
    evt.preventDefault();
  };

  dragOverRoot = (evt) => {
    evt.preventDefault();
  };

  dragEnter = (evt, flGrpNo, idx) => {
    const { dragOverRec, setDragOverRec, setDragOverTailFlag } = this.props;
    if (dragOverRec.idx !== idx || dragOverRec.flGrpNo !== flGrpNo) {
      setDragOverRec(flGrpNo, idx);
      setDragOverTailFlag('', -1);
    }
  };

  dragEnterTail = (evt, flGrpNo, idx) => {
    const { dragOverTailFlag, setDragOverTailFlag, setDragOverRec } = this.props;
    if (dragOverTailFlag.idx !== idx || dragOverTailFlag.flGrpNo !== flGrpNo) {
      setDragOverTailFlag(flGrpNo, idx);
      setDragOverRec('', -1);
    }
  };

  dragEnterRoot = () => {
    const { setDragOverTailFlag, setDragOverRec } = this.props;
    setDragOverTailFlag('', -1);
    setDragOverRec('', -1);
  };

  dragEnd = () => {
    const { setDragOverTailFlag, setDragOverRec } = this.props;
    setDragOverRec('', -1);
    setDragOverTailFlag('', -1);
  };

  // if drop on the same tree where the dragging node is from, change node order.
  // if drop on different tree except shared tree, move node to another tree.
  drop = (evt, idx) => {
    const { setDragOverRec, flow, flGrpNo, moveFlow, orderPageFlow } = this.props;
    setDragOverRec('', -1);
    const data = JSON.parse(evt.dataTransfer.getData('Text'));
    const flGrpNoInitial = data.flGrpNo;

    const flNo = flow[flGrpNoInitial][data.idx].flNo;
    const listTarget = flow[flGrpNo];
    const listInit = flow[flGrpNoInitial];

    let newOrder = {};
    let newListMoveInit = {};
    let newListMoveTarget = {};
    if (flGrpNo === flGrpNoInitial) {
      const front = listInit.slice(0, idx);
      const end = listInit.slice(idx);
      if (data.idx < idx) {
        front.splice(data.idx, 1);
        newOrder = {
          flNo,
          flGrpNo,
          order: idx,
        };
      } else {
        end.splice(data.idx - idx, 1);
        newOrder = {
          flNo,
          flGrpNo,
          order: idx + 1,
        };
      }
      const list = front.concat(listInit[data.idx], end);
      for (let i = 0; i < list.length; i += 1) {
        newListMoveInit = { ...newListMoveInit, [list[i].flNo]: i + 1 };
      }
      orderPageFlow(flGrpNo, list);
    } else {
      newOrder = {
        flNo,
        flGrpNo,
        order: idx + 1,
      };
      const moveNode = { ...listInit[data.idx], flGrpNo: flGrpNo.toString() };
      listInit.splice(data.idx, 1);
      listTarget.splice(idx, 0, moveNode);
      for (let i = 0; i < listInit.length; i += 1) {
        newListMoveInit = { ...newListMoveInit, [listInit[i].flNo]: i + 1 };
      }
      for (let j = 0; j < listTarget.length; j += 1) {
        newListMoveTarget = { ...newListMoveTarget, [listTarget[j].flNo]: j + 1 };
      }
      orderPageFlow(flGrpNoInitial, listInit);
      orderPageFlow(flGrpNo, listTarget);
    }
    moveFlow(flNo, flGrpNoInitial, newOrder, newListMoveInit, newListMoveTarget);
  };


  dropTail = (evt) => {
    const { flow, flGrpNo, setDragOverTailFlag, moveFlow, orderPageFlow } = this.props;
    setDragOverTailFlag('', -1);
    const data = JSON.parse(evt.dataTransfer.getData('Text'));
    if (data.flGrpNo === flGrpNo) {
      const flNo = flow[flGrpNo][data.idx].flNo;
      if (data.idx !== flow[flGrpNo].length - 1) {
        const moveNode = flow[flGrpNo].splice(data.idx, 1)[0];
        let newListMoveInit = {};
        const newOrder = {
          flNo,
          flGrpNo,
          order: flow[flGrpNo].length + 1,
        };
        flow[flGrpNo].push(moveNode);
        for (let i = 0; i < flow[flGrpNo].length; i += 1) {
          newListMoveInit = { ...newListMoveInit, [flow[flGrpNo][i].flNo]: i + 1 };
        }
        orderPageFlow(flGrpNo, flow[flGrpNo]);
        moveFlow(flNo, flGrpNo, newOrder, newListMoveInit);
      }
    } else {
      const flNo = flow[data.flGrpNo][data.idx].flNo;
      const flGrpNoInitial = data.flGrpNo;
      const moveNode = { ...flow[data.flGrpNo][data.idx], flGrpNo: flGrpNo.toString() };
      flow[data.flGrpNo].splice(data.idx, 1);
      const listInit = flow[data.flGrpNo];
      const listTarget = flow[flGrpNo].concat(moveNode);
      let newListMoveInit = {};
      let newListMoveTarget = {};
      const newOrder = {
        flNo,
        flGrpNo,
        order: flow[flGrpNo].length + 1,
      };
      for (let i = 0; i < listInit.length; i += 1) {
        newListMoveInit = { ...newListMoveInit, [listInit[i].flNo]: i + 1 };
      }
      for (let j = 0; j < listTarget.length; j += 1) {
        newListMoveTarget = { ...newListMoveTarget, [listTarget[j].flNo]: j + 1 };
      }
      orderPageFlow(flGrpNoInitial, listInit);
      orderPageFlow(flGrpNo, listTarget);
      moveFlow(flNo, flGrpNoInitial, newOrder, newListMoveInit, newListMoveTarget);
    }
  };

  dropRoot = (evt) => {
    const { flow, flGrpNo, moveFlow, orderPageFlow } = this.props;
    const data = JSON.parse(evt.dataTransfer.getData('Text'));
    if (data.flGrpNo !== flGrpNo) {
      const flNo = flow[data.flGrpNo][data.idx].flNo;
      const flGrpNoInitial = data.flGrpNo;
      const moveNode = { ...flow[data.flGrpNo][data.idx], flGrpNo: flGrpNo.toString() };
      flow[data.flGrpNo].splice(data.idx, 1);
      const listInit = flow[data.flGrpNo];
      flow[flGrpNo].unshift(moveNode);
      const listTarget = flow[flGrpNo];
      let newListMoveInit = {};
      let newListMoveTarget = {};
      const newOrder = {
        flNo,
        flGrpNo,
        order: 0,
      };
      for (let i = 0; i < listInit.length; i += 1) {
        newListMoveInit = { ...newListMoveInit, [listInit[i].flNo]: i + 1 };
      }
      for (let j = 0; j < listTarget.length; j += 1) {
        newListMoveTarget = { ...newListMoveTarget, [listTarget[j].flNo]: j + 1 };
      }
      orderPageFlow(flGrpNoInitial, listInit);
      orderPageFlow(flGrpNo, listTarget);
      moveFlow(flNo, flGrpNoInitial, newOrder, newListMoveInit, newListMoveTarget);
    }
  };

  componentWillMount() {
    const { initFlow, flGrpNo } = this.props;
    initFlow(flGrpNo);
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidUpdate(preProps) {
    const { grpNmEditFlag, flGrpNo, nodeNmEditFlag } = this.props;
    if (this.groupname) {
      document.addEventListener('click', this.handleQuitGrp, false);
    } else {
      document.removeEventListener('click', this.handleQuitGrp, false);
    }
    if (this.itemNm) {
      document.addEventListener('click', this.handleQuitFlow, false);
    } else {
      document.removeEventListener('click', this.handleQuitFlow, false);
    }
    if (preProps.grpNmEditFlag.flGrpNo !== grpNmEditFlag.flGrpNo &&
      grpNmEditFlag.flGrpNo === flGrpNo) {
      this.groupname.focus();
    }
    if ((preProps.nodeNmEditFlag.flGrpNo !== flGrpNo ||
      preProps.nodeNmEditFlag.flNo !== nodeNmEditFlag.flNo) &&
      this.itemNm) {
      this.itemNm.focus();
    }
  }

  handleRootKeyPress = (evt, flGrpNm, flGrpNo) => {
    const { updFlowGrp, setGrpNmEditFlag } = this.props;
    if (evt.target.value && evt.charCode === 13) {
      if (evt.target.value !== flGrpNm) {
        updFlowGrp(flGrpNo, { flGrpNo, flGrpNm: evt.target.value });
      }
      setGrpNmEditFlag('');
    }
  };

  handleItemKeyPress = (evt, item) => {
    const { updFlow, setNodeNmEditFlag } = this.props;
    if (evt.target.value && evt.charCode === 13) {
      if (evt.target.value !== item.flNm) {
        const flNo = item.flNo;
        const flGrpNo = item.flGrpNo === '-1' ? 'unnamed' : item.flGrpNo;
        updFlow(flNo, flGrpNo, { flNo, flNm: evt.target.value, flGrpNo });
      }
      setNodeNmEditFlag('', '');
    }
  };

  handleQuitGrp = (evt) => {
    const { setGrpNmEditFlag } = this.props;
    if (this.mounted && ReactDOM.findDOMNode(this.groupname) &&
      !ReactDOM.findDOMNode(this.groupname).contains(evt.target)) {
      setGrpNmEditFlag('');
    }
  };

  handleQuitFlow = (evt) => {
    const { setNodeNmEditFlag } = this.props;
    if (this.mounted && ReactDOM.findDOMNode(this.itemNm) &&
      !ReactDOM.findDOMNode(this.itemNm).contains(evt.target)) {
      setNodeNmEditFlag('', '');
    }
  };

  handleQuit = (evt, type) => {
    const { setGrpNmEditFlag, setNodeNmEditFlag } = this.props;
    if (evt.keyCode === 27) {
      if (type === 'root') {
        setGrpNmEditFlag('');
      } else if (type === 'node') {
        setNodeNmEditFlag('', '');
      }
    }
  };

  renderRoot = () => {
    const {
      curGrp,
      flGrpNo,
      flGrpNm,
      grpNmEditFlag,
      delFlowGrp,
      setGrpNmEditFlag,
      clickItem,
      setClickItem,
      searchKeyTxt,
      openShare,
      initGrpSharedList
    } = this.props;

    const treenodeClass = classNames('tree-item', 'link-color', {
      'tree-clicked': clickItem.item === clickItem.flGrpNo ?
        clickItem.flGrpNo === flGrpNo : '',
      'selected-group': flGrpNo === curGrp,
      searched: searchKeyTxt ? flGrpNm.search(searchKeyTxt) !== -1 : ''
    });
    const fileClass = classNames('iconfont', 'icon', {
      'icon-folder': this.state.closeTree,
      'icon-folder-open1': !this.state.closeTree,
    });
    return flGrpNo === grpNmEditFlag.flGrpNo ? (
      <span>
        <a
          className="tree-item"
        >
          <i className={fileClass} />
          <input
            ref={c => this.groupname = c}
            type="text"
            className="form-control"
            defaultValue={flGrpNm}
            onFocus={this.handleFocus}
            onKeyPress={evt => this.handleRootKeyPress(evt, flGrpNm, flGrpNo)}
            onKeyDown={evt => this.handleQuit(evt, 'root')}
            onClick={evt => this.handleQuitGrp(evt, flGrpNo)}
            maxLength="75"
          />
        </a>
      </span>
    ) : (
      <span>
        <a
          className={treenodeClass}
          onClick={() => {
            this.selectGrp(flGrpNo || 'unnamed');
            setClickItem(flGrpNo || 'unnamed', flGrpNo);
          }}
          onDragOver={this.dragOverRoot}
          onDragEnter={evt => this.dragEnterRoot(evt)}
          onDrop={evt => this.dropRoot(evt)}
        >
          <i className={fileClass} />
          <span>{flGrpNm}</span>
        </a>
        {
          flGrpNo === 'unnamed' ? '' :
          <TreeBtnGroup
            flGrpNo={flGrpNo}
            flGrpNm={flGrpNm}
            delFlowGrp={delFlowGrp}
            setGrpNmEditFlag={setGrpNmEditFlag}
            openShare={openShare}
            initGrpSharedList={initGrpSharedList}
          />
        }
      </span>
    );
  };

  renderLeaf = (idx, item, list) => {
    const {
      dragOverRec,
      delFlow,
      copyFlow,
      dragOverTailFlag,
      nodeNmEditFlag,
      setNodeNmEditFlag,
      clickItem,
      setClickItem,
      searchKeyTxt
    } = this.props;
    let newListDel = {};
    const itemFlGrpNo = item.flGrpNo === '-1' ? 'unnamed' : parseInt(item.flGrpNo);

    if (list) {
      for (let i = 0; i < idx; i += 1) {
        newListDel = { ...newListDel, [list[i].flNo]: i + 1 };
      }
      for (let j = idx + 1; j < list.length; j += 1) {
        newListDel = { ...newListDel, [list[j].flNo]: j };
      }
    }
    let newListCopy = {};
    if (list) {
      for (let i = 0; i < idx; i += 1) {
        newListCopy = { ...newListCopy, [list[i].flNo]: i + 1 };
      }
      for (let j = idx + 1; j < list.length; j += 1) {
        newListCopy = { ...newListCopy, [list[j].flNo]: j + 2 };
      }
    }

    return itemFlGrpNo === nodeNmEditFlag.flGrpNo && item.flNo === nodeNmEditFlag.flNo ? (
      <span>
        <a className="tree-item">
          <i className="fa tree-themeicon file-node" />
          <input
            ref={c => this.itemNm = c}
            type="text"
            className="form-control"
            defaultValue={item.flNm}
            onFocus={this.handleFocus}
            onKeyPress={evt => this.handleItemKeyPress(evt, item)}
            onKeyDown={evt => this.handleQuit(evt, 'node')}
            onClick={evt => this.handleQuitFlow(evt)}
            maxLength="75"
          />
        </a>
      </span>
      ) : (
        <span>
          <a
            className={
              classNames('tree-item', 'link-color', {
                topline: dragOverRec.flGrpNo === itemFlGrpNo.toString() &&
                  dragOverRec.idx === idx,
                bottomline: dragOverTailFlag.flGrpNo === itemFlGrpNo &&
                  dragOverTailFlag.idx === idx,
                'tree-clicked': clickItem.flGrpNo === itemFlGrpNo &&
                  clickItem.item === item.flNo,
                searched: searchKeyTxt ? item.flNm.indexOf(searchKeyTxt) !== -1 : ''
              })
            }
            onClick={() => {
              this.selectGrp(itemFlGrpNo || 'unnamed');
              setClickItem(itemFlGrpNo || 'unnamed', item.flNo);
            }}
          >
            <i className="fa tree-themeicon file-node" />
            <span title={item.flNm}>{item.flNm}</span>
          </a>
          <LeafBtnGroup
            flGrpNo={itemFlGrpNo}
            flNo={item.flNo}
            newListDel={newListDel}
            newListCopy={newListCopy}
            delFlow={delFlow}
            setNodeNmEditFlag={setNodeNmEditFlag}
            copyFlow={copyFlow}
          />
        </span>
    );
  }

  handleFocus = (evt) => {
    evt.target.select();
  }

  render() {
    const { flow, flGrpNo } = this.props;
    const rootClass = classNames('tree-node', 'no-marginleft', {
      'tree-open': !this.state.closeTree,
      'tree-closed': this.state.closeTree,
    });
    const sublistClass = classNames('tree-children', {
      hide: this.state.closeTree,
    });
    const list = flow[flGrpNo] ? flow[flGrpNo] : [];

    return (
      <li
        className={rootClass}
      >
        <i
          className="tree-icon tree-ocl"
          onClick={() => {
            this.toggleTree();
          }}
        />
        {this.renderRoot()}
        <ul className={sublistClass}>
          {
            list.map((item, idx) => (
              <li
                key={idx}
                className="tree-node tree-leaf"
                onDragOver={this.dragOver}
                onDragEnter={evt => this.dragEnter(evt, item.flGrpNo, idx)}
                onDrop={evt => this.drop(evt, idx)}
                onDragEnd={this.dragEnd}
                draggable="true"
                onDragStart={evt => this.dragStart(evt, idx)}
              >
                <i className="tree-icon tree-ocl" />
                {this.renderLeaf(idx, item, list)}
              </li>))
          }
        </ul>
        <div
          className="tail"
          onDragOver={this.dragOverTail}
          onDragEnter={evt => this.dragEnterTail(evt, flGrpNo, list.length - 1)}
          onDrop={evt => this.dropTail(evt)}
        />
      </li>
    );
  }
}

Tree.propTypes = {
  selectGrp: PropTypes.func,
  flow: PropTypes.object,
  // flGrpNo: PropTypes.number,
  dragOverRec: PropTypes.object,
  setDragOverRec: PropTypes.func,
  setDragOverTailFlag: PropTypes.func,
  dragOverTailFlag: PropTypes.object,
  setClickItem: PropTypes.func,
  clickItem: PropTypes.object,
  setNodeNmEditFlag: PropTypes.func,
  nodeNmEditFlag: PropTypes.object,
  copyFlow: PropTypes.func,
  delFlow: PropTypes.func,
  openShare: PropTypes.func,
  delFlowGrp: PropTypes.func,
  // curGrp: PropTypes.number,
  updFlowGrp: PropTypes.func,
  initFlow: PropTypes.func,
  flGrpNm: PropTypes.string,
  grpNmEditFlag: PropTypes.object,
  setGrpNmEditFlag: PropTypes.func,
  updFlow: PropTypes.func,
};

