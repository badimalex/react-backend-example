import React, { PropTypes } from 'react';

import { Button, Segment, Header, Container } from 'semantic-ui-react';

import Link from '../ui/Link';

import history from 'helpers/history';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
    <GoBackButton />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const GoBackButton = () => (
  <Button onClick={() => history.goBack() }>Назад</Button>
);

const Logo = () => (
  <Segment>
    <Header>
      <Link to='/'>
        Thinknetica Blog
      </Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by react
  </Segment>
);
