import React, { Component } from 'react';
import classNames from 'classnames';
import blacklist from 'blacklist';
import RadioList from './RadioList';


export default class MenuBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaults: {
        name: '',
        url: '',
        used: 'Y',
        auth: 'N',
        order: ''
      },
      changes: {},
      isNameEmp: false,
      isOrderEmp: false
    };
  }

  componentDidUpdate(preProps) {
    const { isAddingMenu, focusedMenu, setAddMenu } = this.props;
    const { defaults } = this.state;

    if (preProps.isAddingMenu === false && isAddingMenu !== false) {
      this.setState({
        changes: { ...defaults }
      });
    } else if (preProps.focusedMenu !== focusedMenu) {
      this.clear();
      setAddMenu(false);
    }
  }

  setChange = (key, value) => {
    this.setState(preState => ({
      changes: {
        ...preState.changes,
        [key]: value
      }
    }));
  };

  delChange = (key) => {
    this.setState(preState => ({
      changes: blacklist(preState.changes, key.toString())
    }));
  };

  change = (evt, type) => {
    const value = evt.target.value.trim();
    if (type === 'order' && !/^\d*$/.test(value)) {
      return;
    }
    const { defaults } = this.state;
    const { getMnStatus, focusedMenu, isAddingMenu } = this.props;
    const hasMenu = getMnStatus && getMnStatus[focusedMenu] &&
      getMnStatus[focusedMenu].res;
    const curMenu = hasMenu ? getMnStatus[focusedMenu].res : {};
    const field = type === 'name' ? 'mnNm' : type;

    if (isAddingMenu !== false) {
      this.setChange(type, value);
    } else {
      if ((hasMenu && value !== curMenu[field]) ||
        (!hasMenu && value !== defaults[type])) {
        this.setChange(type, value);
      } else if ((hasMenu && value === curMenu[field]) ||
        (!hasMenu && value === defaults[type])) {
        this.delChange(type);
      }
    }
  };

  check = ({ type, item }) => {
    const { defaults } = this.state;
    const { getMnStatus, focusedMenu, isAddingMenu } = this.props;
    const hasMenu = getMnStatus && getMnStatus[focusedMenu] &&
      getMnStatus[focusedMenu].res;
    const curMenu = hasMenu ? getMnStatus[focusedMenu].res : {};
    const field = type === 'used' ? 'useYn' : type === 'auth' ? 'authYn' : type;

    if (isAddingMenu !== false) {
      this.setChange(type, item);
    } else {
      if ((hasMenu && item !== curMenu[field]) ||
        (!hasMenu && item !== defaults[type])) {
        this.setChange(type, item);
      } else if ((hasMenu && item === curMenu[field]) ||
        (!hasMenu && item === defaults[type])) {
        this.delChange(type);
      }
    }
  };

  clear = () => {
    this.setState({
      changes: {}
    });
  };

  save = () => {
    const {
      isAddingMenu,
      addMenu,
      updateMenu,
      focusedMenu,
      findMenu,
      setAddMenu,
      prntFocusedMenu,
      getMenu
    } = this.props;
    const { changes, isNameEmp, isOrderEmp } = this.state;

    if (isAddingMenu !== false) {
      if (changes.name === '') {
        this.setState({
          isNameEmp: true
        });
        return;
      }
      if (changes.order === '') {
        this.setState({
          isOrderEmp: true
        });
        return;
      }
      const payload = {
        mnNm: changes.name,
        prntMnNo: focusedMenu,
        url: changes.url,
        useYn: changes.used,
        authYn: changes.auth,
        order: changes.order,
      };
      if (isNameEmp) {
        this.setState({
          isNameEmp: false
        });
      }
      if (isOrderEmp) {
        this.setState({
          isOrderEmp: false
        });
      }
      addMenu(payload, () => {
        setAddMenu(false);
        this.clear();
        findMenu(focusedMenu);
      });
    } else {
      if (focusedMenu === 0) {
        return;
      }
      if (changes.name === '') {
        this.setState({
          isNameEmp: true
        });
        return;
      }
      if (changes.order === '') {
        this.setState({
          isOrderEmp: true
        });
        return;
      }
      const keys = Object.keys(changes);
      if (!keys || keys.length === 0) {
        return;
      }
      const payload = {
        mnNm: changes.name,
        url: changes.url,
        useYn: changes.used,
        authYn: changes.auth,
        order: changes.order,
      };
      if (isNameEmp) {
        this.setState({
          isNameEmp: false
        });
      }
      if (isOrderEmp) {
        this.setState({
          isOrderEmp: false
        });
      }
      updateMenu(focusedMenu, payload, () => {
        this.clear();
        findMenu(prntFocusedMenu);
        getMenu(focusedMenu);
      });
    }
  };

  del = () => {
    const {
      delMenu,
      focusedMenu,
      findMenu,
      prntFocusedMenu,
      delGetMenu,
      setFocusMenu
    } = this.props;

    delMenu(focusedMenu, () => {
      findMenu(prntFocusedMenu);
      delGetMenu(focusedMenu);
      setFocusMenu(0, 0);
    });
  };

  render() {
    const { defaults, changes, isOrderEmp, isNameEmp } = this.state;
    const { getMnStatus, focusedMenu, updateMnStatus, addMnStatus } = this.props;
    const hasMenu = getMnStatus && getMnStatus[focusedMenu] &&
      getMnStatus[focusedMenu].res;
    const curMenu = hasMenu ? getMnStatus[focusedMenu].res : {};

    return (
      <div className="menu-board">
        <table className="grid table table-content">
          <tbody>
            <tr>
              <td className="left-title">Name</td>
              <td>
                <input
                  type="text"
                  placeholder="Menu Name"
                  className={classNames('form-control name', { error: isNameEmp })}
                  value={changes.name !== undefined ? changes.name :
                    changes.name || curMenu.mnNm || defaults.name}
                  onChange={evt => this.change(evt, 'name')}
                />
              </td>
            </tr>
            <tr>
              <td className="left-title">URL</td>
              <td>
                <input
                  type="text"
                  className="form-control url"
                  placeholder="Link URL"
                  value={changes.url !== undefined ? changes.url :
                    changes.url || curMenu.url || defaults.url}
                  onChange={evt => this.change(evt, 'url')}
                />
              </td>
            </tr>
            <tr>
              <td className="left-title">Used</td>
              <td>
                <RadioList
                  type="used"
                  onCheck={this.check}
                  check={changes.used || curMenu.useYn || defaults.used}
                />
              </td>
            </tr>
            <tr>
              <td className="left-title">Auth Option</td>
              <td>
                <RadioList
                  type="auth"
                  onCheck={this.check}
                  check={changes.auth || curMenu.authYn || defaults.auth}
                />
              </td>
            </tr>
            <tr>
              <td className="left-title">Order</td>
              <td>
                <input
                  type="text"
                  placeholder="Order"
                  className={classNames('form-control order', { error: isOrderEmp })}
                  value={changes.order !== undefined ? changes.order :
                    changes.order || curMenu.order || defaults.order}
                  onChange={evt => this.change(evt, 'order')}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btngrp">
          <button className="add-btn" onClick={this.del}>DELETE</button>
          <button className="add-btn" onClick={this.clear}>CLEAR</button>
          <button className="add-btn" onClick={this.save}>
            {
              (addMnStatus || {}).isAdding || (updateMnStatus || {}).isUpdating ?
                (<div className="spinner">
                  <i className="fa fa-spinner" />
                </div>) : 'SAVE'
            }
          </button>
        </div>
      </div>
    );
  }
}
