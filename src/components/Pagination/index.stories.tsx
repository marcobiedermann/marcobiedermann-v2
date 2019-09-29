/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/react';
import React from 'react';
import Pagination from '.';

storiesOf('Pagination', module).add('default', () => <Pagination routes={[]} />);
