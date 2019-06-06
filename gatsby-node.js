const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve('./src/templates/Project/index.jsx');

  return graphql(
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

    const projects = result.data.allContentfulProject.edges;

    projects.forEach(project => {
      createPage({
        path: `/projects/${project.node.slug}`,
        component: projectTemplate,
        context: {
          slug: project.node.slug,
        },
      });
    });
  });
};
