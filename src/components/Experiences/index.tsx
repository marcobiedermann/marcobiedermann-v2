import classNames from 'classnames';
import React from 'react';
import Experience, { ExperienceProps } from '../Experience';
import styles from './style.module.css';

export interface ExperiencesProps {
  className?: string;
  experiences: ExperienceProps[];
}

const Experiences: React.FC<ExperiencesProps> = props => {
  const { className, experiences } = props;

  return (
    <ul className={classNames(className, styles.experiences)}>
      {experiences.map(experience => (
        <li key={experience.id}>
          <Experience {...experience} />
        </li>
      ))}
    </ul>
  );
};

export default Experiences;
