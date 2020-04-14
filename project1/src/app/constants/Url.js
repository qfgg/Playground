export const LOCAL_BASE_URL = 'http://dev.nfas.navercorp.com:9001/';
export const DEV_BASE_URL = 'http://dev.nfas.navercorp.com/';
export const REAL_BASE_URL = 'http://fea.nfas.navercorp.com:9001/';
export const ES_DEV_BASE_URL = 'http://dev.es.nfas.navercorp.com:9200';
export const ES_REAL_BASE_URL = 'http://es.nfas.navercorp.com:9200';
export const BASE_URL = process.env.DEPLOY_ENV === 'local' ? LOCAL_BASE_URL :
  process.env.DEPLOY_ENV === 'development' ? DEV_BASE_URL : REAL_BASE_URL;
export const ES_BASE_URL = process.env.DEPLOY_ENV === 'local' ||
  process.env.DEPLOY_ENV === 'development' ? ES_DEV_BASE_URL : ES_REAL_BASE_URL;
// export const BASE_URL = 'http://helong.navercorp.com:8080/';
const API_VERSION = 'v1';

export const DETAIL_SUGGEST_URL = {
  AS: {
    nm: `api/${API_VERSION}/filter/as?asNm=`,
    all: [`api/${API_VERSION}/filter/as?as=`, '&asNm=']
  },
  Interface: {
    all: [`api/${API_VERSION}/filter/router/`, '?intfNm=']
  },
  Router: {
    nm: `api/${API_VERSION}/filter/router/external?excludedYn=N&hostNm=`
  },
  Carrier: {
    nm: `api/${API_VERSION}/filter/carrier?ispNm=`
  },
  ESM: {
    nm: `api/${API_VERSION}/filter/esm?esmNm=`
  },
  Line: {
    all: [`api/${API_VERSION}/filter/line?nat1Nm=`, '&nat2Nm=', '&ispNm=']
  },
  Country: {
    all: [`api/${API_VERSION}/filter/country?cntryCd=`, '&cntryNm=']
  },
  PoP: {
    nm: `api/${API_VERSION}/filter/pop?popNm=`
  },
  IDC: {
    nm: `api/${API_VERSION}/filter/idc?idcNm=`
  }
};
export const DETAIL_SEARCH_URL = {
  AS: `api/${API_VERSION}/filter/as/`,
  Interface: `api/${API_VERSION}/filter/interface/`,
  Router: `api/${API_VERSION}/filter/router/`,
  Carrier: `api/${API_VERSION}/filter/carrier/`,
  ESM: `api/${API_VERSION}/filter/esm/`,
  Line: `api/${API_VERSION}/filter/line/`,
  Country: `api/${API_VERSION}/filter/country/`,
  PoP: `api/${API_VERSION}/filter/pop/`,
  IDC: `api/${API_VERSION}/filter/idc/`
};
export const DETAIL_DOWNLOAD_XLS = [
  `api/${API_VERSION}/detail/relations/download/`,
  '?resultType=xls'
];

export const EXPLORER_SEARCH_URL = {
  ...DETAIL_SUGGEST_URL,
  ASN: {
    nm: `api/${API_VERSION}/filter/as?asNm=`,
    all: [`api/${API_VERSION}/filter/as?as=`, '&asNm=']
  },
  IF: {
    all: [`api/${API_VERSION}/filter/router/`, '/interfaces?intfNm=']
  },
  IDC: {
    nm: `api/${API_VERSION}/filter/idc?idcNm=`
  }
};
export const EXPLORER_INIT_URL = {
  ...DETAIL_SUGGEST_URL,
  ASN: {
    nm: `api/${API_VERSION}/filter/as?asNm=`,
    all: [`api/${API_VERSION}/filter/as?as=`, '&asNm=']
  },
  IF: {
    all: [`api/${API_VERSION}/filter/router/`, '/interfaces']
  },
  IDC: {
    nm: `api/${API_VERSION}/filter/idc?idcNm=`
  }
};

export const EXPLORER_SUBMIT_CHECK_URL = `api/${API_VERSION}/my/job/check?jobNm=`;
export const EXPLORER_UPDATE_NAME_URL = `api/${API_VERSION}/my/job/`;
export const EXPLORER_FETCH_RESULT_URL = [`api/${API_VERSION}/my/job/`, '/chart'];
export const EXPLORER_GET_JOB_URL = `api/${API_VERSION}/my/job/`;
export const EXPLORER_GET_FILTER_URL = `api/${API_VERSION}/my/filterset/`;
export const EXPLORER_CHECK_ASYNC_URL = `api/${API_VERSION}/chart/isasync/`;
export const EXPLORER_ANA_ROUTER_URL = `api/${API_VERSION}/filter/router/external?excludedYn=N`;
export const EXPLORER_ANA_URL = [`api/${API_VERSION}/my/job/`, '/analysis'];

export const ITEM_SEARCH_URL = EXPLORER_SEARCH_URL;
export const ITEM_INIT_URL = EXPLORER_INIT_URL;
export const ITEM_GET_ITEM_URL = {
  ASN: `api/${API_VERSION}/filter/as/my`,
  Router: `api/${API_VERSION}/filter/router/my`,
  PoP: `api/${API_VERSION}/filter/pop/my`,
  Country: `api/${API_VERSION}/filter/country/my`,
  ESM: `api/${API_VERSION}/filter/esm/my`,
  IDC: `api/${API_VERSION}/filter/idc/my`,
  Line: `api/${API_VERSION}/filter/line/my`,
  Carrier: `api/${API_VERSION}/filter/carrier/my`,
  IF: `api/${API_VERSION}/filter/interface/my`,
  Prefix: `api/${API_VERSION}/filter/prefix/my`
};
export const ITEM_SAVE_URL = `api/${API_VERSION}/my/item`;
export const ITEM_DEL_URL = `api/${API_VERSION}/my/item/`;

export const DETAIL_RELATION_URL = `api/${API_VERSION}/detail/relations`;
export const DETAIL_URL = `api/${API_VERSION}/relations/query`;
export const DETAIL_RELATION_COUNT_URL = `api/${API_VERSION}/detail/relation/name/list`;

export const MY_FILTER_SETS = `api/${API_VERSION}/my/filterset`;
export const JOB_INIT_URL = [`api/${API_VERSION}/my/job?page=`, '&size='];
export const JOB_DEL_URL = `api/${API_VERSION}/my/job/`;
export const JOB_GET_JOB_URL = EXPLORER_UPDATE_NAME_URL;
export const JOB_PAUSE_URL = `api/${API_VERSION}/my/job/suspend/`;
export const JOB_RESUME_URL = `api/${API_VERSION}/my/job/resume/`;
export const JOB_CHECK_EXPIRE_URL = [`api/${API_VERSION}/my/job/`, '/checkExpired'];
export const JOB_UPDATE_EXPIRE_URL = [`api/${API_VERSION}/my/job/`, '/updateExpired'];
export const JOB_RESTART_EXPIRE_URL = [`api/${API_VERSION}/my/job/`, '/restart'];

export const ASPATH_SUGGEST_URL = {
  nm: `api/${API_VERSION}/filter/as?asNm=`,
  all: [`api/${API_VERSION}/filter/as?as=`, '&asNm=']
};
export const ASPATH_SEARCH_URL = `api/${API_VERSION}/filter/as/path?`;
export const ASPATH_GET_ROUTER_URL = [`api/${API_VERSION}/filter/as/path/`, '/routers'];
export const ASPATH_BASIC_URL = `api/${API_VERSION}/filter/prefix?ip=`;

export const BILLING_INIT_URL = {
  ESM: [`api/${API_VERSION}/filter/esm?esmNm=`, '&page='],
  PoP: [`api/${API_VERSION}/report/billing/pop?name=`, '&page=']
};
export const BILLING_SEARCH_URL = BILLING_INIT_URL;
export const BILLING_FIND_URL = `api/${API_VERSION}/report/billing`;

export const MONTH_INIT_URL = `api/${API_VERSION}/report/country/month`;
export const COUNTRY_SEARCH_URL = [`api/${API_VERSION}/report/country?page=`, '&size='];
export const COUNTRY_ALL_URL = `api/${API_VERSION}/report/country`;

export const DASHBOARD_STATUS_URL = `api/${API_VERSION}/dashboard/current/status?type=`;

export const CHARTS_URL = `api/${API_VERSION}/chart/query?returnType=json`;
export const CHARTS_ESM_URL = `api/${API_VERSION}/chart/query/esm?returnType=json`;

export const COMPARE_DASHBOARD_URL = `api/${API_VERSION}/dashboard/compare/charts`;

export const ROUTER_EXCLUDED_SUGGEST_URL = DETAIL_SUGGEST_URL.Router.nm;

export const GET_ONE_FLOW_URL = `api/${API_VERSION}/my/flows/`;
export const FLOW_GROUP_URL = `api/${API_VERSION}/my/flow/groups`;
export const FLOW_URL = [`api/${API_VERSION}/my/flow/groups/`, '/flows'];
export const FLOW_GROUP_MODIFY_URL = `api/${API_VERSION}/my/flow/groups/`;
export const FLOW_MODIFY_URL = `api/${API_VERSION}/my/flows/`;
export const COPY_FLOW = [`api/${API_VERSION}/my/flows/`, '/copy'];
export const MOVE_FLOW = [`api/${API_VERSION}/my/flows/`, '/move'];
export const FLOW_SAVE_URL = `api/${API_VERSION}/my/flows`;
export const FLOW_CHART_URL = `api/${API_VERSION}/my/flows`;
export const ORDER_FLOW_URL = `api/${API_VERSION}/my/flow/groups/order/`;
export const SHARE_SUGGEST_URL = {
  Employee: [`api/${API_VERSION}/employee?employeeNo=`, '&employeeName=', '&email='],
  Department: [`api/${API_VERSION}/department?departmentCode=`, '&departmentName=', '&email=']
};
export const SHARED_TOME_GROUP_URL = `api/${API_VERSION}/my/flow/groups/sharedtome`;
export const FLOW_GROUP_TOSHARE_URL = [`api/${API_VERSION}/my/flow/groups/`, '/share'];
export const FLOW_GROUP_SHARED_LIST = [`api/${API_VERSION}/my/flow/groups/`, '/shared'];
export const FLOW_DELETE_GROUP_SHARE = [`api/${API_VERSION}/my/flow/groups/`, '/receptor/'];
export const CHECK_GRPNM_URL = `api/${API_VERSION}/my/flow/groups/check?flGrpNm=`;
export const CHECK_FLNM_URL = [`api/${API_VERSION}/my/flows/check?flNm=`, '&flGrpNo='];

export const SEARCH_AS_URL = [`${ES_BASE_URL}/nfas/as/_search?q=_all:`, '&size=', '&pretty'];
export const SEARCH_IF_URL = [`${ES_BASE_URL}/nfas/interface/_search?q=_all:`, '&size=', '&pretty'];
export const SEARCH_CARRIER_URL = [`${ES_BASE_URL}/nfas/carrier/_search?q=_all:`, '&size=', '&pretty'];
export const SEARCH_ROUTER_URL = [`${ES_BASE_URL}/nfas/device/_search?q=_all:`, '&size=', '&pretty'];
export const SEARCH_ESM_URL = [`${ES_BASE_URL}/nfas/esm/_search?q=_all:`, '&size=', '&pretty'];
export const SEARCH_LINE_URL = [`${ES_BASE_URL}/nfas/line/_search?q=_all:`, '&size=', '&pretty'];
export const SEARCH_COUNTRY_URL = [`${ES_BASE_URL}/nfas/country/_search?q=_all:`, '&size=', '&pretty'];
export const SEARCH_POP_URL = [`${ES_BASE_URL}/nfas/pop/_search?q=_all:`, '&size=', '&pretty'];
export const SEARCH_IDC_URL = [`${ES_BASE_URL}/nfas/idc/_search?q=_all:`, '&size=', '&pretty'];

export const AUTH_URL = `api/${API_VERSION}/auth`;
export const LOGOUT_URL = `api/${API_VERSION}/logout`;

export const POP_INIT_URL = [`api/${API_VERSION}/filter/pop?page=`, '&size='];
export const POP_DEL_URL = `api/${API_VERSION}/filter/pop`;
export const MY_POP_SETS = `api/${API_VERSION}/filter/pop`;

export const AS_INIT_URL = [`api/${API_VERSION}/as/manage?page=`, '&size='];
export const AS_UPDATE_URL = `api/${API_VERSION}/as/manage`;
export const AS_DEL_URL = `api/${API_VERSION}/as/manage/`;
export const AS_SAVE_URL = `api/${API_VERSION}/as/manage`;
export const CHECK_AS_URL = [`api/${API_VERSION}/as/manage/check?asNo=`, '&startIp=', '&endIp='];

export const IDC_INIT_URL = [`api/${API_VERSION}/filter/idc?page=`, '&size='];
export const MY_IDC_SETS = `api/${API_VERSION}/filter/idc`;
export const IDC_DEL_URL = `api/${API_VERSION}/filter/idc`;

export const ROUTEREXL_INIT_URL = [`api/${API_VERSION}/filter/routerexcluded?page=`, '&size='];
export const ROUTEREXL_DEL_URL = `api/${API_VERSION}/filter/routerexcluded`;
export const MY_ROUTEREXL_SETS = `api/${API_VERSION}/filter/routerexcluded`;

export const ISP_INIT_URL = [`api/${API_VERSION}/filter/isp?page=`, '&size='];
export const MY_ISP_SETS = `api/${API_VERSION}/filter/isp`;
export const ISP_DEL_URL = `api/${API_VERSION}/filter/isp`;

export const ROUTER_INIT_URL = [`api/${API_VERSION}/filter/router?page=`, '&size='];
export const INTERFACE_INIT_URL = [`api/${API_VERSION}/filter/interface?page=`, '&size='];
export const UPDATE_ROUTERS_URL = `api/${API_VERSION}/filter/router`;
export const UPDATE_IFS_URL = `api/${API_VERSION}/filter/interface`;
export const ROUTER_EXC_INIT_URL = [`api/${API_VERSION}/filter/router?excludedYn=N&page=`, '&size='];

export const INIT_CODE = [`api/${API_VERSION}/code/group/`, '/codes?page=', '&size='];
export const INIT_CODE_GROUP = [`api/${API_VERSION}/code/group?page=`, '&size='];
export const SAVE_CODE = `api/${API_VERSION}/code`;
export const SAVE_CODE_GROUP = `api/${API_VERSION}/code/group`;
export const UPDATA_CODE = `api/${API_VERSION}/code/`;
export const UPDATA_CODE_GROUP = `api/${API_VERSION}/code/group/`;
export const DELETE_CODE = `api/${API_VERSION}/code/`;
export const DELETE_CODE_GROUP = `api/${API_VERSION}/code/group/`;
export const CHECK_CODE_GROUP = [`api/${API_VERSION}/code/group/check/`, '?grpCdNm='];
export const CHECK_CODE = [`api/${API_VERSION}/code/check/`, '?cdNm=', '&grpCd='];

export const FIND_MENU_URL = `api/${API_VERSION}/menu?prntMnNo=`;
export const ADD_MENU_URL = `api/${API_VERSION}/menu`;
export const EDIT_MENU_URL = `api/${API_VERSION}/menu/`;
export const GET_MENU_GRP_URL = [`api/${API_VERSION}/menu/`, '/employee/group'];
export const UPDATE_MENU_GRP_URL = [`api/${API_VERSION}/menu/`, '/employee/group'];

export const INIT_GRP_URL = `api/${API_VERSION}/employee/group`;
export const ADD_GRP_URL = INIT_GRP_URL;
export const DEL_GRP_URL = INIT_GRP_URL;
export const UPDATE_GRP_URL = INIT_GRP_URL;
export const GET_GRPEMP_URL = [`api/${API_VERSION}/employee/group/`, '/employees'];
export const SAVE_USER_URL = [`api/${API_VERSION}/employee/group/`, '/employee'];
export const DEL_USER_URL = [`api/${API_VERSION}/employee/group/`, '/employee/'];
export const INIT_DEPT_URL = `api/${API_VERSION}/department/0/department`;
export const GET_DEPTEMP_URL = [`api/${API_VERSION}/department/`, '/employee'];
export const GET_SUBDEPT_URL = [`api/${API_VERSION}/department/`, '/department'];
export const SEARCH_DEPT_URL = `api/${API_VERSION}/department?departmentName=`;
export const GET_GRP_AUTHOR_URL = [`api/${API_VERSION}/employee/group/`, '/menu?prntMnNo='];
export const SAVE_MENU_AUTHOR_URL = [`api/${API_VERSION}/employee/group/`, '/menu'];

export const GET_MY_MENU_URL = `api/${API_VERSION}/my/menu/tree`;

export const MNS_CHART_URL = `api/${API_VERSION}/nms/chart/query?interfaceNo=`;

export const REGION_TREE_URL = `api/${API_VERSION}/latency/code/tree`;

export const GET_LATENCY_URL = `api/${API_VERSION}/latency/region/`;

export const GET_LATENCY_DETAIL_URL = {
  PoP: `api/${API_VERSION}/latency/detail/pop/`,
  AS: `api/${API_VERSION}/latency/detail/as/`,
  Country: `api/${API_VERSION}/latency/detail/country/`,
};

export const LATENCY_CHART_URL = `api/${API_VERSION}/latency/detail/chart`;
