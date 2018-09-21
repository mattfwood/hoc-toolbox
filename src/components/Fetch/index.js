import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Fetch extends Component {
  state = {
    loading: true,
    data: null,
    error: null,
  };

  async componentDidMount() {
    const { url } = this.props;

    if (typeof url !== 'string') {
      console.warn('Fetch prop "url" must be a string');
      throw new TypeError('Fetch prop "url" must be a string');
    }

    try {
      this.setState({ loading: true });
      const res = await axios.get(url);

      this.setState({
        data: res.data,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error,
        loading: false,
      });
    }
  }

  render() {
    const { data, error, loading } = this.state;

    return <Fragment>{this.props.children({ data, error, loading })}</Fragment>;
  }
}

export default Fetch;
