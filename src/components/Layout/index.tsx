import classNames from 'classnames';
import { format } from 'date-fns';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { DATE_NOW } from '../../constants/date';
import '../../i18n';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';
import styles from './style.module.css';

interface LayoutQuery {
  allContentfulMenu: {
    edges: [
      {
        node: {
          slug: string;
          routes: [
            {
              id: string;
              name: string;
              path: string;
            },
          ];
        };
      },
    ];
  };
}

export interface LayoutProps {
  className?: string;
}

const Layout: React.FC<LayoutProps> = props => {
  const { children, className, ...otherProps } = props;
  const { allContentfulMenu }: LayoutQuery = useStaticQuery(
    graphql`
      query {
        allContentfulMenu {
          edges {
            node {
              slug
              routes {
                id
                name
                path
              }
            }
          }
        }
      }
    `,
  );

  const { edges: menues } = allContentfulMenu;

  const mappedMenues = menues.map(menu => menu.node);
  const mainMenu = mappedMenues.find(menu => menu.slug === 'main');
  const footerMenu = mappedMenues.find(menu => menu.slug === 'footer');

  return (
    <div className={classNames(className, styles.layout)} {...otherProps}>
      <Header>
        <Grid>{mainMenu && <Navigation routes={mainMenu.routes} />}</Grid>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Grid>
          <p>Handcrafted with love in Germany</p>
          <p>Happy {format(DATE_NOW, 'iiii')}</p>
          {footerMenu && <Navigation routes={footerMenu.routes} />}
        </Grid>
      </Footer>
    </div>
  );
};

export default Layout;
