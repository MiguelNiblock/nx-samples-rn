import React from 'react';

import { View, Text } from 'react-native';
import { platformName } from './platformName';
/* eslint-disable-next-line */
export interface AppProps {}

export function App(props: AppProps) {
  return (
    <View>
      <Text>{`Platform is ${platformName}`}</Text>
    </View>
  );
}

export default App;
