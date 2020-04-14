import React, { Component } from 'react';
import { TIME_ZONE, LANGUAGE } from '../../constants/Login/SelectOption';
import './index.less';


export default class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTimeZone: 'Asia/Shanghai:+8',
      curLanguage: 'zh-CN',
    };
  }

  componentWillMount() {
    const localTimeZone = this.getLocalTimeZone();
    TIME_ZONE.map((item) => {
      if (item.value.split(':')[1] === localTimeZone) {
        this.setState({ curTimeZone: item.value });
      }
    });
    this.setState({ curLanguage: this.getLocalLanguage() });
  }

  getLocalTimeZone = () => {
    const timeZoneNum = -new Date().getTimezoneOffset() / 60;
    return timeZoneNum >= 0 ? `+${timeZoneNum}` : `-${timeZoneNum}`;
  }

  getLocalLanguage = () => {
    if (navigator.language) {
      return navigator.language;
    }
    return navigator.browserLanguage;
  }

  timeZoneChangehandler = (event) => {
    this.setState({
      curTimeZone: event.target.value,
    });
  }

  languageChangehandler = (event) => {
    this.setState({
      curLanguage: event.target.value,
    });
  }

  render() {
    return (
      <div className="sel-box">
        <div className="gmt">
          <label htmlFor="option_time" className="blind">Time Zone</label>
          <select
            id="option_time"
            value={this.state.curTimeZone}
            onChange={this.timeZoneChangehandler}
          >
            {
              TIME_ZONE ? (TIME_ZONE.map((item, idx) =>
                <option key={idx} value={item.value}>{item.text}</option>)) : ''
            }
          </select>
        </div>
        <div className="many-lang">
          <label htmlFor="option_lan" className="blind">Language</label>
          <select
            id="option_lan"
            value={this.state.curLanguage}
            onChange={this.languageChangehandler}
          >
            {
              LANGUAGE ? (LANGUAGE.map((item, idx) =>
                <option key={idx} value={item.value}>{item.text}</option>)) : ''
            }
          </select>
        </div>
      </div>
    );
  }
}
