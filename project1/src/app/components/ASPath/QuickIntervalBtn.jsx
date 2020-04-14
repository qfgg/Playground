import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { INTERVALS_TYPES } from '../../constants/External/ASPath/ASPathTypes';


export default class QuickIntervalBtn extends Component {
  handleClick(item) {
    this.props.onChangeInterval(item);
  }

  render() {
    return (
      <div className="btn-group pull-left quick-interval">
        {
          INTERVALS_TYPES.map((item, idx) =>
            (<button
              key={idx}
              className={classNames('btn', 'btn-xs', 'btn-white', {
                active: this.props.activebtn.text === item.text,
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

QuickIntervalBtn.propTypes = {
  onChangeInterval: PropTypes.func,
  activebtn: PropTypes.object,
};
