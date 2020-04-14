import React, { Component } from 'react';
import classNames from 'classnames';
import SweetAlert from 'sweetalert-react';
import GridCell from './GridCell';


export default class Grid extends Component {
  constructor() {
    super();
    this.state = {
      modItem: {},
      showDeleDialog: false,
      checkAdd: false,
      relateItem: {}
    };
    this.cell = {};
    this.updatecell = {};
  }

  componentWillReceiveProps(nprop) {
    if (nprop.checkStatus && !nprop.checkStatus.isDup && !nprop.checkStatus.isChecking) {
      this.clearInput();
    }
  }

  sortList = (item) => {
    const { sort } = this.props;
    sort(item);
  };

  handleModText = (item, name, newValue, relateItem) => {
    if (item) {
      const { gridId } = this.props;
      if (!this.state.modItem[item[gridId]] || (this.state.modItem[item[gridId]] &&
        Object.keys(this.state.modItem[item[gridId]]).length === 0)) {
        this.setState({
          modItem: {
            ...this.state.modItem,
            [item[gridId]]: { ...item, [name]: newValue }
          },
        });
      } else {
        this.setState(preState => ({
          modItem: {
            ...preState.modItem,
            [item[gridId]]: {
              ...preState.modItem[item[gridId]],
              [name]: newValue
            }
          }
        }));
      }
    } else {
      if (relateItem && relateItem.field) {
        this.setState({
          modItem: {
            ...this.state.modItem,
            newItem: {
              ...this.state.modItem.newItem,
              [name]: newValue,
              [relateItem.field]: relateItem.value
            }
          },
        });
        this.cell[relateItem.field].setModOne(relateItem.value);
      } else {
        this.setState({
          modItem: {
            ...this.state.modItem,
            newItem: {
              ...this.state.modItem.newItem,
              [name]: newValue
            }
          },
        });
      }
    }
  };

  confirmUpdItem = (modItem, item, gridId, idx) => {
    const { confirmUpd, cancelUpd, field, curPage, entriesPerPage, selectedGrp } = this.props;
    let flag = true;
    if (modItem && modItem[item[gridId]] && modItem[item[gridId]][gridId]) {
      for (const i in field) {
        if (field[i].required && field[i].attrEdit) {
          flag = this.updatecell[`${field[i].name}_${idx}`].validationAdd();
          if (!flag) break;
        }
        if (field[i].autoSuggest && field[i].attrEdit) {
          flag = this.updatecell[`${field[i].name}_${idx}`].checkSuggestion();
          if (!flag) break;
        }
      }
      if (flag) {
        confirmUpd(item[gridId], modItem[item[gridId]], curPage, entriesPerPage, selectedGrp);
      }
    } else {
      cancelUpd(item);
    }
  };

  cancelUpd = (item, gridId, idx) => {
    const { cancelUpd, field } = this.props;
    for (const i in field) {
      if (field[i].attrEdit) {
        this.updatecell[`${field[i].name}_${idx}`].clearAll();
      }
    }
    cancelUpd(item);

    this.setState({
      modItem: {
        ...this.state.modItem,
        [item[gridId]]: {},
      }
    });
  };

  onCreateItem = () => {
    const {
      header, createItem, gridId, checkGrpCd, checkChildCd, curPage, entriesPerPage, selectedGrp
    } = this.props;
    let flag = true;
    header.map((itm) => {
      if (itm.isCreate && itm.required) {
        if (!this.cell[itm.value].validationAdd()) {
          flag = false;
        }
      }
      if (itm.isCreate && itm.autoSuggest) {
        if (!this.cell[itm.value].checkSuggestion()) {
          flag = false;
        }
      }
    });
    if (flag) {
      this.setState({
        checkAdd: true
      });
      if (gridId !== 'grpCd' && gridId !== 'cd') {
        createItem(this.state.modItem.newItem, curPage, entriesPerPage);
        this.clearInput();
      } else {
        if (gridId === 'grpCd') {
          checkGrpCd(this.state.modItem.newItem, curPage, entriesPerPage);
        }
        if (gridId === 'cd') {
          checkChildCd({ ...this.state.modItem.newItem, grpCd: selectedGrp },
            curPage, entriesPerPage);
        }
      }
    }
    return flag;
  };

  onshowDeleteDialog = (item) => {
    this.setState({
      showDeleDialog: true,
      modItem: {
        ...this.state.modItem,
        deleteItem: item,
      }
    });
  };

  showSubItem = (gridId, idName) => {
    const { selectGroup, initChildCd, entriesPerPageCd } = this.props;
    if (idName === 'grpCd') {
      selectGroup(gridId);
      initChildCd(1, entriesPerPageCd, gridId);
    }
  }

  clearInput = () => {
    const { header } = this.props;
    header.map((itm) => {
      if (itm.isCreate) {
        this.cell[itm.value].clearAll();
      }
    });
  }

  render() {
    const {
      header,
      field,
      list,
      sortStatus,
      isEditing,
      ifDel,
      updateItem,
      gridId,
      canAdd,
      entriesPerPage,
      confirmDel,
      notHandle,
      isLoading,
      curPage,
      selectedGrp,
      confirmUpd,
      checkStatus,
      excludeRecord,
      toggleExcluded
    } = this.props;
    const { modItem } = this.state;
    const widthStyle = [];

    for (let i = 0, len = field.length; i < len; i += 1) {
      widthStyle[i] = field[i].width ?
        { ...widthStyle[i], width: field[i].width } : { ...widthStyle[i] };
      widthStyle[i] = field[i].minWidth ?
        { ...widthStyle[i], minWidth: field[i].minWidth } : { ...widthStyle[i] };
    }

    return (
      <div>
        <table className="grid table table-content table-hover margin bottom">
          <thead>
            <tr>
              {
                (header || []).map((item, idx) =>
                  (<th
                    key={idx}
                    className={classNames({
                      clicktitle: !item.isNoSort,
                      'text-left': field[idx].align === 'l',
                      'text-right': field[idx].align === 'r',
                      'text-center': !field[idx].align,
                    })}
                    style={widthStyle[idx]}
                    onClick={item.isNoSort ? null : evt => this.sortList(item.value, evt)}
                  >
                    {item.text}
                    {
                      item.isNoSort ? '' :
                        (<span className="activeSort">
                          <i
                            className={classNames('fa', {
                              'fa-unsorted': !sortStatus[item.value],
                              'fa-caret-down': sortStatus[item.value] === -1,
                              'fa-caret-up': sortStatus[item.value] === 1,
                            })}
                          />
                        </span>)
                    }
                  </th>))
              }
              {
                !notHandle ? <th style={{ minWidth: 88 }} /> : null
              }
            </tr>
          </thead>
          {
            isLoading ?
              <tbody>
                <tr className="table-loading">
                  <td colSpan={notHandle ? (header || []).length : (header || []).length + 1}>
                    <div className="spinner"><i className="fa fa-spinner" />&nbsp;loading</div>
                  </td>
                </tr>
              </tbody> :
              <tbody>
                {
                  (list || []).map((item, idx) =>
                    (<tr
                      key={idx}
                      className={classNames({
                        selectedTr: selectedGrp ? selectedGrp === item[gridId] : false
                      })}
                      onClick={() => this.showSubItem(item[gridId], gridId)}
                    >
                      {
                        field.map((itm, i) =>
                          (<GridCell
                            key={i}
                            text={item[itm.name] || ''}
                            align={field[i].align}
                            attrEdit={field[i].attrEdit}
                            regRule={itm.regRule}
                            name={itm.name}
                            item={item}
                            ref={c => this.updatecell[`${itm.name}_${idx}`] = c}
                            autoSuggest={itm.autoSuggest}
                            feildType={itm.feildType}
                            handleModText={this.handleModText}
                            isEditing={isEditing ? isEditing.indexOf(item[gridId]) !== -1 : ''}
                            isDateTime={field[i].isDateTime}
                            isCheck={field[i].isCheck}
                            checked={excludeRecord && item.routerNo ?
                              excludeRecord[item.routerNo] : false}
                            onCheck={toggleExcluded ? toggleExcluded.bind(this, item.routerNo) :
                              null}
                            isDelBtn={field[i].isDelBtn && item.modifyYn === 'Y'}
                          />))
                      }
                      {
                        notHandle ? null :
                        <td className="text-right rowIcons">
                          {
                            (isEditing ? isEditing.indexOf(item[gridId]) !== -1 : '') ?
                              <span>
                                <span
                                  className="cursors"
                                  onClick={() => this.confirmUpdItem(modItem, item, gridId, idx)}
                                >
                                  <i className="fa fa-check" />
                                </span>
                                <span
                                  className="cursors"
                                  onClick={() => this.cancelUpd(item, gridId, idx)}
                                >
                                  <i className="fa fa-times" />
                                </span>
                              </span> :
                              <span onClick={() => updateItem(item)} className="cursors">
                                <i className="fa fa-pencil" title="Edit" />
                              </span>
                          }
                          {
                            ifDel ?
                              <span onClick={() => this.onshowDeleteDialog(item)} className="cursors">
                                <i className="fa fa-trash-o" title="Remove this item" />
                              </span> : ''
                          }
                        </td>
                      }
                    </tr>))
                }
              </tbody>
          }
        </table>
        {
          canAdd ?
            <table className="grid table table-content margin bottom table-inp add_row" style={{ borderTop: '0px' }}>
              <tbody>
                <tr className="inps">
                  {
                    (header || []).map((itm, i) =>
                      (itm.isCreate ?
                        (<GridCell
                          ref={c => this.cell[itm.value] = c}
                          key={`${itm.value}_${i}`}
                          text=""
                          cusutomstyle={widthStyle[i]}
                          attrEdit
                          name={itm.value}
                          placeholder={itm.text}
                          regRule={itm.regRule}
                          item=""
                          handleModText={this.handleModText}
                          isEditing
                          relateField={itm.relateField}
                          autoSuggest={itm.autoSuggest}
                          feildType={itm.feildType}
                        />) : <td key={`${itm.value}_${i}`} style={widthStyle[i]} />))
                  }
                  <td className="text-right rowIcons">
                    <button className="add-btn pull-right" onClick={() => this.onCreateItem()}>Add</button>
                  </td>
                </tr>
              </tbody>
            </table> : null
        }
        <SweetAlert
          show={this.state.showDeleDialog}
          title="Are you sure?"
          type="warning"
          text="You will not be able to recover this Item!"
          confirmButtonText="Yes, remove it!"
          showCancelButton
          onConfirm={() => {
            this.setState({ showDeleDialog: false });
            confirmDel(modItem.deleteItem[gridId], curPage, entriesPerPage, selectedGrp);
          }}
          onCancel={() => {
            this.setState({ showDeleDialog: false });
          }}
        />
        <SweetAlert
          show={(checkStatus ? checkStatus.isDup : false) && this.state.checkAdd}
          title="Existing!"
          type="warning"
          text="This item is existing, do you want to update its name?"
          confirmButtonText="Yes, update it!"
          showCancelButton
          onConfirm={() => {
            this.setState({ checkAdd: false });
            confirmUpd((gridId === 'cd' ? modItem.newItem.cd : selectedGrp),
              modItem.newItem, curPage, entriesPerPage, selectedGrp);
            this.clearInput();
          }}
          onCancel={() => {
            this.setState({ checkAdd: false });
            this.clearInput();
          }}
        />
      </div>
    );
  }
}
