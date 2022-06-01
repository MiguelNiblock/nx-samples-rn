import React from 'react';
import { render } from '@testing-library/react';
import { NativeBaseProvider, Box } from 'native-base';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <NativeBaseProvider>
        <Box>Hello from native base</Box>
      </NativeBaseProvider>
    );
    expect(baseElement).toBeTruthy();
    // expect(baseElement).toMatchSnapshot();
  });
});
