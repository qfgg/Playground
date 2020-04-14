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
          <li>Reports</li>
          <li className="nav-bold">Billing</li>
        </ol>
        <div className="split" />
      </div>
    );
  }
}
