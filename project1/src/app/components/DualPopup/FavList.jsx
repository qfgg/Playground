import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export default class FavList extends Component {
  renderItem(item, key) {
    const { favorOnly, arrow, onSelect, onFavor, clearAllIF } = this.props;
    const className = classNames('list-group-item', {
      selected: item.selected,
      favored: item.favored,
    });

    return (
      <li key={key} className={className}>
        <a
          onClick={() => {
            onSelect(item);
            if (clearAllIF) {
              clearAllIF();
            }
          }}
        >
          {item.text}
        </a>
        {
          arrow && item.selected ? <i className="fa fa-arrow-circle-right" /> : ''
        }
        {
          favorOnly || item.id === '*' ?
            '' : <span className="fa" onClick={() => onFavor(item)} />
        }
      </li>
    );
  }

  render() {
    const {
      list,
      arrow,
      allIF,
      routerIF,
      routerNo,
      addAllIF,
      clearAllIF,
      addRouterIF,
      removeRouterIF,
      clearRouterIF
    } = this.props;

    return (
      <ul className="list-group">
        {
          arrow ?
            (<li className={allIF ? 'list-group-item selected' : 'list-group-item'}>
              <a
                onClick={allIF ? clearAllIF :
                  () => {
                    addAllIF();
                    clearRouterIF();
                  }
                }
              >
                *
              </a>
            </li>) :
            routerNo ?
            (<li className={routerIF[routerNo] ? 'list-group-item selected' : 'list-group-item'}>
              <a
                onClick={routerIF[routerNo] ? () => removeRouterIF(routerNo) :
                  () => addRouterIF(routerNo)}
              >
                *
              </a>
            </li>) : null
        }
        {
          list.map((item, idx) => this.renderItem(item, idx))
        }
      </ul>
    );
  }
}

FavList.propTypes = {
  favorOnly: PropTypes.bool,
  arrow: PropTypes.bool,
  onSelect: PropTypes.func,
  onFavor: PropTypes.func,
  list: PropTypes.array,
};

