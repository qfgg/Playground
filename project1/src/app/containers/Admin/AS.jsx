import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert-react';
import * as actions from '../../actions/Admin/AS';
import ASTable from '../../components/Admin/AS';
import Breadcrumbs from '../../components/Admin/AS/Breadcrumbs';
import {
  initAS,
  confirmDel,
  confirmUpd,
  createItem,
  checkAS
} from '../../middlewares/Admin/AS';


const mapStateToProps = state => ({
  sortStatus: state.adminAS.sortStatus,
  isEditing: state.adminAS.isEditing,
  resList: state.adminAS.resList,
  totalCnt: state.adminAS.totalCnt,
  initASStatus: state.adminAS.initASStatus,
  totalEntries: state.adminAS.totalEntries,
  entriesPerPage: state.adminAS.entriesPerPage,
  curPage: state.adminAS.curPage,
  saveStatus: state.adminAS.saveStatus,
  updateStatus: state.adminAS.updateStatus,
  checkStatus: state.adminAS.checkStatus
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    initAS,
    confirmDel,
    confirmUpd,
    createItem,
    checkAS,
    ...actions,
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class AS extends Component {
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
        initASStatus,
        saveStatus,
        updateStatus,
      } = nextProps;
      if (((initASStatus.error && initASStatus.error !== '') ||
        (saveStatus.error && saveStatus.error !== '') ||
        (updateStatus.error && updateStatus.error !== '')) && !this.state.showDialog) {
        let errormsg = '';
        if (initASStatus.error && initASStatus.error !== '') {
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
      initASStatus,
      checkStatus,
      actions
    } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <ASTable
          resList={resList}
          sortStatus={sortStatus}
          isEditing={isEditing}
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          curPage={curPage}
          totalCnt={totalCnt}
          initASStatus={initASStatus}
          checkStatus={checkStatus}
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
