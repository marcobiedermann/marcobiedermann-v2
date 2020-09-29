/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars */

import React from 'react';
import renderer from 'react-test-renderer';
import Experience from '.';
import experience from './__fixtures__';

describe('Experience component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Experience {...experience} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render without `endDate` correctly', () => {
    const { endDate, ...experienceWithoutEndDate } = experience;

    const tree = renderer.create(<Experience {...experienceWithoutEndDate} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
