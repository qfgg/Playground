import React, { Component } from 'react';


export default class TextareaInput extends Component {
  componentDidUpdate(pProps) {
    const { focus, isOpen } = this.props;
    if (focus && isOpen && !pProps.isOpen) {
      this.input.focus();
    }
  }

  render() {
    const { placeholder, maxLength, inputArea, changeInputArea } = this.props;

    return (
      <textarea
        className="form-control"
        placeholder={placeholder}
        value={inputArea}
        onChange={changeInputArea}
        maxLength={maxLength}
      />
    );
  }
}
