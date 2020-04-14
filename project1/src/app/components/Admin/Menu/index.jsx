import React, { Component } from 'react';
import MenuTree from './MenuTree';
import Detail from './Detail';
import '../Common/common.less';
import './index.less';


export default class MenuConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        text: 'Menu Detail',
        value: 'detail',
      },
      focusedMenu: 0,
      prntFocusedMenu: 0,
      isAddingMenu: false
    };
  }

  setTab = (item) => {
    const { activeItem } = this.state;

    if (item.value !== activeItem.value) {
      this.setState({
        activeItem: item
      });
    }
  };

  setFocusMenu = (mnNo, ptNo) => {
    const { focusedMenu } = this.state;
    const { actions } = this.props;

    if (focusedMenu !== mnNo) {
      if (mnNo !== 0) {
        actions.getMenu(mnNo);
      }
      this.setState({
        focusedMenu: mnNo,
        prntFocusedMenu: ptNo
      });
    }
  };

  addMenu = (isAdding) => {
    const { isAddingMenu } = this.state;

    if (isAddingMenu !== isAdding) {
      this.setState({
        isAddingMenu: isAdding
      });
    }
  };

  render() {
    const {
      activeItem,
      focusedMenu,
      isAddingMenu,
      prntFocusedMenu
    } = this.state;
    const {
      menuList,
      getMnStatus,
      updateMnStatus,
      addMnStatus,
      getGrpStatus,
      updateGrpStatus,
      actions
    } = this.props;

    return (
      <div className="menu-config">
        <MenuTree
          menuList={menuList}
          focusedMenu={focusedMenu}
          setFocusMenu={this.setFocusMenu}
          setAddMenu={this.addMenu}
          isAddingMenu={isAddingMenu}
          {...actions}
        />
        <Detail
          activeItem={activeItem}
          handleClick={this.setTab}
          getMnStatus={getMnStatus}
          focusedMenu={focusedMenu}
          isAddingMenu={isAddingMenu}
          setAddMenu={this.addMenu}
          prntFocusedMenu={prntFocusedMenu}
          setFocusMenu={this.setFocusMenu}
          updateMnStatus={updateMnStatus}
          addMnStatus={addMnStatus}
          getGrpStatus={getGrpStatus}
          updateGrpStatus={updateGrpStatus}
          actions={actions}
        />
      </div>
    );
  }
}
