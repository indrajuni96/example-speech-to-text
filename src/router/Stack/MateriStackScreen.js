import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import { screenOptions } from './config'
import { Materi } from '../../pages'

const MateriStack = createStackNavigator()

export default function MateriStackScreen() {
  return (
    <MateriStack.Navigator
      screenOptions={screenOptions}>
      <MateriStack.Screen name="Materi" component={Materi} />
    </MateriStack.Navigator>
  )
}