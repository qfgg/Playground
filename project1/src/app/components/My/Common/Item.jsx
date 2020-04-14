import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = ({ isFold: true });
  }

  toggleFold() {
    this.setState({ isFold: !this.state.isFold });
  }

  GetStringByteLength = (val) => {
    let Zhlength = 0; // 全角
    let Enlength = 0; // 半角
    for (let i = 0; i < val.length; i++) {
      if (val.substring(i, i + 1).match(/[^\x00-\xff]/ig) != null) {
        Zhlength += 1;
      } else {
        Enlength += 1;
      }
    }
    return (Zhlength * 2) + Enlength; // 返回当前字符串字节长度
  }

  render() {
    const { side, item } = this.props;
    const tdContentClass = classNames('table-content', {
      'table-content-oneline': this.state.isFold,
    });
    const foldbtnClass = classNames('fa', {
      'fa-chevron-circle-down': this.state.isFold,
      'fa-chevron-circle-up': !this.state.isFold,
    });

    return (
      <tr>
        <td className="table-item">{`${item.name}:`}</td>
        <td className={tdContentClass}>
          {
            item.name !== 'Period' ? item.value : (
              <span>
                { item.value.split('||')[0] }
                <br />
                { item.value.split('||')[1] }
              </span>
            )
          }
        </td>
        <td style={{ paddingLeft: 0 }}>
          {
            side !== 'Filter' && this.GetStringByteLength(item.value) >= 46 ? (
              <a className="link-color">
                <i className={foldbtnClass} onClick={() => this.toggleFold()} />
              </a>
            ) : ''
          }
        </td>
      </tr>
    );
  }
}

Item.propTypes = {
  side: PropTypes.string,
  item: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  }),
};
