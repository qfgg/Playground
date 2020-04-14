import React, { Component } from 'react';
import classNames from 'classnames';
import Checkbox from '../../Common/Checkbox';


export default class SplitPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
    this.mounted = false;
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  handleDocumentClick = (evt) => {
    if (this.mounted && this.popupbtn && !this.popup.contains(evt.target) &&
      !this.popupbtn.contains(evt.target)) {
      this.closeSplit();
    }
  }

  openSplit = () => {
    this.setState({
      showPopup: true
    });
  }

  closeSplit = () => {
    this.setState({
      showPopup: false
    });
  };

  handleSplit = () => {
    this.closeSplit();
    this.props.handleSplit();
  };

  closeSplitPanel = () => {
    this.closeSplit();
    this.props.closeSplitPanel();
  }

  render() {
    const { splitList, splitStatus, handleCheck } = this.props;
    const popClass = classNames('split-option', { show: this.state.showPopup });
    const splitKeys = Object.keys(splitStatus);
    let splitCnt = 0;
    let isDisableSplit = true;
    if (splitKeys.length) {
      for (let i = 0, len = splitKeys.length; i < len; i++) {
        if (splitStatus[splitKeys[i]]) {
          splitCnt++;
        }
        if (splitCnt) {
          isDisableSplit = false;
        }
      }
    }
    const splitBtnClass = classNames(
      'btn',
      'btn-xs',
      'btn-split'
    );

    return (
      <div>
        <div onClick={this.openSplit} ref={c => this.popupbtn = c}>{this.props.children}</div>
        <div className={popClass} ref={c => this.popup = c}>
          <h4>Data Source</h4>
          <div className="checkbox-wrap">
            {
              (splitList || []).map((item, idx) => (
                <Checkbox
                  key={idx}
                  onCheck={() => handleCheck(item)}
                  checked={splitStatus[item]}
                  label={item}
                />
              ))
            }
          </div>
          <div className="btn-wrap">
            <button
              className={splitBtnClass}
              onClick={
                isDisableSplit ? this.closeSplitPanel : this.handleSplit
              }
            >
              {
                isDisableSplit ? 'Close Split' : 'Split'
              }
            </button>
            <button className="btn btn-xs btn-split" onClick={this.closeSplit}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
