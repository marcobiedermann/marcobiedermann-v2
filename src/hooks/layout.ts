import { graphql, useStaticQuery } from 'gatsby';

export interface LayoutQuery {
  allContentfulMenu: {
    edges: [
      {
        node: {
          slug: string;
          routes: [
            {
              id: string;
              name: string;
              path: string;
            },
          ];
        };
      },
    ];
  };
}

export const useLayout = (): LayoutQuery =>
  useStaticQuery<LayoutQuery>(graphql`
    query {
      allContentfulMenu {
        edges {
          node {
            slug
            routes {
              id
              name
              path
            }
          }
        }
      }
    }
  `);
