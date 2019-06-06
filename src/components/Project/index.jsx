import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Project = props => {
  const { title, slug } = props;

  return (
    <div>
      <h2>
        <Link to={`/projects/${slug}`}>{title}</Link>
      </h2>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Project;
