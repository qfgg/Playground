import React, { Component } from 'react';
import classNames from 'classnames';
import moment from 'moment';
import { ignoreSeconds } from '../../../helper';
import ConditionMenu from './ConditionMenu';
import OptionSlider from '../../Common/OptionSlider';
import chartUtils from '../../../../lib/chartUtils';
import { BASE_URL, CHARTS_URL } from '../../../constants/Url';
import {
  DATA_SOURCE,
  INTERVALS_TYPES,
  AVG,
  COMPARE_METHOD
} from '../../../constants/CompareDashboard/CommonSearchTypes';
import {
  EX_FIELD_TYPE_MAP,
  IN_FIELD_TYPE_MAP
} from '../../../constants/Dashboard/DashboardTypes';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      smallSize: false,
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      smallSize: document.body.clientWidth <= 900,
    });
  }

  checkValidity = (val) => {
    if (!val) {
      return true;
    }
    const regExp = /^(10|[1-9])$/;
    return regExp.test(val);
  };

  handleChange = (evt) => {
    const { top, setTop } = this.props;
    if (evt.target.value !== top && this.checkValidity(evt.target.value)) {
      setTop(evt.target.value);
    }
  };

  handleSearch = (side, activeData, activeInterval, activeAvg, top, domainList) => {
    const seletedInterval = INTERVALS_TYPES.find(item => item.value === activeInterval.value);
    domainList.forEach((item) => {
      const query = {
        type: side,
        requestType: 'compare_dashboard',
        itemType: activeData.value,
        compareTime: activeInterval.value,
        fieldType: side === 'external' ? EX_FIELD_TYPE_MAP[item.value] :
          IN_FIELD_TYPE_MAP[item.value],
        fieldTopLimit: top ? parseInt(top) : 1,
        aggregation: activeAvg.value,
        directionType: 'total',
        interval: seletedInterval.agg,
        period: {
          start: ignoreSeconds(moment().subtract(seletedInterval.num, seletedInterval.unit)),
          end: ignoreSeconds(moment()),
        },
        page: '0',
        size: '0',
        showDiff: true,
      };
      this.props.setSearchQuery(query);
      const url = `${BASE_URL}${CHARTS_URL}`;
      chartUtils.chartFetcher(query, url, `${side.slice(0, 2)}CompareDsh${item.value}`);
    });
  };

  render() {
    const {
      activeData,
      activeInterval,
      activeAvg,
      activeMethod,
      top,
      isLoading,
      side,
      domainList,
      setData,
      setInterval,
      setAvg,
      setMethod,
      col,
      setCol
    } = this.props;
    const searchBtnClass = classNames(
      'btn',
      'btn-xs',
      'pull-right',
      'btn-search',
      { 'disabled-btn': isLoading }
    );

    return (
      <div className="ibox-content compare-bar">
        <ConditionMenu
          tablist={DATA_SOURCE}
          selectedItem={activeData}
          onChangeData={setData}
        />
        <ConditionMenu
          tablist={INTERVALS_TYPES}
          selectedItem={activeInterval}
          onChangeData={setInterval}
        />
        <ConditionMenu
          tablist={AVG}
          selectedItem={activeAvg}
          onChangeData={setAvg}
        />
        <div className="search-top">
          <span>TOP(Max 10): </span>
          <input
            type="text"
            className="form-control"
            value={top}
            onChange={this.handleChange}
          />
        </div>
        <ConditionMenu
          tablist={COMPARE_METHOD}
          selectedItem={activeMethod}
          onChangeData={setMethod}
        />
        <div className="row-slider">
          <OptionSlider onChange={setCol} defaultVal={col} isHide={this.state.smallSize} />
        </div>
        <button
          type="button"
          className={searchBtnClass}
          disabled={isLoading}
          onClick={() => this.handleSearch(side, activeData, activeInterval,
            activeAvg, top, domainList)}
        >
          Search
        </button>
      </div>
    );
  }
}
