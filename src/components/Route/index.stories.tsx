/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/react';
import React from 'react';
import Route from '.';
import route from './__fixtures__';

storiesOf('Route', module).add('default', () => <Route {...route} />);
