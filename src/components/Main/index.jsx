import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Main = props => {
  const { children, className, ...otherProps } = props;

  return (
    <main className={classNames(className)} {...otherProps}>
      {children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  className: '',
};

export default Main;
