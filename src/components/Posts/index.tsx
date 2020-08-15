import classNames from 'classnames';
import React, { FC } from 'react';
import Post, { PostProps } from '../Post';
import styles from './style.module.css';

export interface PostsProps {
  className?: string;
  posts: PostProps[];
}

export const Posts: FC<PostsProps> = (props) => {
  const { className, posts, ...otherProps } = props;

  return (
    <ol className={classNames(className, styles.posts)} {...otherProps}>
      {posts.map((post) => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </ol>
  );
};

export default Posts;
