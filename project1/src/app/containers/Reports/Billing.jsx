import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/Reports/Billing';
import {
  initList,
  searchList,
  initItem,
  saveItem,
  delItem,
  findBilling
} from '../../middlewares/Reports/Billing';
import BillingReport from '../../components/Reports/Billing';
import Breadcrumbs from '../../components/Reports/Billing/Breadcrumbs';


const mapStateToProps = state => ({
  period: state.reportsBillingReducer.period,
  area: state.reportsBillingReducer.area,
  initResList: state.reportsBillingReducer.initResList,
  searchResList: state.reportsBillingReducer.searchResList,
  selectedItemList: state.reportsBillingReducer.selectedItemList,
  favoredItemList: state.reportsBillingReducer.favoredItemList,
  billing: state.reportsBillingReducer.billing
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    initList,
    searchList,
    initItem,
    saveItem,
    delItem,
    findBilling
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Billing extends Component {
  render() {
    const {
      period,
      area,
      initResList,
      searchResList,
      selectedItemList,
      favoredItemList,
      billing,
      actions
    } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <BillingReport
          period={period}
          area={area}
          initResList={initResList}
          searchResList={searchResList}
          selectedItemList={selectedItemList}
          favoredItemList={favoredItemList}
          billing={billing}
          {...actions}
        />
      </div>
    );
  }
}
