import { PageProps } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Tags from '../components/Tags';
import { useTagsPage } from '../hooks/tags';

const TagsPage: React.FC<PageProps> = () => {
  const { allContentfulProject } = useTagsPage();
  const { t } = useTranslation();

  const { tags } = allContentfulProject;

  return (
    <Layout>
      <Section>
        <Grid>
          <h1>{t('tags')}</h1>
          {tags && <Tags tags={tags} />}
        </Grid>
      </Section>
    </Layout>
  );
};

export default TagsPage;
