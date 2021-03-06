import React from 'react';
import PropTypes from 'prop-types';

import { Button, Segment, Container } from 'semantic-ui-react';

import history from 'helpers/history';

import MainMenu from './elements/MainMenu';

const MainLayout = ({ children, location }) => (
  <Container>
    <MainMenu />
     { location.pathname == '/' ? '' : <GoBackButton /> }
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
};

export default MainLayout;

const GoBackButton = () => (
  <p>
    <Button onClick={() => history.goBack() }>Back</Button>
  </p>
);

const Footer = () => (
  <Segment>
    Powered by react
  </Segment>
);
