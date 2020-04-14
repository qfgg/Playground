import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import { browserHistory, Link } from 'react-router';
// import { mapFiltersetToList } from '../../../helper';
import Popup from '../Common/Popup';


export default class SetsTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      showPop: false,
    });
    this.isClickPencil = false;
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
    if (!this.mounted) {
      return;
    }
    if (this.setpop !== undefined) {
      if (ReactDOM.findDOMNode(this.setpop) &&
        !ReactDOM.findDOMNode(this.setpop).contains(evt.target) &&
        (evt.target !== this.popbtn)) {
        this.setState({ showPop: false });
      }
    }
    const { editFlag, toggleEditFlag } = this.props;
    if (editFlag && this.input && ReactDOM.findDOMNode(this.input) &&
      !ReactDOM.findDOMNode(this.input).contains(evt.target) &&
      !this.isClickPencil) {
      toggleEditFlag();
    } else {
      this.isClickPencil = false;
    }
  };

  closePopup = () => {
    this.setState({ showPop: false });
  };

  openPopup = () => {
    this.setState({ showPop: true });
  };

  redirectToExplorer = (saveitem) => {
    const { setExSearchQuery, setInSearchQuery } = this.props;
    const isExternal = saveitem.fltrsetTp.toUpperCase() === 'EXTERNAL';
    const link = saveitem.fltrsetTp.toLowerCase() === 'external' ?
      `/external/explorer/filter/${saveitem.fltrsetNo}` :
      `/internal/explorer/filter/${saveitem.fltrsetNo}`;
    const filterset = JSON.parse(saveitem.fltrset);
    if (isExternal) {
      setExSearchQuery(filterset);
    } else {
      setInSearchQuery(filterset);
    }
    browserHistory.push(link);
  }

  handleRemove = (fltrsetNo) => {
    const { deleteMyFiltersets, curPage, entriesPerPage } = this.props;
    deleteMyFiltersets(fltrsetNo, curPage, entriesPerPage);
  };

  handleEdit = () => {
    const { toggleEditFlag } = this.props;
    this.isClickPencil = true;
    toggleEditFlag();
  };

  handleNmKeyPress = (evt, saveitem) => {
    const { updateName, toggleEditFlag, curPage, entriesPerPage } = this.props;
    if (evt.target.value && evt.charCode === 13) {
      if (evt.target.value !== saveitem.fltrsetNm) {
        const payload = {
          fltrsetNo: saveitem.fltrsetNo,
          fltrsetNm: evt.target.value,
          fltrsetTp: null,
          fltrset: null,
          creEmpNo: null,
          creYmdt: null,
          modYmdt: null,
        };
        updateName(saveitem.fltrsetNo, payload, curPage, entriesPerPage);
      }
      toggleEditFlag();
    }
  };

  handleQuit = (evt) => {
    if (evt.keyCode === 27) {
      const { toggleEditFlag } = this.props;
      toggleEditFlag();
    }
  };

  handleFocus = (evt) => {
    evt.target.select();
  };

  render() {
    const { saveitem, editFlag } = this.props;
    const filterset = JSON.parse(saveitem.fltrset);
    const addedDate = moment(new Date(saveitem.creYmdt));
    const link = saveitem.fltrsetTp.toLowerCase() === 'external' ?
      `/external/explorer/filter/${saveitem.fltrsetNo}` :
      `/internal/explorer/filter/${saveitem.fltrsetNo}`;

    return (
      <tr>
        <td className="text-center">{saveitem.fltrsetNo}</td>
        <td className="text-center">
          {
            saveitem.fltrsetTp.toLowerCase()[0].toUpperCase() +
              saveitem.fltrsetTp.toLowerCase().slice(1)
          }
        </td>
        <td className="text-left">
          {
            editFlag ?
              <input
                type="text"
                className="form-control name-input"
                ref={c => this.input = c}
                defaultValue={saveitem.fltrsetNm}
                onKeyPress={evt => this.handleNmKeyPress(evt, saveitem)}
                onKeyDown={evt => this.handleQuit(evt, 'node')}
                onFocus={this.handleFocus}
                maxLength="20"
              /> : (
                <span>
                  <a
                    onClick={() => this.openPopup()}
                    ref={c => this.popbtn = c}
                    className="link-color"
                  >
                    {saveitem.fltrsetNm}
                  </a>
                  <a
                    className="rename-btn"
                    onClick={this.handleEdit}
                  >
                    <i className="fa fa-pencil" title="Edit the name" />
                  </a>
                </span>
              )
          }
          <Popup
            type="filterset"
            ref={c => this.setpop = c}
            item={saveitem}
            filterset={filterset}
            showPop={this.state.showPop}
            onPopClose={() => this.closePopup()}
            filToExplorer={() => this.redirectToExplorer(saveitem)}
          />
        </td>
        <td className="text-center">
          {addedDate.format('YYYY-MM-DD HH:mm')}
        </td>
        <td className="text-center">
          <Link to={link} className="link-color">
            <i className="fa fa-share" title="ToExplorer" />
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a className="link-color">
            <i
              className="fa fa-times"
              title="Remove this filterset"
              onClick={() => this.handleRemove(saveitem.fltrsetNo)}
            />
          </a>
        </td>
      </tr>
    );
  }
}

SetsTableRow.propTypes = {
  deleteMyFiltersets: PropTypes.func,
  curPage: PropTypes.number,
  entriesPerPage: PropTypes.number,
  toggleEditFlag: PropTypes.func,
  updateName: PropTypes.func,
  saveitem: PropTypes.object,
  editFlag: PropTypes.bool,
};
