import React from 'react';
import { render, waitForElement, cleanup, fireEvent } from 'react-testing-library';
import Fetch from './index';

// Courtesy of Wes Bos (https://github.com/wesbos/waait/blob/master/index.js)
const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

afterEach(cleanup);

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

  it(
    'should refetch data when callback is called',
    async () => {
      const { getByTestId, rerender } = render(
        <Fetch url="http://api.timezonedb.com/v2.1/get-time-zone?by=zone&zone=America/Chicago&format=json&key=SMG5NW8KPYA9">
          {({ data, loading, error, refetch }) => {
            if (loading) {
              return <div data-testid="loading">Loading...</div>;
            }

            if (error) {
              return <div data-testid="error">Error!</div>;
            }

            return (
              <div>
                <div data-testid="data">{data.formatted}</div>
                <button data-testid="refetch-button" onClick={() => refetch(true)}>
                  Refetch Data
                </button>
              </div>
            );
          }}
         </Fetch>
      );

      const loadingNode = getByTestId('loading');
      expect(loadingNode.textContent).toEqual('Loading...');

      const dataNode = await waitForElement(() => getByTestId('data'));

      const currentTimestamp = Date.parse(Date().toString());
      const firstTimestamp = Date.parse(Date(dataNode.textContent).toString());

      // Expect API timestamp to be within 5 seconds of current timestamp
      expect(Math.abs(currentTimestamp - firstTimestamp)).toBeLessThan(8000);

      // Wait 2 seconds for timestamp to update
      await wait(2000);

      fireEvent.click(getByTestId('refetch-button'));

      const updatedCurrentTime = Date.parse(Date().toString());
      const updatedNode = await waitForElement(() => getByTestId('data'));

      const secondTimestamp = Date.parse(Date(updatedNode.textContent).toString());
      expect(updatedCurrentTime - secondTimestamp).toBeLessThan(5000);
      expect(secondTimestamp).toBeGreaterThan(firstTimestamp);
      // Increase timeout to 20 seconds since so many data calls are being made
    },
    20000
  );

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
    expect(spy).toHaveBeenCalledWith(TypeError('Network request failed'));
  });

  it('should return error with non-string URL prop', () => {
    // Silence output when errors / warnings are expected
    console.error = jest.fn();
    const spy = jest.spyOn(global.console, 'warn');

    render(
      <Fetch url={['This', 'is not', 'valid']}>
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

    // .toThrowError(TypeError('Fetch prop "url" must be a string'));

    expect(spy).toHaveBeenCalledWith('Fetch prop "url" must be a string');
  });
});
