import React from 'react';
import ReactDOMServer from 'react-dom/server';

import BlogPage from './components/containers/BlogPage';
const result = ReactDOMServer.renderToString(
  React.createElement(BlogPage)
);

export default result;
