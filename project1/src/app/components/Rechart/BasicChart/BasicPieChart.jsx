import React, { Component } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { CHART_COLORS } from '../../../constants/Chart/ChartTypes';
import { flowDataFormatter } from '../../../helper';

const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius,
  fill, value, name }) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + outerRadius * cos;
  const sy = cy + outerRadius * sin;
  const mx = cx + (outerRadius + 10) * cos;
  const my = cy + (outerRadius + 10) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 12;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill={fill}
      >
        {`${name}: ${flowDataFormatter(value)}`}
      </text>
    </g>
  );
};

export default class BasicPieChart extends Component {
  render() {
    const { data, aspect } = this.props;
    const convertData = data.map(item => ({ name: item.domain.name, value: item.value }));

    return (
      <ResponsiveContainer aspect={aspect} debounce={1}>
        <PieChart>
          <Pie
            data={convertData}
            isAnimationActive={false}
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {
              convertData.map((entry, index) =>
                <Cell key={index} fill={CHART_COLORS[index % CHART_COLORS.length]} />)
            }
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
