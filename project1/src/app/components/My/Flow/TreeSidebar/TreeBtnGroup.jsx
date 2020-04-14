import React, { Component } from 'react';


export default class TreeBtnGroup extends Component {

  shareTo = (isShare, flGrpNo) => {
    const { openShare, initGrpSharedList } = this.props;
    initGrpSharedList(flGrpNo);
    openShare(isShare, flGrpNo);
  }

  render() {
    const { flGrpNo, delFlowGrp, setGrpNmEditFlag } = this.props;

    return (
      <div className="group-name">
        <a className="link-color" onClick={() => delFlowGrp(flGrpNo)}>
          <i className="fa fa-times" />
        </a>
        <a className="link-color" onClick={() => setGrpNmEditFlag(flGrpNo)}>
          <i className="fa fa-pencil" />
        </a>
        <a className="link-color" onClick={() => this.shareTo(true, flGrpNo)}>
          <i className="fa fa-share-alt" />
        </a>
      </div>
    );
  }
}
