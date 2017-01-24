import MainLayout from 'components/layouts/MainLayout';

import { postsPath } from 'helpers/routes';

import BlogPage from 'components/containers/BlogPage';
import Post from 'components/containers/Post';

const Index = {
  path: '/',
  component: BlogPage
};

const PostRoute = {
  path: postsPath(),
  component: Post
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute
  ]
};
