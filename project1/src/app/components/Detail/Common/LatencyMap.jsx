import React, { Component } from 'react';
import CommonChart from '../../Rechart/Common/CommonChart';


export default class LatencyMap extends Component {
  convertToMap = data =>
    data.map(item => ({
      domain: {
        id: item.countryCd
      },
      value: item.avgLatency
    }));

  render() {
    const { data } = this.props;
    const hasData = data && data.res && Array.isArray(data.res);
    const mapData = hasData ? this.convertToMap(data.res) : [];

    return (
      <div className="ibox-content summary-wrap">
        {
          data && data.isFetching ?
            (<div className="ibox-content withtop">
              <div className="spinner">
                <i className="fa fa-spinner" />
              </div>
            </div>) : hasData ?
              <CommonChart
                data={mapData}
                type="geomap"
              /> : null
        }
      </div>
    );
  }
}
