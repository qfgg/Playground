import React, { Component } from 'react';
import axios from 'axios';
import DropdownInput from './DropdownInput';
import TextInput from './TextInput';
import TextareaInput from './TextareaInput';
import { BASE_URL, FLOW_GROUP_URL } from '../../constants/Url';


export default class ToFlowForm extends Component {
  componentDidMount() {
    const { setDropList, setCurSel } = this.props;
    const defaultUnamed = {
      flGrpNo: 'unnamed',
      flGrpNm: 'Unamed',
      text: 'Unamed'
    };
    axios
      .get(`${BASE_URL}${FLOW_GROUP_URL}`)
      .then((res) => {
        if (res && Array.isArray(res.data)) {
          const droplist = res.data.map(item => ({
            ...item,
            text: item.flGrpNm,
          }));
          droplist.unshift(defaultUnamed);
          setDropList(droplist);
          setCurSel({
            ...droplist[0],
            text: droplist.length > 0 && droplist[0].flGrpNm,
          });
        }
      });
  }

  render() {
    const {
      curSel,
      setCurSel,
      dropList,
      inputText,
      changeInputText,
      inputArea,
      changeInputArea,
      isDupInput
    } = this.props;

    return (
      <table>
        <tbody>
          <tr>
            <td>
              <label>Group</label>
            </td>
            <td>
              <DropdownInput curSel={curSel} dropList={dropList} setCurSel={setCurSel} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Flow</label>
            </td>
            <td>
              <TextInput
                placeholder="Flow title"
                inputText={inputText}
                changeInputText={changeInputText}
                maxLength="75"
                isError={isDupInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Desc</label>
            </td>
            <td>
              <TextareaInput
                placeholder="Description"
                inputArea={inputArea}
                changeInputArea={changeInputArea}
                maxLength="200"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
