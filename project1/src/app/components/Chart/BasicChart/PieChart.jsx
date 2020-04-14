import React, {Component} from 'react';
import c3 from 'c3';
import '../index.less';


class PieChart extends Component{
  constructor(props){
    super(props);
    this.chart = null;
  }

  _resize = ()=>{
    const {heightRatio}=this.props;
    let chartnode = this.refs.pie;
    if(heightRatio){
      this.chart.resize({
        height: chartnode.offsetWidth * heightRatio,
        width: chartnode.offsetWidth
      });
    }
  }

  _setConfig = (chartnode, data, heightRatio)=>{
    let config = {
      bindto: chartnode,
      padding: {
        right: 15
      },
      data: {
        columns: [
            [data.name[0], ...data.data[0]]
        ],
        type: 'pie'
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
    return config;
  }

  componentDidMount(){
    const {data, heightRatio}=this.props;
    let chartnode = this.refs.pie;
    
    this.chart = c3.generate(this._setConfig(chartnode, data, heightRatio));

    window.addEventListener('resize', this._resize);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this._resize);
  }

  render(){
    return  (
      <div className='pie' ref='pie'></div>
    );
  }
}


export default PieChart;