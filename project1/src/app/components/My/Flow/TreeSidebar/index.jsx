import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';
import SearchInput from './SearchInput';
import TreePanel from './TreePanel';
import { Modal, TextInput, DelList, ShareInput } from '../../../InputModal';
import './index.less';


export default class TreeSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenNew: false,
      isOpenShare: false,
      searchKeyTxt: '',
      flGrpNo: '',
      suggestion: {},
      showDialog: false
    };
  }

  componentWillReceiveProps(nProps) {
    if (nProps.shareGrpStatus.error && nProps.shareGrpStatus.error !== ''
    && nProps.shareGrpStatus.error !== this.props.shareGrpStatus.error
    && !this.state.showDialog) {
      this.setState({
        showDialog: true
      });
    }
  }
  setNewModal = (isOpen) => {
    this.setState({
      isOpenNew: isOpen,
    });
  };

  setShareModal = (isOpen, flGrpNo) => {
    this.setState({
      isOpenShare: isOpen,
      flGrpNo,
    });
  };

  setSearchFlag = (searchGrpResults, searchFlowResults) => {
    this.setState({
      searchFlag: { searchGrpResults, searchFlowResults }
    });
    if (searchGrpResults === []) {
      this.setState({
        searchFlag: { ...this.state.searchFlag, searchGrpResults: [] }
      });
    }
    if (searchFlowResults === []) {
      this.setState({
        searchFlag: { ...this.state.searchFlag, searchFlowResults: [] }
      });
    }
  };

  setSearchKey = (val) => {
    this.setState({
      searchKeyTxt: val
    });
  };

  createNewGrp = (state) => {
    const { addFlowGrp, checkGrpName } = this.props;
    if (state.inputText && state.inputText !== 'Unnamed' && state.inputText !== 'Shared') {
      checkGrpName(state.inputText, () => {
        addFlowGrp({ flGrpNm: state.inputText });
        this.setNewModal(false);
      });
    }
  };

  setSeleted = (newValue) => {
    this.setState({
      suggestion: newValue
    });
  };

  shareGrp = () => {
    const { shareFlowGrp, setSearchValue, grpSharedList } = this.props;
    const { flGrpNo, suggestion } = this.state;
    if (suggestion) {
      let shareTo;
      if (suggestion.employeeNo && flGrpNo && grpSharedList && grpSharedList[flGrpNo] &&
        !grpSharedList[flGrpNo].sharedList
        .find(item => item.rcpntNo === suggestion.employeeNo)) {
        shareTo = [{
          employeeNo: suggestion.employeeNo,
          // rcpntTp: 1
        }];
        shareFlowGrp(shareTo, flGrpNo);
      } else if (suggestion.departmentCode && flGrpNo && grpSharedList && grpSharedList[flGrpNo] &&
        !grpSharedList[flGrpNo].sharedList
        .find(item => item.rcpntNo === suggestion.departmentCode)) {
        shareTo = [{
          departmentCode: suggestion.departmentCode,
          // rcpntTp: 2
        }];
        shareFlowGrp(shareTo, flGrpNo);
      }
      this.setShareModal(false);
      this.setState({
        suggestion: undefined
      });
      setSearchValue('');
    }
  };

  render() {
    const {
      flow,
      flowGroup,
      initFlow,
      initFlowGroup,
      curGrp,
      selectedItem,
      setCurGroup,
      updFlow,
      delFlow,
      copyFlow,
      delFlowGrp,
      updFlowGrp,
      sharedFlGrp,
      initSharedFlGrp,
      setSelectedItem,
      moveFlow,
      orderPageFlow,
      curType,
      searchKW,
      suggestResList,
      setSearchValue,
      getSuggest,
      getSuggestSuccess,
      clearSuggest,
      setCurType,
      initGrpSharedList,
      grpSharedList,
      delGrpSharedList,
      shareGrpStatus,
      fetchChart,
      fetchChartStatus,
      checkGrpNmStatus
    } = this.props;
    const { isOpenNew, isOpenShare, searchKeyTxt, flGrpNo } = this.state;

    return (
      <div className="tree-sidebar">
        <div className="ibox-content">
          <div className="btn-grp">
            <SearchInput
              flow={flow}
              flowGroup={flowGroup}
              setSelectedItem={setSelectedItem}
              setSearchKey={this.setSearchKey}
              searchKeyTxt={searchKeyTxt}
            />
            <button
              className="btn btn-xs btn-newgroup"
              onClick={() => this.setNewModal(true)}
            >
              New Group
            </button>
          </div>
          <TreePanel
            flow={flow}
            flowGroup={flowGroup}
            initFlow={initFlow}
            initFlowGroup={initFlowGroup}
            delFlowGrp={delFlowGrp}
            delFlow={delFlow}
            copyFlow={copyFlow}
            moveFlow={moveFlow}
            curGrp={curGrp}
            searchKeyTxt={searchKeyTxt}
            selectedItem={selectedItem}
            selectGrp={setCurGroup}
            updFlow={updFlow}
            initSharedFlGrp={initSharedFlGrp}
            updFlowGrp={updFlowGrp}
            openShare={this.setShareModal}
            setSelectedItem={setSelectedItem}
            sharedFlGrp={sharedFlGrp}
            clearSearchFlag={() => this.searchKeyTxt('')}
            orderPageFlow={orderPageFlow}
            initGrpSharedList={initGrpSharedList}
            fetchChart={fetchChart}
            fetchChartStatus={fetchChartStatus}
          />
          <Modal
            isOpen={isOpenNew}
            confirm={this.createNewGrp}
            close={() => this.setNewModal(false)}
            title="New Group"
            yesText="Create"
          >
            <TextInput
              isError={checkGrpNmStatus && checkGrpNmStatus.res}
              errorInput={['Unnamed', 'Shared']}
              placeholder="Input new group name here"
              maxLength={75}
              focus
            />
          </Modal>
          <Modal
            isOpen={isOpenShare}
            confirm={this.shareGrp}
            close={() => this.setShareModal(false)}
            title="Share"
            yesText="Share"
          >
            <DelList
              delList={grpSharedList[flGrpNo] ? grpSharedList[flGrpNo].sharedList : []}
              flGrpNo={flGrpNo}
              delGrpSharedList={delGrpSharedList}
            />
            <ShareInput
              setSearchValue={setSearchValue}
              getSuggest={getSuggest}
              flGrpNo={flGrpNo}
              getSuggestSuccess={getSuggestSuccess}
              clearSuggest={clearSuggest}
              setCurType={setCurType}
              searchKW={searchKW}
              curType={curType}
              suggestResList={suggestResList}
              setSeleted={this.setSeleted}
              focus
            />
          </Modal>
          <SweetAlert
            show={this.state.showDialog}
            title="Error"
            type="error"
            text={shareGrpStatus.error}
            confirmButtonText="ok"
            showCancelButton={false}
            onConfirm={() => {
              this.setState({
                showDialog: false
              });
            }}
          />
        </div>
      </div>
    );
  }
}
