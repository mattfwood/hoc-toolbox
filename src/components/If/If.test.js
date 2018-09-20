import React from 'react';
import { render } from 'react-testing-library';
import If from './index.js';
// import sample from './components/sample';
const data = ['One', 'Two', 'Three'];

describe('If', () => {
  it('shows child elements when true', () => {
    const { getByTestId, rerender, container } = render(
      <If condition={true}>
        <div data-testid="children">
          <div>Conditional Content</div>
        </div>
      </If>
    );

    const children = getByTestId('children');
    expect(children.textContent.includes('Conditional Content')).toBe(true);

    // Results should update on change
    rerender(
      <If condition={false}>
        <div data-testid="children">
          <div>Conditional Content</div>
        </div>
      </If>
    );

    expect(container.children.length).toEqual(0);
  });

  it('shows console warning if condition prop is not defined', () => {
    // Silence output when errors / warnings are expected
    console.error = jest.fn()
    console.warn = jest.fn()
    const spy = jest.spyOn(global.console, 'warn');
    const { getByTestId, rerender, container } = render(
      <If>
        <div data-testid="children">
          <div>Conditional Content</div>
        </div>
      </If>
    );

    expect(spy).toHaveBeenCalled();

    // expect(
    //   render(
    //   <If>
    //     <div data-testid="children">
    //       <div>Conditional Content</div>
    //     </div>
    //   </If>
    //   )
    // ).toThrow();
  })
});
