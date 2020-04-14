import React, { Component } from 'react';
import classNames from 'classnames';
import SweetAlert from 'sweetalert-react';
import ASGridCell from './ASGridCell';
import { getStartEndIP } from '../../../helper';


export default class ASGrid extends Component {
  constructor() {
    super();
    this.state = {
      modItem: {
        newItem: {
          asNo: 23576
        }
      },
      showDeleDialog: false,
      checkAdd: false,
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

  handleModText = (item, name, newValue) => {
    let startend;
    if (item) {
      if (!this.state.modItem[item.id] || (this.state.modItem[item.id] &&
        Object.keys(this.state.modItem[item.id]).length === 0)) {
        this.setState(preState => ({
          modItem: {
            ...preState.modItem,
            [item.id]: {
              ...item,
              [name]: newValue
            }
          }
        }));
        if (name === 'subnet') {
          startend = getStartEndIP(newValue);
          this.setState(preState => ({
            modItem: {
              ...preState.modItem,
              [item.id]: {
                ...item,
                subnet: newValue,
                startIp: startend.startIp,
                endIp: startend.endIp,
                bitmask: newValue.split('/')[1]
              }
            }
          }));
        }
      } else {
        this.setState(preState => ({
          modItem: {
            ...preState.modItem,
            [item.id]: {
              ...preState.modItem[item.id],
              [name]: newValue
            }
          }
        }));
        if (name === 'subnet') {
          startend = getStartEndIP(newValue);
          this.setState(preState => ({
            modItem: {
              ...preState.modItem,
              [item.id]: {
                ...preState.modItem[item.id],
                subnet: newValue,
                startIp: startend.startIp,
                endIp: startend.endIp,
                bitmask: newValue.split('/')[1]
              }
            }
          }));
        }
      }
    } else {
      startend = getStartEndIP(newValue);
      this.setState({
        modItem: {
          ...this.state.modItem,
          newItem: {
            ...this.state.modItem.newItem,
            [name]: newValue,
            startIp: startend.startIp,
            endIp: startend.endIp,
            bitmask: newValue.split('/')[1],
            excludedYn: 'N'
          }
        },
      });
    }
  };

  handleSel = (item, asn) => {
    if (item) {
      if (!this.state.modItem[item.id] || (this.state.modItem[item.id] &&
        Object.keys(this.state.modItem[item.id]).length === 0)) {
        this.setState(preState => ({
          modItem: {
            ...preState.modItem,
            [item.id]: {
              ...item,
              asNo: asn
            }
          }
        }));
      } else {
        this.setState(preState => ({
          modItem: {
            ...preState.modItem,
            [item.id]: {
              ...preState.modItem[item.id],
              asNo: asn
            }
          }
        }));
      }
    } else {
      this.setState(preState => ({
        modItem: {
          ...preState.modItem,
          newItem: {
            ...preState.modItem.newItem,
            asNo: asn
          }
        }
      }));
    }
  };

  toggleExcluded = (item) => {
    const { modItem } = this.state;
    if (modItem[item.id]) {
      this.setState({
        modItem: {
          ...modItem,
          [item.id]: {
            ...modItem[item.id],
            excludedYn: modItem[item.id].excludedYn
              === 'Y' ? 'N' : 'Y'
          }
        }
      });
    } else {
      this.setState({
        modItem: {
          ...modItem,
          [item.id]: {
            ...item,
            excludedYn: item.excludedYn === 'Y' ? 'N' : 'Y'
          }
        }
      });
    }
  };

  confirmUpdItem = (modItem, item, idx) => {
    const {
      confirmUpd,
      cancelUpd,
      field,
      curPage,
      entriesPerPage,
      checkAS
    } = this.props;
    let flag = true;
    if (modItem && modItem[item.id]) {
      for (const i in field) {
        if (field[i].required && field[i].attrEdit) {
          flag = this.updatecell[`${field[i].name}_${idx}`].validationAdd();
          if (!flag) break;
        }
      }
      if (flag) {
        this.setState({
          checkAdd: true
        });
        checkAS(modItem[item.id], () => {
          confirmUpd(modItem[item.id], curPage, entriesPerPage);
        });
      }
    } else {
      cancelUpd(item);
    }
  };

  cancelUpd = (item, idx) => {
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
        [item.id]: {},
      }
    });
  };

  onCreateItem = () => {
    const {
      header,
      createItem,
      curPage,
      entriesPerPage,
      checkAS
    } = this.props;
    const { modItem } = this.state;
    let flag = true;
    header.map((itm) => {
      if (itm.isCreate && itm.required) {
        if (!this.cell[itm.value].validationAdd()) {
          flag = false;
        }
      }
    });
    if (flag) {
      this.setState({
        checkAdd: true
      });
      checkAS(modItem.newItem, () => {
        createItem(modItem.newItem, curPage, entriesPerPage, () => {
          this.setState({
            modItem: {
              ...this.state.modItem,
              newItem: {
                asNo: 23576,
                subnet: '',
                startIp: '',
                endIp: '',
                bitmask: '',
              }
            },
          });
        });
      });
      this.clearInput();
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

  clearInput = () => {
    const { header } = this.props;
    header.map((itm) => {
      if (itm.isCreate) {
        this.cell[itm.value].clearAll();
      }
    });
  };

  splitData = (mod, old, source, flag) => {
    let val = null;
    if (mod && mod[source]) {
      val = mod[source];
    } else if (old && old[source]) {
      val = old[source];
    } else if (!mod && !old) {
      const { modItem } = this.state;
      if (modItem.newItem && modItem.newItem.subnet) {
        val = modItem.newItem.subnet;
      }
    }

    if (val === null) {
      return null;
    }

    const startend = getStartEndIP(val);
    return flag === 0 ? startend.startIp : flag === -1 ? startend.endIp :
      val.split('/')[1];
  };

  render() {
    const {
      header,
      field,
      list,
      sortStatus,
      isEditing,
      updateItem,
      entriesPerPage,
      confirmDel,
      isLoading,
      curPage,
      checkStatus,
      clearASCheck
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
              <th />
            </tr>
          </thead>
          {
            isLoading ?
              <tbody>
                <tr className="table-loading">
                  <td colSpan={(header || []).length + 1}>
                    <div className="spinner"><i className="fa fa-spinner" />&nbsp;loading</div>
                  </td>
                </tr>
              </tbody> :
              <tbody>
                {
                  (list || []).map((item, idx) =>
                    (<tr key={idx}>
                      {
                        field.map((itm, i) =>
                          (<ASGridCell
                            key={i}
                            text={item[itm.name] || ''}
                            align={field[i].align}
                            attrEdit={field[i].attrEdit}
                            dropdown={field[i].dropdown}
                            droplist={field[i].droplist}
                            name={itm.name}
                            item={item}
                            ref={c => this.updatecell[`${itm.name}_${idx}`] = c}
                            feildType={itm.feildType}
                            handleModText={this.handleModText}
                            handleSel={this.handleSel}
                            isEditing={
                              isEditing ?
                                isEditing.indexOf(`${item.id}`) !== -1 : ''
                            }
                            isCheck={field[i].isCheck}
                            checked={
                              modItem[item.id] && modItem[item.id].excludedYn
                              !== item.excludedYn ? modItem[item.id].excludedYn
                              === 'Y' : item.excludedYn === 'Y'
                            }
                            onCheck={this.toggleExcluded.bind(this, item)}
                            dataSource={this.splitData(modItem[item.id], item,
                              field[i].dataSource, field[i].dataFlag)}
                          />))
                      }
                      <td className="text-right rowIcons">
                        {
                          (isEditing ? isEditing.indexOf(`${item.id}`) !== -1 : '') ?
                            <span>
                              <span
                                className="cursors"
                                onClick={() => this.confirmUpdItem(modItem, item, idx)}
                              >
                                <i className="fa fa-check" />
                              </span>
                              <span
                                className="cursors"
                                onClick={() => this.cancelUpd(item, idx)}
                              >
                                <i className="fa fa-times" />
                              </span>
                            </span> :
                            <span onClick={() => updateItem(item)} className="cursors">
                              <i className="fa fa-pencil" title="Edit" />
                            </span>
                        }
                        <span onClick={() => this.onshowDeleteDialog(item)} className="cursors">
                          <i className="fa fa-trash-o" title="Remove this item" />
                        </span>
                      </td>
                    </tr>))
                }
              </tbody>
          }
        </table>
        <table className="grid table table-content margin bottom table-inp add_row" style={{ borderTop: '0px' }}>
          <tbody>
            <tr className="inps">
              {
                (header || []).map((itm, i) =>
                  (itm.isCreate || itm.isShow ?
                    (<ASGridCell
                      ref={c => this.cell[itm.value] = c}
                      key={`${itm.value}_${i}`}
                      text=""
                      cusutomstyle={widthStyle[i]}
                      attrEdit={!itm.isShow}
                      name={itm.value}
                      placeholder={itm.text}
                      regRule={itm.regRule}
                      item=""
                      handleModText={this.handleModText}
                      handleSel={this.handleSel}
                      isEditing
                      dropdown={itm.dropdown}
                      droplist={itm.droplist}
                      dataSource={this.splitData(undefined, undefined,
                        field[i].dataSource, field[i].dataFlag, itm.value)}
                    />) : <td key={`${itm.value}_${i}`} style={widthStyle[i]} />))
              }
              <td className="text-right rowIcons">
                <button className="add-btn pull-right" onClick={() => this.onCreateItem()}>Add</button>
              </td>
            </tr>
          </tbody>
        </table>
        <SweetAlert
          show={this.state.showDeleDialog}
          title="Are you sure?"
          type="warning"
          text="You will not be able to recover this Item!"
          confirmButtonText="Yes, remove it!"
          showCancelButton
          onConfirm={() => {
            this.setState({ showDeleDialog: false });
            confirmDel(modItem.deleteItem, curPage, entriesPerPage);
          }}
          onCancel={() => {
            this.setState({ showDeleDialog: false });
          }}
        />
        <SweetAlert
          show={(checkStatus ? checkStatus.isDup : false) && this.state.checkAdd}
          title="Failed!"
          type="warning"
          text="This item exists, try again!"
          confirmButtonText="OK"
          onConfirm={() => {
            clearASCheck();
            this.setState({
              checkAdd: false,
              modItem: {
                newItem: {
                  asNo: 23576,
                  subnet: '',
                  startIp: '',
                  endIp: '',
                  bitmask: '',
                }
              },
            });
            this.clearInput();
          }}
        />
      </div>
    );
  }
}
