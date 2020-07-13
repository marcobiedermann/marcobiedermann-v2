/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-unused-vars */

import React from 'react';
import { I18nextProvider } from 'react-i18next';
import renderer from 'react-test-renderer';
import Experience from '.';
import i18n from '../../i18n';
import experience from './__fixtures__';

describe('Experience component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <Experience {...experience} />
        </I18nextProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render without `endDate` correctly', () => {
    const { endDate, ...experienceWithoutEndDate } = experience;

    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <Experience {...experienceWithoutEndDate} />
        </I18nextProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
