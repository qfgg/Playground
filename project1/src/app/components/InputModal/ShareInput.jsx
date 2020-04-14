import React, { Component } from 'react';
import classNames from 'classnames';
import Autosuggest from 'react-autosuggest';
import Dropdown from '../Common/Dropdown';


export default class ShareInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      ifSearch: false,
    };
    this.suggestion = undefined;
  }

  handleClick(type) {
    const {
      curType,
      searchKW,
      setSearchValue,
      setCurType,
      clearSuggest
    } = this.props;

    this.setState({
      isOpen: false
    });
    if (curType !== type) {
      clearSuggest();
      this.suggestion = undefined;
      this.setState({
        ifSearch: false
      });
      if (searchKW !== '') {
        setSearchValue('');
      }
      this.setState({
        curType: type
      });
      setCurType(type);
    }
  }

  getSuggestionValue = suggestion => (suggestion.employeeNo ?
    `${suggestion.employeeName}(${suggestion.employeeNo}) ${suggestion.departmentName}` :
    suggestion.departmentCode ? suggestion.departmentName : '');

  renderSuggestion = suggestion => (suggestion.employeeNo ?
    `${suggestion.employeeName}(${suggestion.employeeNo}) ${suggestion.departmentName}` :
    suggestion.wholeDepartmentCode ? suggestion.wholeDepartmentName : '');

  onChange = (event, { newValue }) => {
    const { setSearchValue } = this.props;
    setSearchValue(newValue);
    this.setState({
      ifSearch: false
    });
  };

  onSuggestionsFetchRequested = ({ value }, type) => {
    const { getSuggest, flGrpNo } = this.props;
    const val = value ? value.trim() : value;
    if (val) {
      getSuggest(type, val, flGrpNo);
    }
  };

  onSuggestionsClearRequested = (type) => {
    const { getSuggestSuccess } = this.props;
    getSuggestSuccess(type, []);
  };

  onSuggestionSelected = (event, { suggestion }) => {
    const { setSeleted } = this.props;
    this.suggestion = suggestion;
    setSeleted(suggestion);
  };

  // handleShare = () => {
  //   if (this.suggestion) {
  //     // shareToOther(this.suggestion);
  //     window.console.log('toshare', this.suggestion);
  //   } else {
  //     this.setState({
  //       ifSearch: true
  //     });
  //   }

  //   this.suggestion = undefined;
  // };

  // handleKeyPress = (evt, type) => {
  //   if (evt.charCode === 13) {
  //     this.handleShare(type);
  //   }
  // };


  shouldRenderSuggestions = value => value.trim().length > 1;

  clearContent = () => {
    const { searchKW, setSearchValue, clearSuggest } = this.props;
    if (searchKW) {
      setSearchValue('');
      clearSuggest();
      this.suggestion = undefined;
      this.setState({
        ifSearch: false
      });
    }
  };


  render() {
    const placeholders = {
      Employee: 'Input mail/Employee ID here',
      Department: 'Input Department name here'
    };
    const options = Object.keys(placeholders);
    const { ifSearch } = this.state;
    const { curType, searchKW, suggestResList } = this.props;
    const emptyAlert = classNames('react-autosuggest__input', { emptyAlert: ifSearch });
    const inputProps = {
      value: searchKW,
      onChange: this.onChange,
      className: emptyAlert,
      placeholder: placeholders[curType],
      // onKeyPress: evt => this.handleKeyPress(evt, curType)
    };
    const delBtnClass = classNames('clearbtn', { hide: searchKW === '' });

    return (
      <div className="share-input">
        <div className="search-input-wrap">
          <Autosuggest
            suggestions={suggestResList[curType] ? suggestResList[curType].suggestions : []}
            onSuggestionsFetchRequested={({ value }) =>
              this.onSuggestionsFetchRequested({ value }, curType)}
            onSuggestionsClearRequested={() => this.onSuggestionsClearRequested(curType)}
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
        </div>
        <Dropdown
          isOpen={this.state.isOpen}
          curSelect={curType}
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
      </div>
    );
  }
}
