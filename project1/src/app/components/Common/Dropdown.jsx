import React, { Component } from 'react';
import classNames from 'classnames';


export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.isClickBtn = false;
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
    if (this.mounted && !this.isClickBtn) {
      this.setOpen(false);
    } else {
      this.isClickBtn = false;
    }
  }

  setOpen = (isOpen) => {
    this.setState({
      isOpen
    });
    this.isClickBtn = true;
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.isClickBtn = true;
  }

  render() {
    const { clss } = this.props;
    const dropClass = clss ? classNames('dropdown', `${clss}`) : 'dropdown';
    const className = classNames('dropdown-menu', {
      show: this.state.isOpen
    });

    return (
      <div className={dropClass}>
        <button
          type="button"
          className="btn btn-default btn-xs"
          onClick={() => this.toggleOpen()}
        >
          {this.props.curSelect} <span className="caret" />
        </button>
        <ul className={className}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}
