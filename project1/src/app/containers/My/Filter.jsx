import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SetsTable } from '../../components/My/Filtersets';
import {
  getMyFiltersets,
  deleteMyFiltersets,
  updateFilterset
} from '../../middlewares/My/Filtersets';
import * as actions from '../../actions/My/Filtersets';
import { setSearchQuery as setExSearchQuery } from '../../actions/External/Explorer';
import { setSearchQuery as setInSearchQuery } from '../../actions/Internal/Explorer';
import Breadcrumbs from '../../components/My/Filtersets/Breadcrumbs';


const mapStateToProps = state => ({
  curPage: state.myFiltersetsReducer.curPage,
  totalCnt: state.myFiltersetsReducer.totalCnt,
  savedItemList: state.myFiltersetsReducer.savedItemList,
  totalEntries: state.myFiltersetsReducer.totalEntries,
  entriesPerPage: state.myFiltersetsReducer.entriesPerPage,
  editFlag: state.myFiltersetsReducer.editFlag,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    getMyFiltersets,
    deleteMyFiltersets,
    updateFilterset,
    setExSearchQuery,
    setInSearchQuery,
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class MyFilter extends Component {
  render() {
    const {
      savedItemList,
      curPage,
      totalCnt,
      totalEntries,
      entriesPerPage,
      editFlag,
      actions
    } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <SetsTable
          savelist={savedItemList}
          curPage={curPage}
          totalCnt={totalCnt}
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          editFlag={editFlag}
          {...actions}
        />
      </div>
    );
  }
}
