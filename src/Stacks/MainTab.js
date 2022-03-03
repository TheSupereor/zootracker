import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CustomTabBar from "../Components/CustomTabBar";

import CadernoStack from "./CadernoStack";
import Camera from '../Screens/Camera'
import ExploreStack from './ExploreStack'
import FeedbackStack from './FeedbackStack'

//iniciando o navegador para criar uma stack
//stacks são telas que se ligam através do topo da tela
//ou navegam entre si
const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
      initialRouteName="Caderno de campo"
      screenOptions={{
          headerShown: true,
          headerStyle: { 
            backgroundColor: "#F8F7F2",
          },
      }}
      tabBar={props => <CustomTabBar {...props}/>}
    >
        <Tab.Screen name="Caderno de campo" component={CadernoStack} options={{
          headerShown: false,
          title: 'Caderno de campo',
          headerStyle: {
            backgroundColor: '#F8F7F2',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: '100',
            fontFamily: 'Roboto'
          },
        }} />
        <Tab.Screen name="Câmera" component={Camera} />
        <Tab.Screen name="ExploreStack" component={ExploreStack} options={{
          headerShown: false,
        }}/>
        <Tab.Screen name="FeedbackStack" component={FeedbackStack} options={{
          headerShown: false
        }}/> 
    </Tab.Navigator>
)
 