import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { INTERVALS_TYPES } from '../../../constants/Detail/CommonTypes';


export default class BtnGrp extends Component {
  render() {
    const { activeItem, onChangeInterval } = this.props;

    return (
      <div className="btn-group pull-left quick-interval">
        {
          INTERVALS_TYPES.map((item, idx) =>
            (<button
              key={idx}
              className={classNames('btn', 'btn-xs', 'btn-white', {
                active: activeItem.text === item.text,
              })}
              type="button"
              onClick={() => onChangeInterval(item)}
            >
              {item.text}
            </button>))
        }
      </div>
    );
  }
}

BtnGrp.propTypes = {
  activeItem: PropTypes.object,
  onChangeInterval: PropTypes.func,
};
