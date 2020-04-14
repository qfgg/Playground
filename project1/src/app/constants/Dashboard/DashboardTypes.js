export const DATA_TITLE = ['Traffic', 'Flow', 'Packet'];

export const DATA_TYPES = [{
  text: 'Traffic',
  value: 'traffic'
}, {
  text: 'Flow',
  value: 'flow'
}, {
  text: 'Packet',
  value: 'packet'
}];
export const EX_DOMAIN_TYPES = [{
  text: 'AS',
  value: 'as'
}, {
  text: 'Interface',
  value: 'if'
}, {
  text: 'Router',
  value: 'router'
}, {
  text: 'Carrier',
  value: 'carrier'
}, {
  text: 'ESM',
  value: 'esm'
}, {
  text: 'Line',
  value: 'line'
}, {
  text: 'Country',
  value: 'country'
}, {
  text: 'PoP',
  value: 'pop'
}];
export const IN_DOMAIN_TYPES = [{
//   text: 'Router',
//   value: 'router'
// }, {
//   text: 'Interface',
//   value: 'if'
// }, {
  text: 'ESM',
  value: 'esm'
}, {
  text: 'IDC',
  value: 'idc'
}];

export const EX_FIELD_TYPE_MAP = {
  as: 'user_asn',
  if: 'server_if',
  interface: 'server_if',
  router: 'server_router',
  carrier: 'server_carrier',
  esm: 'server_esm',
  line: 'server_line',
  country: 'user_country',
  pop: 'server_pop'
};

export const IN_FIELD_TYPE_MAP = {
  esm: 'dst_esm',
  idc: 'dst_idc'
};
