import classNames from 'classnames';
import { Link } from 'gatsby';
import React, { FC } from 'react';
import { FOOTER, MAIN } from '../../constants/menus';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';
import styles from './style.module.css';

export interface LayoutProps {
  className?: string;
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <div className={classNames(className, styles.layout)} {...otherProps}>
      <Header>
        <Link to="/" style={{ textDecoration: 'none' }}>
          marcobiedermann
        </Link>
        <Navigation inline routes={MAIN} />
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Grid justify="space-between">
          <p>Handcrafted with love in Germany</p>
          {/* <p>Happy {format(DATE_NOW, 'iiii')}</p> */}
          <Navigation inline routes={FOOTER} />
        </Grid>
      </Footer>
    </div>
  );
};

export default Layout;
