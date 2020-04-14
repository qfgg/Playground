export const GROUP_HEADER = [{
  text: 'Group Code',
  value: 'grpCd',
  isCreate: true,
  isCheck: true,
  required: true
}, {
  text: 'Name',
  value: 'grpCdNm',
  isCreate: true,
  required: true
}];

export const CODE_HEADER = [{
  text: 'Group',
  value: 'grpCd',
  isCreate: false,
}, {
  text: 'Child Code',
  value: 'cd',
  isCreate: true,
  isCheck: true,
  required: true
}, {
  text: 'Name',
  value: 'cdNm',
  isCreate: true,
  required: true
}];

export const GROUP_FIELD = [{
  name: 'grpCd',
  width: '30%',
  minWidth: '99px'
}, {
  name: 'grpCdNm',
  width: '40%',
  minWidth: '129px',
  attrEdit: true,
}];

export const CODE_FIELD = [{
  name: 'grpCd',
  width: '30%'
}, {
  name: 'cd',
  width: '25%',
  minWidth: '130px'
}, {
  name: 'cdNm',
  width: '25%',
  minWidth: '120px',
  attrEdit: true,
}];
