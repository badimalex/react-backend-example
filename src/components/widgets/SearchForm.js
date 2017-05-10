import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'semantic-ui-react';

const SearchForm = ({handleKeyDown}) => (
  <Form>
    <Form.Field>
      <input
        placeholder='Search'
        type="text"
        onKeyDown={handleKeyDown}
      />
    </Form.Field>
  </Form>
);

SearchForm.propTypes = {
  handleKeyDown: PropTypes.func
};

export default SearchForm;
