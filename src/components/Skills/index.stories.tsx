/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/react';
import React from 'react';
import Skills from '.';
import skills from './__fixtures__';

storiesOf('Skills', module).add('default', () => <Skills skills={skills} />);
