import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MainComponent } from '../components/Main';
import * as navActions from '../actions/App/App';
import * as searchActions from '../../lib/search/action';


const mapStateToProps = state => ({
  firstNav: state.myAppReducer.firstNav,
  secondNav: state.myAppReducer.secondNav,
  fetchResultStatus: state.chartRequestReducer.fetchResultStatus,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...navActions, ...searchActions }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Main extends Component {
  render() {
    const { actions, fetchResultStatus } = this.props;

    return (
      <MainComponent
        {...actions}
        fetchResultStatus={fetchResultStatus}
      />
    );
  }
}
