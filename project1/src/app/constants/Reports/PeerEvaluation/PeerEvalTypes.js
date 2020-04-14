export const PEEREVAL_PERIOD = ['Today', 'Yesterday', 'Last week', 'Last month'];
export const OPTION_TYPES = ['Last', 'Avg', 'Max'];
export const HEADER = [
  'Rank',
  'ASN',
  'AS Name',
  'Relation',
  'Inbound',
  'Outbound',
  'Total',
];
export const FIELD = [{
  name: 'rank',
  width: '4.5%',
}, {
  name: 'asNo',
  width: '7%',
  isLink: true,
}, {
  name: 'asNm',
  width: '20%',
  align: 'l',
}, {
  name: 'relation',
}, {
  name: 'inbound',
  align: 'r',
  needNumFormat: true,
}, {
  name: 'outbound',
  align: 'r',
  needNumFormat: true,
}, {
  name: 'total',
  align: 'r',
  needNumFormat: true,
}];
