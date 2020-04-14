import React, { Component } from 'react';
import classNames from 'classnames';


export default class DeptTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: {
        0: true
      },
      isLoaded: {
        0: true
      }
    };
  }

  toggleTree = (departmentCode) => {
    const { isOpen, isLoaded } = this.state;
    const { fetchEmp, fetchDept } = this.props;
    if (!isLoaded[departmentCode]) {
      fetchEmp(departmentCode);
      fetchDept(departmentCode);
      this.setState({
        isLoaded: {
          ...isLoaded,
          [departmentCode]: true
        }
      });
    }
    this.setState({
      isOpen: {
        ...isOpen,
        [departmentCode]: !isOpen[departmentCode]
      }
    });
  };

  mixList = (empList, deptList, keys) => {
    const list = {};
    for (let i = 0, len = keys.length; i < len; i++) {
      if (empList && empList[keys[i]] && empList[keys[i]].res) {
        list[keys[i]] = {
          res: [...empList[keys[i]].res]
        };
      }
      if (deptList && deptList[keys[i]] && deptList[keys[i]].res) {
        list[keys[i]] = list[keys[i]] && list[keys[i]].res ? {
          res: [...list[keys[i]].res, ...deptList[keys[i]].res]
        } : {
          res: [...deptList[keys[i]].res]
        };
      }
    }
    return { ...deptList, ...list };
  };

  setFocusNode = (item, subList) => {
    const { fetchEmp, setFocus, setSaveCache, isFocused } = this.props;
    const { isLoaded, isOpen } = this.state;

    if (isFocused.toString() === (item.employeeNo || item.departmentCode)) {
      return;
    }

    setFocus(item.employeeNo || item.departmentCode);
    if (item.employeeNo) {
      setSaveCache([item]);
    } else if (item.childCount === 0) {
      if (isLoaded[item.departmentCode]) {
        setSaveCache([...subList.res]);
      } else {
        fetchEmp(item.departmentCode, (list) => {
          setSaveCache([...list]);
          this.setState({
            isOpen: {
              ...isOpen,
              [item.departmentCode]: true
            }
          });
        });
        this.setState({
          isLoaded: {
            ...isLoaded,
            [item.departmentCode]: true
          }
        });
      }
    } else {
      if (!isLoaded[item.departmentCode]) {
        this.toggleTree(item.departmentCode);
      }
      setSaveCache(null);
    }
  };

  render() {
    const { isOpen } = this.state;
    const {
      list,
      deptList,
      empList,
      treeClass,
      fetchEmp,
      fetchDept,
      isFocused,
      setFocus,
      setSaveCache
    } = this.props;
    const subList = this.mixList(empList, deptList, list
      .filter(item => item.employeeNo === undefined)
      .map(item => item.departmentCode));

    return (
      <ul className={treeClass}>
        {
          list.map((item, idx) =>
            (<li
              key={idx}
              className={classNames('tree-node', {
                open: item.employeeNo === undefined && isOpen[item.departmentCode]
              })}
            >
              <i
                className={classNames('tree-icon', 'tree-ocl', {
                  'tree-leaf': item.employeeNo !== undefined
                })}
                onClick={item.employeeNo === undefined ?
                  this.toggleTree.bind(this, item.departmentCode) : null}
              />
              <a
                className={classNames('tree-item', 'link-color', {
                  'tree-clicked':
                    isFocused === (item.employeeNo || item.departmentCode).toString() &&
                    ((!deptList || !deptList[item.departmentCode] ||
                      !deptList[item.departmentCode].isFetching) &&
                    (!empList || !empList[item.departmentCode] ||
                      !empList[item.departmentCode].isFetching))
                })}
                onClick={this.setFocusNode.bind(this, item,
                  subList[item.departmentCode])}
              >
                {
                  item.employeeNo === undefined &&
                  ((deptList && deptList[item.departmentCode] &&
                    deptList[item.departmentCode].isFetching) ||
                  (empList && empList[item.departmentCode] &&
                    empList[item.departmentCode].isFetching)) ?
                  (<div className="spinner">
                    <i className="fa fa-spinner" />
                  </div>) : <span>{item.employeeName || item.departmentName}</span>
                }
              </a>
              {
                item.employeeNo === undefined && subList &&
                  subList[item.departmentCode] && subList[item.departmentCode].res &&
                  Array.isArray(subList[item.departmentCode].res) &&
                  subList[item.departmentCode].res.length > 0 ?
                    <DeptTree
                      deptList={deptList}
                      empList={empList}
                      list={subList[item.departmentCode].res}
                      treeClass={classNames('tree-children', {
                        'hide-subtree': !isOpen[item.departmentCode]
                      })}
                      fetchEmp={fetchEmp}
                      fetchDept={fetchDept}
                      isFocused={isFocused}
                      setFocus={setFocus}
                      setSaveCache={setSaveCache}
                    /> : ''
              }
            </li>))
        }
      </ul>
    );
  }
}
