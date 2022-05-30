import React from 'react';

import { View, Text } from 'react-native';
import { platformName } from './platformName';
import { Box, NativeBaseProvider } from 'native-base';
/* eslint-disable-next-line */
export interface AppProps {}

export function App(props: AppProps) {
  return (
    <NativeBaseProvider>
      <View>
        <Text>{`Platform is ${platformName}`}</Text>
        <Box>Native base works</Box>
      </View>
    </NativeBaseProvider>
  );
}

export default App;
