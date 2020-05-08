import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import { ProjectProps } from '../../components/Project';
import Projects from '../../components/Projects';
import Section from '../../components/Section';

export interface TagTemplateProps extends PageProps {
  data: {
    allContentfulProject: {
      edges: [
        {
          node: ProjectProps;
        },
      ];
    };
  };
}

const TagTemplate: React.FC<TagTemplateProps> = (props) => {
  const {
    data: { allContentfulProject },
  } = props;

  const { edges: projects } = allContentfulProject;

  return (
    <Layout>
      <Section>
        <Grid>
          <h1>Tag</h1>
          <Projects projects={projects.map((project) => project.node)} />
        </Grid>
      </Section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ProjectsByTag($tag: String!) {
    allContentfulProject(filter: { tags: { in: [$tag] } }, sort: { fields: [date], order: DESC }) {
      edges {
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
      }
    }
  }
`;
export default TagTemplate;
