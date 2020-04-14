import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VSplitter from '../../Rechart/Common/VSplitter';
import { isEmptyObj } from '../../../helper';
import DetailChartPanel from './DetailChartPanel';


export default class ChartGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCombine: false,
      contentHeight: 0
    };
    this.mounted = false;
  }

  componentWillReceiveProps(nextProp) {
    const { detailType, relationType } = this.props;
    if (nextProp.detailType !== detailType || nextProp.relationType !== relationType) {
      this.setState({ showCombine: false });
    }
  }

  setContentHeight = (height) => {
    const { relationType } = this.props;
    if (relationType === 'ESM' || relationType === 'Country') {
      this.setState({
        contentHeight: height - 8,
      });
    } else {
      this.setState({
        contentHeight: height + 30,
      });
    }
  }

  showCombine = () => {
    this.setState({
      showCombine: true,
    });
  };

  closeCombine = () => {
    this.setState({
      showCombine: false,
    });
  };

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  handleDocumentClick = (evt) => {
    if (this.mounted && this.state.showCombine && this.pop && findDOMNode(this.pop) &&
      !findDOMNode(this.pop).contains(evt.target) && findDOMNode(this.popbtn).children[1] &&
      !findDOMNode(this.popbtn).children[1].contains(evt.target)) {
      this.closeCombine();
    }
  };

  renderSpinner = isFetchingChart =>
    (isFetchingChart ? (
      <div className="chart-wrap ibox-content withtop">
        <div className="spinner">
          <i className="fa fa-spinner" />
        </div>
      </div>
    ) : '');

  render() {
    const {
      data,
      tableData,
      relationType,
      chartType,
      isFetchingChart,
      searchQuery,
      saveTmpFilter,
      searchNm
    } = this.props;
    const { contentHeight } = this.state;

    let dataIn;
    let dataOut;
    let dataTotal;
    let cvsIn;
    let cvsOut;
    let cvsTotal;
    if (!isEmptyObj(data)) {
      if (relationType === 'All') {
        dataIn = data.in ? data.in.in : {};
        dataOut = data.out ? data.out.out : {};
        dataTotal = data.total ? data.total.total : {};
        cvsIn = tableData.in ? tableData.in.in : {};
        cvsOut = tableData.out ? tableData.out.out : {};
        cvsTotal = tableData.total ? tableData.total.total : {};
      } else {
        dataIn = data.in || {};
        dataOut = data.out || {};
        dataTotal = data.total || {};
        cvsIn = tableData.in || {};
        cvsOut = tableData.out || {};
        cvsTotal = tableData.total || {};
      }
    }

    return (
      <div>
        {
          isEmptyObj(data) || isFetchingChart ? this.renderSpinner(isFetchingChart) : (
            <div className="chart-wrap ibox-content withtop">
              <DetailChartPanel
                name="In"
                data={relationType === 'ESM' || relationType === 'Country' ? dataIn : dataIn.data}
                cvs={cvsIn}
                chartCnt={dataIn.chartCnt}
                chartNm={dataIn.chartLineNm}
                stat={dataIn.stat}
                chartType={chartType}
                searchQuery={searchQuery}
                relationType={relationType}
                setContentHeight={this.setContentHeight}
                contentHeight={contentHeight}
                saveTmpFilter={saveTmpFilter}
                searchNm={searchNm}
              />
              <DetailChartPanel
                name="Out"
                data={relationType === 'ESM' || relationType === 'Country' ? dataOut : dataOut.data}
                cvs={cvsOut}
                chartCnt={dataOut.chartCnt}
                chartNm={dataOut.chartLineNm}
                stat={dataOut.stat}
                chartType={chartType}
                searchQuery={searchQuery}
                relationType={relationType}
                setContentHeight={this.setContentHeight}
                contentHeight={contentHeight}
                saveTmpFilter={saveTmpFilter}
                searchNm={searchNm}
              />
              <VSplitter onShowCombine={this.showCombine} ref={c => this.popbtn = c} />
              <div className={classNames('total-panel', { visible: this.state.showCombine })}>
                <DetailChartPanel
                  name="Total"
                  data={relationType === 'ESM' || relationType === 'Country' ? dataTotal : dataTotal.data}
                  cvs={cvsTotal}
                  chartCnt={dataTotal.chartCnt}
                  chartNm={dataTotal.chartLineNm}
                  stat={dataTotal.stat}
                  chartType={chartType}
                  searchQuery={searchQuery}
                  displayAll
                  ref={c => this.pop = c}
                  relationType={relationType}
                  setContentHeight={this.setContentHeight}
                  contentHeight={contentHeight}
                  saveTmpFilter={saveTmpFilter}
                  searchNm={searchNm}
                />
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

ChartGroup.propTypes = {
  detailType: PropTypes.string,
  relationType: PropTypes.string,
  chartType: PropTypes.string,
  isFetchingChart: PropTypes.bool,
  searchQuery: PropTypes.object,
};

