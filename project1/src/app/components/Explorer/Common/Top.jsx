import React, { Component } from 'react';
import Radio from '../../Common/Radio';


export default class Top extends Component {
  checkValidity = (val) => {
    if (!val) {
      return true;
    }
    const regExp = /^(30|(2\d)|(1\d)|[1-9])$/;
    return regExp.test(val);
  };

  handleChange = (evt) => {
    const { top } = this.props;
    if (evt.target.value !== top.limit && this.checkValidity(evt.target.value)) {
      this.props.onTop(evt.target.value, undefined);
    }
  }

  handleCheck = (evt, val) => {
    this.props.onTop(undefined, val);
  }

  handleBlur = (evt) => {
    if (!evt.target.value) {
      this.props.onTop('10', undefined);
    }
  }

  render() {
    const { list, selected, top } = this.props;

    return (
      <div className="top">
        <h3 className="caption-fontsize top-inline">Top</h3>
        <span>(Max 30)</span>
        <br />
        <input
          type="text"
          className="form-control"
          value={top.limit}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        {list.map((item, idx) =>
          (<Radio
            name="Top"
            className="radio-inline"
            key={idx}
            id={item.text}
            text={item.text}
            value={item.value}
            checked={selected === item.value}
            onCheck={evt => this.handleCheck(evt, item.value)}
          />))}
      </div>
    );
  }
}
