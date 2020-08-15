/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

function getPrevious(edges, index) {
  return index === edges.length - 1 ? null : edges[index + 1].node;
}

function getNext(edges, index) {
  return index === 0 ? null : edges[index - 1].node;
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve('./src/templates/Page/index.tsx');
  const postTemplate = path.resolve('./src/templates/Post/index.tsx');
  const projectDefaultTemplate = path.resolve('./src/templates/ProjectDefault/index.tsx');
  const projectWebsiteTemplate = path.resolve('./src/templates/ProjectWebsite/index.tsx');
  const tagTemplate = path.resolve('./src/templates/Tag/index.tsx');

  const { data, errors } = await graphql(
    `
      {
        allContentfulPage {
          pages: edges {
            node {
              slug
            }
          }
        }
        allContentfulPost {
          posts: edges {
            node {
              slug
            }
          }
          postTags: distinct(field: tags)
        }
        allContentfulProject {
          projects: edges {
            node {
              slug
              tags
            }
          }
          projectTags: distinct(field: tags)
        }
      }
    `,
  );

  if (errors) {
    throw errors;
  }

  const { allContentfulPage, allContentfulPost, allContentfulProject } = data;
  const { pages } = allContentfulPage;
  const { postTags, posts } = allContentfulPost;
  const { projectTags, projects } = allContentfulProject;
  const tags = [...new Set([...postTags, ...projectTags])];

  pages.forEach((edge) => {
    const { slug } = edge.node;

    createPage({
      path: slug,
      component: pageTemplate,
      context: {
        slug,
      },
    });
  });

  posts.forEach((edge, index) => {
    const { slug } = edge.node;

    createPage({
      path: `/blog/${slug}`,
      component: postTemplate,
      context: {
        slug,
        previous: getPrevious(posts, index),
        next: getNext(posts, index),
      },
    });
  });

  projects.forEach((edge, index) => {
    const { slug } = edge.node;

    createPage({
      path: `/projects/${slug}`,
      component: edge.node.tags.includes('website') ? projectWebsiteTemplate : projectDefaultTemplate,
      context: {
        slug,
        previous: getPrevious(projects, index),
        next: getNext(projects, index),
      },
    });
  });

  tags.forEach((tag) => {
    createPage({
      component: tagTemplate,
      path: `/tags/${tag}`,
      context: {
        tag,
      },
    });
  });
};
