import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';


export default class OptionBtn extends Component {
  render() {
    const { activePeriod, activeBtn, setActiveBtn, btnList } = this.props;

    return (
      <div className="btn-group option-btn">
        {
          btnList.map((item, idx) =>
            (<button
              key={idx}
              className={
                classNames(
                  'btn',
                  'btn-xs',
                  'btn-white',
                  { active: activeBtn === item }
                )
              }
              type="button"
              onClick={() => setActiveBtn(item)}
              disabled={
                (activePeriod === 'Today' && item !== 'Last') ||
                (activePeriod !== 'Today' && item === 'Last')
              }
            >
              {item}
            </button>))
        }
      </div>
    );
  }
}
