import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios';
import classNames from 'classnames';
import { ignoreSeconds, flowDataFormatter } from '../../helper';
import './index.less';
import chartUtils from '../../../lib/chartUtils';
import intSearchUtils from '../../../lib/search';
import LogInfo from '../Header/LogInfo';
import { MAIN_PAGE_DESP } from '../../constants/helpDesp';
import {
  BASE_URL,
  CHARTS_URL,
  SEARCH_AS_URL,
  SEARCH_IF_URL,
  SEARCH_ROUTER_URL,
  SEARCH_CARRIER_URL,
  SEARCH_ESM_URL,
  SEARCH_LINE_URL,
  SEARCH_COUNTRY_URL,
  SEARCH_POP_URL,
  SEARCH_IDC_URL,
  AUTH_URL
} from '../../constants/Url';
import { DATA_TITLE } from '../../constants/App/AppTypes';
import { EX_DOMAIN, IN_DOMAIN, ID_MAP } from '../../constants/IntegrationSearch/SearchTypes';


const mapStateToProps = state => ({
  myMenu: state.myAppReducer.myMenu,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  actions: bindActionCreators({}, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      showMemu: false,
      curOpenMenu: '',
    };
  }

  DataSummaryQuery = (side) => {
    const query = {
      type: side,
      requestType: 'dashboard_table',
      fieldTopLimit: 0,
      directionType: 'all',
      itemType: 'all',
      period: {
        start: ignoreSeconds(moment().subtract(5, 'minute')),
        end: ignoreSeconds(moment())
      },
      aggregation: 'avg',
      interval: '1m',
      page: 0,
      size: 0,
      showDiff: false,
    };
    return query;
  };

  componentWillMount() {
    axios.defaults.withCredentials = true;
    if (!localStorage.getItem('loginUser')) {
      this.getUserInfo();
    }
    axios.interceptors.response.use(
      response => response,
      (error) => {
        if (error) {
          if (error.status === 'UNAUTHORIZED') {
            localStorage.removeItem('userToken');
            localStorage.removeItem('loginUser');
            localStorage.removeItem('myMenu');
            browserHistory.push('/login');
          } else if (error.response) {
            if (error.response.status && error.response.status === 401) {
              localStorage.removeItem('userToken');
              localStorage.removeItem('loginUser');
              localStorage.removeItem('myMenu');
              browserHistory.push('/login');
            }
            return Promise.reject(error.response.data);
          }
        }
        return Promise.reject(error);
      });
    // document.cookie = `nssTok=${localStorage.getItem('userToken')};domain=navercorp.com;`;
    // axios.defaults.headers.common.Authorization = localStorage.getItem('userToken');
  }

  getUserInfo = () => {
    const url = `${BASE_URL}${AUTH_URL}`;
    axios.post(url, {})
    .then((res) => {
      if (res.data === '' || res.data === null || res.data === {} || res.data.userId === '') {
        return;
      }
      localStorage.setItem('loginUser', `${res.data.userId}_${res.data.userName}`);
      const { setUserInfo } = this.props;
      setUserInfo(`${res.data.userId}_${res.data.userName}`);
    }).catch(() => {
      if (localStorage.getItem('userToken')) {
        localStorage.removeItem('userToken');
        localStorage.removeItem('myMenu');
      }
    });
  }

  componentDidMount() {
    const url = `${BASE_URL}${CHARTS_URL}`;
    chartUtils.chartFetcher(this.DataSummaryQuery('external'), url, 'exStatus');
    chartUtils.chartFetcher(this.DataSummaryQuery('internal'), url, 'inStatus');

    this.getCurrentMoment();
    this.intsearch.focus();
    document.addEventListener('click', this.handleDocumentClick, false);
    // if (this.mainContent) {
    //   this.mainContent.style.minHeight = `${(document.body.clientHeight - 100)}px`;
    //   window.addEventListener('resize', () => {
    //     if (this.mainContent) {
    //       this.mainContent.style.minHeight = `${(document.body.clientHeight - 100)}px`;
    //     }
    //   });
    // }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  handleDocumentClick = (evt) => {
    if (this.menubtn && this.menuPane && !this.menubtn.contains(evt.target)
    && !this.menuPane.contains(evt.target) && this.state.showMemu) {
      this.setState({
        showMemu: false,
      });
    }
  }

  refreshData = () => {
    this.getCurrentMoment();
    const url = `${BASE_URL}${CHARTS_URL}`;
    chartUtils.chartFetcher(this.DataSummaryQuery('external'), url, 'exStatus');
    chartUtils.chartFetcher(this.DataSummaryQuery('internal'), url, 'inStatus');
  };

  getTraffic = (res, type, side) => {
    axios.defaults.withCredentials = true;
    let arr = [];
    if (res.data && res.data.hits.hits.length > 0) {
      arr = res.data.hits.hits.map(item =>
        item._source[ID_MAP[type]]);
      if (side) {
        arr.forEach(id => intSearchUtils.fetchTraffic(type, id, side));
      } else {
        const isEx = EX_DOMAIN.indexOf(type) !== -1;
        const isIn = IN_DOMAIN.indexOf(type) !== -1;
        arr.forEach((id) => {
          if (isEx) {
            intSearchUtils.fetchTraffic(type, id, 'External');
          }
          if (isIn) {
            intSearchUtils.fetchTraffic(type, id, 'Internal');
          }
        });
      }
    }
  };

  navToSearch = (val) => {
    const { setSearchKeyword, setLastKeyword, setCurTab } = this.props;

    if (val && val !== '') {
      browserHistory.push('/search');
      setSearchKeyword(val);
      setLastKeyword(val);
      axios.defaults.withCredentials = false;
      setCurTab({ item: 'All', type: 'External' });
      setCurTab({ item: 'All', type: 'Internal' });
      intSearchUtils.search('as', val, SEARCH_AS_URL, 5, undefined,
        res => this.getTraffic(res, 'as'));
      intSearchUtils.search('interface', val, SEARCH_IF_URL, 5, undefined,
        res => this.getTraffic(res, 'interface'));
      intSearchUtils.search('router', val, SEARCH_ROUTER_URL, 5, 'External',
        res => this.getTraffic(res, 'router', 'External'));
      intSearchUtils.search('carrier', val, SEARCH_CARRIER_URL, 5, undefined,
        res => this.getTraffic(res, 'carrier'));
      intSearchUtils.search('esm', val, SEARCH_ESM_URL, 5, undefined,
        res => this.getTraffic(res, 'esm'));
      intSearchUtils.search('line', val, SEARCH_LINE_URL, 5, undefined,
        res => this.getTraffic(res, 'line'));
      intSearchUtils.search('country', val, SEARCH_COUNTRY_URL, 5, undefined,
        res => this.getTraffic(res, 'country'));
      intSearchUtils.search('pop', val, SEARCH_POP_URL, 5, undefined,
        res => this.getTraffic(res, 'pop'));
      intSearchUtils.search('idc', val, SEARCH_IDC_URL, 5, undefined,
        res => this.getTraffic(res, 'idc'));
    }
  };

  handleSearch = (evt) => {
    const val = evt.target.value;
    if (val && evt.charCode === 13) {
      this.navToSearch(val);
    }
  }

  componentWillUpdate() {
    axios.defaults.withCredentials = true;
  }
  handleMenu = () => {
    this.setState({
      showMemu: !this.state.showMemu,
      moment: moment().format('HH:mm')
    });
  };

  getCurrentMoment = () => {
    this.setState({
      moment: moment().format('HH:mm')
    });
  };

  toggleMainMenu = (item) => {
    this.setState({
      curOpenMenu: item.name === this.state.curOpenMenu ? '' : item.name,
    });
  }

  jumpPage = (itm) => {
    this.setState({
      showMemu: false,
    });
    browserHistory.push(itm.link);
  }

  render() {
    const { showMemu, moment } = this.state;
    const { userInfo, setUserInfo, myMenu } = this.props;
    const { fetchResultStatus } = this.props;
    const exData = (fetchResultStatus.exStatus || {}).chartData;
    const inData = (fetchResultStatus.inStatus || {}).chartData;
    const keys = DATA_TITLE.map(item => item.type.toLowerCase());
    // const defaultClass = classNames('main-default', { hideDefault: showMemu });
    const menuClass = classNames('nav-search', { showMemu });
    const hrClass = classNames({ showHr: showMemu });
    const listClass = classNames('listToNav', 'fa', 'fa-align-justify', 'pull-left', {
      listPressed: showMemu, listNormal: !showMemu
    });
    const sideMenuClass = classNames('side-menu-pane', { hide: !showMemu });
    const activeMenu = myMenu.res || [];

    return (
      <div className="main" ref={c => this.mainContent = c}>
        <div className="main-content">
          <header className="main-header">
            <div
              className={listClass}
              onClick={this.handleMenu}
              ref={c => this.menubtn = c}
            />
            <div className="header-logo" />
            <LogInfo userInfo={userInfo} setUserInfo={setUserInfo} />
            <div className={sideMenuClass} ref={c => this.menuPane = c}>
              {
                activeMenu.map((item, idx) =>
                  (
                    <div className="menu-item" key={idx}>
                      <div className="main-item" onClick={() => this.toggleMainMenu(item)}>
                        <i className={item.icon} />
                        <span>{item.name}</span>
                        <i className={classNames('fa', 'btn-expand', 'pull-right',
                          {
                            'la-up': this.state.curOpenMenu !== item.name,
                            'la-down': this.state.curOpenMenu === item.name,
                          })}
                        />
                      </div>
                      <ul className={classNames({ hide: this.state.curOpenMenu !== item.name })}>
                        {
                          item.subMenu.map((itm, i) =>
                            (<li
                              key={i}
                              className="non-active"
                              onClick={() => this.jumpPage(itm)}
                            >
                              <span>{itm.name}</span>
                            </li>)
                          )
                        }
                      </ul>
                    </div>
                  ))
                }
            </div>
          </header>
          <div className="main-banner">
            <div className="banner-bg" />
          </div>
          <div className="menu-pane">
            <hr className={hrClass} />
            <nav className={menuClass}>
              <div className="nav-search">
                <div className="search-content">
                  <div className="small-logo pull-left" />
                  <div className="search pull-left">
                    <input
                      type="search"
                      className="form-control pull-left"
                      ref={c => this.intsearchm = c}
                      placeholder="Search"
                      onKeyPress={evt => this.handleSearch(evt)}
                    />
                    <span
                      className="input-group-btn pull-left"
                      onClick={() => this.navToSearch(this.intsearchm.value)}
                    >
                      <i className="iconfont icon-ico-search" />
                    </span>
                  </div>
                  <button
                    onClick={this.handleMenu}
                    className="pull-right"
                  >
                    <i className="iconfont icon-close" />
                  </button>
                </div>

              </div>
              <div className="nav-list">
                {
                  activeMenu.map((item, idx) =>
                    (<div className="menu-block pull-left" key={idx}>
                      <div className="main-menu">
                        <i className={item.icon} />
                        <span>{item.name}</span>
                      </div>
                      <ul>
                        {
                          item.subMenu.map((itm, i) =>
                            (<li key={i}>
                              <Link to={itm.link}>{itm.name}</Link>
                            </li>)
                          )
                        }
                      </ul>
                    </div>))
                }
              </div>
            </nav>
          </div>
          <div className="main-default">
            <div className="search">
              <input
                type="search"
                className="form-control"
                ref={c => this.intsearch = c}
                placeholder="Search"
                onKeyPress={evt => this.handleSearch(evt)}
              />
              <span
                className="input-group-btn"
                onClick={() => this.navToSearch(this.intsearch.value)}
              >
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                >
                  <i className="iconfont icon-ico-search" />
                </button>
              </span>
            </div>
            <div className="data-refresh">
              Data today
              <span><i className="iconfont icon-refresh" onClick={this.refreshData} /></span>
              <span className="now-date pull-right">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="lga">
              {
                keys.map((item, idx) =>
                  (<div className="col-sm-4 content-wrap pull-left" key={idx}>
                    <div className="border-wrap">
                      <div className="ibox-title">
                        <span
                          className="label label-primary pull-right"
                          style={{ backgroundColor: DATA_TITLE[idx].color }}
                          data-title={MAIN_PAGE_DESP[idx].desp}
                        >{DATA_TITLE[idx].type}</span>
                        <h5>{moment}</h5>
                      </div>
                      <div className="ibox-content withtop clearfix">
                        <div className="half">
                          <h1 className="no-margins">
                            {
                              exData && exData[keys[idx]] ?
                                `${flowDataFormatter(exData[keys[idx]].total.stat.v1.last)}` : '-'
                            }
                          </h1>
                          <div className="normal-font">External</div>
                        </div>
                        <div className="half">
                          <h1 className="no-margins">
                            {
                              inData && inData[keys[idx]] ?
                                `${flowDataFormatter(inData[keys[idx]].total.stat.v1.last)}` : '-'
                            }
                          </h1>
                          <div className="normal-font">Internal</div>
                        </div>
                      </div>
                    </div>
                  </div>))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
