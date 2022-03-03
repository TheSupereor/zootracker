import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import Caderno from "../Screens/Caderno";
import NovoRegistroCampo from "../Screens/Caderno/NovoRegistroCampo";

//iniciando o navegador para criar uma stack
//stacks são telas que se ligam através do topo da tela
//ou navegam entre si
const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Caderno"
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#F8F7F2',
      },
    }}
  >
    <Stack.Screen name="Caderno" component={Caderno} />
    <Stack.Screen name="NovoRegistroCampo" component={NovoRegistroCampo} />
  </Stack.Navigator>
)
