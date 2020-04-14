import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Checkbox from '../../Common/Checkbox';


class SplitPopup extends Component{
  constructor(props){
    super(props);
    this.state={
      showPopup: false
    };
  }

  componentDidMount(){
    document.addEventListener('click', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  handleDocumentClick = (evt)=>{
    if(this.refs.popupbtn && !ReactDOM.findDOMNode(this.refs.popup).contains(evt.target) && !ReactDOM.findDOMNode(this.refs.popupbtn).contains(evt.target)){
      this.closeSplit();
    }
  }

  openSplit = ()=>{
    this.setState({
      showPopup: true
    });
  }

  closeSplit = ()=>{
    this.setState({
      showPopup: false
    });
  };

  handleSplit = ()=>{
    this.closeSplit();
    this.props.handleSplit();
  }

  render(){
    let popClass=classNames('split-option', {'show': this.state.showPopup});

    return  (
      <div>
        <div onClick={this.openSplit} ref='popupbtn'>{this.props.children}</div>
        <div className={popClass} ref='popup'>
          <h4>Data Source</h4>
          <div className='checkbox-wrap'>
            <Checkbox onCheck={this.handleCheck} label='ASN'/>
            <Checkbox onCheck={this.handleCheck} label='Router'/>
            <Checkbox onCheck={this.handleCheck} label='Country'/>
          </div>
          <div className='btn-wrap'>
            <button className='btn btn-xs btn-split' onClick={this.handleSplit}>Split</button>
            <button className='btn btn-xs btn-split' onClick={this.closeSplit}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SplitPopup;