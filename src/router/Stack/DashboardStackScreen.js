import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import { screenOptions } from './config'
import { Example, Dashboard, Game } from '../../pages'

const DashboardStack = createStackNavigator()

export default function DashboardStackScreen() {
  return (
    <DashboardStack.Navigator
      screenOptions={screenOptions} >
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
      <DashboardStack.Screen name="Example" component={Example} />
      <DashboardStack.Screen name="Game" component={Game} />
    </DashboardStack.Navigator >
  )
}