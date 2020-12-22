import { graphql, useStaticQuery } from 'gatsby';

interface Repository {
  descriptionHTML: string;
  id: string;
  name: string;
  nameWithOwner: string;
  url: string;
}

interface RepositoryEdge {
  node: Repository;
}

export interface StatusPageQuery {
  github: {
    search: {
      edges: RepositoryEdge[];
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
                  descriptionHTML
                  id
                  name
                  nameWithOwner
                  url
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