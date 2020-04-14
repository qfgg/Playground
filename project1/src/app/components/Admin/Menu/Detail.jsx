import React, { Component } from 'react';
import NavTab from '../Common/NavTab';
import MenuBoard from './MenuBoard';
import UserGrpBoard from './UserGrpBoard';
import { TABLIST } from '../../../constants/Admin/Menu/MenuTypes';


export default class Detail extends Component {
  render() {
    const {
      getMnStatus,
      focusedMenu,
      prntFocusedMenu,
      activeItem,
      handleClick,
      isAddingMenu,
      setAddMenu,
      setFocusMenu,
      updateMnStatus,
      addMnStatus,
      getGrpStatus,
      updateGrpStatus,
      actions
    } = this.props;

    return (
      <div className="detail">
        <NavTab
          tablist={TABLIST}
          activeItem={activeItem}
          handleClick={handleClick}
          classes="left-margin"
        />
        {
          activeItem.value === 'detail' ?
            <MenuBoard
              getMnStatus={getMnStatus}
              focusedMenu={focusedMenu}
              isAddingMenu={isAddingMenu}
              prntFocusedMenu={prntFocusedMenu}
              setAddMenu={setAddMenu}
              setFocusMenu={setFocusMenu}
              updateMnStatus={updateMnStatus}
              addMnStatus={addMnStatus}
              {...actions}
            /> :
            <UserGrpBoard
              getGrpStatus={getGrpStatus}
              focusedMenu={focusedMenu}
              updateGrpStatus={updateGrpStatus}
              {...actions}
            />
        }
      </div>
    );
  }
}
