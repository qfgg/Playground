import React, { Component } from 'react';
import { connect } from 'react-redux';


class NotFound extends Component {

  render() {
    const h1Style = {
      display: 'block',
      fontSize: '2em',
      fontWeight: 'bold',
    };

    return (
      <div className="container">
        <h1 style={h1Style}>Page Not Found</h1>
        <p style={{ fontWeight: 'bold' }}>
          The requested URL <span className="text-danger">
            {this.props.location.pathname}</span> was not found on this server.
        </p>
      </div>
    );
  }
}

export default connect()(NotFound);
