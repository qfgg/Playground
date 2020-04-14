const MENUS = [{
  name: 'My',
  icon: 'iconfont icon-ico-my',
  subMenu: [{
    name: 'Flows',
    link: '/my/flow',
  }, {
    name: 'Jobs',
    link: '/my/job',
  }, {
    name: 'Filters',
    link: '/my/filter',
  }, {
    name: 'Items',
    link: '/my/item',
  }]
}, {
  name: 'External',
  icon: 'iconfont icon-ico-external',
  subMenu: [{
    name: 'Dashboard',
    link: '/external/dashboard',
  }, {
    name: 'Compare Dashboard',
    link: '/external/comparedashboard',
  }, {
    name: 'Detail',
    link: '/external/detail',
  }, {
    name: 'Explorer',
    link: '/external/explorer',
  }, {
    name: 'AS Path',
    link: '/external/asPath',
  }]
}, {
  name: 'Internal',
  icon: 'iconfont icon-ico-internal',
  subMenu: [{
    name: 'Dashboard',
    link: '/internal/dashboard',
  }, {
    name: 'Compare Dashboard',
    link: '/internal/comparedashboard',
  }, {
    name: 'Detail',
    link: '/internal/detail',
  }, {
    name: 'Explorer',
    link: '/internal/explorer',
  }]
}, {
  name: 'Reports',
  icon: 'iconfont icon-ico-reports',
  subMenu: [{
    name: 'Peer Evaluation',
    link: '/reports/peerEvaluation',
  }, {
    name: 'Billing',
    link: '/reports/billing',
  }, {
    name: 'Routing Asymmetry (AS)',
    link: '/reports/routingAsymmetryAS',
  }, {
    name: 'Routing Asymmetry (Prefix)',
    link: '/reports/routingAsymmetryPrefix',
  }, {
  //   name: 'UV',
  //   link: '/reports/uv',
  // }, {
    name: 'Top 10',
    link: '/reports/top10',
  }, {
    name: 'Rise',
    link: '/reports/rise',
  }, {
    name: 'Netflow Misconfiguration',
    link: '/reports/misconfiguration',
  }]
}, {
  name: 'Management',
  icon: 'iconfont icon-ico-management',
  subMenu: [{
    name: 'Authorization',
    link: '/manage/authorization',
  }, {
    name: 'Menu',
    link: '/manage/menu',
  }, {
    name: 'PoP Manage',
    link: '/manage/popManage',
  }, {
    name: 'ISP Manage',
    link: '/manage/ispManage',
  }, {
    name: 'IDC',
    link: '/manage/idc',
  }, {
    name: 'Code Management',
    link: '/manage/codeManage',
  }, {
    name: 'Router',
    link: '/manage/router',
  }, {
    name: 'Interface',
    link: '/manage/interface',
  }]
}];

export default MENUS;
