import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartPane from './ChartPane';
import { sortDescBy } from '../../../helper';


export default class ChartGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentHeight: 0,
    };
  }

  setContentHeight = (height) => {
    this.setState({
      contentHeight: height,
    });
  }

  findTotal = (obj) => {
    let totalAvg;
    if (obj.chartLineNm.v1 === 'total') {
      totalAvg = obj.stat.v1.avg;
    } else if (obj.chartLineNm.v2 === 'total') {
      totalAvg = obj.stat.v2.avg;
    } else {
      totalAvg = obj.stat.v3.avg;
    }
    return totalAvg;
  }

  render() {
    const {
      chartData,
      tableData,
      col,
      searchQuery,
      detailType,
      showingDomain,
      isFetchingChart,
      domain,
      saveTmpFilter
    } = this.props;
    const chartArr = [];
    const groups = [];

    if (chartData) {
      if (chartData.chartLineNm) {
        const id = chartData.domainArr[0].id;
        chartArr.push({ ...chartData, total: this.findTotal(chartData), domainId: id });
      } else {
        for (const obj in chartData) {
          const data = { ...chartData[obj], total: this.findTotal(chartData[obj]), domainId: obj };
          chartArr.push(data);
        }
      }
    }
    chartArr.sort(sortDescBy('total'));

    return (
      <div className="chart-group ibox-content">
        {
          isFetchingChart ?
            (<div className="spinner">
              <i className="fa fa-spinner" />
            </div>) :
            chartArr.map((item, idx) =>
              (<ChartPane
                key={idx}
                data={item}
                tableData={tableData[item.domainId]}
                col={col}
                charts={groups[idx]}
                searchQuery={searchQuery}
                showingDomain={showingDomain}
                detailType={detailType}
                setContentHeight={this.setContentHeight}
                contentHeight={this.state.contentHeight}
                domain={domain}
                saveTmpFilter={saveTmpFilter}
              />))
        }
      </div>
    );
  }
}

ChartGroup.propTypes = {
  col: PropTypes.number,
  detailType: PropTypes.string,
};
