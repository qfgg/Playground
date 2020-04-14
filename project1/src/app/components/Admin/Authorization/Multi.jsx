import React, { Component } from 'react';
import classNames from 'classnames';
import SweetAlert from 'sweetalert-react';
import SearchPanel from './SearchPanel';
import SelectedPanel from './SelectedPanel';


export default class Multi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedList: []
    };
  }

  componentWillReceiveProps(nProps) {
    const { isShow } = this.props;
    if (!nProps.isShow && isShow) {
      this.setState({
        selectedList: []
      });
    }
  }

  addSelected = (arr) => {
    const { setAlert } = this.props;
    if (!arr) {
      setAlert(true);
      return;
    }

    const { selectedList } = this.state;
    const adds = [];

    for (let i = 0, len = arr.length; i < len; i++) {
      if (!selectedList.find(item => item.employeeNo === arr[i].employeeNo)) {
        adds.push(arr[i]);
      }
    }
    this.setState({
      selectedList: [...selectedList, ...adds]
    });
  };

  delUser = (employeeNo) => {
    const { selectedList } = this.state;
    this.setState({
      selectedList: selectedList.filter(item => item.employeeNo !== employeeNo)
    });
  };

  render() {
    const {
      isShow,
      closeMulti,
      clickMult,
      deptList,
      empList,
      fetchEmp,
      fetchDept,
      showAlert,
      setAlert,
      saveMulti,
      searchDept,
      searchEmp,
      searchDeptStatus,
      searchEmpStatus,
      clearSearch
    } = this.props;
    const { selectedList } = this.state;
    const multiClass = classNames('multi', { hide: !isShow });

    return (
      <div className={multiClass} onClick={clickMult}>
        <div className="ibox-title heading-clear">
          <h3 className="pull-left">Add Multiple Users</h3>
        </div>
        <div className="ibox-content panel-space">
          <SearchPanel
            deptList={deptList}
            empList={empList}
            fetchEmp={fetchEmp}
            fetchDept={fetchDept}
            addSelected={this.addSelected}
            searchEmp={searchEmp}
            searchDept={searchDept}
            searchDeptStatus={searchDeptStatus}
            searchEmpStatus={searchEmpStatus}
            clearSearch={clearSearch}
          />
          <SelectedPanel list={selectedList} delUser={this.delUser} />
        </div>
        <div className="btngrp">
          <button
            className="add-btn"
            onClick={saveMulti.bind(this, selectedList)}
          >
            Save
          </button>
          <button className="add-btn" onClick={closeMulti}>
            Cancel
          </button>
        </div>
        <SweetAlert
          show={showAlert}
          title="Failed to select users along with sub-departments!"
          type="error"
          onConfirm={() => {
            setAlert(false);
            clickMult();
          }}
        />
      </div>
    );
  }
}
