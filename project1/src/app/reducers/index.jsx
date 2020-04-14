import { combineReducers } from 'redux';
import { myFiltersetsReducer } from './My/Filtersets';
import { myItemReducer } from './My/Item';
import { myJobReducer } from './My/Job';
import { externalDashboardReducer } from './External/Dashboard';
import { externalExplorerReducer } from './External/Explorer';
import { externalDetailReducer } from './External/Detail';
import { externalCompareReducer } from './External/CompareDashboard';
import { externalASPathReducer } from './External/ASPath';
import { internalDashboardReducer } from './Internal/Dashboard';
import { internalDetailReducer } from './Internal/Detail';
import { internalExplorerReducer } from './Internal/Explorer';
import { internalCompareReducer } from './Internal/CompareDashboard';
import { myFlowReducer } from './My/Flow';
import { reportsBillingReducer } from './Reports/Billing';
import { reportsRiseReducer } from './Reports/Rise';
import { reportsPeerReducer } from './Reports/PeerEval';
import { reportsRAASReducer } from './Reports/RoutingAsymmetryAS';
import { reportsRAPFReducer } from './Reports/RoutingAsymmetryPrefix';
import { reportsUVReducer } from './Reports/UV';
import { reportsTop10Reducer } from './Reports/Top10';
import { reportsMisconfigReducer } from './Reports/Misconfiguration';
import { reportsCountryReducer } from './Reports/Country';
import { myAppReducer } from './App/App';
import { adminPopManage } from './Admin/PopManage';
import { adminIspManage } from './Admin/IspManage';
import { adminIDC } from './Admin/IDC';
import { adminCodeReducer } from './Admin/CodeManage';
import { adminRouterReducer } from './Admin/RouterManage';
import { adminIntfReducer } from './Admin/IntfManage';
import { adminMenuReducer } from './Admin/Menu';
import { adminAuthorReducer } from './Admin/Author';
import { latencyReducer } from './Admin/Latency';
import { adminAS } from './Admin/AS';
import { chartRequestReducer } from './ChartCommon/ChartRequest';
import { searchReducer } from './Search/Search';
import { userLoginReducer } from './Login';

const reducers = {
  myItemReducer,
  myFiltersetsReducer,
  myJobReducer,
  externalDashboardReducer,
  externalExplorerReducer,
  externalDetailReducer,
  externalASPathReducer,
  internalDetailReducer,
  internalDashboardReducer,
  internalExplorerReducer,
  internalCompareReducer,
  myFlowReducer,
  reportsBillingReducer,
  reportsRiseReducer,
  reportsPeerReducer,
  reportsRAASReducer,
  reportsRAPFReducer,
  reportsUVReducer,
  reportsTop10Reducer,
  reportsMisconfigReducer,
  reportsCountryReducer,
  myAppReducer,
  externalCompareReducer,
  adminPopManage,
  adminIspManage,
  adminIDC,
  adminCodeReducer,
  searchReducer,
  chartRequestReducer,
  userLoginReducer,
  adminRouterReducer,
  adminIntfReducer,
  adminMenuReducer,
  adminAuthorReducer,
  latencyReducer,
  adminAS
};

const appReducer = combineReducers({
  ...reducers
});
const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_STORE') {
    const myAppReducer = state.myAppReducer;
    state = { ...initialState, myAppReducer };
  }
  return appReducer(state, action);
};

export default rootReducer;
