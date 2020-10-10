import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { screenOptions } from './config'
import { Login } from '../../pages'

const AuthStack = createStackNavigator()

export default function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  )
}