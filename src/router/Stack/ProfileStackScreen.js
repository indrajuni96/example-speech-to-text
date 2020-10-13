import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import { screenOptions } from './config'
import { Profile } from '../../pages'

const ProfileStack = createStackNavigator()

export default function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={screenOptions}>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  )
}