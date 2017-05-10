import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Link from 'components/ui/Link';
import Item from '../ItemShort';

describe('Item', () => {
  it('renders fine', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Item />, div);
  });
  describe('render', () => {
    it('should render the title', () => {
      const itemProps = { title: 'hi', postUrl: '/posts/5' };
      const item = shallow(<Item {...itemProps} />);
      const header = <Link to="/posts/5">hi</Link>;
      expect(item.contains(header)).toEqual(true);
    });

    it('should render usual item', () => {
      const itemProps = {
        title: 'hello',
        postUrl: '/posts/5',
        image: {
          src: '/images/google.png'
        }
      };
      const item = shallow(<Item {...itemProps} />);
      expect(item).toMatchSnapshot();
    });
  });
});
