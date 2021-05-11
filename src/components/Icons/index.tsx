import React, { FC } from 'react';
import Icon, { IconProps } from '../Icon';
import * as styles from './style.module.css';

export interface IconsProps {
  icons: IconProps[];
}

const Icons: FC<IconsProps> = (props) => {
  const { icons } = props;

  return (
    <ul className={styles.icons}>
      {icons.map((icon) => {
        const { id } = icon;

        return (
          <li key={id}>
            <Icon {...icon} />
          </li>
        );
      })}
    </ul>
  );
};

export default Icons;
