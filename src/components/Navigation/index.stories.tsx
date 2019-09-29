/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/react';
import React from 'react';
import Navigation from '.';

storiesOf('Navigation', module).add('default', () => <Navigation routes={[]} />);
