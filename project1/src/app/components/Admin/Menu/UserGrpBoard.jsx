import React, { Component } from 'react';
import blacklist from 'blacklist';
import Checkbox from '../../Common/Checkbox';


export default class UserGrpBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changes: {}
    };
  }

  componentDidMount() {
    const { getGrp, focusedMenu } = this.props;

    getGrp(focusedMenu);
  }

  componentWillReceiveProps(nProps) {
    const { focusedMenu, getGrp } = this.props;
    if (focusedMenu !== nProps.focusedMenu) {
      getGrp(nProps.focusedMenu, this.clear);
    }
  }

  setChange = (key, value) => {
    this.setState(preState => ({
      changes: {
        ...preState.changes,
        [key]: value
      }
    }));
  };

  delChange = (key) => {
    this.setState(preState => ({
      changes: blacklist(preState.changes, key.toString())
    }));
  };

  check = (empGrpNo) => {
    const { changes } = this.state;
    const { getGrpStatus, focusedMenu } = this.props;
    const list = getGrpStatus && getGrpStatus[focusedMenu] &&
      getGrpStatus[focusedMenu].res ? getGrpStatus[focusedMenu].res : [];
    if (changes[empGrpNo]) {
      this.delChange(empGrpNo);
    } else {
      this.setChange(empGrpNo,
        list.find(item => item.empGrpNo === empGrpNo).checkedYn === 'Y' ? 'N' : 'Y');
    }
  };

  save = () => {
    const { changes } = this.state;
    const { focusedMenu, updateGrp, getGrp } = this.props;
    const keys = Object.keys(changes);
    const payload = [];

    if (!keys || keys.length === 0) {
      return;
    }
    for (const key in changes) {
      payload.push({
        empGrpNo: key,
        checkedYn: changes[key]
      });
    }
    updateGrp(focusedMenu, payload, () => {
      this.clear();
      getGrp(focusedMenu);
    });
  };

  clear = () => {
    this.setState({
      changes: {}
    });
  };

  render() {
    const { changes } = this.state;
    const { getGrpStatus, focusedMenu, updateGrpStatus } = this.props;
    const list = getGrpStatus && getGrpStatus[focusedMenu] &&
      getGrpStatus[focusedMenu].res ? getGrpStatus[focusedMenu].res : [];
    const isLoading = getGrpStatus && getGrpStatus[focusedMenu] &&
      getGrpStatus[focusedMenu].isFetching ? getGrpStatus[focusedMenu].isFetching
      : false;
    const isSaving = updateGrpStatus && updateGrpStatus.isUpdating ?
      updateGrpStatus.isUpdating : false;

    return (
      <div className="usergrp">
        {
          isLoading ?
            (<div className="spinner">
              <i className="fa fa-spinner" />
            </div>) :
            (<table className="grid table table-content">
              <thead>
                <tr>
                  <th className="check" />
                  <th className="name">Name</th>
                  <th className="desc">Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  list.map((item, idx) =>
                    (<tr key={idx}>
                      <td className="check">
                        <Checkbox
                          checked={changes[item.empGrpNo] ?
                            changes[item.empGrpNo] === 'Y' : item.checkedYn === 'Y'}
                          onCheck={this.check.bind(this, item.empGrpNo)}
                        />
                      </td>
                      <td className="name">{item.empGrpNm}</td>
                      <td>{item.desc}</td>
                    </tr>))
                }
              </tbody>
            </table>)
        }
        <div className="btngrp">
          <button className="add-btn" onClick={this.clear}>CLEAR</button>
          <button className="add-btn" onClick={this.save}>
            {
              isSaving ?
                (<div className="spinner">
                  <i className="fa fa-spinner" />
                </div>) : 'SAVE'
            }
          </button>
        </div>
      </div>
    );
  }
}
