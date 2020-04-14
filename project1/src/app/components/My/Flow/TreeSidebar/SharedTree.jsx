import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export default class SharedTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeTree: false,
    };
  }

  // componentWillReceiveProps(nProps) {
  //   const { group, clearSearchFlag } = this.props;
  //   if (nProps.searchFlag.grpNm === group.name && this.state.closeTree) {
  //     this.setState({
  //       closeTree: false,
  //     }, clearSearchFlag);
  //   }
  // }

  toggleTree = () => {
    this.setState({
      closeTree: !this.state.closeTree,
    });
  }

  selectGrp = () => {
    this.setState({
      closeTree: false,
    });
  };

  renderRoot = () => {
    const { searchKeyTxt } = this.props;
    const rootClass = classNames('tree-item', 'link-color', {
      searched: searchKeyTxt ? ('Shared').search(searchKeyTxt) !== -1 : ''
    });
    const fileClass = classNames('iconfont', 'icon', {
      'icon-folder-open1': !this.state.closeTree,
      'icon-folder': this.state.closeTree
    });
    return (
      <span>
        <a className={rootClass} onClick={this.selectGrp}>
          <i className={fileClass} />
          Shared
        </a>
      </span>
    );
  };

  renderLeaf = (idx, item) => {
    const { clickItem, setClickItem, selectGrp, initFlow,
      flow, fetchChart, fetchChartStatus } = this.props;
    const { searchKeyTxt } = this.props;
    const treenodeClass = classNames('tree-item', 'link-color', {
      'tree-clicked': clickItem.flGrpNo === item.flGrpNo && clickItem.item === clickItem.flGrpNo,
      searched: searchKeyTxt ? item.flGrpNm.search(searchKeyTxt) !== -1 : ''
    });
    const selectedClass = classNames({ 'share-selected': clickItem.flGrpNo === item.flGrpNo
      && clickItem.item === clickItem.flGrpNo });
    return (
      <span>
        <a
          className={treenodeClass}
          onClick={() => {
            setClickItem(item.flGrpNo, item.flGrpNo);
            selectGrp(item.flGrpNo);
            initFlow(item.flGrpNo);
            let isFetching = true;
            (flow[item.flGrpNo] || []).map((item) => {
              isFetching = ((fetchChartStatus || {})[item.flShrNo] || {}).isFetching;
            });
            if (!isFetching) {
              (flow[item.flGrpNo] || []).map(itm => fetchChart(itm.flNo));
            }
          }}
          title={item.flGrpNm}
        >
          <i className="iconfont icon icon-shared-folder" />
          <span className={selectedClass}>{item.flGrpNm}</span>
        </a>
        <span className="lightColor">
          {item.creEmpNm}
        </span>
      </span>
    );
  }

  render() {
    const { sharedFlGrp } = this.props;
    const rootClass = classNames('tree-node', 'no-marginleft', {
      'tree-open': !this.state.closeTree,
      'tree-closed': this.state.closeTree,
    });
    const sublistClass = classNames('tree-children', {
      hide: this.state.closeTree,
    });
    const list = sharedFlGrp;
    return (
      <li className={rootClass}>
        <i className="tree-icon tree-ocl" onClick={this.toggleTree} />
        {this.renderRoot()}
        <ul className={sublistClass}>
          {
            list.map((item, idx) =>
              (<li key={idx} className="tree-node tree-leaf">
                <i className="tree-icon tree-ocl" />
                {this.renderLeaf(idx, item)}
              </li>))
          }
        </ul>
        <div className="tail" />
      </li>
    );
  }
}

SharedTree.propTypes = {
  clickItem: PropTypes.object,
  setClickItem: PropTypes.func,
  sharedFlGrp: PropTypes.array,
};

