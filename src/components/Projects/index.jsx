import classNames from 'classnames';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Projects = props => {
  const { className, projects, ...otherProps } = props;

  return (
    <ol className={classNames(className, styles.projects)} {...otherProps}>
      {projects.map(project => (
        <li key={project.id}>
          <div>
            <h2>
              <Link to={`/projects/${project.slug}`}>{project.title}</Link>
            </h2>
          </div>
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
      slug: PropTypes.string,
      title: PropTypes.title,
    }),
  ),
};

Projects.defaultProps = {
  className: '',
  projects: [],
};

export default Projects;
