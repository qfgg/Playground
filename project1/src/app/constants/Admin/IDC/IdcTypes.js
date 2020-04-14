export const HEADER = [{
  text: 'Code',
  value: 'idcCd',
}, {
  text: 'Name',
  value: 'idcNm',
}, {
  text: 'Country',
  value: 'cntryCd',
  feildType: 'Country',
}, {
  text: 'LSR Location',
  value: 'lsrLocCd',
}, {
  text: 'Created Date',
  value: 'creYmdt',
}, {
  text: 'Modified Date',
  value: 'modYmdt',
}];

export const FIELD = [{
  name: 'idcCd',
  width: '11%',
  minWidth: '130px',
}, {
  name: 'idcNm',
  width: '11%',
  minWidth: '130px',
}, {
  name: 'cntryCd',
  width: '14%',
  minWidth: '146px',
  attrEdit: true,
  feildType: 'Country',
}, {
  name: 'lsrLocCd',
  width: '15%',
  minWidth: '146px',
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
