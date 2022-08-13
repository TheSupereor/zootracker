import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import NewRegisterHeader from '../Screens/Caderno/NewRegisterHeader'

import Coletas from "../Screens/Caderno/ListaColetas/index";
import NovaColeta from '../Screens/Caderno/NovoRegistroColeta/index'

//iniciando o navegador para criar uma stack
//stacks são telas que se ligam através do topo da tela
//ou navegam entre si
const Stack = createStackNavigator();

export default (props) => {
  //console.log(props)

  return(
    <Stack.Navigator
      initialRouteName="Coletas"
      screenOptions={{
        header: props => <NewRegisterHeader {...props} 
        // data={itemExemplo} 
        />,
        animationEnabled: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen name="Coletas" component={Coletas}
      
      />
      <Stack.Screen name="Nova Coleta" component={NovaColeta}/>
    </Stack.Navigator>
  )
}
