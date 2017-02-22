import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import c3 from 'c3';
import _ from 'lodash';
import 'c3/c3.css';
import BlogItem from './BlogItem';

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
