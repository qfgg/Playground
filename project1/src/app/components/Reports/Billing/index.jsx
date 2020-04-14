import React, { Component } from 'react';
import SearchBar from './SearchBar';
import CommonChart from '../../Rechart/Common/CommonChart';
import TrafficTable from './TrafficTable';
import DownloadPane from './DownloadPane';
import './index.less';


export default class BillingReport extends Component {
  componentDidMount() {
    const { initItem } = this.props;
    initItem('ESM');
  }

  renderChart = (chart) => {
    if (!chart) {
      return null;
    }

    const lines = Object.keys(chart);
    const c = {
      data: [],
      name: {}
    };

    for (let i = 0, len = (chart[lines[0]] || []).length; i < len; i += 1) {
      if (!c.data[i]) {
        c.data[i] = {};
      }
      c.data[i].xTick = chart[lines[0]][i].month;
      for (let j = 0, l = lines.length; j < l; j += 1) {
        if (chart[lines[j]][i] !== undefined) {
          c.data[i][`v${j + 1}`] = chart[lines[j]][i].avgMaxBps;
        }
        if (i === 0) {
          c.name[`v${j + 1}`] = lines[j];
        }
      }
      c.data[i].unit = '';
    }

    return (
      <CommonChart
        data={c.data}
        type="line"
        chartCnt={lines.length}
        chartNm={c.name}
      />
    );
  };

  render() {
    const {
      period,
      area,
      favoredItemList,
      selectedItemList,
      initResList,
      searchResList,
      setArea,
      setPeriod,
      addSelItem,
      removeSelItem,
      saveItem,
      delItem,
      initList,
      searchListSuccess,
      searchList,
      clearSel,
      findBilling,
      billing
    } = this.props;

    return (
      <div className="billing">
        <SearchBar
          period={period}
          area={area}
          addSelItem={addSelItem}
          removeSelItem={removeSelItem}
          initList={initList}
          searchListSuccess={searchListSuccess}
          saveItem={saveItem}
          initResList={initResList}
          searchResList={searchResList}
          delItem={delItem}
          searchList={searchList}
          selectedItemList={selectedItemList}
          favoredItemList={favoredItemList}
          setArea={setArea}
          setPeriod={setPeriod}
          clearSel={clearSel}
          findBilling={findBilling}
        />
        { this.renderChart(billing.res && billing.res.chart ? billing.res.chart :
          null) }
        <TrafficTable billing={billing} />
        <DownloadPane period={period} billing={billing} />
      </div>
    );
  }
}
