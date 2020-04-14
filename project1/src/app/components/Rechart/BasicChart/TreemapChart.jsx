import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Treemap, ResponsiveContainer } from 'recharts';
import { CHART_COLORS } from '../../../constants/Chart/ChartTypes';
import { flowDataFormatter } from '../../../helper';


class CustomizedContent extends Component {
  render() {
    const { root, depth, x, y, width, height, index, colors, domain } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? colors[index % colors.length] : 'none',
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {
          depth === 1 ?
            <text
              x={x + width / 2}
              y={y + height / 2 - 5}
              textAnchor="middle"
              fill="#fff"
              fontSize={12}
            >
              {(domain || {}).name}
            </text> : null
        }
        {
          depth === 1 ?
            <text
              x={x + width / 2}
              y={y + height / 2 + 7}
              textAnchor="middle"
              fill="#fff"
              fontSize={12}

            >
              {flowDataFormatter(root.children[index].value)}
            </text> : null
        }
      </g>
    );
  }
}

CustomizedContent.propTypes = {
  root: PropTypes.object,
  depth: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  index: PropTypes.number,
  colors: PropTypes.array,
  domain: PropTypes.object,
};

export default class TreemapChart extends Component {
  render() {
    const { aspect, data } = this.props;

    return (
      <ResponsiveContainer aspect={aspect} debounce={1}>
        <Treemap
          data={data}
          dataKey="value"
          isAnimationActive={false}
          content={<CustomizedContent colors={CHART_COLORS} />}
        />
      </ResponsiveContainer>
    );
  }
}

TreemapChart.propTypes = {
  aspect: PropTypes.number,
  data: PropTypes.array,
};
