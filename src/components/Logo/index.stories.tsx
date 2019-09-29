/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/react';
import React from 'react';
import Logo from '.';
import logo from './__fixtures__';

storiesOf('Logo', module).add('default', () => <Logo {...logo} />);
