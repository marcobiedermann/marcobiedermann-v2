/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/react';
import React from 'react';
import Experiences from '.';
import experiences from './__fixtures__';

storiesOf('Experiences', module).add('default', () => <Experiences experiences={experiences} />);
