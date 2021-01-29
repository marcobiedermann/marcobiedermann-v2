import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Repositories from '../components/Repositories';
import Section from '../components/Section';
import { useStatusPage } from '../hooks/status';

const StatusPage: FC<PageProps> = () => {
  const { github } = useStatusPage();

  return (
    <Layout>
      <Section appearance="dark">
        <Grid>
          <h1>Status Dashboard</h1>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <p>Showing the statuses of my project deploys and CI tests.</p>
          <Repositories repositories={github.search.edges.map((edge) => edge.node)} />
        </Grid>
      </Section>
    </Layout>
  );
};

export default StatusPage;
