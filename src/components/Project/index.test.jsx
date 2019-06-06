import React from 'react';
import renderer from 'react-test-renderer';
import Project from '.';

describe('Project component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Project title="Project Title" slug="project-title" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
