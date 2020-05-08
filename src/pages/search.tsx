import { PageProps } from 'gatsby';
import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Section from '../components/Section';

const SearchPage: React.FC<PageProps> = () => (
  <Layout>
    <Section>
      <Grid>
        <Search />
      </Grid>
    </Section>
  </Layout>
);

export default SearchPage;
