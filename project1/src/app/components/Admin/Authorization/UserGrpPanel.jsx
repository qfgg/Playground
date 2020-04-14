import React, { Component } from 'react';
import blacklist from 'blacklist';
import { Scrollbars } from 'react-custom-scrollbars';
import EditTable from './EditTable';
import { LHEADER, LFIELD } from '../../../constants/Admin/Author/AuthorTypes';


export default class UserGrpPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: {},
      addingRows: [],
      changed: {}
    };
    this.isClickInput = false;
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    const { initUserGrp, clickRow } = this.props;
    initUserGrp(list => clickRow(list[0].empGrpNo));
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  handleDocumentClick = (evt) => {
    if (this.isClickInput === true) {
      this.isClickInput = false;
    } else {
      if (this.addbtn && !this.addbtn.contains(evt.target) && this.state.isEditing.id) {
        this.setState({
          isEditing: {}
        });
      }
    }
  };

  clickInput = () => {
    if (!this.isClickInput) {
      this.isClickInput = true;
    }
  };

  setEditing = (id, idx) => {
    const { isEditing } = this.state;
    if (id !== isEditing.id || idx !== isEditing.idx) {
      this.setState({
        isEditing: { id, idx }
      });
    }
  };

  addRow = () => {
    const { addingRows } = this.state;
    const len = addingRows.length;
    this.setState({
      addingRows: [
        ...addingRows,
        {
          empGrpNo: -len - 1,
          empGrpNm: '',
          desc: '',
          modifyYn: 'Y'
        }
      ],
      isEditing: { id: -len - 1, idx: 1 }
    });
  };

  delGrp = (id) => {
    const { addingRows } = this.state;
    const { delUserGrp, initUserGrp } = this.props;

    if (id < 0) {
      this.setState({
        addingRows: addingRows.filter(item => item.empGrpNo !== id)
      });
    } else {
      delUserGrp(id, initUserGrp);
      this.setState({
        addingRows: []
      });
    }
  };

  edit = (evt, oldVal, idx) => {
    const { changed } = this.state;

    if (evt.target.value !== oldVal) {
      this.setState({
        changed: {
          ...changed,
          [idx]: evt.target.value
        }
      });
    } else {
      this.setState({
        changed: blacklist(changed, idx.toString())
      });
    }
  };

  enter = (evt) => {
    if (evt.charCode === 13) {
      this.setState({
        isEditing: {}
      });
    }
  };

  clearEdit = () => {
    this.setState({
      addingRows: [],
      changed: {}
    });
  };

  save = () => {
    const { changed } = this.state;
    const { addUserGrp, updateUserGrp, initUserGrp } = this.props;
    let tmpArr;
    let id;
    let idx;
    let payload;
    const result = {};

    for (const key in changed) {
      tmpArr = key.split('_');
      id = tmpArr[0];
      idx = parseInt(tmpArr[1], 10);
      if (!result[id]) {
        result[id] = [];
      }
      result[id][idx - 1] = changed[key];
    }
    for (const key in result) {
      id = parseInt(key, 10);
      if (id < 0) {
        if (result[key][0]) {
          payload = { empGrpNm: result[key][0], modifyYn: 'Y' };
          if (result[key][1]) {
            payload.desc = result[key][1];
          }
          addUserGrp(payload, initUserGrp.bind(this, this.clearEdit));
        }
      } else {
        if (result[key][0]) {
          payload = { empGrpNm: result[key][0] };
        }
        if (result[key][1]) {
          payload = payload ? { ...payload, desc: result[key][1] } :
            { desc: result[key][1] };
        }
        updateUserGrp(id, payload, initUserGrp.bind(this, this.clearEdit));
      }
    }
  };

  render() {
    const {
      userGrpList,
      addGrpStatus,
      updateGrpStatus,
      focusedRow,
      clickRow
    } = this.props;
    const { addingRows, isEditing, changed } = this.state;
    const isSaving = addGrpStatus.isSaving || updateGrpStatus.isUpdating;

    return (
      <div className="user-grp">
        <EditTable
          isHead
          header={LHEADER}
        />
        <Scrollbars
          style={{ height: 540 }}
          autoHide
          autoHideTimeout={400}
        >
          <EditTable
            isBody
            list={[...(userGrpList.res || []), ...addingRows]}
            field={LFIELD}
            isEditing={isEditing}
            idField="empGrpNo"
            onDoubleClick={this.setEditing}
            onInput={this.clickInput}
            onDel={this.delGrp}
            onChange={this.edit}
            onEnter={this.enter}
            onClickRow={clickRow}
            focusedRow={focusedRow}
            changed={changed}
            notop
          />
        </Scrollbars>
        <div className="btngrp">
          <button
            className="add-btn"
            onClick={this.addRow}
            ref={c => this.addbtn = c}
          >
            + Row
          </button>
          <button className="add-btn" onClick={this.save}>
            {
              isSaving ?
                (<div className="spinner">
                  <i className="fa fa-spinner" />
                </div>) : 'Save'
            }
          </button>
        </div>
      </div>
    );
  }
}
