import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RiseReport from '../../components/Reports/Rise';
import * as actions from '../../actions/Reports/Rise';
import Breadcrumbs from '../../components/Reports/Rise/Breadcrumbs';

const mapStateToProps = state => ({
  period: state.reportsRiseReducer.period,
  domain: state.reportsRiseReducer.domain,
  dataType: state.reportsRiseReducer.dataType,
  curPage: state.reportsRiseReducer.curPage,
  totalCnt: state.reportsRiseReducer.totalCnt,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Rise extends Component {
  render() {
    const {
      period,
      domain,
      dataType,
      actions,
      curPage,
      totalCnt
    } = this.props;
    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <RiseReport
          period={period}
          domain={domain}
          dataType={dataType}
          curPage={curPage}
          totalCnt={totalCnt}
          {...actions}
        />
      </div>
    );
  }
}
