import React, { Component } from 'react';
import Radio from '../../Common/Radio';


export default class RadioList extends Component {
  render() {
    const { type, onCheck, check } = this.props;

    return (
      <div>
        <Radio
          className="radio-inline"
          id={`${type}Y`}
          name={type}
          title={type}
          text="Y"
          value="Y"
          onCheck={onCheck}
          checked={check === 'Y'}
        />
        <Radio
          className="radio-inline"
          id={`${type}N`}
          name={type}
          title={type}
          text="N"
          value="N"
          onCheck={onCheck}
          checked={check === 'N'}
        />
      </div>
    );
  }
}
