import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DetailBoard from '../../components/Detail/Internal';
import * as actions from '../../actions/Internal/Detail';
import { clearChart } from '../../../lib/chartUtils/ChartRequestCommon/action';
import {
  getSuggest,
  searchDetail,
  getRelationNmList,
  getInterfaceByRouter,
  saveTmpFilter
} from '../../middlewares/Internal/Detail';
import Breadcrumbs from '../../components/Detail/Internal/Breadcrumbs';


const mapStateToProps = state => ({
  detailType: state.internalDetailReducer.detailType,
  relationType: state.internalDetailReducer.relationType,
  searchKW: state.internalDetailReducer.searchKW,
  routerSearchKW: state.internalDetailReducer.routerSearchKW,
  suggestResList: state.internalDetailReducer.suggestResList,
  searchResList: state.internalDetailReducer.searchResList,
  relationNmList: state.internalDetailReducer.relationNmList,
  fetchResultStatus: state.chartRequestReducer.fetchResultStatus,
  interfaceList: state.internalDetailReducer.interfaceList,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    getSuggest,
    searchDetail,
    getRelationNmList,
    getInterfaceByRouter,
    clearChart,
    saveTmpFilter
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class InDetail extends Component {
  render() {
    const {
      detailType,
      relationType,
      params,
      actions,
      searchKW,
      routerSearchKW,
      suggestResList,
      searchResList,
      relationNmList,
      fetchResultStatus,
      interfaceList,
    } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <DetailBoard
          detailType={detailType}
          relationType={relationType}
          searchKW={searchKW}
          routerSearchKW={routerSearchKW}
          suggestResList={suggestResList}
          searchResList={searchResList}
          relationNmList={relationNmList}
          interfaceList={interfaceList}
          fetchResultStatus={fetchResultStatus}
          domainName={params.domainName}
          domainId={params.domainId}
          {...actions}
        />
      </div>
    );
  }
}
