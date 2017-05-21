import React from 'react';

import { Menu } from 'semantic-ui-react';

import Link from 'components/ui/Link';

import './MainMenu.css';

const MainMenu = () => (
  <Menu stackable className="main-menu">
    <Menu.Item
      as={Link}
      to='/'
    >
      Thinknetica Blog
    </Menu.Item>
    <Menu.Item
      as={Link}
      to='/about'
      activeClassName="active"
    >
      About
    </Menu.Item>
  </Menu>
);

export default MainMenu;
