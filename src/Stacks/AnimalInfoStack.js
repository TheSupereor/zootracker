import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import AnimalInfoHeader from '../Screens/AnimalInfo/AnimalInfoHeader'

import InfoGeral from "../Screens/AnimalInfo/InfoGeral/index";
import Local from '../Screens/AnimalInfo/Local/index'
import Nomes from '../Screens/AnimalInfo/Nomes/index'
import Pegadas from '../Screens/AnimalInfo/Pegadas/index'

//iniciando o navegador para criar uma stack
//stacks são telas que se ligam através do topo da tela
//ou navegam entre si
const Stack = createStackNavigator();

export default (props) => {
  //console.log(props)
  // receber id do animal e fazer requisição com props.route.params.AnimalData
  const itemExemplo = {
    id: props.route.params.AnimalData,
    CienName: 'Mazama americana',
    Name: 'Veado-mateiro'
  }

  return(
    <Stack.Navigator
      initialRouteName="Informações"
      screenOptions={{
        headerShown: true,
        title: itemExemplo.Name,
        header: props => <AnimalInfoHeader {...props} data={itemExemplo} />,
        animationEnabled: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen name="Informações" component={InfoGeral} initialParams={{...itemExemplo}}/>
      <Stack.Screen name="Localização" component={Local} initialParams={{...itemExemplo}}/>
      <Stack.Screen name="Anatomia" component={Pegadas} initialParams={{...itemExemplo}}/>
      <Stack.Screen name="Nomes" component={Nomes} initialParams={{...itemExemplo}}/>
    </Stack.Navigator>
  )
}
