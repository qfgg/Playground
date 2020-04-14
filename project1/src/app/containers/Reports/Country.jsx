import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CountryReport from '../../components/Reports/CountryReport';
import * as actions from '../../actions/Reports/Country';
import Breadcrumbs from '../../components/Reports/CountryReport/Breadcrumbs';
import {
  initCountry,
  initMonth,
  getCountry
} from '../../middlewares/Reports/Country';


const mapStateToProps = state => ({
  list: state.reportsCountryReducer.list,
  listStatus: state.reportsCountryReducer.listStatus,
  month: state.reportsCountryReducer.month,
  wholeList: state.reportsCountryReducer.wholeList
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    initCountry,
    initMonth,
    getCountry
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Country extends Component {
  render() {
    const { actions, list, listStatus, month, wholeList } = this.props;

    return (
      <div className="ibox-content country">
        <Breadcrumbs />
        <CountryReport
          list={list}
          listStatus={listStatus}
          month={month}
          wholeList={wholeList}
          {...actions}
        />
      </div>
    );
  }
}
