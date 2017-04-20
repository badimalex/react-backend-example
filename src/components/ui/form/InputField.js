import React from 'react';
import FormField from 'components/ui/form/Field';

const InputField = (props) => (
  <FormField { ...props }>
    <input className="ui input" type={props.type} {...props.input} />
  </FormField>
);

export default InputField;
