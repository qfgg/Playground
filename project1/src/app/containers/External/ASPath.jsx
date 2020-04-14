import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ASPathComponent from '../../components/ASPath';
import {
  getSuggest,
  searchPath,
  getRouter,
  getBasic
} from '../../middlewares/External/ASPath';
import * as actions from '../../actions/External/ASPath';
import { clearChart } from '../../../lib/chartUtils/ChartRequestCommon/action';
import Breadcrumbs from '../../components/ASPath/Breadcrumbs';


const mapStateToProps = state => ({
  searchKW: state.externalASPathReducer.searchKW,
  suggestions: state.externalASPathReducer.suggestions,
  searchPathStatus: state.externalASPathReducer.searchPathStatus,
  getRouterStatus: state.externalASPathReducer.getRouterStatus,
  fetchResultStatus: state.chartRequestReducer.fetchResultStatus,
  chart: state.externalASPathReducer.chart,
  basicInfo: state.externalASPathReducer.basicInfo
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    getSuggest,
    searchPath,
    getRouter,
    clearChart,
    getBasic
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class ASPath extends Component {
  render() {
    const {
      period,
      avg,
      dataOption,
      searchKW,
      suggestions,
      searchPathStatus,
      getRouterStatus,
      fetchResultStatus,
      chart,
      basicInfo,
      actions
    } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <ASPathComponent
          period={period}
          avg={avg}
          dataOption={dataOption}
          searchKW={searchKW}
          suggestions={suggestions}
          searchPathStatus={searchPathStatus}
          getRouterStatus={getRouterStatus}
          fetchResultStatus={fetchResultStatus}
          chart={chart}
          basicInfo={basicInfo}
          {...actions}
        />
      </div>
    );
  }
}
