export const HEADER = [{
  text: 'Host Name',
  value: 'hostNm',
}, {
  text: 'IP Address',
  value: 'ipAddr',
}, {
  text: 'Local CD',
  value: 'locCdNm',
}, {
  text: 'Created Date',
  value: 'creYmdt',
}, {
  text: 'Modified Date',
  value: 'modYmdt',
}, {
  text: 'Excluded',
  isNoSort: true
}];

export const FIELD = [{
  name: 'hostNm',
  width: '21%',
  minWidth: '180px',
  attrEdit: true,
}, {
  name: 'ipAddr',
  width: '17%',
  minWidth: '87px',
}, {
  name: 'locCdNm',
  width: '21%',
  minWidth: '149px',
}, {
  name: 'creYmdt',
  width: '18%',
  minWidth: '140px',
  isDateTime: true,
}, {
  name: 'modYmdt',
  width: '18%',
  minWidth: '140px',
  isDateTime: true,
}, {
  width: '5%',
  minWidth: '130px',
  isCheck: true
}];
