import classNames from 'classnames';
import React, { FC } from 'react';
import Badge, { BadgeProps } from '../Badge';
import styles from './style.module.css';

export interface BadgesProps {
  badges: BadgeProps[];
  className?: string;
}

const Badges: FC<BadgesProps> = (props) => {
  const { badges, className } = props;

  return (
    <ul className={classNames(className, styles.badges)}>
      {badges.map((badge) => (
        <li key={badge.id}>
          <Badge {...badge} />
        </li>
      ))}
    </ul>
  );
};

export default Badges;
