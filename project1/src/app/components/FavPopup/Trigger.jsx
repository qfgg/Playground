import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import blacklist from 'blacklist';
import Popup from './Popup';


export default class Trigger extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
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
      isOpen: false,
    });
  };

  togglePopup = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { className } = this.props;
    const wrapClassName = classNames('fav-popup', className);
    const props = blacklist(this.props, 'className');

    return (
      <div className={wrapClassName} onClick={this.handlePopupClick}>
        <div onClick={this.togglePopup}>{this.props.children}</div>
        <Popup
          isOpen={this.state.isOpen}
          onCancel={this.closePopup}
          {...props}
        />
      </div>
    );
  }
}


Trigger.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
};
