export const TOP10_PERIOD = ['Yesterday', 'Last week', 'Last month'];
export const DOMAIN_TYPES = ['AS', 'Pop', 'Country', 'Carrier', 'Router', 'Line', 'ESM'];
export const HEADER_MAP = {
  Yesterday: ['Today/Yesterday (Avg)', 'Today/Yesterday (Max)'],
  'Last week': ['This week/Last week (Avg)', 'This week/Last week (Max)'],
  'Last month': ['This month/Last month (Avg)', 'This month/Last month (Max)'],
};
export const FIELD = [{
  name: 'no',
  width: '4.5%',
}, {
  name: 'code',
  width: '7%',
  isLink: true,
}, {
  name: 'asNm',
  align: 'l',
}, {
  name: 'avg',
  align: 'r',
  isChart: true,
}, {
  name: 'max',
  align: 'r',
  isChart: true,
}];
