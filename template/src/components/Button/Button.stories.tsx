import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Button from './Button';

storiesOf('Test Component', module).add('example', () => (
  <Button title={'Hello World'} />
));
