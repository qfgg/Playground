import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SweetAlert from 'sweetalert-react';
import { browserHistory, Link } from 'react-router';
import moment from 'moment';
import classNames from 'classnames';
import Popup from '../Common/Popup';
import FailureDetail from './FailureDetail';


export default class JobTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      showPop: false,
      isOpenIfRemakeJob: false,
      handleError: false,
      showFD: false,
    });
    this.isClickPencil = false;
    this.mounted = false;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      const { isRestarting } = nextProps;
      if (isRestarting && isRestarting.error !== '') {
        this.setState({
          handleError: true
        });
      }
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  componentDidUpdate(preProps) {
    if (this.props.editFlag && !preProps.editable) {
      this.jobNm.focus();
    }
  }

  handleEdit = () => {
    const { toggleEditFlag } = this.props;
    this.isClickPencil = true;
    toggleEditFlag();
  };

  handleDocumentClick = (evt) => {
    if (!this.mounted) {
      return;
    }
    if (this.jobpop !== undefined) {
      if (this.jobpop && ReactDOM.findDOMNode(this.jobpop) &&
        !ReactDOM.findDOMNode(this.jobpop).contains(evt.target) &&
        (evt.target !== this.popbtn) && (evt.target !== this.jobNmTxt)) {
        this.setState({ showPop: false });
      }
    }

    if (this.fd && ReactDOM.findDOMNode(this.fd) &&
      !ReactDOM.findDOMNode(this.fd).contains(evt.target) &&
      (evt.target !== this.failedBtn)) {
      this.setState({ showFD: false });
    }

    const { editFlag, toggleEditFlag } = this.props;
    if (editFlag && this.jobNm && ReactDOM.findDOMNode(this.jobNm) &&
      !ReactDOM.findDOMNode(this.jobNm).contains(evt.target) &&
      !this.isClickPencil) {
      toggleEditFlag();
    } else {
      this.isClickPencil = false;
    }
  };

  openJobPopup = () => {
    // const { checkExpire } = this.props;
    // checkExpire(jobNo, () => {
    //   this.setState({
    //     isOpenIfRemakeJob: true
    //   });
    // }, () => {
    this.setState({ showPop: true });
    // });
  };

  closeJobPopup = () => {
    this.setState({ showPop: false });
  };

  openFD = () => {
    this.setState({ showFD: true });
  };

  closeFD = () => {
    this.setState({ showFD: false });
  };

  handleRemove = (jobNo) => {
    const { delJob, curPage, entriesPerPage } = this.props;
    delJob(jobNo, curPage, entriesPerPage);
  };

  handleToggle = (status, jobNo, isChangingStatus) => {
    if (!isChangingStatus) {
      const { curPage, pauseJob, resumeJob, entriesPerPage } = this.props;
      const fn = (status === 'running' || status === 'submitted') ? pauseJob : resumeJob;
      fn(jobNo, curPage, entriesPerPage);
    }
  };

  handleNmKeyPress = (evt, jobItem) => {
    const { curPage, updateName, toggleEditFlag, entriesPerPage } = this.props;
    if (evt.target.value && evt.charCode === 13) {
      if (evt.target.value !== jobItem.jobNm) {
        updateName(jobItem.jobNo, {
          jobNm: evt.target.value
        }, curPage, entriesPerPage);
      }
      toggleEditFlag();
    }
  };

  handleQuit = (evt) => {
    if (evt.keyCode === 27) {
      const { toggleEditFlag } = this.props;
      toggleEditFlag();
    }
  };

  handleFocus = (evt) => {
    evt.target.select();
  };

  renderActionBtn = (jobItem, filterset, startStr, endStr, isChangingStatus) => {
    const playpauseClass = classNames('fa', {
      'fa-pause': jobItem.jobStas === 'running' || jobItem.jobStas === 'submitted',
      'fa-play': jobItem.jobStas === 'suspended'
    });

    if (jobItem.jobStas === 'running' || jobItem.jobStas === 'suspended' || jobItem.jobStas === 'submitted') {
      return (
        <span className="status">
          {/* <a className={btnClass}>
            <i
              className="fa fa-times"
              onClick={() => this.handleRemove(jobItem.jobNo)}
            />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp; */}
          <a className="link-color">
            <i
              className={playpauseClass}
              onClick={() => this.handleToggle(jobItem.jobStas, jobItem.jobNo, isChangingStatus)}
            />
          </a>
        </span>
      );
    } else if (jobItem.jobStas === 'completed' || jobItem.jobStas === 'failed') {
      return (
        <span className="status">
          <a className="link-color check-detail">
            <i
              className="fa fa-eye"
              ref={c => this.popbtn = c}
              title="View details"
              onClick={this.openJobPopup}
            />
          </a>
        </span>
      );
    }
    return (
      <span className="text-center icon-width" />
    );
  };

  redirectToExplorer = (jobNo, link) => {
    const { checkExpire } = this.props;
    // if (subType === 'analysis') {
    //   browserHistory.push(link);
    // } else {
    checkExpire(jobNo, () => {
      this.setState({
        isOpenIfRemakeJob: true
      });
    }, () => {
      // const filterset = JSON.parse(jobItem.jobFltrset);
      // if (jobItem.jobTp === 'external') {
      //   setExSearchQuery(filterset);
      // } else {
      //   setInSearchQuery(filterset);
      // }
      browserHistory.push(link);
    });
    // }
  };

  isRestartJob = () => {
    this.setState({
      isOpenIfRemakeJob: true
    });
  }

  render() {
    const {
      jobItem,
      isPausing,
      isResuming,
      editFlag,
      curPage,
      updateExpire,
      restartExpire,
      entriesPerPage,
      clearrestartExpireError
    } = this.props;
    const jType = jobItem.jobTp.split('_');
    const side = jType[0].toLowerCase();
    const subType = jType.length > 1 && jType[1].toLowerCase() === 'analysis' ? 'analysis' : 'job';
    const filterset = JSON.parse(jobItem.jobFltrset);
    const start = moment(jobItem.strtYmdt);
    const startStr = start.isValid() ? start.format('YYYY-MM-DD HH:mm') : '-';
    const end = moment(jobItem.endYmdt);
    const endStr = end.isValid() && jobItem.jobStas !== 'running' ? end.format('YYYY-MM-DD HH:mm') : '-';
    const link = side === 'external' ?
      `/external/explorer/${subType}/${jobItem.jobNo}` :
      `/internal/explorer/job/${jobItem.jobNo}`;
    const fStart = moment.unix(filterset.period.start);
    const filterStart = fStart.isValid() ? fStart.format('YYYY-MM-DD HH:mm') : '-';
    const fEnd = moment.unix(filterset.period.end);
    const filterEnd = fEnd.isValid() ? fEnd.format('YYYY-MM-DD HH:mm') : '-';
    const isExpired = jobItem.delYn && typeof jobItem.delYn === 'string' ?
     jobItem.delYn.toLowerCase() === 'y' : false;
    const trClass = classNames({
      'expired-job': isExpired
    });
    const status = (jobItem.jobStas === 'running' || jobItem.jobStas === 'submitted') ?
      `Running ${jobItem.jobProcessPercent}%` : isExpired ? 'Expired' :
      jobItem.jobStas === 'completed' ? 'Finished' :
      jobItem.jobStas === 'suspended' ? 'Suspended' : 'Running';

    return (
      <tr className={trClass}>
        <td className="text-center">{jobItem.jobNo}</td>
        <td className="text-center">
          {jobItem.jobTp[0].toUpperCase() + jobItem.jobTp.toLowerCase().slice(1)}
        </td>
        <td className="text-left">
          {
            editFlag ?
              (<input
                type="text"
                ref={c => this.jobNm = c}
                className="form-control name-input"
                defaultValue={jobItem.jobNm || 'add name'}
                onKeyPress={evt => this.handleNmKeyPress(evt, jobItem)}
                onKeyDown={evt => this.handleQuit(evt, 'node')}
                onFocus={this.handleFocus}
                maxLength="20"
              />) :
              (<span className="jobNm">
                <a
                  onClick={this.openJobPopup}
                  className="link-jobNm"
                  ref={c => this.jobNmTxt = c}
                >
                  {jobItem.jobNm || 'add name'}
                </a>
                <a
                  className="rename-btn"
                  onClick={this.handleEdit}
                >
                  <i className="fa fa-pencil" title="Edit the name" />
                </a>
              </span>)
          }
        </td>
        <td className="text-center">
          {
            jobItem.jobStas === 'failed' ?
              <a
                onClick={this.openFD}
                className="link-fd"
                ref={c => this.failedBtn = c}
              >
                Failed
              </a> : status
          }
        </td>
        <td className="text-center ellipsis">{startStr}</td>
        <td className="text-center ellipsis">{endStr}</td>
        <td className="text-center">
          {
            this.renderActionBtn(jobItem, filterset, filterStart, filterEnd, isPausing ||
              isResuming)
          }
          {
            jobItem.jobStas === 'completed' ? (
              <a
                className="link-color redirect-btn"
                onClick={() => this.redirectToExplorer(jobItem.jobNo, link)}
              >
                <i className="fa fa-share" title="ToExplorer" />
              </a>
            ) :
            jobItem.jobStas === 'running' || jobItem.jobStas === 'submitted' || jobItem.jobStas === 'suspended' ? (
              <Link to={link} className="link-color redirect-btn">
                <i className="fa fa-share" title="ToExplorer" />
              </Link>
            ) :
            jobItem.jobStas === 'failed' ? (
              <a
                className="link-color"
                onClick={this.isRestartJob}
              >
                <i className="fa fa-repeat" title="Restart" />
              </a>
            ) : <span className="icon-width" />
          }
          {
            <a className="link-color del-btn">
              <i
                className="fa fa-times"
                title="Remove this job"
                onClick={() => this.handleRemove(jobItem.jobNo)}
              />
            </a>
          }
          <Popup
            type="job"
            ref={c => this.jobpop = c}
            item={jobItem}
            filterset={filterset}
            startStr={startStr}
            endStr={endStr}
            showPop={this.state.showPop}
            onPopClose={this.closeJobPopup}
            redirectToExplorer={() => this.redirectToExplorer(jobItem.jobNo, link)}
          />
          <FailureDetail
            detail={jobItem.failedDetail}
            ref={c => this.fd = c}
            jobNm={jobItem.jobNm}
            showFD={this.state.showFD}
            onFDClose={this.closeFD}
          />
          <SweetAlert
            show={this.state.isOpenIfRemakeJob}
            type="info"
            title={jobItem.jobStas === 'failed' ? 'Job failed!' : 'Job expired!'}
            text="Will you remake an async job with this parameter?"
            showCancelButton
            onConfirm={() => {
              restartExpire(jobItem.jobNo, curPage, entriesPerPage);
              this.setState({ isOpenIfRemakeJob: false });
            }}
            onCancel={() => {
              updateExpire(jobItem.jobNo, curPage, entriesPerPage);
              this.setState({ isOpenIfRemakeJob: false });
            }}
          />
          <SweetAlert
            show={this.state.handleError}
            type="error"
            title="Request failed"
            text="Maybe this job is dirty data!"
            onConfirm={() => {
              this.setState({ handleError: false });
              clearrestartExpireError(jobItem.jobNo);
            }}
          />
        </td>
      </tr>
    );
  }
}
