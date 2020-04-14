export const HEADER = [{
  text: 'ISP No',
  value: 'ispId',
}, {
  text: 'Comment',
  value: 'cmntTxt',
}, {
  text: 'Physical Bandwidth',
  value: 'pyscBw',
}, {
  text: 'Contract Bandwidth',
  value: 'cntrctBw',
}, {
  text: 'Interface Count',
  value: 'intfCnt',
}, {
  text: 'AS Number',
  value: 'asNo',
}, {
  text: 'Created Date',
  value: 'creYmdt',
}, {
  text: 'Modified Date',
  value: 'modYmdt',
}];

export const FIELD = [{
  name: 'ispId',
  width: '8%',
  minWidth: '68px',
}, {
  name: 'cmntTxt',
  width: '10%',
  minWidth: '87px',
}, {
  name: 'pyscBw',
  width: '14%',
  minWidth: '146px',
}, {
  name: 'cntrctBw',
  width: '14%',
  minWidth: '149px',
}, {
  name: 'intfCnt',
  width: '12%',
  minWidth: '122px',
}, {
  name: 'asNo',
  minWidth: '95px',
  attrEdit: true,
}, {
  name: 'creYmdt',
  width: '11%',
  minWidth: '130px',
  isDateTime: true,
}, {
  name: 'modYmdt',
  width: '11%',
  minWidth: '130px',
  isDateTime: true,
}];
