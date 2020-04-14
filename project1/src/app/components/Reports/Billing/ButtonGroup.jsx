import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BTN_TYPES } from '../../../constants/Reports/Billing/BillingTypes';


export default class ButtonGroup extends Component {
  handleClick(item) {
    const { setArea } = this.props;
    setArea(item);
  }

  render() {
    const { area } = this.props;

    return (
      <div className="btn-group pull-left">
        {
          BTN_TYPES.map((item, idx) =>
            (<button
              key={idx}
              className={
                classNames(
                  'btn',
                  'btn-xs',
                  'btn-white',
                  { active: area.text === item.text },
                )
              }
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

ButtonGroup.propTypes = {
  setArea: PropTypes.func,
  area: PropTypes.object,
};
