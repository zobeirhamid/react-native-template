import React from 'react';
import {render as RNRender} from '@testing-library/react-native';

import withTheme from 'library/higherOrderComponents/withTheme';

function render(component: React.ReactElement<any>, options?: any) {
  return RNRender(component, {
    ...options,
    wrapper: ({children}) => withTheme(() => children)({}),
  });
}

export * from '@testing-library/react-native';
export {render};
