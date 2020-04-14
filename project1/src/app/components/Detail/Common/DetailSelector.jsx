import React, { Component } from 'react';
import classNames from 'classnames';
import Autosuggest from 'react-autosuggest';
import { browserHistory } from 'react-router';
import Dropdown from '../../Common/Dropdown';
import * as exDetailTypes from '../../../constants/Detail/External/DetailTypes';
import * as inDetailTypes from '../../../constants/Detail/Internal/DetailTypes';


export default class DetailSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      ifSearch: false,
      ifSearchRouter: false,
    };
    this.DETAIL_RELATIONS = props.displayType === 'external' ?
    exDetailTypes.DETAIL_RELATIONS :
    inDetailTypes.DETAIL_RELATIONS;

    this.NO_QUERY_FIELD = props.displayType === 'external' ?
    exDetailTypes.NO_QUERY_FIELD :
    inDetailTypes.NO_QUERY_FIELD;

    this.RELATION_MAP = props.displayType === 'external' ?
    exDetailTypes.EX_RELATION_MAP :
    exDetailTypes.IN_RELATION_MAP;

    this.suggestion = undefined;
    this.routerSuggestion = undefined;
  }

  handleClick = (type) => {
    const {
      detailType,
      searchKW,
      routerSearchKW,
      routerSearchID,
      setSearchValue,
      setRouterSearchValue,
      setRouterSearchID,
      onSelect,
      clearSuggest
    } = this.props;

    this.setState({
      isOpen: false
    });
    if (detailType !== type) {
      clearSuggest();
      this.suggestion = undefined;
      this.routerSuggestion = undefined;
      this.setState({
        ifSearch: false,
        ifSearchRouter: false
      });
      if (searchKW !== '') {
        setSearchValue('');
      }
      if (routerSearchKW !== '') {
        setRouterSearchValue('');
      }
      if (routerSearchID !== '' && setRouterSearchID) {
        setRouterSearchID('');
      }
      onSelect(type);
    }
  };

  getSuggestionValue = suggestion => (suggestion.fullName ? suggestion.fullName :
    suggestion.esmNm ? suggestion.esmNm : '');

  renderSuggestion = suggestion => (suggestion.fullName ? suggestion.fullName :
    suggestion.esmNm ? suggestion.esmNm : '');

  onChange = (event, { newValue }) => {
    if (this.suggestion && this.suggestion.fullName !== newValue) {
      this.suggestion = undefined;
    }
    const { setSearchValue } = this.props;

    setSearchValue(newValue);
    this.setState({
      ifSearch: false,
    });
  };

  onSuggestionsFetchRequested = ({ value }, type) => {
    const { getSuggest, routerSearchID } = this.props;
    const val = value ? value.trim() : value;

    if (val) {
      if (type === 'Interface') {
        getSuggest(type, val, this.routerSuggestion ?
          this.routerSuggestion.routerNo : routerSearchID);
      } else {
        getSuggest(type, val);
      }
    }
  };

  onSuggestionsClearRequested = (type) => {
    const { getSuggestSuccess } = this.props;

    getSuggestSuccess(type, []);
  };

  onSuggestionSelected = (event, { suggestion }) => {
    this.suggestion = suggestion;
  };

  handleDetailSearch = (type) => {
    const {
      onSetNavTab,
      displayType,
      clickSearchBtn,
      searchKW,
      searchResList
    } = this.props;

    if (this.suggestion) {
      const query = this.suggestion[this.NO_QUERY_FIELD[type]];

      browserHistory.push(`/${displayType}/detail/${type.toLowerCase()}/${query}`);
      clickSearchBtn(type, query, displayType);
      onSetNavTab('All');
    } else if (searchKW && searchResList[type]) {
      this.suggestion = searchResList[type].res;

      const query = this.suggestion[this.NO_QUERY_FIELD[type]];

      browserHistory.push(`/${displayType}/detail/${type.toLowerCase()}/${query}`);
      clickSearchBtn(type, query, displayType);
      onSetNavTab('All');
    } else {
      this.clearSearchKey();
      this.setState({
        ifSearch: true,
      });
    }
    if (!this.routerSuggestion) {
      this.clearSearchKey();
      this.setState({
        ifSearchRouter: true,
      });
    }
  };

  clearSearchKey = () => {
    const { setSearchValue, setRouterSearchValue } = this.props;

    if (!this.routerSuggestion) {
      setRouterSearchValue('');
    }
    setSearchValue('');
  };

  handleDetailKeyPress = (evt, type) => {
    if (evt.charCode === 13) {
      this.handleDetailSearch(type);
    }
  };

  onSuggestionSelectedRouter = (event, { suggestion }) => {
    this.routerSuggestion = suggestion;
  };

  onChangeRouter = (event, { newValue }) => {
    const { setRouterSearchValue } = this.props;

    if (this.routerSuggestion && this.routerSuggestion.fullName !== newValue) {
      this.routerSuggestion = undefined;
    }
    setRouterSearchValue(newValue);
    this.setState({
      ifSearchRouter: false,
    });
  };

  shouldRenderSuggestions = value => value.trim().length > 1;

  clearContent = () => {
    const {
      searchKW,
      routerSearchKW,
      routerSearchID,
      setSearchValue,
      clearSuggest,
      setRouterSearchValue,
      setRouterSearchID
    } = this.props;

    if (searchKW) {
      setSearchValue('');
      clearSuggest();
      this.suggestion = undefined;
      this.routerSuggestion = undefined;
      if (routerSearchKW !== '') {
        setRouterSearchValue('');
      }
      if (routerSearchID !== '' && setRouterSearchID) {
        setRouterSearchID('');
      }
      this.setState({
        ifSearch: false
      });
    }
  };

  renderOneSearch = (type) => {
    const { searchKW, suggestResList } = this.props;
    const { ifSearch } = this.state;
    const emptyAlert = classNames('react-autosuggest__input', { emptyAlert: ifSearch });
    const inputProps = {
      value: searchKW,
      onChange: this.onChange,
      className: emptyAlert,
      onKeyPress: evt => this.handleDetailKeyPress(evt, type)
    };
    const delBtnClass = classNames('clearbtn', { hide: searchKW === '' });

    return (
      <div className="search-input-wrap">
        <Autosuggest
          suggestions={suggestResList[type] ? suggestResList[type].suggestions : []}
          onSuggestionsFetchRequested={({ value }) =>
            this.onSuggestionsFetchRequested({ value }, type)}
          onSuggestionsClearRequested={() => this.onSuggestionsClearRequested(type)}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps}
          shouldRenderSuggestions={this.shouldRenderSuggestions}
        />
        <a
          className={delBtnClass}
          onClick={this.clearContent}
        >
          <i className="fa fa-times" />
        </a>
        <span className="search-btn">
          <a
            className="link-color"
            onClick={() => this.handleDetailSearch(type)}
          >
            <i className="fa fa-search" />
          </a>
        </span>
      </div>
    );
  };

  renderSearchInput = (type) => {
    if (type === 'AS' ||
      type === 'Router' ||
      type === 'Carrier' ||
      type === 'ESM' ||
      type === 'Line' ||
      type === 'Country' ||
      type === 'PoP' ||
      type === 'IDC') {
      return this.renderOneSearch(type);
    } else if (type === 'Interface') {
      const { suggestResList, searchKW, routerSearchKW } = this.props;
      const { ifSearch, ifSearchRouter } = this.state;
      const emptyRouterAlert = classNames('react-autosuggest__input', { emptyAlert: ifSearchRouter });
      const emptyAlert = classNames('react-autosuggest__input', { emptyAlert: ifSearch });
      const inputPropsRouter = {
        value: routerSearchKW,
        onChange: this.onChangeRouter,
        placeholder: 'Router',
        className: emptyRouterAlert,
      };
      const inputProps = {
        value: searchKW,
        onChange: this.onChange,
        onKeyPress: evt => this.handleDetailKeyPress(evt, type),
        placeholder: 'Interface',
        className: emptyAlert,
      };

      return (
        <div className="search-input-wrap">
          <Autosuggest
            suggestions={suggestResList.Router ? suggestResList.Router.suggestions : []}
            onSuggestionsFetchRequested={({ value }) => this.onSuggestionsFetchRequested({ value }, 'Router')}
            onSuggestionsClearRequested={() => this.onSuggestionsClearRequested('Router')}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            onSuggestionSelected={this.onSuggestionSelectedRouter}
            inputProps={inputPropsRouter}
            shouldRenderSuggestions={this.shouldRenderSuggestions}
          />
          <Autosuggest
            suggestions={suggestResList[type] ? suggestResList[type].suggestions : []}
            onSuggestionsFetchRequested={({ value }) => this.onSuggestionsFetchRequested({ value }, 'Interface')}
            onSuggestionsClearRequested={() => this.onSuggestionsClearRequested(type)}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            onSuggestionSelected={this.onSuggestionSelected}
            inputProps={inputProps}
            shouldRenderSuggestions={this.shouldRenderSuggestions}
          />
          <span className="search-btn">
            <a
              className="link-color"
              onClick={() => this.handleDetailSearch('Interface')}
            >
              <i className="fa fa-search" />
            </a>
          </span>
        </div>
      );
    }
    return '';
  }

  render() {
    const options = Object.keys(this.DETAIL_RELATIONS);
    const { detailType } = this.props;

    return (
      <div className="detail-selector">
        <Dropdown
          isOpen={this.state.isOpen}
          curSelect={detailType}
        >
          {options.map((item, idx) =>
            (<li
              key={idx}
              className="option"
              onClick={() => this.handleClick(item)}
            >
              <a>{item}</a>
            </li>)
          )}
        </Dropdown>
        {this.renderSearchInput(detailType)}
      </div>
    );
  }
}
