import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DetailBoard from '../../components/Detail/External';
import * as actions from '../../actions/External/Detail';
import { clearChart } from '../../../lib/chartUtils/ChartRequestCommon/action';
import {
  getSuggest,
  searchDetail,
  getRelationNmList,
  getInterfaceByRouter,
  saveTmpFilter,
  getLatencyDetail,
  getLatencyChart
} from '../../middlewares/External/Detail';
import Breadcrumbs from '../../components/Detail/External/Breadcrumbs';


const mapStateToProps = state => ({
  detailType: state.externalDetailReducer.detailType,
  relationType: state.externalDetailReducer.relationType,
  searchKW: state.externalDetailReducer.searchKW,
  routerSearchKW: state.externalDetailReducer.routerSearchKW,
  routerSearchID: state.externalDetailReducer.routerSearchID,
  suggestResList: state.externalDetailReducer.suggestResList,
  searchResList: state.externalDetailReducer.searchResList,
  fetchResultStatus: state.chartRequestReducer.fetchResultStatus,
  relationNmList: state.externalDetailReducer.relationNmList,
  interfaceList: state.externalDetailReducer.interfaceList,
  latencyList: state.externalDetailReducer.latencyList,
  latencyChart: state.externalDetailReducer.latencyChart
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    getSuggest,
    searchDetail,
    getRelationNmList,
    getInterfaceByRouter,
    clearChart,
    saveTmpFilter,
    getLatencyDetail,
    getLatencyChart
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class ExDetail extends Component {
  render() {
    const {
      detailType,
      relationType,
      params,
      actions,
      searchKW,
      routerSearchKW,
      routerSearchID,
      suggestResList,
      searchResList,
      fetchResultStatus,
      relationNmList,
      interfaceList,
      latencyList,
      latencyChart
    } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <DetailBoard
          detailType={detailType}
          relationType={relationType}
          searchKW={searchKW}
          domainName={params.domainName}
          domainId={params.domainId}
          routerSearchKW={routerSearchKW}
          routerSearchID={routerSearchID}
          suggestResList={suggestResList}
          searchResList={searchResList}
          fetchResultStatus={fetchResultStatus}
          relationNmList={relationNmList}
          interfaceList={interfaceList}
          latencyList={latencyList}
          latencyChart={latencyChart}
          {...actions}
        />
      </div>
    );
  }
}
