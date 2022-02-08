import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CustomTabBar from "../Components/CustomTabBar";

import Caderno from '../Screens/Caderno'
import Camera from '../Screens/Camera'
import ExploreStack from './ExploreStack'
import Explorar from '../Screens/Explorar'
import Feedback from '../Screens/FeedBack'

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
        <Tab.Screen name="Caderno de campo" component={Caderno} options={{
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
        <Tab.Screen name="Feedback" component={Feedback} options={{
          title: 'Feedback',
          headerStyle: {
            backgroundColor: '#F8F7F2',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: '100',
            fontFamily: 'Roboto'
          },
        }}/> 
    </Tab.Navigator>
)
 