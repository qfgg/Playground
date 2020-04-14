import React, { Component } from 'react';

export default class AxisLabel extends Component {

  renderText = (child, x, y, rotate, stroke, key) => {
    if (child && child.content) {
      return (<text
        key={key}
        x={x}
        y={y + 12}
        transform={`rotate(${rotate})`}
        textAnchor="middle"
        stroke={stroke}
        {...child.props}
      >
        {child.content}
      </text>);
    }

    return (<text
      key={key}
      x={x}
      y={y}
      transform={`rotate(${rotate})`}
      textAnchor="middle"
      stroke={stroke}
    >
      {child}
    </text>);
  }

  render() {
    const { axisType, x, y, width, height, stroke, children } = this.props;

    const isVert = axisType === 'yAxis';
    const cx = isVert ? x : x + (width / 2);
    const cy = isVert ? (height / 2) + y : y + height + 20;
    const rot = isVert ? `270 ${cx} ${cy}` : 0;
    const lineHeight = 20;

    if (children.length > 1 && children.map) {
      return (<g>
        {children.map((child, index) =>
          this.renderText(
            child,
            cx,
            cy + index * lineHeight,
            rot,
            stroke,
            index)
        )}
      </g>);
    }

    return this.renderText(children, cx, cy, rot, stroke);
  }
}
