import React, {Component} from 'react';
import c3 from 'c3';
import '../index.less';


class BarChart extends Component{
  constructor(props){
    super(props);
    this.chart = null;
  }

  _resize = ()=>{
    const {heightRatio}=this.props;
    let chartnode = this.refs.bar;
    if(heightRatio){
      this.chart.resize({
        height: chartnode.offsetWidth * heightRatio,
        width: chartnode.offsetWidth
      });
    }
  }

  componentDidMount(){
    const {data, stacked, heightRatio}=this.props;
    let chartnode = this.refs.bar;
    let config = {
      bindto: chartnode,
      padding: {
        right: 15
      },
      data: {
        columns: [
            [data.name[0], ...data.data[0]],
            [data.name[1], ...data.data[1]]
        ],
        type: 'bar'
      }
    };
    if(stacked){
      config.data.groups = [[data.name[0], data.name[1]]];
    }
    if(heightRatio){
      config.size = {
        height: chartnode.offsetWidth * heightRatio
      };
    }
    this.chart = c3.generate(config);

    window.addEventListener('resize', this._resize);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this._resize);
  }

  render(){
    return  (
      <div className='bar' ref='bar'></div>
    );
  }
}


export default BarChart;