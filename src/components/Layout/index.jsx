import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Navigation from '../Navigation';
import * as routes from '../../constants/routes';

const Layout = props => {
  const { children } = props;

  return (
    <>
      <Header>
        <Grid>
          <Navigation routes={[routes.INDEX, routes.PAGE_2]} />
        </Grid>
      </Header>
      <Grid>
        <main>{children}</main>
        <Footer />
      </Grid>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
