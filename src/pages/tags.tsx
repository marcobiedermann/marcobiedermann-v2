import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Tags from '../components/Tags';

const TagsPage: React.FC = () => {
  const {
    allContentfulProject: { tags },
  } = useStaticQuery(
    graphql`
      query {
        allContentfulProject {
          tags: group(field: tags) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  );

  return (
    <Layout>
      <Section>
        <h1>Tags</h1>
        {tags && <Tags tags={tags} />}
      </Section>
    </Layout>
  );
};

export default TagsPage;
