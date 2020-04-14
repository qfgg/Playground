import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFound from './containers/NotFound';
import Main from './containers/Main';
import Login from './containers/Login';
import IntegrationSearch from './containers/IntegrationSearch';
import ExExplorer from './containers/External/Explorer';
import ExDetail from './containers/External/ExDetail';
import ExDashboard from './containers/External/ExDashboard';
import ASPath from './containers/External/ASPath';
import ExCompareDashboard from './containers/External/ExCompareDashboard';
import InExplorer from './containers/Internal/Explorer';
import InDetail from './containers/Internal/InDetail';
import InCompareDashboard from './containers/Internal/InCompareDashboard';
import InDashboard from './containers/Internal/InDashboard';
import PeerEvaluation from './containers/Reports/PeerEvaluation';
import Billing from './containers/Reports/Billing';
import RoutingAsymmetryAS from './containers/Reports/RoutingAsymmetryAS';
import RoutingAsymmetryPrefix from './containers/Reports/RoutingAsymmetryPrefix';
import Country from './containers/Reports/Country';
// import UV from './containers/Reports/UV';
import Top10 from './containers/Reports/Top10';
import Rise from './containers/Reports/Rise';
import MyItem from './containers/My/Item';
import MyFlow from './containers/My/Flow';
import MyFilter from './containers/My/Filter';
import MyJob from './containers/My/Job';
// import Authentication from './containers/Admin/Authentication';
import Authorization from './containers/Admin/Authorization';
import Menu from './containers/Admin/Menu';
import PopManage from './containers/Admin/PopManage';
import IspManage from './containers/Admin/IspManage';
import IDC from './containers/Admin/IDC';
import CodeManage from './containers/Admin/CodeManage';
import Misconfiguration from './containers/Reports/Misconfiguration';
import RouterManage from './containers/Admin/RouterManage';
import Latency from './containers/Admin/Latency';
import AS from './containers/Admin/AS';
import { getMyMenu } from './middlewares/App/App';


const getCookie = (cName) => {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(`${cName}=`);
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1;
      let cEnd = document.cookie.indexOf(';', cStart);
      if (cEnd === -1) cEnd = document.cookie.length;
      return unescape(document.cookie.substring(cStart, cEnd));
    }
  }
  return '';
};
const checkStatus = (nextState, replace, next) => {
  if (window.dispatch) window.dispatch({ type: 'CLEAR_STORE' });
  if ((getCookie('nssTok') === '' || getCookie('nssTok') === null)
    && nextState.location.pathname !== '/login') {
    localStorage.removeItem('userToken');
    localStorage.removeItem('loginUser');
    localStorage.removeItem('myMenu');
    replace('/login');
    next();
  }
  next();
};

const checkStatusChange = (prevState, nextState, replace) => {
  if (prevState.location.pathname !== nextState.location.pathname
    || nextState.location.pathname === '/login') {
    window.dispatch({ type: 'CLEAR_STORE' });
  }
  if ((getCookie('nssTok') === '' || getCookie('nssTok') === null)
    && nextState.location.pathname !== '/login') {
    localStorage.removeItem('userToken');
    localStorage.removeItem('loginUser');
    localStorage.removeItem('myMenu');
    replace('/login');
  }

  const body = document.getElementsByTagName('body')[0];
  let last = body.lastElementChild;
  if (last && last.className && last.className.split(' ')[0] === 'sweet-alert') {
    body.removeChild(last);
  }
  last = body.lastElementChild;
  if (last && last.className && last.className.split(' ')[0] === 'sweet-overlay') {
    body.removeChild(last);
  }
};

const blockMenu = (replace, next, id, subId) => {
  const menu = JSON.parse(localStorage.getItem('myMenu'));
  if (subId === 319 || subId === 440) {
    // do nothing
  } else if (!menu || (menu && (!menu.find(item => item.id === id)) ||
    (menu.find(item => item.id === id).subMenu &&
    !menu.find(item => item.id === id).subMenu.find(itm => itm.id === subId)))) {
    replace('*');
  }
  next();
};

const checkAuth = (prevState, replace, next, id, subId) => {
  if (window.dispatch) {
    window.dispatch(getMyMenu(blockMenu.bind(null, replace, next, id, subId)));
  } else {
    blockMenu(replace, next, id, subId);
  }
};

export default (
  <Route path="/" component={App} onEnter={checkStatus} onChange={checkStatusChange}>
    <IndexRoute component={Main} />
    <Route path="my">
      <Route
        path="flow"
        component={MyFlow}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 1, 252)}
      />
      <Route
        path="job"
        component={MyJob}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 1, 253)}
      />
      <Route
        path="item"
        component={MyItem}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 1, 290)}
      />
      <Route
        path="filter"
        component={MyFilter}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 1, 289)}
      />
    </Route>
    <Route path="external">
      <Route
        path="dashboard"
        component={ExDashboard}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 2, 291)}
      />
      <Route
        path="comparedashboard"
        component={ExCompareDashboard}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 2, 292)}
      />
      <Route
        path="detail(/:domainName/:domainId)"
        component={ExDetail}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 2, 293)}
      />
      <Route
        path="explorer(/:type)(/:setNo)"
        component={ExExplorer}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 2, 294)}
      />
      <Route
        path="asPath"
        component={ASPath}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 2, 295)}
      />
    </Route>
    <Route path="internal">
      <Route
        path="dashboard"
        component={InDashboard}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 3, 296)}
      />
      <Route
        path="comparedashboard"
        component={InCompareDashboard}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 3, 297)}
      />
      <Route
        path="detail(/:domainName/:domainId)"
        component={InDetail}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 3, 298)}
      />
      <Route
        path="explorer(/:type)(/:setNo)"
        component={InExplorer}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 3, 299)}
      />
    </Route>
    <Route path="reports">
      <Route
        path="peerEvaluation"
        component={PeerEvaluation}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 4, 300)}
      />
      <Route
        path="billing"
        component={Billing}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 4, 301)}
      />
      <Route
        path="routingAsymmetryAS"
        component={RoutingAsymmetryAS}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 4, 302)}
      />
      <Route
        path="routingAsymmetryPrefix"
        component={RoutingAsymmetryPrefix}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 4, 304)}
      />
      {
        // <Route path="uv" component={UV} />
      }
      <Route
        path="top10"
        component={Top10}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 4, 305)}
      />
      <Route
        path="rise"
        component={Rise}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 4, 306)}
      />
      <Route
        path="misconfiguration"
        component={Misconfiguration}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 4, 307)}
      />
      <Route
        path="country"
        component={Country}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 4, 315)}
      />
    </Route>
    <Route path="manage">
      {/* <Route path="authentication" component={Authentication} /> */}
      <Route
        path="authorization"
        component={Authorization}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 5, 287)}
      />
      <Route
        path="menu"
        component={Menu}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 5, 288)}
      />
      <Route
        path="popManage"
        component={PopManage}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 5, 308)}
      />
      <Route
        path="ispManage"
        component={IspManage}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 5, 309)}
      />
      <Route
        path="idc"
        component={IDC}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 5, 310)}
      />
      <Route
        path="codeManage"
        component={CodeManage}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 5, 311)}
      />
      <Route
        path="router"
        component={RouterManage}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 5, 312)}
      />
      <Route
        path="latency"
        component={Latency}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 5, 319)}
      />
      <Route
        path="as"
        component={AS}
        onEnter={(prevState, nextState, replace) =>
          checkAuth(prevState, nextState, replace, 5, 440)}
      />
    </Route>
    <Route path="login" component={Login} />
    <Route path="search" component={IntegrationSearch} />
    <Route path="*" component={NotFound} />
  </Route>
);
