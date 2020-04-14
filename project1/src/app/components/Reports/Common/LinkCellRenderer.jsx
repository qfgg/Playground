import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';


export default class LinkCellRenderer extends Component {
  render() {
    const { keyName = '', value } = this.props;

    return (
      <Link
        to={keyName === '' ? '/external/detail' : `/external/detail/${keyName}/${value.id}`}
        className="link-underline"
      >
        <span>{ value.name }</span>
      </Link>
    );
  }
}

LinkCellRenderer.propTypes = {
  value: PropTypes.object,
};
