import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Tag = props => {
  const { fieldValue, totalCount } = props;

  return (
    <Link to={`/tags/${fieldValue}`}>
      {fieldValue} <span>({totalCount})</span>
    </Link>
  );
};

Tag.propTypes = {
  fieldValue: PropTypes.string,
  totalCount: PropTypes.number,
};

Tag.defaultProps = {
  fieldValue: '',
  totalCount: 0,
};

export default Tag;
