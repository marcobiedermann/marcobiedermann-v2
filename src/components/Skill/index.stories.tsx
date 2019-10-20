/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/react';
import React from 'react';
import Skill from '.';
import skill from './__fixtures__';

storiesOf('Skill', module).add('default', () => <Skill {...skill} />);
