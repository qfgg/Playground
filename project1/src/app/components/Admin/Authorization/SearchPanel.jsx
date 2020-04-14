import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import DeptTree from './DeptTree';
import Dropdown from '../../Common/Dropdown';
import { DROP_TYPE } from '../../../constants/Admin/Author/AuthorTypes';


export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      curTarget: {
        text: 'Emp Name',
        value: 'emp'
      },
      keyword: '',
      isFocused: '0',
      saveCache: null
    };
  }

  setFocus = (id) => {
    this.setState({
      isFocused: id
    });
  };

  setSaveCache = (arr) => {
    this.setState({
      saveCache: arr
    });
  };

  setTarget = (item) => {
    const { curTarget } = this.state;
    if (curTarget.value !== item.value) {
      this.setState({
        curTarget: item
      });
    }
  };

  handleChange = (evt) => {
    this.setState({
      keyword: evt.target.value
    });
  };

  onEnter = (evt) => {
    if (evt.charCode === 13) {
      const { keyword, curTarget } = this.state;
      const { searchDept, searchEmp, clearSearch } = this.props;
      if (keyword === '') {
        clearSearch();
        return;
      }
      if (curTarget.value === 'emp') {
        searchEmp(keyword.trim());
      } else {
        searchDept(keyword.trim());
      }
    }
  };

  render() {
    const { isOpen, curTarget, keyword, isFocused, saveCache } = this.state;
    const {
      deptList,
      empList,
      fetchEmp,
      fetchDept,
      addSelected,
      searchDept,
      searchEmp,
      searchDeptStatus,
      searchEmpStatus,
      clearSearch
    } = this.props;
    const searchList = (searchDeptStatus || {}).res || (searchEmpStatus || {}).res;
    const isSearching = (searchDeptStatus || {}).isFetching || (searchEmpStatus || {}).isFetching;

    return (
      <div className="search-panel">
        <div className="search-bar">
          <Dropdown
            isOpen={isOpen}
            curSelect={curTarget.text}
          >
            {
              DROP_TYPE.map((item, idx) =>
                (<li
                  key={idx}
                  className="option"
                  onClick={() => this.setTarget(item)}
                >
                  <a>{item.text}</a>
                </li>))
            }
          </Dropdown>
          <input
            type="text"
            value={keyword}
            onChange={this.handleChange}
            onKeyPress={this.onEnter}
          />
          <button
            className="add-btn"
            onClick={keyword === '' ? clearSearch : curTarget.value === 'emp' ?
              searchEmp.bind(this, keyword) : searchDept.bind(this, keyword)}
          >
            Search
          </button>
        </div>
        <div className="search-board">
          <h3>Organization Chart</h3>
          <div className="org">
            <Scrollbars
              style={{ height: 520 }}
              autoHide
              autoHideTimeout={400}
            >
              {
                isSearching ?
                  (<div className="spinner">
                    <i className="fa fa-spinner" />
                  </div>) : searchList ? searchList.map((item, idx) =>
                  (<DeptTree
                    key={idx}
                    list={[item]}
                    deptList={deptList}
                    empList={empList}
                    fetchEmp={fetchEmp}
                    fetchDept={fetchDept}
                    isFocused={isFocused}
                    setFocus={this.setFocus}
                    setSaveCache={this.setSaveCache}
                  />)) :
                  <DeptTree
                    list={[{
                      departmentCode: 0,
                      departmentName: 'Organization'
                    }]}
                    deptList={deptList}
                    empList={empList}
                    fetchEmp={fetchEmp}
                    fetchDept={fetchDept}
                    isFocused={isFocused}
                    setFocus={this.setFocus}
                    setSaveCache={this.setSaveCache}
                  />
              }
            </Scrollbars>
          </div>
        </div>
        <button className="add-btn sel" onClick={addSelected.bind(this, saveCache)}>
          <i className="fa fa-angle-double-right" />
        </button>
      </div>
    );
  }
}
