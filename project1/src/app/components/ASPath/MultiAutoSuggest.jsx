import React, { Component } from 'react';
import classNames from 'classnames';


export default class MultiAutoSuggest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputArr: [],
      searchKW: '',
      isOpen: false,
      isDisabled: true,
      keySelectedIdx: -1,
    };
    this.endWord = '';
    this.lastEndWord = '';
    this.typeVal = '';
    this.frontStr = '';
  }

  setSearchValue = (newVal) => {
    this.setState({
      searchKW: newVal
    });
  };

  // get the tail string(only contains letter/number)
  // for getting suggestion
  getLastNm = (val) => {
    const len = val.length;
    const allSignExp = /[\^|$_+]/;
    for (let i = len - 1; i >= 0; i--) {
      if (allSignExp.test(val[i])) {
        return val.slice(i + 1);
      }
    }
    return val;
  };

  // // process typing into the search input
  // processTyping = (searchKW, val, oldLen, newLen, inputArr, signExp, allSignExp,
  //   asnameExp, keySelectedIdx) => {
  //   if (keySelectedIdx > -1) {  // not allow typing when selecting item with keyboard
  //     return;
  //   }
  //   // insert
  //   if (searchKW[oldLen - 1] === val[newLen - 1]) {
  //   // only support insert '^' into the start if no '^' exists
  //     if (searchKW.indexOf('^') === -1 && val[0] === '^') {
  //       this.setState({
  //         inputArr: ['^', ...inputArr]
  //       });
  //       this.setSearchValue(val);
  //     }
  //     return;
  //   }
  //   // append
  //   // forbid input if:
  //   // 1. first letter is one of '|_+$'
  //   // 2. type in sign right after a sign
  //   // 3. type in anything after $
  //   // 4. type in '^' not at the beginning
  //   // 5. type in letter/number right after an asname
  //   // 6. type in sign right after a string that is not an asname
  //   if ((newLen === 1 && signExp.test(val[0])) ||
  //     (allSignExp.test(searchKW[oldLen - 1]) && allSignExp.test(val[newLen - 1])) ||
  //     searchKW[oldLen - 1] === '$' ||
  //     (newLen > 1 && val[newLen - 1] === '^') ||
  //     (this.oldEndWord && asnameExp.test(val[newLen - 1]) &&
  //     inputArr.find(item => item.fullName === this.oldEndWord)) ||
  //     (this.oldEndWord && allSignExp.test(val[newLen - 1]) &&
  //     !inputArr.find(item => item.fullName === this.oldEndWord))) {
  //     return;
  //   }
  //   this.endWord = this.getLastNm(val);
  //   if (allSignExp.test(val[newLen - 1])) {
  //   // if type in a sign, hide auto-suggestion, add the sign to inputArr.
  //   // if type in '$', active search button; otherwise disable search button
  //     this.setState({
  //       isOpen: false,
  //       isDisabled: val[newLen - 1] !== '$',
  //       inputArr: [...inputArr, val[newLen - 1]]
  //     });
  //   } else if (this.endWord.length > 1) {
  //   // if type in more than 2 letters/numbers, get suggestion and open dropdown list
  //     this.setState({
  //       isOpen: true
  //     });
  //     const { getSuggest } = this.props;
  //     getSuggest(this.endWord);
  //   }
  //   this.setSearchValue(val);
  // };

  // process typing into the search input
  processTypingSimple = (searchKW, val, oldLen, newLen, inputArr, signExp, allSignExp,
    asnameExp, keySelectedIdx) => {
    const singleSignExp = /(^(?=.*_)(?!.*\+)(?!.*\|))|(^(?=.*\|)(?!.*\+)(?!.*_))|(^(?=.*\+)(?!.*_)(?!.*\|))|(^(?!.*\+)(?!.*_)(?!.*\|))/;
    // not allow typing when selecting item with keyboard
    if (keySelectedIdx > -1) {
      return;
    }
    // insert
    if (searchKW[oldLen - 1] === val[newLen - 1] && searchKW !== val.slice(0, -1)) {
      // only support insert '^' into the start if no '^' exists
      if (searchKW.indexOf('^') === -1 && val[0] === '^') {
        this.setState({
          inputArr: ['^', ...inputArr]
        });
        this.setSearchValue(val);
      }
      return;
    }
    // append
    // forbid input if:
    // 1. first letter is one of '|_+$'
    // 2. type in sign right after a sign
    // 3. type in anything after $
    // 4. type in '^' not at the beginning
    // 5. type in letter/number right after an asname
    // 6. type in sign right after a string that is not an asname
    // 7. only allows 1 infix symbol
    if ((newLen === 1 && signExp.test(val[0])) ||
      (allSignExp.test(searchKW[oldLen - 1]) && allSignExp.test(val[newLen - 1])) ||
      searchKW[oldLen - 1] === '$' ||
      (newLen > 1 && val[newLen - 1] === '^') ||
      (this.oldEndWord && asnameExp.test(val[newLen - 1]) &&
      inputArr.find(item => item.fullName === this.oldEndWord)) ||
      (this.oldEndWord && allSignExp.test(val[newLen - 1]) &&
      !inputArr.find(item => item.fullName === this.oldEndWord)) ||
      !singleSignExp.test(val)) {
      return;
    }
    this.endWord = this.getLastNm(val);
    if (allSignExp.test(val[newLen - 1])) {
    // if type in a sign, hide auto-suggestion, add the sign to inputArr.
    // if type in '$', active search button; otherwise disable search button
      this.setState({
        isOpen: false,
        isDisabled: val[newLen - 1] !== '$',
        inputArr: [...inputArr, val[newLen - 1]]
      });
    } else if (this.endWord.length > 1) {
    // if type in more than 2 letters/numbers, get suggestion and open dropdown list
      this.setState({
        isOpen: true
      });
      const { getSuggest } = this.props;
      getSuggest(this.endWord);
    }
    this.setSearchValue(val);
  };

  // process deleting letter in the search input
  processDeleting = (searchKW, val, oldLen, newLen, inputArr, allSignExp, keySelectedIdx) => {
    if (keySelectedIdx > -1) {
    // not allow deleting when selecting item with keyboard
      return;
    }
    if (searchKW[oldLen - 1] === val[newLen - 1] && searchKW.slice(0, -1) !== val) {
      if (searchKW[0] === '^' && val.indexOf('^') === -1) {
      // only support deleting '^' if starting with it
        this.setState({
          inputArr: inputArr.slice(1)
        });
        this.setSearchValue(val);
      }
      return;
    }
    this.endWord = this.getLastNm(val);
    if (allSignExp.test(searchKW[oldLen - 1])) {
    // if delete a sign, hide suggestion. if new value isn't empty,
    // active search button. remove the last element of inputArr
      this.setState({
        isOpen: false,
        isDisabled: !val,
        inputArr: inputArr.slice(0, -1)
      });
      this.setSearchValue(val);
    } else if (inputArr.find(item => item.fullName === this.oldEndWord)) {
    // if delete the tail of an as name, delete the whole name
      this.setState({
        isOpen: false,
        isDisabled: true,
        inputArr: inputArr.slice(0, -1)
      });
      this.setSearchValue(searchKW.slice(0, -this.oldEndWord.length));
    } else {  // if delete a letter/number when typing is not finished
      if (this.endWord.length < 2) {
      // hide suggestion if the tail word contains no more than 2 letters
        this.setState({
          isOpen: false
        });
      } else {   // otherwise, get new suggestion for new tail word after deleting
        const { getSuggest } = this.props;
        getSuggest(this.endWord);
      }
      this.setSearchValue(val);
    }
  };

  // handle any value change of the search input
  handleType = (evt) => {
    const { searchKW, inputArr, keySelectedIdx } = this.state;
    const allSignExp = /[\^|$_+]/;
    const signExp = /[|$_+]/;
    const asnameExp = /[^^|$_+]/;
    const val = evt.target.value;
    this.oldEndWord = this.getLastNm(searchKW);
    const oldLen = searchKW.length;
    const newLen = val.length;
    if (newLen - oldLen === 1) {  // if type
      // this.processTyping(searchKW, val, oldLen, newLen, inputArr, signExp,
      //   allSignExp, asnameExp, keySelectedIdx);
      this.processTypingSimple(searchKW, val, oldLen, newLen, inputArr, signExp,
        allSignExp, asnameExp, keySelectedIdx);
    } else if (oldLen - newLen === 1) {  // if delete
      this.processDeleting(searchKW, val, oldLen, newLen, inputArr, allSignExp,
        keySelectedIdx);
    }
  };

  // handle select an item from the auto suggestion dropdown list
  handleSelect = (item) => {
    const { inputArr, searchKW } = this.state;
    const endWordLen = this.endWord.length;
    this.setState({
      inputArr: [...inputArr, item],
      searchKW: searchKW.slice(0, -endWordLen) + item.fullName,
      isOpen: false,
      isDisabled: false
    });
    this.searchInput.focus();
  };

  // search for matched path with the query circumstance
  handleSearch = () => {
    const { searchPath } = this.props;
    const { inputArr } = this.state;
    let arr = [...inputArr];
    const len = arr.length;
    let head = {};
    let tail = {};
    let query;
    if (arr[0] === '^') {
      head = { first: arr[1].asNo };
    }
    if (arr[len - 1] === '$') {
      tail = { last: arr[len - 2].asNo };
    }
    if (arr[0] === '^' && arr[len - 1] !== '$') {
      if (len === 2) {
        query = head;
      } else {
        arr = arr.slice(2);
        query = { ...head, query: arr.map(item => item.asNo || item).join('') };
      }
    } else if (arr[0] !== '^' && arr[len - 1] === '$') {
      if (len === 2) {
        query = tail;
      } else {
        arr = arr.slice(0, -2);
        query = { query: arr.map(item => item.asNo || item).join(''), ...tail };
      }
    } else if (arr[0] === '^' && arr[len - 1] === '$') {
      if (len === 3) {
        query = { ...head, ...tail };
      } else {
        arr = arr.slice(2, -2);
        query = { ...head, ...tail, query: arr.map(item => item.asNo || item).join('') };
      }
    } else {
      query = { query: arr.map(item => item.asNo || item).join('') };
    }
    searchPath(query);
  };

  // handle arrow key and enter key events to select an item in auto suggestion dropdown list
  handleKeyboard = (evt) => {
    const { suggestions } = this.props;
    const { isOpen, searchKW, keySelectedIdx, inputArr } = this.state;

    if (keySelectedIdx === -1 && evt.keyCode === 40) {
    // if the index is -1 and press down key, it is the beginning of keyboard selection
      this.typeVal = this.getLastNm(this.searchInput.value);
      this.frontStr = searchKW.slice(0, -this.typeVal.length);
    }
    if (evt.keyCode === 38) {   // prevent cursor getting back to the beginning
      evt.preventDefault();
    }
    if (evt.keyCode === 38 && keySelectedIdx > -1 && isOpen && suggestions.length) {
    // press up key, only process when the index is larger than -1 and suggestions are active
      this.setState({
        searchKW: keySelectedIdx > 0 ? this.frontStr + suggestions[keySelectedIdx - 1].fullName :
          this.frontStr + this.typeVal,
        keySelectedIdx: keySelectedIdx - 1
      });
    } else if (evt.keyCode === 40 && keySelectedIdx < 9 && isOpen && suggestions.length) {
    // press down key, only process when the index is less than 9 and suggestions are active
      this.setState({
        searchKW: keySelectedIdx >= -1 ? this.frontStr + suggestions[keySelectedIdx + 1].fullName :
          this.frontStr + this.typeVal,
        keySelectedIdx: keySelectedIdx + 1
      });
    } else if (keySelectedIdx > -1 && evt.key === 'Enter') {   // handle selection if pressing enter key
      this.setState({
        inputArr: [...inputArr, suggestions[keySelectedIdx]],
        isOpen: false,
        isDisabled: false,
        keySelectedIdx: -1
      });
      this.typeVal = '';
      this.frontStr = '';
    } else if (keySelectedIdx === -1 && evt.key === 'Enter') {
      this.handleSearch();
    }
  }

  render() {
    const { suggestions } = this.props;
    const { searchKW, isOpen, isDisabled, keySelectedIdx } = this.state;
    const list = isOpen ? suggestions : [];

    return (
      <div className="search-bar">
        <div className="search-input">
          <input
            type="text"
            className="form-control"
            value={searchKW}
            onChange={this.handleType}
            onKeyDown={this.handleKeyboard}
            ref={c => this.searchInput = c}
          />
          <ul>
            {
              list.map((item, idx) => (
                <li
                  key={idx}
                  className={classNames({ focused: idx === keySelectedIdx })}
                  onClick={() => this.handleSelect(item)}
                >
                  <a>{item.fullName}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <button
          className="btn btn-white search-btn fa fa-search"
          disabled={isDisabled}
          onClick={this.handleSearch}
        />
        <div className="search-hint"><i>EX: B$, B_C_D, B+C ,^A, A | B | C</i></div>
      </div>
    );
  }
}
