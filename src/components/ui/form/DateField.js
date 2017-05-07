import React from 'react';
import DateRangePickerWrapper from 'components/ui/form/DateRangePickerWrapper';
import formatDate from 'helpers/formatDate';
import FormField from 'components/ui/form/Field';

const InputField = (props) => (
  <FormField { ...props }>
    <DateRangePickerWrapper
      initialDate={props.input.value}
      onDateChange={
        (date) => {
          props.input.onChange(formatDate(date));
        }
      } />
  </FormField>
);

export default InputField;
