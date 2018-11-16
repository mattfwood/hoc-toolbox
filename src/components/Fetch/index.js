import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// import('isomorphic-fetch');

/**
 * <Fetch />
 *
 * @param {string} url - URL endpoint to fetch data from
 * @returns {data|loading|error|refetch}
 * @example
 * <Fetch url="https://jsonplaceholder.typicode.com/comments/1">
 *  {({ data, loading, error }) => (
 *     <div>
 *       {loading && (
 *         <div>Loading...</div>
 *       )}
 *       {error && (
 *         <div>Error!</div>
 *       )}
 *       {data && (
 *         <div>{data.email}</div>
 *       )}
 *     </div>
 *   )}
 * </Fetch>
 *
 */
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
      const res = await fetch(url);
      // console.log(Object.keys(res));
      const data = await res.json();

      this.setState({
        data,
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

      const res = await fetch(url);
      const data = await res.json();

      this.setState({
        data,
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

    return (
      <Fragment>
        {this.props.children({ data, error, loading, refetch: this.refetch })}
      </Fragment>
    );
  }
}

export default Fetch;
