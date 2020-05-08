import { PageProps } from 'gatsby';
import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="404: Not found" description="Error 404 - Page not found" />
    <Section>
      <Grid>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Grid>
    </Section>
  </Layout>
);

export default NotFoundPage;
