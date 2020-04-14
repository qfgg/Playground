import React, { Component } from 'react';
import blacklist from 'blacklist';
import { Scrollbars } from 'react-custom-scrollbars';
import MnTree from './MnTree';


export default class MenuBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRootCheck: 'N',
      checkRec: {},
      partFlag: {},
      isOpen: {
        0: true
      }
    };
  }

  componentDidMount() {
    this.loadTree();
  }

  checkRoot = (sign) => {
    this.setState({
      isRootCheck: sign
    });
  };

  setOpen = (mnNo, isOpen) => {
    this.setState(preState => ({
      isOpen: {
        ...preState.isOpen,
        [mnNo]: isOpen
      }
    }));
  };

  loadTree = () => {
    const { findMenu, focusedRow } = this.props;

    findMenu(focusedRow, (list, flat) => {
      if (list && Array.isArray(list) && list.length > 0) {
        if (list.every(item => item.checkedYn === 'N')) {
          this.checkRoot('N');
        } else {
          this.checkRoot('Y');
        }
        for (const key in flat) {
          if (flat[key].sub) {
            this.setOpen(flat[key].mnNo, true);
          }
        }
        this.clearPart();
        this.updatePart(list);
      }
    });
  };

  // search for partly selected nodes
  updatePart = (list) => {
    const { checkRec } = this.state;

    if (list && Array.isArray(list)) {
      // if list items are leaves of the tree
      if (list.every(item => !item.sub)) {
        let hasY;
        let hasN;
        for (let i = 0, len = list.length; i < len; i++) {
          if (checkRec[list[i].mnNo] === 'Y' ||
            (checkRec[list[i].mnNo] === undefined && list[i].checkedYn === 'Y')) {
            hasY = true;
          } else if (checkRec[list[i].mnNo] === 'N' ||
            (checkRec[list[i].mnNo] === undefined && list[i].checkedYn === 'N')) {
            hasN = true;
          }
        }
        if (hasY && hasN) { // partly selected
          this.setPart(list[0].prntMnNo);
          return true;
        }
        return false;
      }
      // otherwise, check its sub-tree recursively
      let i = 0;
      let hasPart = false;
      const len = list.length;
      for (i = 0; i < len; i++) {
        if (this.updatePart(list[i].sub)) {
          hasPart = true;
        }
      }
      // if one list item is partly selected, its parent must be partly selected
      if (hasPart === true) {
        this.setPart(list[0].prntMnNo);
      } else {
        let hasY;
        let hasN;
        for (let i = 0, len = list.length; i < len; i++) {
          if (checkRec[list[i].mnNo] === 'Y' ||
          (checkRec[list[i].mnNo] === undefined && list[i].checkedYn === 'Y')) {
            hasY = true;
          } else if (checkRec[list[i].mnNo] === 'N' ||
          (checkRec[list[i].mnNo] === undefined && list[i].checkedYn === 'N')) {
            hasN = true;
          }
        }
        if (hasY && hasN) {
          this.setPart(list[0].prntMnNo);
        }
      }
    }
  };

  clearCheck = () => {
    const { menuList } = this.props;

    if (menuList && menuList.res && Array.isArray(menuList.res) &&
      menuList.res.length > 0) {
      if (menuList.res.every(item => item.checkedYn === 'N')) {
        this.checkRoot('N');
      } else {
        this.checkRoot('Y');
      }
    }
    this.setState({
      checkRec: {}
    });
    setTimeout(() => {
      this.clearPart();
      this.updatePart(menuList.res);
    });
  };

  clearPart = () => {
    this.setState({
      partFlag: {}
    });
  };

  setCheck = (mnNo, sign) => {
    this.setState(preState => ({
      checkRec: {
        ...preState.checkRec,
        [mnNo]: sign
      }
    }));
  };

  delCheck = (mnNo) => {
    this.setState(preState => ({
      checkRec: blacklist(preState.checkRec, mnNo.toString())
    }));
  };

  setPart = (mnNo) => {
    this.setState(preState => ({
      partFlag: {
        ...preState.partFlag,
        [mnNo]: true
      }
    }));
  };

  delPart = (mnNo) => {
    this.setState(preState => ({
      partFlag: blacklist(preState.partFlag, mnNo.toString())
    }));
  };

  componentDidUpdate(preProps) {
    const { focusedRow } = this.props;
    if (focusedRow !== preProps.focusedRow) {
      this.clearCheck();
      this.loadTree();
    }
  }

  alterParents = (sign, ptNo) => {
    const { flatMenu } = this.props;

    if (ptNo !== undefined && flatMenu[ptNo]) {
      this.alterNode(sign, flatMenu[ptNo]);
      if (ptNo !== 0) {
        const ps = this.getNextParentState(sign, flatMenu[ptNo]);
        this.alterParents(ps, flatMenu[ptNo].prntMnNo);
      }
    }
  };

  alterChildren = (sign, curNo) => {
    const { flatMenu } = this.props;

    if (flatMenu[curNo] && flatMenu[curNo].sub &&
      Array.isArray(flatMenu[curNo].sub) && flatMenu[curNo].sub.length > 0) {
      for (let i = 0; i < flatMenu[curNo].sub.length; i++) {
        if (flatMenu[curNo].sub[i].authYn === 'Y') {
          this.alterNode(sign, flatMenu[curNo].sub[i]);
          this.alterChildren(sign, flatMenu[curNo].sub[i].mnNo);
        }
      }
    }
  };

  alterNode = (sign, curNode) => {
    const { checkRec } = this.state;

    if (curNode.mnNo === 0) { // if root node, change its checkedYn directly
      if (sign !== curNode.checkedYn) {
        this.checkRoot(sign);
      }
    } else { // otherwise, change or delete check record
      const preState = checkRec[curNode.mnNo] || curNode.checkedYn;
      if (preState !== sign) {
        if (checkRec[curNode.mnNo] !== undefined) {
          this.delCheck(curNode.mnNo);
        } else {
          this.setCheck(curNode.mnNo, sign);
        }
      }
    }
  };

  // search sub-tree nodes and check each nodes with fn
  searchTree = (curNode, fn) => {
    if (curNode.sub && Array.isArray(curNode.sub) && curNode.sub.length > 0) {
      let nodes = [...curNode.sub];

      while (nodes.length > 0) {
        const cur = nodes.shift();
        if (fn && fn instanceof Function && fn(cur)) {
          return true;
        }
        if (cur.sub) {
          nodes = [...nodes, ...cur.sub];
        }
      }
    }
    return false;
  };

  // get current node's and sub-tree's next state
  getNextState = (curNode) => {
    const { checkRec, partFlag } = this.state;
    const ns = {};

    if (checkRec[curNode.mnNo] === 'Y' ||
      (checkRec[curNode.mnNo] === undefined && curNode.checkedYn === 'Y')) {
      if (partFlag[curNode.mnNo]) { // if current node is partly selected
        // if its sub-tree contains an unchecked normal node
        if (this.searchTree(curNode, node => node.authYn === 'Y' &&
          (checkRec[node.mnNo] === 'N' ||
          (checkRec[node.mnNo] === undefined && node.checkedYn === 'N')))) {
          ns.state = 'Y';
          ns.subState = 'Y';
        } else { // only unchecked disabled node exists
          ns.state = 'N';
          ns.subState = 'N';
        }
      } else { // if current node is fully selected
        // if its sub-tree contains a disabled node, its next state is still 'Y'
        if (this.searchTree(curNode, node => node.authYn === 'N')) {
          ns.state = 'Y';
        } else { // otherwise, reverse it to 'N'
          ns.state = 'N';
        }
        ns.subState = 'N';
      }
    } else if (checkRec[curNode.mnNo] === 'N' ||
      (checkRec[curNode.mnNo] === undefined && curNode.checkedYn === 'N')) {
      ns.state = 'Y';
      ns.subState = 'Y';
    }
    return ns;
  };

  // get parent nodes' next state
  getNextParentState = (state, curNode) => {
    const { checkRec } = this.state;
    const { flatMenu } = this.props;
    const preState = checkRec[curNode.mnNo] || curNode.checkedYn;
    let ns = curNode.prntMnNo !== undefined ?
      checkRec[curNode.prntMnNo] || flatMenu[curNode.prntMnNo].checkedYn : undefined;

    if (curNode.mnNo !== 0 && state !== preState) {
      const siblings = flatMenu[curNode.prntMnNo].sub;
      let isNone = true;
      for (let i = 0, len = siblings.length; i < len; i++) {
        if (siblings[i].mnNo !== curNode.mnNo &&
          (checkRec[siblings[i].mnNo] === 'Y' ||
          (checkRec[siblings[i].mnNo] === undefined &&
          siblings[i].checkedYn === 'Y'))) {
          isNone = false;
        }
      }
      // none of the siblings is checked
      if (isNone) {
        ns = state;
      }
    }
    return ns;
  };

  editCheckbox = (curNode) => {
    const { menuList } = this.props;
    // determine next state of current node, chilren, parents
    const ns = this.getNextState(curNode);
    let ps;
    if (curNode.mnNo !== 0) {
      ps = this.getNextParentState(ns.state, curNode);
    }

    // alter current node, chilren, parents
    this.alterNode(ns.state, curNode);
    this.alterChildren(ns.subState, curNode.mnNo);
    if (curNode.mnNo !== 0) {
      this.alterParents(ps, curNode.prntMnNo);
    }
    // refresh partly selected states
    setTimeout(() => {
      this.clearPart();
      this.updatePart(menuList.res);
    });
  };

  saveCheck = () => {
    const { checkRec } = this.state;
    const { focusedRow, saveMenuAthor } = this.props;
    const payload = [];

    for (const key in checkRec) {
      payload.push({ mnNo: parseInt(key, 10), checkedYn: checkRec[key] });
    }
    saveMenuAthor(focusedRow, payload, this.loadTree);
  };

  render() {
    const { checkRec, partFlag, isRootCheck, isOpen } = this.state;
    const {
      findMenu,
      menuList,
      focusedRow,
      saveMnStatus
    } = this.props;

    return (
      <div className="menu-board">
        <Scrollbars
          style={{ height: 535 }}
          autoHide
          autoHideTimeout={400}
        >
          <div className="mntree">
            <MnTree
              root={[{
                authYn: 'Y',
                mnNm: 'All',
                mnNo: 0,
                sub: menuList.res,
                checkedYn: isRootCheck
              }]}
              isLoading={menuList && menuList.isFetching}
              checkRec={checkRec}
              editCheckbox={this.editCheckbox}
              checkRoot={this.checkRoot}
              partFlag={partFlag}
              focusedRow={focusedRow}
              findMenu={findMenu}
              isOpen={isOpen}
              setOpen={this.setOpen}
            />
          </div>
        </Scrollbars>
        <div className="btngrp">
          <button className="add-btn" onClick={this.clearCheck}>Clear</button>
          <button className="add-btn" onClick={this.saveCheck}>
            {
              saveMnStatus && saveMnStatus.isSaving ?
                (<div className="spinner">
                  <i className="fa fa-spinner" />
                </div>) : 'Save'
            }
          </button>
        </div>
      </div>
    );
  }
}
