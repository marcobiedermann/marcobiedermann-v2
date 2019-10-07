import React from 'react';

const Main: React.FC = props => {
  const { children, ...otherProps } = props;

  return <main {...otherProps}>{children}</main>;
};

export default Main;
