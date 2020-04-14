import React, { Component } from 'react';
import PropTypes from 'prop-types';
import blacklist from 'blacklist';
import ItemTable from './ItemTable';


export default class Detail extends Component {
  render() {
    const { filterset } = this.props;
    let side1;
    let side2;
    if (filterset.type === 'external') {
      side1 = 'Server';
      side2 = 'User';
    } else if (filterset.type === 'internal') {
      side1 = 'A';
      side2 = 'B';
    }

    return (
      <div>
        <ItemTable
          filterset={filterset.server || filterset.src || {}}
          side={side1}
        />
        <div className="hr-line-dashed" />
        <ItemTable
          filterset={filterset.user || filterset.dst || {}}
          side={side2}
        />
        <div className="hr-line-dashed" />
        <ItemTable
          filterset={blacklist(filterset, 'type', 'compareTime', 'domainType',
            'domainValue', 'fieldType', 'fieldValue', 'directionType', 'showDiff',
            'fieldTopLimit', 'requestType', 'server', 'user', 'src', 'dst')}
          side="Filter"
        />
      </div>
    );
  }
}

Detail.propTypes = {
  filterset: PropTypes.object,
};
