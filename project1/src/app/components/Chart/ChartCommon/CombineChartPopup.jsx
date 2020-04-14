import React, {Component} from 'react';
import classNames from 'classnames';
import CommonChart from './CommonChart';
import SplitPanel from './SplitPanel';
import SplitPopup from './SplitPopup';


class CombineChartPopup extends Component{
  constructor(props){
    super(props);
    this.state={
      renderSplit: false
    };
  }

  _renderChart(show, data, type, subtype, stacked){
    if(!show){
      return '';
    }
    return <CommonChart data={data} type={type} subtype={subtype} stacked={stacked}/>;
  }

  handleSplit = ()=>{
    this.setState({
      renderSplit: true
    });
  }

  _renderSplitBtn = (split)=>{
    return split? <SplitPopup handleSplit={this.handleSplit}>
                    <a className='wide-btn-split'>Split</a>
                  </SplitPopup> : '';
  }

  _renderSplitPanel = (show, split, type, subtype, stacked)=>{
    if(!show || !split){
      return '';
    }
    return this.state.renderSplit? <SplitPanel type={type} subtype={subtype} stacked={stacked}/> : '';
  }

  render(){
    const {name, data, type, subtype, stacked, show, split} = this.props;
    let popClass = classNames('pop-chart', {'show': show});

    return  (
      <div className={popClass}>
        <div className="ibox-title">
          <h3>{name}</h3>
        </div>
        <div className='ibox-content no-padding withtop'>
          <div className="canvas">
            {this._renderChart(show, data, type, subtype, stacked)}
          </div>
          {this._renderSplitBtn(split)}
          {this._renderSplitPanel(show, split, type, subtype, stacked)}
          <div className='btn-wrap'>
            <a className='btn btn-w-m btn-xs pop-btn' onClick={()=>this.props.closeCombine()}>Close</a>
          </div>
        </div>
      </div>
    );
  }
}

export default CombineChartPopup;