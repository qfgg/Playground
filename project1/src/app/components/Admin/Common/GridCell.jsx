import React, { Component } from 'react';
import classNames from 'classnames';
import moment from 'moment';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import Checkbox from '../../Common/Checkbox';
import {
  BASE_URL,
  DETAIL_SUGGEST_URL,
} from '../../../constants/Url';


export default class GridCell extends Component {
  constructor() {
    super();
    this.state = {
      modOne: '',
      empty: false,
      suggestions: [],
      checked: false,
      isEdit: false
    };
    this.suggestions = [];
  }
  componentDidMount() {
    if (!this.props.autoSuggest) {
      this.setState({
        modOne: this.props.text
      });
    }
  }
  componentWillReceiveProps(nprop) {
    if (!this.props.autoSuggest && this.props.text !== nprop.text) {
      this.setState({
        modOne: nprop.text
      });
    }
  }
  handleChangeText = (evt) => {
    this.suggestions = [];
    this.setState({
      empty: false,
      checked: false,
      isEdit: true,
    });
    let value = '';
    const { name, handleModText, item, regRule, autoSuggest } = this.props;
    if (!autoSuggest && evt && evt.target.value.length > 0 && regRule
    && !regRule.test(evt.target.value)) {
      value = this.state.modOne;
    } else {
      value = evt.target.value;
    }
    this.setState({
      modOne: value,
      suggestions: []
    });
    handleModText(item, name, value);
  };

  validationAdd = () => {
    const { autoSuggest, regRule } = this.props;
    if (this.state.modOne === '') {
      this.setState({
        empty: true
      });
      return false;
    }
    if (autoSuggest && this.state.modOne !== '' && this.suggestions.length === 0) {
      this.setState({
        empty: true
      });
      return false;
    }
    if (regRule && !regRule.test(this.state.modOne)) {
      this.setState({
        empty: true
      });
      return false;
    }
    this.setState({
      empty: false
    });
    return true;
  };

  checkSuggestion = () => {
    if (this.props.autoSuggest && this.state.modOne !== '' && this.suggestions.length === 0 && !this.state.checked) {
      this.setState({
        empty: true
      });
      return false;
    }
    this.setState({
      empty: false
    });
    return true;
  };

  clearAll = () => {
    this.setState({
      modOne: this.props.text,
      empty: false,
      suggestions: [],
      checked: false,
      isEdit: false,
    });
  };

  setModOne = (val) => {
    this.setState({
      isEdit: true,
      modOne: val,
    });
  }

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const { feildType } = this.props;
    const suggestUrlObj = DETAIL_SUGGEST_URL[feildType];
    const suggestUrl = feildType === 'AS' ?
      suggestUrlObj.all.map(item => `${item}${inputValue}`).join('') :
      feildType === 'Country' ? suggestUrlObj.all.map(item => `${item}${inputValue}`).join('') :
      `${suggestUrlObj.nm}${inputValue}`;
    if (inputLength > 0) {
      axios.get(`${BASE_URL}${suggestUrl}`)
      .then((res) => {
        this.setState({
          suggestions: Array.isArray(res.data) ? res.data : []
        });
      });
    }
  };

  getSuggestionValue = suggestion => suggestion.fullName;

  renderSuggestion = suggestion => (
    <div>
      {suggestion.fullName}
    </div>
  );

  onSuggestionsFetchRequested = ({ value }) => {
    this.getSuggestions(value);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    const { name, handleModText, item, relateField } = this.props;
    this.suggestions = this.state.suggestions;
    this.setState({
      modOne: suggestion[name],
      checked: true,
    });
    const relateItem = { field: relateField, value: suggestion[relateField] };
    handleModText(item, name, suggestion[name], relateItem);
  };

  render() {
    const {
      text,
      align,
      attrEdit,
      isEditing,
      placeholder,
      cusutomstyle,
      isDateTime,
      autoSuggest,
      isCheck,
      checked,
      onCheck
    } = this.props;
    const { modOne, empty, suggestions, isEdit } = this.state;
    const emptyAlert = classNames('react-autosuggest__input', { inpWarn: empty });
    const inputProps = {
      placeholder: this.props.placeholder,
      value: isEdit ? modOne : text,
      className: emptyAlert,
      onChange: this.handleChangeText,
    };

    return (
      <td
        className={classNames('relative', {
          'text-left': align === 'l',
          'text-right': align === 'r',
          'text-center': !align,
        })}
        style={cusutomstyle || {}}
      >
        {
          isEditing && attrEdit ?
            autoSuggest ?
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                getSuggestionValue={this.getSuggestionValue}
                onSuggestionSelected={this.onSuggestionSelected}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
              /> :
              <input
                type="text"
                className={empty ? 'text-center inpWarn' : 'text-center'}
                placeholder={placeholder || ''}
                value={isEdit ? modOne : text}
                onChange={this.handleChangeText}
              /> :
              <span>
                {
                  isDateTime ? moment(new Date(text)).format('YYYY-MM-DD') :
                    isCheck ? <Checkbox checked={checked} onCheck={onCheck} /> :
                    text
                }
              </span>
        }
      </td>
    );
  }
}
