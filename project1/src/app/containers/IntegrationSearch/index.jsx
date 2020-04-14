import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import SearchResultPanel from './SearchResultPanel';
import * as actions from '../../actions/App/App';
import * as searchActions from '../../../lib/search/action';
import './index.less';


const mapStateToProps = state => ({
  keyword: state.myAppReducer.keyword,
  lastKeyword: state.searchReducer.lastKeyword,
  curTab: state.searchReducer.curTab,
  searchResultStatus: state.searchReducer.searchResultStatus,
  trfStatus: state.searchReducer.trfStatus,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions, ...searchActions }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class IntegrationSearch extends Component {
  render() {
    const {
      keyword,
      lastKeyword,
      curTab,
      searchResultStatus,
      trfStatus,
      actions
    } = this.props;

    return (
      <div className="ibox-content">
        <div className="int-search">
          <SearchBar keyword={keyword} {...actions} />
          <SearchResultPanel
            title="External"
            curTab={curTab.External}
            result={(searchResultStatus || {}).External || {}}
            lastKeyword={lastKeyword}
            trfStatus={(trfStatus || {}).External || {}}
            {...actions}
          />
          <SearchResultPanel
            title="Internal"
            curTab={curTab.Internal}
            result={(searchResultStatus || {}).Internal || {}}
            lastKeyword={lastKeyword}
            trfStatus={(trfStatus || {}).Internal || {}}
            {...actions}
          />
        </div>
      </div>
    );
  }
}
