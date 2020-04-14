import React, {Component} from 'react';
import CommonChart from './CommonChart';


class SplitPanel extends Component{
  //function to generate random dummy data
  _gen(n){
    var arr=[];
    for(let i=0; i<n; i++){
      arr[i]=Math.floor(Math.random()*1001);
    }

    return arr;
  }

  render(){
    const {type, subtype, stacked} = this.props;
    let data = [{
      name: ['d'],
      data: [this._gen(5)],
      time: [['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05']]
    },{
      name: ['d'],
      data: [this._gen(5)],
      time: [['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05']]
    },{
      name: ['d'],
      data: [this._gen(5)],
      time: [['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05']]
    }];

    return  (
      <div className='split-panel'>
        <div className='chart-pane'>
          <div className='ibox-title'>as23-cr1-kr</div>
          <div className='ibox-content no-padding withtop'><CommonChart data={data[0]} type={type} subtype={subtype} stacked={stacked}/></div>
        </div>
        <div className='chart-pane'>
          <div className='ibox-title'>as23-cr1-jp</div>
          <div className='ibox-content no-padding withtop'><CommonChart data={data[1]} type={type} subtype={subtype} stacked={stacked}/></div>
        </div>
        <div className='chart-pane'>
          <div className='ibox-title'>as23-cr1-cn</div>
          <div className='ibox-content no-padding withtop'><CommonChart data={data[2]} type={type} subtype={subtype} stacked={stacked}/></div>
        </div>
      </div>
    );
  }
}

export default SplitPanel;