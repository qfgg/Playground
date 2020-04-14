import React, { Component } from 'react';
import classNames from 'classnames';
import GridCell from './GridCell';
import { sortAscBy, sortDescBy } from '../../../helper';


export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      sortStatus: {},
      defaultList: [],
    };
  }
  sortList = (item) => {
    const { sortStatus, list, defaultList } = this.state;
    const idx = this.props.header.indexOf(item);
    const _item = this.props.field[idx].name;
    // this.state.sortStatus = {
    //   ...sortStatus,
    //   [item]:
    //       sortStatus[item] === undefined ? 1 :
    //       sortStatus[item] === 1 ? -1 :
    //       sortStatus[item] + 1,
    // };
    // this.state.list = this.state.sortStatus[item] === -1 ? defaultList :
    //     this.state.sortStatus[item] === 1 ? [...list].sort(sortDescBy(_item)) :
    //     [...list].sort(sortAscBy(_item));
    this.setState({
      sortStatus: {
        ...sortStatus,
        [item]:
          sortStatus[item] === undefined ? 1 :
          sortStatus[item] === 1 ? -1 :
          sortStatus[item] + 1,
      },
      list: sortStatus[item] === -1 ? defaultList :
        sortStatus[item] === 1 ? [...list].sort(sortDescBy(_item)) :
        [...list].sort(sortAscBy(_item))
    });
    // const { sort } = this.props;
    // sort(item);
  };
  componentDidMount() {
    this.setState({
      list: this.props.list,
      defaultList: this.props.list,
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.list !== nextProps.list) {
      this.setState({
        list: nextProps.list,
        defaultList: nextProps.list
      });
    }
  }
  render() {
    const { header, field, side, isLoading, curPage, size } = this.props;
    const { list, sortStatus } = this.state;
    const widthStyle = [];
    for (let i = 0, len = field.length; i < len; i += 1) {
      widthStyle[i] = field[i].width ? { width: field[i].width } : {};
    }

    return (
      <table className="grid table table-content table-hover margin bottom">
        <thead>
          <tr>
            {
              (header || []).map((item, idx) =>
                (<th
                  key={idx}
                  className={classNames(field[idx].noSort ? '' : 'clicktitle', {
                    'text-left': field[idx].align === 'l',
                    'text-right': field[idx].align === 'r',
                    'text-center': !field[idx].align,
                  })}
                  style={widthStyle[idx]}
                  onClick={field[idx].noSort ? null : () => this.sortList(item)}
                >
                  {item}
                  {
                    field[idx].noSort ? null :
                    (<span className="activeSort">
                      <i
                        className={classNames('fa', {
                          'fa-unsorted': !sortStatus[item],
                          'fa-caret-down': sortStatus[item] === -1,
                          'fa-caret-up': sortStatus[item] === 1,
                        })}
                      />
                    </span>)
                  }
                </th>))
            }
          </tr>
        </thead>
        {
          isLoading ?
            (<tbody>
              <tr className="table-loading">
                <td colSpan={(header || []).length}>
                  <div className="spinner"><i className="fa fa-spinner" />&nbsp;loading</div>
                </td>
              </tr>
            </tbody>) :
            (<tbody>
              {
                (list || []).map((item, idx) =>
                  (<tr key={idx}>
                    {
                      field.map((itm, i) =>
                        (<GridCell
                          key={i}
                          text={itm.isNumber ? size * (curPage - 1) + idx + 1 :
                          item[itm.name] || '-'}
                          align={field[i].align}
                          isLink={field[i].isLink}
                          isChart={field[i].isChart}
                          needNumFormat={field[i].needNumFormat}
                          no={item.no}
                          name={field[i].name}
                          side={side}
                        />))
                    }
                  </tr>))
              }
            </tbody>)
        }
      </table>
    );
  }
}
