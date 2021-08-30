import React from 'react';
import {render} from '@testing-library/react-native';
import Button from './Button';

test('Button Test', () => {
  const {getByText} = render(<Button title={'Hello World'} />);

  expect(() => getByText('Gaga')).toThrowError();
  expect(getByText('Hello World')).toBeTruthy();
});
