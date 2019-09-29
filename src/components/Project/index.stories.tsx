/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/react';
import React from 'react';
import Project from '.';
import project from './__fixtures__';

storiesOf('Project', module).add('default', () => <Project {...project} />);
