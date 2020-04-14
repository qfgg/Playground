import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import SweetAlert from 'sweetalert-react';
import Header from '../components/Header';
import * as actions from '../actions/App/App';
import * as searchActions from '../../lib/search/action';
import { getMyMenu } from '../middlewares/App/App';


const mapStateToProps = state => ({
  showSubMenuFlag: state.myAppReducer.showSubMenuFlag,
  userInfo: state.myAppReducer.userInfo,
  myMenu: state.myAppReducer.myMenu
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  actions: bindActionCreators({
    ...actions,
    ...searchActions,
    getMyMenu,
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  constructor(props) {
    super(props);
    window.dispatch = props.dispatch;
    this.state = ({
      showAlert: false,
      alertText: '',
    });
  }

  checkIsLogin = routes =>
    (routes && routes.length === 2 && routes[1].path === 'login');

  // componentDidUpdate(prevProps) {
  //   if (this.checkIsLogin(prevProps.routes) && !this.checkIsLogin(this.props.routes)) {
  //     this.mainContent.style.minHeight = `${(document.body.clientHeight - 100)}px`;
  //     window.addEventListener('resize', () => {
  //       if (this.mainContent) {
  //         this.mainContent.style.minHeight = `${(document.body.clientHeight - 100)}px`;
  //       }
  //     });
  //   }
  // }

  // componentDidMount() {
  //   if (this.mainContent) {
  //     this.mainContent.style.minHeight = `${(document.body.clientHeight - 100)}px`;
  //     window.addEventListener('resize', () => {
  //       if (this.mainContent) {
  //         this.mainContent.style.minHeight = `${(document.body.clientHeight - 100)}px`;
  //       }
  //     });
  //   }
  // }

  componentWillMount() {
    axios.interceptors.response.use(
      response => response,
      (error) => {
        if (error && error.response) {
          if (error.response.status) {
            if (error.response.data && error.response.data.error === 'wrong password') {
              // do nothing
            } else if (error.response.status === 500 && error.response.data) {
              this.setState({
                showAlert: true,
                alertText: error.response.data ? error.response.data.error : 'System error occur',
              });
            }
          }
          return Promise.reject(error.response.data);
        }
        return Promise.reject(error);
      });
    // document.cookie = `nssTok=${localStorage.getItem('userToken')};domain=navercorp.com;`;
    // axios.defaults.headers.common.Authorization = localStorage.getItem('userToken');
  }

  render() {
    const {
      params,
      routes,
      showSubMenuFlag,
      userInfo,
      myMenu,
      actions
    } = this.props;

    return (
      this.checkIsLogin(routes) ?
      (<div>{this.props.children}</div>) :
      (<div>
        <Header
          params={params}
          routes={routes}
          showSubMenuFlag={showSubMenuFlag}
          userInfo={userInfo}
          isHide={routes.length === 2 ? !routes[1].path : false}
          myMenu={myMenu}
          {...actions}
        />
        <div ref={c => this.mainContent = c} className="white ph-1rem">{this.props.children}</div>
        <footer className="copyright white">
          Copyright &copy; NAVER Business Platform Corp. All Rights Reserved.
        </footer>
        <SweetAlert
          show={this.state.showAlert}
          title={this.state.alertText}
          type="error"
          confirmButtonText="OK"
          onConfirm={() => {
            this.setState({ showAlert: false, alertText: '' });
          }}
        />
      </div>)
    );
  }
}
