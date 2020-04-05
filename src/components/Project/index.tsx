import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import styles from './style.module.css';

export interface ProjectProps {
  id: string;
  slug: string;
  thumbnail: {
    fluid: FluidObject;
  };
  title: string;
}

const Project: React.FC<ProjectProps> = (props) => {
  const { slug, thumbnail, title, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <figure className={styles.project__figure}>
        <Link className={styles.project__link} to={`/projects/${slug}`}>
          {thumbnail && <Img fluid={thumbnail.fluid} />}
          <figcaption className={styles.project__caption}>
            <div className={styles.project__title}>
              <h3>{title}</h3>
            </div>
          </figcaption>
        </Link>
      </figure>
    </div>
  );
};

export default Project;
