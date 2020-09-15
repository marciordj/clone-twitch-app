import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import Following from './components/screens/Following';
import Browse from './components/screens/Browse';
import ComingSoon from './components/screens/ComingSoon';
import Esports from './components/screens/Esports';
import colors from './styles/colors';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes = () => {

  return (
  <NavigationContainer>
    <Navigator>
      <Screen name='Following' component={Following} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <Ionicons name='md-heart' size={size} color={focused ? colors.purple : colors.black} />
          )
        }
      }} />

      <Screen name='Discover' component={ComingSoon} options={{
        tabBarIcon: ({ size, focused}) => {
          return (
            <MaterialCommunityIcons name='compass-outline' size={size} color={focused ? colors.purple : colors.black} />
          )
        }
      }} />

      <Screen name='Browse' component={Browse} options={{
        tabBarIcon: ({size,focused}) => {
          return (
            <Ionicons name='md-browsers' size={size} color={focused ? colors.purple : colors.black} />
          )
        }
      }} />
      <Screen name='Esports' component={Esports} options={{
        tabBarIcon: ({size, focused}) => {
          return (
            <MaterialCommunityIcons name='trophy-outline' size={size} color={focused ? colors.purple : colors.black} />
          )
        }
      }} />
    </Navigator>
  </NavigationContainer>

  )
}



export default Routes;