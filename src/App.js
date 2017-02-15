import React from 'react';

import ReactDOM from 'react-dom';

import { Router, browserHistory, match } from 'react-router';
import { Provider } from 'react-redux';

import store from 'store';
import routes from 'routes';
import prepareData from 'helpers/prepareData';

import DevTools from 'containers/DevTools';

function historyCb(location) {
  match({ location, routes }, (error, redirect, state) => {
    if (!error && !redirect) {
      prepareData(store, state);
    }
  });

  return true;
}

browserHistory.listenBefore(historyCb);

historyCb(window.location);

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);

ReactDOM.render(
  <DevTools store={store}/>,
  document.getElementById('devtools')
);

export default App;
