import React, { Component } from 'react';
import moment from 'moment';
import { flowDataFormatter, ignoreSeconds } from '../../../helper';
import chartUtils from '../../../../lib/chartUtils';
import { BASE_URL, CHARTS_URL } from '../../../constants/Url';


export default class DataSummary extends Component {
  DataSummaryQuery = (side, period, periodTp, aggregation, interval) => {
    const query = {
      type: side,
      requestType: 'dashboard_table',
      fieldTopLimit: 0,
      directionType: 'all',
      itemType: 'all',
      period: {
        start: ignoreSeconds(moment().subtract(period, periodTp)),
        end: ignoreSeconds(moment())
      },
      aggregation,
      interval,
      page: 0,
      size: 0,
      showDiff: false,
    };
    return query;
  };

  componentDidMount() {
    const { side } = this.props;
    const lastQuery = this.DataSummaryQuery(side, 5, 'minutes', 'avg', '1m');
    const MaxQuery = this.DataSummaryQuery(side, 24, 'hours', 'max', '1d');
    const url = `${BASE_URL}${CHARTS_URL}`;
    chartUtils.chartFetcher(lastQuery, url, `${side.slice(0, 2)}LastStatus`);
    chartUtils.chartFetcher(MaxQuery, url, `${side.slice(0, 2)}MaxStatus`);
  }

  render() {
    const { side, lastStatusData, maxStatusData, title } = this.props;
    const keys = title.map(item => item.toLowerCase());
    const lastData = lastStatusData || {};
    const maxData = maxStatusData || {};

    return (
      <div className="data-summary">
        <table className="wrap">
          <tbody>
            <tr>
              {
                keys.map((item, idx) =>
                  (<td key={idx} className="wraptd">
                    <div className="data-item">
                      <span className="title">{item}</span>
                      <div className="inner-wrap">
                        <table>
                          <tbody>
                            {
                              side === 'external' ?
                                <tr>
                                  <td className="text-right">In</td>
                                  <td className="text-right bold-large">
                                    {
                                      lastData[keys[idx]] ? (lastData[keys[idx]].in ?
                                        <span className="text-success">{flowDataFormatter(lastData[keys[idx]].in.stat.v1.last)}</span> : '-') : '-'
                                    }
                                    {' '}
                                    ({
                                      maxData[keys[idx]] ? (maxData[keys[idx]].in ?
                                        <span className="text-danger"><small>{flowDataFormatter(maxData[keys[idx]].in.stat.v1.max)}</small></span> : '-') : '-'
                                    })
                                  </td>
                                </tr> : <tr />
                            }
                            {
                              side === 'external' ?
                                <tr>
                                  <td className="text-right">Out</td>
                                  <td className="text-right bold-large">
                                    {
                                      lastData[keys[idx]] ? (lastData[keys[idx]].out ?
                                        <span className="text-success">{flowDataFormatter(lastData[keys[idx]].out.stat.v1.last)}</span> : '-') : '-'
                                    }
                                    {' '}
                                    ({
                                      maxData[keys[idx]] ? (maxData[keys[idx]].out ?
                                        <span className="text-danger"><small>{flowDataFormatter(maxData[keys[idx]].out.stat.v1.max)}</small></span> : '-') : '-'
                                    })
                                  </td>
                                </tr> : <tr />
                            }
                            <tr>
                              <td className="text-right">Total</td>
                              <td className="text-right bold-large">
                                {
                                  lastData[keys[idx]] ? (lastData[keys[idx]].total ?
                                    <span className="text-success">{flowDataFormatter(lastData[keys[idx]].total.stat.v1.last)}</span> : '-') : '-'
                                }
                                {' '}
                                ({
                                  maxData[keys[idx]] ? (maxData[keys[idx]].total ?
                                    <span className="text-danger"><small>{flowDataFormatter(maxData[keys[idx]].total.stat.v1.max)}</small></span> : '-') : '-'
                                })
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </td>))
              }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
