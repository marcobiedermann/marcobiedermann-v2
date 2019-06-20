import { Link } from 'gatsby';
import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Section>
      <Grid>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Grid>
    </Section>
  </Layout>
);

export default SecondPage;
