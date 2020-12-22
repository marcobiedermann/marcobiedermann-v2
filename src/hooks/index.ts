import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';

export interface IndexPageQuery {
  allContentfulProject: {
    edges: [
      {
        node: {
          id: string;
          slug: string;
          title: string;
          thumbnail: {
            fluid: FluidObject;
          };
        };
      },
    ];
  };
}

export const useIndexPage = (): IndexPageQuery =>
  useStaticQuery<IndexPageQuery>(graphql`
    query {
      allContentfulProject(sort: { fields: [createdAt], order: DESC }, limit: 8) {
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
  `);
