import React, { Component } from 'react';
import LinkCellRenderer from '../Common/LinkCellRenderer';
import Pagination from '../../Pagination';
import CommonChart from '../../Rechart/Common/CommonChart';


class TrafficTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'line'
    };
  }

  render() {
    const { type } = this.state;
    const { rowData, nfasChart, nmsChart } = this.props;

    return (
      <tr>
        <td className="text-center v-middle">
          <LinkCellRenderer
            keyName="router"
            value={{ name: rowData.hostNm, id: rowData.routerNo }}
          />
        </td>
        <td className="text-center v-middle">
          {
            parseInt(rowData.ifNo, 10) === -1 ? '-' :
            <LinkCellRenderer
              keyName="interface"
              value={{ name: rowData.ifNm, id: rowData.ifNo }}
            />
          }
        </td>
        <td className="text-center v-middle">
          {
            nmsChart && nmsChart.isFetching ?
              (<div className="spinner">
                <i className="fa fa-spinner" />
              </div>) :
            nmsChart && nmsChart.chartData ?
              (<CommonChart
                data={nmsChart.chartData.data}
                type={type}
                chartCnt={nmsChart.chartData.chartCnt}
                chartNm={nmsChart.chartData.chartLineNm}
                stat={nmsChart.chartData.stat}
              />) : '-'
          }
        </td>
        <td className="text-center v-middle">
          {
            nfasChart && nfasChart.isFetching ?
              (<div className="spinner">
                <i className="fa fa-spinner" />
              </div>) :
            nfasChart && nfasChart.chartData ?
              (<CommonChart
                data={nfasChart.chartData.data}
                type={type}
                chartCnt={nfasChart.chartData.chartCnt}
                chartNm={nfasChart.chartData.chartLineNm}
                stat={nfasChart.chartData.stat}
              />) : '-'
          }
        </td>
      </tr>
    );
  }
}

export default class TrafficTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curPage: 1
    };
  }

  setCurPage = (page) => {
    if (page !== this.state.curPage) {
      const { initRouter } = this.props;

      this.setState({ curPage: page });
      initRouter(page);
    }
  };

  getRows = (rList, ifList) => {
    const arr = [];
    for (let i = 0, len = rList.length; i < len; i++) {
      if (ifList && ifList[rList[i].routerNo] && ifList[rList[i].routerNo].res) {
        if (Object.keys(ifList[rList[i].routerNo].res).length === 0) {
          arr.push({
            hostNm: rList[i].hostNm,
            routerNo: rList[i].routerNo,
            ifNo: -1
          });
        } else {
          for (const key in ifList[rList[i].routerNo].res) {
            arr.push({
              hostNm: rList[i].hostNm,
              routerNo: rList[i].routerNo,
              ifNo: key,
              ifNm: ifList[rList[i].routerNo].res[key]
            });
          }
        }
      }
    }
    return arr;
  };

  render() {
    const { curPage } = this.state;
    const { routerList, ifList, fetchResultStatus } = this.props;
    const rList = routerList && routerList[curPage] ?
      routerList[curPage].res || [] : [];
    const totalCnt = routerList ? Math.ceil(routerList.total / 6) : 0;
    const isLoading = routerList && routerList[curPage] && ifList ?
      routerList[curPage].isFetching || ifList.isFetching : false;
    const rows = this.getRows(rList, ifList);

    return (
      <div>
        <table className="table table-content table-hover margin bottom">
          <thead>
            <tr>
              <th className="text-center router-width">Router</th>
              <th className="text-center if-width">Interface</th>
              <th className="text-center nms-width">Traffic in NMS[Gbps]</th>
              <th className="text-center nfas-width">Traffic in NFAS[Gbps]</th>
            </tr>
          </thead>
          {
            isLoading ?
              (<tbody>
                <tr className="table-loading">
                  <td colSpan={4}>
                    <div className="spinner">
                      <i className="fa fa-spinner" />&nbsp;loading
                    </div>
                  </td>
                </tr>
              </tbody>) :
              (<tbody>
                {
                  rows.map((item, idx) =>
                    (<TrafficTableRow
                      key={idx}
                      rowData={item}
                      nmsChart={fetchResultStatus[`nms_${item.routerNo}_${item.ifNo}`]}
                      nfasChart={fetchResultStatus[`${item.routerNo}_${item.ifNo}`]}
                    />))
                }
              </tbody>)
          }
        </table>
        <Pagination
          totalCnt={totalCnt}
          curPage={curPage}
          setCurPage={this.setCurPage}
        />
      </div>
    );
  }
}
