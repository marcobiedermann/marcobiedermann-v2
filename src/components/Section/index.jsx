import PropTypes from 'prop-types';
import React from 'react';

const Section = props => {
  const { children } = props;

  return <section>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node,
};

Section.defaultProps = {
  children: null,
};

export default Section;
