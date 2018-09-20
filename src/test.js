import React from 'react';
import { render } from 'react-testing-library';
import Filter from './components/Filter';
// import sample from './components/sample';
const data = ['One', 'Two', 'Three'];

describe('Filter', () => {
  it('filters an array of strings', () => {
    const { getByTestId, rerender } = render(
      <Filter data={data} search="One">
        {results => (
          <div data-testid="results">
            {results.map((result, i) => (
              <div key={i}>{result}</div>
            ))}
          </div>
        )}
      </Filter>
    );

    const results = getByTestId('results');
    expect(results.textContent.includes('One')).toBe(true);

    // Results should update on change
    rerender(
      <Filter data={data} search="Two">
        {results => (
          <div data-testid="results">
            {results.map((result, i) => (
              <div key={i}>{result}</div>
            ))}
          </div>
        )}
      </Filter>
    );

    const updatedResults = getByTestId('results');
    expect(updatedResults.textContent.includes('Two')).toBe(true);
  });
});
