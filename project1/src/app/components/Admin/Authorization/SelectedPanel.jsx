import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import EditTable from './EditTable';
import { RHEADER, RFIELD } from '../../../constants/Admin/Author/AuthorTypes';


export default class SelectedPanel extends Component {
  render() {
    const { list, delUser } = this.props;

    return (
      <div className="sel-panel">
        <h3>Selected User</h3>
        <EditTable
          isHead
          header={RHEADER}
        />
        <Scrollbars
          style={{ height: 520 }}
          autoHide
          autoHideTimeout={400}
        >
          <EditTable
            isBody
            list={list || []}
            field={RFIELD}
            idField="employeeNo"
            onDel={delUser}
            allDel
            notop
          />
        </Scrollbars>
      </div>
    );
  }
}
