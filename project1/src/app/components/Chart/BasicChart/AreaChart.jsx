import React, {Component} from 'react';
import c3 from 'c3';
import '../index.less';


class AreaChart extends Component{
  constructor(props){
    super(props);
    this.chart = null;
  }

  _resize = ()=>{
    const {heightRatio}=this.props;
    let chartnode = this.refs.area;
    if(heightRatio){
      this.chart.resize({
        height: chartnode.offsetWidth * heightRatio,
        width: chartnode.offsetWidth
      });
    }
  }

  _setConfig = (chartnode, data, heightRatio, spline, stacked)=>{
    let config = {
      bindto: chartnode,
      padding: {
        right: 15
      },
      point: {
        show: false
      },
      data: {
        columns: [
            [data.name[0], ...data.data[0]]
        ]
      }
    };
    if(data.name.length===2){
      config.data.columns[1]=[data.name[1], ...data.data[1]];
    }
    if(heightRatio){
      this.setState({
        width: chartnode.offsetWidth
      });
      config.size = {
        height: chartnode.offsetWidth * heightRatio
      };
    }
    if(stacked){
      config.data.groups = [[data.name[0], data.name[1]]];
    }
    config.data.type = spline? 'area-spline' : 'area';
    return config;
  }

  componentDidMount(){
    const {data, stacked, spline, heightRatio}=this.props;
    let chartnode = this.refs.area;
    
    this.chart = c3.generate(this._setConfig(chartnode, data, heightRatio, spline, stacked));

    window.addEventListener('resize', this._resize);
  }

  componentWillReceiveProps(nextProp){
    const {stacked, data} = this.props;
    if(nextProp.stacked!==stacked){
      if(nextProp.stacked){
        this.chart.groups([[data.name[0], data.name[1]]]);
      }else{
        this.chart.groups([[]]);
      }
    }
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this._resize);
  }

  render(){
    return  (
      <div className='area' ref='area'></div>
    );
  }
}


export default AreaChart;