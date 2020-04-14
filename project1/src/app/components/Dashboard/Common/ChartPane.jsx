import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import classNames from 'classnames';
import CommonChart from '../../Rechart/Common/CommonChart';
import ChartOption from '../../Rechart/Common/ChartOption';
import downloadPNG from '../../../../lib/svgenie';
import JSONToCSVConvertor from '../../../../lib/JSONToCSV';


export default class ChartPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'line',
      chartHeight: 0,
      titleCursor: true
    };
    this.div = [];
  }

  componentDidMount() {
    const { data, contentHeight, setContentHeight } = this.props;
    if (this.div[data.name] && contentHeight === 0) {
      window.addEventListener('resize', this.resizeChartHeight);
    } else if (this.noDataDiv) {
      const initHeight = this.noDataDiv.offsetWidth * 3 / 7 - 3;
      setContentHeight(initHeight);
    }
    if (data.chartTitle === 'UNKNOWN') {
      this.setState({
        titleCursor: false
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeChartHeight);
  }

  resizeChartHeight = () => {
    const { data, setContentHeight } = this.props;
    if (this.div[data.name]) {
      setContentHeight(this.div[data.name].offsetHeight);
    }
  };

  setChartType = (type) => {
    this.setState({ type });
  };

  handleDownloadXls = (tableData, title, itemType) => {
    const data = [];
    const valName = itemType === 'traffic' ? 'Traffic(bps)' :
      itemType === 'flow' ? 'Flow(Flow/s)' :
      itemType === 'packet' ? 'Packet(pps)' : '';
    tableData.forEach((item) => {
      data.push({
        Dimension: item.name,
        Time: item.time,
        [valName]: item.value,
      });
    });
    JSONToCSVConvertor(data, title, true);
  };

  handleDownloadPNG = (title) => {
    downloadPNG(this.div[title], title, `${title}.png`);
  };

  toDetail = () => {
    const { data, detailType, showingDomain } = this.props;
    if (showingDomain === 'if') {
      browserHistory.push(`/${detailType}/detail/interface/${data.domainArr[0].id}`);
    } else {
      if (data.chartTitle === 'UNKNOWN') {
        return;
      }
      browserHistory.push(`/${detailType}/detail/${showingDomain}/${data.domainArr[0].id}`);
    }
  };

  generateUploadQuery = () => {
    const { searchQuery, detailType, data } = this.props;
    let query = {};
    const keyArr = data.domainArr[0].type.split('_');
    const side = keyArr[0] === 'router' ? 'server' : keyArr[0];
    const domain = keyArr[0] === 'router' ? 'router' : keyArr[1];

    query = {
      [side]: {
        [domain]: {
          value: [data.domainArr[0].id],
          name: [data.domainArr[0].name],
          separate: false
        }
      },
      requestType: 'explorer',
      type: detailType,
      directionType: 'all',
      itemType: 'traffic',
      period: {
        start: searchQuery.period.start,
        end: searchQuery.period.end,
      },
      aggregation: searchQuery.aggregation,
      interval: searchQuery.interval,
      showDiff: false,
    };

    return query;
  };

  sendToExplorer = () => {
    const { detailType, saveTmpFilter } = this.props;
    const query = this.generateUploadQuery();
    const payload = {
      fltrsetNm: new Date().getTime().toString(),
      fltrsetTp: detailType,
      fltrset: JSON.stringify(query),
      tempYn: 'Y',
      creEmpNo: null,
      creYmdt: null,
      modYmdt: null
    };
    saveTmpFilter(payload, (id) => {
      browserHistory.push(`/${detailType}/explorer/filter/${id}`);
    });
  };

  render() {
    const {
      data,
      tableData,
      col,
      searchQuery,
      contentHeight,
      domain
    } = this.props;
    const { type, titleCursor } = this.state;
    const chartWrapClass = classNames('chart-wrap', {
      col1: col === 1,
      col2: col === 2,
      col3: col === 3,
    });
    const cursorClass = classNames({ cursorPointer: titleCursor });
    const hasData = data.data.length !== 0;
    const itemType = (searchQuery || {}).itemType;

    return (
      <div className={chartWrapClass} >
        <div className="chart-pane">
          <div className="ibox-title">
            <h4
              onClick={this.toDetail}
              className={cursorClass}
            >
              {
                domain.value === 'as' ?
                  `${data.chartTitle || data.domainArr[0].id} (AS${data.domainArr[0].id})` :
                  data.chartTitle || data.domainArr[0].id
              }
            </h4>
            {
              hasData ?
                <ChartOption
                  setType={this.setChartType}
                  downloadXls={() => this.handleDownloadXls(tableData, data.chartTitle, itemType)}
                  downloadPNG={() => this.handleDownloadPNG(data.chartTitle)}
                  itemType={searchQuery ? searchQuery.itemType : ''}
                  sideType={searchQuery ? searchQuery.type : ''}
                  reqType={searchQuery ? searchQuery.requestType : ''}
                  direction={searchQuery ? searchQuery.directionType : ''}
                  aggregation={searchQuery ? searchQuery.aggregation : ''}
                  interval={searchQuery ? searchQuery.interval : ''}
                  periodParam={searchQuery ? searchQuery.period : null}
                  fieldType={searchQuery ? searchQuery.fieldType : ''}
                  fieldTopLimit={0}
                  sendToExplorer={this.sendToExplorer}
                  searchNm={data.domainArr[0].name}
                  domainNm={domain.value}
                  domainNo={data.domainArr[0].id}
                  hasSideParam
                /> : ''
            }
          </div>
          {
            hasData ?
              <div className="ibox-content" ref={c => this.div[data.chartTitle] = c}>
                <CommonChart
                  data={data.data}
                  type={type}
                  chartCnt={data.chartCnt}
                  chartNm={data.chartLineNm}
                  stat={data.stat}
                  col={col}
                />
              </div> :
              <div
                className="ibox-nodata"
                ref={c => this.noDataDiv = c}
                style={{ height: contentHeight, paddingTop: contentHeight / 2 - 18 }}
              >
                No Chart Data!
              </div>
          }
        </div>
      </div>
    );
  }
}

ChartPane.propTypes = {
  data: PropTypes.object,
  detailType: PropTypes.string,
  col: PropTypes.number,
  searchQuery: PropTypes.object,
};
