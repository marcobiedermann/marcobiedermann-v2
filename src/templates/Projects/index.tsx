import { graphql } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';
import { ProjectProps } from '../../components/Project';
import Projects from '../../components/Projects';
import Section from '../../components/Section';

export interface ProjectsTemplate {
  data: {
    allContentfulProject: {
      edges: [
        {
          next: {
            id: string;
            slug: string;
          };
          node: ProjectProps;
          previous: {
            id: string;
            slug: string;
          };
        },
      ];
      pageInfo: {
        currentPage: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        pageCount: number;
      };
    };
  };
}

const ProjectsTemplate: React.FC<ProjectsTemplate> = (props) => {
  const {
    data: { allContentfulProject },
  } = props;
  const { t } = useTranslation();

  const { edges: projects, pageInfo } = allContentfulProject;

  return (
    <Layout>
      <Section>
        <Grid>
          <Projects projects={projects.map((project) => project.node)} />
          <Pagination
            {...(pageInfo.hasNextPage && {
              next: {
                id: 'next',
                name: t('pagination.next'),
                path: `/projects/${pageInfo.currentPage + 1}`,
              },
            })}
            {...(pageInfo.hasPreviousPage && {
              previous: {
                id: 'previous',
                name: t('pagination.previous'),
                path: pageInfo.currentPage === 2 ? '/projects' : `/projects/${pageInfo.currentPage - 1}`,
              },
            })}
            routes={Array.from({ length: pageInfo.pageCount }, (_, index) => ({
              id: `${index}`,
              name: `${index + 1}`,
              path: index === 0 ? '/projects' : `/projects/${index + 1}`,
            }))}
          />
        </Grid>
      </Section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query Projects($limit: Int!, $skip: Int!) {
    allContentfulProject(sort: { fields: [date], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        next {
          id
          slug
        }
        node {
          id
          slug
          title
          thumbnail {
            fluid {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
        previous {
          id
          slug
        }
      }
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        pageCount
      }
    }
  }
`;

export default ProjectsTemplate;
