import PropTypes from 'prop-types';
import React from 'react';

const Hit = props => {
  const { hit } = props;

  return (
    <div>
      <pre>{JSON.stringify(hit.fields, null, 2)}</pre>
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
