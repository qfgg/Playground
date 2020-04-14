import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ItemList from '../../components/My/Item';
import * as actions from '../../actions/My/Item';
import {
  initItem,
  initList,
  searchList,
  saveItem,
  delItem
} from '../../middlewares/My/Item';
import Breadcrumbs from '../../components/My/Item/Breadcrumbs';


const mapStateToProps = state => ({
  initItemList: state.myItemReducer.initItemList,
  initResList: state.myItemReducer.initResList,
  searchResList: state.myItemReducer.searchResList,
  favoredItemList: state.myItemReducer.favoredItemList,
  selectedIfrouter: state.myItemReducer.selectedIfrouter
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions,
    initItem,
    initList,
    searchList,
    saveItem,
    delItem
  }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
export default class MyItem extends Component {
  render() {
    const {
      initItemList,
      favoredItemList,
      initResList,
      searchResList,
      selectedIfrouter,
      actions
    } = this.props;

    return (
      <div className="ibox-content">
        <Breadcrumbs />
        <ItemList
          initItemList={initItemList}
          favoredItemList={favoredItemList}
          initResList={initResList}
          searchResList={searchResList}
          selectedIfrouter={selectedIfrouter}
          {...actions}
        />
      </div>
    );
  }
}
