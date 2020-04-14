import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import { browserHistory } from 'react-router';
import classNames from 'classnames';
import List from '../../Common/List';
// import RadioList from '../../Common/RadioList';
import Period from '../../Common/Period';
import Top from '../../Common/Top';
import LabelDropdown from '../../../Common/LabelDropdown';
import { Modal, TextInput, ErrorInfo, OverwriteCheck } from '../../../InputModal';
import { INFILTER_TYPES } from '../../../../constants/Internal/Explorer/FilterTypes';
import { BASE_URL, CHARTS_URL, EXPLORER_CHECK_ASYNC_URL } from '../../../../constants/Url';
import chartUtils from '../../../../../lib/chartUtils';
import './index.less';


export default class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowTcp: false,
      isOpenSave: false,
      isOpenSubmit: false,
      showError: false,
      isEmptyName: false,
      sendingJob: false,
    };
    this.protocolList = this.getList('protocol').list;
    this.tcpList = this.getList('tcp flag').list;
    this.packetList = this.getList('packet size').list;
    this.dataList = this.getList('data').list;
    this.aggregationList = this.getList('aggregation').list;
  }

  componentDidMount() {
    const { getJob, getFilter, getFlow, setType, setNo } = this.props;
    if (setType === 'job' && setNo) {
      getJob(setNo);
    } else if (setType === 'filter' && setNo) {
      getFilter(setNo);
    } else if (setType === 'flow' && setNo) {
      getFlow(setNo);
    }
  }

  componentWillReceiveProps(nProps) {
    const {
      checkList,
      select,
      separateList,
      toggleSeparate,
      setSearchQuery,
      selectedItemList,
      setNo
    } = this.props;
    if ((checkList.protocol.length === 1 && checkList.protocol[0] === 'tcp') &&
      (nProps.checkList.protocol.length !== 1 || nProps.checkList.protocol[0] !== 'tcp')) {
      select({ type: 'tcp flag', item: 'all' });
      if (separateList['tcp flag']) {
        toggleSeparate('tcp flag');
      }
    }
    if (setNo && Object.keys(selectedItemList).length === 0 &&
    Object.keys(nProps.selectedItemList).length !== 0) {
      const query = this.generateUploadQuery(nProps);
      setSearchQuery(query);
    }
    if (nProps.checkSubmitNmStatus.isDup) {
      this.setState({
        sendingJob: false,
      });
    }
  }

  componentDidUpdate(preProps) {
    const { getFlowStatus, getFilterStatus } = this.props;

    if ((!getFlowStatus.isFetching && preProps.getFlowStatus.isFetching) ||
    (!getFilterStatus.isFetching && preProps.getFilterStatus.isFetching &&
    getFilterStatus.res && getFilterStatus.res.isTmp)) {
      this.submitFilter();
    }
  }

  setSaveModal = (isOpen) => {
    const { checkFiltersNameSuccess } = this.props;
    this.setShowError(false);
    this.setState({
      isOpenSave: isOpen,
    });
    if (!isOpen) {
      checkFiltersNameSuccess(false); // clear exsisted overwrite message
    }
  };

  setSubmitModal = (isOpen) => {
    const { checkSubmitNmSuccess } = this.props;

    this.setState({
      isOpenSubmit: isOpen,
    });
    if (!isOpen) {
      checkSubmitNmSuccess(false); // clear exsisted error message
      this.setState({
        isEmptyName: false,
      });
      this.setState({
        sendingJob: false,
      });
    }
  };

  setShowError = (isShow) => {
    this.setState({
      showError: isShow,
    });
  };

  getList = type =>
    INFILTER_TYPES.find(list => list.name.toLowerCase() === type.toLowerCase());

  handleChange = (evt) => {
    this.setState({
      isShowTcp: evt.target.value.toLowerCase() === 'tcp',
    });
  };

  handleTop =(limit, order) => {
    const { setTop } = this.props;
    setTop({ limit, order });
  };

  handlePeriod =(start, end) => {
    const { setPeriod } = this.props;
    setPeriod({ start, end });
  };

  generateUploadQuery = (nProps = null) => {
    const {
      selectedItemList,
      separateList,
      radioList,
      checkList,
      top,
      period
    } = (nProps || this.props);
    let query = {};
    for (const key in selectedItemList) {
      if (!Object.keys(selectedItemList[key]).length) {
        continue;
      }
      const keyArr = key.split('_');
      const site = keyArr[0].toLowerCase() === 'a' ? 'src' : 'dst';
      const domain = keyArr[1].toLowerCase();
      if (!query[site]) {
        query[site] = {};
      }
      if (!query[site][domain]) {
        if (domain === 'prefix') {
          const ipSel = [];
          const prefixSel = [];
          for (let i = 0, len = selectedItemList[key].length; i < len; i++) {
            if (selectedItemList[key][i].text.indexOf('/24') === -1) {
              ipSel.push(selectedItemList[key][i]);
            } else {
              prefixSel.push(selectedItemList[key][i]);
            }
          }
          if (ipSel.length > 0) {
            query[site].prefix = {
              value: ipSel.map(item => item.id),
              name: ipSel.map(item => item.text),
              separate: separateList[key] === undefined ? false : separateList[key]
            };
          }
          if (prefixSel.length > 0) {
            query[site].prefix = {
              value: prefixSel.map(item => item.id.replace(/[\d]+\/24$/, '0')),
              name: prefixSel.map(item => item.text),
              separate: separateList[key] === undefined ? false : separateList[key]
            };
          }
        } else {
          query[site][domain] = {
            value: selectedItemList[key].map(item => item.id),
            name: selectedItemList[key].map(item => item.text),
            separate: separateList[key] === undefined ? false : separateList[key]
          };
        }
      }
    }
    query = {
      ...query,
      requestType: 'explorer',
      type: 'internal',
      top: {
        limit: top.limit,
        order: top.order,
      },
      directionType: 'all',
      itemType: radioList.data,
      protocol: {
        value: checkList.protocol,
        separate: false,
      },
      packetSize: {
        value: checkList['packet size'],
        separate: false,
      },
      period: {
        start: period.start,
        end: period.end,
      },
      aggregation: radioList.aggregation,
      interval: radioList.interval,
      showDiff: false,
    };

    if (query.protocol.value.length === 1 && query.protocol.value[0] === 'tcp') {
      query.tcpFlag = {
        value: checkList['tcp flag'],
        separate: false
      };
    }

    return query;
  };

  submitFilter = () => {
    const { setNo, setSearchQuery } = this.props;
    // prior to starting a fresh request, set url to default
    if (setNo) {
      browserHistory.push('/internal/explorer');
    }
    const query = this.generateUploadQuery();
    setSearchQuery(query);
    this.checkAsync(query);
    // const url = `${BASE_URL}${CHARTS_URL}`;
    // fetchResultRequest();
    // chartUtils.chartFetcher(query, url, 'inExplorer',
    //   (res) => {
    //     if (typeof res.data === 'number') {
    //       this.setSubmitModal(true);
    //       fetchResultSuccess(null);
    //     } else if (res.data instanceof Object) {
    //       fetchResultSuccess(res.data);
    //     }
    //   });
  };

  checkAsync = (query) => {
    const url = `${BASE_URL}${EXPLORER_CHECK_ASYNC_URL}`;
    axios.post(url, query)
    .then((res) => {
      if (res) {
        if (res.data) {
          this.yesAsync();
        } else {
          this.noAsync(query);
        }
      }
    });
  };

  yesAsync = () => {
    const { fetchResultSuccess } = this.props;
    this.setSubmitModal(true);
    fetchResultSuccess(null);
  };

  noAsync = (query) => {
    const { fetchResultRequest, fetchResultSuccess } = this.props;
    const url = `${BASE_URL}${CHARTS_URL}`;
    fetchResultRequest();
    chartUtils.chartFetcher(query, url, 'exExplorer',
      (res) => {
        if (res && res.data) {
          fetchResultSuccess(res.data);
        }
      });
  };

  checkSubmitInput = (inputVal, jobTp, fn) => {
    const { checkSubmitNm, searchQuery } = this.props;
    checkSubmitNm(inputVal, searchQuery, jobTp, fn);
  };

  submitUpdate = (state) => {
    if (state.inputText && state.inputText.trim() !== '') {
      this.setState({
        sendingJob: true,
      });
      this.checkSubmitInput(state.inputText, 'INTERNAL', () => {
        this.setState({
          sendingJob: false,
        });
        this.setSubmitModal(false);
        browserHistory.push('/my/job');
      });
    } else {
      this.setState({
        isEmptyName: true,
      });
    }
  };

  checkSaveNm = (inputText) => {
    const query = this.generateUploadQuery();
    const payload = {
      fltrsetNm: inputText,
      fltrsetTp: 'internal',
      fltrset: JSON.stringify(query),
      creEmpNo: null,
      creYmdt: null,
      modYmdt: null
    };
    this.props.checkFiltersetsName(inputText, payload, () => {
      this.setSaveModal(false);
      browserHistory.push('/my/filter');
    });
  };

  saveFilter = (state) => {
    if (state.inputText) {
      this.setShowError(false);
      if (!state.check) {
        this.checkSaveNm(state.inputText);
      } else {
        this.overwriteFilter(state.inputText);
      }
    } else {
      this.setShowError(true);
    }
  };

  overwriteFilter = (inputVal) => {
    const { checkSetNmStatus, updateFilterset } = this.props;
    const query = this.generateUploadQuery();
    const payload = {
      fltrsetNm: inputVal,
      fltrsetTp: 'internal',
      fltrset: JSON.stringify(query),
      creEmpNo: null,
      creYmdt: null,
      modYmdt: null,
    };
    const { fltrsetNo } = checkSetNmStatus;
    updateFilterset(fltrsetNo, payload, undefined, undefined, () => {
      this.setSaveModal(false);
      browserHistory.push('/my/filter');
    });
  };

  renderSubmitModal = (isDup, isEmptyName) => {
    const components = [<TextInput key="0" placeholder="Job name" maxLength={20} focus />];
    // components.unshift(<NoticeInfo key="1" />);
    if (isDup) {
      components.push(<ErrorInfo key="1" msg="A job with that name already exists." />);
    }
    if (isEmptyName) {
      components.push(<ErrorInfo key="2" msg="Please input the job name." />);
    }
    return components;
  };

  renderSaveModal = (isDup) => {
    const components = [<TextInput key="0" placeholder="Filter name" maxLength={20} focus />];
    if (isDup) {
      components.push(<OverwriteCheck
        key="1"
        msg="The filter name already exists. Do you want to overwrite it?"
      />);
    }
    if (this.state.showError) {
      components.push(<ErrorInfo key="2" msg="Filter name is not valid." />);
    }
    return components;
  };

  renderInterval = () => {
    const { period, radioList, checkRadio } = this.props;
    const start = moment.unix(period.start);
    const end = moment.unix(period.end);
    const diffY = end.diff(start, 'years');
    const diffM = end.diff(start, 'month');
    const diffD = end.diff(start, 'days');
    const diffH = end.diff(start, 'hours');
    const intervalList = this.getList('interval').list;
    let _intervalList = intervalList;

    if (diffY >= 1) {
      _intervalList = intervalList.slice(3);
    } else if (diffY < 1 && diffM >= 1) {
      _intervalList = intervalList.slice(2);
    } else if (diffM < 1 && diffD >= 7) {
      _intervalList = intervalList.slice(1);
    } else if (diffD < 7 && diffH >= 24) {
      _intervalList = intervalList;
    } else {
      _intervalList = intervalList.slice(0, 3);
    }

    return (
      <LabelDropdown
        label="Interval"
        list={_intervalList}
        selected={radioList.interval}
        onCheck={checkRadio}
      />
    );
  }

  render() {
    const {
      favoredItemList,
      selectedItemList,
      initResList,
      initListSuccess,
      searchResList,
      period,
      addFavItem,
      removeFavItem,
      addSelItem,
      removeSelItem,
      clearSel,
      removeALLSelItem,
      addSelIfrouter,
      removeSelIfrouter,
      searchList,
      searchListSuccess,
      initList,
      saveItem,
      delItem,
      initItem,
      toggleSeparate,
      separateList,
      checkSetNmStatus,
      checkSubmitNmStatus,
      fetchResultStatus,
      updateNmStatus,
      radioList,
      checkList,
      top,
      isShowFilter,
      toggleFilterBar,
      aRouterSelected,
      bRouterSelected,
      setARouterFlag,
      setBRouterFlag,
      select,
      checkRadio,
    } = this.props;

    const { isOpenSave, isOpenSubmit } = this.state;
    const isRequesting = checkSubmitNmStatus.isChecking ||
      (fetchResultStatus && fetchResultStatus.exExplorer &&
      fetchResultStatus.exExplorer.isFetching) || updateNmStatus.isUpdating;
    const submitBtnClass = classNames('btn', 'btn-info', 'btn-xs', {
      'disabled-btn': isRequesting,
    });
    const barClass = classNames('filter-bar', {
      'hide-bar': !isShowFilter,
    });
    const foldBtnClass = classNames('fa', {
      'fa-chevron-left': isShowFilter,
      'fa-chevron-right': !isShowFilter,
    });

    return (
      <div className={barClass}>
        <div className="filter">
          <span className="toLeft" onClick={toggleFilterBar}>
            <i className={foldBtnClass} />
          </span>
          <List
            title="A"
            list={this.getList('a')}
            favoredItemList={favoredItemList}
            selectedItemList={selectedItemList}
            initResList={initResList}
            searchResList={searchResList}
            addFavItem={addFavItem}
            removeFavItem={removeFavItem}
            addSelItem={addSelItem}
            removeSelItem={removeSelItem}
            clearSel={clearSel}
            addSelIfrouter={addSelIfrouter}
            removeSelIfrouter={removeSelIfrouter}
            searchList={searchList}
            searchListSuccess={searchListSuccess}
            initList={initList}
            initListSuccess={initListSuccess}
            saveItem={saveItem}
            delItem={delItem}
            initItem={initItem}
            toggleSeparate={toggleSeparate}
            separateList={separateList}
            removeALLSelItem={removeALLSelItem}
            isARouterSelected={aRouterSelected}
            isBRouterSelected={bRouterSelected}
            setARouterState={setARouterFlag}
            setBRouterState={setBRouterFlag}
          />
          <List
            title="B"
            list={this.getList('b')}
            favoredItemList={favoredItemList}
            selectedItemList={selectedItemList}
            initResList={initResList}
            searchResList={searchResList}
            addFavItem={addFavItem}
            removeFavItem={removeFavItem}
            addSelItem={addSelItem}
            removeSelItem={removeSelItem}
            clearSel={clearSel}
            addSelIfrouter={addSelIfrouter}
            removeSelIfrouter={removeSelIfrouter}
            searchList={searchList}
            searchListSuccess={searchListSuccess}
            initList={initList}
            initListSuccess={initListSuccess}
            saveItem={saveItem}
            delItem={delItem}
            initItem={initItem}
            toggleSeparate={toggleSeparate}
            separateList={separateList}
            removeALLSelItem={removeALLSelItem}
            listClass="user-list"
            isARouterSelected={aRouterSelected}
            isBRouterSelected={bRouterSelected}
            setBRouterState={setBRouterFlag}
            setARouterState={setARouterFlag}
          />
          {
          // <RadioList
          //   invisibleTitle="direction"
          //   list={this.getList('direction')}
          //   className="direction-radiolist"
          //   selected={radioList.direction}
          //   onCheck={checkRadio}
          // />
          }
          <Top
            list={this.getList('top').list}
            selected={top.order}
            onTop={this.handleTop}
            top={top}
          />
          <LabelDropdown
            mult
            label="Protocol"
            list={this.protocolList}
            selected={checkList.protocol}
            onSelect={select}
          />
          <LabelDropdown
            mult
            label="TCP Flag"
            list={this.tcpList}
            selected={checkList['tcp flag']}
            onSelect={select}
            disabled={checkList.protocol.length !== 1 || checkList.protocol[0] !== 'tcp'}
          />
          <LabelDropdown
            mult
            label="Packet Size"
            list={this.packetList}
            selected={checkList['packet size']}
            onSelect={select}
          />
          <LabelDropdown
            label="Data"
            list={this.dataList}
            selected={radioList.data}
            onCheck={checkRadio}
          />
          <Period
            list={this.getList('period').list}
            onPeriod={this.handlePeriod}
            period={period}
          />
          <div className="box">
            <LabelDropdown
              label="Aggregation"
              list={this.aggregationList}
              selected={radioList.aggregation}
              onCheck={checkRadio}
            />
            {this.renderInterval()}
          </div>
          <div className="action-group">
            <button
              type="button"
              className={submitBtnClass}
              onClick={this.submitFilter}
              disabled={isRequesting}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-info btn-xs"
              onClick={() => this.setSaveModal(true)}
            >
              Save
            </button>
            <Modal
              isOpen={isOpenSubmit}
              confirm={this.submitUpdate}
              confirmDisabled={this.state.sendingJob}
              close={() => { this.setSubmitModal(false); }}
              title="Send to my jobs"
              yesText="Create"
              noText="Cancel"
            >
              { this.renderSubmitModal(checkSubmitNmStatus.isDup, this.state.isEmptyName) }
            </Modal>
            <Modal
              isOpen={isOpenSave}
              confirm={this.saveFilter}
              close={() => this.setSaveModal(false)}
              title="Save to my filterset"
              yesText="Create"
            >
              { this.renderSaveModal(checkSetNmStatus.isDup) }
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
