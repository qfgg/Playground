import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Triangle extends Component {
  render() {
    const { adjustX } = this.props;
    const leftStyle = {
      left: `${10 + adjustX}px`,
    };

    return (
      <div>
        <div className="outter" style={leftStyle} />
        <div className="inner" style={leftStyle} />
      </div>
    );
  }
}

Triangle.propTypes = {
  adjustX: PropTypes.number,
};
