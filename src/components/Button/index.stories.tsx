/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from '.';

storiesOf('Button', module)
  .add('default', () => <Button>Content</Button>)
  .add('link', () => <Button href="#">Content</Button>);
