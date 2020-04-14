import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Top extends Component {
  checkValidity = (val) => {
    if (!val) {
      return true;
    }
    const regExp = /^(30|(2\d)|(1\d)|[1-9])$/;
    return regExp.test(val);
  };

  handleChange = (evt) => {
    const { setTop, top } = this.props;

    if (evt.target.value !== top && this.checkValidity(evt.target.value)) {
      setTop(parseInt(evt.target.value, 10) || 0);
    }
  }

  render() {
    const { top } = this.props;

    return (
      <div className="top">
        <span>TOP(Max 30): </span>
        <input
          type="text"
          className="form-control"
          value={top || ''}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

Top.propTypes = {
  setTop: PropTypes.func,
  top: PropTypes.number,
};
