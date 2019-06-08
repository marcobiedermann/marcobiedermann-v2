const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve('./src/templates/Page/index.jsx');
  const projectTemplate = path.resolve('./src/templates/Project/index.jsx');

  const pages = graphql(
    `
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allContentfulPage.edges.forEach(page => {
      createPage({
        path: page.node.slug,
        component: pageTemplate,
        context: {
          slug: page.node.slug,
        },
      });
    });
  });

  const projects = graphql(
    `
      {
        allContentfulProject {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allContentfulProject.edges.forEach(project => {
      createPage({
        path: `/projects/${project.node.slug}`,
        component: projectTemplate,
        context: {
          slug: project.node.slug,
        },
      });
    });
  });

  return Promise.all([pages, projects]);
};
