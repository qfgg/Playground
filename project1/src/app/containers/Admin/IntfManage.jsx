import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/Admin/IntfManage';
import InterfaceList from '../../components/Admin/IntfManage';
import { initInterface } from '../../middlewares/Admin/IntfManage';
import Breadcrumbs from '../../components/Admin/IntfManage/Breadcrumbs';


const mapStateToProps = state => ({
  isEditing: state.adminIntfReducer.isEditing,
  resList: state.adminIntfReducer.resList,
  sortStatus: state.adminIntfReducer.sortStatus,
  curPage: state.adminIntfReducer.curPage,
  totalCnt: state.adminIntfReducer.totalCnt,
  totalEntries: state.adminIntfReducer.totalEntries,
  entriesPerPage: state.adminIntfReducer.entriesPerPage,
  initIntfStatus: state.adminIntfReducer.initIntfStatus
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    initInterface
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class IntfManage extends Component {
  render() {
    const {
      resList,
      isEditing,
      curPage,
      totalCnt,
      sortStatus,
      totalEntries,
      entriesPerPage,
      initIntfStatus,
      actions
    } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <InterfaceList
          resList={resList}
          sortStatus={sortStatus}
          isEditing={isEditing}
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          curPage={curPage}
          totalCnt={totalCnt}
          initIntfStatus={initIntfStatus}
          {...actions}
        />
      </div>
    );
  }
}
