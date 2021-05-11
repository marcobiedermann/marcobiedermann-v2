import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { FC } from 'react';
import * as styles from './style.module.css';

export interface ProjectProps {
  id: string;
  slug: string;
  thumbnail: {
    gatsbyImageData: IGatsbyImageData;
  };
  title: string;
}

export const Project: FC<ProjectProps> = (props) => {
  const { slug, thumbnail, title, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <figure className={styles.project__figure}>
        <Link className={styles.project__link} to={`/projects/${slug}`}>
          {thumbnail && <GatsbyImage image={thumbnail.gatsbyImageData} alt={title} />}
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
