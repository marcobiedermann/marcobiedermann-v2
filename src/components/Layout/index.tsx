import classNames from 'classnames';
import { Link } from 'gatsby';
import React, { FC } from 'react';
import { useLayout } from '../../hooks/layout';
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
  const { allContentfulMenu } = useLayout();

  const { edges: menus } = allContentfulMenu;

  const mappedMenus = menus.map((menu) => menu.node);
  const mainMenu = mappedMenus.find((menu) => menu.slug === 'main');
  const footerMenu = mappedMenus.find((menu) => menu.slug === 'footer');

  return (
    <div className={classNames(className, styles.layout)} {...otherProps}>
      <Header>
        <Link to="/" style={{ textDecoration: 'none' }}>
          marcobiedermann
        </Link>
        {mainMenu && <Navigation inline routes={mainMenu.routes} />}
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Grid justify="space-between">
          <p>Handcrafted with love in Germany</p>
          {/* <p>Happy {format(DATE_NOW, 'iiii')}</p> */}
          {footerMenu && <Navigation inline routes={footerMenu.routes} />}
        </Grid>
      </Footer>
    </div>
  );
};

export default Layout;
