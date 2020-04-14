import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';


export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      check: false,
      dropList: [],
      curSel: null,
      inputArea: '',
    };
  }

  componentWillReceiveProps(nProps) {
    if (this.props.isOpen && !nProps.isOpen) {
      this.setState({
        inputText: '',
        check: false,
        curSel: this.state.dropList ? this.state.dropList[0] : null,
        inputArea: '',
      });
    }
  }

  changeInputText = (evt) => {
    if (this.dialog) {
      this.setState({
        inputText: evt.target.value,
      });
    }
  };

  toggleCheck = () => {
    if (this.dialog) {
      this.setState({
        check: !this.state.check,
      });
    }
  };

  changeInputArea = (evt) => {
    if (this.dialog) {
      this.setState({
        inputArea: evt.target.value,
      });
    }
  };

  setDropList = (list) => {
    if (this.dialog) {
      this.setState({
        dropList: list,
      });
    }
  };

  setCurSel = (item) => {
    if (this.dialog) {
      this.setState({
        curSel: item,
      });
    }
  };

  close = (evt) => {
    const { close } = this.props;
    if (!this.dialog.contains(evt.target) || this.closebtn.contains(evt.target) ||
      this.cancelbtn.contains(evt.target)) {
      close();
    }
  };

  render() {
    const { isOpen, title, yesText, noText, confirm, confirmDisabled } = this.props;
    const { inputText, inputArea, curSel, check } = this.state;
    const modalClass = classNames('modal-wrap', {
      'open-modal': isOpen
    });
    const output = { check };
    const text = inputText.trim();
    const area = inputArea.trim();
    if (text) {
      output.inputText = text;
    }
    if (area) {
      output.inputArea = area;
    }
    if (curSel) {
      output.curSel = curSel;
    }

    return (
      <div className={modalClass} onClick={this.close}>
        <div className="dialog" ref={c => this.dialog = c}>
          <div className="content">
            <div className="header">
              <h4>{title}</h4>
              <a className="link-color" onClick={this.close} ref={c => this.closebtn = c}>
                <i className="fa fa-times" />
              </a>
            </div>
            <div className="body">
              <div className="main">
                {
                  React.Children.map(this.props.children,
                  child => React.cloneElement(child, {
                    ...this.state,
                    changeInputText: this.changeInputText,
                    toggleCheck: this.toggleCheck,
                    changeInputArea: this.changeInputArea,
                    setDropList: this.setDropList,
                    setCurSel: this.setCurSel,
                    isOpen,
                  }))
                }
              </div>
            </div>
            <div className="footer">
              <button
                className="btn btn-xs btn-confirm"
                onClick={() => confirm(output)}
                disabled={confirmDisabled}
              >
                {yesText || 'Confirm'}
              </button>
              <button
                className="btn btn-xs btn-cancel"
                ref={c => this.cancelbtn = c}
                onClick={this.close}
              >
                {noText || 'Cancel'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
