import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginComponent from '../components/Login';
import { setUserInfo } from '../actions/App/App';
import userLogin from '../middlewares/Login';
import { getMyMenu } from '../middlewares/App/App';


const mapStateToProps = state => ({
  userToken: state.userLoginReducer.userToken,
});

const mapDispatchToProps = dispatch => ({
  setUserInfo: bindActionCreators(setUserInfo, dispatch),
  userLogin: bindActionCreators(userLogin, dispatch),
  getMyMenu: bindActionCreators(getMyMenu, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Login extends Component {
  render() {
    const { setUserInfo, userToken, userLogin, getMyMenu } = this.props;

    return (
      <LoginComponent
        setUserInfo={setUserInfo}
        userToken={userToken}
        userLogin={userLogin}
        getMyMenu={getMyMenu}
      />
    );
  }
}
