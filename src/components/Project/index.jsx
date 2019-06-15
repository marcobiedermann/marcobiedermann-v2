import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Project = props => {
  const { slug, thumbnail, title, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <figure className={styles.project__figure}>
        <Link className={styles.project__link} to={`/projects/${slug}`}>
          {thumbnail && <Img fluid={thumbnail.fluid} />}
          <figcaption className={styles.project__caption}>
            <h2>{title}</h2>
          </figcaption>
        </Link>
      </figure>
    </div>
  );
};

Project.propTypes = {
  slug: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    fluid: PropTypes.shape(),
  }),
  title: PropTypes.string.isRequired,
};

Project.defaultProps = {
  thumbnail: null,
};

export default Project;
