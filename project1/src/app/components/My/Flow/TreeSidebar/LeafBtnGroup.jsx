import React, { Component } from 'react';


export default class LeafBtnGroup extends Component {
  render() {
    const {
      flGrpNo,
      flNo,
      delFlow,
      setNodeNmEditFlag,
      copyFlow,
      newListDel,
      newListCopy
    } = this.props;
    return (
      <div className="leaf-name">
        <a className="link-color" onClick={() => delFlow(flNo, flGrpNo, newListDel)}>
          <i className="fa fa-times" />
        </a>
        <a className="link-color" onClick={() => setNodeNmEditFlag(flGrpNo, flNo)}>
          <i className="fa fa-pencil" />
        </a>
        <a className="link-color" onClick={() => copyFlow(flGrpNo, flNo, newListCopy)}>
          <i className="fa fa-copy" />
        </a>
      </div>
    );
  }
}
