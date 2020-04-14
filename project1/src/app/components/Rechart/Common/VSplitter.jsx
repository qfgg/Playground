import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.less';


export default class VSplitter extends Component {
  handleClick = () => {
    this.props.onShowCombine();
  }

  render() {
    return (
      <div className="splitter">
        <div className="splitter-line" />
        <div
          className="vertical-timeline-icon"
          style={this.props.top ? { top: this.props.top } : { margin: 'auto' }}
          onClick={this.handleClick}
        >
          <i className="fa fa-plus-square" />
        </div>
      </div>
    );
  }
}

VSplitter.propTypes = {
  onShowCombine: PropTypes.func,
  top: PropTypes.number,
};

