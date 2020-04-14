import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/Admin/Menu';
import Breadcrumbs from '../../components/Admin/Menu/Breadcrumbs';
import MenuConfig from '../../components/Admin/Menu';
import {
  findMenu,
  addMenu,
  getMenu,
  delMenu,
  updateMenu,
  getGrp,
  updateGrp
} from '../../middlewares/Admin/Menu';


const mapStateToProps = state => ({
  menuList: state.adminMenuReducer.menuList,
  getMnStatus: state.adminMenuReducer.getMnStatus,
  updateMnStatus: state.adminMenuReducer.updateMnStatus,
  addMnStatus: state.adminMenuReducer.addMnStatus,
  getGrpStatus: state.adminMenuReducer.getGrpStatus,
  updateGrpStatus: state.adminMenuReducer.updateGrpStatus
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    findMenu,
    addMenu,
    getMenu,
    delMenu,
    updateMenu,
    getGrp,
    updateGrp,
    ...actions
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Menu extends Component {
  render() {
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
      <div className="ibox-content">
        <Breadcrumbs />
        <MenuConfig
          menuList={menuList}
          getMnStatus={getMnStatus}
          addMnStatus={addMnStatus}
          updateMnStatus={updateMnStatus}
          getGrpStatus={getGrpStatus}
          updateGrpStatus={updateGrpStatus}
          actions={actions}
        />
      </div>
    );
  }
}
