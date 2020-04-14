import React, { Component } from 'react';
import classNames from 'classnames';
import TriCheckbox from '../../Common/TriCheckbox';


export default class MnTree extends Component {
  toggleTree = (mnNo) => {
    const { isOpen, setOpen } = this.props;
    setOpen(mnNo, !isOpen[mnNo]);
  };

  render() {
    const {
      isLoading,
      root,
      treeClass,
      checkRec,
      editCheckbox,
      partFlag,
      isOpen,
      setOpen
    } = this.props;

    return (
      isLoading ?
        (<div className="spinner">
          <i className="fa fa-spinner" />
        </div>) :
        (<ul className={treeClass}>
          {
            (root || []).map((item, idx) =>
              (<li
                key={idx}
                className={classNames('tree-node', {
                  open: isOpen[item.mnNo]
                })}
              >
                <i
                  className={classNames('tree-icon', 'tree-ocl', {
                    'tree-leaf': !item.sub
                  })}
                  onClick={item.sub ? this.toggleTree.bind(this, item.mnNo) : null}
                />
                <a className="tree-item link-color">
                  <span className="node-content">
                    <TriCheckbox
                      checked={partFlag[item.mnNo] ? 'P' :
                        (checkRec[item.mnNo] === undefined ?
                        item.checkedYn : checkRec[item.mnNo])}
                      disabled={item.authYn !== 'Y'}
                      onCheck={editCheckbox.bind(this, item)}
                    />
                    {item.mnNm}
                  </span>
                </a>
                {
                  item && item.sub && Array.isArray(item.sub) && item.sub.length > 0 ?
                    <MnTree
                      root={item.sub}
                      checkRec={checkRec}
                      editCheckbox={editCheckbox}
                      treeClass={classNames('tree-children', {
                        'hide-subtree': !isOpen[item.mnNo]
                      })}
                      partFlag={partFlag}
                      isOpen={isOpen}
                      setOpen={setOpen}
                    /> : ''
                }
              </li>))
          }
        </ul>)
    );
  }
}
