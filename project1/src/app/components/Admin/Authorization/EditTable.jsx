import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Autosuggest from 'react-autosuggest';
import classNames from 'classnames';


export default class EditTable extends Component {
  componentDidUpdate() {
    if (this.props.isEditing && this.props.isEditing.id && this.input) {
      this.input.focus();
    }
    const autoInput = this.auto ?
      ReactDOM.findDOMNode(this.auto).getElementsByTagName('input')[0] : null;
    if (this.props.isEditing && this.props.isEditing.id && autoInput) {
      autoInput.focus();
    }
  }

  render() {
    const {
      list,
      header,
      field,
      isEditing,
      idField,
      onDoubleClick,
      onDel,
      onInput,
      onChange,
      onEnter,
      onClickRow,
      focusedRow,
      changed,
      allDel,
      autoList,
      autoProps,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion,
      onSuggestionSelected,
      shouldRenderSuggestions,
      editable,
      isInitiating,
      isHead,
      isBody,
      notop
    } = this.props;
    const tableClass = classNames('grid', 'table', 'table-content',
      'table-hover', 'margin', 'bottom', { notop });

    return (
      <table className={tableClass}>
        {
          isBody ? null :
            (<thead>
              <tr>
                {
                  (header || []).map((item, idx) =>
                    (<th
                      key={idx}
                      className={classNames({
                        'text-left': item.align === 'l',
                        'text-right': item.align === 'r',
                        'text-center': !item.align,
                      })}
                      style={{ width: item.width, minWidth: item.minWidth }}
                    >
                      {item.text}
                    </th>))
                }
              </tr>
            </thead>)
        }
        {
          isHead ? null :
            isInitiating ?
              (<tbody>
                <tr className="table-loading">
                  <td colSpan={(header || []).length}>
                    <div className="spinner"><i className="fa fa-spinner" />&nbsp;loading</div>
                  </td>
                </tr>
              </tbody>) :
              (<tbody>
                {
                  (list || []).map((item, idx) =>
                    (<tr
                      key={idx}
                      className={classNames({
                        'focus-row': item[idField] === focusedRow
                      })}
                      onClick={onClickRow ? onClickRow.bind(this, item[idField]) : null}
                    >
                      {
                        (field || []).map((f, i) =>
                          (<td
                            key={i}
                            className={classNames({
                              'text-left': f.align === 'l',
                              'text-right': f.align === 'r',
                              'text-center': !f.align,
                            })}
                            style={{ width: f.width, minWidth: f.minWidth }}
                            onDoubleClick={item.modifyYn === 'Y' ||
                              (editable && editable.indexOf(item[f.name]) !== -1) ?
                              onDoubleClick.bind(this, item[idField], i) : null}
                          >
                            {
                              isEditing && isEditing.id === item[idField] && isEditing.idx === i ?
                                (isEditing.auto ?
                                  <Autosuggest
                                    suggestions={autoList || []}
                                    onSuggestionsFetchRequested={({ value }) =>
                                      onSuggestionsFetchRequested({ value })}
                                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                                    getSuggestionValue={getSuggestionValue}
                                    renderSuggestion={renderSuggestion}
                                    onSuggestionSelected={onSuggestionSelected}
                                    inputProps={autoProps}
                                    shouldRenderSuggestions={shouldRenderSuggestions}
                                    ref={c => this.auto = c}
                                  /> :
                                  <input
                                    type="text"
                                    onClick={onInput}
                                    value={changed[`${item[idField]}_${i}`] || item[f.name] || ''}
                                    onChange={evt => onChange(evt, item[f.name] || '', `${item[idField]}_${i}`)}
                                    onKeyPress={onEnter}
                                    ref={c => this.input = c}
                                  />) : f.isDelBtn && (item.modifyYn === 'Y' || allDel) ?
                                    <span
                                      className="fa fa-times cursors"
                                      title="delete this item"
                                      onClick={onDel.bind(this, item[idField])}
                                    /> :
                                    <span
                                      className={changed ?
                                        classNames({ dirty: changed[`${item[idField]}_${i}`] }) : null}
                                    >
                                      {
                                        item[idField] < 0 && idField === 'employeeNo' ? '' : (changed ?
                                          changed[`${item[idField]}_${i}`] || item[f.name] || '' : item[f.name] || '')
                                      }
                                    </span>
                            }
                          </td>))
                      }
                    </tr>))
                }
              </tbody>)
          }
      </table>
    );
  }
}
