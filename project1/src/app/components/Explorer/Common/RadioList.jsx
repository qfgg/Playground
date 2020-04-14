import React, { Component } from 'react';
import classNames from 'classnames';
import Radio from '../../Common/Radio';


export default class RadioList extends Component {
  renderListItem(item, key, checked, title, invisibleTitle) {
    const { onChange, onCheck } = this.props;
    return (
      <Radio
        name={title || invisibleTitle}
        className="radio-inline"
        key={key}
        id={item.text}
        title={title}
        invisibleTitle={invisibleTitle}
        text={item.text}
        value={item.value}
        checked={checked}
        onChange={onChange}
        onCheck={onCheck}
      />
    );
  }

  render() {
    const { title, list, selected, invisibleTitle } = this.props;
    const className = classNames('radio-list', this.props.className);

    return (
      <div className={className}>
        {title ? <h3 className="caption-fontsize">{title}</h3> : ''}
        <div>
          {
            list.list.map((item, idx) =>
              this.renderListItem(item, idx, selected === item.value, title, invisibleTitle))
          }
        </div>
      </div>
    );
  }
}
