import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentWillReceiveProps(nextProps) {
    this.state = nextProps;
  }

  render() {
    const { totalItems, currentPageNumber, pageChangeHandler } = this.state;

    const items = [];

    for (let i = 1; i <= totalItems; i++) {
      items.push(
        <Menu.Item
          key={i}
          name={`${i}`}
          active={currentPageNumber === i}
          onClick={ () => pageChangeHandler(i) }
        />
      );
    }

    return (
      <Menu pagination>
        {items}
      </Menu>
    );
  }
}

export default Pagination;
