import React, { Component } from 'react';
import SetsTableRow from './SetsTableRow';
import Pagination from '../../Pagination';
import './index.less';
import SetEntries from '../../Common/SetEntries';


export class SetsTable extends Component {
  componentDidMount() {
    const { getMyFiltersets, entriesPerPage } = this.props;
    getMyFiltersets(1, entriesPerPage);
  }

  setCurPage = (page) => {
    const { setCurPage, getMyFiltersets, entriesPerPage } = this.props;
    setCurPage(page);
    getMyFiltersets(page, entriesPerPage);
  };

  render() {
    const {
      savelist,
      getMyFiltersets,
      deleteMyFiltersets,
      curPage,
      totalCnt,
      totalEntries,
      entriesPerPage,
      setEntriesPerPage,
      setCurPage,
      editFlag,
      updateFilterset,
      toggleEditFlag,
      setExSearchQuery,
      setInSearchQuery,
    } = this.props;
    const { res } = savelist;
    const resList = res && res.length > 0 ? res : [];

    return (
      <div>
        <SetEntries
          totalEntries={totalEntries}
          setEntriesPerPage={setEntriesPerPage}
          refreshList={getMyFiltersets}
          setCurPage={setCurPage}
          curPage={curPage}
        />
        <div className="set">
          <table className="table table-hover table-custom">
            <thead>
              <tr>
                <th className="text-center no-width">No.</th>
                <th className="text-center perspective-width">Perspective</th>
                <th className="text-left filtername-width">Filterset Name</th>
                <th className="text-center added-width">Added</th>
                <th className="text-center button-width">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                resList.map((item, idx) =>
                (
                  <SetsTableRow
                    key={idx}
                    saveitem={item}
                    deleteMyFiltersets={deleteMyFiltersets}
                    entriesPerPage={entriesPerPage}
                    editFlag={editFlag[item.fltrsetNo]}
                    updateName={updateFilterset}
                    toggleEditFlag={() => toggleEditFlag(item.fltrsetNo)}
                    curPage={curPage}
                    setExSearchQuery={setExSearchQuery}
                    setInSearchQuery={setInSearchQuery}
                  />
                ))
              }
            </tbody>
          </table>
        </div>
        <Pagination
          totalCnt={totalCnt}
          curPage={curPage}
          setCurPage={this.setCurPage}
        />
      </div>
    );
  }
}
