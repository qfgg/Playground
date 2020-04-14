import React, {Component} from 'react';
import * as d3 from 'd3';
import '../index.less';


class TreemapChart extends Component{
  constructor(props){
    super(props);
    this.treemapPanel = null;
    this.state={
      width: 0
    };
  }

  _resizeTreemap = ()=>{
    this.setState({
      width: this.treemapPanel.offsetWidth
    });
    d3.select(this.treemapPanel).selectAll('.node').remove();
    this._drawTreemap(this.treemapPanel.offsetWidth, this.treemapPanel.offsetWidth * 2/3, this.props.data);
  }

  _drawTreemap(width, height, data){
    var format = d3.format(',d');

    var color = d3.scaleOrdinal()
        .range(d3.schemeCategory10);

    var treemap = d3.treemap()
        .size([width, height])
        .padding(1);

    var root = d3.hierarchy(data)
        .sum(function(d) { return d.value; })
        .sort(function(a, b) { return b.height - a.height || b.value - a.value; });

    treemap(root);

    d3.select(this.treemapPanel)
      .selectAll('.node')
      .data(root.leaves())
      .enter().append('div')
        .attr('class', 'node')
        .attr('title', function(d) { return d.data.id + '\n' + format(d.value); })
        .style('left', function(d) { return d.x0 + 'px'; })
        .style('top', function(d) { return d.y0 + 'px'; })
        .style('width', function(d) { return d.x1 - d.x0 + 'px'; })
        .style('height', function(d) { return d.y1 - d.y0 + 'px'; })
        .style('background', function(d) { while (d.depth > 1) d = d.parent; return color(d.data.id); })
      .append('div')
        .attr('class', 'node-label')
        .text(function(d) { return d.data.id; })
      .append('div')
        .attr('class', 'node-value')
        .text(function(d) { return format(d.value); });
  }

  componentDidMount(){
    this.treemapPanel = this.refs.treemap;
    this.setState({
      width: this.treemapPanel.offsetWidth
    });
    var width = this.treemapPanel.offsetWidth;
    this._drawTreemap(width, width * 2/3, this.props.data);

    window.addEventListener('resize', this._resizeTreemap);
  }

  componentDidUpdate(){
    if(this.treemapPanel.offsetWidth !== this.state.width){
      this._resizeTreemap();
    }
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this._resizeTreemap);
  }

  render(){
    let heightStyle={height: this.state.width * 2/3};

    return  (
      <div className='treemap' ref='treemap' style={heightStyle}></div>
    );
  }
}


export default TreemapChart;