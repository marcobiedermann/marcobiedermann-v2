import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IndexPageQuery {
  allContentfulProject: {
    edges: [
      {
        node: {
          id: string;
          slug: string;
          title: string;
          thumbnail: {
            gatsbyImageData: IGatsbyImageData;
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
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);
