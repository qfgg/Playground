import moment from 'moment';
import { DOMAIN_MAP, VALUE_MAP } from './constants/My/Common/DomainTypes';


export function formatNum(str) {
  if (typeof str === 'undefined') {
    return '';
  } else if (typeof str === 'number') {
    str = str.toString();
  }
  if (typeof str === 'string') {
    const dotPos = str.indexOf('.');
    let front;
    let tail;
    if (dotPos !== -1) {
      front = str.slice(0, dotPos);
      tail = str.slice(dotPos);
      return front.replace(/(\d)(?=(\d{3})+$)/g, '$1,').concat(tail);
    }
    return str.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }
  return '';
}

export function unformatNum(str) {
  if (typeof str === 'undefined') {
    return undefined;
  } else if (typeof str === 'string') {
    str = str.replace(',', '');
    return Number(str);
  }
  return undefined;
}

export function compareNumStr(valueA, valueB) {
  return unformatNum(valueA) - unformatNum(valueB);
}

export function comparePercentage(valueA, valueB) {
  return Number(valueA.slice(0, -1)) - Number(valueB.slice(0, -1));
}

export function isValidIP(str) {
  if (typeof str !== 'string') {
    return false;
  }
  // const regExp = /^((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|
  // (1\d\d)|([1-9]\d)|\d)){3}(\/((3[0-2])|([1-2]\d)|\d))?$/;
  const regExp = /^((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)){3}(\/24)?$/;
  return regExp.test(str);
}

export function scaleChart(chartTable) {
  let scaledChartTable = {};
  const dataScale = [];
  for (let i = 0, len = chartTable.data.length; i < len; i += 1) {
    const dataArr = {};
    for (let j = 0; j < chartTable.chartCnt; j += 1) {
      if ((j + 1) % 3 === 0) {
        dataArr[`v${j + 1}`] = -Math.min(100, Math.abs(chartTable.data[i][`v${j + 1}`]) * 100 / chartTable.stat[`v${j}`].max);
      } else if ((j + 1) % 3 === 2) {
        dataArr[`v${j + 1}`] = chartTable.data[i][`v${j + 1}`] * 100 / chartTable.stat[`v${j + 1}`].max;
      } else {
        dataArr[`v${j + 1}`] = Math.min(100, chartTable.data[i][`v${j + 1}`] * 100 / chartTable.stat[`v${j + 2}`].max);
      }
      dataArr.xTick = chartTable.data[i].xTick;
      dataArr.unit = '%';
    }
    dataScale.push(dataArr);
  }

  scaledChartTable = {
    chartLineNm: chartTable.chartLineNm,
    stat: chartTable.stat,
    chartTitle: chartTable.chartTitle,
    chartCnt: chartTable.chartCnt,
    data: dataScale
  };

  return scaledChartTable;
}

export function mapFiltersetToList(side, filterset) {
  const list = [];
  if (side.toLowerCase() !== 'filter') {
    for (const key in filterset) {
      if (filterset[key]) {
        list.push({
          name: DOMAIN_MAP[key],
          value: filterset[key].name ? filterset[key].name.join(', ') : ''
        });
      }
    }
  } else {
    let value;
    for (const key in filterset) {
      if (key === 'protocol') {
        list.push({
          name: DOMAIN_MAP.proto,
          value: filterset && filterset.protocol && filterset.protocol.value ?
            filterset.protocol.value.map(val => VALUE_MAP[val]).join(', ') : ''
        });
      } else if (key === 'tcpFlag' && filterset.protocol.length === 1 &&
        filterset.protocol.value[0] === 'tcp') {
        list.push({
          name: DOMAIN_MAP.flag,
          value: filterset && filterset.tcpFlag && filterset.tcpFlag.value ?
            filterset.tcpFlag.value.map(val => VALUE_MAP[val]).join(', ') : ''
        });
      } else if (key === 'packetSize') {
        list.push({
          name: DOMAIN_MAP.packetSize,
          value: filterset && filterset.packetSize && filterset.packetSize.value ?
            filterset.packetSize.value.map(val => VALUE_MAP[val]).join(', ') : ''
        });
      } else {
        if (key === 'period') {
          value = `${moment.unix(filterset[key].start).format('YYYY-MM-DD HH:mm')}||${moment.unix(filterset[key].end).format('YYYY-MM-DD HH:mm')}`;
        } else if (key === 'top') {
          value = `${filterset[key].limit} ${VALUE_MAP[filterset[key].order]}`;
        } else if (key === 'itemType' || key === 'aggregation' || key === 'interval') {
          value = VALUE_MAP[filterset[key]];
        }
        if (DOMAIN_MAP[key]) {
          list.push({
            name: DOMAIN_MAP[key],
            value
          });
        }
      }
    }
  }
  return list;
}

export function flowDataFormatter(num) {
  let convertdNm = Number(num);
  if (convertdNm < 0) {
    convertdNm = -convertdNm;
  }
  if (convertdNm >= 1000000000) {
    return `${(convertdNm / 1000000000).toFixed(1).replace(/\.0$/, '')}G`;
  }
  if (convertdNm >= 1000000) {
    return `${(convertdNm / 1000000).toFixed(1).replace(/\.0$/, '')}M`;
  }
  if (convertdNm >= 1000) {
    return `${(convertdNm / 1000).toFixed(1).replace(/\.0$/, '')}K`;
  }
  return `${convertdNm.toFixed(1).replace(/\.0$/, '')}`;
}

export function flowIntFormatter(num) {
  let convertdNm = Number(num);
  if (convertdNm < 0) {
    convertdNm = -convertdNm;
  }
  if (convertdNm >= 1000000000) {
    return `${Math.round(convertdNm / 1000000000)}G`;
  }
  if (convertdNm >= 1000000) {
    return `${Math.round(convertdNm / 1000000)}M`;
  }
  if (convertdNm >= 1000) {
    return `${Math.round(convertdNm / 1000)}K`;
  }
  return `${Math.round(convertdNm)}`;
}

export function isEmptyObj(obj) {
  if (!obj) {
    return true;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

export function ignoreSeconds(m) {
  return m.startOf('minute').unix();
}

export function ignoreTime(m) {
  return m.startOf('day').unix();
}

export function ignoreDate(m) {
  return m.startOf('month').unix();
}

export function sortAscBy(obj) {
  return (o, p) => {
    let a;
    let b;
    if (typeof o === 'object' && typeof p === 'object' && o && p) {
      a = o[obj];
      b = p[obj];
      if (a === b) {
        return 0;
      }
      if (typeof a === typeof b) {
        return a < b ? -1 : 1;
      }
      return typeof a < typeof b ? -1 : 1;
    }
    throw ('error');
  };
}

export function sortDescBy(obj) {
  return (o, p) => {
    let a;
    let b;
    if (typeof o === 'object' && typeof p === 'object' && o && p) {
      a = o[obj];
      b = p[obj];
      if (a === b) {
        return 0;
      }
      if (typeof a === typeof b) {
        return b < a ? -1 : 1;
      }
      return typeof b < typeof a ? -1 : 1;
    }
    throw ('error');
  };
}

export function extractObj(obj) {
  if (!obj) {
    return null;
  }
  const keys = Object.keys(obj);
  if (keys.length > 1) {
    return obj;
  }
  return extractObj(obj[keys[0]]);
}

// copy an object
export function cloneObj(obj) {
  // if obj is a null, undefined, or primitive, return it
  if (obj === null || obj === undefined || typeof obj !== 'object') {
    return obj;
  }
  // handle Array
  if (Object.prototype.toString.apply(obj) === '[object Array]') {
    const arr = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      if (typeof obj[i] !== 'object') {
        arr[i] = obj[i];
      } else {
        arr[i] = cloneObj(obj[i]);
      }
    }
    return arr;
  }
  // handle Object
  if (typeof obj === 'object') {
    const o = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] !== 'object') {
          o[key] = obj[key];
        } else {
          o[key] = cloneObj(obj[key]);
        }
      }
    }
    return o;
  }
}

// compare object value
export function isValEqual(a, b) {
  // a and b are not of the same type,
  if (typeof a !== typeof b) {
    return false;
  } else if (typeof a !== 'object') {
    // a and b are not objects. (same type)
    if (typeof a === 'number' && isNaN(a) && typeof b === 'number' && isNaN(b)) {
      return true;
    }
    return a === b;
  }
  if (Object.prototype.toString.apply(a) === '[object Array]' &&
    Object.prototype.toString.apply(b) === '[object Array]') {
    // a and b are both Arrays
    const lenA = a.length;
    const lenB = b.length;
    if (lenA !== lenB) {
      return false;
    }
    for (let i = 0; i < lenA; i++) {
      if ((typeof a[i] !== typeof b[i]) ||
        (typeof a[i] !== 'object' && typeof b[i] !== 'object' &&
          a[i] !== b[i])) {
        return false;
      }
      if (!isValEqual(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  // a and b are both Objects
  if (a === null || b === null) {
    return a === b;
  }
  for (const key in a) {
    // compare objects' own properties
    if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
      if ((typeof a[key] !== typeof b[key]) ||
        (typeof a[key] !== 'object' && typeof b[key] !== 'object' &&
          a[key] !== b[key])) {
        return false;
      }
      if (!isValEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return true;
}

export function filterMenu(menu) {
  if (!menu || !Array.isArray(menu)) {
    return [];
  }

  return menu.map(item => ({
    name: item.mnNm,
    id: item.mnNo,
    icon: item.icon,
    subMenu: item.sub.map(itm => ({
      name: itm.mnNm,
      id: itm.mnNo,
      link: itm.url
    }))
  }));
}

function IPtoBinary(ip) {
  const arr = ip.split('.');
  const tmp = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    tmp[i] = parseInt(arr[i], 10).toString(2);
    for (let j = 0, l = 8 - tmp[i].length; j < l; j++) {
      tmp[i] = `0${tmp[i]}`;
    }
  }
  return tmp.join('');
}

function BinarytoIP(binary) {
  const arr = [];
  for (let i = 0; i < 32; i += 8) {
    arr.push(parseInt(binary.slice(i, i + 8), 2));
  }
  return arr.join('.');
}

export function getStartEndIP(subnet) {
  const arr = subnet.split('/');
  const ip = arr[0];
  const bitmask = parseInt(arr[1], 10);
  const binary = IPtoBinary(ip);
  let tail0 = '';
  let tail1 = '';
  for (let i = bitmask; i < 32; i++) {
    tail0 += '0';
    tail1 += '1';
  }
  return {
    startIp: BinarytoIP(`${binary.slice(0, bitmask)}${tail0}`),
    endIp: BinarytoIP(`${binary.slice(0, bitmask)}${tail1}`)
  };
}

// export function getDaysByTimeStamp(timeString) {
//   const month = new Date(timeString).getMonth() + 1;
//   const year = new Date(timeString).getFullYear();
//   let monthDays = 30;
//   const yearDays = year % 4 === 0 ? 366 : 365;
//   if (month === 2) {
//     monthDays = year % 4 === 0 ? 29 : 28;
//   } else if (month === 1 || month === 3
//     || month === 5 || month === 7 || month === 8
//     || month === 10 || month === 12) {
//     monthDays = 31;
//   } else {
//     monthDays = 30;
//   }

//   return { monthDays, yearDays };
// }
