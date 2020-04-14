import React, { Component } from 'react';
import SearchTable from './SearchTable';


export default class SearchTableList extends Component {
  render() {
    const {
      tables,
      result,
      trfStatus,
      tablist,
      cntlist,
      curTab,
      getMore
    } = this.props;
    let loading = false;
    for (const key in result) {
      if (result[key].isFetching) {
        loading = true;
      }
    }

    return (
      <div className="search-table-list">
        {
          tables.map((item, idx) =>
            (<SearchTable
              key={idx}
              table={item}
              trfStatus={(trfStatus || {})[tablist[idx].toLowerCase()]}
              tab={tablist[idx]}
              cnt={cntlist[idx]}
              curTab={curTab}
              getMore={getMore}
            />))
        }
        {
          loading ?
            <div className="spinner">
              <i className="fa fa-spinner" />
            </div> : ''
        }
      </div>
    );
  }
}
