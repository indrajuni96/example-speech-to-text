import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Example, ListLearning, CustomDrawerContent, History } from '../pages'

const Drawer = createDrawerNavigator()
const RootStack = createStackNavigator()
const HomeStack = createStackNavigator()
const HistoryStack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        // headerShown: false,   
        gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
      initialRouteName="ListLearning" >
      <HomeStack.Screen name="Example"
        component={Example}
        options={{ gestureEnabled: false }} />
      <HomeStack.Screen name="ListLearning" component={ListLearning} />
    </HomeStack.Navigator >
  )
}

const HistoryStackScreen = () => {
  return (
    <HistoryStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
      <HistoryStack.Screen name="History" component={History} />
    </HistoryStack.Navigator>
  )
}

const DrawerScreen = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="History" component={HistoryStackScreen} />
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