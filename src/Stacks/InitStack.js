import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import Preload from '../Screens/Preload'
import MainTab from "./MainTab";

//iniciando o navegador para criar uma stack
//stacks são telas que se ligam através do topo da tela
//ou navegam entre si
const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
      initialRouteName="preload"
      screenOptions={{
          headerShown: false
      }}
    >
        <Stack.Screen name="preload" component={Preload} />
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
)
