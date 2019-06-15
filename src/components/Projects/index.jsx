import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Project from '../Project';
import styles from './style.module.css';

const Projects = props => {
  const { className, projects, ...otherProps } = props;

  return (
    <ol className={classNames(className, styles.projects)} {...otherProps}>
      {projects.map(project => (
        <li key={project.id}>
          <Project {...project} />
        </li>
      ))}
    </ol>
  );
};

Projects.propTypes = {
  className: PropTypes.string,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};

Projects.defaultProps = {
  className: '',
  projects: [],
};

export default Projects;
