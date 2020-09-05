import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import { screenOptions } from './config'
import { Example, ListLearning, Game } from '../../pages'

const HomeStack = createStackNavigator()

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={screenOptions}
      initialRouteName="ListLearning" >
      <HomeStack.Screen name="Example" component={Example} />
      <HomeStack.Screen name="Game" component={Game} />
      <HomeStack.Screen name="ListLearning" component={ListLearning} />
    </HomeStack.Navigator >
  )
}