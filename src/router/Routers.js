import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Example, ListLearning } from '../pages'

const RootStack = createStackNavigator()
const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ListLearning">
      <RootStack.Screen name="Example" component={Example} />
      <RootStack.Screen name="ListLearning" component={ListLearning} />
    </RootStack.Navigator>
  )
}

export default function Routers() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )
}
