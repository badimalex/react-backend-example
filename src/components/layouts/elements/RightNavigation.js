import React from 'react';
import { Menu } from 'semantic-ui-react';
import Link from 'components/ui/Link';

const RightNavigation = () => (
  <Menu vertical>
      <Menu.Item
        as={Link}
        to='/posts/new'
        activeClassName="active"
      >
      Create post
    </Menu.Item>
  </Menu>
);

export default RightNavigation;
