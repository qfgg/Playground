import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import JobTable from '../../components/My/Job';
import * as actions from '../../actions/My/Job';
// import { setSearchQuery as setExSearchQuery } from '../../actions/External/Explorer';
// import { setSearchQuery as setInSearchQuery } from '../../actions/Internal/Explorer';
import {
  initJob,
  delJob,
  updateName,
  pauseJob,
  resumeJob,
  checkExpire,
  updateExpire,
  restartExpire
} from '../../middlewares/My/Job';
import Breadcrumbs from '../../components/My/Job/Breadcrumbs';


const mapStateToProps = state => ({
  curPage: state.myJobReducer.curPage,
  totalCnt: state.myJobReducer.totalCnt,
  totalEntries: state.myJobReducer.totalEntries,
  entriesPerPage: state.myJobReducer.entriesPerPage,
  jobList: state.myJobReducer.jobList,
  pauseJobStatus: state.myJobReducer.pauseJobStatus,
  restartExpireStatus: state.myJobReducer.restartExpireStatus,
  resumeJobStatus: state.myJobReducer.resumeJobStatus,
  editFlag: state.myJobReducer.editFlag
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    initJob,
    delJob,
    updateName,
    pauseJob,
    resumeJob,
    checkExpire,
    updateExpire,
    restartExpire,
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class MyJob extends Component {
  render() {
    const {
      jobList,
      curPage,
      pauseJobStatus,
      resumeJobStatus,
      restartExpireStatus,
      totalCnt,
      editFlag,
      totalEntries,
      entriesPerPage,
      actions
    } = this.props;

    return (
      <div className="ibox-content job-wrap">
        <Breadcrumbs />
        <JobTable
          jobList={jobList}
          curPage={curPage}
          totalCnt={totalCnt}
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          pauseJobStatus={pauseJobStatus}
          restartExpireStatus={restartExpireStatus}
          resumeJobStatus={resumeJobStatus}
          editFlag={editFlag}
          {...actions}
        />
      </div>
    );
  }
}
