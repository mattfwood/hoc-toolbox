import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const If = (props) => {
  const { condition, children } = props;
  console.log(condition);
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
  condition: PropTypes.bool,
}

If.defaultProps = {
  condition: false,
}

export default If;
