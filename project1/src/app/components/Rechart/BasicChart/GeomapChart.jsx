import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Datamap from 'datamaps';
import COLORKEYS from '../../../constants/Chart/ColorKeys';
import COUNTRY_CODE_MAP from '../../../constants/Chart/CountryCodeMap';
import { flowDataFormatter } from '../../../helper';

export default class GeomapChart extends Component {
  constructor(props) {
    super(props);
    this.mapPanel = null;
    this.chart = null;
  }

  resizeMap = () => {
    this.mapPanel.style.height = `${this.mapPanel.offsetWidth * 2 / 3}px`;
    this.chart.resize();
  };

  convertData = (data) => {
    const res = {};
    let max = data[0].value;
    for (let i = 0, len = data.length; i < len; i += 1) {
      if (data[i].value > max) {
        max = data[i].value;
      }
    }
    const ratio = max === 0 ? 1 : 430 / max;
    for (let i = 0, len = data.length; i < len; i += 1) {
      res[COUNTRY_CODE_MAP[data[i].domain.id]] = {
        fillKey: Math.floor(data[i].value * ratio).toString(),
        data: flowDataFormatter(data[i].value),
      };
    }
    return res;
  };

  componentDidMount() {
    this.mapPanel = this.map;
    this.mapPanel.style.height = `${this.mapPanel.offsetWidth * 2 / 3}px`;
    const { data } = this.props;

    const config = {
      element: this.mapPanel,
      responsive: true,
      projection: 'mercator',
      fills: COLORKEYS,
      data: this.convertData(data),
      geographyConfig: {
        popupTemplate(geo, data) {
          return data ? ['<div class="hoverinfo"><strong>',
            `Data of ${geo.properties.name}`,
            `: ${data.data}`,
            '</strong></div>'].join('') :
            ['<div class="hoverinfo"><strong>',
              geo.properties.name,
              '</strong></div>'].join('');
        },
      },
    };
    this.chart = new Datamap(config);
    window.addEventListener('resize', this.resizeMap);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeMap);
  }

  render() {
    return (
      <div className="map" ref={c => this.map = c} />
    );
  }
}

GeomapChart.propTypes = {
  data: PropTypes.array,
};

