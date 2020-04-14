import React, { Component } from 'react';


export default class FavoredItemList extends Component {
  handleClick = (item) => {
    this.props.onRemove(item);
  }

  renderItem(item, key) {
    return (
      <div key={key} className="favor-choices">
        <span className="ellipsis">{item.text}</span>
        <i
          className="fa fa-times unfavoricon"
          title="Remove this item"
          onClick={() => this.handleClick(item)}
        />
      </div>
    );
  }

  render() {
    const { list } = this.props;

    return (
      <div>{ list.map((item, idx) => this.renderItem(item, idx)) }</div>
    );
  }
}
