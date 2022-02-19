import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import FeedBack from "../Screens/FeedBack";
import SobreNos from "../Screens/SobreNos";
import Glossario from "../Screens/Glossario";

//iniciando o navegador para criar uma stack
//stacks são telas que se ligam através do topo da tela
//ou navegam entre si
const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Feedback"
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#F8F7F2',
      },
    }}
  >
    <Stack.Screen name="Feedback" component={FeedBack} />
    <Stack.Screen name="Sobre Nós" component={SobreNos} />
    <Stack.Screen name="Glossario" component={Glossario} />
  </Stack.Navigator>
)
