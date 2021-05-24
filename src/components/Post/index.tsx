import { format } from 'date-fns';
import { Link } from 'gatsby';
import React, { FC } from 'react';
import { DATE_FORMAT } from '../../constants/date';
import * as styles from './style.module.css';

export interface PostProps {
  body: {
    childMarkdownRemark: {
      html: string;
      timeToRead: number;
    };
  };
  date: string;
  title: string;
  tags: string[];
}

const Post: FC<PostProps> = (props) => {
  const { body, date, title, tags } = props;

  return (
    <div>
      <h1>{title}</h1>
      <div className={styles.post__meta}>
        {format(new Date(date), DATE_FORMAT)} · {body.childMarkdownRemark.timeToRead} min read
      </div>
      <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
      {tags && (
        <ul>
          {tags.map((tag) => (
            <li key={tag}>
              <Link to={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Post;
