import classNames from 'classnames';
import React, { FC } from 'react';
import Project, { ProjectProps } from '../Project';
import * as styles from './style.module.css';

export interface ProjectsProps {
  className?: string;
  projects: ProjectProps[];
}

export const Projects: FC<ProjectsProps> = (props) => {
  const { className, projects, ...otherProps } = props;

  return (
    <ol className={classNames(className, styles.projects)} {...otherProps}>
      {projects.map((project) => (
        <li key={project.id}>
          <Project {...project} />
        </li>
      ))}
    </ol>
  );
};

export default Projects;
