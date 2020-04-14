import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import classNames from 'classnames';
import axios from 'axios';
import Menu from './Menu';
import LogInfo from './LogInfo';
import HeaderSearch from './HeaderSearch';
import './index.less';
import { BASE_URL, AUTH_URL } from '../../constants/Url';
import PATH_NAME_MAP from '../../constants/App/Path';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      hideMenuPane: true,
      curOpenMenu: '',
    });
  }

  componentWillMount() {
    if (this.props.routes && this.props.routes.length > 1) {
      this.setState({
        curOpenMenu: PATH_NAME_MAP[(this.props.routes[1].path || '').replace(/\(.*\)/, '')],
      });
    }
    axios.defaults.withCredentials = true;
    if (!localStorage.getItem('loginUser')) {
      this.getUserInfo();
    } else {
      const { getMyMenu } = this.props;
      getMyMenu();
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
    if (window.location.pathname === '/') {
      const { showSubMenu } = this.props;
      showSubMenu(-1);
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  handleDocumentClick = (evt) => {
    if (this.menubtn && this.menuPane && !this.menubtn.contains(evt.target)
    && !this.menuPane.contains(evt.target) && !this.state.hideMenuPane) {
      this.setState({
        hideMenuPane: true,
      });
    }
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

      const { getMyMenu } = this.props;
      getMyMenu();
    }).catch(() => {
      if (localStorage.getItem('userToken')) {
        localStorage.removeItem('userToken');
        localStorage.removeItem('myMenu');
      }
    });
  };

  componentWillUpdate() {
    axios.defaults.withCredentials = true;
  }

  goToIndex = () => {
    const { showSubMenu } = this.props;
    showSubMenu(-1);
    browserHistory.push('/');
  };

  navToSearch = () => {
    browserHistory.push('/search');
  }

  handleSignOut = () => {
    this.props.setUserInfo({});
    localStorage.removeItem('userToken');
    localStorage.removeItem('loginUser');
    localStorage.removeItem('myMenu');
    document.cookie = 'nssTok=aaaaa;domain=navercorp.com;Max-Age=0;';
    browserHistory.push('/login');
  }

  handleMenu = () => {
    this.setState({
      hideMenuPane: !this.state.hideMenuPane,
    });
  }

  jumpPage = (itm) => {
    this.setState({
      hideMenuPane: true,
    });
    browserHistory.push(itm.link);
  }

  toggleMainMenu = (item) => {
    this.setState({
      curOpenMenu: item.name === this.state.curOpenMenu ? '' : item.name,
    });
  }

  render() {
    const {
      routes,
      setSearchKeyword,
      showSubMenu,
      showSubMenuFlag,
      userInfo,
      setUserInfo,
      setLastKeyword,
      setCurTab,
      isHide,
      myMenu
    } = this.props;
    const hideHeader = classNames('top-header', { hide: isHide });
    const activeMenu = myMenu.res || [];
    const hideMenuPane = classNames('menu-pane', { hide: this.state.hideMenuPane });

    return (
      <div className={hideHeader}>
        <div className="header-lg">
          <nav className="navbar navbar-static-top global-nav">
            <div className="navbar-header">
              <Link className="navbar-brand letter-space bg-dark" to="/" onClick={this.goToIndex} >NFAS</Link>
            </div>
            <Menu
              menus={activeMenu}
              routes={routes}
              showSubMenu={showSubMenu}
              showSubMenuFlag={showSubMenuFlag}
            />
            {
              routes[1] && routes[1].path ?
                <HeaderSearch
                  setSearchKeyword={setSearchKeyword}
                  setCurTab={setCurTab}
                  setLastKeyword={setLastKeyword}
                /> : ''
            }
            <LogInfo userInfo={userInfo} setUserInfo={setUserInfo} />
          </nav>
        </div>
        <div className="header-sm">
          <nav className="navbar navbar-static-top global-nav">
            <div className="menu pull-left" ref={c => this.menubtn = c}>
              <i className="fa fa-align-justify" onClick={this.handleMenu} />
            </div>
            <div className="logo pull-left">
              <Link className="bg-dark" to="/" onClick={this.goToIndex} >NFAS</Link>
            </div>
            <div className="user-out pull-right">
              <i className="iconfont icon-ico-signout" onClick={this.handleSignOut} />
            </div>
            <div className="user-search pull-right">
              <i className="fa fa-search" onClick={this.navToSearch} />
            </div>
          </nav>
          <div className={hideMenuPane} ref={c => this.menuPane = c}>
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
                            className={classNames({
                              active: routes.length > 2
                              && PATH_NAME_MAP[(routes[1].path || '').replace(/\(.*\)/, '')] === item.name
                              && PATH_NAME_MAP[(routes[2].path || '').replace(/\(.*\)/, '')] === itm.name,
                              'non-active': routes.length > 2 &&
                              (PATH_NAME_MAP[(routes[2].path || '').replace(/\(.*\)/, '')] !== itm.name ||
                              PATH_NAME_MAP[(routes[1].path || '').replace(/\(.*\)/, '')] !== item.name),
                            })}
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
        </div>
      </div>
    );
  }
}
