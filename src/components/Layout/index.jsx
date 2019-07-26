import PropTypes from 'prop-types';
import React from 'react';
import * as routes from '../../constants/routes';
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
          <Navigation routes={[routes.INDEX, routes.PROJECTS, routes.SEARCH]} />
        </Grid>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Grid>
          <p>Handcrafted with love in Germany</p>
          <Navigation routes={[routes.IMPRINT, routes.PRIVACY_POLICY]} />
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
