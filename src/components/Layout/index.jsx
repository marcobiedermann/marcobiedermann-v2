import PropTypes from 'prop-types';
import React from 'react';
import * as routes from '../../constants/routes';
import { now } from '../../utils/date';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';

const Layout = props => {
  const { children, ...otherProps } = props;

  return (
    <div {...otherProps}>
      <Header>
        <Grid>
          <Navigation
            routes={[routes.INDEX, routes.PAGE_2, routes.PROJECTS, routes.SEARCH, routes.IMPRINT]}
          />
        </Grid>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Grid>
          © {now.getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Grid>
      </Footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
