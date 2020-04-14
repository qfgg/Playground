import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export default class ButtonGroup extends Component {
  render() {
    const { btnList, activeBtn, onChange } = this.props;

    return (
      <div className="btn-group">
        {
          btnList.map((item, idx) =>
            (<button
              key={idx}
              className={classNames('btn', 'btn-xs', 'btn-white', {
                active: activeBtn.text === item.text,
              })}
              type="button"
              onClick={() => onChange(item)}
            >
              {item.text}
            </button>))
        }
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  btnList: PropTypes.array,
  activeBtn: PropTypes.object,
  onChange: PropTypes.func,
};
