/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/react';
import React from 'react';
import Pagination from '.';
import { next, previous } from './__fixtures__';

storiesOf('Pagination', module).add('default', () => <Pagination next={next} previous={previous} routes={[]} />);
