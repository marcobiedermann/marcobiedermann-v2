import { graphql, useStaticQuery } from 'gatsby';

interface Repository {
  description: string;
  id: string;
  name: string;
}

interface Edge {
  node: Repository;
}

export interface StatusPageQuery {
  github: {
    search: {
      edges: Edge[];
    };
  };
}

export const useStatusPage = (): StatusPageQuery => {
  return useStaticQuery<StatusPageQuery>(
    graphql`
      query {
        github {
          search(query: "archived:false user:marcobiedermann", type: REPOSITORY, first: 100) {
            edges {
              node {
                ... on GitHub_Repository {
                  description
                  id
                  name
                }
              }
            }
            repositoryCount
          }
        }
      }
    `,
  );
};
