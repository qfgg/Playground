import React, {Component} from 'react';
import AreaChart from '../BasicChart/AreaChart';
import BarChart from '../BasicChart/BarChart';
import BarLineChart from '../BasicChart/BarLineChart';
import LineChart from '../BasicChart/LineChart';
import TimeLineChart from '../BasicChart/TimeLineChart';
import MapChart from '../BasicChart/MapChart';
import PieChart from '../BasicChart/PieChart';
import TreemapChart from '../BasicChart/TreemapChart';


class CommonChart extends Component{
  render(){
    const {type, heightRatio, subtype, data, stacked} = this.props;

    switch(type){
    case 'bar':
      return <BarChart data={data} heightRatio={3/7} stacked={stacked}/>;
    case 'line':
      return <LineChart data={data} heightRatio={heightRatio? heightRatio : 3/7} spline={subtype==='spline'}/>;
    case 'timeline':
      return <TimeLineChart data={data} heightRatio={3/7} spline={subtype==='spline'}/>;
    case 'map':
      return <MapChart data={data}/>;
    case 'treemap':
      return <TreemapChart data={data}/>;
    case 'barline':
      return <BarLineChart data={data} heightRatio={3/7}/>;
    case 'area':
      return <AreaChart data={data} heightRatio={3/7} stacked={stacked} spline={subtype==='spline'}/>;
    case 'pie':
      return <PieChart data={data} heightRatio={3/7}/>;
    }
  }
}

export default CommonChart;