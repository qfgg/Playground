import classNames from 'classnames';
import { browserHistory } from 'react-router';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommonChart from '../../Rechart/Common/CommonChart';
import ChartOption from '../../Rechart/Common/ChartOption';
import downloadPNG from '../../../../lib/svgenie';
import JSONToCSVConvertor from '../../../../lib/JSONToCSV';


export default class DetailChartPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'line',
    };
    this.png = {};
  }

  componentDidMount() {
    this.resizeMainChart();
    window.addEventListener('resize', this.resizeMainChart);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeMainChart);
  }

  resizeMainChart = () => {
    const { setContentHeight, name, relationType } = this.props;
    if (this.png[name]) {
      if (relationType === 'ESM' || relationType === 'Country') {
        setContentHeight(this.png[name].offsetWidth * 2 / 3);
      } else {
        setContentHeight(this.png[name].offsetWidth * 3 / 7);
      }
    }
  };

  setChartType = (type) => {
    this.setState({ type });
  };

  handleDownloadXls = (cvsData, title, itemType) => {
    const data = [];
    const valName = itemType === 'traffic' ? 'Traffic(bps)' :
      itemType === 'flow' ? 'Flow(Flow/s)' :
      itemType === 'packet' ? 'Packet(pps)' : '';
    cvsData.forEach((item) => {
      data.push({
        Dimension: item.name,
        Time: item.time,
        [valName]: item.value,
      });
    });
    JSONToCSVConvertor(data, title, true);
  };

  handleDownloadPNG = (title) => {
    downloadPNG(this.png[title], title, `${title}.png`);
  };

  sendToExplorer = () => {
    const { searchQuery, saveTmpFilter, searchNm } = this.props;

    const filter = {
      type: searchQuery.type,
      requestType: 'detail_relation_all&1d',
      directionType: 'all',
      itemType: searchQuery.itemType,
      period: searchQuery.period,
      aggregation: searchQuery.aggregation,
      interval: searchQuery.interval,
      showDiff: searchQuery.showDiff
    };
    const side = searchQuery.server ? 'server' : searchQuery.user ? 'user' : 'dst';
    const domain = Object.keys(searchQuery[side])[0];
    filter[side] = {
      ...searchQuery[side],
      [domain]: {
        ...searchQuery[side][domain],
        name: [searchNm]
      }
    };
    const payload = {
      fltrsetNm: new Date().getTime().toString(),
      fltrsetTp: searchQuery.type,
      fltrset: JSON.stringify(filter),
      tempYn: 'Y',
      creEmpNo: null,
      creYmdt: null,
      modYmdt: null
    };
    saveTmpFilter(payload, (id) => {
      browserHistory.push(`/${searchQuery.type}/explorer/filter/${id}`);
    });
  };

  render() {
    const { type } = this.state;
    const {
      data,
      name,
      chartCnt,
      chartNm,
      stat,
      cvs,
      chartType,
      displayAll,
      searchQuery,
      relationType,
      contentHeight,
      searchNm
    } = this.props;
    const hasData = relationType === 'ESM' || relationType === 'Country' ?
      JSON.stringify(data) !== '{}' : data && data.length !== 0;
    const itemType = (searchQuery || {}).itemType;

    return (
      <div
        className={classNames({
          'half-panel': !displayAll,
          'total-chart-panel': displayAll,
        })}
      >
        <div className="ibox-title option-relative">
          <h3>{name}</h3>
          {!chartType && (
            hasData ?
              <ChartOption
                setType={this.setChartType}
                downloadXls={() => this.handleDownloadXls(cvs, name, itemType)}
                downloadPNG={() => this.handleDownloadPNG(name)}
                sideType={searchQuery ? searchQuery.type : ''}
                reqType={searchQuery ? `${searchQuery.requestType}&${searchQuery.compareTime}` : ''}
                domainNo={searchQuery ? searchQuery.domainValue : ''}
                domainNm={searchQuery ? searchQuery.domainType : ''}
                fieldType={searchQuery ? searchQuery.fieldType : ''}
                itemType={searchQuery ? searchQuery.itemType : ''}
                periodParam={searchQuery ? searchQuery.period : null}
                aggregation={searchQuery ? searchQuery.aggregation : ''}
                interval={searchQuery ? searchQuery.interval : ''}
                compareTime={searchQuery ? searchQuery.compareTime : ''}
                diff={searchQuery ? searchQuery.showDiff : null}
                direction={name.toLowerCase()}
                sendToExplorer={this.sendToExplorer}
                searchNm={searchNm}
              /> : ''
          )
          }
        </div>
        <div className="ibox-content no-padding withtop" ref={c => this.png[name] = c}>
          {
            hasData ?
              <CommonChart
                data={data}
                type={chartType || type}
                chartCnt={chartCnt}
                chartNm={chartNm}
                stat={stat}
              /> :
              <h2
                className="noData"
                style={{ height: contentHeight, lineHeight: `${contentHeight}px` }}
              >
                No Chart Data!
              </h2>
          }
        </div>
      </div>
    );
  }
}

DetailChartPanel.propTypes = {
  name: PropTypes.string,
  chartNm: PropTypes.object,
  chartCnt: PropTypes.number,
  stat: PropTypes.object,
  chartType: PropTypes.string,
  displayAll: PropTypes.bool,
  searchQuery: PropTypes.object,
};
