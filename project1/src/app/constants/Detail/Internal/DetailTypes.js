export const DETAIL_RELATIONS = {
  // Router: ['Interface', 'ESM', 'IDC'],
  // Interface: ['Router', 'ESM', 'IDC'],
  ESM: [/* 'Router', */'ESM', 'IDC'],
  IDC: [/* 'Router', */'ESM'/* , 'Interface' */],
};

export const NO_QUERY_FIELD = {
  // Interface: 'intfNo',
  // Router: 'routerNo',
  ESM: 'esmCd',
  IDC: 'idcCd',
};
