/* global __CLIENT__ */

import React from 'react';
import PropTypes from 'prop-types';

import ReactDOM from 'react-dom';
import _ from 'lodash';
import 'c3/c3.css';
import BlogItem from 'components/widgets/blog/ItemShort';

class PieChart extends React.Component {
  componentDidMount() {
    this.generateChart();
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentDidUpdate() {
    this.generateChart();
  }

  generateChart() {
    if (__CLIENT__) {
      const c3 = require('c3');
      const items = _.map(
        this.props.items,
        (i) => [i.title, i.meta.likes]
      );

      this.chart = c3.generate({
        bindto: ReactDOM.findDOMNode(this.refs.chart),
        data: {
          columns: items,
          type : 'pie',
        }
      });
    }
  }

  render() {
    return (
      <div ref="chart" />
    );
  }
}

PieChart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
};

export default PieChart;
