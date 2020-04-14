export const HEADER = [{
  text: 'Router No.',
  value: 'routerNo',
}, {
  text: 'Host Name',
  value: 'hostNm',
  isCreate: true,
  autoSuggest: true,
  feildType: 'Router',
}, {
  text: 'CI NO',
  value: 'ciNo',
  isCreate: true,
}, {
  text: 'Created Date',
  value: 'modYmdt',
  isCreate: false,
}, {
  text: 'Modified Date',
  value: 'creYmdt',
  isCreate: false,
}];

export const FIELD = [{
  name: 'routerNo',
  width: '7%',
  minWidth: '130px',
}, {
  name: 'hostNm',
  width: '7%',
  minWidth: '130px',
  feildType: 'Router',
}, {
  name: 'ciNo',
  width: '14%',
  minWidth: '146px',
}, {
  name: 'modYmdt',
  width: '11%',
  minWidth: '130px',
  isDateTime: true,
}, {
  name: 'creYmdt',
  width: '11%',
  minWidth: '130px',
  isDateTime: true,
}];
