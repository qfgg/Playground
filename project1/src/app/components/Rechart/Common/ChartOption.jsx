import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import axios from 'axios';
import { CHART_TYPES, FLOW_CHART_TYPES, CHART_TYPES_EXP } from '../../../constants/Chart/ChartTypes';
import { BASE_URL, FLOW_SAVE_URL, CHECK_FLNM_URL } from '../../../constants/Url';
import { Modal, ToFlowForm } from '../../InputModal';
import chartUtils from '../../../../lib/chartUtils';
import './index.less';


export default class ChartOption extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      showMenu: false,
      isOpenModal: false,
      isDupInput: false
    });
    this.mounted = false;
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  handleDocumentClick = (evt) => {
    if (this.mounted && ReactDOM.findDOMNode(this) &&
      !ReactDOM.findDOMNode(this).contains(evt.target)) {
      this.closeMenu();
    }
  };

  showMenu = () => {
    this.setState({
      showMenu: true,
    });
  };

  closeMenu = () => {
    this.setState({
      showMenu: false,
    });
  };

  setOpenModal = (isOpen) => {
    this.setState({
      isOpenModal: isOpen,
    });
    if (!isOpen) {
      this.setState({
        isDupInput: false
      });
    }
  };

  handleMenuClick = (name, val) => {
    const {
      setType,
      downloadXls,
      downloadPNG,
      setDownloadFlag,
      sendToExplorer
    } = this.props;

    this.closeMenu();
    if (name === 'Type') {
      setType(val.toLowerCase());
    } else if (name === 'Export') {
      switch (val) {
      case 'Data':
        if (setDownloadFlag) {
          setDownloadFlag();
        }
        downloadXls();
        break;

      case 'Image':
        downloadPNG();
        break;

      case 'To MyFlow':
        this.setOpenModal(true);
        break;

      case 'To Explorer':
        sendToExplorer();
        break;

      default:
        break;
      }
    }
  };

  getReqParam = (baseReqParam, topParam, periodParam, exploreParam, text, area) => {
    const { searchNm, hasSideParam } = this.props;
    const flFltrset = {
      type: baseReqParam.sideType,
      requestType: baseReqParam.requestType,
      server: exploreParam ? exploreParam.server : undefined,
      user: exploreParam ? exploreParam.user : undefined,
      src: exploreParam ? exploreParam.src : undefined,
      dst: exploreParam ? exploreParam.dst : undefined,
      protocol: exploreParam ? exploreParam.protocol : undefined,
      tcpFlag: exploreParam ? exploreParam.tcpFlag : undefined,
      packetSize: exploreParam ? exploreParam.packetSize : undefined,
      fieldType: baseReqParam.fieldType,
      // fieldValue: baseReqParam.fieldValue,
      // domainType: baseReqParam.domainNm,
      // domainValue: baseReqParam.domainNo,
      fieldTopLimit: baseReqParam.fieldTopLimit, // dashboard's top
      top: topParam, // only for explorer page
      directionType: baseReqParam.directionType,
      itemType: baseReqParam.itemType,
      period: periodParam,
      aggregation: baseReqParam.aggregation,
      interval: baseReqParam.interval,
      compareTime: baseReqParam.compareTime,
      showDiff: baseReqParam.showDiff,
    };
    if (hasSideParam) {
      const domain = baseReqParam.domainNm === 'as' ? 'asn' : baseReqParam.domainNm;
      const id = baseReqParam.domainNo;
      const side = domain === 'asn' || domain === 'country' ? 'user' :
        (baseReqParam.sideType === 'internal' && domain === 'esm') ||
        domain === 'idc' ? 'dst' : 'server';
      flFltrset[side] = {
        [domain]: {
          value: [id],
          name: [searchNm]
        }
      };
    }

    for (const item in flFltrset) {
      if (!flFltrset[item] || flFltrset[item] === '') {
        delete flFltrset[item];
      }
    }

    const flow = {
      requestType: baseReqParam.requestType,
      flGrpNo: baseReqParam.flGrpNo,
      flNm: text || 'Unnamed',
      desc: area || '',
      flFltrset: JSON.stringify(flFltrset),
    };
    return flow;
  };

  toFlow = (state) => {
    if (!state.curSel && state.inputText === '') {
      return;
    }
    this.setState({
      isDupInput: false
    });

    axios.get(`${BASE_URL}${CHECK_FLNM_URL[0]}${state.inputText}${CHECK_FLNM_URL[1]}${state.curSel.flGrpNo}`)
      .then((res) => {
        if (res && res.data === -1) {
          const {
            sideType,
            reqType,
            domainNm,
            domainNo,
            itemType = 'traffic',
            periodParam,
            fieldType = null,
            // fieldValue = null,
            fieldTopLimit = 0,
            direction = 'all',
            interval = '1m',
            aggregation = 'avg',
            compareTime = '',
            topParam = null,
            diff = null,
            exploreParam = null,
          } = this.props;
          const baseReqParam = {
            flGrpNo: state.curSel.flGrpNo,
            sideType,
            requestType: reqType,
            domainNm,
            domainNo,
            fieldTopLimit,
            fieldType,
            // fieldValue,
            directionType: direction,
            itemType,
            interval,
            aggregation,
            compareTime,
            showDiff: diff === null ? reqType === 'compare_dashboard' : diff,
          };
          const flow = this.getReqParam(baseReqParam, topParam, periodParam,
            exploreParam, state.inputText, state.inputArea);
          const reqUrl = `${BASE_URL}${FLOW_SAVE_URL}`;
          chartUtils.chartFetcher(flow, reqUrl, 'toMyFlow');
          this.setOpenModal(false);
        } else {
          this.setState({
            isDupInput: true
          });
        }
      });
  };

  render() {
    const { isOpenModal, isDupInput } = this.state;
    const { forbidToFlow, reqType } = this.props;
    const optionTypes = forbidToFlow ? FLOW_CHART_TYPES :
      (reqType === 'dashboard' || reqType.split('_')[0] === 'detail' ?
      CHART_TYPES_EXP : CHART_TYPES);
    const menuClass = classNames('top-menu', { show: this.state.showMenu });

    return (
      <div className="chart-option">
        <a className="link-color" onClick={this.showMenu}>
          <i className="fa fa-cog" />
        </a>
        <ul className={menuClass}>
          {
            optionTypes.map((item, idx) =>
              (<li key={idx}>
                <i className="fa fa-caret-left" /><span>{item.name}</span>
                <ul className="sub-menu">
                  {
                    item.value.map((val, i) =>
                      (<li key={i}>
                        <a
                          className="link-color"
                          onClick={() => this.handleMenuClick(item.name, val)}
                        >
                          {val}
                        </a>
                      </li>)
                  )}
                </ul>
              </li>))
          }
        </ul>
        <Modal
          isOpen={isOpenModal}
          confirm={this.toFlow}
          close={() => this.setOpenModal(false)}
          title="Add to My flow"
          yesText="Save"
        >
          <ToFlowForm isDupInput={isDupInput} />
        </Modal>
      </div>
    );
  }
}
