import { format } from 'date-fns';
import { Link } from 'gatsby';
import React, { FC } from 'react';
import { DATE_FORMAT } from '../../constants/date';

export interface PostProps {
  body: {
    childMarkdownRemark: {
      html: string;
      timeToRead: number;
    };
  };
  date: string;
  id: string;
  slug: string;
  title: string;
}

export const Post: FC<PostProps> = (props) => {
  const { body, date, slug, title, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <h3>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h3>
      <div>
        {format(new Date(date), DATE_FORMAT)} · {body.childMarkdownRemark.timeToRead} min read
      </div>
    </div>
  );
};

export default Post;
