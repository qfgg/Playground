import moment from 'moment';


const chartGenerate = (function() {
  return {
    // get time display format
    getTimeFormat(chartlines) {
      if (!chartlines || !chartlines[0] || !chartlines[0].timeValue ||
        !chartlines[0].timeValue.length) {
        return '';
      }
      let duration = chartlines[0].timeValue[chartlines[0].timeValue.length - 1].time -
        chartlines[0].timeValue[0].time;
      if (duration <= moment.duration(1, 'days').as('seconds')) {
        return 'HH:mm';
      } else if (duration <= moment.duration(1, 'weeks').as('seconds')) {
        return 'DD HH:mm';
      } else if (duration <= moment.duration(1, 'months').as('seconds')) {
        return 'MM/DD HH:mm';
      } else {
        return 'YYYY/MM/DD HH:mm';
      }
    },

    // get chart data
    getChartData(chartlines) {
      if (!chartlines || !chartlines[0] || !chartlines[0].timeValue ||
        !chartlines[0].timeValue.length) {
        return [];
      }
      let timeFormat = this.getTimeFormat(chartlines);
      let data = [];
      for (let i = 0, len = chartlines[0].timeValue.length; i < len; i += 1) {
        if (!data[i]) {
          data[i] = {};
        }
        data[i]['xTick'] = moment.unix(chartlines[0].timeValue[i].time).format(timeFormat);
        for (let j = 0, l = chartlines.length; j < l; j += 1) {
          if (chartlines[j] && chartlines[j].timeValue && chartlines[j].timeValue[i] && chartlines[j].timeValue[i].value !== null) {
            data[i][`v${j + 1}`] = Math.round(chartlines[j].timeValue[i].value);
            const item = chartlines[j].item.toLocaleLowerCase();
            switch (item) {
            case 'traffic':
              data[i].unit = 'bps';
              break;
            case 'flow':
              data[i].unit = 'fps';
              break;
            case 'packet':
              data[i].unit = 'pps';
              break;
            default:
              data[i].unit = '';
              break;
            }
          }
        }
      }
      return data;
    },

    // get chart statistics
    getChartStat(chartlines) {
      if (!chartlines || !chartlines[0] || !chartlines[0].avgMinMaxLast) {
        return {};
      }
      let stat = {};
      for (let i = 0, len = chartlines.length; i < len; i += 1) {
        stat[`v${i + 1}`] = (chartlines[i] && chartlines[i].avgMinMaxLast) ? {
          last: Math.round(chartlines[i].avgMinMaxLast.last),
          avg: Math.round(chartlines[i].avgMinMaxLast.avg),
          max: Math.round(chartlines[i].avgMinMaxLast.max),
          min: Math.round(chartlines[i].avgMinMaxLast.min)
        } : {
          last: null,
          avg: null,
          max: null,
          min: null
        };
      }
      return stat;
    },

    // get chart line name
    getChartLineNm(chartlines, type, isChart, option) {
      let name = isChart ? {} : [];
      if (!chartlines) {
        return {};
      }
      
      if (type === 'exp' || type === 'split' || type === 'dtl') {
        for (let i = 0, len = chartlines.length; i < len; i += 1) {
          if (chartlines[i].domain.length === 0) {
            name[isChart ? `v${i + 1}` : i] = `${chartlines[i].item}-${chartlines[i].direction}`;
          } else {
            name[isChart ? `v${i + 1}` : i] = chartlines[i].domain.map(item => {
              if (item.type.split('_')[1] === 'asn') {
                return `AS${item.id}:${item.name}`
              }
              return item.name
            }).join('-');
          }
        }
      } else if (type === 'status') {
        for (let i = 0, len = chartlines.length; i < len; i += 1) {
          name[isChart ? `v${i + 1}` : i] = `${chartlines[i].item}-${chartlines[i].direction}`;
        }
      } else if (type === 'indv') {
        for (let i = 0, len = chartlines.length; i < len; i += 1) {
          name[isChart ? `v${i + 1}` : i] = `${option}-${chartlines[i].direction}`;
        }
      } else if (type === 'dsh' || type === 'dtlif') {
        for (let i = 0, len = chartlines.length; i < len; i += 1) {
          name[isChart ? `v${i + 1}` : i] = `${chartlines[i].direction}`;
        }
      } else if (type === 'cmpr' || type === 'relAll') {
        let time;
        let unit = option.substr(1,1);
        let num = option.substr(0,1);
        switch (unit) {
        case 'd':
          if (num === '1') {
            time = {
              now: 'Today',
              past: 'Yesterday'
            };
          } else {
            time = {
              now: 'Today',
              past: `${num} days ago`
            }
          }
          break;
        case 'w':
          if (num === '1') {
            time = {
              now: 'This week',
              past: 'Last week'
            };
          } else {
            time = {
              now: 'Today',
              past: `${num} weeks ago`
            }
          }
          break;
        case 'm':
          time = {
            now: 'This month',
            past: 'Last month'
          };
          break;
        case 'y':
          time = {
            now: 'This year',
            past: 'Last year'
          };
          break;
        default:
          time = {
            now: 'Today',
            past: 'Yesterday'
          };
        }
        for (let i = 0, len = chartlines.length; i < len; i += 3) {
          name[isChart ? `v${i + 1}` : i] = type === 'relAll' ?
            `${time.now}` : `${time.now} ${chartlines[i].domain[0].name}`;
          name[isChart ? `v${i + 2}` : i + 1] = type === 'relAll' ?
            `${time.past}` : `${time.past} ${chartlines[i].domain[0].name}`;
          name[isChart ? `v${i + 3}` : i + 2] = type === 'relAll' ?
            'Compare' : `Compare ${chartlines[i].domain[0].name}`;
        }
      }
      return name;
    },

    // get chart title
    getChartTitle(chartlines, type, option) { 
      if (!chartlines || !chartlines[0]) {
        return '';
      }
      if (chartlines[0].direction && type === 'exp' || type === 'dtl' || type === 'relAll') {
        return chartlines[0].direction;
      } else if (type === 'split' || type === 'indv' || type === 'dsh') {
        return option;
      } else if (chartlines[0].item && chartlines[0].direction && type === 'status'){
        return `${chartlines[0].item}-${chartlines[0].direction}`;
      } else if (chartlines[0].domain && chartlines[0].domain.length && type === 'dtlif') {
        return chartlines[0].domain[0].name;
      } else if (chartlines[0].domain && chartlines[0].domain.length && type === 'cmpr') {
        let convertType = chartlines[0].domain[0].type;
        let convertTitle;
        let title = convertType.indexOf('_') !== -1 ? convertType.split('_')[1] : convertType;
        convertTitle = title.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
        if (title === 'asn') {
          convertTitle = 'AS';
        }
        if (title === 'if') {
          convertTitle = 'Interface';
        }
        return convertTitle;
      } else {
        return '';
      }
    }, 

    // convert chart response data into rechart format
    chartFormatter(chartlines, type, option) {
      return {
        data: this.getChartData(chartlines),
        chartCnt: chartlines ? chartlines.length : 0,
        stat: this.getChartStat(chartlines),
        chartLineNm: this.getChartLineNm(chartlines, type, true, option),
        chartTitle: this.getChartTitle(chartlines, type, option),
        domainArr: chartlines ? (chartlines[0] || {}).domain : [],
        itemType: chartlines ? (chartlines[0] || {}).item : '',
      };
    },

    // convert chart response data into geomap/treemap format
    mapChartFormatter(chartlines, type) {
      return chartlines.map(item => ({
        domain: item.domain[0],
        value: item.avgMinMaxLast.last,
        direction: item.direction,
        item: item.item,
      }))
    },

    toStatusGrouper(chartlines) {
      let charts = {};
      for (let i = 0, len = chartlines.length; i < len; i += 1) {
        if (!charts[chartlines[i].item]) {
          charts[chartlines[i].item] = {};
        }
        if (!charts[chartlines[i].item][chartlines[i].direction]) {
          charts[chartlines[i].item][chartlines[i].direction] = [];
        }
        charts[chartlines[i].item][chartlines[i].direction].push(chartlines[i]);
      }
      return charts;
    },

    toIndvGrouper(chartlines) {
      let charts = {};
      for (let i = 0, len = chartlines.length; i < len; i += 1) {
        if (!charts[chartlines[i].domain[0].id]) {
          charts[chartlines[i].domain[0].id] = {};
        }
        if (!charts[chartlines[i].domain[0].id][chartlines[i].direction]) {
          charts[chartlines[i].domain[0].id][chartlines[i].direction] = [];
        }
        charts[chartlines[i].domain[0].id][chartlines[i].direction].push(chartlines[i]);
      }
      return charts;
    },

    toDirectGrouper(chartlines) {
      let charts = {};
      for (let i = 0, len = chartlines.length; i < len; i += 1) {
        if (!charts[chartlines[i].direction]) {
          charts[chartlines[i].direction] = [];
        }
        charts[chartlines[i].direction].push(chartlines[i]);
      }
      return charts;
    },

    toDshGrouper(chartlines) {
      let charts = {};
      for (let i = 0, len = chartlines.length; i < len; i += 1) {
        if (!charts[chartlines[i].domain[0].id]) {
          charts[chartlines[i].domain[0].id] = [];
        }
        charts[chartlines[i].domain[0].id].push(chartlines[i]);
      }
      for (const key in charts) {
        charts[key].sort((a, b) => {
          if (a.direction === 'in' || b.direction === 'total') {
            return -1;
          } else if (a.direction === 'total' || b.direction === 'in') {
            return 1;
          }
        });
      }
      return charts;
    },

    toCmprGrouper(chartlines, ifAll) {
      let charts = {};
      
      for (let i = 0, len = chartlines.length; i < len; i += 1) {
        if (!ifAll) {  
          let domainType = '';
          if (chartlines[i].domain[0].type === 'router') {
            domainType = 'router';
          } else {
            domainType = chartlines[i].domain[0].type.indexOf('_') !== -1 ?
            chartlines[i].domain[0].type.split('_')[1] : chartlines[i].domain[0].type;
            if (domainType === 'asn') {
              domainType = 'as';
            }
          }
          if (!charts[domainType]) {
              charts[domainType] = [];
            } 
          charts[domainType].push(chartlines[i]);
          charts[domainType].push(chartlines[i].compare);
          charts[domainType].push(chartlines[i].diff);
        } else {
          if (!charts[chartlines[i].direction]) {
            charts[chartlines[i].direction] = [];
          }
          charts[chartlines[i].direction].push(chartlines[i]);
          charts[chartlines[i].direction].push(chartlines[i].compare);
          charts[chartlines[i].direction].push(chartlines[i].diff);
        }
      } 
      return charts;
    },

    toSplitGrouper(chartlines, splitDomain) {
      let charts = {};
      let keyArr = [];
      for (let key in splitDomain) {
        if (splitDomain[key]) {
          keyArr.push(key);
        }
      }
      let keyLen = keyArr.length;
      for (let i = 0, len = chartlines.length; i < len; i += 1) {
        let mapKey = [];
        if (!charts[chartlines[i].direction]) {
          charts[chartlines[i].direction] = {};
        }
        for (let j = 0; j < keyLen; j += 1) {
          mapKey.push(chartlines[i].domain
            .filter(item => item.type === keyArr[j])[0].name);
        }
        if (!charts[chartlines[i].direction][mapKey]) {
          charts[chartlines[i].direction][mapKey] = [];
        }
        charts[chartlines[i].direction][mapKey].push(chartlines[i]);
      }
      return charts;
    },

    // group chartlines into charts by fields and format
    groupCharts(chartlines, type, period, formatter) {
      let charts = {};
      if (!chartlines) {
        return;
      }
      let len = chartlines.length;
      if (type === 'status') {
        // charts['traffic']['in']...
        charts = this.toStatusGrouper(chartlines);
        for (let key in charts) {
          for(let k in charts[key]){
            charts[key][k] = formatter(charts[key][k], type);
          }
        }
      } else if (type === 'indv') {
        // charts['id']['in']...
        charts = this.toIndvGrouper(chartlines);
        for (let key in charts) {
          for(let k in charts[key]){
            charts[key][k] = formatter(charts[key][k], type, charts[key][k][0].domain[0].name);
          }
        } 
      } else if (type === 'exp' || type === 'dtl' || type === 'dtlctry' || type === 'dtlesm') {
        // charts['in']...
        charts = this.toDirectGrouper(chartlines);
        for (let key in charts) {
          charts[key] = formatter(charts[key], type);
        }
      } else if (type === 'dsh') {
        // charts['id']...
        charts = this.toDshGrouper(chartlines);
        for (let key in charts) {
          charts[key] = formatter(charts[key], type, charts[key][0].domain[0].name);
        }
      } else if (type === 'cmpr') {
        // charts['domain']...
        charts = this.toCmprGrouper(chartlines);
        for (let key in charts) {
          charts[key] = formatter(charts[key], type, period);
        }
      } else if (type === 'relAll') {
        let chartsDirect = this.toDirectGrouper(chartlines);
        for (let key in chartsDirect) {
          charts[key] = this.toCmprGrouper(chartsDirect[key], 'relAll');
        }
        for (let key in charts) {
          for(let k in charts[key]){
            charts[key][k] = formatter(charts[key][k], type, period);
          }
        }
      }
      return charts;
    },

    // group chartlines into charts by split domain and format
    groupSplitCharts(chartlines, splitDomain, formatter) {
      let charts = {};
      
      //charts['in']['group']...
      charts = this.toSplitGrouper(chartlines, splitDomain);
      
      for (let key in charts) {
        for(let k in charts[key]){
          charts[key][k] = formatter(charts[key][k], 'split', k);
        }
      }
      return charts;
    },

    chartDataToJSON(lines) {
      if (!lines[0] || !lines[0].timeValue || !lines[0].timeValue.length) {
        return [];
      }
      let tvArr = [];
      let nameArr = lines.pop();
      for (let i = 0, len = lines.length; i < len; i += 1) {
        if (lines[i] && lines[i].timeValue) {
          tvArr = [...tvArr, ...lines[i].timeValue.map((item) => {
            if (lines[i].domain && Array.isArray(lines[i].domain) &&
              lines[i].domain.length > 0) {
              return {
                domain: lines[i].domain,
                name: nameArr[i],
                time: moment.unix(item.time).format('YYYY/MM/DD HH:mm'),
                value: Math.round(item.value)
              };
            }
            return {
              name: nameArr[i],
              time: moment.unix(item.time).format('YYYY/MM/DD HH:mm'),
              value: Math.round(item.value)
            }
          })];
        }
      }
      return tvArr;
    },

    // convert chart data into table
    buildTable(chartlines, type, period) {
      let table = {};
      if (!chartlines) {
        return;
      }
      let len = chartlines.length;
      if (type === 'status') {
        // charts['traffic']['in']...
        table = this.toStatusGrouper(chartlines);
        for (let key in table) {
          for(let k in table[key]){
            table[key][k].push(this.getChartLineNm(table[key][k], type, false));
            table[key][k] = this.chartDataToJSON(table[key][k]);
          }
        }
      } else if (type === 'indv') {
        // charts['id']['in']...
        table = this.toIndvGrouper(chartlines);
        for (let key in table) {
          for(let k in table[key]){
            table[key][k].push(this.getChartLineNm(table[key][k], type, false, table[key][k][0].domain[0].name));
            table[key][k] = this.chartDataToJSON(table[key][k]);
          }
        } 
      } else if (type === 'exp' || type === 'dtl' || type === 'dtlctry' || type === 'dtlesm') {
        // charts['in']...
        table = this.toDirectGrouper(chartlines);
        for (let key in table) {
          table[key].push(this.getChartLineNm(table[key], type, false));
          table[key] = this.chartDataToJSON(table[key]);
        }
      } else if (type === 'dsh') {
        // charts['id']...
        table = this.toDshGrouper(chartlines);
        for (let key in table) {
          table[key].push(this.getChartLineNm(table[key], type, false, table[key][0].domain[0].name));
          table[key] = this.chartDataToJSON(table[key]);
        }
      } else if (type === 'cmpr') {
        // charts['domain']...
        table = this.toCmprGrouper(chartlines);
        for (let key in table) {
          table[key].push(this.getChartLineNm(table[key], type, false, period, key));
          table[key] = this.chartDataToJSON(table[key]);
        }
      } else if (type === 'relAll') {
        let chartsDirect = this.toDirectGrouper(chartlines);
        for (let key in chartsDirect) {
          table[key] = this.toCmprGrouper(chartsDirect[key], 'relAll');
        }
        for (let key in table) {
          for(let k in table[key]){
            table[key][k].push(this.getChartLineNm(table[key][k], type, false, period, key));
            table[key][k] = this.chartDataToJSON(table[key][k]);
          }
        }
      }
      return table;
    },

    // convert split chart data into table
    buildSplitTable(chartlines, splitDomain) {
      let table = {};
      
      //charts['in']['group']...
      table = this.toSplitGrouper(chartlines, splitDomain);
      
      for (let key in table) {
        for(let k in table[key]){
          table[key][k].push(this.getChartLineNm(table[key][k], 'split', false, k));
          table[key][k] = this.chartDataToJSON(table[key][k]);
        }
      }
      return table;
    },

    getIfCharts(chartlines, formatter) {
      if (!chartlines) {
        return null;
      }

      chartlines.sort((a, b) => {
        if (a.direction === 'in' || b.direction === 'total') {
          return -1;
        } else if (a.direction === 'total' || b.direction === 'in') {
          return 1;
        }
      });
      return formatter(chartlines, 'dtlif');
    },

    // entry
    genChart(chartlines, type, option) {
      if (type !== 'status' && type !== 'exp' && type !== 'dtl' &&
        type !== 'dtlctry' && type !== 'dtlesm' && type !== 'dsh' &&
        type !== 'cmpr' && type !== 'split' && type !== 'indv' &&
        type !== 'relAll' && type !== 'dtlif') {
        return null;
      }
      let charts = {};
      if (type === 'split') {
        charts = this.groupSplitCharts(chartlines, option, this.chartFormatter.bind(this));
      } else if (type === 'dtlctry' || type === 'dtlesm') {
        charts = this.groupCharts(chartlines, type, option, this.mapChartFormatter.bind(this));
      } else if (type === 'dtlif') {
        charts = this.getIfCharts(chartlines, this.chartFormatter.bind(this));
      } else {
        charts = this.groupCharts(chartlines, type, option, this.chartFormatter.bind(this));
      }
      return charts;
    },

    // build excel data
    genTable(chartlines, type, option) {
      if (type !== 'status' && type !== 'exp' && type !== 'dtl' &&
        type !== 'dtlctry' && type !== 'dtlesm' && type !== 'dsh' &&
        type !== 'cmpr' && type !== 'split' && type !== 'indv' &&
        type !== 'relAll') {
        return null;
      }
      let table = {};
      if (type === 'split') {
        table = this.buildSplitTable(chartlines, option);
      } else if (type === 'dtlctry' || type === 'dtlesm') {
        table = this.buildTable(chartlines, type, option);
      } else {
        table = this.buildTable(chartlines, type, option);
      }
      return table;
    }
  }
}());

export default chartGenerate;