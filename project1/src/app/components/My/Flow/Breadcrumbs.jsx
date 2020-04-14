import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Breadcrumbs extends Component {
  render() {
    return (
      <div className="bread-wrap">
        <ol className="breadcrumb bc-padding">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>My</li>
          <li className="nav-bold">Flows</li>
        </ol>
        <div className="split" />
      </div>
    );
  }
}
