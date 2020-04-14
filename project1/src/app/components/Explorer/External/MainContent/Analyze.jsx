import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import LabelDropdown from '../../../Common/LabelDropdown';
import {
  A_TOP_LIST,
  A_STAT_LIST,
  A_ORDER_LIST,
  ANA_FILED_MAP
} from '../../../../constants/External/Explorer/FilterTypes';
import JSONToCSVConvertor from '../../../../../lib/JSONToCSV';
import { flowDataFormatter } from '../../../../helper';
import './index.less';


export default class Analyze extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: {
        text: '10',
        value: 10
      },
      stat: {
        text: 'Server IP Address',
        value: 'server_ip'
      },
      order: {
        text: 'bytes',
        value: 'bytes'
      },
      firstCol: 'IP Address',
      selectedRouter: props.filterRouter.map(item => item.id),
      requestStat: 'server_ip'
    };
  }

  reset = () => {
    this.setState({
      top: {
        text: '10',
        value: 10
      },
      stat: {
        text: 'Server IP Address',
        value: 'server_ip'
      },
      order: {
        text: 'bytes',
        value: 'bytes'
      },
      firstCol: 'IP Address',
      selectedRouter: []
    });
  };

  run = () => {
    const { getAna, jobNo, anaRouters } = this.props;
    const { selectedRouter, top, stat, order } = this.state;

    if (selectedRouter && selectedRouter.length > 0) {
      this.setState({
        requestStat: stat.value
      });
      getAna(jobNo, {
        routers: selectedRouter.length === (anaRouters.res || []).length ?
          ['*'] : selectedRouter,
        top: parseInt(top.value, 10),
        stat: stat.value,
        orderBy: order.value
      });
    }
  };

  setTop = (item) => {
    this.setState({
      top: item
    });
  };

  setStat = (item) => {
    this.setState({
      stat: item,
      firstCol: item.value === 'server_ip' || item.value === 'user_ip' ?
        'IP Address' : item.value === 'server_asn' || item.value === 'user_asn' ?
        'AS' : item.value === 'server_port' || item.value === 'user_port' ? 'Port' : ''
    });
  };

  setOrder = (item) => {
    this.setState({
      order: item
    });
  };

  selectRouter = (routerNo, excluded) => {
    if (excluded.indexOf(routerNo) === -1) {
      if (this.state.selectedRouter.indexOf(routerNo) === -1) {
        this.setState({
          selectedRouter: [...this.state.selectedRouter, routerNo]
        });
      } else {
        this.setState({
          selectedRouter: this.state.selectedRouter.filter(item => item !== routerNo)
        });
      }
    }
  };

  selectAllRouters = (list) => {
    this.setState({
      selectedRouter: list.map(item => item.routerNo)
    });
  };

  downloadXls = (rawData) => {
    const data = [];
    const { firstCol, requestStat } = this.state;

    rawData.forEach((item) => {
      data.push({
        'Router name': item.routerName,
        [firstCol]: item[ANA_FILED_MAP[requestStat]],
        Flows: item.flows,
        Packets: item.packets,
        Bytes: item.bytes,
        bps: item.bps,
        pps: item.pps,
        bpp: item.bpp
      });
    });
    JSONToCSVConvertor(data, 'analyze_result', true);
  };

  render() {
    const {
      top,
      stat,
      order,
      firstCol,
      selectedRouter,
      requestStat
    } = this.state;
    const { anaRouters, ana, filterRouter } = this.props;

    return (
      <div>
        <div className="router-list">
          <h3>Router</h3>
          <Scrollbars
            style={{ height: 230, border: '1px solid #e7eaec', margin: '5px 0' }}
            autoHide
            autoHideTimeout={400}
          >
            <ul>
              {
                anaRouters.isFetching ? (
                  <div className="spinner">
                    <i className="fa fa-spinner" />
                  </div>
                ) : (anaRouters.res || []).map(item =>
                  (<li
                    key={item.routerNo}
                    onClick={this.selectRouter.bind(this, item.routerNo,
                      filterRouter.map(item => item.id))}
                    className={(selectedRouter || []).indexOf(item.routerNo) !== -1 ?
                      'sel' : ''}
                  >
                    {item.fullName}
                  </li>))
              }
            </ul>
          </Scrollbars>
          <button
            type="button"
            className="btn btn-info btn-xs"
            onClick={this.selectAllRouters.bind(this, anaRouters.res || [])}
          >
            All
          </button>
        </div>
        <div className="drop3">
          <LabelDropdown
            label="Stat"
            list={A_STAT_LIST}
            selected={stat}
            onCheck={this.setStat}
            normal
          />
          <LabelDropdown
            label="order by"
            list={A_ORDER_LIST}
            selected={order}
            onCheck={this.setOrder}
            normal
          />
          <LabelDropdown
            label="Top"
            list={A_TOP_LIST}
            selected={top}
            onCheck={this.setTop}
            normal
          />
        </div>
        <div className="op-btns">
          <button
            type="button"
            className="btn btn-info btn-xs"
            onClick={this.reset}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn-info btn-xs"
            onClick={this.run}
          >
            Run
          </button>
          <button
            type="button"
            className="btn btn-info btn-xs"
            onClick={ana.res && Array.isArray(ana.res) && ana.res.length > 0 ?
              this.downloadXls.bind(this, ana.res) : null}
          >
            Download XLSX
          </button>
        </div>
        <table className="grid table table-content">
          <thead>
            <tr>
              <th>Router name</th>
              <th>{firstCol}</th>
              <th>Flows</th>
              <th>Packets</th>
              <th>Bytes</th>
              <th>bps</th>
              <th>pps</th>
              <th>bpp</th>
            </tr>
          </thead>
          {
            ana.isFetching ?
              (<tbody>
                <tr className="table-loading">
                  <td colSpan={8}>
                    <div className="spinner"><i className="fa fa-spinner" />&nbsp;loading</div>
                  </td>
                </tr>
              </tbody>) : ana.res && Array.isArray(ana.res) && ana.res.length > 0 ?
              (<tbody>
                {
                  ana.res.map((item, idx) =>
                    (<tr key={idx}>
                      <td>{item.routerName}</td>
                      <td>{item[ANA_FILED_MAP[requestStat]]}</td>
                      <td>{flowDataFormatter(item.flows)}</td>
                      <td>{flowDataFormatter(item.packets)}</td>
                      <td>{flowDataFormatter(item.bytes)}</td>
                      <td>{flowDataFormatter(item.bps)}</td>
                      <td>{flowDataFormatter(item.pps)}</td>
                      <td>{flowDataFormatter(item.bpp)}</td>
                    </tr>))
                }
              </tbody>) : null
          }
        </table>
      </div>
    );
  }
}
