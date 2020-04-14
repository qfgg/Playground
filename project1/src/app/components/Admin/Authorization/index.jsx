import React, { Component } from 'react';
import UserGrpPanel from './UserGrpPanel';
import UserPanel from './UserPanel';
import './index.less';


export default class UserGrp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        text: 'User',
        value: 'user',
        focusedRow: null
      }
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

  clickRow = (grpNo) => {
    if (grpNo !== this.state.focusedRow) {
      if (grpNo >= 0) {
        const { actions } = this.props;
        actions.getGrpEmp(grpNo);
      }

      this.setState({
        focusedRow: grpNo
      });
    }
  };

  render() {
    const { activeItem, focusedRow } = this.state;
    const {
      userGrpList,
      addGrpStatus,
      updateGrpStatus,
      userList,
      addUserStatus,
      deptList,
      empList,
      searchDeptStatus,
      searchEmpStatus,
      menuList,
      flatMenu,
      saveMnStatus,
      actions
    } = this.props;

    return (
      <div className="auth">
        <UserGrpPanel
          userGrpList={userGrpList}
          addGrpStatus={addGrpStatus}
          updateGrpStatus={updateGrpStatus}
          focusedRow={focusedRow}
          clickRow={this.clickRow}
          {...actions}
        />
        <UserPanel
          activeItem={activeItem}
          handleClick={this.setTab}
          userList={userList}
          focusedRow={focusedRow}
          addUserStatus={addUserStatus}
          deptList={deptList}
          empList={empList}
          searchDeptStatus={searchDeptStatus}
          searchEmpStatus={searchEmpStatus}
          menuList={menuList}
          flatMenu={flatMenu}
          saveMnStatus={saveMnStatus}
          {...actions}
        />
      </div>
    );
  }
}
