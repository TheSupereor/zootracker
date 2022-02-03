import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MainTab from './src/Stacks/MainTab'
import InitStack from './src/Stacks/InitStack';
//import CadernoStack from './src/Stacks/CadernoStack';

export default () => {

  return(
    <NavigationContainer>
      <SafeAreaProvider>
        <InitStack />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
