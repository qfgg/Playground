import React, { Component } from 'react';
import classNames from 'classnames';


export default class TextInput extends Component {
  componentDidUpdate(pProps) {
    const { focus, isOpen } = this.props;
    if (focus && isOpen && !pProps.isOpen) {
      this.input.focus();
    }
  }

  render() {
    const {
      placeholder,
      handleKeyPress,
      inputText,
      changeInputText,
      maxLength,
      isError,
      errorInput
    } = this.props;
    const inputClass = classNames('form-control', {
      error: isError || (errorInput && errorInput.indexOf(inputText) !== -1)
    });

    return (
      <input
        type="text"
        className={inputClass}
        ref={c => this.input = c}
        maxLength={maxLength}
        value={inputText}
        onChange={changeInputText}
        placeholder={placeholder}
        onKeyPress={handleKeyPress}
      />
    );
  }
}
