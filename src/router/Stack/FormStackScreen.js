import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import { screenOptions } from './config'
import { FormExample } from '../../pages'

const FormStack = createStackNavigator()

export default function FormStackScreen() {
  return (
    <FormStack.Navigator
      screenOptions={screenOptions}>
      <FormStack.Screen name="FormExample" component={FormExample} />
    </FormStack.Navigator>
  )
}