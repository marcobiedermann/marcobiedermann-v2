import { graphql, useStaticQuery } from 'gatsby';

interface Tag {
  fieldValue: string;
  totalCount: number;
}

export interface TagsPageQuery {
  allContentfulPost: {
    postTags: Tag[];
  };
  allContentfulProject: {
    projectTags: Tag[];
  };
}

export const useTagsPage = (): TagsPageQuery => {
  return useStaticQuery<TagsPageQuery>(
    graphql`
      query {
        allContentfulPost {
          postTags: group(field: tags) {
            fieldValue
            totalCount
          }
        }
        allContentfulProject {
          projectTags: group(field: tags) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  );
};
