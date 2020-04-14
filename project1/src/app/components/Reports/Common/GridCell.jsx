import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';
import ChartModal from './ChartModal';
import { flowDataFormatter } from '../../../helper';

export default class GridCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.cellLeft = 0;
    this.mounted = false;
  }

  handleDocumentClick = (evt) => {
    const { isChart } = this.props;
    const { isOpen } = this.state;
    if (this.mounted && isChart && isOpen && ReactDOM.findDOMNode(this.td) &&
      !ReactDOM.findDOMNode(this.td).contains(evt.target)) {
      this.toggleChart();
    }
  };

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  toggleChart = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleOpen = (evt) => {
    this.cellLeft = evt.target.getBoundingClientRect().left;
    if (ReactDOM.findDOMNode(this.modal) &&
      !ReactDOM.findDOMNode(this.modal).contains(evt.target)) {
      this.toggleChart();
    }
  };

  render() {
    const { text, align, isLink, isChart, no, name, side, needNumFormat } = this.props;
    const chartData = side === 'uv' ? TEST_DATA1 : TEST_DATA2;

    return (
      <td
        className={classNames('relative', {
          'text-left': align === 'l',
          'text-right': align === 'r',
          'text-center': !align,
        })}
        onClick={isChart ? this.handleOpen : null}
        ref={c => this.td = c}
      >
        {
          isLink ?
            <Link to="/external/detail" className="link-underline">
              {text}
            </Link> : needNumFormat ?
          flowDataFormatter(text) : text
        }
        {
          isChart ?
            <ChartModal
              ref={c => this.modal = c}
              isOpen={this.state.isOpen}
              left={this.cellLeft}
              data={chartData.find(it => it.no === no && it.col === name)}
            /> : ''
        }
      </td>
    );
  }
}

const TEST_DATA1 = [{
  no: 1,
  col: 'uvmax',
  name: ['1'],
  data: [[100, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 2,
  col: 'uvmax',
  name: ['2'],
  data: [[200, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 3,
  col: 'uvmax',
  name: ['3'],
  data: [[300, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 4,
  col: 'uvmax',
  name: ['4'],
  data: [[400, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 5,
  col: 'uvmax',
  name: ['5'],
  data: [[500, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 1,
  col: 'uvavg',
  name: ['1'],
  data: [[1000, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 2,
  col: 'uvavg',
  name: ['2'],
  data: [[2000, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 3,
  col: 'uvavg',
  name: ['3'],
  data: [[3000, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 4,
  col: 'uvavg',
  name: ['4'],
  data: [[4000, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 5,
  col: 'uvavg',
  name: ['5'],
  data: [[5000, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}];

const TEST_DATA2 = [{
  no: 1,
  col: 'max',
  name: ['1'],
  data: [[100, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 2,
  col: 'max',
  name: ['2'],
  data: [[200, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 3,
  col: 'max',
  name: ['3'],
  data: [[300, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 4,
  col: 'max',
  name: ['4'],
  data: [[400, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 5,
  col: 'max',
  name: ['5'],
  data: [[500, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 1,
  col: 'avg',
  name: ['1'],
  data: [[1000, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 2,
  col: 'avg',
  name: ['2'],
  data: [[2000, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 3,
  col: 'avg',
  name: ['3'],
  data: [[3000, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 4,
  col: 'avg',
  name: ['4'],
  data: [[4000, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 5,
  col: 'avg',
  name: ['5'],
  data: [[5000, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 6,
  col: 'max',
  name: ['1'],
  data: [[100, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 7,
  col: 'max',
  name: ['2'],
  data: [[200, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 8,
  col: 'max',
  name: ['3'],
  data: [[300, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 9,
  col: 'max',
  name: ['4'],
  data: [[400, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 10,
  col: 'max',
  name: ['5'],
  data: [[500, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 6,
  col: 'avg',
  name: ['1'],
  data: [[1000, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 7,
  col: 'avg',
  name: ['2'],
  data: [[2000, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 8,
  col: 'avg',
  name: ['3'],
  data: [[3000, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 9,
  col: 'avg',
  name: ['4'],
  data: [[4000, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}, {
  no: 10,
  col: 'avg',
  name: ['5'],
  data: [[5000, 12, 1, 89, 34, 2, 76, 79, 23, 54, 23, 167, 7, 12, 13, 4, 64, 3, 8, 34]]
}];
