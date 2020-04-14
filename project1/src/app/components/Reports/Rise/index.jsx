import React, { Component } from 'react';
import moment from 'moment';
import SearchBar from './SearchBar';
import './index.less';
import { ignoreTime } from '../../../helper';
import TrafficTable from './TrafficTable';
import Pagination from '../../Pagination';
import SetEntries from '../../Common/SetEntries';


export default class RiseReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quickInterval: { text: '1D', value: 1, unit: 'days' },
    };
  }

  componentDidMount() {
    const { initRise } = this.props;
    initRise(1);
  }

  setCurPage = (page) => {
    const { setCurPage, initRise } = this.props;
    setCurPage(page);
    initRise(page);
  };

  handleChangeInterval(item) {
    const { period, setPeriod } = this.props;
    const end = moment.unix(period.end);

    this.setState({ quickInterval: item });
    setPeriod({ start: ignoreTime(end.subtract(item.value, item.unit)) });
  }

  render() {
    const {
      period,
      domain,
      setPeriod,
      setDomain,
      curPage,
      totalCnt,
    } = this.props;

    return (
      <div className="rise">
        <SearchBar
          period={period}
          domain={domain}
          setPeriod={setPeriod}
          setDomain={setDomain}
          activebtn={this.state.quickInterval}
          onChangeInterval={item => this.handleChangeInterval(item)}
        />
        <SetEntries
          totalEntries={6}
          setEntriesPerPage={() => {}}
          refreshList={() => {}}
          setCurPage={() => {}}
          curPage={1}
        />
        <TrafficTable />
        <Pagination totalCnt={totalCnt} curPage={curPage} setCurPage={this.setCurPage} />
      </div>
    );
  }
}
