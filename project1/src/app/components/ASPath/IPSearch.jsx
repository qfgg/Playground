import React, { Component } from 'react';


export default class IPSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKW: '',
      isDisabled: true,
    };
  }

  // handle any value change of the search input
  handleType = (evt) => {
    const regExp = /^((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)){3}$/;

    this.setState({
      searchKW: evt.target.value,
      isDisabled: !regExp.test(evt.target.value)
    });
  };

  handleSearch = () => {
    const { getBasic } = this.props;
    const { searchKW } = this.state;

    getBasic(searchKW);
  };

  handleKeyboard = (evt) => {
    const { isDisabled } = this.state;

    if (!isDisabled && evt.key === 'Enter') {
      this.handleSearch();
    }
  }

  render() {
    const { searchKW, isDisabled } = this.state;

    return (
      <div className="search-bar">
        <input
          type="text"
          className="form-control ip"
          value={searchKW}
          onChange={this.handleType}
          onKeyDown={this.handleKeyboard}
        />
        <button
          className="btn btn-white search-btn fa fa-search"
          disabled={isDisabled}
          onClick={this.handleSearch}
        />
      </div>
    );
  }
}
