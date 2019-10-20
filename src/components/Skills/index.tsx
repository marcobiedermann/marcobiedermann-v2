import classNames from 'classnames';
import React from 'react';
import Skill, { SkillProps } from '../Skill';
import styles from './style.module.css';

export interface SkillsProps {
  className?: string;
  skills: SkillProps[];
}

const Skills: React.FC<SkillsProps> = props => {
  const { className, skills } = props;

  return (
    <ul className={classNames(className, styles.skills)}>
      {skills.map(skill => (
        <li key={skill.id}>
          <Skill {...skill} />
        </li>
      ))}
    </ul>
  );
};

export default Skills;
