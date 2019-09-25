import classNames from 'classnames';
import React from 'react';

export interface MainProps {
  className?: string;
}

const Main: React.FC<MainProps> = props => {
  const { children, className, ...otherProps } = props;

  return (
    <main className={classNames(className)} {...otherProps}>
      {children}
    </main>
  );
};

export default Main;
