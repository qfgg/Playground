import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { browserHistory } from 'react-router';
import classNames from 'classnames';
import List from '../../Common/List';
import Period from '../../Common/Period';
import Top from '../../Common/Top';
import LabelDropdown from '../../../Common/LabelDropdown';
import Checkbox from '../../../Common/Checkbox';
import { Modal, TextInput, ErrorInfo, OverwriteCheck } from '../../../InputModal';
import { EXFILTER_TYPES } from '../../../../constants/External/Explorer/FilterTypes';
import chartUtils from '../../../../../lib/chartUtils';
import { BASE_URL, CHARTS_URL, EXPLORER_CHECK_ASYNC_URL } from '../../../../constants/Url';
import './index.less';


export default class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenSave: false,
      isOpenSubmit: false,
      isOpenAnalyze: false,
      showError: false,
      isEmptyName: false,
      sendingJob: false,
      sendingAJob: false,
      isEmptyNameA: false
    };
    this.protocolList = this.getList('protocol').list;
    this.tcpList = this.getList('tcp flag').list;
    this.packetList = this.getList('packet size').list;
    this.dataList = this.getList('data').list;
    this.aggregationList = this.getList('aggregation').list;
  }

  componentDidMount() {
    const { getJob, getFilter, getFlow, setType, setNo } = this.props;
    if ((setType === 'job' || setType === 'analysis') && setNo) {
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
      setNo,
      setFilter
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
      setFilter(query);
    }
    // change to 1 item, clear disable checkbox
    if (((checkList.protocol.length === 1 && checkList.protocol[0] === 'all') ||
      checkList.protocol.length !== 1) && nProps.checkList.protocol.length === 1 &&
      nProps.checkList.protocol[0] !== 'all') {
      if (separateList.protocol) {
        toggleSeparate('protocol');
      }
    }
    if (((checkList['tcp flag'].length === 1 && checkList['tcp flag'][0] === 'all') ||
      checkList['tcp flag'].length !== 1) && nProps.checkList['tcp flag'].length === 1 &&
      nProps.checkList['tcp flag'][0] !== 'all') {
      if (separateList['tcp flag']) {
        toggleSeparate('tcp flag');
      }
    }
    if (((checkList['packet size'].length === 1 && checkList['packet size'][0] === 'all') ||
      checkList['packet size'].length !== 1) && nProps.checkList['packet size'].length === 1 &&
      nProps.checkList['packet size'][0] !== 'all') {
      if (separateList['packet size']) {
        toggleSeparate('packet size');
      }
    }
    if (nProps.checkSubmitNmStatus.isDup) {
      this.setState({
        sendingJob: false,
        sendingAJob: false
      });
    }
  }

  componentDidUpdate(preProps) {
    const { getFlowStatus, getFilterStatus, setNo, filter, restoreState } = this.props;

    if ((!getFlowStatus.isFetching && preProps.getFlowStatus.isFetching) ||
    (!getFilterStatus.isFetching && preProps.getFilterStatus.isFetching &&
    getFilterStatus.res && getFilterStatus.res.isTmp)) {
      this.submitFilter();
    }

    if (preProps.setNo && !setNo) {
      restoreState(filter);
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
        sendingAJob: false
      });
    }
  };

  setAnylyzeModal = (isOpen) => {
    const { checkSubmitNmSuccess } = this.props;

    this.setState({
      isOpenAnalyze: isOpen,
    });
    if (!isOpen) {
      checkSubmitNmSuccess(false); // clear exsisted error message
      this.setState({
        isEmptyNameA: false,
      });
      this.setState({
        sendingAJob: false,
      });
    }
  };

  setShowError = (isShow) => {
    this.setState({
      showError: isShow,
    });
  };

  getList = type =>
    EXFILTER_TYPES.filter(list => list.name.toLowerCase() === type.toLowerCase())[0];

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
      period,
      allIF,
      routerIF
    } = (nProps || this.props);
    let query = {};
    for (const key in selectedItemList) {
      if (!Object.keys(selectedItemList[key]).length) {
        continue;
      }
      const keyArr = key.split('_');
      if (keyArr.length === 3) {
        continue;
      }
      const site = keyArr[0].toLowerCase();
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
            separate: separateList[key] === undefined ?
              false : separateList[key]
          };
        }
      }
    }
    // if (selectedItemList.Server_IF &&
    // selectedItemList.Server_IF.length &&
    // selectedItemList.Server_IF_Router &&
    // selectedItemList.Server_IF_Router.length) {
    //   query.server = query.server || {};
    //   query.server.router = query.server.router || {};
    //   if (query.server.router.value) {
    //     if (query.server.router.value.indexOf(selectedItemList.Server_IF_Router[0].id) === -1) {
    //       query.server.router = {
    //         value: [...query.server.router.value, selectedItemList.Server_IF_Router[0].id],
    //         name: [...query.server.router.name, selectedItemList.Server_IF_Router[0].text],
    //         separate: separateList.Server_Router === undefined ? false :
    // separateList.Server_Router
    //       };
    //     }
    //   } else {
    //     query.server.router = {
    //       value: [selectedItemList.Server_IF_Router[0].id],
    //       name: [selectedItemList.Server_IF_Router[0].text],
    //       separate: false
    //     };
    //   }
    // }
    if (allIF) {
      query.server = {
        ...(query.server || {}),
        if: {
          value: ['*'],
          name: ['*'],
          separate: !!separateList.Server_IF
        }
      };
    }
    const ifRouters = routerIF ? Object.keys(routerIF).map(item => `${item}:*`) : null;
    if (ifRouters && ifRouters.length > 0) {
      if (query.server) {
        if (query.server.if) {
          query.server.if = {
            value: [...query.server.if.value, ...ifRouters],
            name: query.server.if.name,
            separate: !!separateList.Server_IF
          };
        } else {
          query.server.if = {
            value: ifRouters,
            separate: !!separateList.Server_IF
          };
        }
        // if (query.server.router) {
        //   query.server.router = {
        //     ...query.server.router,
        //     value: [...query.server.router.value,
        //       ...ifRouters.filter(item => query.server.router.value.indexOf(item) === -1)]
        //   };
        // } else {
        //   query.server.router = {
        //     value: ifRouters
        //   };
        // }
      } else {
        query.server = {
          // router: {
          //   value: ifRouters
          // },
          if: {
            value: ifRouters,
            separate: !!separateList.Server_IF
          }
        };
      }
    }
    query = {
      ...query,
      requestType: 'explorer',
      type: 'external',
      top: {
        limit: top.limit,
        order: top.order,
      },
      directionType: 'all',
      itemType: radioList.data,
      protocol: {
        value: checkList.protocol,
        separate: separateList.protocol === undefined ? false : separateList.protocol
      },
      packetSize: {
        value: checkList['packet size'],
        separate: separateList['packet size'] === undefined ? false : separateList['packet size']
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
        separate: separateList['tcp flag'] === undefined ? false : separateList['tcp flag']
      };
    }

    return query;
  };

  submitFilter = () => {
    const { setNo, setSearchQuery, setFilter } = this.props;
    // prior to starting a fresh request, set url to default
    if (setNo) {
      browserHistory.push('/external/explorer');
    }
    const query = this.generateUploadQuery();
    setSearchQuery(query);
    setFilter(query);
    this.checkAsync(query);
    // const url = `${BASE_URL}${CHARTS_URL}`;
    // fetchResultRequest();
    // chartUtils.chartFetcher(query, url, 'exExplorer',
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
    const { checkSubmitNm, searchQuery, setSearchQuery, setFilter } = this.props;
    let q = searchQuery;
    if (Object.keys(searchQuery).length === 0) {
      const query = this.generateUploadQuery();
      setSearchQuery(query);
      setFilter(query);
      q = query;
    }
    checkSubmitNm(inputVal, q, jobTp, fn);
  };

  submitUpdate = (state) => {
    if (state.inputText && state.inputText.trim() !== '') {
      this.setState({
        sendingJob: true,
      });
      this.checkSubmitInput(state.inputText, 'EXTERNAL_EXPLORER', () => {
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

  submitAnalyze = (state) => {
    if (state.inputText && state.inputText.trim() !== '') {
      this.setState({
        sendingAJob: true,
      });
      this.checkSubmitInput(state.inputText, 'EXTERNAL_ANALYSIS', () => {
        this.setState({
          sendingAJob: false,
        });
        this.setAnylyzeModal(false);
        browserHistory.push('/my/job');
      });
    } else {
      this.setState({
        isEmptyNameA: true,
      });
    }
  };

  checkSaveNm = (inputText) => {
    const query = this.generateUploadQuery();
    const payload = {
      fltrsetNm: inputText,
      fltrsetTp: 'external',
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
      fltrsetTp: 'external',
      fltrset: JSON.stringify(query),
      creEmpNo: null,
      creYmdt: null,
      modYmdt: null
    };
    const { fltrsetNo } = checkSetNmStatus;
    updateFilterset(fltrsetNo, payload, undefined, undefined, () => {
      this.setSaveModal(false);
      browserHistory.push('/my/filter');
    });
  };

  renderAnalyzeModal = (isDup, isEmptyName) => {
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
      addSelIfrouter,
      removeSelIfrouter,
      searchList,
      searchListSuccess,
      initList,
      saveItem,
      delItem,
      initItem,
      toggleSeparate,
      checkSubmitNmStatus,
      checkSetNmStatus,
      fetchResultStatus,
      updateNmStatus,
      radioList,
      checkList,
      top,
      separateList,
      isShowFilter,
      toggleFilterBar,
      checkRadio,
      select,
      allIF,
      routerIF,
      addAllIF,
      clearAllIF,
      addRouterIF,
      removeRouterIF,
      clearRouterIF
    } = this.props;

    const { isOpenSave, isOpenSubmit, isOpenAnalyze } = this.state;
    const isRequesting = checkSubmitNmStatus.isChecking ||
      (fetchResultStatus && fetchResultStatus.exExplorer &&
      fetchResultStatus.exExplorer.isFetching) || updateNmStatus.isUpdating;
    const submitBtnClass = classNames('btn', 'btn-info', 'btn-xs', 'btn3', {
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
            title="Server"
            list={this.getList('server')}
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
            allIF={allIF}
            routerIF={routerIF}
            addAllIF={addAllIF}
            clearAllIF={clearAllIF}
            addRouterIF={addRouterIF}
            removeRouterIF={removeRouterIF}
            clearRouterIF={clearRouterIF}
          />
          <List
            title="User"
            list={this.getList('user')}
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
            listClass="user-list"
          />
          <Top
            list={this.getList('top').list}
            selected={top.order}
            onTop={this.handleTop}
            top={top}
          />
          <div className="sep">
            <span>Separate</span>
          </div>
          <LabelDropdown
            mult
            label="Protocol"
            list={this.protocolList}
            selected={checkList.protocol}
            onSelect={select}
          />
          <Checkbox
            checked={separateList.protocol}
            className="checkbox-inline pull-right drop-check"
            onCheck={() => toggleSeparate('protocol')}
            disabled={checkList.protocol.length === 1 && checkList.protocol[0] !== 'all'}
          />
          <LabelDropdown
            mult
            label="TCP Flag"
            list={this.tcpList}
            selected={checkList['tcp flag']}
            onSelect={select}
            disabled={checkList.protocol.length !== 1 || checkList.protocol[0] !== 'tcp'}
          />
          <Checkbox
            checked={separateList['tcp flag']}
            className="checkbox-inline pull-right drop-check"
            onCheck={() => toggleSeparate('tcp flag')}
            disabled={(checkList['tcp flag'].length === 1 && checkList['tcp flag'][0] !== 'all') ||
              (checkList.protocol.length !== 1 || checkList.protocol[0] !== 'tcp')}
          />
          <LabelDropdown
            mult
            label="Packet Size"
            list={this.packetList}
            selected={checkList['packet size']}
            onSelect={select}
          />
          <Checkbox
            checked={separateList['packet size']}
            className="checkbox-inline pull-right drop-check"
            onCheck={() => toggleSeparate('packet size')}
            disabled={checkList['packet size'].length === 1 && checkList['packet size'][0] !== 'all'}
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
              className="btn btn-info btn-xs btn3"
              onClick={() => this.setSaveModal(true)}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-info btn-xs btn3"
              onClick={() => this.setAnylyzeModal(true)}
            >
              Analyze
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
            <Modal
              isOpen={isOpenAnalyze}
              confirm={this.submitAnalyze}
              confirmDisabled={this.state.sendingAJob}
              close={() => { this.setAnylyzeModal(false); }}
              title="Send to my jobs"
              yesText="Create"
              noText="Cancel"
            >
              { this.renderAnalyzeModal(checkSubmitNmStatus.isDup, this.state.isEmptyNameA) }
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
