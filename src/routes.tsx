import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Following from './components/screens/Following';
import Browse from './components/screens/Browse';
import Discover from './components/screens/Discover';
import Esports from './components/screens/Esports';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes = () => {

  return (
  <NavigationContainer>
    <Navigator>
      <Screen name='Following' component={Following} />
      <Screen name='Discover' component={Discover} />
      <Screen name='Browse' component={Browse} />
      <Screen name='Esports' component={Esports} />
    </Navigator>
  </NavigationContainer>

  )
}



export default Routes;