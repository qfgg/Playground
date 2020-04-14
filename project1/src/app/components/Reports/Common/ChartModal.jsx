import React, { Component } from 'react';
import classNames from 'classnames';
import Triangle from './Triangle';
import ChartOption from '../../Chart/ChartCommon/ChartOption';
import CommonChart from '../../Chart/ChartCommon/CommonChart';


export default class ChartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'line'
    };
  }

  getCoordinates = (left) => {
    const screenRight = document.documentElement.getBoundingClientRect().right;
    const adjustX = left + 480 - screenRight;
    this.adjustX = 0;

    if (adjustX > 0) {
      this.adjustX = adjustX;
      return { left: -adjustX };
    }
    return {};
  }

  setType = (type, stacked) => {
    this.setState({ type, stacked });
  }

  render() {
    const { type, stacked } = this.state;
    const { isOpen, left, data } = this.props;
    const leftStyle = this.getCoordinates(left);
    const modalClass = classNames('chart-modal', {
      hide: !isOpen,
    });

    return (
      <div className={modalClass} style={leftStyle} ref={c => this.modal = c}>
        <Triangle adjustX={this.adjustX} />
        <div className="inner-border">
          <div className="option-wrap">
            <ChartOption setType={this.setType} />
          </div>
          <CommonChart data={data} type={type} stacked={stacked} />
        </div>
      </div>
    );
  }
}
