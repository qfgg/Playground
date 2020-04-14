import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { CHART_TYPES } from '../../../constants/Chart/ChartTypes';


export default class ChartOption extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      showMenu: false,
    });
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  handleDocumentClick = (evt) => {
    if (ReactDOM.findDOMNode(this) && !ReactDOM.findDOMNode(this).contains(evt.target)) {
      this.closeMenu();
    }
  }

  showMenu = () => {
    this.setState({
      showMenu: true,
    });
  };

  closeMenu = () => {
    this.setState({
      showMenu: false,
    });
  };

  handleMenuClick = (name, val) => {
    this.closeMenu();
    let type, stacked;
    if (name === 'Type') {
      switch(val){
      case 'Line':
        type='line';
        break;
      case 'Area':
        type='area';
        break;
      case 'Stack':
        type='area';
        stacked=true;
        break;
      case 'Pie':
        type='pie';
        break;
      case 'GeoMap':
        type='map';
        break;
      case 'TreeMap':
        type='treemap';
        break;
      }
      if (type) {
        this.props.setType(type, stacked);
      }
    }
  }

  render() {
    let menuClass = classNames('top-menu', { show: this.state.showMenu });

    return (
      <div className="chart-option">
        <a className="link-color" onClick={this.showMenu}>
          <i className="fa fa-cog" />
        </a>
        <ul className={menuClass}>
          {
            CHART_TYPES.map((item, idx) =>
              <li key={idx}>
                <i className="fa fa-caret-left" />
                <span>{item.name}</span>
                <ul className="sub-menu">
                  {
                    item.value.map((val, i) =>
                      <li key={i}>
                        <a
                          className="link-color"
                          onClick={() => this.handleMenuClick(item.name, val)}
                        >
                          {val}
                        </a>
                      </li>
                  )}
                </ul>
              </li>
          )}
        </ul>
      </div>
    );
  }
}

ChartOption.propTypes = {
  // isOpen: PropTypes.bool,
  // type: PropTypes.string,
  // initList: PropTypes.func,
  // initListSuccess: PropTypes.func,
  // searchListSuccess: PropTypes.func,
  // selectedIfrouter: PropTypes.object,
  // ifRouterInitResList: PropTypes.array,
  // setSearchingFlag: PropTypes.func,
  // setIFSearchingFlag: PropTypes.func,
  // searchList: PropTypes.func,
  // list: PropTypes.array,
  // routerList: PropTypes.array,
  // searchPage: PropTypes.number,
  // ifSearchPage: PropTypes.number,
  // toggleSelect: PropTypes.func,
  // toggleFavor: PropTypes.func,
  // handleRouterSelect: PropTypes.func,
  // onCancel: PropTypes.func,
  // loading: PropTypes.bool,
  // ifLoading: PropTypes.bool,
  // favorOnly: PropTypes.bool,
  // initPage: PropTypes.func,
  // ifInitPage: PropTypes.func,
};