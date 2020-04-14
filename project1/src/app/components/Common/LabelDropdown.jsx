import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { VALUE_TEXT_MAP } from '../../constants/External/Explorer/FilterTypes';


export default class LabelDropdown extends Component {
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
        curSel.push(VALUE_TEXT_MAP[selected[i]]);
      }
      return curSel.join(' ,');
    }
    if (this.props.normal && selected && selected.text) {
      return selected.text;
    }
    return VALUE_TEXT_MAP[selected];
  }

  render() {
    const {
      label,
      list,
      onSelect,
      onCheck,
      mult,
      selected,
      disabled,
      normal
    } = this.props;
    const curSel = this.getCurSel(list, selected, mult);
    const className = classNames('dropdown-menu', {
      show: this.state.isOpen,
    });
    const titleClass = classNames('dropdown-title', {
      disable: disabled,
    });
    const btnClass = classNames('btn', 'btn-default', 'btn-xs', {
      'disable-btn': disabled,
    });

    return (
      <div className="label-dropdown" ref={c => this.dd = c}>
        <div className={titleClass}>{label}</div>
        <div className="dropdown">
          <button
            type="button"
            className={btnClass}
            onClick={disabled ? null : () => this.toggleOpen()}
            ref={c => this.btn = c}
          >
            { curSel }
          </button>
          <ul className={className}>
            {
              list.map((item, idx) =>
                (<li
                  key={idx}
                  className="option"
                  onClick={
                    normal ? onCheck.bind(null, item) : mult ?
                      () => onSelect({ type: label.toLowerCase(), item: item.value }) :
                      () => onCheck({ type: label.toLowerCase(), item: item.value })
                  }
                >
                  <a
                    className={classNames({
                      sel: Array.isArray(selected) ?
                        selected.indexOf(item.value) !== -1 :
                        selected.value === item.value
                    })}
                  >
                    {item.text}
                  </a>
                </li>))
            }
          </ul>
        </div>
      </div>
    );
  }
}
