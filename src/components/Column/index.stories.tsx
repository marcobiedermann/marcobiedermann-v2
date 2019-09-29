/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/react';
import React from 'react';
import Column from '.';

storiesOf('Column', module).add('default', () => <Column>Content</Column>);
