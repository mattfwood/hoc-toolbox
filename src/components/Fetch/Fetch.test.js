import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import Fetch from './index';
// import sample from './components/sample';

describe('Fetch', () => {
  it('should filter an array of strings', async () => {
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

    const dataNode = await waitForElement(() => getByTestId('data'));

    expect(dataNode.textContent).toEqual('Eliseo@gardner.biz');
  });
});
