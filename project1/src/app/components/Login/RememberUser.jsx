import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';

export default class RememberUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  chkRemember = () => {
    this.state.isChecked = !this.state.isChecked;
    this.setState({
      isChecked: this.state.isChecked,
    });
  };

  render() {
    // const { name, type, placeholder } = this.props;
    const icoClass = classNames('ico', { on: this.state.isChecked });

    return (
      <p className="chk-id">
        <input
          className="blind"
          type="checkbox"
          value={this.state.isChecked}
        />
        <a className="img-chk" onClick={this.chkRemember}>
          <span className={icoClass} />
          REMEMBER USER ID
        </a>
      </p>
    );
  }
}
