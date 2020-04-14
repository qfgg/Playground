import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert-react';
import * as actions from '../../actions/Admin/PopManage';
import PopsManage from '../../components/Admin/PopManage';
import { initPop, confirmDel, confirmUpd, createItem } from '../../middlewares/Admin/PoPManage';
import Breadcrumbs from '../../components/Admin/PopManage/Breadcrumbs';


const mapStateToProps = state => ({
  sortStatus: state.adminPopManage.sortStatus,
  isEditing: state.adminPopManage.isEditing,
  resList: state.adminPopManage.resList,
  curPage: state.adminPopManage.curPage,
  totalCnt: state.adminPopManage.totalCnt,
  totalEntries: state.adminPopManage.totalEntries,
  entriesPerPage: state.adminPopManage.entriesPerPage,
  initPopStatus: state.adminPopManage.initPopStatus,
  delStatus: state.adminPopManage.delStatus,
  saveStatus: state.adminPopManage.saveStatus,
  updateStatus: state.adminPopManage.updateStatus,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    initPop,
    confirmDel,
    confirmUpd,
    createItem,
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class PopManage extends Component {
  constructor() {
    super();
    this.state = {
      showDialog: false,
      errormsg: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const {
        initPopStatus,
        saveStatus,
        updateStatus,
      } = nextProps;
      if (((initPopStatus.error && initPopStatus.error !== '') ||
        (saveStatus.error && saveStatus.error !== '') ||
        (updateStatus.error && updateStatus.error !== '')) && !this.state.showDialog) {
        let errormsg = '';
        if (initPopStatus.error && initPopStatus.error !== '') {
          errormsg = 'Query error';
        }
        if (saveStatus.error && saveStatus.error !== '') {
          errormsg = 'Add Failed';
        }
        if (updateStatus.error && updateStatus.error !== '') {
          errormsg = 'Modify Failed';
        }
        this.setState({ showDialog: true, errormsg });
      }
    }
  }
  render() {
    const {
      resList,
      isEditing,
      curPage,
      totalCnt,
      sortStatus,
      totalEntries,
      entriesPerPage,
      initPopStatus,
      actions
    } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <PopsManage
          resList={resList}
          sortStatus={sortStatus}
          isEditing={isEditing}
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          curPage={curPage}
          totalCnt={totalCnt}
          initPopStatus={initPopStatus}
          {...actions}
        />
        <SweetAlert
          show={this.state.showDialog}
          title="Error"
          type="error"
          text={this.state.errormsg}
          confirmButtonText="Ok"
          showCancelButton
          onConfirm={() => {
            this.setState({ showDialog: false, errormsg: '' });
          }}
          onCancel={() => {
            this.setState({ showDialog: false, errormsg: '' });
          }}
        />
      </div>
    );
  }
}
