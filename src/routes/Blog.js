import MainLayout from 'components/layouts/MainLayout';

import initialLoad from 'helpers/initialLoad';
import { postsPath, editPostPath } from 'helpers/routes';

import { fetchPosts, searchRequest } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

import AboutPage from 'components/views/pages/About';
import PostsContainer from 'containers/posts/List';
import PostContainer from 'containers/posts/Item';
import EditPostContainer from 'containers/posts/Edit';
import NewPostContainer from 'containers/posts/Create';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts());
  }
};

const About = {
  path: '/about',
  component: AboutPage
};

const PostRoute = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    return store.dispatch(fetchPost(params.id));
  }
};

const EditPostRoute = {
  path: editPostPath(),
  component: EditPostContainer,
  prepareData: (store, query, params) => {
    return store.dispatch(fetchPost(params.id));
  }
};

const PaginationRoute = {
  path: '/page/:page',
  component: PostsContainer,
  prepareData: (store, query, params) => {
    return store.dispatch(fetchPosts(params.page));
  }
};

const SearchRoute = {
  path: '/search',
  component: PostsContainer,
  prepareData: (store, query) => {
    return store.dispatch(searchRequest(query.q));
  }
};

const NewPost = {
  path: '/posts/new',
  component: NewPostContainer
};

export default {
  component: MainLayout,
  childRoutes: [
    NewPost,
    Index,
    PostRoute,
    EditPostRoute,
    PaginationRoute,
    SearchRoute,
    About
  ]
};
