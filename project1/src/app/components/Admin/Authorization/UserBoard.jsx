import React, { Component } from 'react';
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';
import EditTable from './EditTable';
import Multi from './Multi';
import { RHEADER, RFIELD } from '../../../constants/Admin/Author/AuthorTypes';
import { BASE_URL, SHARE_SUGGEST_URL } from '../../../constants/Url';


export default class UserBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: {},
      addingRows: [],
      autoList: [],
      keyword: '',
      changed: {},
      isShowMulti: false,
      showAlert: false
    };
    this.isClickAuto = false;
    this.isClickMult = false;
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  handleDocumentClick = (evt) => {
    if (this.isClickAuto === true) {
      this.isClickAuto = false;
    } else {
      if (this.addbtn && !this.addbtn.contains(evt.target) && this.state.isEditing.id) {
        this.setState({
          isEditing: {},
          keyword: ''
        });
      }
    }
    if (this.isClickMult === true) {
      this.isClickMult = false;
    } else {
      if (this.multbtn && !this.multbtn.contains(evt.target)) {
        this.setMulti(false);
      }
    }
  };

  componentWillReceiveProps(nProps) {
    const { focusedRow } = this.props;
    if (focusedRow !== nProps.focusedRow) {
      this.setState({
        addingRows: []
      });
    }
  }

  componentDidUpdate(preProps, preState) {
    const { isShowMulti } = this.state;
    const { initDept, fetchEmp } = this.props;
    if (isShowMulti && !preState.isShowMulti) {
      fetchEmp('0');
      initDept();
    }
  }

  setAlert = (isShow) => {
    if (isShow !== this.state.showAlert) {
      this.setState({
        showAlert: isShow
      });
    }
  };

  setMulti = (isShow) => {
    if ((isShow || !this.state.showAlert) && isShow !== this.state.isShowMulti) {
      this.setState({
        isShowMulti: isShow
      });
    }
  };

  clickAuto = () => {
    if (!this.isClickAuto) {
      this.isClickAuto = true;
    }
  };

  clickMult = () => {
    if (!this.isClickMult) {
      this.isClickMult = true;
    }
  };

  addRow = () => {
    const { addingRows } = this.state;
    const len = addingRows.length;
    this.setState({
      addingRows: [
        ...addingRows,
        {
          employeeNo: -len - 1,
          employeeName: '',
          departmentName: '',
        }
      ],
      isEditing: {
        id: -len - 1,
        idx: 1,
        auto: true
      }
    });
  };

  setEditing = (id, idx) => {
    const { isEditing } = this.state;
    if (id !== isEditing.id || idx !== isEditing.idx) {
      this.setState({
        isEditing: { id, idx, auto: true }
      });
    }
  };

  delUser = (id) => {
    const { addingRows } = this.state;
    const newAdding = [];
    let isTmp = false;

    for (let i = 0, len = addingRows.length; i < len; i++) {
      if (addingRows[i].employeeNo !== id) {
        newAdding.push(addingRows[i]);
      } else {
        isTmp = true;
      }
    }

    if (isTmp) {
      this.setState({
        addingRows: newAdding
      });
    } else {
      const { delUser, focusedRow, getGrpEmp } = this.props;

      delUser(focusedRow, id, () => {
        this.setState({
          addingRows: [],
          changed: {}
        });
        getGrpEmp(focusedRow);
      });
    }
  };

  getSuggestionValue = suggestion => suggestion.employeeName;

  renderSuggestion = suggestion => `${suggestion.employeeName} - ${suggestion.departmentName}`;

  onChange = (event, { newValue }) => {
    if (this.suggestion && this.suggestion.employeeName !== newValue) {
      this.suggestion = undefined;
    }
    this.setState({
      keyword: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const val = value ? value.trim() : value;
    if (val) {
      axios.get(`${BASE_URL}${SHARE_SUGGEST_URL.Employee[0]}${val}${SHARE_SUGGEST_URL.Employee[1]}${val}${SHARE_SUGGEST_URL.Employee[2]}${val}`)
      .then((res) => {
        this.setState({
          autoList: res && res.data ? res.data : []
        });
      });
    }
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      autoList: []
    });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    const { changed, addingRows, isEditing } = this.state;
    const { userList } = this.props;
    const curList = [...(userList.res || []), ...addingRows];
    if (curList.find(item => item.employeeNo === suggestion.employeeNo)) {
      return;
    }

    this.setState({
      changed: {
        ...changed,
        [`${suggestion.employeeNo}_${1}`]: suggestion.employeeName,
        [`${suggestion.employeeNo}_${2}`]: suggestion.departmentName,
        [`${suggestion.employeeNo}_${3}`]: suggestion.employeeNo
      },
      addingRows: addingRows.map(item => item.employeeNo === isEditing.id ?
        suggestion : item),
      isEditing: {
        ...isEditing,
        id: suggestion.employeeNo
      },
      keyword: ''
    });
  };

  shouldRenderSuggestions = value => value.trim().length > 1;

  save = () => {
    const { addingRows } = this.state;
    const { focusedRow, addUser, getGrpEmp, userList } = this.props;
    const payload = addingRows
      .filter(item =>
        (!userList || !userList.res || userList.res.length === 0 ||
        !userList.res.find(i => i.employeeNo === item.employeeNo)) &&
        (typeof item.employeeNo !== 'number' || item.employeeNo > 0));
    if (payload && payload.length > 0) {
      addUser(focusedRow, payload, () => {
        this.setState({
          addingRows: [],
          changed: {}
        });
        getGrpEmp(focusedRow);
      });
    }
  };

  saveMulti = (arr) => {
    const { addingRows } = this.state;
    const { userList } = this.props;
    const curList = [...(userList.res || []), ...addingRows];

    const newArr = arr
      .filter(item => !curList.find(i => i.employeeNo === item.employeeNo));

    this.setState({
      addingRows: [
        ...addingRows,
        ...newArr
      ],
      isShowMulti: false
    });
  };

  render() {
    const {
      isEditing,
      addingRows,
      keyword,
      autoList,
      changed,
      isShowMulti,
      showAlert
    } = this.state;
    const {
      userList,
      addUserStatus,
      deptList,
      empList,
      fetchEmp,
      fetchDept,
      searchDept,
      searchEmp,
      searchDeptStatus,
      searchEmpStatus,
      clearSearch
    } = this.props;
    const autoProps = {
      value: keyword,
      onChange: this.onChange,
      onClick: this.clickAuto
    };

    return (
      <div className="user-board">
        <EditTable
          isHead
          header={RHEADER}
        />
        <Scrollbars
          style={{ height: 500 }}
          autoHide
          autoHideTimeout={400}
        >
          <EditTable
            isBody
            list={[...(userList.res || []), ...addingRows]}
            field={RFIELD}
            isEditing={isEditing}
            idField="employeeNo"
            onDel={this.delUser}
            changed={changed}
            autoProps={autoProps}
            autoList={autoList}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            onSuggestionSelected={this.onSuggestionSelected}
            shouldRenderSuggestions={this.shouldRenderSuggestions}
            editable={addingRows.map(item => item.employeeName)}
            onDoubleClick={this.setEditing}
            allDel
            isInitiating={userList && userList.isFetching}
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
          <button
            className="add-btn"
            onClick={this.setMulti.bind(this, true)}
            ref={c => this.multbtn = c}
          >
            Multi
          </button>
          <button className="add-btn" onClick={this.save}>
            {
              addUserStatus.isSaving ?
                (<div className="spinner">
                  <i className="fa fa-spinner" />
                </div>) : 'Save'
            }
          </button>
        </div>
        <Multi
          isShow={isShowMulti}
          showAlert={showAlert}
          setAlert={this.setAlert}
          closeMulti={this.setMulti.bind(this, false)}
          clickMult={this.clickMult}
          deptList={deptList}
          empList={empList}
          fetchEmp={fetchEmp}
          fetchDept={fetchDept}
          saveMulti={this.saveMulti}
          searchEmp={searchEmp}
          searchDept={searchDept}
          searchDeptStatus={searchDeptStatus}
          searchEmpStatus={searchEmpStatus}
          clearSearch={clearSearch}
        />
      </div>
    );
  }
}
