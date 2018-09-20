import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const If = (props) => {
  const { condition, children } = props;
  if (condition === undefined) {
    console.warn('Prop "condition" should be provided, even if it is false.');
  }

  if (condition) {
    return (
      <Fragment>
        {children}
      </Fragment>
    );
  }

  return null;
}

If.propTypes = {
  /** Show child elements */
  condition: PropTypes.bool.isRequired,
}

export default If;
