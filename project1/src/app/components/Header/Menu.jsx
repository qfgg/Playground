import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import PATH_NAME_MAP from '../../constants/App/Path';


class SubMenuItem extends Component {
  refreshPage = (isActive) => {
    if (isActive) {
      location.reload();
    }
  };

  render() {
    const { menu, routes, mainMenu } = this.props;
    // <IndexRoute> don't have path field
    const isActive = routes.length > 2 &&
      PATH_NAME_MAP[(routes[2].path || '').replace(/\(.*\)/, '')] === menu.name &&
      PATH_NAME_MAP[(routes[1].path || '').replace(/\(.*\)/, '')] === mainMenu;
    const liClass = classNames('sub-li', { active: isActive });

    return (
      <li className={liClass} onClick={() => this.refreshPage(isActive)}>
        <Link to={menu.link}>{menu.name}</Link>
      </li>
    );
  }
}

class SubMenu extends Component {
  render() {
    const { menus, routes, mainMenu } = this.props;

    return (
      <ul className="sub-menu">
        {
          menus.map((menu, idx) =>
            (
              <SubMenuItem key={idx} menu={menu} routes={routes} mainMenu={mainMenu} />
            ))
        }
      </ul>
    );
  }
}

class MenuItem extends Component {
  componentWillMount() {
    const { isOpen, showSubMenu, index } = this.props;
    if (isOpen) {
      showSubMenu(index);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const { isOpen, showSubMenu, index } = nextProps;
      if (this.props.isOpen !== isOpen && isOpen) {
        showSubMenu(index);
      }
    }
  }

  render() {
    const { menu, routes, index, showSubMenuFlag, showSubMenu } = this.props;
    const className = classNames('menu-fontcolor', {
      dropdown: true,
      open: showSubMenuFlag[index],
      active: showSubMenuFlag[index],
      showingSubMenu: showSubMenuFlag[index]
    });

    return (
      <li className={className} onClick={() => showSubMenu(index)}>
        <Link>{menu.name} <span className="caret" /></Link>
        <SubMenu menus={menu.subMenu} routes={routes} mainMenu={menu.name} />
        <div className="subMenu-below" />
      </li>
    );
  }
}

export default class Menu extends Component {
  render() {
    const { menus, routes, showSubMenu, showSubMenuFlag } = this.props;
    return (
      <ul className="nav navbar-nav">
        {
          menus.map((menu, idx) =>
            (
              <MenuItem
                key={idx}
                menu={menu}
                index={idx}
                showSubMenu={showSubMenu}
                showSubMenuFlag={showSubMenuFlag}
                routes={routes}
                isOpen={
                  routes.length > 1 &&
                  menu.name === PATH_NAME_MAP[(routes[1].path || '').replace(/\(.*\)/, '')]
                }
              />
            ))
        }
      </ul>
    );
  }
}
