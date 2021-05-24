import { format } from 'date-fns';
import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { FC } from 'react';
import { DATE_FORMAT } from '../../constants/date';
import * as styles from './style.module.css';

export interface PostPreviewProps {
  body: {
    childMarkdownRemark: {
      excerpt: string;
      html: string;
      timeToRead: number;
    };
  };
  date: string;
  id: string;
  slug: string;
  title: string;
  thumbnail?: {
    description?: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

export const PostPreview: FC<PostPreviewProps> = (props) => {
  const {
    body: {
      childMarkdownRemark: { excerpt, timeToRead },
    },
    date,
    slug,
    title,
    thumbnail,
    ...otherProps
  } = props;

  return (
    <div className={styles.postPreview} {...otherProps}>
      {thumbnail && (
        <Link to={`/blog/${slug}`}>
          <GatsbyImage alt={thumbnail.description || title} image={thumbnail.gatsbyImageData} />
        </Link>
      )}
      <h3 className={styles.postPreview__title}>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h3>
      <div className={styles.postPreview__meta}>
        {format(new Date(date), DATE_FORMAT)} · {timeToRead} min read
      </div>
      <div>
        <p>{excerpt}</p>
      </div>
    </div>
  );
};

export default PostPreview;
