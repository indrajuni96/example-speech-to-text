import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { DrawerScreen } from './Drawer'

const RootStack = createStackNavigator()

// root stack and aur=th stack
const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode={false}>
      <RootStack.Screen name="App" component={DrawerScreen} />
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