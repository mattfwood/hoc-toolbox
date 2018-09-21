import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import Fetch from './index';
// import sample from './components/sample';

describe('Fetch', () => {
  it('should return loading then return data with valid url', async () => {
    const { getByTestId, rerender } = render(
      <Fetch url="https://jsonplaceholder.typicode.com/comments/1">
        {({ data, loading, error }) => {
          if (loading) {
            return <div data-testid="loading">Loading...</div>;
          }

          if (error) {
            return <div data-testid="error">Error!</div>;
          }

          return <div data-testid="data">{data.email}</div>;
        }}
      </Fetch>
    );

    const loadingNode = getByTestId('loading');
    expect(loadingNode.textContent).toEqual('Loading...');

    const dataNode = await waitForElement(() => getByTestId('data'));

    expect(dataNode.textContent).toEqual('Eliseo@gardner.biz');
  });

  it('should return error with bad URL', async () => {
    // Silence output when errors / warnings are expected
    console.error = jest.fn();
    const spy = jest.spyOn(global.console, 'error');
    const { getByTestId, rerender } = render(
      <Fetch url="https://fakewebsiteexample.com">
        {({ data, loading, error }) => {
          if (loading) {
            return <div data-testid="loading">Loading...</div>;
          }

          if (error) {
            return <div data-testid="error">Error!</div>;
          }

          return <div data-testid="data">{data.email}</div>;
        }}
      </Fetch>
    );

    const errorNode = await waitForElement(() => getByTestId('error'));

    expect(errorNode.textContent).toEqual('Error!');
    expect(spy).toHaveBeenCalledWith(Error('Network Error'));
  });
});
