import React, {Component} from 'react';
import Datamap from 'datamaps';
import COLORKEYS from '../../../constants/Chart/ColorKeys';
import '../index.less';


class MapChart extends Component{
  constructor(props){
    super(props);
    this.mapPanel = null;
    this.chart = null;
  }

  _resizeMap = ()=>{
    this.mapPanel.style.height = this.mapPanel.offsetWidth*2/3 +'px';
    this.chart.resize();
  }

  _convertData(data){
    var res={};
    for(let i=0, len=data.name.length; i<len;i++){
      res[data.name[i]]={
        fillKey: Math.floor(data.data[i]/1000*430).toString(),
        data: data.data[i]
      };
    }
    return res;
  }

  componentDidMount(){
    this.mapPanel= this.refs.map;
    this.mapPanel.style.height = this.mapPanel.offsetWidth*2/3 +'px';
    const {data}=this.props;

    let config = {
      element: this.mapPanel,
      responsive: true,
      projection: 'mercator',
      fills: COLORKEYS,
      data: this._convertData(data),
      geographyConfig: {
        popupTemplate: function(geo, data) {
          return data? ['<div class="hoverinfo"><strong>',
            'Data of ' + geo.properties.name,
            ': ' + data.data,
            '</strong></div>'].join('') :
            ['<div class="hoverinfo"><strong>',
              geo.properties.name,
              '</strong></div>'].join('');
        }
      }
    };
    this.chart = new Datamap(config);
    window.addEventListener('resize', this._resizeMap);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this._resizeMap);
  }

  render(){
    return  (
      <div className='map' ref='map'></div>
    );
  }
}


export default MapChart;
