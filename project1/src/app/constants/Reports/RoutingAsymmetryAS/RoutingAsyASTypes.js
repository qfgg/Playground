export const ROUTINGASY_PERIOD = ['Today', 'Yesterday', 'Last week', 'Last month'];
export const OPTION_TYPES = ['Last', 'Avg', 'Max'];
export const HEADER = [
  'Peer',
  'AS',
  'AS Name',
  'Inbound[Mbps]',
  'Outbound[Mbps]',
  'Total',
  'In/Out',
];
export const FIELD = [{
  name: 'peer',
  width: '6%',
}, {
  name: 'asNo',
  width: '7%',
  isLink: true,
}, {
  name: 'asNm',
  width: '20%',
  align: 'l',
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
}, {
  name: 'ratio',
  align: 'r',
}];
