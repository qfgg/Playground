import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import { mapFiltersetToList } from '../../../helper';


export default class ItemTable extends Component {
  render() {
    const { filterset, side } = this.props;
    const list = mapFiltersetToList(side, filterset);

    return (
      <div>
        <div className="left-title">
          <h3 className="table-title pull-left">{side}</h3>
        </div>
        <div className="right-content">
          <table className="table job-table">
            <tbody className="tbody-width">
              {
                list.map((item, idx) =>
                  <Item key={idx} side={side} item={item} />)
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ItemTable.propTypes = {
  filterset: PropTypes.object,
  side: PropTypes.string,
};
