import React, { Component } from 'react';


export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideDel: true
    };
  }

  handleSearch = (evt) => {
    const val = evt.target.value;
    if (val && evt.charCode === 13) {
      this.flowtoSearch(val);
    }
  }

  flowtoSearch = (val) => {
    const { setSearchKey } = this.props;
    setSearchKey(val);
  }

  handleChange = () => {
    const { searchKeyTxt, setSearchKey } = this.props;
    if (searchKeyTxt) {
      setSearchKey('');
    }
  }

  render() {
    return (
      <div className="search-input">
        <input
          type="text"
          className="form-control search"
          placeholder="keyword"
          ref={c => this.search = c}
          onKeyPress={evt => this.handleSearch(evt)}
          onChange={this.handleChange}
        />
        <a onClick={() => this.flowtoSearch(this.search.value)}>
          <i className="fa fa-search" />
        </a>

      </div>
    );
  }
}
