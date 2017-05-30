import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';

import Helmet from 'react-helmet';

import { compact } from 'lodash/array';

import webpackAsset from './webpackAsset';

import createStore from 'store';
import routes from 'routes';

import prepareData from 'helpers/prepareData';

const store = createStore();

export default (req, res, next) => {
  match({ routes, location: req.url },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (renderProps) {
        return Promise.all(
          compact(prepareData(store, renderProps))
        ).then(() => {
          const initialState = JSON.stringify(store.getState());

          const content = ReactDOMServer.renderToString(
            React.createElement(
              Provider,
              { store }
              , React.createElement(RouterContext, renderProps)
            )
          );

          const head = Helmet.rewind();

          res.status(200);
          res.render(
            'index',
            { initialState, content, head, webpackAsset }
          );
        })
        .catch(function(err) {
          next(err);
        });
      } else {
        res.status(404).send('Not Found');
      }
    }
  );
};
