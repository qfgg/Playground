import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { REL_MAP } from '../../../constants/Detail/External/DetailTypes';
import '../../NavTab/index.less';


export default class RelationNavTab extends Component {
  render() {
    const {
      tablist,
      selectedItem,
      handleClick,
      noCnt,
      subRelation,
      realCnt,
      displayType
    } = this.props;

    return noCnt ? (
      <ul className="nav nav-tabs tab-custom">
        {
          tablist.map((item, idx) =>
            (<li key={idx} className={classNames({ active: item === selectedItem })}>
              <a onClick={evt => handleClick(evt, item)}>{item}</a>
            </li>))
        }
      </ul>
    ) : (
      <ul className="nav nav-tabs tab-custom">
        {
          tablist.map((item, idx) =>
            (<li
              key={idx}
              className={classNames({ active: item === selectedItem })}
            >
              <a onClick={evt => handleClick(evt, item)}>
                {
                  item === 'All' || item === 'Latency' ? `${item}` : displayType === 'external' ?
                    `${item} (${realCnt[item] || (((subRelation.arrOfField || {})[REL_MAP[item]]) || []).length})` :
                    `${item} (${realCnt[item] || (((subRelation.arrOfField || {})[`dst_${item.toLowerCase()}`]) || []).length})`
                }
              </a>
            </li>))
        }
      </ul>
    );
  }
}

RelationNavTab.propTypes = {
  selectedItem: PropTypes.string,
  handleClick: PropTypes.func,
  noCnt: PropTypes.number,
  subRelation: PropTypes.object,
  tablist: PropTypes.array,
};
