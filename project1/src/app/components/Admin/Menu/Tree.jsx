import React, { Component } from 'react';
import classNames from 'classnames';


export default class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: {},
      isLeaf: {}
    };
  }

  componentDidMount() {
    const { list, findMenu } = this.props;
    if (list && Array.isArray(list) && list.length === 1 && list[0].mnNo === 0) {
      findMenu(list[0].mnNo, (data) => {
        this.setState({
          isOpen: {
            0: true
          },
          isLeaf: {
            0: !data || !Array.isArray(data) || data.length === 0
          }
        });
      });
    }
  }

  componentDidUpdate(preProps) {
    const { isAddingMenu } = this.props;
    const { isOpen, isLeaf } = this.state;

    if (preProps.isAddingMenu !== false && isAddingMenu === false) {
      this.setState({
        isLeaf: {
          ...isLeaf,
          [preProps.isAddingMenu]: false
        },
        isOpen: {
          ...isOpen,
          [preProps.isAddingMenu]: true
        }
      });
    }
  }

  toggleTree = (mnNo) => {
    const { isOpen, isLeaf } = this.state;
    const { findMenu } = this.props;

    if (isLeaf[mnNo] === undefined) {
      findMenu(mnNo, (data) => {
        this.setState({
          isLeaf: {
            ...isLeaf,
            [mnNo]: !data || !Array.isArray(data) || data.length === 0
          }
        });
      });
    }
    this.setState({
      isOpen: {
        ...isOpen,
        [mnNo]: !isOpen[mnNo]
      }
    });
  };

  render() {
    const { isOpen, isLeaf } = this.state;
    const {
      list,
      menuList,
      treeClass,
      findMenu,
      focusedMenu,
      setFocusMenu,
      isAddingMenu
    } = this.props;

    return (
      <ul className={treeClass}>
        {
          list.map((item, idx) =>
            (<li
              key={idx}
              className={classNames('tree-node', {
                open: isOpen[item.mnNo]
              })}
            >
              <i
                className={classNames('tree-icon', 'tree-ocl', {
                  'tree-leaf': isLeaf[item.mnNo] === true
                })}
                onClick={isLeaf[item.mnNo] === false || isLeaf[item.mnNo] === undefined ?
                  this.toggleTree.bind(this, item.mnNo) : null}
              />
              <a
                className={classNames('tree-item', 'link-color', {
                  'tree-clicked': focusedMenu === item.mnNo
                })}
                onClick={setFocusMenu.bind(this, item.mnNo, item.prntMnNo || 0)}
              >
                {
                  menuList && menuList[item.mnNo] && menuList[item.mnNo].isFetching ?
                  (<div className="spinner">
                    <i className="fa fa-spinner" />
                  </div>) : <span>{item.mnNm}</span>
                }
              </a>
              {
                menuList && menuList[item.mnNo] && menuList[item.mnNo].res &&
                  Array.isArray(menuList[item.mnNo].res) &&
                  menuList[item.mnNo].res.length > 0 ?
                    <Tree
                      menuList={menuList}
                      list={menuList[item.mnNo].res}
                      findMenu={findMenu}
                      focusedMenu={focusedMenu}
                      setFocusMenu={setFocusMenu}
                      isAddingMenu={isAddingMenu}
                      treeClass={classNames('tree-children', {
                        'hide-subtree': !isOpen[item.mnNo]
                      })}
                    /> : ''
              }
            </li>))
        }
      </ul>
    );
  }
}
