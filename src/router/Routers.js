import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Example, ListLearning, CustomDrawerContent } from '../pages'

const Drawer = createDrawerNavigator()
const RootStack = createStackNavigator()
const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        // headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
      initialRouteName="ListLearning">
      <HomeStack.Screen name="Example" component={Example} />
      <HomeStack.Screen name="ListLearning" component={ListLearning} />
    </HomeStack.Navigator>
  )
}

const DrawerScreen = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeStackScreen} />
    </Drawer.Navigator>
  )
}

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