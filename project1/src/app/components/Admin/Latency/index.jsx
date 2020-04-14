import React, { Component } from 'react';
import '../Common/common.less';
import './index.less';
import MultiDropdown from '../../Common/MultiDropdown';
import ItemList from './ItemList';


export default class LatencyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      continents: [],
      selContinents: {},
      disabledContinents: {},
      pops: [],
      selPops: {},
    };
    this.isFirst = true;
  }

  componentDidMount() {
    const { initIdc } = this.props;
    initIdc();
  }

  componentWillReceiveProps(nProps) {
    const nextIdcList = nProps.idcList;
    const nextRegionTree = nProps.regionTree;
    const nextSelLatencies = nProps.selLatencies;
    const nextPopList = nProps.popList;
    const regionKeys = Object.keys(nextRegionTree);
    const latencyKeys = Object.keys(nextSelLatencies);
    const isFetching = latencyKeys.some(item => nextSelLatencies[item].isFetching);

    if (this.isFirst && nextIdcList.length !== 0 &&
      regionKeys.length !== 0 && nextPopList.length !== 0
      && nextIdcList.length === latencyKeys.length && !isFetching && this.state.isLoading) {
      this.isFirst = false;
      this.setState({
        isLoading: false,
      });

      const continents = [];
      regionKeys.forEach((regionKey) => {
        continents.push(
          {
            text: regionKey,
            value: regionKey,
            isParent: true,
            children: nextRegionTree[regionKey],
          }
        );
        nextRegionTree[regionKey].forEach((region) => {
          continents.push({ text: region, value: region, parent: regionKey });
        });
      });
      this.setState({
        continents
      });

      const pops = [];
      nextPopList.forEach((item) => {
        pops.push({ text: item.popNm, value: item.popNo.toString() });
      });
      pops.sort((a, b) => (a.text.localeCompare(b.text)));
      this.setState({
        pops
      });

      const selContinents = {};
      const disabledContinents = {};
      const selPops = {};
      latencyKeys.forEach((idcCode) => {
        let selContinentArr = [];
        let selPopArr = [];
        if (nextSelLatencies[idcCode].res && nextSelLatencies[idcCode].res.continentCd) {
          selContinentArr = nextSelLatencies[idcCode].res.continentCd.split(',');
        }
        if (nextSelLatencies[idcCode].res && nextSelLatencies[idcCode].res.popNo) {
          selPopArr = nextSelLatencies[idcCode].res.popNo.split(',');
        }
        selContinents[idcCode] = selContinentArr;
        selPops[idcCode] = selPopArr;

        let disabledArr = [];
        continents.forEach((item) => {
          if (selContinentArr.indexOf(item.value) >= 0) {
            if (item.isParent) {
              disabledArr = disabledArr.concat(item.children);
            }
          }
        });
        disabledContinents[idcCode] = disabledArr;
      });

      this.setState({
        selContinents,
        disabledContinents,
        selPops,
      });
    }
  }

  onSelectContinent = (idcCode, item) => {
    const { saveLatency } = this.props;
    let newSelArr = [];
    if (item && item.value) {
      if (this.state.selContinents[idcCode].indexOf(item.value) !== -1) {
        newSelArr = this.state.selContinents[idcCode].filter(i => i !== item.value);
      } else {
        newSelArr = [...this.state.selContinents[idcCode], item.value];
        if (item.isParent && item.children && item.children.length > 0) {
          item.children.forEach((val) => {
            newSelArr = newSelArr.filter(i => i !== val);
          });
        }
      }
    }
    const param = {
      idcCd: idcCode,
      continentCd: newSelArr.join(','),
      popNo: this.state.selPops[idcCode].join(','),
    };
    saveLatency(param, 'continentCd', this.updateContinentSuccess.bind(this));
  }

  updateContinentSuccess = (idcCode, newSelArr) => {
    let newDisabledArr = [];
    this.state.continents.forEach((itm) => {
      if (newSelArr.indexOf(itm.value) >= 0) {
        if (itm.isParent) {
          newDisabledArr = newDisabledArr.concat(itm.children);
        }
      }
    });
    this.setState({
      selContinents: { ...this.state.selContinents, [idcCode]: newSelArr },
      disabledContinents: { ...this.state.disabledContinents, [idcCode]: newDisabledArr },
    });
  }

  onSelectPop = (idcCode, item) => {
    const { saveLatency } = this.props;
    const newSelPops = this.updateList(this.state.selPops[idcCode], item.value);
    const param = {
      idcCd: idcCode,
      continentCd: this.state.selContinents[idcCode].join(','),
      popNo: newSelPops.join(','),
    };
    saveLatency(param, 'popNo', this.updatePopSuccess.bind(this));
  }

  updatePopSuccess = (idcCode, newSelPops) => {
    this.setState({
      selPops: {
        ...this.state.selPops,
        [idcCode]: newSelPops,
      },
    });
  }

  updateList = (list, value) => {
    let newList = [];
    if (value) {
      if (list.indexOf(value) !== -1) {
        newList = list.filter(i => i !== value);
      } else {
        newList = [...list, value];
      }
    }
    return newList;
  };

  getContinetItemList = (idcCode) => {
    const list = [];
    this.state.selContinents[idcCode].forEach((value) => {
      const selItem = this.state.continents.find(item => item.value === value);
      if (selItem) {
        list.push(selItem);
      }
    });
    return list;
  }

  getPopItemList = (idcCode) => {
    const list = [];
    this.state.selPops[idcCode].forEach((value) => {
      const selItem = this.state.pops.find(item => item.value === value);
      if (selItem) {
        list.push(selItem);
      }
    });
    return list;
  }

  render() {
    const {
      idcList,
    } = this.props;

    return (
      <table className="grid table table-content" style={{ marginBottom: 500 }}>
        <thead>
          <tr>
            <th className="col1">IDC</th>
            <th className="col2">Continent</th>
            <th className="col3">PoP</th>
          </tr>
        </thead>
        {
          this.state.isLoading ?
          (<tbody>
            <tr className="table-loading">
              <td colSpan={3}>
                <div className="spinner"><i className="fa fa-spinner" />&nbsp;loading</div>
              </td>
            </tr>
          </tbody>) :
          (<tbody>
            {
              idcList.map((item, idx) => (
                <tr key={idx}>
                  <td className="text-center">{item.idcNm}</td>
                  <td>
                    <MultiDropdown
                      mult
                      keyId={item.idcCd}
                      list={this.state.continents}
                      selected={this.state.selContinents[item.idcCd]}
                      disabledList={this.state.disabledContinents[item.idcCd]}
                      onSelect={this.onSelectContinent}
                      large
                    />
                    <ItemList
                      code={item.idcCd}
                      list={this.getContinetItemList(item.idcCd)}
                      onRemove={this.onSelectContinent}
                    />
                  </td>
                  <td>
                    <MultiDropdown
                      mult
                      keyId={item.idcCd}
                      list={this.state.pops}
                      selected={this.state.selPops[item.idcCd]}
                      onSelect={this.onSelectPop}
                    />
                    <ItemList
                      code={item.idcCd}
                      list={this.getPopItemList(item.idcCd)}
                      onRemove={this.onSelectPop}
                    />
                  </td>
                </tr>
              ))
            }
          </tbody>)
        }
      </table>
    );
  }
}
