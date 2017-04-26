import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import omit from 'lodash.omit';
import { SingleDatePicker, SingleDatePickerShape } from 'react-dates';
import { HORIZONTAL_ORIENTATION, ANCHOR_LEFT } from './constants';

const propTypes = {
  autoFocus: PropTypes.bool,

  ...omit(SingleDatePickerShape, [
    'date',
    'onDateChange',
    'focused',
    'onFocusChange',
  ]),
};

const defaultProps = {
  autoFocus: false,
  initialDate: null,
  id: 'date',
  placeholder: 'Date',
  disabled: false,
  isOutsideRange: () => false,
  required: false,
  screenReaderInputMessage: '',
  showClearDate: true,
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 1,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  navPrev: null,
  navNext: null,
  renderDay: null,
  enableOutsideDays: true,
  isDayBlocked: () => false,
  isDayHighlighted: () => {},
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
};

class SingleDatePickerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: props.autoFocus,
      date: props.initialDate,
      onDateChange: props.onDateChange,
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    const { onDateChange } = this.state;
    onDateChange(date);
    this.setState({ date });
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  render() {
    const { focused, date } = this.state;
    const props = omit(this.props, [
      'autoFocus',
      'initialDate',
    ]);

    return (
      <SingleDatePicker
        {...props}
        id="date_input"
        date={moment(date)}
        focused={focused}
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
      />
    );
  }
}

SingleDatePickerWrapper.propTypes = propTypes;
SingleDatePickerWrapper.defaultProps = defaultProps;

export default SingleDatePickerWrapper;
