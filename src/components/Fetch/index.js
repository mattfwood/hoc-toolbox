import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Fetch extends Component {
  state = {
    loading: true,
    data: null,
    error: null,
  };

  static propTypes = {
    /** URL endpoint to fetch data from */
    url: PropTypes.string.isRequired,
  };

  async componentDidMount() {
    const { url } = this.props;

    try {
      if (typeof url !== 'string') {
        console.warn('Fetch prop "url" must be a string');
        throw new Error('Fetch prop "url" must be a string');
      }

      this.setState({ loading: true });
      const res = await axios.get(url);

      this.setState({
        data: res.data,
        loading: false,
      });
    } catch (error) {
      this.handleError(error);
    }
  }

  refetch = async (showLoading = false) => {
    try {
      const { url } = this.props;

      if (showLoading) {
        this.setState({ loading: true });
      }
      const res = await axios.get(url);

      this.setState({
        data: res.data,
        loading: false,
      });
    } catch (error) {
      this.handleError(error);
    }
  };

  handleError = error => {
    console.error(error);
    this.setState({
      error,
      loading: false,
    });
  };

  render() {
    const { data, error, loading } = this.state;

    return <Fragment>{this.props.children({ data, error, loading, refetch: this.refetch })}</Fragment>;
  }
}

export default Fetch;
