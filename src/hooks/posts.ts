import { graphql, useStaticQuery } from 'gatsby';
import { PostProps } from '../components/Post';

interface Tag {
  fieldValue: string;
  totalCount: number;
}

export interface PostsPageQuery {
  allContentfulPost: {
    posts: [
      {
        next: {
          id: string;
          slug: string;
        };
        node: PostProps;
        previous: {
          id: string;
          slug: string;
        };
      },
    ];
  };
}

export const usePostsPage = (): PostsPageQuery =>
  useStaticQuery<PostsPageQuery>(
    graphql`
      query {
        allContentfulPost(sort: { fields: [date], order: DESC }) {
          posts: edges {
            next {
              id
              slug
            }
            node {
              body {
                childMarkdownRemark {
                  timeToRead
                }
              }
              date
              id
              slug
              title
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
