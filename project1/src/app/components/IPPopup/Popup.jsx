import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isValidIP } from '../../helper';


export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      inputError: false,
    };
  }

  addSelect = (val) => {
    const { selectedItemList, addSelect } = this.props;
    if (val) {
      if (isValidIP(val) && !selectedItemList.find(itm => itm.id === val)) {
        addSelect({
          id: val,
          prefix: val,
          text: val,
        });
        this.setState({
          inputText: '',
        });
        if (this.state.inputError) {
          this.setState({
            inputError: false,
          });
        }
      } else {
        this.setState({
          inputError: true,
        });
      }
    }
  };

  handleKeyAddSelect = (evt) => {
    const val = evt.target.value;
    if (val && evt.charCode === 13) {
      this.addSelect(val);
    }
  };

  checkValidity = (evt) => {
    const val = evt.target.value.trim();
    const regExp = /^[\d./]*$/;

    if (regExp.test(val)) {
      this.setState({
        inputText: val,
      });
    }
  };

  render() {
    const {
      list,
      isOpen,
      onCancel,
      onClear,
      toggleSelect,
      toggleFavor,
      removeSelect,
      favorOnly,
    } = this.props;
    const { inputText, inputError } = this.state;
    const className = classNames('popup-wrap', {
      hide: !isOpen,
    });
    const inputClass = classNames('form-control', { error: inputError });

    return (
      <div className={className}>
        {
          list.map((item, idx) => (
            <div
              key={idx}
              className={classNames('input-wrap', {
                favored: item.favored,
                selected: item.selected,
              })}
            >
              <input
                type="text"
                className="form-control"
                value={item.text}
                onChange={() => {}}
              />
              {
                favorOnly ?
                  <a className="link-color" onClick={() => removeSelect(item)}>
                    <i className="fa fa-times" />
                  </a> :
                  <a className="link-color" onClick={() => toggleSelect(item)}>
                    <i className="fa toggle-sel" />
                  </a>
              }
              {
                favorOnly ? '' :
                <a className="link-color" onClick={() => toggleFavor(item)}>
                  <i className="fa toggle-fav" />
                </a>
              }
            </div>
          ))
        }
        <div className="input-wrap">
          <input
            type="text"
            className={inputClass}
            placeholder="ip, ip/prefix"
            onKeyPress={this.handleKeyAddSelect}
            value={inputText}
            onChange={this.checkValidity}
          />
          <a
            className="link-color"
            onClick={() => this.addSelect(inputText)}
          >
            <i className="fa fa-plus" />
          </a>
        </div>
        <div className="btngrp">
          <button
            type="button"
            className="btn btn-info btn-xs btn-clear"
            onClick={onClear}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn-info btn-xs btn-close"
            onClick={onCancel}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}

Popup.propTypes = {
  selectedItemList: PropTypes.array,
  addSelect: PropTypes.func,
  list: PropTypes.array,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  toggleSelect: PropTypes.func,
  toggleFavor: PropTypes.func,
  removeSelect: PropTypes.func,
  favorOnly: PropTypes.bool,
};
