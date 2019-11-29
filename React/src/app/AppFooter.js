import React, { Component } from 'react';
import {
  Link,
  withRouter,
  Route,
  Switch
} from 'react-router-dom';
import './AppFooter.css';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import * as MenuIcon from '../util/Icons';

const footer = Layout.footer;

const MenuItem = ({ icon: Icon, pathName, ...props }) => (
  <Menu.Item key={pathName} className="app-footer-item" {...props}>
    <Link to={pathName}>
      <Switch>
        <Route path={pathName}>
          <Icon on={true} />
        </Route>
        <Route>
          <Icon on={false} />
        </Route>
      </Switch>
    </Link>
  </Menu.Item>
)

class AppFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let menuItems = [
      <MenuItem key={1} icon={MenuIcon.IconChat}    pathName="/chat" />,
      <MenuItem key={2} icon={MenuIcon.IconOffer}   pathName="/offer" />,
      <MenuItem key={3} icon={MenuIcon.IconSearch}  pathName="/search" />,
      <MenuItem key={4} icon={MenuIcon.IconLiked}   pathName="/liked" />,
      <MenuItem key={5} icon={MenuIcon.IconProfile} pathName={"/users/" + this.props.currentUsername} />
    ];

    return (
      <Menu
        className="app-footer-menu"
        mode="horizontal"
        selectedKeys={[this.props.location.pathname]}
        style={{ lineHeight: '64px' }} >
        {menuItems}
      </Menu>
    );
  }
}

function ProfileDropdownMenu(props) {
  const dropdownMenu = (
    <Menu onClick={props.handleMenuClick} className="profile-dropdown-menu">
      <Menu.Item key="user-info" className="dropdown-item" disabled>
        <div className="user-full-name-info">
          {props.currentUser.name}
        </div>
        <div className="username-info">
          @{props.currentUser.username}
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="profile" className="dropdown-item">
        <Link to={`/users/${props.currentUser.username}`}>Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout" className="dropdown-item">
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={dropdownMenu}
      trigger={['click']}
      getPopupContainer={() => document.getElementsByClassName('profile-menu')[0]}>
      <a className="ant-dropdown-link">
        <Icon type="user" className="nav-Icon" style={{ marginRight: 0 }} /> <Icon type="down" />
      </a>
    </Dropdown>
  );
}


export default withRouter(AppFooter);