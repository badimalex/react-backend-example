import reducer from '../Posts';
import * as types from 'constants/actionTypes/PostsActionTypes';

describe('todos reducer', () => {
  it('should handle FETCH_POSTS_SUCCESS', () => {
    expect(
      reducer({}, {
        type: types.FETCH_POSTS_SUCCESS,
        response: {
          posts: {},
          meta: {
            current_page: 1,
            entries: 1,
            currentPageNumber: 1,
            totalItems: 1,
            itemsPerPage: 1,
            totalPages: 1
          }
        }
      })
    ).toHaveProperty('isFetching', false);
  });

  it('should handle FETCH_POSTS_REQUEST', () => {
    expect(
      reducer({}, {
        type: types.FETCH_POSTS_REQUEST
      })
    ).toHaveProperty('isFetching', true);
  });

  it('should handle POST_LIKE_SUCCESS', () => {
    expect(
      reducer({
        entries: [
          {
            id: 1,
            meta: {
              likes: 1
            }
          }
        ]
      }, {
        type: types.POST_LIKE_SUCCESS,
        response: {
          post: {
            id: 1,
            meta: {
              likes: 2
            }
          }
        }
      })
    ).toEqual(
      {
        entries: [
          {
            id: 1,
            meta: {
              likes: 2
            }
          }
        ]
      }
    );
  });
});
