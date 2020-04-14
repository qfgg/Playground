export const HEADER = [{
  text: 'ASN',
  value: 'asNo',
  isCreate: true,
  dropdown: true,
  droplist: [23576, 38631, 135354],
}, {
  text: 'Subnet',
  value: 'subnet',
  isCreate: true,
  required: true,
  regRule: /^((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)){3}(\/((3[0-2])|([1-2]\d)|[1-9]))$/
}, {
  text: 'Start IP',
  value: 'startIp',
  isShow: true
}, {
  text: 'End IP',
  value: 'endIp',
  isShow: true,
}, {
  text: 'Bitmask',
  value: 'bitmask',
  isShow: true,
}, {
  text: 'Excluded',
  isCheck: true,
  isNoSort: true
}];

export const FIELD = [{
  name: 'asNo',
  width: '13.5%',
  minWidth: '130px',
  attrEdit: true,
  dropdown: true,
  droplist: [23576, 38631, 135354],
}, {
  name: 'subnet',
  width: '13.5%',
  minWidth: '',
  attrEdit: true,
  required: true,
}, {
  name: 'startIp',
  width: '13.5%',
  minWidth: '130px',
  dataSource: 'subnet',
  dataFlag: 0
}, {
  name: 'endIp',
  width: '13.5%',
  minWidth: '130px',
  dataSource: 'subnet',
  dataFlag: -1
}, {
  name: 'bitmask',
  width: '13.5%',
  minWidth: '130px',
  dataSource: 'subnet',
  dataFlag: 1
}, {
  isCheck: true
}];
