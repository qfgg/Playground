import React, { Component } from 'react';
import './index.less';


export default class InputComponent extends Component {
  onClickHandler = () => {
    this.inp.value = '';
  }

  onChangeHandler = () => {
    this.props.getInputVal(this.inp.name, this.inp.value);
  }

  render() {
    const { name, type, placeholder, onKeyPress } = this.props;

    return (
      <div className="inp-txt">
        <input
          ref={c => this.inp = c}
          name={name}
          type={type}
          placeholder={placeholder}
          style={{ imeMode: 'disabled' }}
          tabIndex="2"
          onChange={this.onChangeHandler}
          onKeyPress={onKeyPress}
        />
        <a
          className="txt-clear"
          style={{ cursor: 'hand' }}
          onClick={this.onClickHandler}
        >
          <span className="blind" />
        </a>
      </div>
    );
  }
}
