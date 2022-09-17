import React, { useEffect } from "react";
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
	// Dados que vem na rota: ameaça, cienName, comportamento, familia, habitats, habitos, image, info, names, id
  const animalData = props.route.params.AnimalData;
  const dados1 = props.route.params.dados1[0];
  const dados2 = props.route.params.dados2[0];
  const cienName = animalData.cienName;
  const names = animalData.names.join(', ');
  
  // const itemExemplo = {
  //   id: props.route.params.AnimalData,
  //   CienName: 'Mazama americana',
  //   Name: 'Veado-mateiro'
  // }

  const headerData = {
    cienName,
    names
  };

  const infoData = {
		familia: animalData.familia,
		Ordem: 'Artiodactyla',
		Nivel: animalData.ameaca,
		InfoGeral: 'Possuem comprimento total do corpo de aproximadamente 114 cm e peso variando de 17 a 23 kg.',
		comportamento: 'São observados solitários, mas também vistos em pares, predominantes noturnos e crepusculares',
		habitos: animalData.habitos,
		habitats: animalData.habitats
	}

  return(
    <Stack.Navigator
      initialRouteName="Informações"
      screenOptions={{
        headerShown: true,
        title: animalData.cienName,
        header: props => <AnimalInfoHeader {...props} data={headerData} />,
        animationEnabled: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen name="Informações" component={InfoGeral} initialParams={{...animalData, ...dados1, ...dados2}}/>
      <Stack.Screen name="Localização" component={Local} initialParams={{...animalData, ...dados1, ...dados2}}/>
      <Stack.Screen name="Anatomia" component={Pegadas} initialParams={{...animalData, ...dados1, ...dados2}}/>
      <Stack.Screen name="Nomes" component={Nomes} initialParams={{...animalData, ...dados1, ...dados2}}/>
    </Stack.Navigator>
  )
}
