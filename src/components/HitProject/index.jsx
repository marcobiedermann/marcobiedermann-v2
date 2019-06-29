import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const HitProject = props => {
  const { slug, title } = props;

  return (
    <div>
      <figure>
        <figcaption>
          <h3>
            <Link to={`/projects/${slug['en-US']}`}>{title['en-US']}</Link>
          </h3>
        </figcaption>
      </figure>
    </div>
  );
};

HitProject.propTypes = {
  slug: PropTypes.shape({
    'en-Us': PropTypes.string,
  }).isRequired,
  title: PropTypes.shape({
    'en-Us': PropTypes.string,
  }).isRequired,
};

export default HitProject;
