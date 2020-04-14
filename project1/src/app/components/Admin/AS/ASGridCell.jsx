import React, { Component } from 'react';
import classNames from 'classnames';
import Dropdown from '../../Common/Dropdown';
import Checkbox from '../../Common/Checkbox';


export default class ASGridCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modOne: props.text,
      empty: false,
      checked: false,
      isEdit: false
    };
  }

  componentWillReceiveProps(nprop) {
    if (this.props.text !== nprop.text) {
      this.setState({
        modOne: nprop.text
      });
    }
  }

  componentDidUpdate(preProps) {
    if (preProps.isEditing && !this.props.isEditing) {
      this.clearAll();
    }
  }

  handleChangeText = (evt) => {
    this.setState({
      empty: false,
      checked: false,
      isEdit: true,
    });
    const { name, handleModText, item } = this.props;

    this.setState({
      modOne: evt.target.value,
    });
    handleModText(item, name, evt.target.value);
  };

  handleSel = (item, asNo) => {
    this.setState({
      isEdit: true,
      modOne: asNo
    });
    this.props.handleSel(item, asNo);
  };

  validationAdd = () => {
    const { regRule } = this.props;
    if (this.state.modOne === '') {
      this.setState({
        empty: true
      });
      return false;
    }
    if (regRule && !regRule.test(this.state.modOne)) {
      this.setState({
        empty: true
      });
      return false;
    }
    this.setState({
      empty: false
    });
    return true;
  };

  clearAll = () => {
    this.setState({
      modOne: this.props.text,
      empty: false,
      checked: false,
      isEdit: false,
    });
  };

  setModOne = (val) => {
    this.setState({
      isEdit: true,
      modOne: val,
    });
  };

  render() {
    const {
      text,
      align,
      attrEdit,
      isEditing,
      placeholder,
      cusutomstyle,
      isCheck,
      checked,
      onCheck,
      dropdown,
      droplist,
      item,
      dataSource
    } = this.props;
    const { modOne, empty, isEdit } = this.state;

    return (
      <td
        className={classNames('relative', {
          'text-left': align === 'l',
          'text-right': align === 'r',
          'text-center': !align,
        })}
        style={cusutomstyle || {}}
      >
        {
          isEditing && attrEdit ?
            (dropdown ?
              (<Dropdown curSelect={isEdit ? modOne : text || droplist[0]}>
                {droplist.map((itm, idx) =>
                  (<li
                    key={idx}
                    className="option"
                    onClick={() => this.handleSel(item, itm)}
                  >
                    <a>{itm}</a>
                  </li>)
                )}
              </Dropdown>) :
              (<input
                type="text"
                className={empty ? 'text-center inpWarn' : 'text-center'}
                placeholder={placeholder || ''}
                value={isEdit ? modOne : text}
                onChange={this.handleChangeText}
              />)) :
            (<span>
              {
                isCheck ?
                  <Checkbox
                    checked={checked}
                    onCheck={onCheck}
                    disabled={!isEditing}
                  /> : dataSource || text
              }
            </span>)
        }
      </td>
    );
  }
}
