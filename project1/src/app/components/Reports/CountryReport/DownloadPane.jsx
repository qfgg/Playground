import React, { Component } from 'react';
import Checkbox from '../../Common/Checkbox';


export default class DownloadPane extends Component {
  render() {
    const { list = [], handleCheck, check, handleDownload } = this.props;

    return (
      <div className="download">
        <ul>
          {
            list.map((item, idx) =>
              (<li key={idx}>
                <Checkbox
                  label={item}
                  checked={check.indexOf(item) !== -1}
                  onCheck={handleCheck.bind(this, item)}
                />
              </li>))
          }
        </ul>
        <div className="btn-download">
          <button
            className="btn btn-xs"
            onClick={handleDownload}
          >
            Download
          </button>
        </div>
      </div>
    );
  }
}
