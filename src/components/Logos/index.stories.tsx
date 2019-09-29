/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/react';
import React from 'react';
import Logos from '.';
import logos from './__fixtures__';

storiesOf('Logos', module).add('default', () => <Logos logos={logos} />);
