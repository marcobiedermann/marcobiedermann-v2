import { PageProps } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import Column from '../components/Column';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Row from '../components/Row';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Typography from '../components/Typography';
import { useIndexPage } from '../hooks';
import behanceIcon from '../images/icons/behance.svg';
import dribbbleIcon from '../images/icons/dribbble.svg';
import githubIcon from '../images/icons/github.svg';
import twitterIcon from '../images/icons/twitter.svg';

const IndexPage: React.FC<PageProps> = () => {
  const { allContentfulProject } = useIndexPage();
  const { t } = useTranslation();
  const { edges: projects } = allContentfulProject;

  return (
    <Layout>
      <SEO />

      <Section appearance="dark" isFull>
        <Grid align="center" justify="center">
          <Typography textAlign="center">
            <h1>Marco Biedermann</h1>
            <h2>Full-Stack JavaScript Engineer</h2>
          </Typography>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Typography textAlign="center">
            <h2>About</h2>
            <p>
              My name is Marco and I am living in Germany. I love designing and developing rich web applications with
              user experience in mind. I like solving problems, designing clean interfaces and constantly being in move
              to learn new things.
            </p>
            <Row>
              <Column>
                <h3>Graphic Design</h3>
                <p>
                  From the initial sketch and visualization to the finished outcome, I craft creative solutions for all
                  aspects of design. Starting with a prototype give you a quick look how the result might look and feel.
                </p>
              </Column>
              <Column>
                <h3>Web Development</h3>
                <p>
                  I am using the latest web-technologies along with clean and well structured code to produce a seamless
                  user experience. All my websites are coded with my bare hands from scratch.
                </p>
              </Column>
              <Column>
                <h3>Optimization</h3>
                <p>
                  I think it is important to optimize and further improve a site. Adding SEO strategies and going for
                  web performance are key features to provide a rich user experience and to make your visitors happy.
                </p>
              </Column>
            </Row>
            <p>
              <Button to="/about">More about me</Button>
            </p>
          </Typography>
        </Grid>
      </Section>

      <Section appearance="dark">
        <Grid>
          <Typography textAlign="center">
            <h2>Work</h2>
            <p>Take a look at some of my projects I’ve been working on.</p>
            <Projects projects={projects.map((project) => project.node)} />
            <p>
              <Button to="/projects">{t('project:more work')}</Button>
            </p>
          </Typography>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Typography textAlign="center">
            <h2>Contact</h2>
            <p>Interested in working together? Get in touch with me.</p>
            <ul>
              <li>
                <a href="https://twitter.com/m412c0b" target="_blank" rel="noopener noreferrer">
                  <img src={twitterIcon} alt="Twitter" width="32" height="32" />
                </a>
              </li>
              <li>
                <a href="https://dribbble.com/marcobiedermann" target="_blank" rel="noopener noreferrer">
                  <img src={dribbbleIcon} alt="dribbble" width="32" height="32" />
                </a>
              </li>
              <li>
                <a href="https://behance.net/marcobiedermann" target="_blank" rel="noopener noreferrer">
                  <img src={behanceIcon} alt="Behance" width="32" height="32" />
                </a>
              </li>
              <li>
                <a href="https://github.com/marcobiedermann" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub" width="32" height="32" />
                </a>
              </li>
            </ul>
          </Typography>
        </Grid>
      </Section>
    </Layout>
  );
};

export default IndexPage;
