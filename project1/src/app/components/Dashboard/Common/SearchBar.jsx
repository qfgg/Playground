import React, { Component } from 'react';
import classNames from 'classnames';
import moment from 'moment';
import Dropdown from '../../Common/Dropdown';
import ButtonGroup from './ButtonGroup';
import Top from './Top';
import OptionSlider from '../../Common/OptionSlider';
import chartUtils from '../../../../lib/chartUtils';
import { BASE_URL, CHARTS_URL } from '../../../constants/Url';
import {
  DATA_TYPES,
  EX_DOMAIN_TYPES,
  IN_DOMAIN_TYPES,
  EX_FIELD_TYPE_MAP,
  IN_FIELD_TYPE_MAP
} from '../../../constants/Dashboard/DashboardTypes';
import { ignoreSeconds } from '../../../helper';


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
      smallSize: document.body.clientWidth <= 800,
    });
  }

  generateUploadQuery = (domain, side, dataType, top) => {
    const query = {
      type: side,
      requestType: 'dashboard',
      fieldTopLimit: parseInt(top),
      directionType: 'all',
      aggregation: 'avg',
      itemType: dataType.value,
      fieldType: side === 'external' ? EX_FIELD_TYPE_MAP[domain.value] :
        IN_FIELD_TYPE_MAP[domain.value],
      period: {
        start: ignoreSeconds(moment().subtract(6, 'hours')),
        end: ignoreSeconds(moment()),
      },
      interval: '1m',
      page: 0,
      size: 0,
      showDiff: false,
    };
    return query;
  };

  handleSearch = (domain, side, dataType, top) => {
    const query = this.generateUploadQuery(domain, side, dataType, top);
    this.props.setSearchQuery(query);
    const url = `${BASE_URL}${CHARTS_URL}`;
    const { setShowingDomain } = this.props;
    chartUtils.chartFetcher(query, url, `${side.slice(0, 2)}Dashboard`, () => {
      setShowingDomain(domain.value);
    });
  };

  render() {
    const {
      domain,
      dataType,
      setDataType,
      setDomain,
      side,
      top,
      isLoading,
      setTop,
      col,
      setCol,
    } = this.props;
    const searchBtnClass = classNames(
      'btn',
      'btn-xs',
      'pull-right',
      'btn-search',
      { 'disabled-btn': isLoading }
    );

    return (
      <div className="search-bar clearfix">
        <Dropdown curSelect={domain.text}>
          {
            (side === 'external' ? EX_DOMAIN_TYPES : IN_DOMAIN_TYPES).map((item, idx) =>
              (<li
                key={idx}
                className="option"
                onClick={() => setDomain(item)}
              >
                <a>{item.text}</a>
              </li>))
          }
        </Dropdown>
        <ButtonGroup
          btnList={DATA_TYPES}
          activeBtn={dataType}
          onChange={setDataType}
        />
        <Top top={top} setTop={setTop} />
        <div className="row-slider">
          <OptionSlider onChange={setCol} defaultVal={col} isHide={this.state.smallSize} />
        </div>
        <button
          className={searchBtnClass}
          onClick={() => this.handleSearch(domain, side, dataType, top)}
          disabled={isLoading}
        >
          Search
        </button>
      </div>
    );
  }
}
