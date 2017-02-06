import MainLayout from 'components/layouts/MainLayout';

import { postsPath } from 'helpers/routes';

import BlogPage from 'components/containers/BlogPage';
import AboutPage from 'components/containers/AboutPage';
import Post from 'components/containers/Post';

const Index = {
  path: '/',
  component: BlogPage
};

const About = {
  path: '/about',
  component: AboutPage
};

const PostRoute = {
  path: postsPath(),
  component: Post
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    About
  ]
};
