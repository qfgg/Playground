export const DETAIL_RELATIONS = {
  AS: ['Router', 'PoP', 'Country', 'ESM', 'Carrier', 'Latency'],
  Interface: ['Router', 'PoP', 'Country', 'ESM', 'Carrier', 'AS'],
  Router: ['Interface', 'AS', 'Country', 'ESM', 'PoP', 'Line', 'Carrier'],
  Carrier: ['Line', 'AS', 'Country', 'ESM', 'PoP', 'Router'],
  ESM: ['Router', 'AS', 'Country', 'PoP', 'Line', 'Carrier'],
  Line: ['Router', 'Country', 'PoP', 'AS', 'ESM', 'Carrier'],
  Country: ['AS', 'PoP', 'Router', 'ESM', 'Line', 'Carrier', 'Latency'],
  PoP: ['Router', 'ESM', 'Country', 'AS', 'Line', 'Interface', 'Latency'],
};

export const NO_QUERY_FIELD = {
  AS: 'asNo',
  Interface: 'intfNo',
  Router: 'routerNo',
  Carrier: 'ispId',
  ESM: 'esmCd',
  Line: 'crctId',
  Country: 'cntryCd',
  PoP: 'popNo',
};

export const EX_RELATION_MAP = {
  AS: 'user_asn',
  Interface: 'server_if',
  Router: 'server_router',
  Carrier: 'server_carrier',
  ESM: 'server_esm',
  Line: 'server_line',
  Country: 'user_country',
  PoP: 'server_pop'
};

export const IN_RELATION_MAP = {
  ESM: 'dst_esm',
  IDC: 'dst_idc'
};

export const REL_MAP = {
  AS: 'user_asn',
  Interface: 'server_if',
  Router: 'server_router',
  Carrier: 'server_carrier',
  ESM: 'server_esm',
  Line: 'server_line',
  Country: 'user_country',
  PoP: 'server_pop'
};

export const HEADER = {
  PoP: ['Country', 'AS', 'Latency(ms)', 'Loss', 'S.dev', ''],
  AS: ['Country', 'PoP', 'Latency(ms)', 'Loss', 'S.dev', ''],
  Country: ['PoP', 'AS', 'Latency(ms)', 'Loss', 'S.dev', ''],
};

export const FIELD = {
  PoP: [{
    name: 'countryName',
    isDownloadCol: true,
    colName: 'Country',
    width: '18%',
    isKey: true,
  }, {
    name: 'as',
    isDownloadCol: true,
    colName: 'AS',
    width: '18%',
    isMult: true
  }, {
    name: 'latency',
    isDownloadCol: true,
    colName: 'Latency',
    width: '18%',
    isMult: true
  }, {
    name: 'loss',
    isDownloadCol: true,
    colName: 'Loss',
    width: '18%',
    isMult: true
  }, {
    name: 'dev',
    isDownloadCol: true,
    colName: 'S.dev',
    width: '18%',
    isMult: true
  }, {
    name: '',
    width: '10%',
    isBtn: true
  }],
  AS: [{
    name: 'countryName',
    isDownloadCol: true,
    colName: 'Country',
    width: '20%',
    isKey: true,
  }, {
    name: 'pop',
    isDownloadCol: true,
    colName: 'PoP',
    width: '35%',
    isMult: true
  }, {
    name: 'latency',
    isDownloadCol: true,
    colName: 'Latency',
    width: '35%',
    isMult: true
  }, {
    name: 'loss',
    isDownloadCol: true,
    colName: 'Loss',
    width: '18%',
    isMult: true
  }, {
    name: 'dev',
    isDownloadCol: true,
    colName: 'S.dev',
    width: '18%',
    isMult: true
  }, {
    name: '',
    width: '10%',
    isBtn: true
  }],
  Country: [{
    name: 'idcCd',
    width: '18%',
    isHidden: true,
    isKey: true,
  }, {
    name: 'pop',
    isDownloadCol: true,
    colName: 'PoP',
    width: '18%',
    isMult: true
  }, {
    name: 'as',
    isDownloadCol: true,
    colName: 'AS',
    width: '18%',
    isMult: true
  }, {
    name: 'latency',
    isDownloadCol: true,
    colName: 'Latency',
    width: '18%',
    isMult: true
  }, {
    name: 'loss',
    isDownloadCol: true,
    colName: 'Loss',
    width: '18%',
    isMult: true
  }, {
    name: 'dev',
    isDownloadCol: true,
    colName: 'S.dev',
    width: '18%',
    isMult: true
  }, {
    name: '',
    width: '10%',
    isBtn: true
  }],
};
