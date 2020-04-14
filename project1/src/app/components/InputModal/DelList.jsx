import React, { Component } from 'react';


export default class DelList extends Component {

  render() {
    const { delList, delGrpSharedList } = this.props;

    return (
      <ul className="share-list">
        {
          (delList || []).map((item, idx) =>
            (<li key={idx}>
              {item.rcpntNm}({item.rcpntNo})
              <a onClick={() => delGrpSharedList(item.rcpntNo, item.flGrpNo)}>
                <i className="fa fa-times" />
              </a>
            </li>))
        }
      </ul>
    );
  }
}
