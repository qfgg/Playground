import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/Admin/Latency';
import LatencyList from '../../components/Admin/Latency';
import Breadcrumbs from '../../components/Admin/Latency/Breadcrumbs';
import {
  initIdc,
  saveLatency,
} from '../../middlewares/Admin/Latency';


const mapStateToProps = state => ({
  idcList: state.latencyReducer.idcList,
  regionTree: state.latencyReducer.regionTree,
  selLatencies: state.latencyReducer.selLatencies,
  popList: state.latencyReducer.popList,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    initIdc,
    saveLatency,
    ...actions,
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Latency extends Component {
  render() {
    const {
      idcList,
      regionTree,
      selLatencies,
      popList,
      actions,
    } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <LatencyList
          idcList={idcList}
          regionTree={regionTree}
          selLatencies={selLatencies}
          popList={popList}
          {...actions}
        />
      </div>
    );
  }
}
