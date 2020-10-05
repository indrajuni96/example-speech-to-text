import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { AuthStackScreen } from './Stack'
import { DrawerScreen } from './Drawer'
import { Loading } from '../components'

const RootStack = createStackNavigator()

// root stack and auth stack
const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode={false}>
      <RootStack.Screen name="Auth" component={AuthStackScreen} />
      <RootStack.Screen name="App" component={DrawerScreen} />
    </RootStack.Navigator>
  )
}

export default function Routers() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  if (isLoading) {
    return <Loading splash />
  }

  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )
}