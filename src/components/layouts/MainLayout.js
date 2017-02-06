import React, { PropTypes } from 'react';

import { Button, Segment, Container } from 'semantic-ui-react';

import history from 'helpers/history';

import MainMenu from './elements/MainMenu';

const MainLayout = ({ children }) => (
  <Container>
    <MainMenu />
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
  <p>
    <Button onClick={() => history.goBack() }>Назад</Button>
  </p>
);

const Footer = () => (
  <Segment>
    Powered by react
  </Segment>
);
