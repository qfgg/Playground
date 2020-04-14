import React, { Component } from 'react';
import PropTypes from 'prop-types';


class VSplitter extends Component {
  handleClick = () => {
    this.props.onShowCombine();
  }

  render() {
    return (
      <div className="splitter">
        <div className="splitter-line" />
        <div className="vertical-timeline-icon" onClick={this.handleClick}>
          <i className="fa fa-plus-square" />
        </div>
      </div>
    );
  }
}

VSplitter.propTypes = {
  onShowCombine: PropTypes.func,
};

export default VSplitter;
