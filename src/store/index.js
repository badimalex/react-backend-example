import { createStore, applyMiddleware, compose } from 'redux';

import APIMiddleware from 'middleware/API';
import DevTools from 'containers/DevTools';

import reducers from 'reducers';

const store = (initialState) => createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(APIMiddleware),
    DevTools.instrument()
  )
);

export default store;
