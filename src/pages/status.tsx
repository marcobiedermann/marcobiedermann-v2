import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { useStatusPage } from '../hooks/status';

const StatusPage: FC<PageProps> = () => {
  const { github } = useStatusPage();

  return (
    <Layout>
      <Section>
        <Grid>
          <h1>Status Dashboard</h1>
          <p>Showing the statuses of my project deploys and CI tests.</p>

          <ul>
            {github.search.edges.map(({ node }) => (
              <li key={node.id}>
                <div>
                  <h3>
                    <a
                      href={`https://github.com/marcobiedermann/${node.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      marcobiedermann/{node.name}
                    </a>
                  </h3>
                  <p>{node.description}</p>

                  <ul>
                    <li>
                      <a
                        href={`https://github.com/marcobiedermann/${node.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`https://img.shields.io/github/stars/marcobiedermann/${node.name}?style=social`}
                          alt={`Star marcobiedermann/${node.name} on GitHub`}
                        />
                      </a>
                    </li>

                    <li>
                      <a
                        href={`https://travis-ci.com/marcobiedermann/${node.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`https://img.shields.io/travis/com/marcobiedermann/${node.name}`}
                          alt="Build Status"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href={`https://david-dm.org/marcobiedermann/${node.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`https://img.shields.io/david/marcobiedermann/${node.name}`}
                          alt="dependencies Status"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href={`https://david-dm.org/marcobiedermann/${node.name}?type=dev`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`https://img.shields.io/david/dev/marcobiedermann/${node.name}`}
                          alt="devDependencies Status"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </Grid>
      </Section>
    </Layout>
  );
};

export default StatusPage;
