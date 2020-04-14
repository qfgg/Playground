import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { flowDataFormatter } from '../../helper';
import { ID_TITLE_MAP, NAME_TITLE_MAP } from '../../constants/IntegrationSearch/SearchTypes';


export default class SearchTable extends Component {
  getTitle = (type) => {
    const title = [NAME_TITLE_MAP[type]];
    if (ID_TITLE_MAP[type]) {
      title.push(ID_TITLE_MAP[type]);
    }
    return [...title, 'In[Mbps]', 'Out[Mbps]'];
  };

  getCells = (type, id, name, colCnt, trfStatus) => {
    const arr =
      [<td key="0">
        <Link
          to={`/external/detail/${type}/${id}`}
          className="link-underline"
        >
          { name }
        </Link>
      </td>];
    if (colCnt === 4) {
      arr.push(<td key="1">{ id }</td>);
    }
    return [
      ...arr,
      <td key="2" className="right">
        {
          trfStatus && trfStatus[id] && trfStatus[id].isFetching ?
            <div className="spinner">
              <i className="fa fa-spinner" />
            </div> : (!trfStatus || !trfStatus[id] || !trfStatus[id].res ||
          (trfStatus[id].res.in !== 0 && !trfStatus[id].res.in) ?
            '-' : flowDataFormatter(trfStatus[id].res.in))
        }
      </td>,
      <td key="3" className="right">
        {
          trfStatus && trfStatus[id] && trfStatus[id].isFetching ?
            <div className="spinner">
              <i className="fa fa-spinner" />
            </div> : (!trfStatus || !trfStatus[id] || !trfStatus[id].res ||
            (trfStatus[id].res.out !== 0 && !trfStatus[id].res.out) ?
              '-' : flowDataFormatter(trfStatus[id].res.out))
        }
      </td>
    ];
  };

  render() {
    const { table, trfStatus, tab, cnt, curTab, getMore } = this.props;
    const type = Object.keys(table)[0];
    const title = this.getTitle(type);
    const colCnt = title.length;

    return (
      <div className="search-table">
        <div className="search-table-title">
          <h4>{`${tab} (${cnt})`}</h4>
          { curTab === tab ? '' : <a onClick={() => getMore(tab)}>more...</a> }
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              {
                title.map((item, idx) =>
                  (<th
                    key={idx}
                    className={
                      classNames({
                        right: item === 'In[Mbps]' || item === 'Out[Mbps]',
                        w25: colCnt === 4 || (colCnt === 3 && idx !== 0),
                        w50: colCnt === 3 && idx === 0
                      })
                    }
                  >
                    {item}
                  </th>))
              }
            </tr>
          </thead>
          <tbody>
            {
              table[type].map((item, index) => (
                <tr key={index}>
                  { this.getCells(type, item.id, item.name, colCnt, trfStatus) }
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}
