import { graphql, useStaticQuery } from 'gatsby';
import { ProjectProps } from '../components/Project';

export interface ProjectsPageQuery {
  allContentfulProject: {
    projects: [
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
}

export const useProjectsPage = (): ProjectsPageQuery =>
  useStaticQuery<ProjectsPageQuery>(
    graphql`
      query {
        allContentfulProject(sort: { fields: [date], order: DESC }) {
          projects: edges {
            next {
              id
              slug
            }
            node {
              id
              slug
              title
              thumbnail {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            previous {
              id
              slug
            }
          }
        }
      }
    `,
  );
