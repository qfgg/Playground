import React, { Component } from 'react';
import './index.less';


export default class HelpDesk extends Component {
  // 'height=100, width=400, top=0,left=0, toolbar=no, menubar=no, scrollbars=no,
  // resizable=no,location=no, status=no'
  openPwd = () => {
    window.open('http://im.navercorp.com/selfservice/passwd/temp',
      'newwindow',
      'height=300, width=560, top=0, left=0');
  }

  openHelpDesk = () => {
    window.open('http://im.navercorp.com/selfservice/passwd/setHelpdeskguide',
      'newwindow',
      'height=320, width=600, top=0, left=0');
  }

  render() {
    return (
      <div className="help-desk">
        <ul>
          <li>
            <a onClick={this.openPwd}>
              FORGET USER PASSWORD?
            </a>
          </li>
          <li>
            <a onClick={this.openHelpDesk}>
              HELP DESK
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
