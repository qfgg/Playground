import React, { Component } from 'react';
// import axios from 'axios';
import { browserHistory } from 'react-router';
// import {
//   BASE_URL,
//   LOGOUT_URL
// } from '../../constants/Url';

export default class LogInfo extends Component {
  onClickHandler = () => {
    this.loginOut();
  }

  loginOut = () => {
    this.props.setUserInfo({});
    localStorage.removeItem('userToken');
    localStorage.removeItem('loginUser');
    localStorage.removeItem('myMenu');
    document.cookie = 'nssTok=aaaaa;domain=navercorp.com;Max-Age=0;';
    browserHistory.push('/login');
    // const url = `${BASE_URL}${LOGOUT_URL}`;
    // axios.post(url, {}).then(() => {}).catch(() => {});
  }

  navToSearch = () => {
    browserHistory.push('/search');
  }

  render() {
    const loginUser = localStorage.getItem('loginUser');
    let userName = '';
    if (loginUser && loginUser.split('_').length > 0) {
      userName = loginUser.split('_')[1];
    }

    return (
      <div className="log-info">
        <span className="hello-user">
          {userName === '' ? 'Hello, username.' : `Hello, ${userName}.`}
        </span>
        <i className="fa fa-search search-btn" onClick={this.navToSearch} />
        <i className="iconfont icon-ico-signout" onClick={this.onClickHandler} />
        <a className="sign-btn" onClick={this.onClickHandler}>Sign Out</a>
      </div>
    );
  }
}
