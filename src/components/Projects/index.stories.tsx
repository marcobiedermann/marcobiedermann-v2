/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/react';
import React from 'react';
import Projects from '.';
import projects from './__fixtures__';

storiesOf('Projects', module).add('default', () => <Projects projects={projects} />);
