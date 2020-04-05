import classNames from 'classnames';
import React from 'react';
import Project, { ProjectProps } from '../Project';
import styles from './style.module.css';

export interface ProjectsProps {
  className?: string;
  projects: ProjectProps[];
}

const Projects: React.FC<ProjectsProps> = (props) => {
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
