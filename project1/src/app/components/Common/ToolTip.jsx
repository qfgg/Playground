import React, { Component } from 'react';

export default class Tooltips extends Component {
  render() {
    const { desp, type = 'B', className } = this.props;
    const styleType = type === 'B' ? 'bottom' : type === 'T' ? 'top' : type === 'R' ? 'right' : 'left';
    return (
      <div className={`tip-wrap ${className}`}>
        <i className={desp ? 'page-tip fa fa-question-circle' : 'page-tip fa fa-question-circle hide'} >
          <div className={`popover fade in ${styleType}`}>
            <div className="arrow" />
            <div className="popover-content">
              {desp}
            </div>
          </div>
        </i>
      </div>
    );
  }
}
