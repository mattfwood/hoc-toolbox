import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {
  const { search, data } = props

  if (!Array.isArray(data)) {
    console.warn('Filter prop "data" must be an array');
    throw new TypeError('Filter prop "data" must be an array')
  }

  if (typeof search !== 'string' && typeof search !== 'number') {
    console.warn('Filter prop "search" must be type "string" or "number"');
    throw new TypeError('Filter prop "search" must be type "string" or "number"')
  }

  const filteredData = data.filter((item) => {
    const jsonItem = JSON.stringify(item).toLowerCase()
    return jsonItem.includes(search.toLowerCase())
    // const strings = Object.values(item).filter(value => typeof value === 'string' || typeof value === 'number');
    // const match = strings.some(value => value.toLowerCase().includes(search.toLowerCase()));
    // console.log({ strings, match });
    // return match;
  })

  return (
    <React.Fragment>
      {props.children(filteredData)}
    </React.Fragment>
  )
}

Filter.propTypes = {
  /** Array of strings or objects to search through */
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  /** Search string to look for in all items */
  search: PropTypes.string.isRequired,
}

export default Filter;
