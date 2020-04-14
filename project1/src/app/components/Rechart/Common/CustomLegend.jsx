import React, { Component } from 'react';
import { flowDataFormatter } from '../../../helper';
import { CHART_COLORS } from '../../../constants/Chart/ChartTypes';
import './index.less';

export default class CustomLegend extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      open: false,
      showToggle: true,
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(nextProps) !== JSON.stringify(this.props)
    || nextState.open !== this.state.open || nextState.showToggle !== this.state.showToggle;
  }
  componentWillReceiveProps(nextProp) {
    if (nextProp.stack !== this.props.stack || nextProp.shouldClose !== this.props.shouldClose) {
      this.setState({
        open: false
      });
    }
    if (JSON.stringify(nextProp) !== JSON.stringify(this.props)) {
      if (this.legendUl.clientHeight <= 18) {
        this.setState({
          showToggle: false,
        });
      } else {
        this.setState({
          showToggle: true,
        });
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.getBlockXY) this.props.getBlockXY();
    if (JSON.stringify(this.props.chartNm) === JSON.stringify(prevProps.chartNm)) return;
    if (this.legendUl.clientHeight <= 18) {
      this.setState({
        showToggle: false,
        open: false
      });
    } else {
      this.setState({
        showToggle: true,
        open: false
      });
    }
  }

  clickHander = (key) => {
    const { clickHander } = this.props;
    clickHander(key);
  }
  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  }
  renderItem = () => {
    const { chartNm, stat, opacity } = this.props;
    const ItemArr = [];
    let index = 0;
    for (const key in chartNm) {
      ItemArr.push(
        <li key={key} onClick={() => this.clickHander(key)}>
          <i
            className="iconfont icon-legend"
            style={{ color: opacity[key] === 0 ?
              '#cdcdcd' : CHART_COLORS[index % CHART_COLORS.length] }}
          />
          {`${chartNm[key]}`}{stat ?
            ` (Avg:${flowDataFormatter(stat[key].avg)} Min:${flowDataFormatter(stat[key].min)} Max:${flowDataFormatter(stat[key].max)} Last:${flowDataFormatter(stat[key].last)})` : ''}
        </li>
      );
      index++;
    }
    return ItemArr;
  }

  render() {
    return (
      <div className={this.state.open ? 'legend-box open' : 'legend-box'}>
        <div className="custom-legend">
          <ul className="custom-legend-ul" ref={c => this.legendUl = c}>
            {
              this.renderItem()
            }
          </ul>
        </div>
        <div className="toggle-block">
          <a className="toggle-btn" onClick={this.toggleOpen} style={{ display: this.state.showToggle ? 'block' : 'none' }}><i className="fa" /></a>
        </div>
      </div>
    );
  }
}
