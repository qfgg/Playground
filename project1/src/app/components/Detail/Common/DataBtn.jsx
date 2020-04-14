import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DATA_BTN_TYPES } from '../../../constants/Detail/CommonTypes';


export default class DataBtn extends Component {
  handleClick(item) {
    this.props.onChangeData(item);
  }

  render() {
    return (
      <div className="btn-group pull-left quick-interval">
        {
          DATA_BTN_TYPES.map((item, idx) =>
            (<button
              key={idx}
              className={classNames('btn', 'btn-xs', 'btn-white', {
                active: this.props.dataOption.text === item.text,
              })}
              type="button"
              onClick={() => this.handleClick(item)}
            >
              {item.text}
            </button>))
        }
      </div>
    );
  }
}

DataBtn.propTypes = {
  dataOption: PropTypes.object,
  onChangeData: PropTypes.func,
};
