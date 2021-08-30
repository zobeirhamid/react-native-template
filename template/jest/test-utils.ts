import React from 'react';
import {render as RNRender} from '@testing-library/react-native';

function render(component: React.ReactElement<any>, options?: any) {
  return RNRender(component, {
    ...options,
  });
}

export * from '@testing-library/react-native';
export {render};
