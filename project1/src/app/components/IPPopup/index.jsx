import React, { Component } from 'react';
import classNames from 'classnames';
import blacklist from 'blacklist';
import Popup from './Popup';


export default class IPPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.isClickPopup = false;
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

  handleDocumentClick = () => {
    if (this.mounted && this.state.isOpen) {
      if (this.isClickPopup === false) {
        this.closePopup();
      } else {
        this.isClickPopup = false;
      }
    }
  };

  handlePopupClick = () => {
    this.isClickPopup = true;
  };

  closePopup = () => {
    this.setState({
      isOpen: false
    });
  };

  togglePopup = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { className } = this.props;
    const { isOpen } = this.state;
    const props = blacklist(this.props, 'className');
    const popClass = classNames('ip-popup', className);

    return (
      <div
        className={popClass}
        onClick={this.handlePopupClick}
      >
        <div onClick={this.togglePopup}>{this.props.children}</div>
        <Popup
          isOpen={isOpen}
          onCancel={this.closePopup}
          {...props}
        />
      </div>
    );
  }
}
