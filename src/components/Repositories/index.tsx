import classNames from 'classnames';
import React, { FC } from 'react';
import Repository, { RepositoryProps } from '../Repository';
import * as styles from './style.module.css';

export interface RepositoriesProps {
  className?: string;
  repositories: RepositoryProps[];
}

const Repositories: FC<RepositoriesProps> = (props) => {
  const { className, repositories, ...otherProps } = props;

  return (
    <ol className={classNames(className, styles.repositories)} {...otherProps}>
      {repositories.map((repository) => (
        <li key={repository.id}>
          <Repository {...repository} />
        </li>
      ))}
    </ol>
  );
};

export default Repositories;
