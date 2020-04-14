import React, { Component } from 'react';


export default class ItemList extends Component {
  handleClick = (code, item) => {
    this.props.onRemove(code, item);
  }

  renderItem(item, key, code) {
    return (
      <div key={key} className="favor-choices">
        {(item || {}).text}
        <i
          className="fa fa-times unfavoricon"
          title="Remove this item"
          onClick={() => this.handleClick(code, item)}
        />
      </div>
    );
  }

  render() {
    const { list, code } = this.props;

    return (
      <div>{ list && list.length > 0 ? list.map((item, idx) => this.renderItem(item, idx, code)) : '' }</div>
    );
  }
}
