import React, {Component} from 'react';
import c3 from 'c3';
import '../index.less';


class BarLineChart extends Component{
  constructor(props){
    super(props);
    this.chart = null;
  }

  _resize = ()=>{
    const {heightRatio}=this.props;
    let chartnode = this.refs.barline;
    if(heightRatio){
      this.chart.resize({
        height: chartnode.offsetWidth * heightRatio,
        width: chartnode.offsetWidth
      });
    }
  }

  componentDidMount(){
    const {data, heightRatio}=this.props;
    let chartnode = this.refs.barline;
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
          [data.name[0], ...data.data[0]],
          [data.name[1], ...data.data[1]]
        ],
        types: {
          [data.name[1]]: 'bar'
        }
      }
    };
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
      <div className='barline' ref='barline'></div>
    );
  }
}


export default BarLineChart;