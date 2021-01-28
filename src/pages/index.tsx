import { PageProps } from 'gatsby';
import React from 'react';
import Button from '../components/Button';
import Column from '../components/Column';
import Grid from '../components/Grid';
import Icons from '../components/Icons';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Row from '../components/Row';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Typography from '../components/Typography';
import { useIndexPage } from '../hooks';
import githubIcon from '../images/icons/github.svg';
import instagramIcon from '../images/icons/instagram.svg';
import linkedinIcon from '../images/icons/linkedin.svg';
import twitterIcon from '../images/icons/twitter.svg';

const IndexPage: React.FC<PageProps> = () => {
  const { allContentfulProject } = useIndexPage();
  const { edges: projects } = allContentfulProject;

  return (
    <Layout>
      <SEO />

      <Section appearance="dark" isFull>
        <Grid align="center" justify="center">
          <Typography textAlign="center">
            <h1
              style={{
                fontSize: '20vmin',
              }}
            >
              Hello.
            </h1>
          </Typography>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <h2>About</h2>
          <p>
            My name is Marco and I am living in Germany. I love designing and developing rich web applications with user
            experience in mind. I like solving problems, designing clean interfaces and constantly being in move to
            learn new things.
          </p>
          <Row>
            <Column span={6}>
              <h3>Graphic Design</h3>
              <p>
                From the initial sketch and visualization to the finished outcome, I craft creative solutions for all
                aspects of design. Starting with a prototype give you a quick look how the result might look and feel.
              </p>
            </Column>
            <Column span={6}>
              <h3>Web Development</h3>
              <p>
                I am using the latest web-technologies along with clean and well structured code to produce a seamless
                user experience. All my websites are coded with my bare hands from scratch.
              </p>
            </Column>
            <Column span={6}>
              <h3>Optimization</h3>
              <p>
                I think it is important to optimize and further improve a site. Adding SEO strategies and going for web
                performance are key features to provide a rich user experience and to make your visitors happy.
              </p>
            </Column>
          </Row>
          <p>
            <Button to="/about">More about me</Button>
          </p>
        </Grid>
      </Section>

      <Section appearance="dark">
        <Grid>
          <Typography textAlign="center">
            <h2>Work</h2>
            <p>Take a look at some of my projects I’ve been working on.</p>
            <Projects projects={projects.map((project) => project.node)} />
            <p>
              <Button to="/projects">See more Work</Button>
            </p>
          </Typography>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <h2>Want to create something?</h2>
          <p>Or just have a chat? Get in touch with me.</p>
          <Icons
            icons={[
              {
                alt: 'GitHub',
                id: 'github',
                src: githubIcon,
                url: 'https://github.com/marcobiedermann',
              },
              {
                alt: 'Twitter',
                id: 'twitter',
                src: twitterIcon,
                url: 'https://twitter.com/BiedermannMarco',
              },
              {
                alt: 'LinkedIn',
                id: 'linkedin',
                src: linkedinIcon,
                url: 'https://www.linkedin.com/in/biedermannmarco/',
              },
              {
                alt: 'Instagram',
                id: 'instagram',
                src: instagramIcon,
                url: 'https://www.instagram.com/marcobiedermann/',
              },
            ]}
          />
        </Grid>
      </Section>
    </Layout>
  );
};

export default IndexPage;
