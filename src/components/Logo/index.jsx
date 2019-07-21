import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Logo = props => {
  const { logo, slug } = props;

  return <Link to={`/projects/${slug}`}>{logo && <img src={logo.file.url} alt={logo.title} />}</Link>;
};

Logo.propTypes = {
  logo: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
    title: PropTypes.string,
  }),
  slug: PropTypes.string,
};

Logo.defaultProps = {
  logo: null,
  slug: '',
};

export default Logo;
