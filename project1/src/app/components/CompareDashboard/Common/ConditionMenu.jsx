import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export default class ConditionMenu extends Component {
  handleClick(item) {
    this.props.onChangeData(item);
  }
  render() {
    const { tablist, selectedItem } = this.props;

    return (
      <div className="btn-group quick-interval">
        {
          tablist.map((item, idx) =>
            (<button
              key={idx}
              className={classNames(
                'btn',
                'btn-xs',
                'btn-white',
                { active: item.value === selectedItem.value })}
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

ConditionMenu.propTypes = {
  onChangeData: PropTypes.func,
  tablist: PropTypes.array,
  selectedItem: PropTypes.object,
};
