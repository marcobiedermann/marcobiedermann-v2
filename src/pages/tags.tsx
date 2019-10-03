import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Tags from '../components/Tags';

interface TagsPageQuery {
  allContentfulProject: {
    tags: [
      {
        fieldValue: string;
        totalCount: number;
      },
    ];
  };
}

const TagsPage: React.FC = () => {
  const {
    allContentfulProject: { tags },
  }: TagsPageQuery = useStaticQuery(
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
  const { t } = useTranslation();

  return (
    <Layout>
      <Section>
        <h1>{t('tags')}</h1>
        {tags && <Tags tags={tags} />}
      </Section>
    </Layout>
  );
};

export default TagsPage;
