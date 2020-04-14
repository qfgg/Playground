import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import InputComponent from './InputComponent';
import RememberUser from './RememberUser';
import HelpDesk from './HelpDesk';
import SelectBox from './SelectBox';
import './index.less';


export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: '',
    };
    this.userId = '';
    this.password = '';
  }

  clearInput = () => {
    this.setErrorMsg('', () => browserHistory.push('/'));
    this.userId = '';
    this.password = '';
  }

  handleLoginClick = () => {
    const { userLogin, userToken } = this.props;
    if (userToken.isFetching) {
      return;
    }
    if (this.userId.trim() === '') {
      this.setErrorMsg('Please enter the employee ID');
      return;
    }
    if (this.password.trim() === '') {
      this.setErrorMsg('Please enter your password');
      return;
    }
    const userInfo = {
      userId: this.userId,
      userPwd: this.password,
    };
    userLogin(userInfo, this.succCallback.bind(this), this.failCallback.bind(this));
  }

  succCallback = (user) => {
    if (user === '' || user === null || user === {} || user.userId === '') {
      this.setErrorMsg('ID not exist or password error');
      return;
    }
    localStorage.setItem('loginUser', `${user.userId}_${user.userName}`);
    // this.props.setUserInfo(user);
    this.clearInput();
  }

  failCallback = (err) => {
    if (localStorage.getItem('userToken')) {
      localStorage.removeItem('userToken');
      localStorage.removeItem('myMenu');
    }
    if (err === 'wrong password') {
      this.setErrorMsg('ID not exist or password error');
    }
    // window.alert(error);
  }

  getInputVal = (key, val) => {
    if (key === 'user') {
      this.userId = val;
    } else {
      this.password = val;
    }
  }

  handleLogin = (evt) => {
    const val = evt.target.value;
    if (val && val !== '' && evt.charCode === 13) {
      this.handleLoginClick();
    }
  }

  setErrorMsg = (msg, fn) => {
    this.setState({
      errorMsg: msg,
    }, fn);
  }

  render() {
    return (
      <div id="login-wrap">
        <div className="login-heading">
          <SelectBox />
        </div>
        <div className="login-container">
          <div className="login-content">
            <h1 className="p-logo">
              <span className="logo-words">NFAS</span>
            </h1>
            <p className="error_noti">{ this.state.errorMsg }</p>
            <div className="inp-area">
              <InputComponent
                name="user"
                ref={c => this.userIdInp = c}
                type="text"
                placeholder="ID"
                getInputVal={this.getInputVal}
                onKeyPress={this.handleLogin}
              />
              <InputComponent
                name="password"
                type="password"
                placeholder="PASSWORD"
                getInputVal={this.getInputVal}
                onKeyPress={this.handleLogin}
              />
            </div>
            <div className="btn-area">
              <a
                tabIndex="3"
                onClick={this.handleLoginClick}
              >
               LOG IN
              </a>
            </div>
            <RememberUser />
            <HelpDesk />
          </div>
        </div>
      </div>
    );
  }
}
