/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/react';
import React from 'react';
import Experience from '.';
import experience from './__fixtures__';

storiesOf('Experience', module).add('default', () => <Experience {...experience} />);
