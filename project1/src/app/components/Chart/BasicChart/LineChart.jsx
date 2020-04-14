import React, {Component} from 'react';
import c3 from 'c3';
import '../index.less';


class LineChart extends Component{
  constructor(props){
    super(props);
    this.chart = null;
    this.state={
      width: 0
    };
  }

  _resize = ()=>{
    const {heightRatio}=this.props;
    let chartnode = this.refs.line;
    if(heightRatio){
      this.chart.resize({
        height: chartnode.offsetWidth * heightRatio,
        width: chartnode.offsetWidth
      });
    }
  }

  _setConfig = (chartnode, data, heightRatio, spline)=>{
    let config = {
      bindto: chartnode,
      padding: {
        right: 15
      },
      point: {
        show: false
      },
      legend: {
        position: 'inset',
        inset: {
          anchor: 'top-left',
          x: 10,
          y: 0,
          step: undefined
        }
      },
      grid: {
        x: {
          show: true
        },
        y: {
          show: true
        }
      },
      data: {
        columns: []
      }
    };
    for(let i=0, len=data.name.length; i<len; i++){
      config.data.columns[i]=[data.name[i], ...data.data[i]];
    }
    if(heightRatio){
      this.setState({
        width: chartnode.offsetWidth
      });
      config.size = {
        height: chartnode.offsetWidth * heightRatio
      };
    }
    if(spline){
      config.data.type = 'spline';
    }
    return config;
  }

  componentDidMount(){
    const {data, spline, heightRatio}=this.props;
    let chartnode = this.refs.line;
    
    this.chart = c3.generate(this._setConfig(chartnode, data, heightRatio, spline));

    window.addEventListener('resize', this._resize);
  }

  componentWillReceiveProps(nProps){
    const {data, spline, heightRatio}=this.props;
    let chartnode = this.refs.line;

    if(JSON.stringify(nProps.data) !== JSON.stringify(data)){
      this.chart = this.chart.destroy();
      this.chart = c3.generate(this._setConfig(chartnode, nProps.data, heightRatio, spline));
    }
  }

  componentDidUpdate(preProps, preState){
    const {heightRatio} = this.props;
    let chartnode = this.refs.line;
    if(heightRatio && preState.width!==chartnode.offsetWidth){
      this.setState({
        width: chartnode.offsetWidth
      });
      this._resize();
    }
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this._resize);
  }

  render(){
    return  (
      <div className='line' ref='line'></div>
    );
  }
}


export default LineChart;