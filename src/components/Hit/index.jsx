import PropTypes from 'prop-types';
import React from 'react';
import HitProject from '../HitProject';

const Hit = props => {
  const { hit, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <HitProject {...hit.fields} />
    </div>
  );
};

Hit.propTypes = {
  hit: PropTypes.shape(),
};

Hit.defaultProps = {
  hit: null,
};

export default Hit;
