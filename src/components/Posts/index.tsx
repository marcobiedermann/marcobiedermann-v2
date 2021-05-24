import classNames from 'classnames';
import React, { FC } from 'react';
import PostPreview, { PostPreviewProps } from '../PostPreview';
import * as styles from './style.module.css';

export interface PostsProps {
  className?: string;
  posts: PostPreviewProps[];
}

export const Posts: FC<PostsProps> = (props) => {
  const { className, posts, ...otherProps } = props;

  return (
    <ol className={classNames(className, styles.posts)} {...otherProps}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostPreview {...post} />
        </li>
      ))}
    </ol>
  );
};

export default Posts;
