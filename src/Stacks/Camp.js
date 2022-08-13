import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import NewRegisterHeader from '../Screens/Caderno/NewRegisterHeader'

import NovoCampo from "../Screens/Caderno/NovoRegistroCampo/index";
import Caderno from "../Screens/Caderno/ListaCampos";
import Coletas from "./Collect";

//iniciando o navegador para criar uma stack
//stacks são telas que se ligam através do topo da tela
//ou navegam entre si
const Stack = createStackNavigator();

export default (props) => {
  //console.log(props)

  return(
    <Stack.Navigator
      initialRouteName="Campos"
      screenOptions={{
        header: props => <NewRegisterHeader {...props} 
        // data={itemExemplo} 
        />,
        animationEnabled: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen name="Lista de Campos" component={Caderno}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Novo Campo" component={NovoCampo}/>
      <Stack.Screen name="Coletas de Campo" component={Coletas}
      options={{
        headerShown: false
      }}
      />
    </Stack.Navigator>
  )
}
