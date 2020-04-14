import React, { Component } from 'react';
import ASBaseInfo from './AS/BaseInfo';
import InterfaceBaseInfo from './Interface/BaseInfo';
import RouterBaseInfo from './Router/BaseInfo';
import CarrierBaseInfo from './Carrier/BaseInfo';
import ESMBaseInfo from './ESM/BaseInfo';
import LineBaseInfo from './Line/BaseInfo';
import CountryBaseInfo from './Country/BaseInfo';
import PoPBaseInfo from './PoP/BaseInfo';
import IDCBaseInfo from './IDC/BaseInfo';


export default class BaseInfo extends Component {
  render() {
    const { detailType, searchResList } = this.props;
    const res = (searchResList[detailType] || {}).res;

    return detailType === 'AS' ? <ASBaseInfo asSearchRes={res} /> :
           detailType === 'Interface' ? <InterfaceBaseInfo ifSearchRes={res} /> :
           detailType === 'Router' ? <RouterBaseInfo routerSearchRes={res} /> :
           detailType === 'Carrier' ? <CarrierBaseInfo carrSearchRes={res} /> :
           detailType === 'ESM' ? <ESMBaseInfo esmSearchRes={res} /> :
           detailType === 'Line' ? <LineBaseInfo lineSearchRes={res} /> :
           detailType === 'Country' ? <CountryBaseInfo cntSearchRes={res} /> :
           detailType === 'PoP' ? <PoPBaseInfo popSearchRes={res} /> :
           detailType === 'IDC' ? <IDCBaseInfo idcSearchRes={res} /> : <div />;
  }
}
