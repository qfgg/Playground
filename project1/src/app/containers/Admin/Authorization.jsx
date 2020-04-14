import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/Admin/Author';
import {
  initUserGrp,
  addUserGrp,
  delUserGrp,
  updateUserGrp,
  getGrpEmp,
  addUser,
  delUser,
  initDept,
  fetchEmp,
  fetchDept,
  searchDept,
  searchEmp,
  findMenu,
  saveMenuAthor
} from '../../middlewares/Admin/Author';
import UserGrp from '../../components/Admin/Authorization';
import Breadcrumbs from '../../components/Admin/Authorization/Breadcrumbs';


const mapStateToProps = state => ({
  userGrpList: state.adminAuthorReducer.userGrpList,
  addGrpStatus: state.adminAuthorReducer.addGrpStatus,
  updateGrpStatus: state.adminAuthorReducer.updateGrpStatus,
  userList: state.adminAuthorReducer.userList,
  addUserStatus: state.adminAuthorReducer.addUserStatus,
  deptList: state.adminAuthorReducer.deptList,
  empList: state.adminAuthorReducer.empList,
  searchDeptStatus: state.adminAuthorReducer.searchDeptStatus,
  searchEmpStatus: state.adminAuthorReducer.searchEmpStatus,
  menuList: state.adminAuthorReducer.menuList,
  flatMenu: state.adminAuthorReducer.flatMenu,
  saveMnStatus: state.adminAuthorReducer.saveMnStatus
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    initUserGrp,
    addUserGrp,
    delUserGrp,
    updateUserGrp,
    getGrpEmp,
    addUser,
    delUser,
    initDept,
    fetchEmp,
    fetchDept,
    searchDept,
    searchEmp,
    findMenu,
    saveMenuAthor,
    ...actions,
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Authorization extends Component {
  render() {
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
      <div className="ibox-content">
        <Breadcrumbs />
        <UserGrp
          userGrpList={userGrpList}
          addGrpStatus={addGrpStatus}
          updateGrpStatus={updateGrpStatus}
          userList={userList}
          addUserStatus={addUserStatus}
          deptList={deptList}
          empList={empList}
          searchDeptStatus={searchDeptStatus}
          searchEmpStatus={searchEmpStatus}
          menuList={menuList}
          flatMenu={flatMenu}
          saveMnStatus={saveMnStatus}
          actions={actions}
        />
      </div>
    );
  }
}
