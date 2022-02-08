import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import Explorar from "../Screens/Explorar";
import AnimalInfoStack from "./AnimalInfoStack";

//iniciando o navegador para criar uma stack
//stacks são telas que se ligam através do topo da tela
//ou navegam entre si
const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Explorar"
    screenOptions={{
      headerShown: true,
      headerTitle:"Explorar",
      headerStyle: {
        backgroundColor: '#F8F7F2',
      },
    }}
  >
    <Stack.Screen name="Explorar" component={Explorar} />
    <Stack.Screen name="AnimalInfo" component={AnimalInfoStack} options={{
      headerShown: false,
    }}/>
  </Stack.Navigator>
)
