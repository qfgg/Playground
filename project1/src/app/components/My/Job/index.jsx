
import React, { Component } from 'react';
import JobTableRow from './JobTableRow';
import Pagination from '../../Pagination';
import SetEntries from '../../Common/SetEntries';
import './index.less';


export default class JobTable extends Component {
  componentDidMount() {
    const { initJob, entriesPerPage } = this.props;
    initJob(1, entriesPerPage);
  }

  setCurPage = (page) => {
    const { setCurPage, initJob, entriesPerPage } = this.props;
    setCurPage(page);
    initJob(page, entriesPerPage);
  };

  render() {
    const {
      jobList,
      curPage,
      totalCnt,
      pauseJobStatus,
      resumeJobStatus,
      restartExpireStatus,
      initJob,
      delJob,
      updateName,
      pauseJob,
      resumeJob,
      editFlag,
      toggleEditFlag,
      checkExpire,
      updateExpire,
      restartExpire,
      totalEntries,
      entriesPerPage,
      setEntriesPerPage,
      clearrestartExpireError,
      setCurPage,
    } = this.props;
    const rowList = jobList && jobList.length > 0 ? jobList : [];

    return (
      <div>
        <SetEntries
          totalEntries={totalEntries}
          setEntriesPerPage={setEntriesPerPage}
          refreshList={initJob}
          setCurPage={setCurPage}
          curPage={curPage}
        />
        <div className="job">
          <table className="table table-hover margin bottom table-custom">
            <thead>
              <tr>
                <th className="text-center no-width">No.</th>
                <th className="text-center perspective-width">Perspective</th>
                <th className="text-left jobNm-width">Job Name</th>
                <th className="text-center status-width">Status</th>
                <th className="text-center start-width">Start</th>
                <th className="text-center end-width">End</th>
                <th className="text-center action-width">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                rowList.map((item, idx) =>
                (
                  <JobTableRow
                    key={idx}
                    jobItem={item}
                    curPage={curPage}
                    delJob={delJob}
                    updateName={updateName}
                    pauseJob={pauseJob}
                    resumeJob={resumeJob}
                    isPausing={(pauseJobStatus[item.jobNo] || {}).isPausing}
                    isResuming={(resumeJobStatus[item.jobNo] || {}).isResuming}
                    isRestarting={restartExpireStatus[item.jobNo]}
                    editFlag={editFlag[item.jobNo]}
                    toggleEditFlag={() => toggleEditFlag(item.jobNo)}
                    checkExpire={checkExpire}
                    updateExpire={updateExpire}
                    clearrestartExpireError={clearrestartExpireError}
                    restartExpire={restartExpire}
                    entriesPerPage={entriesPerPage}
                  />
                ))
              }
            </tbody>
          </table>
        </div>
        <Pagination
          totalCnt={totalCnt}
          curPage={curPage}
          setCurPage={this.setCurPage}
        />
      </div>
    );
  }
}
