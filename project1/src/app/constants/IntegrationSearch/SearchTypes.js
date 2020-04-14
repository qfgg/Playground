import {
  SEARCH_AS_URL,
  SEARCH_IF_URL,
  SEARCH_ROUTER_URL,
  SEARCH_CARRIER_URL,
  SEARCH_ESM_URL,
  SEARCH_LINE_URL,
  SEARCH_COUNTRY_URL,
  SEARCH_POP_URL,
  SEARCH_IDC_URL,
} from '../Url';

export const EX_TAB_LIST = ['AS', 'Router', 'Carrier', 'ESM', 'Line', 'Country', 'PoP', 'Interface'];
export const IN_TAB_LIST = ['Router', 'ESM', 'IDC', 'Interface'];
export const EX_DOMAIN = ['as', 'router', 'carrier', 'esm', 'line', 'country', 'pop', 'interface'];
export const IN_DOMAIN = ['router', 'esm', 'idc', 'interface'];

export const ID_MAP = {
  as: 'asNo',
  carrier: 'ispId',
  country: 'code',
  pop: 'popNo',
  esm: 'esmCd',
  interface: 'intfNo',
  line: 'crctId',
  idc: 'netId',
  router: 'routerNo'
};

export const ID_TITLE_MAP = {
  as: 'AS Number',
  carrier: 'Carrier Id',
  country: 'Country Code',
  pop: 'PoP No',
  esm: 'ESM Code',
  interface: 'Interface No',
  line: 'Line Id'
};

export const NAME_MAP = {
  as: 'asNm',
  carrier: 'ispNm',
  country: 'name',
  pop: 'popNm',
  esm: 'esmNm',
  idc: 'netId',
  interface: 'intfNm',
  line: 'ispNm',
  router: 'hostNm'
};

export const NAME_TITLE_MAP = {
  as: 'AS Name',
  carrier: 'Carrier Name',
  country: 'Name',
  pop: 'Name',
  esm: 'Name',
  idc: 'Name',
  interface: 'Name',
  line: 'Name',
  router: 'Name'
};

export const URL_MAP = {
  as: SEARCH_AS_URL,
  carrier: SEARCH_CARRIER_URL,
  country: SEARCH_COUNTRY_URL,
  pop: SEARCH_POP_URL,
  esm: SEARCH_ESM_URL,
  idc: SEARCH_IDC_URL,
  interface: SEARCH_IF_URL,
  line: SEARCH_LINE_URL,
  router: SEARCH_ROUTER_URL
};
