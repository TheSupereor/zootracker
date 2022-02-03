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
  return(
    <Stack.Navigator
      initialRouteName="Informações"
      screenOptions={{
        headerShown: true,
        title: props.route.params.AnimalData,
        //headerTitle: props => <AnimalInfoHeader {...props} />,
        header: props => <AnimalInfoHeader {...props} />,
        headerStyle: {
          backgroundColor: '#F8F7F2',
        },
      }}
    >
      <Stack.Screen name="Informações" component={InfoGeral} />
      <Stack.Screen name="Localização" component={Local} />
      <Stack.Screen name="Anatomia" component={Pegadas} />
      <Stack.Screen name="Nomes" component={Nomes} />
    </Stack.Navigator>
  )
}
