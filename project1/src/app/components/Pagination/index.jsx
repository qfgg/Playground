import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = { goPage: 1 };
    this.hasOmit = false;
    this.isInnerChange = false;
    this.MaxBtnNum = 10;
    this.BtnStart2Cur = 3;
    this.ShowTotal = false;
  }

  setCurPage = (curPage, target) => {
    if (target !== curPage) {
      const { setCurPage } = this.props;

      setCurPage(target);
      this.setState({ goPage: target });
    }
  };

  moveBackward = () => {
    const { totalCnt, curPage, setCurPage } = this.props;

    if (totalCnt > 0 && curPage > 1) {
      setCurPage(curPage - 1);
    }
  };

  moveForward = () => {
    const { totalCnt, curPage, setCurPage } = this.props;

    if (totalCnt > 0 && curPage < totalCnt) {
      setCurPage(curPage + 1);
    }
  };

  createBtnGrp = () => {
    const { totalCnt, curPage } = this.props;

    if (!totalCnt) {
      return (
        <button className="btn btn-xs btn-white active">1</button>
      );
    }

    const startTemp = curPage - this.BtnStart2Cur;
    let start = startTemp < 1 ? 1 : startTemp;
    const endTemp = start + this.MaxBtnNum - 1;
    const end = endTemp > totalCnt ? totalCnt : endTemp;
    start = (end - start + 1) < this.MaxBtnNum ?
        (totalCnt - this.MaxBtnNum + 1) : start;
    start = Math.max(1, start);

    const btnGrp = [];
    for (let i = start; i <= end; i += 1) {
      btnGrp.push(
        <button
          key={i - 1}
          className={
            classNames(
              'btn',
              'btn-xs',
              'btn-white',
              { active: i === curPage }
            )
          }
          onClick={() => this.setCurPage(curPage, i)}
        >
          {i}
        </button>
      );
    }

    this.hasOmit = end < totalCnt;

    if (this.hasOmit) {
      btnGrp.push(
        <b
          key="omit"
          className={
            classNames(
              'btn',
              'btn-xs',
              'btn-white',
              'btn-omit'
            )
          }
        >
          ...
        </b>
      );
    }
    return btnGrp;
  };

  handleOnChange = (evt) => {
    this.isInnerChange = true;
    const { totalCnt } = this.props;

    let pageValue = parseInt(evt.target.value, 10) > totalCnt ?
      totalCnt : parseInt(evt.target.value, 10) === 0 ?
      1 : parseInt(evt.target.value);
    pageValue = evt.target.value === '' ? '' : !isNaN(pageValue) ?
      pageValue : this.state.goPage;
    this.setState({ goPage: pageValue });
  };

  handleOnClick = () => {
    const { totalCnt, setCurPage } = this.props;
    const { goPage } = this.state;

    if (totalCnt > 0 && goPage !== '') {
      setCurPage(goPage);
      this.isInnerChange = false;
    }
  };

  handleEnterKeyPress = (evt) => {
    if (evt.charCode === 13) {
      this.handleOnClick();
    }
  };

  render() {
    const { totalCnt, curPage } = this.props;
    return (
      <div className="pagination-wrap">
        <div className="btn-group">
          <button
            className="btn btn-xs btn-white"
            type="button"
            onClick={this.moveBackward}
          >
            <i className="fa fa-chevron-left" />
          </button>
          { this.createBtnGrp() }
          <button
            className="btn btn-xs btn-white"
            type="button"
            onClick={this.moveForward}
          >
            <i className="fa fa-chevron-right" />
          </button>
        </div>
        <div className="p-skip">
          {this.ShowTotal ?
            <em>Total:<b>{totalCnt}</b>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Page:</em> :
            <em style={{ marginTop: 2 }}>Page:</em>
          }
          <input
            className="form-control"
            type="text"
            value={this.isInnerChange ? this.state.goPage : curPage}
            onChange={this.handleOnChange}
            onKeyPress={this.handleEnterKeyPress}
            onBlur={() => { this.isInnerChange = false; }}
          />
          <button
            className="btn-ok btn-xs btn-white"
            type="button"
            onClick={this.handleOnClick}
          >
            GO
          </button>
        </div>
      </div>
    );
  }
}
