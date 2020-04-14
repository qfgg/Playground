import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class OptionSlider extends Component {
  constructor(props) {
    super(props);
    const leftPos = [0.9, 34.6, 70];
    this.state = {
      curSelect: props.defaultVal,
      startX: undefined,
      originX: leftPos[props.defaultVal - 1],
      distance: 0,
      isDragging: false
    };
    this.mounted = false;
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.startDrag);
    document.addEventListener('mouseup', this.endDrag);
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('mousedown', this.startDrag);
    document.removeEventListener('mouseup', this.endDrag);
  }

  changeOption = (evt) => {
    const x = evt.clientX;
    const rect = this.sliderbar.getBoundingClientRect();
    const { left, right, width } = rect;
    const leftPos = [0.9, 34.6, 70];

    let target = -1;

    if (this.props.isHide) {
      target = 1;
    } else if (x >= left && x < (left + width / 3) && this.state.curSelect !== 1) {
      target = 1;
    } else if (x >= (left + width / 3) && x < (left + width / 3 * 2) &&
      this.state.curSelect !== 2) {
      target = 2;
    } else if (x >= (left + width / 3 * 2) && x <= right && this.state.curSelect !== 3) {
      target = 3;
    }

    if (target > -1) {
      this.setState({
        curSelect: target,
        originX: leftPos[target - 1]
      });
      if (this.props.onChange) {
        this.props.onChange(target);
      }
    }
  };

  startDrag = (evt) => {
    if (this.mounted && ReactDOM.findDOMNode(this.btn) &&
      ReactDOM.findDOMNode(this.btn).contains(evt.target)) {
      evt.preventDefault();
      this.setState({
        startX: evt.clientX,
        isDragging: true
      });
      document.addEventListener('mousemove', this.mouseMove, false);
    }
  };

  mouseMove = (evt) => {
    const d = evt.clientX - this.state.startX;
    const curX = this.state.originX + d;
    if (curX > -8 && curX < 79) {
      this.setState({
        distance: d
      });
    }
  };

  getEndState = () => {
    const endX = this.state.originX + this.state.distance;
    if (endX < 17.8) {
      return [1, 0.9];
    } else if (endX > 52.3) {
      return [3, 70];
    }
    return [2, 34.6];
  };

  endDrag = () => {
    if (!this.mounted || this.props.isHide) {
      return;
    }
    const endState = this.getEndState();
    this.setState({
      curSelect: endState[0],
      originX: endState[1],
      distance: 0,
      isDragging: false
    });
    if (this.props.onChange) {
      this.props.onChange(endState[0]);
    }
    document.removeEventListener('mousemove', this.mouseMove, false);
  };

  render() {
    const xPosStyle = {
      left: `${this.state.originX + this.state.distance}px`
    };

    return (
      <div className="option-slider" style={{ display: this.props.isHide ? 'none' : 'block' }}>
        <div
          className="slider-wrap"
          onMouseDown={this.changeOption}
          ref={c => this.sliderbar = c}
        >
          <div className="slider-base">
            <div className="slider-btn" style={xPosStyle} ref={c => this.btn = c}>
              <div className="slider-tip">{this.state.curSelect}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
