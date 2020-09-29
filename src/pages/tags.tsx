import { PageProps } from 'gatsby';
import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Tags from '../components/Tags';
import { useTagsPage } from '../hooks/tags';

const TagsPage: React.FC<PageProps> = () => {
  const {
    allContentfulPost: { postTags },
    allContentfulProject: { projectTags },
  } = useTagsPage();

  const tags = [...postTags, ...projectTags].sort((a, b) => a.fieldValue.localeCompare(b.fieldValue));

  return (
    <Layout>
      <Section>
        <Grid>
          <h1>Tags</h1>
          {tags && <Tags tags={tags} />}
        </Grid>
      </Section>
    </Layout>
  );
};

export default TagsPage;
