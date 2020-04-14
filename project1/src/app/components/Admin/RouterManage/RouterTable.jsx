import React, { Component } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import Checkbox from '../../Common/Checkbox';


export default class RouterTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: {}
    };
  }

  componentDidUpdate(preProps) {
    const { entriesPerPage, curPage, isLoading, clearSortIf } = this.props;
    if (preProps.entriesPerPage !== entriesPerPage ||
      preProps.curPage !== curPage || (preProps.isLoading && !isLoading)) {
      clearSortIf();
      this.setState({
        isOpen: {}
      });
    }
  }

  toggleIF = (routerNo) => {
    const { ifList, initIF } = this.props;

    if (!this.state.isOpen[routerNo] && (!ifList[routerNo] ||
      !ifList[routerNo].res)) {
      initIF(routerNo);
    }

    this.setState(preState => ({
      isOpen: {
        ...preState.isOpen,
        [routerNo]: !this.state.isOpen[routerNo]
      }
    }));
  };

  render() {
    const { isOpen } = this.state;
    const {
      list,
      ifList,
      isLoading,
      checkRouter,
      checkIF,
      routerExCheck,
      ifExCheck,
      sortStatus,
      sort,
      sortIf,
      ifSortStatus
    } = this.props;

    return (
      <table className="grid table table-content">
        <thead>
          <tr>
            <th className="host" onClick={sort.bind(this, 'hostNm')}>
              Host Name
              <span className="activeSort">
                <i
                  className={classNames('fa', {
                    'fa-unsorted': !sortStatus.hostNm,
                    'fa-caret-down': sortStatus.hostNm === -1,
                    'fa-caret-up': sortStatus.hostNm === 1,
                  })}
                />
              </span>
            </th>
            <th className="ip" onClick={sort.bind(this, 'ipAddr')}>
              IP Address
              <span className="activeSort">
                <i
                  className={classNames('fa', {
                    'fa-unsorted': !sortStatus.ipAddr,
                    'fa-caret-down': sortStatus.ipAddr === -1,
                    'fa-caret-up': sortStatus.ipAddr === 1,
                  })}
                />
              </span>
            </th>
            <th className="cd" onClick={sort.bind(this, 'locCdNm')}>
              Local CD
              <span className="activeSort">
                <i
                  className={classNames('fa', {
                    'fa-unsorted': !sortStatus.locCdNm,
                    'fa-caret-down': sortStatus.locCdNm === -1,
                    'fa-caret-up': sortStatus.locCdNm === 1,
                  })}
                />
              </span>
            </th>
            <th className="cdate" onClick={sort.bind(this, 'creYmdt')}>
              Created Date
              <span className="activeSort">
                <i
                  className={classNames('fa', {
                    'fa-unsorted': !sortStatus.creYmdt,
                    'fa-caret-down': sortStatus.creYmdt === -1,
                    'fa-caret-up': sortStatus.creYmdt === 1,
                  })}
                />
              </span>
            </th>
            <th className="mdate" onClick={sort.bind(this, 'modYmdt')}>
              Modified Date
              <span className="activeSort">
                <i
                  className={classNames('fa', {
                    'fa-unsorted': !sortStatus.modYmdt,
                    'fa-caret-down': sortStatus.modYmdt === -1,
                    'fa-caret-up': sortStatus.modYmdt === 1,
                  })}
                />
              </span>
            </th>
            <th className="exc">Excluded</th>
            <th className="if">Interface</th>
          </tr>
        </thead>
        {
          isLoading ?
            (<tbody>
              <tr className="table-loading">
                <td colSpan={7}>
                  <div className="spinner"><i className="fa fa-spinner" />&nbsp;loading</div>
                </td>
              </tr>
            </tbody>) :
            (list || []).map(item =>
              (<tbody key={item.routerNo} className={isOpen[item.routerNo] ? 'open' : ''}>
                <tr className="hover-tr">
                  <td>{item.hostNm}</td>
                  <td>{item.ipAddr}</td>
                  <td>{item.locCdNm}</td>
                  <td>{moment(new Date(item.creYmdt)).format('YYYY-MM-DD HH:mm:ss')}</td>
                  <td>{moment(new Date(item.modYmdt)).format('YYYY-MM-DD HH:mm:ss')}</td>
                  <td>
                    <Checkbox
                      checked={routerExCheck[item.routerNo] === 'Y' ||
                        (routerExCheck[item.routerNo] === undefined &&
                        item.excludedYn === 'Y')}
                      onCheck={checkRouter.bind(null, item.routerNo,
                        item.excludedYn === 'Y' ? 'N' : 'Y')}
                    />
                  </td>
                  <td>
                    <a
                      className="toggle-btn"
                      onClick={this.toggleIF.bind(null, item.routerNo)}
                    >
                      <i className="fa" />
                    </a>
                  </td>
                </tr>
                {
                  isOpen[item.routerNo] ?
                    (<tr>
                      <td colSpan={7} className="if-table">
                        <table className="grid table">
                          <thead>
                            <tr>
                              <th
                                className="ifmm"
                                onClick={sortIf.bind(this, item.routerNo, 'intfNm')}
                              >
                                Interface
                                <span className="activeSort">
                                  <i
                                    className={classNames('fa', {
                                      'fa-unsorted': !ifSortStatus[item.routerNo],
                                      'fa-caret-down': ifSortStatus[item.routerNo] === -1,
                                      'fa-caret-up': ifSortStatus[item.routerNo] === 1,
                                    })}
                                  />
                                </span>
                              </th>
                              <th className="ifdesc">Description</th>
                              <th className="ifip">IP Address</th>
                              <th className="ifexc">Excluded</th>
                            </tr>
                          </thead>
                          {
                            ifList[item.routerNo] && ifList[item.routerNo].isFetching ?
                              (<tbody>
                                <tr className="table-loading">
                                  <td colSpan={4}>
                                    <div className="spinner">
                                      <i className="fa fa-spinner" />&nbsp;loading
                                    </div>
                                  </td>
                                </tr>
                              </tbody>) :
                              ifList[item.routerNo] && ifList[item.routerNo].res &&
                                ifList[item.routerNo].res.length > 0 ?
                                (<tbody>
                                  {
                                    (ifList[item.routerNo].res || []).map(itm =>
                                      (<tr key={itm.intfNo} className="hover-tr">
                                        <td>{itm.intfNm}</td>
                                        <td>{itm.alias || itm.desc}</td>
                                        <td>{itm.ipAddr}</td>
                                        <td>
                                          <Checkbox
                                            checked={ifExCheck[`${item.routerNo}_${itm.intfNo}`] === 'Y' ||
                                              (ifExCheck[`${item.routerNo}_${itm.intfNo}`] === undefined &&
                                              itm.excludedYn === 'Y')}
                                            onCheck={checkIF.bind(null,
                                              `${item.routerNo}_${itm.intfNo}`,
                                              itm.excludedYn === 'Y' ? 'N' : 'Y')}
                                          />
                                        </td>
                                      </tr>))
                                  }
                                </tbody>) :
                                (<tbody>
                                  <tr>
                                    <td colSpan={4}>
                                      <div>No Interface found!</div>
                                    </td>
                                  </tr>
                                </tbody>)
                          }
                        </table>
                      </td>
                    </tr>) : null
                }
              </tbody>))
        }
      </table>
    );
  }
}
