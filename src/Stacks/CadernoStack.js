import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import Camp from "./Camp";
// import Collect from "./Collect";

//iniciando o navegador para criar uma stack
//stacks são telas que se ligam através do topo da tela
//ou navegam entre si
const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Campos"
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#F8F7F2',
      },
    }}
  >
    <Stack.Screen name="Campos" 
      component={Camp} 
      options={{
        headerShown: false,
      }}
    />
    {/* <Stack.Screen name="Coletas de Campo" 
      component={Collect}
      options={{
        headerShown: false,
      }}
    /> */}
  </Stack.Navigator>
)
