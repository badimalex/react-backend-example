import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './App';

import '../semantic/dist/semantic.min.css';
import 'react-dates/lib/css/_datepicker.css';

const rootEl = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
