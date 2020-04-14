import React, { Component } from 'react';
import NavTab from '../Common/NavTab';
import UserBoard from './UserBoard';
import MenuBoard from './MenuBoard';
import { TABLIST } from '../../../constants/Admin/Author/AuthorTypes';


export default class UserPanel extends Component {
  render() {
    const {
      activeItem,
      handleClick,
      userList,
      addUserStatus,
      addUser,
      delUser,
      focusedRow,
      getGrpEmp,
      initDept,
      deptList,
      empList,
      fetchEmp,
      fetchDept,
      searchDept,
      searchEmp,
      searchDeptStatus,
      searchEmpStatus,
      clearSearch,
      menuList,
      flatMenu,
      findMenu,
      saveMenuAthor,
      saveMnStatus
    } = this.props;

    return (
      <div className="users">
        <NavTab
          tablist={TABLIST}
          activeItem={activeItem}
          handleClick={handleClick}
          classes="left-margin"
        />
        {
          focusedRow < 0 ? <div /> :
            activeItem.value === 'user' ?
              <UserBoard
                userList={userList}
                addUserStatus={addUserStatus}
                addUser={addUser}
                delUser={delUser}
                focusedRow={focusedRow}
                getGrpEmp={getGrpEmp}
                initDept={initDept}
                deptList={deptList}
                empList={empList}
                fetchEmp={fetchEmp}
                fetchDept={fetchDept}
                searchDept={searchDept}
                searchEmp={searchEmp}
                searchDeptStatus={searchDeptStatus}
                searchEmpStatus={searchEmpStatus}
                clearSearch={clearSearch}
              /> :
              <MenuBoard
                menuList={menuList}
                flatMenu={flatMenu}
                findMenu={findMenu}
                focusedRow={focusedRow}
                saveMnStatus={saveMnStatus}
                saveMenuAthor={saveMenuAthor}
              />
        }
      </div>
    );
  }
}
