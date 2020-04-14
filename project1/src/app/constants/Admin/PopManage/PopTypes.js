export const HEADER = [{
  text: 'Name',
  value: 'popNm',
  isCreate: true,
  required: true
}, {
  text: 'Country',
  value: 'cntryCd',
  isCreate: true,
  autoSuggest: true,
  feildType: 'Country',
}, {
  text: 'Description',
  value: 'desc',
  isCreate: true,
}, {
  text: 'Prefix',
  value: 'prfxs',
  isCreate: false,
}, {
  text: 'Updated Date',
  value: 'creYmdt',
  isCreate: false,
}, {
  text: 'Community',
  value: 'cmnty',
  isCreate: true,
  required: true,
  regRule: /^[1-9]+[\d,]*$/
}];

export const FIELD = [{
  name: 'popNm',
  width: '7%',
  minWidth: '130px',
  attrEdit: true,
  required: true,
}, {
  name: 'cntryCd',
  width: '7%',
  minWidth: '146px',
  autoSuggest: true,
  feildType: 'Country',
  attrEdit: true,
}, {
  name: 'desc',
  width: '15%',
  minWidth: '130px',
  attrEdit: true,
}, {
  name: 'prfxs',
  width: '13%',
  minWidth: '130px',
}, {
  name: 'modYmdt',
  width: '11%',
  minWidth: '130px',
  isDateTime: true,
}, {
  name: 'cmnty',
  width: '14%',
  minWidth: '200px',
  attrEdit: true,
  regRule: /^[1-9]+[\d,]*$/
}];
