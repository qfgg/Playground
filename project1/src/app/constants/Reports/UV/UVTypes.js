export const UV_PERIOD = ['Yesterday', 'Last week', 'Last month'];
export const DOMAIN_TYPES = ['ESM', 'Country', 'AS', 'Line'];
export const HEADER = [
  'No',
  'Code',
  'Name',
  'UV(Avg)',
  'UV(Max)',
];
export const FIELD = [{
  name: 'no',
  width: '4.5%',
}, {
  name: 'code',
  width: '7%',
  isLink: true,
}, {
  name: 'name',
  align: 'l',
}, {
  name: 'uvavg',
  align: 'r',
  isChart: true,
}, {
  name: 'uvmax',
  align: 'r',
  isChart: true,
}];
