import React, { Component } from 'react';
import classNames from 'classnames/bind';


export default class MultiDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
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
    const { mult } = this.props;
    const { isOpen } = this.state;
    const cmp = mult ? this.dd : this.btn;
    if (this.mounted && isOpen && cmp && !cmp.contains(evt.target)) {
      this.setOpen(false);
    }
  }

  setOpen = (isOpen) => {
    this.setState({ isOpen });
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  getCurSel = (list, selected, mult) => {
    if (!selected) {
      return '';
    }
    if (mult) {
      const curSel = [];
      for (let i = 0, len = selected.length; i < len; i++) {
        const selItem = list.find(item => item.value === selected[i]);
        if (selItem) {
          curSel.push(selItem.text);
        }
      }
      return curSel.join(', ');
    }
    return selected;
  }

  render() {
    const { keyId, list, onSelect, onCheck, mult, selected,
      disabled, disabledList, large } = this.props;
    const curSel = this.getCurSel(list, selected, mult);
    const className = classNames('dropdown-menu', {
      show: this.state.isOpen,
      'width-large': large,
    });
    const btnClass = classNames('btn', 'btn-default', 'btn-xs', {
      'disable-btn': disabled,
      'width-large': large,
    });
    const spanClass = classNames('ellipsis', {
      'span-width-large': large,
    });

    return (
      <div className="l-dropdown" ref={c => this.dd = c}>
        <div className="dropdown">
          <button
            type="button"
            className={btnClass}
            onClick={disabled ? null : () => this.toggleOpen()}
            ref={c => this.btn = c}
          >
            <span className={spanClass}>{ curSel }</span>{
              <span className="caret position-fix" />
            }
          </button>
          <ul className={className}>
            {
              list.map((item, idx) =>
                (
                  (disabledList || []).indexOf(item.value) === -1 ?
                    <li
                      key={idx}
                      className="option"
                      onClick={
                        mult ?
                        () => onSelect(keyId, item) :
                        () => onCheck(keyId, item)
                      }
                    >
                      <a
                        className={classNames({ sel: (selected || []).indexOf(item.value) !== -1 })}
                      >
                        {item.isParent ? `- ${item.text}` : <span>&nbsp;&nbsp;&nbsp;{item.text}</span>}
                      </a>
                    </li> :
                    <li key={idx} className="option">
                      <span style={{ color: '#dbdbdb' }}>{item.isParent ? `- ${item.text}` :
                      <font>&nbsp;&nbsp;&nbsp;{item.text}</font>}</span>
                    </li>)
                  )
            }
          </ul>
        </div>
      </div>
    );
  }
}
