import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Tree from './Tree';


export default class MenuTree extends Component {
  render() {
    const {
      menuList,
      findMenu,
      setFocusMenu,
      focusedMenu,
      setAddMenu,
      isAddingMenu
    } = this.props;

    return (
      <div className="menu-tree">
        <h3>Menu Tree</h3>
        <Scrollbars
          style={{ height: 570 }}
          autoHide
          autoHideTimeout={400}
        >
          <Tree
            list={[{ mnNo: 0, mnNm: 'Root' }]}
            menuList={menuList}
            findMenu={findMenu}
            setFocusMenu={setFocusMenu}
            focusedMenu={focusedMenu}
            isAddingMenu={isAddingMenu}
            treeClass="tree-margin"
          />
        </Scrollbars>
        <button
          className="add-btn right-btn"
          onClick={setAddMenu.bind(this, focusedMenu)}
        >
          ADD
        </button>
      </div>
    );
  }
}
