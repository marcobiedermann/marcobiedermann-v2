import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';

const projects = [
  'marcobiedermann/codewars',
  'marcobiedermann/contacts',
  'marcobiedermann/d3-charts',
  'marcobiedermann/freeCodeCamp',
  'marcobiedermann/gatsby-shopify',
  'marcobiedermann/html-style-guide',
  'marcobiedermann/image-service',
  'marcobiedermann/leetcode',
  'marcobiedermann/marcobiedermann-cli',
  'marcobiedermann/marcobiedermann-v2',
  'marcobiedermann/password-generator',
  'marcobiedermann/pokeapi-graphql',
  'marcobiedermann/qr-code-generator',
  'marcobiedermann/react-boilerplate',
  'marcobiedermann/search-engine-optimization',
  'marcobiedermann/spotify-clone',
  'marcobiedermann/ui',
  'marcobiedermann/user-service',
  'marcobiedermann/weather-app',
];

const StatusPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Section>
        <Grid>
          <h1>Status Dashboard</h1>
          <p>Showing the statuses of my project deploys and CI tests.</p>

          <ul>
            {projects.map((project) => (
              <li key={project}>
                <div>
                  <h3>
                    <a href={`https://github.com/${project}`} target="_blank" rel="noopener noreferrer">
                      {project}
                    </a>
                  </h3>

                  <ul>
                    <li>
                      <a href={`https://github.com/${project}`} target="_blank" rel="noopener noreferrer">
                        <img
                          src={`https://img.shields.io/github/stars/${project}?style=social`}
                          alt={`Star ${project} on GitHub`}
                        />
                      </a>
                    </li>

                    <li>
                      <a href={`https://travis-ci.com/${project}`} target="_blank" rel="noopener noreferrer">
                        <img src={`https://img.shields.io/travis/com/${project}`} alt="Build Status" />
                      </a>
                    </li>
                    <li>
                      <a href={`https://david-dm.org/${project}`} target="_blank" rel="noopener noreferrer">
                        <img src={`https://img.shields.io/david/${project}`} alt="dependencies Status" />
                      </a>
                    </li>
                    <li>
                      <a href={`https://david-dm.org/${project}?type=dev`} target="_blank" rel="noopener noreferrer">
                        <img src={`https://img.shields.io/david/dev/${project}`} alt="devDependencies Status" />
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
