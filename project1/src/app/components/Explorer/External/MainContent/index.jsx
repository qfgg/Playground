import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import SweetAlert from 'sweetalert-react';
import VSplitter from '../../../Rechart/Common/VSplitter';
import CombineChartPopup from '../../../Rechart/Common/CombineChartPopup';
import ChartPanel from '../../Common/ChartPanel';
import Analyze from './Analyze';
import './index.less';


export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCombine: false,
      showAlertNoData: false,
      mainChartHeight: 0,
      showAnalysis: false
    };
    this.isClickChart = false;
    this.isDownloadXls = false;
    this.vSplitter = {};
    this.mounted = false;
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    this.mounted = true;

    const { setType, setNo, getAnaRouters } = this.props;

    if (setType === 'analysis' && setNo) {
      getAnaRouters();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  componentWillReceiveProps(nProps) {
    const { fetchResultStatus, fetchExplorerStatus, fetchResult, getJobStatus } = this.props;
    if (this.mounted && (fetchExplorerStatus &&
      fetchExplorerStatus.isFetching &&
      nProps.fetchExplorerStatus &&
      !nProps.fetchExplorerStatus.isFetching &&
      nProps.fetchExplorerStatus.res &&
      nProps.fetchExplorerStatus.res.charts &&
      Object.keys(nProps.fetchExplorerStatus.res.charts).length === 0) ||
      (fetchResultStatus &&
      fetchResultStatus.exExplorer &&
      fetchResultStatus.exExplorer.isFetching &&
      nProps.fetchResultStatus &&
      nProps.fetchResultStatus.exExplorer &&
      !nProps.fetchResultStatus.exExplorer.isFetching &&
      nProps.fetchResultStatus.exExplorer.res &&
      nProps.fetchResultStatus.exExplorer.res.data.charts &&
      Object.keys(nProps.fetchResultStatus.exExplorer.res.data.charts).length === 0)) {
      this.setState({
        showAlertNoData: true,
      });
    }
    if (!getJobStatus.res && nProps.getJobStatus.res && nProps.getJobStatus.res.status === 'completed') {
      if (nProps.setType === 'job' && nProps.setNo) {
        fetchResult(nProps.setNo);
      }
      if (nProps.setType === 'analysis' && nProps.setNo) {
        this.setState({
          showAnalysis: true
        });
      } else if (this.state.showAnalysis === true) {
        this.setState({
          showAnalysis: false
        });
      }
    }
  }

  setClickChartFlag = () => {
    this.isClickChart = true;
  };

  setDownloadFlag = () => {
    this.isDownloadXls = true;
  };

  handleDocumentClick = (evt) => {
    if (this.state.showCombine && this.vSplitter && !this.isClickChart &&
      !this.isDownloadXls && ReactDOM.findDOMNode(this.vSplitter).children[1] &&
      !ReactDOM.findDOMNode(this.vSplitter).children[1].contains(evt.target)) {
      this.closeCombine();
    } else { // if clicking chart, block closing and reset flag
      this.isClickChart = false;
      this.isDownloadXls = false;
    }
  };

  openCombine = () => {
    this.setState({
      showCombine: true,
    });
  };

  closeCombine = () => {
    this.setState({
      showCombine: false,
    });
  };

  setMainChartHeight = (height) => {
    this.setState({
      mainChartHeight: height,
    });
  }

  render() {
    const {
      fetchExplorerStatus,
      fetchResultStatus,
      splitStatus,
      toggleSplit,
      isShowFilter,
      searchQuery,
      hasChartData,
      chartsInit,
      data,
      table,
      isSplit,
      splitList,
      setType,
      setNo,
      anaRouters,
      ana,
      getAna,
      selectedItemList
    } = this.props;

    const { showCombine, showAlertNoData, showAnalysis } = this.state;
    const isLoading = fetchExplorerStatus.isFetching ||
      (fetchResultStatus.exExplorer && fetchResultStatus.exExplorer.isFetching);
    const mainClass = classNames('ex-main-content', {
      'max-main': !isShowFilter,
    });

    return (
      <div className={mainClass}>
        <div className="ibox-content main-bg">
          {
            setType === 'analysis' && showAnalysis ? (
              <Analyze
                anaRouters={anaRouters}
                ana={ana}
                getAna={getAna}
                jobNo={setNo}
                filterRouter={selectedItemList.Server_Router || []}
              />
            ) : isLoading ? (
              <div className="spinner">
                <i className="fa fa-spinner" />
              </div>
            ) : hasChartData ? (
              <div className="chart-wrap">
                <ChartPanel
                  title="In"
                  data={(data.datain || {}).data}
                  chartCnt={(data.datain || {}).chartCnt}
                  chartNm={(data.datain || {}).chartLineNm}
                  stat={(data.datain || {}).stat}
                  tableData={table.datain}
                  split={isSplit}
                  splitList={splitList}
                  splitStatus={splitStatus.In || {}}
                  toggleSplit={item => toggleSplit({ type: 'In', item })}
                  charts={chartsInit}
                  searchQuery={searchQuery}
                  setMainChartHeight={this.setMainChartHeight}
                  contentHeight={this.state.mainChartHeight + 36}
                />
                <ChartPanel
                  title="Out"
                  data={(data.dataout || {}).data}
                  chartCnt={(data.dataout || {}).chartCnt}
                  chartNm={(data.dataout || {}).chartLineNm}
                  stat={(data.dataout || {}).stat}
                  tableData={table.dataout}
                  split={isSplit}
                  splitList={splitList}
                  splitStatus={splitStatus.Out || {}}
                  toggleSplit={item => toggleSplit({ type: 'Out', item })}
                  charts={chartsInit}
                  searchQuery={searchQuery}
                  contentHeight={this.state.mainChartHeight + 36}
                />
                <VSplitter
                  onShowCombine={this.openCombine}
                  top={this.state.mainChartHeight / 2 + 6}
                  ref={c => this.vSplitter = c}
                />
                <CombineChartPopup
                  name="Total"
                  data={data.dataall.data}
                  chartCnt={data.dataall.chartCnt}
                  chartNm={data.dataall.chartLineNm}
                  stat={data.dataall.stat}
                  tableData={table.dataall}
                  show={showCombine}
                  setClickChartFlag={this.setClickChartFlag}
                  setDownloadFlag={this.setDownloadFlag}
                  split={isSplit}
                  splitList={splitList}
                  splitStatus={splitStatus.Total || {}}
                  toggleSplit={item => toggleSplit({ type: 'Total', item })}
                  charts={chartsInit}
                  searchQuery={searchQuery}
                />
              </div>
            ) : (
              <SweetAlert
                show={showAlertNoData}
                title="No chart data!"
                type="error"
                onConfirm={() => this.setState({ showAlertNoData: false })}
              />
            )
          }
        </div>
      </div>
    );
  }
}
