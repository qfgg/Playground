import React, { Component } from 'react';
import Dropdown from '../Common/Dropdown';


export default class DropdownInput extends Component {
  render() {
    const { curSel, dropList, setCurSel } = this.props;

    return (
      <Dropdown curSelect={curSel ? curSel.text : ''}>
        {
          (dropList || []).map((item, idx) =>
            (<li
              key={idx}
              className="option"
              onClick={() => setCurSel(item)}
            >
              <a>{item.text}</a>
            </li>))
        }
      </Dropdown>
    );
  }
}
